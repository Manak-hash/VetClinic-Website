import type { ReactNode } from 'react'

/* ------------------------------------------------------------------ */
/* Icônes SVG inline (aucune dépendance)                               */
/* ------------------------------------------------------------------ */

export function Icon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    stethoscope: (
      <>
        <path d="M5 3v5a4 4 0 0 0 8 0V3" />
        <path d="M9 12v3a5 5 0 0 0 10 0v-2" />
        <circle cx="19" cy="10" r="2" />
      </>
    ),
    scalpel: (
      <>
        <path d="M4 20l9-9" />
        <path d="M13 11l6-6c1 1 1 3 0 4l-4 4" />
        <path d="M4 20c2 .5 4-.5 5-2" />
      </>
    ),
    xray: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M12 7v6" />
        <path d="M9 10h6" />
        <path d="M9 17h6" />
      </>
    ),
    bed: (
      <>
        <path d="M3 18v-8h13a4 4 0 0 1 4 4v4" />
        <path d="M3 14h17" />
        <circle cx="7.5" cy="9" r="1.8" />
      </>
    ),
    bowl: (
      <>
        <path d="M4 11h16a8 8 0 0 1-16 0z" />
        <path d="M9 7c0-1.5 1-2 1-3.5" />
        <path d="M14 7c0-1.5 1-2 1-3.5" />
      </>
    ),
    alert: (
      <>
        <path d="M12 4l9 16H3l9-16z" />
        <path d="M12 10v4" />
        <path d="M12 17.2v.01" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: <path d="M4 4c0 9 7 16 16 16l1-4-4-2-2 2c-3-1-6-4-7-7l2-2-2-4-4 1z" />,
    paw: (
      <>
        <ellipse cx="7" cy="8" rx="1.6" ry="2.2" />
        <ellipse cx="12" cy="6.6" rx="1.6" ry="2.2" />
        <ellipse cx="17" cy="8" rx="1.6" ry="2.2" />
        <path d="M12 12.5c-3.5 0-6.5 3-6.5 5.5 0 1.7 1.3 2.8 2.8 2.8 1.4 0 2.4-.7 3.7-.7s2.3.7 3.7.7c1.5 0 2.8-1.1 2.8-2.8 0-2.5-3-5.5-6.5-5.5z" />
      </>
    ),
    whatsapp: (
      <path
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.5-.3-2.9.8.8-2.8-.3-.5A8 8 0 0 1 12 4zm-3 3.8c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.6.7 3.1.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.5-1.8-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8.9 8.6c-.2-.5-.4-.6-.6-.7h-.3z"
        fill="currentColor"
        stroke="none"
      />
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </>
    ),
    check: <path d="M4 12.5l5 5L20 6.5" />,
    tap: (
      <>
        <path d="M9 10l4.5 10.5 1.6-4.4 4.4-1.6L9 10z" />
        <path d="M7 3.5V7M3.5 7H7" />
      </>
    ),
    chevl: <path d="M15 6l-6 6 6 6" />,
    chevr: <path d="M9 6l6 6-6 6" />,
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </>
    ),
    question: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.3a2.5 2.5 0 1 1 3.4 2.3c-.7.3-.9.8-.9 1.6" />
        <path d="M12 16.6v.01" />
      </>
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
