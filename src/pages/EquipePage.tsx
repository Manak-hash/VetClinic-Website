import { Icon } from '../components/Icon'
import { Link } from '../components/Link'
import { Seo } from '../components/Seo'
import { HeroTopFade } from '../components/HeroTopFade'
import { useI18n } from '../i18n'
import { pathFor } from '../i18n/config'
import { CLINIC, TEL_CLINIC, WA_LINK } from '../data'

/* Langues parlées — endonymes, jamais traduits */
const LANGUAGES: { code: string; name: string; native: string }[] = [
  { code: 'ar', name: 'Arabe', native: 'العربية' },
  { code: 'fr', name: 'Français', native: 'Français' },
  { code: 'en', name: 'English', native: 'English' },
  { code: 'ru', name: 'Русский', native: 'Русский' },
]

/* ------------------------------------------------------------------ */
/* Page Équipe — Dr Bassir + la clinique (repris et étendu de la démo) */
/* ------------------------------------------------------------------ */

export function EquipePage() {
  const { t, locale, routeId } = useI18n()

  return (
    <>
      <Seo routeId={routeId} title={t.meta.equipe.title} description={t.meta.equipe.description} />

      {/* Hero de page */}
      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <HeroTopFade />
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-[#8fd0c9]!">{t.equipe.heroKicker}</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            {t.equipe.heroH1}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">
            {t.equipe.heroSub}
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <figure className="reveal relative mb-6">
            <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
              <img
                src="/dr-bassir.jpg"
                alt={t.equipe.directorCaption}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 shadow-card">
              <Icon name="paw" className="h-4 w-4 text-teal" />
              <span className="text-[0.9rem] font-semibold">{t.equipe.directorCaption}</span>
            </figcaption>
          </figure>

          <div className="reveal mt-8 lg:mt-0">
            <p className="eyebrow">{t.equipe.whoKicker}</p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight tracking-tight">
              {t.equipe.whoH2}
            </h2>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-ink-2">
              <p>{t.equipe.body1}</p>
              <p>{t.equipe.body2}</p>
              <p>{t.equipe.body3}</p>
              <p>{t.equipe.body4}</p>
            </div>
          </div>
        </div>

        {/* Repères pratiques */}
        <div className="reveal mt-16">
          <h2 className="font-display text-[1.4rem] font-bold tracking-tight">{t.equipe.inPractice}</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { icon: 'clock', title: t.equipe.facts[0].title, sub: t.equipe.facts[0].sub },
              { icon: 'pin', title: t.equipe.facts[1].title, sub: t.equipe.facts[1].sub },
              { icon: 'phone', title: t.equipe.phoneLabel, sub: CLINIC.phone },
              { icon: 'alert', title: t.common.urgencyLabel, sub: CLINIC.urgency },
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

        {/* Langues parlées */}
        <div className="reveal mt-16">
          <h2 className="font-display text-[1.4rem] font-bold tracking-tight">{t.equipe.languagesH2}</h2>
          <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-ink-2">{t.equipe.languagesP}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {LANGUAGES.map((l) => (
              <span
                key={l.code}
                className="flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5"
              >
                <Icon name="check" className="h-4 w-4 text-teal" />
                <span className="text-[0.95rem] font-semibold">{l.name}</span>
                <span className="text-[0.9rem] text-ink-3">{l.native}</span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-14 grid gap-4 md:grid-cols-2">
          <Link
            to={pathFor('services', locale)}
            className="group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
              <Icon name="stethoscope" className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">{t.equipe.servicesCtaH}</h3>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-2">{t.equipe.servicesCtaP}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal">
              {t.equipe.servicesCtaLabel}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100"
              />
            </span>
          </Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-teal/25 bg-teal p-6 text-white transition-shadow hover:shadow-lift"
          >
            <Icon name="whatsapp" className="h-6 w-6" />
            <h3 className="mt-4 font-display text-lg font-semibold">{t.equipe.rdvCtaH}</h3>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-white/85">{t.equipe.rdvCtaP}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold">
              {t.contact.whatsappCta}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100"
              />
            </span>
          </a>
        </div>

        {/* Mini-horaires */}
        <div className="reveal mt-10 rounded-2xl border border-line bg-paper-2/60 p-6">
          <div className="flex items-center gap-2.5">
            <Icon name="clock" className="h-5 w-5 text-teal" />
            <h3 className="font-display text-lg font-semibold">{t.common.hoursLabel}</h3>
          </div>
          <ul className="mt-4 max-w-md space-y-2.5">
            {t.common.hoursTable.map((h) => (
              <li key={h.days} className="flex items-baseline justify-between gap-4 text-[0.95rem]">
                <span className="text-ink-2">{h.days}</span>
                <span className="font-semibold">{h.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[0.85rem] text-ink-3">
            {t.equipe.outsideHours}{' '}
            <a href={`tel:${TEL_CLINIC}`} className="font-semibold text-brick hover:underline">
              {CLINIC.urgency}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
