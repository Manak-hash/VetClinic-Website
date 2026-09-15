/**
 * Extrait la surface éditable des dictionnaires i18n vers content/*.json
 * (source unique pour Sveltia CMS). Relançable à tout moment si les
 * dictionnaires évoluent — mais c'est le JSON qui fait foi ensuite.
 *
 *   node plugins/extract-content.mjs
 */
import { execSync } from 'node:child_process'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const ROOT = join(import.meta.dirname, '..')
const OUT = join(ROOT, 'content')
mkdirSync(OUT, { recursive: true })

const LOCALES = ['fr', 'en', 'ru', 'ar', 'es']

function importDict(loc) {
  const outfile = `/tmp/cvm-dict-${loc}.mjs`
  execSync(
    `npx esbuild src/i18n/${loc}.ts --bundle --format=esm --outfile=${outfile}`,
    { cwd: ROOT, stdio: 'pipe' },
  )
  const dynamicImport = new Function('p', 'return import(p)')
  return dynamicImport(outfile).then((m) => m.default)
}

const dicts = {}
for (const loc of LOCALES) {
  dicts[loc] = await importDict(loc)
}

/* Données non traduites — copie unique (miroir de src/data.ts + reviews.ts) */
const site = {
  phone: '05 22 23 30 95',
  phone2: '05 22 98 96 90',
  urgency: '06 61 49 26 18',
  whatsapp: '212661492618',
  email: 'vetclinicmaarif@gmail.com',
  instagram: 'https://www.instagram.com/clinique_veterinaire_maarif/',
  address_street: '60, Boulevard Bir Anzarane',
  address_zip: '20330',
  founded: '2002',
  lat: 33.5876,
  lng: -7.6333,
  maps_cid: '6748401890204772645',
  rating_value: 4.3,
  rating_count: 175,
}

const META_KEYS = ['home', 'services', 'equipe', 'faq', 'contact', 'zones']
const content = {}
for (const loc of LOCALES) {
  const t = dicts[loc]
  content[loc] = {
    meta: Object.fromEntries(META_KEYS.map((k) => [k, t.meta[k]])),
    hours: {
      label: t.common.hoursLabel,
      table: t.common.hoursTable,
      footer: t.common.footerHours,
      ramadan: t.common.ramadan,
      ramadanNote: t.common.ramadanNote,
      outsideHours: t.equipe.outsideHours,
    },
    reviews: t.home.reviews,
  }
  writeFileSync(
    join(OUT, `editable.${loc}.json`),
    JSON.stringify(content[loc], null, 2) + '\n',
  )
}
writeFileSync(join(OUT, 'site.json'), JSON.stringify(site, null, 2) + '\n')

console.log(`[content] site.json + ${LOCALES.map((l) => `editable.${l}.json`).join(', ')} écrits`)
