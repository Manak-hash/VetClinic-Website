import { mkdirSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

/**
 * Génère les variantes AVIF/WebP responsives des photos de la clinique.
 * Lancé avant chaque build (prebuild dans package.json).
 * Manifest public/img/manifest.json : largeurs disponibles par image,
 * consommé par <ResponsiveImg> pour construire srcset/sizes.
 */

const ROOT = process.cwd()
const SRC = join(ROOT, 'public')
const OUT = join(SRC, 'img')
mkdirSync(OUT, { recursive: true })

// [fichier source, largeurs à générer, qualités]
const IMAGES = [
  { file: 'clinic-hero.jpg', widths: [640, 960, 1280, 1600] },
  { file: 'dr-bassir-with-a-dog.jpeg', widths: [480, 640, 960] },
  { file: 'clinic-interior.jpg', widths: [640, 960, 1280] },
  { file: 'dr-bassir.jpg', widths: [480, 640] },
  { file: 'dr-bassir-providing-a-med-or-vacin.jpeg', widths: [480, 640, 960] },
  { file: 'surgery-1.jpg', widths: [480, 640] },
  { file: 'surgery-2.jpg', widths: [480, 640] },
  { file: 'surgery-3.jpg', widths: [480, 640] },
  { file: 'xray-leg.jpg', widths: [480, 640] },
  { file: 'xray-unidentified.jpg', widths: [480, 640] },
]

const QUALITY = { avif: 55, webp: 70 }
const manifest = {}

for (const { file, widths } of IMAGES) {
  const base = file.replace(/\.(jpe?g|png)$/i, '')
  const input = sharp(join(SRC, file))
  const meta = await input.metadata()
  const w0 = meta.width
  manifest[base] = { widths: [], format: 'avif' }

  for (const w of widths) {
    if (w > w0) continue // jamais upscaler
    manifest[base].widths.push(w)
    for (const [fmt, q] of Object.entries(QUALITY)) {
      const buf = await sharp(join(SRC, file))
        .resize({ width: w })
        .toFormat(fmt, { quality: q, effort: fmt === 'avif' ? 4 : undefined })
        .toBuffer()
      await writeFile(join(OUT, `${base}-${w}.${fmt}`), buf)
    }
  }
  // fallback : JPEG réencodé (progressif, taille maîtrisée)
  const jbuf = await sharp(join(SRC, file)).jpeg({ quality: 72, progressive: true, mozjpeg: true }).toBuffer()
  await writeFile(join(OUT, `${base}.jpg`), jbuf)
  manifest[base].fallback = `/img/${base}.jpg`
  const kb = (b) => `${Math.round(b / 1024)}K`
  console.log(`  ${base}: ${manifest[base].widths.join(',')} avif/webp + jpg ${kb(jbuf.length)}`)
}

await writeFile(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2))
console.log(`[img] ${Object.keys(manifest).length} images traitées → public/img/`)
