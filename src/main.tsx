import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { I18nProvider, detectLocale } from './i18n'
import { routeForPath, isLocale, type Locale, type RouteId } from './i18n/config'
import { usePath } from './router'
import { Layout } from './components/Layout'

/* ------------------------------------------------------------------ */
/* Bootstrap : la racine EST la version FR (SEO local), pas de redirect */
/* auto. detectLocale ne sert qu'au fallback si chemin inconnu.        */
/* ------------------------------------------------------------------ */

function storedLocale(): Locale | null {
  try {
    const s = localStorage.getItem('cvm_locale')
    return s && isLocale(s) ? s : null
  } catch {
    return null
  }
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

// detectLocale reste exporté pour les tests — non utilisé au boot racine
void detectLocale
