import { useEffect } from 'react'
import { usePath } from '../router'

/* ------------------------------------------------------------------ */
/* Hooks de navigation/révélation — routeur maison (pas react-router)  */
/* ------------------------------------------------------------------ */

export function useReveal() {
  const path = usePath()
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
  }, [path])
}
