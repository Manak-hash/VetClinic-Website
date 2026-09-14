/**
 * Meta SEO par route pour les shells SSG — bundled par esbuild dans
 * prerender-locales.ts. Rend title/description traduits depuis le
 * dictionnaire (la source unique), sans React côté head.
 */
import { MESSAGES } from '../src/i18n'
import { routeForPath } from '../src/i18n/config'

export interface RouteMeta {
  title: string
  description: string
}

export function renderMeta(path: string): RouteMeta {
  const route = routeForPath(path)
  if (!route) return { title: '', description: '' }
  return MESSAGES[route.locale].meta[route.id]
}
