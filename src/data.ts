/* ------------------------------------------------------------------ */
/* Données non-textuelles — téléphones, adresse, liens, horaires bruts */
/* (Tout le contenu RÉDACTIEL vit dans src/i18n/*.ts)                  */
/* ------------------------------------------------------------------ */

export const CLINIC = {
  name: 'Clinique Vétérinaire Maârif',
  shortName: 'CVM',
  address: {
    street: '60, Boulevard Bir Anzarane',
    city: 'Casablanca',
    district: 'Maârif',
    zip: '20330',
    country: 'MA',
    lat: 33.5876,
    lng: -7.6333,
  },
  phone: '05 22 23 30 95',
  phone2: '05 22 98 96 90',
  urgency: '06 61 49 26 18',
  whatsapp: '212661492618',
  email: 'vetclinicmaarif@gmail.com',
  founded: '2002',
  mapsEmbed:
    'https://maps.google.com/maps?cid=6748401890204772645&z=16&hl=fr&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Clinique+V%C3%A9t%C3%A9rinaire+Maarif+60+Boulevard+Bir+Anzarane+Casablanca',
}

export const TEL_CLINIC = `+212${CLINIC.phone.replace(/\s/g, '').replace(/^0/, '')}`
export const TEL_URGENCE = `+212${CLINIC.urgency.replace(/\s/g, '').replace(/^0/, '')}`
export const WA_LINK = `https://wa.me/${CLINIC.whatsapp}`
