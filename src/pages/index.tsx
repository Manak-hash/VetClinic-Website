import { lazy, Suspense } from 'react'
import { useRoute } from '../router'
import { HomePage } from './HomePage'
import { NotFoundPage } from './NotFoundPage'

/* ------------------------------------------------------------------ */
/* Aiguillage manifest-driven : routeId -> composant.                  */
/* Home = eager (LCP), les autres pages = lazy (code-split : le JS des */
/* 4 autres pages n'est plus parsé sur la route courante).             */
/* ------------------------------------------------------------------ */

const ServicesPage = lazy(() => import('./ServicesPage').then((m) => ({ default: m.ServicesPage })))
const EquipePage = lazy(() => import('./EquipePage').then((m) => ({ default: m.EquipePage })))
const FaqPage = lazy(() => import('./FaqPage').then((m) => ({ default: m.FaqPage })))
const ContactPage = lazy(() => import('./ContactPage').then((m) => ({ default: m.ContactPage })))
const ZonesPage = lazy(() => import('./ZonesPage').then((m) => ({ default: m.ZonesPage })))
const QuartierPage = lazy(() => import('./ZonesPage').then((m) => ({ default: m.QuartierPage })))

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
    default:
      page = <NotFoundPage />
  }

  // SSG : le HTML rendu contient déjà la page complète. Suspense ne doit
  // remplacer le contenu QUE si le chunk lazy n'est pas encore chargé.
  return <Suspense fallback={<PageFallback />}>{page}</Suspense>
}
