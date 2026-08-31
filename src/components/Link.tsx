import type { CSSProperties, ReactNode, MouseEvent } from 'react'
import { useLinkHandler } from '../router'

/** Ancre crawlable avec navigation SPA. */
export function Link({
  to,
  children,
  className,
  ariaLabel,
  style,
}: {
  to: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  style?: CSSProperties
}) {
  const handle = useLinkHandler(to)
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => handle(e)
  return (
    <a href={to} onClick={onClick} className={className} aria-label={ariaLabel} style={style}>
      {children}
    </a>
  )
}
