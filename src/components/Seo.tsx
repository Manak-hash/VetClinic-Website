import { useEffect } from 'react'
import { useI18n } from '../i18n'
import { LOCALES, LOCALE_META, SITE_URL, pathFor, type Locale, type RouteId } from '../i18n/config'

/* ------------------------------------------------------------------ */
/* SEO head locale-aware : title/desc traduits, canonical par locale,  */
/* hreflang fr/en/ru/ar + x-default, OG. JSON-LD via jsonld.ts         */
/* ------------------------------------------------------------------ */

interface SeoProps {
  routeId: RouteId
  title: string
  description: string
  jsonLd?: object[]
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const sel = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(sel)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function Seo({ routeId, title, description, jsonLd = [] }: SeoProps) {
  const { locale } = useI18n()

  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', LOCALE_META[locale].htmlLang.replace('-', '_'))
    upsertMeta('property', 'og:site_name', 'Clinique Vétérinaire Maârif')

    // Canonical = la page DANS SA locale
    upsertLink('canonical', `${SITE_URL}${pathFor(routeId, locale)}`)

    // hreflang : une entrée par locale + x-default vers la locale par défaut
    for (const l of LOCALES) {
      upsertLink('alternate', `${SITE_URL}${pathFor(routeId, l)}`, LOCALE_META[l].htmlLang)
    }
    upsertLink('alternate', `${SITE_URL}${pathFor(routeId, 'fr')}`, 'x-default')

    const nodes: HTMLScriptElement[] = []
    for (const obj of jsonLd) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.textContent = JSON.stringify(obj)
      document.head.appendChild(s)
      nodes.push(s)
    }
    return () => nodes.forEach((n) => n.remove())
  }, [routeId, locale, title, description, jsonLd])

  return null
}

export function localeAlternates(routeId: RouteId): { locale: Locale; path: string }[] {
  return LOCALES.map((l) => ({ locale: l, path: pathFor(routeId, l) }))
}
