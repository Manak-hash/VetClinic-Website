import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page introuvable | Clinique Vétérinaire Maârif"
        description="Cette page n'existe pas. Retour à l'accueil de la Clinique Vétérinaire Maârif, Casablanca."
        path="/404"
      />
      <section className="section-pad mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center pt-28 pb-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-soft text-teal">
          <Icon name="paw" className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight">
          Cette page s'est enfuie
        </h1>
        <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink-2">
          Même les pages se perdent parfois. Le plus simple : revenir à l'accueil, ou nous écrire
          directement sur WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.92rem] font-semibold text-paper transition-opacity hover:opacity-85"
          >
            Retour à l'accueil
          </Link>
          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-[0.92rem] font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
}
