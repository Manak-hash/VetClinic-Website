import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* ------------------------------------------------------------------ */
/* data                                                                */
/* ------------------------------------------------------------------ */

const NAV = [
  { href: '#clinique', label: 'La clinique' },
  { href: '#chirurgie', label: 'Chirurgie' },
  { href: '#equipe', label: "L'équipe" },
  { href: '#contact', label: 'Contact' },
]

const PHONE = '05 22 23 30 95'
const PHONE_2 = '05 22 98 96 90'
const URGENCE = '06 61 49 26 18'
const TEL_CLINIC = `+212${PHONE.replace(/\s/g, '').replace(/^0/, '')}`
const TEL_URGENCE = `+212${URGENCE.replace(/\s/g, '').replace(/^0/, '')}`
const WHATSAPP = '212661492618'

const SERVICES = [
  {
    title: 'Consultations',
    desc: 'Chiens, chats et NAC (lapins, furets, rongeurs, hérissons…). Bilan de santé, diagnostic et suivi de votre animal.',
    icon: 'stethoscope',
  },
  {
    title: 'Chirurgie',
    desc: 'Stérilisations, tumeurs, calculs urinaires, fractures… Une grande variété d’interventions, avec devis précis à l’avance.',
    icon: 'scalpel',
  },
  {
    title: 'Imagerie & radio',
    desc: 'Radiographie pour localiser une fracture, contrôler une calcification, guider un diagnostic.',
    icon: 'xray',
  },
  {
    title: 'Hospitalisation',
    desc: 'Surveillance post-opératoire dans la journée : en général votre compagnon rentre le soir même de l’intervention.',
    icon: 'bed',
  },
  {
    title: 'Nutrition',
    desc: 'Aliments sélectionnés pour tous les chiens et chats, y compris en cas de maladie ou après une intervention.',
    icon: 'bowl',
  },
  {
    title: 'Urgences',
    desc: 'Une ligne directe dédiée. Appelez avant de venir, l’équipe vous guide immédiatement.',
    icon: 'alert',
  },
]

const PROTOCOL = [
  {
    n: '1',
    short: 'Visite préopératoire',
    title: 'On vérifie, on explique, on chiffre',
    body: 'Avant chaque chirurgie : bilan de santé de votre animal, explication des motifs, du déroulement et des suites. Vous repartez avec un devis précis de l’intervention et de ses soins annexes.',
  },
  {
    n: '2',
    short: 'Préparation',
    title: 'Zéro risque d’infection',
    body: 'Tonte de la zone, nettoyage à la solution moussante désinfectante, passages multiples à l’alcool puis à la Bétadine. Un protocole de bloc opératoire appliqué à la lettre.',
  },
  {
    n: '3',
    short: 'Anesthésie',
    title: 'Des doses au gramme près',
    body: 'Chaque animal est pesé précisément pour adapter les doses d’anesthésiant. Pour les animaux à risques ou les chirurgies longues : cathéter veineux, intubation et monitoring respiratoire systématiques.',
  },
  {
    n: '4',
    short: 'Gestion de la douleur',
    title: 'Un réveil plus doux',
    body: 'Antalgiques injectés avant ou pendant l’intervention. Ils potentialisent l’anesthésie, permettent de diminuer les doses, un réveil plus doux et une récupération plus rapide.',
  },
]

const AFTERCARE = [
  'Retrait des points 10 à 12 jours après (ou points résorbables qui disparaissent seuls en 3–4 semaines).',
  'Antibiotique 5 à 6 jours dans la plupart des cas, antalgique si nécessaire.',
  'Changement de pansement programmé dans les 5 jours si l’animal est rendu pansé.',
  'Hospitalisation courte : en général une journée, retour à la maison le soir même.',
]

const INTERVENTIONS = [
  {
    area: 'Appareil génital',
    items: ['Ovariectomie (stérilisation chienne, chatte)', 'Mastectomies (tumeurs mammaires)'],
  },
  {
    area: 'Peau et sous-peau',
    items: ['Exérèse de kystes, verrues, tumeurs cutanées', 'Sutures cutanées et musculaires'],
  },
  {
    area: 'Appareil urinaire',
    items: ['Cystotomie (calculs dans la vessie)', 'Urétrostomies'],
  },
  {
    area: 'Appareil digestif',
    items: ['Entérotomie (corps étranger)', 'Entérectomie (nécrose, tumeur)'],
  },
  {
    area: 'Autres chirurgies abdominales',
    items: ['Splénectomie (rate)', 'Herniorraphies (hernies ombilicale, inguinale)'],
  },
  {
    area: 'Os et articulations',
    items: [
      'Enclouage centro-médullaire (fractures)',
      'Ligament croisé antérieur du genou',
      'Réductions de luxation',
      'Exérèse de la tête du fémur',
    ],
  },
]

const HOURS = [
  { d: 'Lundi – Vendredi', h: '9h – 19h' },
  { d: 'Samedi', h: '9h – 14h' },
  { d: 'Dimanche', h: 'Fermé' },
]

/* ------------------------------------------------------------------ */
/* icons                                                               */
/* ------------------------------------------------------------------ */

function Icon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    stethoscope: (
      <>
        <path d="M5 3v5a4 4 0 0 0 8 0V3" />
        <path d="M9 12v3a5 5 0 0 0 10 0v-2" />
        <circle cx="19" cy="10" r="2" />
      </>
    ),
    scalpel: (
      <>
        <path d="M4 20l9-9" />
        <path d="M13 11l6-6c1 1 1 3 0 4l-4 4" />
        <path d="M4 20c2 .5 4-.5 5-2" />
      </>
    ),
    xray: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M12 7v6" />
        <path d="M9 10h6" />
        <path d="M9 17h6" />
      </>
    ),
    bed: (
      <>
        <path d="M3 18v-8h13a4 4 0 0 1 4 4v4" />
        <path d="M3 14h17" />
        <circle cx="7.5" cy="9" r="1.8" />
      </>
    ),
    bowl: (
      <>
        <path d="M4 11h16a8 8 0 0 1-16 0z" />
        <path d="M9 7c0-1.5 1-2 1-3.5" />
        <path d="M14 7c0-1.5 1-2 1-3.5" />
      </>
    ),
    alert: (
      <>
        <path d="M12 4l9 16H3l9-16z" />
        <path d="M12 10v4" />
        <path d="M12 17.2v.01" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: <path d="M4 4c0 9 7 16 16 16l1-4-4-2-2 2c-3-1-6-4-7-7l2-2-2-4-4 1z" />,
    paw: (
      <>
        <ellipse cx="7" cy="8" rx="1.6" ry="2.2" />
        <ellipse cx="12" cy="6.6" rx="1.6" ry="2.2" />
        <ellipse cx="17" cy="8" rx="1.6" ry="2.2" />
        <path d="M12 12.5c-3.5 0-6.5 3-6.5 5.5 0 1.7 1.3 2.8 2.8 2.8 1.4 0 2.4-.7 3.7-.7s2.3.7 3.7.7c1.5 0 2.8-1.1 2.8-2.8 0-2.5-3-5.5-6.5-5.5z" />
      </>
    ),
    whatsapp: (
      <path
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.5-.3-2.9.8.8-2.8-.3-.5A8 8 0 0 1 12 4zm-3 3.8c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.6.7 3.1.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.5-1.8-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8.9 8.6c-.2-.5-.4-.6-.6-.7h-.3z"
        fill="currentColor"
        stroke="none"
      />
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </>
    ),
    check: <path d="M4 12.5l5 5L20 6.5" />,
    tap: (
      <>
        <path d="M9 10l4.5 10.5 1.6-4.4 4.4-1.6L9 10z" />
        <path d="M7 3.5V7M3.5 7H7" />
      </>
    ),
    chevl: <path d="M15 6l-6 6 6 6" />,
    chevr: <path d="M9 6l6 6-6 6" />,
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* hooks                                                               */
/* ------------------------------------------------------------------ */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ------------------------------------------------------------------ */
/* sections                                                            */
/* ------------------------------------------------------------------ */

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur' : ''
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-paper">
            <Icon name="paw" className="h-5 w-5" />
          </span>
          <span className="font-display text-[1rem] font-semibold leading-tight tracking-tight">
            Clinique Vétérinaire
            <br />
            <span className="text-teal">MAARIF</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.92rem] font-medium text-ink-2 transition-colors hover:text-teal"
            >
              {n.label}
            </a>
          ))}
        </nav>
        {/* Mobile: one call action up top — WhatsApp lives in the fixed bottom bar (no duplicate) */}
        <a
          href={`tel:${TEL_CLINIC}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/80 text-ink backdrop-blur transition-colors hover:bg-white md:hidden"
        >
          <Icon name="phone" className="h-4.5 w-4.5" />
          <span className="sr-only">Appeler la clinique</span>
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-teal px-4 py-2 text-[0.85rem] font-semibold text-white transition-colors hover:bg-teal-deep md:flex"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Prendre RDV
        </a>
      </div>
    </header>
  )
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/clinic-hero.jpg"
          alt="La Clinique Vétérinaire Maârif à Casablanca"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/35 to-ink/85" />

      <div className="section-pad relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end pb-16 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow text-[#8fd0c9]!"
        >
          Casablanca · Depuis 2002
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.3rem)] font-bold leading-[1.04] tracking-tight text-paper"
        >
          Votre animal,
          <br />
          <span className="text-[#8fd0c9]">entre de bonnes mains.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-5 max-w-xl text-[1.06rem] leading-relaxed text-paper/85"
        >
          Chiens, chats et NAC. Consultations, chirurgie, imagerie et urgences — au cœur du
          Maârif, sur le boulevard Bir Anzarane.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-paper px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-transform hover:scale-[1.03] sm:w-auto"
          >
            <Icon name="whatsapp" className="h-5 w-5 text-teal" />
            Prendre rendez-vous
          </a>
          <a
            href={`tel:${TEL_URGENCE}`}
            className="flex w-full items-center justify-center gap-2.5 rounded-full border border-paper/40 px-6 py-3.5 text-[0.95rem] font-semibold text-paper backdrop-blur transition-colors hover:bg-paper/10 sm:w-auto"
          >
            <Icon name="phone" className="h-4.5 w-4.5" />
            Urgence · {URGENCE}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function TrustStrip() {
  const stats = [
    { big: '2002', small: 'au Maârif depuis' },
    { big: '20+ ans', small: 'd’expérience chirurgicale' },
    { big: '9h – 19h', small: 'lundi au vendredi' },
    { big: 'Urgences', small: 'ligne directe 7j/7' },
  ]
  return (
    <div className="border-b border-line bg-paper-2/60">
      <div className="section-pad mx-auto grid max-w-6xl grid-cols-2 gap-y-6 py-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.small} className="text-center sm:text-left">
            <p className="font-display text-2xl font-bold tracking-tight text-ink">{s.big}</p>
            <p className="mt-0.5 text-[0.85rem] text-ink-3">{s.small}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="clinique" className="section-pad mx-auto max-w-6xl py-20 md:py-28">
      <div className="reveal mb-12 max-w-2xl">
        <p className="eyebrow">La clinique</p>
        <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
          Tout ce dont votre animal a besoin, sous un seul toit
        </h2>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-2">
          Bienvenue à la Clinique Vétérinaire Maârif. Nous prenons soin de tous vos animaux
          domestiques — chiens, chats et NAC (lapins, furets, rongeurs, hérissons…). Installés
          depuis 2002, nous avons ouvert nos nouveaux locaux du 60, boulevard Bir Anzarane en
          2015, au centre de Casablanca.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className="reveal group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal transition-colors group-hover:bg-teal group-hover:text-white">
              <Icon name={s.icon} className="h-5.5 w-5.5" />
            </span>
            <h3 className="font-display text-[1.15rem] font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{s.desc}</p>
          </article>
        ))}
      </div>

      <figure className="reveal mt-14 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <img
          src="/clinic-interior.jpg"
          alt="Intérieur de la clinique"
          className="h-64 w-full object-cover sm:h-80"
          loading="lazy"
        />
        <figcaption className="flex items-center justify-between gap-4 px-5 py-3.5 text-[0.85rem] text-ink-3">
          <span>Les locaux de la clinique, boulevard Bir Anzarane</span>
          <a href="#contact" className="font-semibold text-teal hover:underline">
            Nous trouver
          </a>
        </figcaption>
      </figure>
    </section>
  )
}

function Surgery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const [active, setActive] = useState(0)

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const onScroll = () => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const track = trackRef.current
      if (!track) return
      let best = 0
      let bestDist = Infinity
      PROTOCOL.forEach((_, i) => {
        const card = track.children[i] as HTMLElement | undefined
        if (!card) return
        const d = Math.abs(card.offsetLeft - track.scrollLeft)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      setActive(best)
    })
  }

  const goTo = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(PROTOCOL.length - 1, i))
    const card = track.children[clamped] as HTMLElement | undefined
    if (!card) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({ left: card.offsetLeft, behavior: reduced ? 'auto' : 'smooth' })
    setActive(clamped)
  }

  return (
    <section id="chirurgie" className="section-pad bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 max-w-2xl">
          <p className="eyebrow text-[#8fd0c9]!">Chirurgie</p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
            Une grande variété de chirurgies, de la convenance à la nécessité
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-paper/75">
            Stérilisations et interventions esthétiques, ou traitement de pathologies : chaque
            opération suit le même protocole rigoureux, en quatre étapes.
          </p>
        </div>

        <div className="reveal">
          <p className="mb-4 flex items-center gap-2 text-[0.82rem] font-medium text-paper/55 md:hidden">
            <Icon name="tap" className="h-4 w-4 text-[#8fd0c9]" />
            Glissez pour suivre le protocole, étape par étape
          </p>

          <div
            ref={trackRef}
            onScroll={onScroll}
            tabIndex={0}
            aria-label="Protocole chirurgical en 4 étapes — carrousel"
            className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          >
            {PROTOCOL.map((p) => (
              <article
                key={p.n}
                aria-roledescription="étape"
                aria-label={`Étape ${p.n} sur 4`}
                className="w-[78vw] max-w-[380px] shrink-0 snap-start rounded-2xl border border-paper/15 bg-white/[0.04] p-6 sm:w-[340px] md:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal font-display text-[0.95rem] font-bold text-white">
                    {p.n}
                  </span>
                  <span className="text-right text-[0.72rem] font-semibold tracking-[0.16em] text-[#8fd0c9]/80 uppercase">
                    {p.short}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#8fd0c9] md:text-[1.3rem]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/80">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-2" aria-label="Progression du protocole">
              {PROTOCOL.map((p, i) => (
                <button
                  key={p.n}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Aller à l'étape ${p.n} : ${p.short}`}
                  aria-current={i === active ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-7 bg-teal' : 'w-2.5 bg-paper/25 hover:bg-paper/50'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2.5">
              <button
                type="button"
                className="carousel-btn"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Étape précédente"
              >
                <Icon name="chevl" className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="carousel-btn"
                onClick={() => goTo(active + 1)}
                disabled={active === PROTOCOL.length - 1}
                aria-label="Étape suivante"
              >
                <Icon name="chevr" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div className="reveal">
            <h3 className="font-display text-lg font-semibold tracking-tight text-paper/90">
              Interventions les plus fréquentes
            </h3>
            <ul className="mt-5 space-y-5">
              {INTERVENTIONS.map((g) => (
                <li key={g.area}>
                  <p className="text-[0.8rem] font-semibold tracking-[0.14em] text-[#8fd0c9]/80 uppercase">
                    {g.area}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2.5 text-[0.95rem] text-paper/80"
                      >
                        <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <h3 className="font-display text-lg font-semibold tracking-tight text-paper/90">
              Après l’intervention
            </h3>
            <ul className="mt-5 space-y-3.5">
              {AFTERCARE.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-paper/80"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/25">
                    <Icon name="check" className="h-3 w-3 text-[#8fd0c9]" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {['/surgery-1.jpg', '/surgery-2.jpg', '/surgery-3.jpg'].map((src, i) => (
                <figure key={src} className="photo-card overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt={`Intervention chirurgicale à la clinique ${i + 1}`}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
            <p className="mt-3 text-[0.8rem] text-paper/50">
              Au bloc opératoire — interventions suivies à la clinique.
            </p>
          </div>
        </div>

        <div className="reveal mt-12 grid gap-3 sm:grid-cols-2">
          {[
            { src: '/xray-leg.jpg', alt: 'Radiographie d’une patte' },
            { src: '/xray-unidentified.jpg', alt: 'Radiographie de contrôle' },
          ].map((x) => (
            <figure key={x.src} className="photo-card overflow-hidden rounded-xl">
              <img src={x.src} alt={x.alt} className="h-56 w-full object-cover" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="equipe" className="section-pad mx-auto max-w-6xl py-20 md:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <figure className="reveal relative mb-6">
          <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
            <img
              src="/dr-bassir.jpg"
              alt="Dr. Bassir devant la Clinique Vétérinaire Maârif"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 shadow-card">
            <Icon name="paw" className="h-4 w-4 text-teal" />
            <span className="text-[0.9rem] font-semibold">Dr. Bassir — Directeur</span>
          </figcaption>
        </figure>

        <div className="reveal mt-8 lg:mt-0">
          <p className="eyebrow">Qui suis-je ?</p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
            « Nous ferons toujours le maximum pour que vous vous y sentiez chez vous »
          </h2>
          <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-ink-2">
            <p>
              Installée depuis 2002 rue Ahmed El Mejatti, la clinique a déménagé en 2015 au 60,
              boulevard Bir Anzarane, au centre de Casablanca — des locaux pensés pour accueillir
              vos animaux dans les meilleures conditions.
            </p>
            <p>
              Bienvenue à la Clinique Vétérinaire Maârif. Nous prenons soin de tous vos animaux
              domestiques : chiens, chats et NAC (lapins, furets, rongeurs, hérissons…).
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { icon: 'clock', title: 'Lun – Ven', sub: '9h – 19h · sam. 9h – 14h' },
              { icon: 'pin', title: 'Maârif, Casablanca', sub: '60 Bd Bir Anzarane' },
              { icon: 'phone', title: 'Téléphone', sub: PHONE },
              { icon: 'alert', title: 'Urgences', sub: URGENCE },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5"
              >
                <Icon name={f.icon} className="h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="text-[0.9rem] font-semibold leading-tight">{f.title}</p>
                  <p className="text-[0.82rem] text-ink-3">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line bg-paper-2/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
            Prendre rendez-vous
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-2">
            Le plus simple reste le message : écrivez-nous sur WhatsApp, ou appelez directement la
            clinique. En cas d’urgence, la ligne directe du Dr. Bassir répond.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="reveal group rounded-2xl border border-teal/25 bg-teal p-6 text-white transition-shadow hover:shadow-lift"
          >
            <Icon name="whatsapp" className="h-7 w-7" />
            <h3 className="mt-4 font-display text-lg font-semibold">WhatsApp</h3>
            <p className="mt-1.5 text-[0.92rem] text-white/85">
              Réponse rapide. Envoyez une photo de votre animal pour préparer la consultation.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold">
              Écrire sur WhatsApp
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>

          <a
            href={`tel:${TEL_CLINIC}`}
            className="reveal group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
              <Icon name="phone" className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">Téléphone</h3>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-2">
              {PHONE}
              <br />
              {PHONE_2}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal">
              Appeler la clinique
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>

          <a
            href={`tel:${TEL_URGENCE}`}
            className="reveal group rounded-2xl border border-brick/30 bg-white p-6 transition-shadow hover:shadow-lift"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brick-soft text-brick">
              <Icon name="alert" className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">Urgences</h3>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-2">
              Ligne directe du Dr. Bassir, dédiée aux urgences.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-bold text-brick">
              {URGENCE}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>
        </div>

        <div className="reveal mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2.5">
              <Icon name="clock" className="h-5 w-5 text-teal" />
              <h3 className="font-display text-lg font-semibold">Horaires</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {HOURS.map((h) => (
                <li
                  key={h.d}
                  className="flex items-baseline justify-between gap-4 text-[0.95rem]"
                >
                  <span className="text-ink-2">{h.d}</span>
                  <span className="font-semibold">{h.h}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-lg bg-paper-2 px-3.5 py-2.5 text-[0.84rem] text-ink-2">
              <span className="font-semibold text-ink">Ramadan :</span> ouvert de 9h00 à 16h00.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2.5">
              <Icon name="pin" className="h-5 w-5 text-teal" />
              <h3 className="font-display text-lg font-semibold">Adresse</h3>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
              60, Boulevard Bir Anzarane
              <br />
              Maârif — Casablanca
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Clinique+V%C3%A9t%C3%A9rinaire+Maarif+60+Boulevard+Bir+Anzarane+Casablanca"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal hover:underline"
            >
              Ouvrir dans Google Maps
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <div className="maps-frame mt-5 overflow-hidden rounded-xl">
              <iframe
                title="Clinique Vétérinaire Maârif sur Google Maps"
                src="https://maps.google.com/maps?cid=6748401890204772645&z=16&hl=fr&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-5 text-[0.85rem] text-ink-3">
              E-mail :{' '}
              <a
                href="mailto:vetclinicmaarif@gmail.com"
                className="font-medium text-ink-2 hover:text-teal"
              >
                vetclinicmaarif@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

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
              <a
                key={n.href}
                href={n.href}
                className="text-[0.92rem] text-paper/70 transition-colors hover:text-paper"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 text-[0.92rem] text-paper/70">
            <a href={`tel:${TEL_CLINIC}`} className="transition-colors hover:text-paper">
              {PHONE}
            </a>
            <a href={`tel:${TEL_URGENCE}`} className="font-semibold text-[#e8a79a]">
              Urgence : {URGENCE}
            </a>
            <a
              href="mailto:vetclinicmaarif@gmail.com"
              className="transition-colors hover:text-paper"
            >
              vetclinicmaarif@gmail.com
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Clinique+V%C3%A9t%C3%A9rinaire+Maarif+60+Boulevard+Bir+Anzarane+Casablanca"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-paper"
            >
              60, Bd Bir Anzarane — Casablanca
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

function UrgenceBar() {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
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
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-teal py-3 text-[0.92rem] font-bold text-white"
          >
            <Icon name="whatsapp" className="h-4.5 w-4.5" />
            RDV sur WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* app                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Surgery />
        <About />
        <Contact />
      </main>
      <Footer />
      <UrgenceBar />
    </>
  )
}
