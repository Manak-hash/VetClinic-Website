import { Icon } from '../components/Icon'
import { Seo } from '../components/Seo'
import { Link } from '../components/Link'
import { HeroTopFade } from '../components/HeroTopFade'
import { useI18n } from '../i18n'
import { pathFor } from '../i18n/config'

/* ------------------------------------------------------------------ */
/* Page Confidentialité — zéro collecte, hébergement, tiers, droits    */
/* (loi 09-08 / CNDP). Contenu 100 % traduit depuis le dictionnaire.   */
/* ------------------------------------------------------------------ */

export function PrivacyPage() {
  const { t, locale, routeId } = useI18n()
  const p = t.privacy

  return (
    <>
      <Seo routeId={routeId} title={t.meta.privacy.title} description={t.meta.privacy.description} />

      {/* Hero de page */}
      <section className="section-pad bg-ink pb-16 pt-32 text-paper md:pb-20">
        <HeroTopFade />
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-[#8fd0c9]!">{p.heroKicker}</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
            {p.heroH1}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.04rem] leading-relaxed text-paper/80">
            {p.heroSub}
          </p>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-3xl py-16 md:py-20">
        <div className="space-y-10">
          <section aria-labelledby="privacy-collect" className="reveal">
            <h2 id="privacy-collect" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
              <Icon name="check" className="h-5 w-5 shrink-0 text-teal" />
              {p.collectTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-2">{p.collectBody}</p>
          </section>

          <section aria-labelledby="privacy-host" className="reveal">
            <h2 id="privacy-host" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
              <Icon name="paw" className="h-5 w-5 shrink-0 text-teal" />
              {p.hostTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-2">{p.hostBody}</p>
          </section>

          <section aria-labelledby="privacy-third" className="reveal">
            <h2 id="privacy-third" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
              <Icon name="arrow" className="h-5 w-5 shrink-0 text-teal rtl:-scale-x-100" />
              {p.thirdTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-2">{p.thirdBody}</p>
            <ul className="mt-4 space-y-2.5">
              {p.thirdItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink-2">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="privacy-rights" className="reveal">
            <h2 id="privacy-rights" className="font-display text-lg font-semibold tracking-tight">
              {p.rightsTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-2">{p.rightsBody}</p>
          </section>

          <section aria-labelledby="privacy-cndp" className="reveal">
            <h2 id="privacy-cndp" className="font-display text-lg font-semibold tracking-tight">
              {p.cndpTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-2">{p.cndpBody}</p>
          </section>

          <p className="reveal rounded-xl bg-paper-2 px-4 py-3 text-[0.88rem] leading-relaxed text-ink-2">
            {p.responsible}
          </p>

          <p className="reveal text-[0.8rem] text-ink-3">{p.updated}</p>

          <div className="reveal border-t border-line pt-8">
            <Link
              to={pathFor('contact', locale)}
              className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-teal hover:underline"
            >
              {t.nav.contact}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
