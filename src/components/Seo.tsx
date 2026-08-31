import { useEffect } from 'react'
import { CLINIC } from '../data'

/* ------------------------------------------------------------------ */
/* SEO head — title/description/canonical + JSON-LD par page           */
/* Sans dépendance : on manipule document.head directement.            */
/* ------------------------------------------------------------------ */

const SITE_URL = 'https://cliniquevetomaarif.ma' // à confirmer à l'achat du domaine (task #53)

interface SeoProps {
  title: string
  description: string
  path: string // ex. '/services/'
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

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function Seo({ title, description, path, jsonLd = [] }: SeoProps) {
  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'fr_MA')
    upsertMeta('property', 'og:site_name', CLINIC.name)
    upsertLink('canonical', `${SITE_URL}${path}`)

    const nodes: HTMLScriptElement[] = []
    for (const obj of jsonLd) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.textContent = JSON.stringify(obj)
      document.head.appendChild(s)
      nodes.push(s)
    }
    return () => nodes.forEach((n) => n.remove())
  }, [title, description, path, jsonLd])

  return null
}
