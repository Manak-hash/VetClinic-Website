/**
 * Génère les variantes AVIF/WebP responsives des photos de la clinique.
 * Lancé avant chaque build (prebuild dans package.json).
 * Manifest public/img/manifest.json : largeurs disponibles par image,
 * consommé par <ResponsiveImg> pour construire srcset/sizes.
 *
 * Les variantes sont commitées : une image n'est régénérée que si le hash
 * de sa source change (sinon skip) — sinon les builds CI réencodent tout
 * à chaque fois, et le runner 2 cœurs d'Actions met 25 min au lieu de 5 s.
 */

import { mkdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import sharp from 'sharp'

const ROOT = process.cwd()
const SRC = join(ROOT, 'public')
const OUT = join(SRC, 'img')
const STAMP = join(OUT, '.img-hashes.json')
mkdirSync(OUT, { recursive: true })

// [fichier source, largeurs à générer]
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
  { file: 'dr-bassir-in-lab-1.jpeg', widths: [480, 640] },
  { file: 'dr-bassir-in-lab-2.jpeg', widths: [480, 640] },
  { file: 'dr-bassir-in-lab-3.jpeg', widths: [480, 640] },
]

const QUALITY = { avif: 55, webp: 70 }
const oldHashes = existsSync(STAMP) ? JSON.parse(readFileSync(STAMP, 'utf8')) : {}
const newHashes = {}
const manifest = existsSync(join(OUT, 'manifest.json'))
  ? JSON.parse(readFileSync(join(OUT, 'manifest.json'), 'utf8'))
  : {}

const kb = (b) => `${Math.round(b / 1024)}K`
const hashOf = (p) => createHash('sha256').update(readFileSync(p)).digest('hex').slice(0, 16)
// Une variante manquante force aussi la régénération (checkout partiel, etc.)
// On vérifie les largeurs du manifest (certaines configured widths sont
// volontairement absentes : jamais d'upscaling au-delà de la source).
const variantsExist = (base, widths) => {
  const recorded = manifest[base]?.widths ?? widths
  return (
    recorded.every((w) => existsSync(join(OUT, `${base}-${w}.avif`)) && existsSync(join(OUT, `${base}-${w}.webp`))) &&
    existsSync(join(OUT, `${base}.jpg`))
  )
}

let generated = 0
let skipped = 0

for (const { file, widths } of IMAGES) {
  const base = file.replace(/\.(jpe?g|png)$/i, '')
  const inputPath = join(SRC, file)
  const hash = hashOf(inputPath)
  newHashes[base] = hash

  if (oldHashes[base] === hash && variantsExist(base, widths)) {
    skipped++
    continue
  }

  const meta = await sharp(inputPath).metadata()
  const w0 = meta.width
  manifest[base] = { widths: [], format: 'avif' }

  for (const w of widths) {
    if (w > w0) continue // jamais upscaler
    manifest[base].widths.push(w)
    for (const [fmt, q] of Object.entries(QUALITY)) {
      const buf = await sharp(inputPath)
        .resize({ width: w })
        .toFormat(fmt, { quality: q, effort: fmt === 'avif' ? 4 : undefined })
        .toBuffer()
      await writeFile(join(OUT, `${base}-${w}.${fmt}`), buf)
    }
  }
  // fallback : JPEG réencodé (progressif, taille maîtrisée)
  const jbuf = await sharp(inputPath).jpeg({ quality: 72, progressive: true, mozjpeg: true }).toBuffer()
  await writeFile(join(OUT, `${base}.jpg`), jbuf)
  manifest[base].fallback = `/img/${base}.jpg`
  generated++
  console.log(`  ${base}: ${manifest[base].widths.join(',')} avif/webp + jpg ${kb(jbuf.length)}`)
}

writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2))
writeFileSync(STAMP, JSON.stringify(newHashes, null, 2))
console.log(`[img] ${generated} régénérée(s), ${skipped} inchangée(s) — manifest ${Object.keys(manifest).length} images`)
