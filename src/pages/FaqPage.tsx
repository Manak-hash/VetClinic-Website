import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { faqJsonLd } from '../components/jsonld'
import { Seo } from '../components/Seo'
import { FAQ, WA_LINK } from '../data'

/* ------------------------------------------------------------------ */
/* Page FAQ — accordéon + données structurées FAQPage                  */
/* ------------------------------------------------------------------ */

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <>
      <Seo
        title="FAQ — Tarifs, horaires, urgences | Clinique Vétérinaire Maârif Casablanca"
        description="Questions fréquentes : prix d'une consultation, coût d'une stérilisation, horaires, urgences, rendez-vous, NAC. Clinique Vétérinaire Maârif, Casablanca."
        path="/faq/"
        jsonLd={[faqJsonLd(FAQ)]}
      />

      {/* Hero de page */}
      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-[#8fd0c9]!">Questions fréquentes</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            Vous vous demandez peut-être…
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">
            Les réponses aux questions qu'on nous pose le plus souvent. Le cas échéant, un message
            WhatsApp vaut mieux qu'une hésitation.
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-3xl py-16 md:py-20">
        <div className="space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className="reveal overflow-hidden rounded-2xl border border-line bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left"
                >
                  <span className="font-display text-[1.02rem] font-semibold tracking-tight">
                    {f.q}
                  </span>
                  <Icon
                    name="chevr"
                    className={`h-4 w-4 shrink-0 text-teal transition-transform duration-300 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-ink-2">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="reveal mt-12 rounded-2xl border border-teal/25 bg-teal-soft/40 p-6 md:p-8">
          <div className="flex items-center gap-2.5">
            <Icon name="question" className="h-5 w-5 text-teal" />
            <h2 className="font-display text-lg font-semibold">Une question qui n'y est pas ?</h2>
          </div>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">
            Écrivez-nous sur WhatsApp — réponse rapide, même pour une simple question de tarif ou
            de disponibilité.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-teal-deep"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Poser la question
          </a>
          <p className="mt-3 text-[0.85rem] text-ink-3">
            Ou consultez directement{' '}
            <Link to="/services/" className="font-semibold text-teal hover:underline">
              nos services
            </Link>
            .
          </p>
        </div>

        <p className="reveal mt-8 text-center text-[0.8rem] text-ink-3">
          Tarifs indicatifs, susceptibles d'évoluer — le devis définitif est toujours annoncé
          avant l'acte.
        </p>
      </section>
    </>
  )
}
