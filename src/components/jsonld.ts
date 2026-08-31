import { CLINIC, FAQ } from '../data'

/* ------------------------------------------------------------------ */
/* JSON-LD partagés — séparés du composant Seo (react-refresh)         */
/* ------------------------------------------------------------------ */

const SITE_URL = 'https://cliniquevetomaarif.ma'

/* LocalBusiness / VeterinaryCare — site entier */
export const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: CLINIC.name,
  url: SITE_URL,
  telephone: `+212${CLINIC.phone.replace(/\s/g, '').replace(/^0/, '')}`,
  email: CLINIC.email,
  foundingDate: CLINIC.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC.address.street,
    addressLocality: 'Casablanca',
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
  areaServed: ['Maârif', 'Gauthier', 'Anfa', 'Casablanca'].map((n) => ({
    '@type': 'Place',
    name: n,
  })),
  medicalSpecialty: 'VeterinaryCare',
  availableService: [
    'Consultation vétérinaire',
    'Chirurgie vétérinaire',
    'Radiographie vétérinaire',
    'Hospitalisation',
    'Urgences vétérinaires',
  ].map((n) => ({ '@type': 'MedicalProcedure', name: n })),
}

/* FAQPage complet */
export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/* Teaser FAQ (3 premières questions) — accueil */
export const FAQ_TEASER_LD = faqJsonLd(FAQ.slice(0, 3))
