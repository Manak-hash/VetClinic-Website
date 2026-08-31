import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Icon } from './Icon'
import { useReveal, ScrollToTop } from './hooks'
import { CLINIC, TEL_CLINIC, TEL_URGENCE, WA_LINK, NAV, HOURS } from '../data'

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile à chaque navigation (pendant le rendu, pas en effet)
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    if (open) setOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur' : ''
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Accueil — Clinique Vétérinaire Maârif">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-paper">
            <Icon name="paw" className="h-5 w-5" />
          </span>
          <span className="font-display text-[1rem] font-semibold leading-tight tracking-tight">
            Clinique Vétérinaire
            <br />
            <span className="text-teal">MAARIF</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `text-[0.92rem] font-medium transition-colors hover:text-teal ${
                  isActive ? 'text-teal' : 'text-ink-2'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        {/* Mobile: bouton menu + appel direct */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${TEL_CLINIC}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/80 text-ink backdrop-blur transition-colors hover:bg-white"
          >
            <Icon name="phone" className="h-4.5 w-4.5" />
            <span className="sr-only">Appeler la clinique</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/80 text-ink backdrop-blur"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-teal px-4 py-2 text-[0.85rem] font-semibold text-white transition-colors hover:bg-teal-deep md:flex"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Prendre RDV
        </a>
      </div>

      {/* Menu mobile plein écran */}
      <div
        className={`fixed inset-0 top-16 z-30 bg-paper transition-all duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="section-pad mx-auto flex max-w-6xl flex-col gap-1 pt-6" aria-label="Menu mobile">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `rounded-xl px-4 py-4 font-display text-xl font-semibold tracking-tight ${
                  isActive ? 'bg-teal-soft text-teal' : 'text-ink'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 text-[0.95rem] font-semibold text-white"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Prendre rendez-vous
          </a>
        </nav>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
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
                Clinique Vétérinaire
                <br />
                <span className="text-[#8fd0c9]">MAARIF</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-paper/60">
              Nous prenons soin de tous vos animaux domestiques — chiens, chats et NAC — au cœur
              du Maârif depuis 2002.
            </p>
          </div>

          <nav aria-label="Pied de page" className="flex flex-col gap-2.5">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[0.92rem] text-paper/70 transition-colors hover:text-paper"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/zones/" className="text-[0.92rem] text-paper/70 transition-colors hover:text-paper">
              Zones desservies
            </Link>
          </nav>

          <div className="flex flex-col gap-2.5 text-[0.92rem] text-paper/70">
            <a href={`tel:${TEL_CLINIC}`} className="transition-colors hover:text-paper">
              {CLINIC.phone}
            </a>
            <a href={`tel:${TEL_URGENCE}`} className="font-semibold text-[#e8a79a]">
              Urgence : {CLINIC.urgency}
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
              {CLINIC.address.street} — Casablanca
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-paper/15 pt-5 text-[0.8rem] text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Clinique Vétérinaire Maârif — Tous droits réservés</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>Ouvert lun–ven 9h–19h · sam 9h–14h</p>
            <a
              href="https://omnirise.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-paper/60 transition-colors hover:text-[#8fd0c9]"
            >
              Site conçu par OmniRise
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/* Barre d'urgence mobile fixe                                         */
/* ------------------------------------------------------------------ */

function UrgenceBar() {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 400)
    return () => clearTimeout(t)
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
          Urgence
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-teal py-3 text-[0.92rem] font-bold text-white"
        >
          <Icon name="whatsapp" className="h-4.5 w-4.5" />
          RDV sur WhatsApp
        </a>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Layout partagé                                                      */
/* ------------------------------------------------------------------ */

export function Layout() {
  useReveal()
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <UrgenceBar />
    </>
  )
}

export { HOURS }
