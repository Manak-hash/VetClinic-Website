import { Icon } from '../components/Icon'
import { Link } from '../components/Link'
import { Seo } from '../components/Seo'
import { breadcrumbLd } from '../components/jsonld'
import { useI18n } from '../i18n'
import { pathFor, type RouteId } from '../i18n/config'
import { CLINIC, WA_LINK } from '../data'

/* ------------------------------------------------------------------ */
/* Hub « Vétérinaire à Casablanca » + pages quartier (Maârif/Gauthier/Anfa) */
/* Contenu réellement distinct par quartier : repères, itinéraire,     */
/* stationnement, ancrage local — l'arme SEO #4 du master note.        */
/* ------------------------------------------------------------------ */

const QUARTIER_KEYS = [
  { key: 'maarif', id: 'zoneMaarif' },
  { key: 'gauthier', id: 'zoneGauthier' },
  { key: 'anfa', id: 'zoneAnfa' },
] as const satisfies readonly { key: 'maarif' | 'gauthier' | 'anfa'; id: RouteId }[]

export function ZonesPage() {
  const { t, locale, routeId } = useI18n()

  return (
    <>
      <Seo
        routeId={routeId}
        title={t.meta.zones.title}
        description={t.meta.zones.description}
        jsonLd={[
          breadcrumbLd(locale, [
            { name: t.common.breadcrumbHome, id: 'home' },
            { name: t.nav.zones },
          ]),
        ]}
      />

      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-[#8fd0c9]!">{t.zones.heroKicker}</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            {t.zones.heroH1}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">
            {t.zones.heroSub}
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl py-16 md:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {QUARTIER_KEYS.map(({ key, id }, i) => {
            const q = t.zones.quartier[key]
            return (
              <Link
                key={id}
                to={pathFor(id, locale)}
                className="reveal group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                  <Icon name="pin" className="h-5.5 w-5.5" />
                </span>
                <h2 className="mt-4 font-display text-[1.15rem] font-semibold tracking-tight">
                  {q.title}
                </h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">
                  {t.zones.cardP} {q.title}.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal">
                  {t.zones.cardCta}
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100"
                  />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="reveal mt-12 rounded-2xl border border-line bg-white p-6 md:p-8">
          <h2 className="font-display text-lg font-semibold">{t.zones.otherTitle}</h2>
          <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink-2">{t.zones.otherP}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={CLINIC.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.9rem] font-semibold text-paper transition-opacity hover:opacity-85"
            >
              <Icon name="pin" className="h-4 w-4" />
              {t.common.openMap}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              {t.zones.askDirections}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Page quartier individuel                                            */
/* ------------------------------------------------------------------ */

export function QuartierPage({ quartierKey }: { quartierKey: 'maarif' | 'gauthier' | 'anfa' }) {
  const { t, locale, routeId } = useI18n()
  const q = t.zones.quartier[quartierKey]

  const routeIds: Record<typeof quartierKey, RouteId> = {
    maarif: 'zoneMaarif',
    gauthier: 'zoneGauthier',
    anfa: 'zoneAnfa',
  }
  const others = QUARTIER_KEYS.filter((x) => x.key !== quartierKey)

  return (
    <>
      <Seo
        routeId={routeId}
        title={t.meta[routeIds[quartierKey]].title}
        description={t.meta[routeIds[quartierKey]].description}
        jsonLd={[
          breadcrumbLd(locale, [
            { name: t.common.breadcrumbHome, id: 'home' },
            { name: t.nav.zones, id: 'zones' },
            { name: q.title },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-5 text-[0.82rem] text-paper/50">
            <Link to={pathFor('home', locale)} className="hover:text-paper">
              {t.common.breadcrumbHome}
            </Link>
            <span className="mx-2">/</span>
            <Link to={pathFor('zones', locale)} className="hover:text-paper">
              {t.common.breadcrumbZones}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-paper/80">{q.title}</span>
          </nav>
          <p className="eyebrow text-[#8fd0c9]!">
            {t.zones.heroKicker} · {q.title}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            {q.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">{q.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CLINIC.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-[0.92rem] font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              <Icon name="pin" className="h-4.5 w-4.5 text-teal" />
              {t.zones.routesLabel} {q.title}
            </a>
            <a
              href={`tel:+212${CLINIC.phone.replace(/\s/g, '').replace(/^0/, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-5 py-3 text-[0.92rem] font-semibold text-paper backdrop-blur transition-colors hover:bg-paper/10"
            >
              <Icon name="phone" className="h-4.5 w-4.5" />
              {CLINIC.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Contenu local */}
      <section className="section-pad mx-auto max-w-6xl py-16 md:py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="reveal rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2.5">
              <Icon name="pin" className="h-5 w-5 text-teal" />
              <h2 className="font-display text-lg font-semibold">{t.zones.landmarksTitle(q.title)}</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {q.landmarks.map((l) => (
                <li key={l} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink-2">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2.5">
              <Icon name="arrow" className="h-5 w-5 text-teal rtl:-scale-x-100" />
              <h2 className="font-display text-lg font-semibold">{t.zones.byCarTitle}</h2>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">{q.access}</p>
            <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-paper-2 p-4">
              <Icon name="paw" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <p className="text-[0.88rem] leading-relaxed text-ink-2">
                <span className="font-semibold text-ink">{t.zones.parkingLabel} :</span> {q.parking}
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-4 rounded-2xl border border-teal/25 bg-teal-soft/40 p-6 md:p-8">
          <h2 className="font-display text-lg font-semibold">{t.zones.trustTitle(q.title)}</h2>
          <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-ink-2">{q.whyUs}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              {t.common.bookWhatsapp}
            </a>
            <Link
              to={pathFor('services', locale)}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-2.5 text-[0.9rem] font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
            >
              {t.nav.services}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>

        {/* Pages voisines */}
        <div className="reveal mt-12">
          <h2 className="font-display text-[1.1rem] font-semibold tracking-tight">{t.zones.othersTitle}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o.id}
                to={pathFor(o.id, locale)}
                className="rounded-full border border-line bg-white px-4 py-2 text-[0.88rem] font-medium text-ink-2 transition-colors hover:border-teal hover:text-teal"
              >
                {t.zones.quartier[o.key].title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
