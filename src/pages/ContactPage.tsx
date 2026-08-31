import { Icon } from '../components/Icon'
import { Link } from '../components/Link'
import { Seo } from '../components/Seo'
import { useI18n } from '../i18n'
import { pathFor } from '../i18n/config'
import { CLINIC, TEL_CLINIC, TEL_URGENCE, WA_LINK } from '../data'

/* ------------------------------------------------------------------ */
/* Page Contact — CTA (WhatsApp/tél/urgence) + horaires + adresse      */
/* ------------------------------------------------------------------ */

export function ContactPage() {
  const { t, locale, routeId } = useI18n()

  const quickLinks = [
    { id: 'faq' as const, label: t.contact.seeFaq },
    { id: 'zones' as const, label: t.contact.seeAreas },
    { id: 'equipe' as const, label: t.contact.seeTeam },
  ]

  return (
    <>
      <Seo routeId={routeId} title={t.meta.contact.title} description={t.meta.contact.description} />

      {/* Hero de page */}
      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-[#8fd0c9]!">{t.contact.heroKicker}</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            {t.contact.heroH1}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">
            {t.contact.heroSub}
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl py-16 md:py-20">
        {/* 3 canaux */}
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="reveal group rounded-2xl border border-teal/25 bg-teal p-6 text-white transition-shadow hover:shadow-lift"
          >
            <Icon name="whatsapp" className="h-7 w-7" />
            <h2 className="mt-4 font-display text-lg font-semibold">{t.contact.whatsappH}</h2>
            <p className="mt-1.5 text-[0.92rem] text-white/85">{t.contact.whatsappP}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold">
              {t.contact.whatsappCta}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100"
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
            <h2 className="mt-4 font-display text-lg font-semibold">{t.nav.contact}</h2>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-2">
              {CLINIC.phone}
              <br />
              {CLINIC.phone2}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal">
              {t.contact.phoneCta}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100"
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
            <h2 className="mt-4 font-display text-lg font-semibold">{t.common.urgencyLabel}</h2>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-2">{t.contact.urgencyP}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-bold text-brick">
              {CLINIC.urgency}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100"
              />
            </span>
          </a>
        </div>

        {/* Horaires + adresse */}
        <div className="reveal mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2.5">
              <Icon name="clock" className="h-5 w-5 text-teal" />
              <h2 className="font-display text-lg font-semibold">{t.common.hoursLabel}</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {t.common.hoursTable.map((h) => (
                <li key={h.days} className="flex items-baseline justify-between gap-4 text-[0.95rem]">
                  <span className="text-ink-2">{h.days}</span>
                  <span className="font-semibold">{h.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-lg bg-paper-2 px-3.5 py-2.5 text-[0.84rem] text-ink-2">
              <span className="font-semibold text-ink">{t.common.ramadan} :</span> {t.common.ramadanNote}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.id}
                  to={pathFor(l.id, locale)}
                  className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[0.85rem] font-medium text-ink-2 transition-colors hover:border-teal hover:text-teal"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2.5">
              <Icon name="pin" className="h-5 w-5 text-teal" />
              <h2 className="font-display text-lg font-semibold">{t.common.addressLabel}</h2>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
              {CLINIC.address.street}
              <br />
              {CLINIC.address.district} — {t.common.addressCity}
            </p>
            <a
              href={CLINIC.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal hover:underline"
            >
              {t.common.openMap}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </a>
            <div className="maps-frame mt-5 overflow-hidden rounded-xl">
              <iframe
                title={t.common.clinicName}
                src={CLINIC.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-5 text-[0.85rem] text-ink-3">
              {t.contact.emailLabel} :{' '}
              <a
                href={`mailto:${CLINIC.email}`}
                className="font-medium text-ink-2 hover:text-teal"
              >
                {CLINIC.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
