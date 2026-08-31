import { Icon } from '../components/Icon'
import { Link } from '../components/Link'
import { Seo } from '../components/Seo'
import { useI18n } from '../i18n'
import { pathFor } from '../i18n/config'

export function NotFoundPage() {
  const { t, locale, routeId } = useI18n()

  return (
    <>
      <Seo routeId={routeId} title={t.meta.notfound.title} description={t.meta.notfound.description} />
      <section className="section-pad mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center pt-28 pb-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-soft text-teal">
          <Icon name="paw" className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight">
          {t.common.pageNotFoundTitle}
        </h1>
        <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink-2">
          {t.common.pageNotFoundText}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to={pathFor('home', locale)}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.92rem] font-semibold text-paper transition-opacity hover:opacity-85"
          >
            {t.common.backHome}
          </Link>
          <Link
            to={pathFor('contact', locale)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-[0.92rem] font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
          >
            {t.common.contactUs}
          </Link>
        </div>
      </section>
    </>
  )
}
