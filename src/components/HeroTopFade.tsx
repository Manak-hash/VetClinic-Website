/* ------------------------------------------------------------------ */
/* HeroTopFade — dégradé ink sous la navbar transparente (option D)    */
/* Garantit un fond sombre constant derrière les 64px de nav en haut   */
/* de page, quelle que soit la photo/section en dessous.               */
/* ------------------------------------------------------------------ */

export function HeroTopFade() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-linear-to-b from-ink via-ink/85 to-transparent"
    />
  )
}
