/* ------------------------------------------------------------------ */
/* Données non-textuelles — dérivées de content/site.json (Sveltia).   */
/* Tout le contenu ÉDITABLE vit dans content/*.json ; le contenu       */
/* rédactionnel statique vit dans src/i18n/*.ts.                       */
/* ------------------------------------------------------------------ */

import { SITE } from './content'

export const CLINIC = {
  name: 'Clinique Vétérinaire Maârif',
  shortName: 'CVM',
  address: {
    street: SITE.address_street,
    city: 'Casablanca',
    district: 'Maârif',
    zip: SITE.address_zip,
    country: 'MA',
    lat: SITE.lat,
    lng: SITE.lng,
  },
  phone: SITE.phone,
  phone2: SITE.phone2,
  urgency: SITE.urgency,
  whatsapp: SITE.whatsapp,
  email: SITE.email,
  founded: SITE.founded,
  mapsEmbed: `https://maps.google.com/maps?cid=${SITE.maps_cid}&z=16&hl=fr&output=embed`,
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Clinique+V%C3%A9t%C3%A9rinaire+Maarif+60+Boulevard+Bir+Anzarane+Casablanca',
  reviewsLink: `https://maps.google.com/maps?cid=${SITE.maps_cid}&hl=fr`,
  instagram: SITE.instagram,
}

export const TEL_CLINIC = `+212${CLINIC.phone.replace(/\s/g, '').replace(/^0/, '')}`
export const TEL_URGENCE = `+212${CLINIC.urgency.replace(/\s/g, '').replace(/^0/, '')}`
export const WA_LINK = `https://wa.me/${CLINIC.whatsapp}`
