import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { I18nProvider } from './i18n'
import { routeForPath, isLocale, type Locale, type RouteId } from './i18n/config'
import { usePath } from './router'
import { Layout } from './components/Layout'

/* ------------------------------------------------------------------ */
/* Bootstrap — la racine EST la version FR (SEO local).                */
/* Redirection UNIQUEMENT depuis '/' et UNIQUEMENT si l'utilisateur a  */
/* déjà choisi explicitement une autre langue (localStorage). Jamais   */
/* pour la détection navigateur : les crawlers et les liens partagés   */
/* ne doivent jamais être déportés.                                    */
/* ------------------------------------------------------------------ */

function storedLocale(): Locale | null {
  try {
    const s = localStorage.getItem('cvm_locale')
    return s && isLocale(s) ? s : null
  } catch {
    return null
  }
}

// Redirect racine → choix stocké, AVANT le premier rendu (pas de flash)
if (window.location.pathname === '/' && storedLocale() && storedLocale() !== 'fr') {
  window.location.replace(`/${storedLocale()}/`)
}

function App() {
  const path = usePath()
  const route = routeForPath(path)
  const locale: Locale = route?.locale ?? storedLocale() ?? 'fr'
  const routeId: RouteId = route?.id ?? 'notfound'

  return (
    <I18nProvider locale={locale} routeId={routeId}>
      <Layout />
    </I18nProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
