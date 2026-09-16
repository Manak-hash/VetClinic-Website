import { Suspense } from 'react'
import { useRoute } from '../router'
import { HomePage } from './HomePage'
import { ServicesPage } from './ServicesPage'
import { EquipePage } from './EquipePage'
import { FaqPage } from './FaqPage'
import { ContactPage } from './ContactPage'
import { ZonesPage, QuartierPage } from './ZonesPage'
import { NotFoundPage } from './NotFoundPage'
import { PrivacyPage } from './PrivacyPage'

/* Imports STATIQUES : le SSG (renderToString) ne résout pas les import()
 * lazy — chaque shell sauf la home partait avec un corps vide (seuls le
 * header/footer étaient pré-rendus). Le site fait ~400 kB de JS au total :
 * le code-splitting économisait ~25 kB sur la route courante, au prix
 * d'un HTML prerenderé incomplet (SEO) et d'un flash Suspense à
 * l'hydratation. Le HTML complet d'abord. */

function PageFallback() {
  return <div aria-hidden="true" />
}

export function PageOutlet() {
  const route = useRoute()

  if (!route) return <NotFoundPage />

  let page: React.ReactNode
  switch (route.id) {
    case 'home':
      page = <HomePage />
      break
    case 'services':
      page = <ServicesPage />
      break
    case 'equipe':
      page = <EquipePage />
      break
    case 'faq':
      page = <FaqPage />
      break
    case 'contact':
      page = <ContactPage />
      break
    case 'zones':
      page = <ZonesPage />
      break
    case 'zoneMaarif':
      page = <QuartierPage quartierKey="maarif" />
      break
    case 'zoneGauthier':
      page = <QuartierPage quartierKey="gauthier" />
      break
    case 'zoneAnfa':
      page = <QuartierPage quartierKey="anfa" />
      break
    case 'privacy':
      page = <PrivacyPage />
      break
    default:
      page = <NotFoundPage />
  }

  return <Suspense fallback={<PageFallback />}>{page}</Suspense>
}
