import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Seo } from '../components/Seo'
import { CLINIC, TEL_CLINIC, WA_LINK, HOURS, LANGUAGES } from '../data'

/* ------------------------------------------------------------------ */
/* Page Équipe — Dr Bassir + la clinique (repris et étendu de la démo) */
/* ------------------------------------------------------------------ */

export function EquipePage() {
  return (
    <>
      <Seo
        title="L'équipe — Dr Bassir | Clinique Vétérinaire Maârif Casablanca"
        description="Dr Bassir et l'équipe de la Clinique Vétérinaire Maârif : plus de 20 ans d'expérience chirurgicale au service des animaux de Casablanca depuis 2002."
        path="/equipe/"
      />

      {/* Hero de page */}
      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-[#8fd0c9]!">L'équipe</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            « Nous ferons toujours le maximum pour que vous vous y sentiez chez vous »
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">
            Dr Bassir et son équipe, au service des animaux de Casablanca depuis 2002.
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <figure className="reveal relative mb-6">
            <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
              <img
                src="/dr-bassir.jpg"
                alt="Dr Bassir devant la Clinique Vétérinaire Maârif"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 shadow-card">
              <Icon name="paw" className="h-4 w-4 text-teal" />
              <span className="text-[0.9rem] font-semibold">Dr Bassir — Directeur</span>
            </figcaption>
          </figure>

          <div className="reveal mt-8 lg:mt-0">
            <p className="eyebrow">Qui suis-je ?</p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight tracking-tight">
              Un vétérinaire de quartier, installé de longue date
            </h2>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-ink-2">
              <p>
                Installée depuis 2002 rue Ahmed El Mejatti, la clinique a déménagé en 2015 au 60,
                boulevard Bir Anzarane, au centre de Casablanca — des locaux pensés pour accueillir
                vos animaux dans les meilleures conditions.
              </p>
              <p>
                Nous prenons soin de tous vos animaux domestiques : chiens, chats et NAC (lapins,
                furets, rongeurs, hérissons…). Consultations, chirurgie, imagerie, hospitalisation :
                le suivi de votre animal est assuré dans la continuité, visite après visite.
              </p>
              <p>
                Côté équipe, la clinique fonctionne en petit comité — c'est un choix. Vous êtes reçu
                par des visages connus, et le Dr Bassir suit personnellement les dossiers
                chirurgicaux du début à la fin.
              </p>
              <p>
                Nous accueillons nos clients en <strong>quatre langues</strong> : arabe, français,
                anglais et russe.
              </p>
            </div>
          </div>
        </div>

        {/* Repères pratiques */}
        <div className="reveal mt-16">
          <h2 className="font-display text-[1.4rem] font-bold tracking-tight">
            La clinique en pratique
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { icon: 'clock', title: 'Lun – Ven', sub: '9h – 19h · sam. 9h – 14h' },
              { icon: 'pin', title: 'Maârif, Casablanca', sub: '60 Bd Bir Anzarane' },
              { icon: 'phone', title: 'Téléphone', sub: CLINIC.phone },
              { icon: 'alert', title: 'Urgences', sub: CLINIC.urgency },
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
          <h2 className="font-display text-[1.4rem] font-bold tracking-tight">
            On parle votre langue
          </h2>
          <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-ink-2">
            Toute l'équipe accueille et soigne en quatre langues — en consultation comme au
            téléphone.
          </p>
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
            to="/services/"
            className="group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
              <Icon name="stethoscope" className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">Nos services</h3>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-2">
              Consultations, chirurgie, imagerie, hospitalisation — le détail de chaque service.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal">
              Voir les services
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-teal/25 bg-teal p-6 text-white transition-shadow hover:shadow-lift"
          >
            <Icon name="whatsapp" className="h-6 w-6" />
            <h3 className="mt-4 font-display text-lg font-semibold">Prendre rendez-vous</h3>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-white/85">
              Le plus simple : un message WhatsApp, ou appelez la clinique au {CLINIC.phone}.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold">
              Écrire sur WhatsApp
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Mini-horaires */}
        <div className="reveal mt-10 rounded-2xl border border-line bg-paper-2/60 p-6">
          <div className="flex items-center gap-2.5">
            <Icon name="clock" className="h-5 w-5 text-teal" />
            <h3 className="font-display text-lg font-semibold">Horaires d'ouverture</h3>
          </div>
          <ul className="mt-4 max-w-md space-y-2.5">
            {HOURS.map((h) => (
              <li key={h.d} className="flex items-baseline justify-between gap-4 text-[0.95rem]">
                <span className="text-ink-2">{h.d}</span>
                <span className="font-semibold">{h.h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[0.85rem] text-ink-3">
            Urgences en dehors des horaires :{' '}
            <a href={`tel:${TEL_CLINIC}`} className="font-semibold text-brick hover:underline">
              {CLINIC.urgency}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
