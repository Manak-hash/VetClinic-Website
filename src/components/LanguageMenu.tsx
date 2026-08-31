import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import { LOCALES, LOCALE_META, pathFor, type Locale } from '../i18n/config'
import { storeLocale } from '../i18n'
import { navigate } from '../router'
import { Icon } from './Icon'

/* ------------------------------------------------------------------ */
/* Sélecteur de langue — dropdown qui prolonge la barre de nav         */
/* (pattern v4 éprouvé : kiss edge, accent réservé à la sélection)     */
/* ------------------------------------------------------------------ */

export function LanguageMenu() {
  const { locale, routeId, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Escape ferme et rend le focus au bouton ; clic extérieur ferme
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        ref.current?.querySelector('button')?.focus()
      }
    }
    const onDown = (e: globalThis.MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
    }
  }, [open])

  const pick = (next: Locale) => {
    setOpen(false)
    if (next === locale) return
    // Choix explicite > détection, puis navigation paired-path
    storeLocale(next)
    navigate(pathFor(routeId, next))
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.common.languageMenu}
        className={`lang-trigger flex items-center gap-1.5 rounded-full border border-line bg-white/80 px-3 py-2 text-[0.82rem] font-semibold text-ink backdrop-blur transition-colors ${
          open ? 'lang-trigger-open' : 'hover:bg-white'
        }`}
      >
        <Icon name="globe" className="h-4 w-4" />
        {LOCALE_META[locale].label}
        <Icon name="chevr" className={`lang-chev h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        role="menu"
        aria-label={LOCALE_META[locale].native}
        className={`lang-panel absolute top-full right-0 mt-[-1px] min-w-[190px] rounded-b-2xl rounded-t-none border border-t-0 border-line bg-paper shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_36px_-12px_rgba(0,0,0,0.2)] transition-all origin-top ${
          open ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-95 opacity-0'
        }`}
      >
        {LOCALES.map((code) => (
          <button
            key={code}
            type="button"
            role="menuitem"
            aria-current={code === locale ? 'true' : undefined}
            onClick={() => pick(code)}
            className={`lang-option flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-[0.9rem] ${
              code === locale ? 'lang-option-active font-semibold' : 'text-ink-2 hover:bg-paper-2'
            }`}
          >
            <span>{LOCALE_META[code].native}</span>
            <span className="font-mono text-[0.72rem] text-ink-3">{LOCALE_META[code].label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
