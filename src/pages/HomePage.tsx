import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '../components/Icon'
import { Seo } from '../components/Seo'
import { Link } from '../components/Link'
import { useI18n } from '../i18n'
import { localBusinessLd, faqJsonLd } from '../components/jsonld'
import { pathFor } from '../i18n/config'
import { CLINIC, TEL_URGENCE, WA_LINK } from '../data'
import { HeroTopFade } from '../components/HeroTopFade'

/* ------------------------------------------------------------------ */
/* Accueil — condensé qui renvoie vers chaque page dédiée (traduit)    */
/* ------------------------------------------------------------------ */

const SERVICE_KEYS = ['consultations', 'chirurgie', 'imagerie', 'hospitalisation', 'nutrition', 'urgences'] as const
const SERVICE_ICONS: Record<(typeof SERVICE_KEYS)[number], string> = {
  consultations: 'stethoscope',
  chirurgie: 'scalpel',
  imagerie: 'xray',
  hospitalisation: 'bed',
  nutrition: 'bowl',
  urgences: 'alert',
}
const ZONE_KEYS = [
  { key: 'maarif', id: 'zoneMaarif' },
  { key: 'gauthier', id: 'zoneGauthier' },
  { key: 'anfa', id: 'zoneAnfa' },
] as const

export function HomePage() {
  const { t, locale, routeId } = useI18n()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const meta = t.meta.home

  return (
    <>
      <Seo
        routeId={routeId}
        title={meta.title}
        description={meta.description}
        jsonLd={[localBusinessLd(t), faqJsonLd(t.faq.items.slice(0, 3))]}
      />

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden bg-ink">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img
            src="/clinic-hero.jpg"
            alt={t.common.clinicName}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/35 to-ink/85" />
        <HeroTopFade />

        <div className="section-pad relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end pb-16 pt-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow text-[#8fd0c9]!"
          >
            {t.home.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.3rem)] font-bold leading-[1.04] tracking-tight text-paper"
          >
            {t.home.h1a}
            <br />
            <span className="text-[#8fd0c9]">{t.home.h1b}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-5 max-w-xl text-[1.06rem] leading-relaxed text-paper/85"
          >
            {t.home.sub}
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
              {t.common.bookWhatsapp}
            </a>
            <a
              href={`tel:${TEL_URGENCE}`}
              className="flex w-full items-center justify-center gap-2.5 rounded-full border border-paper/40 px-6 py-3.5 text-[0.95rem] font-semibold text-paper backdrop-blur transition-colors hover:bg-paper/10 sm:w-auto"
            >
              <Icon name="phone" className="h-4.5 w-4.5" />
              {t.common.callUrgency} · {CLINIC.urgency}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bandeau confiance */}
      <div className="border-b border-line bg-paper-2/60">
        <div className="section-pad mx-auto grid max-w-6xl grid-cols-2 gap-y-6 py-8 sm:grid-cols-4">
          {t.home.trust.map((s) => (
            <div key={s.small} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold tracking-tight text-ink">{s.big}</p>
              <p className="mt-0.5 text-[0.85rem] text-ink-3">{s.small}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="section-pad mx-auto max-w-6xl py-20 md:py-28">
        <div className="reveal mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.home.servicesKicker}</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
              {t.home.servicesH2}
            </h2>
          </div>
          <Link
            to={pathFor('services', locale)}
            className="group inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-semibold text-teal"
          >
            {t.common.allServices}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_KEYS.map((key, i) => {
            const s = t.services.items[key]
            return (
              <Link
                key={key}
                to={pathFor('services', locale)}
                className="reveal group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <Icon name={SERVICE_ICONS[key]} className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-display text-[1.15rem] font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{s.short}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Chirurgie teaser */}
      <section className="section-pad bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <p className="eyebrow text-[#8fd0c9]!">{t.home.surgeryKicker}</p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
                {t.home.surgeryH2}
              </h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-paper/75">{t.home.surgeryP}</p>
              <Link
                to={pathFor('services', locale)}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[0.92rem] font-semibold text-white transition-colors hover:bg-teal-deep"
              >
                {t.home.surgeryCta}
                <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
              </Link>
            </div>
            <div className="reveal grid grid-cols-3 gap-3">
              {['/surgery-1.jpg', '/surgery-2.jpg', '/surgery-3.jpg'].map((src, i) => (
                <figure key={src} className={`photo-card overflow-hidden rounded-xl ${i === 1 ? 'mt-6' : ''}`}>
                  <img
                    src={src}
                    alt={t.home.surgeryCaption}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="section-pad mx-auto max-w-6xl py-20 md:py-28">
        <div className="reveal mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.home.zonesKicker}</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
              {t.home.zonesH2}
            </h2>
          </div>
          <Link
            to={pathFor('zones', locale)}
            className="group inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-semibold text-teal"
          >
            {t.common.allAreas}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ZONE_KEYS.map(({ key, id }) => {
            const q = t.zones.quartier[key]
            return (
              <Link
                key={key}
                to={pathFor(id, locale)}
                className="reveal group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                  <Icon name="pin" className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-[1.1rem] font-semibold tracking-tight">{q.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-2">
                  {t.zones.cardP} {nameOf(key, t)}.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-teal">
                  {t.zones.cardCta} {nameOf(key, t)}
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="section-pad border-t border-line bg-paper-2/50 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-10 text-center">
            <p className="eyebrow">{t.home.faqKicker}</p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight">
              {t.home.faqH2}
            </h2>
          </div>
          <div className="space-y-3">
            {t.faq.items.slice(0, 3).map((f) => (
              <Link
                key={f.q}
                to={pathFor('faq', locale)}
                className="reveal flex items-center justify-between gap-4 rounded-2xl border border-line bg-white px-5 py-4 transition-colors hover:border-teal"
              >
                <span className="font-display text-[0.98rem] font-semibold tracking-tight">{f.q}</span>
                <Icon name="chevr" className="h-4 w-4 shrink-0 text-teal rtl:-scale-x-100" />
              </Link>
            ))}
          </div>
          <div className="reveal mt-8 text-center">
            <Link to={pathFor('faq', locale)} className="text-[0.95rem] font-semibold text-teal hover:underline">
              {t.nav.faq}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-pad bg-ink py-16 text-paper md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal font-display text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold tracking-tight">
            {t.home.ctaH2}
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-paper/75">
            {t.home.ctaP}
          </p>
          <div className="reveal mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-paper px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              <Icon name="whatsapp" className="h-5 w-5 text-teal" />
              {t.common.bookWhatsapp}
            </a>
            <Link
              to={pathFor('contact', locale)}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/40 px-6 py-3.5 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              {t.common.contactUs}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function nameOf(key: 'maarif' | 'gauthier' | 'anfa', t: ReturnType<typeof useI18n>['t']): string {
  const full = t.zones.quartier[key].title
  // "Vétérinaire au Maârif, Casablanca" → dernier segment avant la virgule
  const parts = full.split(',').map((p) => p.trim())
  return parts.length > 1 ? parts[parts.length - 2] : full
}
