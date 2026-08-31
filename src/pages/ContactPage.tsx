import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Seo } from '../components/Seo'
import { CLINIC, TEL_CLINIC, TEL_URGENCE, WA_LINK, HOURS } from '../data'

/* ------------------------------------------------------------------ */
/* Page Contact — CTA (WhatsApp/tél/urgence) + horaires + adresse      */
/* ------------------------------------------------------------------ */

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact & RDV — Clinique Vétérinaire Maârif, Casablanca"
        description="Prendre rendez-vous : WhatsApp, téléphone ou urgence. 60 Bd Bir Anzarane, Maârif, Casablanca. Lun–ven 9h–19h, sam 9h–14h."
        path="/contact/"
      />

      {/* Hero de page */}
      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-[#8fd0c9]!">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            Prendre rendez-vous
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">
            Le plus simple reste le message : écrivez-nous sur WhatsApp, ou appelez directement la
            clinique. En cas d'urgence, la ligne directe du Dr Bassir répond.
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
            <h2 className="mt-4 font-display text-lg font-semibold">WhatsApp</h2>
            <p className="mt-1.5 text-[0.92rem] text-white/85">
              Réponse rapide. Envoyez une photo de votre animal pour préparer la consultation.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold">
              Écrire sur WhatsApp
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href={`tel:${TEL_CLINIC}`}
            className="reveal group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lift"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
              <Icon name="phone" className="h-5.5 w-5.5" />
            </span>
            <h2 className="mt-4 font-display text-lg font-semibold">Téléphone</h2>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-2">
              {CLINIC.phone}
              <br />
              {CLINIC.phone2}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal">
              Appeler la clinique
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href={`tel:${TEL_URGENCE}`}
            className="reveal group rounded-2xl border border-brick/30 bg-white p-6 transition-shadow hover:shadow-lift"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brick-soft text-brick">
              <Icon name="alert" className="h-5.5 w-5.5" />
            </span>
            <h2 className="mt-4 font-display text-lg font-semibold">Urgences</h2>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-2">
              Ligne directe du Dr Bassir, dédiée aux urgences.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-bold text-brick">
              {CLINIC.urgency}
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Horaires + adresse */}
        <div className="reveal mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-2.5">
              <Icon name="clock" className="h-5 w-5 text-teal" />
              <h2 className="font-display text-lg font-semibold">Horaires</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {HOURS.map((h) => (
                <li key={h.d} className="flex items-baseline justify-between gap-4 text-[0.95rem]">
                  <span className="text-ink-2">{h.d}</span>
                  <span className="font-semibold">{h.h}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-lg bg-paper-2 px-3.5 py-2.5 text-[0.84rem] text-ink-2">
              <span className="font-semibold text-ink">Ramadan :</span> ouvert de 9h00 à 16h00.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { to: '/faq/', label: 'Questions fréquentes' },
                { to: '/zones/', label: 'Zones desservies' },
                { to: '/equipe/', label: "Voir l'équipe" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
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
              <h2 className="font-display text-lg font-semibold">Adresse</h2>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
              {CLINIC.address.street}
              <br />
              Maârif — Casablanca
            </p>
            <a
              href={CLINIC.mapsLink}
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
                src={CLINIC.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-5 text-[0.85rem] text-ink-3">
              E-mail :{' '}
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
