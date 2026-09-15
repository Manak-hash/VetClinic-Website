/**
 * Contenu éditable (Sveltia CMS) — surface que Dr Bassir modifie.
 * Les fichiers content/*.json sont la SOURCE DE VÉRITÉ pour ces données ;
 * les dictionnaires i18n ne gardent que la prose statique.
 */
import siteJson from '../content/site.json'
import frJson from '../content/editable.fr.json'
import enJson from '../content/editable.en.json'
import ruJson from '../content/editable.ru.json'
import arJson from '../content/editable.ar.json'
import esJson from '../content/editable.es.json'
import type { Locale } from './i18n/config'

export interface EditableContent {
  meta: Record<
    'home' | 'services' | 'equipe' | 'faq' | 'contact' | 'zones',
    { title: string; description: string }
  >
  hours: {
    label: string
    table: { days: string; hours: string }[]
    footer: string
    ramadan: string
    ramadanNote: string
    outsideHours: string
  }
  reviews: {
    kicker: string
    h2: string
    viewAll: string
    basedOn: string
    rating: string
    items: { author: string; stars: number; when: string; text: string }[]
  }
}

export const SITE: typeof siteJson = siteJson

const EDITABLE: Record<Locale, EditableContent> = {
  fr: frJson as EditableContent,
  en: enJson as EditableContent,
  ru: ruJson as EditableContent,
  ar: arJson as EditableContent,
  es: esJson as EditableContent,
}

export function editableFor(locale: Locale): EditableContent {
  return EDITABLE[locale]
}

/* Ratings structurés (JSON-LD + affichage) — un seul endroit à mettre à jour */
export const RATING_VALUE = SITE.rating_value
export const RATING_COUNT = SITE.rating_count
