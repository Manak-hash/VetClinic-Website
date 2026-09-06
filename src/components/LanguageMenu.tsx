import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import { LOCALES, LOCALE_META, pathFor, type Locale } from '../i18n/config'
import { storeLocale } from '../i18n'
import { navigate } from '../router'
import { Icon } from './Icon'

/* ------------------------------------------------------------------ */
/* Sélecteur de langue — pilule animée (pattern "sliding pill") :      */
/* les 4 codes dans une seule pilule, un fond teal glisse derrière     */
/* l'option active (mesuré au layout, animé en CSS transform).         */
/* ------------------------------------------------------------------ */

export function LanguageMenu({ onDark = false }: { onDark?: boolean }) {
  const { locale, routeId } = useI18n()
  const [open, setOpen] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false })

  /* Position de la pilule sous l'option active — recalculée au montage
     et à chaque changement de langue (layout-driven, pas de magic number). */
  useEffect(() => {
    const el = listRef.current?.querySelector('[data-active="true"]') as HTMLElement | null
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth, ready: true })
  }, [locale])

  // Escape ferme et rend le focus au bouton ; clic extérieur ferme
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onDown = (e: globalThis.MouseEvent) => {
      if (!e.composedPath().some((n) => n instanceof Element && n.closest('[data-lang-menu]'))) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
    }
  }, [open])

  const pick = (next: Locale) => {
    if (next === locale) {
      setOpen(false)
      return
    }
    // Choix explicite > détection, puis navigation paired-path
    storeLocale(next)
    navigate(pathFor(routeId, next))
  }

  return (
    <div className="relative" data-lang-menu>
      {/* Pilule fermée : globe + code courant, cliquable pour ouvrir */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${LOCALE_META[locale].native}`}
        className={`flex h-10 items-center gap-1.5 rounded-full border px-3 text-[0.82rem] font-semibold backdrop-blur transition-colors ${
          onDark
            ? 'border-white/30 bg-white/10 text-white hover:bg-white/20'
            : 'border-line bg-white/80 text-ink hover:bg-white'
        }`}
      >
        <Icon name="globe" className="h-4 w-4" />
        <span aria-hidden="true">{LOCALE_META[locale].label}</span>
        <Icon
          name="chevr"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Panneau ouvert : pilule à options + fond glissant */}
      <div
        role="menu"
        aria-label={LOCALE_META[locale].native}
        className={`lang-panel absolute top-full right-0 mt-2 min-w-[230px] rounded-2xl border border-line bg-paper p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_36px_-12px_rgba(0,0,0,0.2)] transition-all duration-200 origin-top ${
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        <div ref={listRef} className="relative flex items-center gap-0.5">
          {/* Fond glissant — mesuré sur l'option active */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 top-0 rounded-xl bg-teal-soft transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
            style={{
              left: pill.left,
              width: pill.width,
              opacity: pill.ready ? 1 : 0,
            }}
          />
          {LOCALES.map((code) => {
            const active = code === locale
            return (
              <button
                key={code}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                data-active={active ? 'true' : undefined}
                onClick={() => pick(code)}
                className={`lang-pill-option relative z-10 flex-1 rounded-xl px-3 py-2 text-left transition-colors ${
                  active
                    ? 'font-semibold text-teal-deep'
                    : 'text-ink-2 hover:bg-paper-2'
                }`}
              >
                <span className="block text-[0.88rem] leading-tight">{LOCALE_META[code].native}</span>
                <span
                  className={`block font-mono text-[0.68rem] leading-tight ${
                    active ? 'text-teal' : 'text-ink-3'
                  }`}
                >
                  {LOCALE_META[code].label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
