import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Seo } from '../components/Seo'
import { CLINIC, QUARTIERS, WA_LINK } from '../data'

const SITE_URL = 'https://cliniquevetomaarif.ma'

/* ------------------------------------------------------------------ */
/* Hub « Vétérinaire à Casablanca » + pages quartier (Maârif/Gauthier/Anfa) */
/* Contenu réellement distinct par quartier : repères, itinéraire,     */
/* stationnement, ancrage local — l'arme SEO #4 du master note.        */
/* ------------------------------------------------------------------ */

export function ZonesPage() {
  return (
    <>
      <Seo
        title="Vétérinaire à Casablanca — Zones desservies | Clinique Vétérinaire Maârif"
        description="Votre vétérinaire au Maârif, au Gauthier et à Anfa : itinéraires, stationnement et accès depuis chaque quartier de Casablanca."
        path="/zones/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Zones desservies' },
            ],
          },
        ]}
      />

      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-[#8fd0c9]!">Casablanca</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            Votre vétérinaire, selon votre quartier
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">
            La clinique est installée au cœur du Maârif — mais elle soigne les animaux de tout le
            centre de Casablanca. Voici comment nous rejoindre depuis les trois principaux
            quartiers que nous desservons.
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl py-16 md:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {QUARTIERS.map((q, i) => (
            <Link
              key={q.slug}
              to={`/zones/${q.slug}/`}
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
                Itinéraire, stationnement et repères depuis {q.name}.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal">
                Voir la page {q.name}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="reveal mt-12 rounded-2xl border border-line bg-white p-6 md:p-8">
          <h2 className="font-display text-lg font-semibold">Un autre quartier de Casablanca ?</h2>
          <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink-2">
            Nous recevons des clients de toute la ville centrale — Maârif, Gauthier, Anfa,
            Racine, Bourgogne, California… Appelez-nous : nous vous indiquons l'itinéraire le plus
            simple et le stationnement le plus proche.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={CLINIC.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.9rem] font-semibold text-paper transition-opacity hover:opacity-85"
            >
              <Icon name="pin" className="h-4 w-4" />
              Ouvrir dans Google Maps
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Demander l'itinéraire
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

export function QuartierPage() {
  const { quartier } = useParams()
  const q = QUARTIERS.find((x) => x.slug === quartier)

  if (!q) {
    return (
      <section className="section-pad mx-auto max-w-3xl pt-32 pb-24 text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight">Page introuvable</h1>
        <p className="mt-4 text-ink-2">
          Cette zone n'a pas de page dédiée.{' '}
          <Link to="/zones/" className="font-semibold text-teal hover:underline">
            Voir les zones desservies
          </Link>
          .
        </p>
      </section>
    )
  }

  const others = QUARTIERS.filter((x) => x.slug !== q.slug)

  return (
    <>
      <Seo
        title={`${q.title} | Clinique Vétérinaire Maârif`}
        description={`Clinique vétérinaire pour les habitants de ${q.name}, Casablanca : itinéraire depuis ${q.name}, stationnement, repères. Chiens, chats et NAC — chirurgie et urgences.`}
        path={`/zones/${q.slug}/`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Zones desservies', item: `${SITE_URL}/zones/` },
              { '@type': 'ListItem', position: 3, name: q.name },
            ],
          },
        ]}
      />

      {/* Hero */}
      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Fil d'Ariane" className="mb-5 text-[0.82rem] text-paper/50">
            <Link to="/" className="hover:text-paper">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link to="/zones/" className="hover:text-paper">
              Zones
            </Link>
            <span className="mx-2">/</span>
            <span className="text-paper/80">{q.name}</span>
          </nav>
          <p className="eyebrow text-[#8fd0c9]!">Casablanca · {q.name}</p>
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
              Itinéraire depuis {q.name}
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
              <h2 className="font-display text-lg font-semibold">Repères depuis {q.name}</h2>
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
              <Icon name="arrow" className="h-5 w-5 text-teal" />
              <h2 className="font-display text-lg font-semibold">En voiture</h2>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">{q.access}</p>
            <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-paper-2 p-4">
              <Icon name="paw" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <p className="text-[0.88rem] leading-relaxed text-ink-2">
                <span className="font-semibold text-ink">Stationnement :</span> {q.parking}
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-4 rounded-2xl border border-teal/25 bg-teal-soft/40 p-6 md:p-8">
          <h2 className="font-display text-lg font-semibold">
            Pourquoi les habitants de {q.name} nous font confiance
          </h2>
          <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-ink-2">{q.whyUs}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Prendre rendez-vous
            </a>
            <Link
              to="/services/"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-2.5 text-[0.9rem] font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
            >
              Nos services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Pages voisines */}
        <div className="reveal mt-12">
          <h2 className="font-display text-[1.1rem] font-semibold tracking-tight">
            Autres quartiers desservis
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/zones/${o.slug}/`}
                className="rounded-full border border-line bg-white px-4 py-2 text-[0.88rem] font-medium text-ink-2 transition-colors hover:border-teal hover:text-teal"
              >
                {o.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
