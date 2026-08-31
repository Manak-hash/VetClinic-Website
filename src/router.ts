import { useState, useSyncExternalStore, type MouseEvent } from 'react'
import { routeForPath, pathFor, type Locale, type RouteId } from './i18n/config'

/* ------------------------------------------------------------------ */
/* Routeur maison manifest-driven — vraies ancres <a href> (crawlable), */
/* navigation programmatique via navigate() uniquement.                */
/* ------------------------------------------------------------------ */

function getPath(): string {
  return window.location.pathname
}

const listeners = new Set<() => void>()

let currentPath = typeof window !== 'undefined' ? getPath() : '/'

function emit() {
  currentPath = getPath()
  listeners.forEach((l) => l())
}

export function navigate(to: string) {
  if (to === currentPath) {
    window.scrollTo(0, 0)
    return
  }
  window.history.pushState(null, '', to)
  emit()
}

export function usePath(): string {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      window.addEventListener('popstate', cb)
      return () => {
        listeners.delete(cb)
        window.removeEventListener('popstate', cb)
      }
    },
    () => currentPath,
    () => '/',
  )
}

/** Résout la route courante. 404 logique si inconnue. */
export function useRoute(): { id: RouteId; locale: Locale } | null {
  const path = usePath()
  return routeForPath(path)
}

/** Vraie ancre : crawlable, clic-milieu/ctrl OK, preventDefault sinon. */
export function useLinkHandler(to: string) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }
}

/** Scroll to top à chaque changement de route (pas au premier rendu). */
export function ScrollToTop() {
  const path = usePath()
  const [lastPath, setLastPath] = useState(path)
  if (path !== lastPath) {
    setLastPath(path)
    window.scrollTo(0, 0)
  }
  return null
}

export { pathFor }
