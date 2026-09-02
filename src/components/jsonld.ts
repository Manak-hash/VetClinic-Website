import { SITE_URL, pathFor, type Locale, type RouteId } from '../i18n/config'
import type { Messages } from '../i18n'
import { CLINIC } from '../data'
import { RATING_VALUE, RATING_COUNT } from '../reviews'

/* ------------------------------------------------------------------ */
/* JSON-LD locale-aware — construits depuis les dictionnaires          */
/* ------------------------------------------------------------------ */

/** VeterinaryCare — site entier, traduit par locale. */
export function localBusinessLd(t: Messages) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: t.common.clinicName,
    url: SITE_URL,
    telephone: `+212${CLINIC.phone.replace(/\s/g, '').replace(/^0/, '')}`,
    email: CLINIC.email,
    foundingDate: CLINIC.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLINIC.address.street,
      addressLocality: t.common.addressCity,
      addressRegion: 'Casablanca-Settat',
      postalCode: CLINIC.address.zip,
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC.address.lat,
      longitude: CLINIC.address.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    areaServed: ['Maârif', 'Gauthier', 'Anfa', t.common.addressCity].map((n) => ({
      '@type': 'Place',
      name: n,
    })),
    medicalSpecialty: 'VeterinaryCare',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING_VALUE,
      reviewCount: RATING_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
    availableService: Object.values(t.services.items).map((s) => ({
      '@type': 'MedicalProcedure',
      name: s.title,
    })),
  }
}

/** FAQPage — items traduits. */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/** Fil d'Ariane — noms traduits, chemins par locale. */
export function breadcrumbLd(
  locale: Locale,
  trail: { name: string; id?: RouteId }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.id ? { item: `${SITE_URL}${pathFor(c.id, locale)}` } : {}),
    })),
  }
}
