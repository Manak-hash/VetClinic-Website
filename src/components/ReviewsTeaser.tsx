import { Icon } from '../components/Icon'
import { RATING_LABEL_FR, REVIEWS, type Review } from '../reviews'
import { CLINIC } from '../data'

/* ------------------------------------------------------------------ */
/* Étoiles — rendu demi-étoile pour la moyenne (RTL-safe : pure déco,  */
/* aria-label porte l'info).                                           */
/* ------------------------------------------------------------------ */
function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = value >= i - 0.25
        const half = !filled && value >= i - 0.75
        if (filled) return <Icon key={i} name="star" className="h-4 w-4 text-amber-400" />
        if (half)
          return (
            <span key={i} className="relative inline-block h-4 w-4">
              <Icon name="starEmpty" className="absolute inset-0 h-4 w-4 text-line" />
              <span className="absolute inset-0 w-1/2 overflow-hidden">
                <Icon name="star" className="h-4 w-4 text-amber-400" />
              </span>
            </span>
          )
        return <Icon key={i} name="starEmpty" className="h-4 w-4 text-line" />
      })}
    </span>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="reveal flex h-full flex-col rounded-2xl border border-line bg-white p-6">
      <Stars value={review.stars} />
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-2">
        « {review.text} »
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-soft font-display text-[0.8rem] font-bold text-teal">
          {review.author.charAt(0)}
        </span>
        <span>
          <span className="block text-[0.9rem] font-semibold tracking-tight">
            {review.author}
          </span>
          <span className="block text-[0.8rem] text-ink-2">{review.when}</span>
        </span>
      </figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------------ */
/* Avis — extraits réels de la fiche Google + lien vers la fiche.      */
/* Les libellés viennent du dictionnaire via props (t.home.reviews).   */
/* ------------------------------------------------------------------ */
export function ReviewsTeaser({
  kicker,
  h2,
  viewAll,
  basedOn,
}: {
  kicker: string
  h2: string
  viewAll: string
  basedOn: string
}) {
  return (
    <section className="section-pad border-t border-line bg-paper-2/50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{kicker}</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight">
              {h2}
            </h2>
          </div>
          <div className="shrink-0">
            <span className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold tracking-tight">
                {RATING_LABEL_FR}
              </span>
              <Stars value={4.3} />
            </span>
            <a
              href={CLINIC.reviewsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-teal hover:underline"
            >
              {viewAll}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.author} review={r} />
          ))}
        </div>

        <p className="reveal mt-6 text-center text-[0.82rem] text-ink-2">
          {basedOn}
        </p>
      </div>
    </section>
  )
}
