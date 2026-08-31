import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Seo } from '../components/Seo'
import { SERVICES, PROTOCOL, INTERVENTIONS, AFTERCARE, WA_LINK } from '../data'

/* ------------------------------------------------------------------ */
/* Page Services — grille complète + détail chirurgie (protocole)      */
/* ------------------------------------------------------------------ */

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services — Consultations, chirurgie, imagerie | Clinique Vétérinaire Maârif Casablanca"
        description="Consultations chiens, chats et NAC, chirurgie avec devis à l'avance, radiographie, hospitalisation, nutrition et urgences au Maârif, Casablanca."
        path="/services/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://cliniquevetomaarif.ma/' },
              { '@type': 'ListItem', position: 2, name: 'Services' },
            ],
          },
        ]}
      />

      {/* Hero de page */}
      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-[#8fd0c9]!">Nos services</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            Tout ce dont votre animal a besoin, sous un seul toit
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">
            Chiens, chats et NAC. Consultations, chirurgie, imagerie, hospitalisation et urgences —
            au cœur du Maârif, sur le boulevard Bir Anzarane.
          </p>
        </div>
      </section>

      {/* Grille de services */}
      <section className="section-pad mx-auto max-w-6xl py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              className="reveal group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                <Icon name={s.icon} className="h-5.5 w-5.5" />
              </span>
              <h2 className="font-display text-[1.15rem] font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{s.short}</p>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-2">{s.body[0]}</p>
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
            <Link to="/contact/" className="font-semibold text-teal hover:underline">
              Nous trouver
            </Link>
          </figcaption>
        </figure>
      </section>

      <SurgeryDetail />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Détail chirurgie — protocole en carrousel (repris de la démo)       */
/* ------------------------------------------------------------------ */

function SurgeryDetail() {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const [active, setActive] = useState(0)

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
                      <li key={it} className="flex items-start gap-2.5 text-[0.95rem] text-paper/80">
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

        <div className="reveal mt-14 rounded-2xl border border-paper/15 bg-white/[0.04] p-6 md:p-8">
          <h3 className="font-display text-lg font-semibold text-paper">
            Une intervention en tête ? Commencez par un message.
          </h3>
          <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-paper/75">
            Décrivez la situation sur WhatsApp : le Dr. Bassir vous indique si une visite
            préopératoire est nécessaire et ce qu’elle comprendra.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[0.92rem] font-semibold text-white transition-colors hover:bg-teal-deep"
          >
            <Icon name="whatsapp" className="h-4.5 w-4.5" />
            Poser une question chirurgie
          </a>
        </div>
      </div>
    </section>
  )
}
