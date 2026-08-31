import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* ------------------------------------------------------------------ */
/* Hooks de navigation/révélation — séparés du composant Layout        */
/* ------------------------------------------------------------------ */

export function useReveal() {
  const location = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.revealed)')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [location.pathname])
}

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
