import { useRoute } from '../router'
import { HomePage } from './HomePage'
import { ServicesPage } from './ServicesPage'
import { EquipePage } from './EquipePage'
import { FaqPage } from './FaqPage'
import { ContactPage } from './ContactPage'
import { ZonesPage, QuartierPage } from './ZonesPage'
import { NotFoundPage } from './NotFoundPage'

/* ------------------------------------------------------------------ */
/* Aiguillage manifest-driven : routeId -> composant                   */
/* ------------------------------------------------------------------ */

export function PageOutlet() {
  const route = useRoute()

  if (!route) return <NotFoundPage />

  switch (route.id) {
    case 'home':
      return <HomePage />
    case 'services':
      return <ServicesPage />
    case 'equipe':
      return <EquipePage />
    case 'faq':
      return <FaqPage />
    case 'contact':
      return <ContactPage />
    case 'zones':
      return <ZonesPage />
    case 'zoneMaarif':
      return <QuartierPage quartierKey="maarif" />
    case 'zoneGauthier':
      return <QuartierPage quartierKey="gauthier" />
    case 'zoneAnfa':
      return <QuartierPage quartierKey="anfa" />
    default:
      return <NotFoundPage />
  }
}
