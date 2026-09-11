/**
 * Image responsive AVIF/WebP avec fallback JPEG.
 * Les variantes sont générées par plugins/generate-images.mjs (prebuild)
 * dans /img/<base>-<w>.avif|webp + /img/<base>.jpg.
 * src = source originale (public/) — sert de fallback ultime si /img absente.
 */

const SIZES_DEFAULT = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw'

export function ResponsiveImg({
  base,
  src,
  alt,
  widths,
  sizes = SIZES_DEFAULT,
  className,
  loading = 'lazy',
  fetchPriority,
}: {
  /** Base du nom de fichier dans public/img (sans extension) */
  base: string
  /** Fallback original (chemin public/) */
  src: string
  alt: string
  /** Largeurs réellement générées (cf. manifest) — évite un fetch cassé */
  widths: readonly number[]
  sizes?: string
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}) {
  const last = widths[widths.length - 1]
  const avif = widths.map((w) => `/img/${base}-${w}.avif ${w}w`).join(', ')
  const webp = widths.map((w) => `/img/${base}-${w}.webp ${w}w`).join(', ')
  return (
    <picture>
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={src}
        srcSet={widths.map((w) => `/img/${base}-${w}.jpg ${w}w`).join(', ')}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        // Fallback silencieux vers l'original si une variante manque
        onError={(e) => {
          const img = e.currentTarget
          if (img.srcset) {
            img.srcset = ''
            img.src = src
          }
        }}
        data-last-width={last}
      />
    </picture>
  )
}
