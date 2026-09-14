/* ------------------------------------------------------------------ */
/* i18n — config, locales, helpers de chemins                          */
/* FR à la racine (argent SEO local), /en/, /ru/, /ar/ préfixés        */
/* ------------------------------------------------------------------ */

export const LOCALES = ['fr', 'en', 'ru', 'ar', 'es'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'fr'

export const LOCALE_META: Record<
  Locale,
  { code: Locale; native: string; label: string; dir: 'ltr' | 'rtl'; htmlLang: string }
> = {
  fr: { code: 'fr', native: 'Français', label: 'FR', dir: 'ltr', htmlLang: 'fr' },
  en: { code: 'en', native: 'English', label: 'EN', dir: 'ltr', htmlLang: 'en' },
  ru: { code: 'ru', native: 'Русский', label: 'RU', dir: 'ltr', htmlLang: 'ru' },
  ar: { code: 'ar', native: 'العربية', label: 'AR', dir: 'rtl', htmlLang: 'ar' },
  es: { code: 'es', native: 'Español', label: 'ES', dir: 'ltr', htmlLang: 'es' },
}

// Domain .ma jamais acheté (NXDOMAIN vérifié 2026-09) — pointer sur le déploiement
// Workers réel. Quand le .ma sera acheté + Custom Domain attaché : remettre
// 'https://cliniquevetomaarif.ma' ici (sitemap/robots/og/canonicals en dérivent tous).
export const SITE_URL = 'https://vetclinic-website.okhowazaki.workers.dev'

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x)
}

/* ----- Identifiants de routes (manifest) --------------------------- */

export type RouteId =
  | 'home'
  | 'services'
  | 'equipe'
  | 'faq'
  | 'contact'
  | 'zones'
  | 'zoneMaarif'
  | 'zoneGauthier'
  | 'zoneAnfa'
  | 'notfound'

/* Chemin par locale — le slug est traduit là où le SEO local le paie.
   home : FR à la racine, les autres langues préfixées (sinon le pick
   depuis '/' ne change pas l'URL et la locale retombe sur fr). */
export const ROUTE_PATHS: Record<RouteId, Record<Locale, string>> = {
  home: { fr: '/', en: '/en/', ru: '/ru/', ar: '/ar/', es: '/es/' },
  services: { fr: '/services/', en: '/en/services/', ru: '/ru/services/', ar: '/ar/services/', es: '/es/servicios/' },
  equipe: { fr: '/equipe/', en: '/en/team/', ru: '/ru/komanda/', ar: '/ar/equipe/', es: '/es/equipo/' },
  faq: { fr: '/faq/', en: '/en/faq/', ru: '/ru/voprosy/', ar: '/ar/faq/', es: '/es/preguntas/' },
  contact: { fr: '/contact/', en: '/en/contact/', ru: '/ru/kontakty/', ar: '/ar/contact/', es: '/es/contacto/' },
  zones: { fr: '/zones/', en: '/en/areas/', ru: '/ru/raiony/', ar: '/ar/zones/', es: '/es/zonas/' },
  zoneMaarif: {
    fr: '/zones/maarif/',
    en: '/en/areas/maarif/',
    ru: '/ru/raiony/maarif/',
    ar: '/ar/zones/maarif/',
    es: '/es/zonas/maarif/',
  },
  zoneGauthier: {
    fr: '/zones/gauthier/',
    en: '/en/areas/gauthier/',
    ru: '/ru/raiony/gauthier/',
    ar: '/ar/zones/gauthier/',
    es: '/es/zonas/gauthier/',
  },
  zoneAnfa: {
    fr: '/zones/anfa/',
    en: '/en/areas/anfa/',
    ru: '/ru/raiony/anfa/',
    ar: '/ar/zones/anfa/',
    es: '/es/zonas/anfa/',
  },
  notfound: { fr: '/404', en: '/en/404', ru: '/ru/404', ar: '/ar/404', es: '/es/404' },
}

/** Chemin d'une route dans une locale. */
export function pathFor(id: RouteId, locale: Locale): string {
  return ROUTE_PATHS[id][locale]
}

/** Retrouve (routeId, locale) depuis un pathname. Retourne null si inconnu. */
export function routeForPath(pathname: string): { id: RouteId; locale: Locale } | null {
  // Normalise : tout chemin non-racine se termine par '/', la racine reste '/'
  const clean = pathname === '/' ? '/' : pathname.endsWith('/') ? pathname : pathname + '/'

  // Racine = home FR
  if (clean === '/') return { id: 'home', locale: 'fr' }

  // Préfixe locale seul (/en/, /ru/, /ar/) = home de cette locale
  const seg = clean.split('/')[1]
  if (seg && isLocale(seg) && clean === `/${seg}/`) return { id: 'home', locale: seg }

  for (const id of Object.keys(ROUTE_PATHS) as RouteId[]) {
    for (const locale of LOCALES) {
      // notfound : match avec OU sans slash final ('/404' tel que servi par Workers)
      const candidate = ROUTE_PATHS[id][locale]
      if (candidate === clean) return { id, locale }
      if (id === 'notfound' && `${candidate}/` === clean) return { id, locale }
    }
  }
  return null
}

/** Génère les chemins alternatifs (hreflang) d'une route. */
export function alternatesFor(id: RouteId): { locale: Locale; path: string }[] {
  return LOCALES.map((locale) => ({ locale, path: pathFor(id, locale) }))
}
