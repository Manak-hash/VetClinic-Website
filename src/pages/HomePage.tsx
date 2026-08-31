import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '../components/Icon'
import { Seo } from '../components/Seo'
import { LOCAL_BUSINESS_LD, FAQ_TEASER_LD } from '../components/jsonld'
import { CLINIC, SERVICES, QUARTIERS, TEL_URGENCE, WA_LINK, FAQ } from '../data'

/* ------------------------------------------------------------------ */
/* Accueil — condensé qui renvoie vers chaque page dédiée              */
/* ------------------------------------------------------------------ */

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <>
      <Seo
        title="Clinique Vétérinaire Maârif — Vétérinaire à Casablanca depuis 2002"
        description="Votre vétérinaire au Maârif, Casablanca : consultations chiens/chats/NAC, chirurgie, imagerie, urgences. 60 Bd Bir Anzarane. Lun–ven 9h–19h."
        path="/"
        jsonLd={[LOCAL_BUSINESS_LD, FAQ_TEASER_LD]}
      />

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden bg-ink">
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
              href={WA_LINK}
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
              Urgence · {CLINIC.urgency}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bandeau confiance */}
      <div className="border-b border-line bg-paper-2/60">
        <div className="section-pad mx-auto grid max-w-6xl grid-cols-2 gap-y-6 py-8 sm:grid-cols-4">
          {[
            { big: '2002', small: 'au Maârif depuis' },
            { big: '20+ ans', small: 'd’expérience chirurgicale' },
            { big: '9h – 19h', small: 'lundi au vendredi' },
            { big: 'Urgences', small: 'ligne directe 7j/7' },
          ].map((s) => (
            <div key={s.small} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold tracking-tight text-ink">{s.big}</p>
              <p className="mt-0.5 text-[0.85rem] text-ink-3">{s.small}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services — condensé renvoyant vers /services/ */}
      <section className="section-pad mx-auto max-w-6xl py-20 md:py-28">
        <div className="reveal mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">La clinique</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
              Tout ce dont votre animal a besoin, sous un seul toit
            </h2>
          </div>
          <Link
            to="/services/"
            className="group inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-semibold text-teal"
          >
            Tous nos services
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/"
              className="reveal group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                <Icon name={s.icon} className="h-5.5 w-5.5" />
              </span>
              <h3 className="font-display text-[1.15rem] font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Chirurgie — teaser renvoyant vers le détail */}
      <section className="section-pad bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <p className="eyebrow text-[#8fd0c9]!">Chirurgie</p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
                Un protocole rigoureux, en quatre étapes
              </h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-paper/75">
                Visite préopératoire avec devis précis, préparation aseptique, anesthésie dosée au
                gramme près, gestion de la douleur. Stérilisations comme chirurgies
                orthopédiques : même exigence.
              </p>
              <Link
                to="/services/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[0.92rem] font-semibold text-white transition-colors hover:bg-teal-deep"
              >
                Voir le protocole complet
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <div className="reveal grid grid-cols-3 gap-3">
              {['/surgery-1.jpg', '/surgery-2.jpg', '/surgery-3.jpg'].map((src, i) => (
                <figure key={src} className={`photo-card overflow-hidden rounded-xl ${i === 1 ? 'mt-6' : ''}`}>
                  <img
                    src={src}
                    alt={`Intervention chirurgicale à la clinique ${i + 1}`}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zones desservies — renvoi vers /zones/ */}
      <section className="section-pad mx-auto max-w-6xl py-20 md:py-28">
        <div className="reveal mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Casablanca</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
              Votre vétérinaire, selon votre quartier
            </h2>
          </div>
          <Link
            to="/zones/"
            className="group inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-semibold text-teal"
          >
            Toutes les zones
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {QUARTIERS.map((q) => (
            <Link
              key={q.slug}
              to={`/zones/${q.slug}/`}
              className="reveal group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                <Icon name="pin" className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-4 font-display text-[1.1rem] font-semibold tracking-tight">
                {q.title}
              </h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-2">
                Itinéraire et stationnement depuis {q.name}.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-teal">
                Page {q.name}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ teaser — 3 questions renvoyant vers /faq/ */}
      <section className="section-pad border-t border-line bg-paper-2/50 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-10 text-center">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight">
              Les réponses rapides
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.slice(0, 3).map((f) => (
              <Link
                key={f.q}
                to="/faq/"
                className="reveal flex items-center justify-between gap-4 rounded-2xl border border-line bg-white px-5 py-4 transition-colors hover:border-teal"
              >
                <span className="font-display text-[0.98rem] font-semibold tracking-tight">
                  {f.q}
                </span>
                <Icon name="chevr" className="h-4 w-4 shrink-0 text-teal" />
              </Link>
            ))}
          </div>
          <div className="reveal mt-8 text-center">
            <Link to="/faq/" className="text-[0.95rem] font-semibold text-teal hover:underline">
              Voir toutes les questions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-pad bg-ink py-16 text-paper md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal font-display text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold tracking-tight">
            Un rendez-vous, une question, une urgence ?
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-paper/75">
            WhatsApp pour tout ce qui n'est pas urgent. La ligne directe pour tout ce qui l'est.
          </p>
          <div className="reveal mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-paper px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              <Icon name="whatsapp" className="h-5 w-5 text-teal" />
              Prendre rendez-vous
            </a>
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/40 px-6 py-3.5 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              Nous contacter
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
