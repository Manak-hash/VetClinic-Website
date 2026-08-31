import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react'
import { DEFAULT_LOCALE, LOCALE_META, isLocale, type Locale, type RouteId } from './config'
import fr, { type Messages } from './fr'
import en from './en'
import ru from './ru'
import ar from './ar'

const MESSAGES: Record<Locale, Messages> = { fr, en, ru, ar }

/* ------------------------------------------------------------------ */
/* Détection : préfixe chemin > choix stocké > langues du navigateur   */
/* ------------------------------------------------------------------ */

const LS_KEY = 'cvm_locale'

export function detectLocale(pathname: string): Locale {
  const seg = pathname.split('/')[1]
  if (seg && isLocale(seg)) return seg

  try {
    const stored = localStorage.getItem(LS_KEY)
    if (stored && isLocale(stored)) return stored
  } catch {
    /* localStorage indisponible */
  }

  if (typeof navigator !== 'undefined') {
    for (const lang of navigator.languages ?? [navigator.language]) {
      const base = lang.split('-')[0]
      if (isLocale(base)) return base
    }
  }

  return DEFAULT_LOCALE
}

export function storeLocale(locale: Locale) {
  try {
    localStorage.setItem(LS_KEY, locale)
  } catch {
    /* noop */
  }
}

/* ------------------------------------------------------------------ */
/* Contexte                                                            */
/* ------------------------------------------------------------------ */

interface I18nCtx {
  locale: Locale
  t: Messages
  dir: 'ltr' | 'rtl'
  /** RouteId courant — pour le changement de langue en conservant la route. */
  routeId: RouteId
}

const Ctx = createContext<I18nCtx | null>(null)

export function I18nProvider({
  locale,
  routeId,
  children,
}: {
  locale: Locale
  routeId: RouteId
  children: ReactNode
}) {
  const value = useMemo<I18nCtx>(
    () => ({
      locale,
      t: MESSAGES[locale],
      dir: LOCALE_META[locale].dir,
      routeId,
    }),
    [locale, routeId],
  )

  // lang + dir sur <html> — la base du RTL
  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang
    document.documentElement.dir = LOCALE_META[locale].dir
  }, [locale])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export { MESSAGES }
export type { Messages }
