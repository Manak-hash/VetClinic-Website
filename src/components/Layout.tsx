import { useEffect, useState } from 'react'
import { Link } from './Link'
import { Icon } from './Icon'
import { useReveal } from './hooks'
import { ScrollToTop } from '../router'
import { LanguageMenu } from './LanguageMenu'
import { useI18n } from '../i18n'
import { pathFor } from '../i18n/config'
import { usePath } from '../router'
import { PageOutlet } from '../pages'
import { CLINIC, TEL_CLINIC, TEL_URGENCE, WA_LINK } from '../data'

/* ------------------------------------------------------------------ */
/* Layout — nav/footer traduits, sélecteur de langue, barre urgence    */
/* ------------------------------------------------------------------ */

const NAV_STRUCTURE = [
  { id: 'home', key: 'home' },
  { id: 'services', key: 'services' },
  { id: 'equipe', key: 'equipe' },
  { id: 'faq', key: 'faq' },
  { id: 'contact', key: 'contact' },
] as const

function Header() {
  const { t, locale, routeId } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const path = usePath()

  /* Option B : en haut de page, la nav est transparente sur un hero
     sombre → teal clair (8.4:1). Scrollée → fond paper → teal foncé
     (5.6:1). Toutes les pages ouvrent sur un hero bg-ink. */
  const onDark = !scrolled
  const brandColor = onDark ? 'text-[#8fd0c9]' : 'text-teal'
  const linkIdle = onDark ? 'text-paper/85' : 'text-ink-2'
  const linkActive = onDark ? 'text-[#8fd0c9]' : 'text-teal'
  const linkHover = onDark ? 'hover:text-white' : 'hover:text-teal'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile à chaque navigation (pendant le rendu, pas en effet)
  const [lastPath, setLastPath] = useState(path)
  if (path !== lastPath) {
    setLastPath(path)
    if (open) setOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const NAV_ITEMS = NAV_STRUCTURE.map((n) => ({
    id: n.id,
    to: pathFor(n.id, locale),
    label: t.nav[n.key],
  }))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur' : ''
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between gap-2">
        <Link to={pathFor('home', locale)}>
          <span className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-paper">
              <Icon name="paw" className="h-5 w-5" />
            </span>
            <span className="font-display text-[1rem] font-semibold leading-tight tracking-tight">
              {t.common.headerLine1}
              <br />
              <span className={`${brandColor} transition-colors duration-300`}>{t.common.clinicNameShort}</span>
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV_ITEMS.map((n) => (
            <Link
              key={n.id}
              to={n.to}
              className={`text-[0.92rem] font-medium transition-colors ${linkHover} ${
                routeId === n.id ? linkActive : linkIdle
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        {/* Mobile : langues + appel + menu */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${TEL_CLINIC}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition-colors ${
              onDark ? 'border-paper/25 bg-white/10 text-paper hover:bg-white/20' : 'border-line bg-white/80 text-ink hover:bg-white'
            }`}
          >
            <Icon name="phone" className="h-4.5 w-4.5" />
            <span className="sr-only">{t.common.callClinic}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t.common.menuClose : t.common.menuOpen}
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition-colors ${
              onDark ? 'border-paper/25 bg-white/10 text-paper hover:bg-white/20' : 'border-line bg-white/80 text-ink hover:bg-white'
            }`}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-teal px-4 py-2 text-[0.85rem] font-semibold text-white transition-colors hover:bg-teal-deep"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            {t.common.bookWhatsapp}
          </a>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <div
        className={`fixed inset-0 top-16 z-30 bg-paper transition-all duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="section-pad mx-auto flex max-w-6xl flex-col gap-1 pt-6" aria-label="Menu mobile">
          {NAV_ITEMS.map((n) => (
            <Link
              key={n.id}
              to={n.to}
              className={`rounded-xl px-4 py-4 font-display text-xl font-semibold tracking-tight ${
                routeId === n.id ? 'bg-teal-soft text-teal' : 'text-ink'
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 text-[0.95rem] font-semibold text-white"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            {t.common.bookWhatsapp}
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const { t, locale } = useI18n()
  const navLinks = [
    { to: pathFor('home', locale), label: t.nav.home },
    { to: pathFor('services', locale), label: t.nav.services },
    { to: pathFor('equipe', locale), label: t.nav.equipe },
    { to: pathFor('faq', locale), label: t.nav.faq },
    { to: pathFor('contact', locale), label: t.nav.contact },
    { to: pathFor('zones', locale), label: t.nav.zones },
  ]
  return (
    <footer className="section-pad bg-ink pb-28 pt-14 text-paper md:pb-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-paper/10">
                <Icon name="paw" className="h-5 w-5 text-paper" />
              </span>
              <span className="font-display text-[1.05rem] font-semibold leading-tight tracking-tight">
                {t.common.footerLine1}
                <br />
                <span className="text-[#8fd0c9]">{t.common.clinicNameShort}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-paper/60">
              {t.common.footerBlurb}
            </p>
          </div>

          <nav aria-label="Pied de page" className="flex flex-col gap-2.5">
            {navLinks.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[0.92rem] text-paper/70 transition-colors hover:text-paper"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Langue */}
          <div className="flex flex-col gap-3">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper/45">
              {t.common.languageLabel}
            </p>
            <LanguageMenu onDark />
          </div>

          <div className="flex flex-col gap-2.5 text-[0.92rem] text-paper/70">
            <a href={`tel:${TEL_CLINIC}`} className="transition-colors hover:text-paper">
              {CLINIC.phone}
            </a>
            <a href={`tel:${TEL_URGENCE}`} className="font-semibold text-[#e8a79a]">
              {t.common.urgencyLabel} : {CLINIC.urgency}
            </a>
            <a href={`mailto:${CLINIC.email}`} className="transition-colors hover:text-paper">
              {CLINIC.email}
            </a>
            <a
              href={CLINIC.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-paper"
            >
              {CLINIC.address.street} — {t.common.addressCity}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-paper/15 pt-5 text-[0.8rem] text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {t.common.clinicName} {t.common.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>{t.common.footerHours}</p>
            <a
              href="https://omnirise.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-paper/60 transition-colors hover:text-[#8fd0c9]"
            >
              {t.common.designedBy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function UrgenceBar() {
  const { t } = useI18n()
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setShown(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`urgence-bar fixed inset-x-0 bottom-0 z-40 bg-paper/95 backdrop-blur md:hidden ${
        shown ? 'shown' : ''
      }`}
    >
      <div className="flex gap-2 p-3">
        <a
          href={`tel:${TEL_URGENCE}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brick py-3 text-[0.92rem] font-bold text-white"
        >
          <Icon name="alert" className="h-4.5 w-4.5" />
          {t.common.callUrgency}
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-teal py-3 text-[0.92rem] font-bold text-white"
        >
          <Icon name="whatsapp" className="h-4.5 w-4.5" />
          {t.common.bookWhatsapp}
        </a>
      </div>
    </div>
  )
}

export function Layout() {
  useReveal()
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main">
        <PageOutlet />
      </main>
      <Footer />
      <UrgenceBar />
    </>
  )
}
