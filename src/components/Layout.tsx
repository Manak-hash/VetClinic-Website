import { useEffect, useState } from 'react'
import { Link } from './Link'
import { Icon } from './Icon'
import { useReveal } from './hooks'
import { ScrollToTop } from '../router'
import { LanguageMenu } from './LanguageMenu'
import { useI18n } from '../i18n'
import { pathFor, LOCALES } from '../i18n/config'
import { usePath } from '../router'
import { PageOutlet } from '../pages'
import { CLINIC, TEL_CLINIC, TEL_URGENCE, WA_LINK } from '../data'
import { storeLocale } from '../i18n'

/* ------------------------------------------------------------------ */
/* Layout — nav/footer traduits, sélecteur de langue, menu mobile      */
/* IMPORTANT : le panneau du menu mobile est rendu HORS du <header>    */
/* (frère dans Layout). Le header est fixed h-16 — un enfant fixed     */
/* avec top+bottom résoudrait sa hauteur sur ces 64px, pas sur le      */
/* viewport → panneau à hauteur 0 = menu « transparent ». C'était le   */
/* bug. Hors du header, top-16/bottom-0 se résolvent sur le viewport.  */
/* ------------------------------------------------------------------ */

const NAV_STRUCTURE = [
  { id: 'home', key: 'home' },
  { id: 'services', key: 'services' },
  { id: 'equipe', key: 'equipe' },
  { id: 'faq', key: 'faq' },
  { id: 'contact', key: 'contact' },
] as const

const LANG_NATIVE: Record<(typeof LOCALES)[number], string> = {
  fr: 'Français',
  en: 'English',
  ru: 'Русский',
  ar: 'العربية',
  es: 'Español',
}

function Header({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (v: boolean) => void
}) {
  const { t, locale, routeId } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const path = usePath()

  /* En haut de page, la nav est transparente sur un hero sombre :
     "Clinique Vétérinaire" en blanc, "MAARIF" reste teal clair (vert).
     Scrollée OU menu ouvert → fond paper, textes ink / teal foncé. */
  const solid = scrolled || open
  const onDark = !solid
  const brandColor = onDark ? 'text-[#8fd0c9]' : 'text-teal'
  const linkIdle = onDark ? 'text-white/90' : 'text-ink-2'
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
        solid ? 'bg-paper/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur' : ''
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between gap-2">
        <Link to={pathFor('home', locale)} className="shrink-0">
          <span className="flex items-center gap-2.5">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                onDark ? 'bg-white/15 text-white' : 'bg-ink text-paper'
              }`}
            >
              <Icon name="paw" className="h-5 w-5" />
            </span>
            <span
              className={`font-display text-[1rem] font-semibold leading-tight tracking-tight transition-colors duration-300 md:text-[0.9rem] lg:text-[1rem] ${
                onDark ? 'text-white' : ''
              }`}
            >
              {t.common.headerLine1}
              <br />
              <span className={`${brandColor} transition-colors duration-300`}>
                {t.common.clinicNameShort}
              </span>
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex lg:gap-7" aria-label="Principal">
          {NAV_ITEMS.map((n) => (
            <Link
              key={n.id}
              to={n.to}
              className={`whitespace-nowrap text-[0.92rem] font-medium transition-colors ${linkHover} ${
                routeId === n.id ? linkActive : linkIdle
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        {/* Langue — desktop uniquement dans la barre (mobile : dans le menu) */}
        <div className="flex items-center gap-2">
          <LanguageMenu onDark={onDark} desktopOnly />
          {/* Appel — mobile uniquement */}
          <a
            href={`tel:${TEL_CLINIC}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition-colors md:hidden ${
              onDark
                ? 'border-white/30 bg-white/10 text-white hover:bg-white/20'
                : 'border-line bg-white/80 text-ink hover:bg-white'
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
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition-colors md:hidden ${
              onDark
                ? 'border-white/30 bg-white/10 text-white hover:bg-white/20'
                : 'border-line bg-white/80 text-ink hover:bg-white'
            }`}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
          {/* WhatsApp — desktop ; texte masqué md–lg (pilule icône, libellé en aria-label) */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label={t.common.bookWhatsapp}
            className="hidden items-center justify-center gap-2 rounded-full bg-teal py-2 text-[0.85rem] font-semibold text-white transition-colors hover:bg-teal-deep md:flex md:w-10 md:shrink-0 md:px-0 lg:w-auto lg:px-4"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            <span className="hidden lg:inline">{t.common.bookWhatsapp}</span>
          </a>
        </div>
      </div>
    </header>
  )
}

/* Panneau du menu mobile — HORS du header (voir note en tête de fichier). */
function MobileMenu({ open }: { open: boolean }) {
  const { t, locale, routeId } = useI18n()

  const NAV_ITEMS = NAV_STRUCTURE.map((n) => ({
    id: n.id,
    to: pathFor(n.id, locale),
    label: t.nav[n.key],
  }))

  return (
    <div
      style={{ backgroundColor: 'var(--color-paper)' }}
      className={`fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto transition-opacity duration-300 md:hidden ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      aria-hidden={!open}
    >
      <nav className="section-pad mx-auto flex min-h-full max-w-6xl flex-col pt-6" aria-label="Menu mobile">
        <div className="flex flex-col gap-1">
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
        </div>

        {/* Langues inline — finit le problème du sélecteur caché au footer */}
        <div className="mt-6">
          <p className="px-4 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-3">
            {t.common.languageLabel}
          </p>
          <div className="mt-2 flex flex-wrap gap-2 px-4">
            {LOCALES.map((code) => {
              const active = locale === code
              return (
                <a
                  key={code}
                  href={pathFor(routeId, code)}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => storeLocale(code)}
                  aria-label={`${t.common.languageMenu} : ${LANG_NATIVE[code]}`}
                  className={`rounded-full border px-4 py-2 text-[0.9rem] font-semibold transition-colors ${
                    active
                      ? 'border-teal bg-teal-soft text-teal-deep'
                      : 'border-line bg-white text-ink-2'
                  }`}
                >
                  {LANG_NATIVE[code]}
                </a>
              )
            })}
          </div>
        </div>

        {/* Pied du menu — urgence + RDV toujours accessibles */}
        <div className="mt-auto pb-6 pt-6">
          <a
            href={`tel:${TEL_URGENCE}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-brick px-6 py-4 text-[0.95rem] font-bold text-white"
          >
            <Icon name="alert" className="h-4.5 w-4.5" />
            {t.common.callUrgency} · {CLINIC.urgency}
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-4 text-[0.95rem] font-bold text-white"
          >
            <Icon name="whatsapp" className="h-4.5 w-4.5" />
            {t.common.bookWhatsapp}
          </a>
        </div>
      </nav>
    </div>
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
    { to: pathFor('privacy', locale), label: t.nav.privacy },
  ]
  return (
    <footer className="section-pad bg-ink pb-14 pt-14 text-paper md:pb-14">
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
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-paper"
            >
              <Icon name="instagram" className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-paper/15 pt-5 text-[0.8rem] text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {t.common.clinicName} {t.common.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>{t.common.footerHours}</p>
            <a
              href="https://omnirise.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-paper/65 transition-colors hover:text-[#8fd0c9]"
            >
              {t.common.designedBy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function Layout() {
  useReveal()
  const { t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <ScrollToTop />
      {/* Lien d'évitement — premier élément focusable au clavier */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:text-[0.9rem] focus:font-semibold focus:text-white focus:shadow-lift"
      >
        {t.common.skipToContent}
      </a>
      <Header open={menuOpen} setOpen={setMenuOpen} />
      {/* Hors du header : le fixed du panneau se résout sur le viewport */}
      <MobileMenu open={menuOpen} />
      <main id="main">
        <PageOutlet />
      </main>
      <Footer />
    </>
  )
}
