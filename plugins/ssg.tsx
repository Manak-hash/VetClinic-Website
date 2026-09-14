/**
 * SSG — rendu serveur de chaque route au build (bundlé par esbuild dans
 * prerender-locales.ts). Injecté dans les shells à la place d'un
 * <div id="root"> vide : le contenu peint avant hydratation (LCP instantané).
 */
import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import { I18nProvider } from '../src/i18n'
import { routeForPath } from '../src/i18n/config'
import { Layout } from '../src/components/Layout'
import { setMemoryPath } from '../src/router'

export function renderRoute(path: string): string {
  const route = routeForPath(path)
  if (!route) return ''
  setMemoryPath(path)
  return renderToString(
    <StrictMode>
      <I18nProvider locale={route.locale} routeId={route.id}>
        <Layout />
      </I18nProvider>
    </StrictMode>,
  )
}
