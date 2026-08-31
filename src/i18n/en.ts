/* ================================================================== */
/* EN dictionary — typed against Messages (fr.ts is the source of      */
/* truth). tsc enforces key parity in both directions. No `as const`.  */
/* ================================================================== */

import type { Messages } from './fr'

const en: Messages = {
  meta: {
    home: {
      title: 'Maârif Veterinary Clinic — Veterinarian in Casablanca since 2002',
      description:
        'Your veterinarian in Maârif, Casablanca: consultations for dogs, cats and exotic pets, surgery, imaging, emergencies. 60 Bd Bir Anzarane. Mon–Fri 9am – 7pm.',
    },
    services: {
      title: 'Services — Consultations, surgery, imaging | Maârif Veterinary Clinic Casablanca',
      description:
        'Dog, cat and exotic pet consultations, surgery with an upfront quote, X-rays, hospitalization, nutrition and emergency care in Maârif, Casablanca.',
    },
    equipe: {
      title: 'The team — Dr Bassir | Maârif Veterinary Clinic Casablanca',
      description:
        'Dr Bassir and the team at Maârif Veterinary Clinic: over 20 years of surgical experience serving the animals of Casablanca since 2002.',
    },
    faq: {
      title: 'FAQ — Prices, hours, emergencies | Maârif Veterinary Clinic Casablanca',
      description:
        'Frequently asked questions: consultation prices, opening hours, emergencies, appointments, exotic pets, parking. Maârif Veterinary Clinic, Casablanca.',
    },
    contact: {
      title: 'Contact & Appointments — Maârif Veterinary Clinic, Casablanca',
      description:
        'Book an appointment: WhatsApp, phone or emergency line. 60 Bd Bir Anzarane, Maârif, Casablanca. Mon–Fri 9am – 7pm, Sat 9am – 2pm.',
    },
    zones: {
      title: 'Veterinarian in Casablanca — Areas served | Maârif Veterinary Clinic',
      description:
        'Your veterinarian in Maârif, Gauthier and Anfa: directions, private parking and access from every Casablanca neighborhood.',
    },
    zoneMaarif: {
      title: 'Veterinarian in Maârif, Casablanca | Maârif Veterinary Clinic',
      description:
        'Veterinary clinic for Maârif residents, Casablanca: directions, private parking in front of the clinic, local landmarks. Dogs, cats and exotic pets (rabbits, ferrets, rodents, hedgehogs) — surgery and emergencies.',
    },
    zoneGauthier: {
      title: 'Veterinarian in Gauthier, Casablanca | Maârif Veterinary Clinic',
      description:
        'Veterinary clinic for Gauthier residents, Casablanca: directions from Gauthier, private parking, local landmarks. Dogs, cats and exotic pets (rabbits, ferrets, rodents, hedgehogs) — surgery and emergencies.',
    },
    zoneAnfa: {
      title: 'Veterinarian in Anfa, Casablanca | Maârif Veterinary Clinic',
      description:
        'Veterinary clinic for Anfa residents, Casablanca: directions from Anfa, private parking, local landmarks. Dogs, cats and exotic pets (rabbits, ferrets, rodents, hedgehogs) — surgery and emergencies.',
    },
    notfound: {
      title: 'Page not found | Maârif Veterinary Clinic',
      description: "This page doesn't exist. Head back to the home page of Maârif Veterinary Clinic, Casablanca.",
    },
  },

  nav: {
    home: 'Home',
    services: 'Services',
    equipe: 'The team',
    faq: 'FAQ',
    contact: 'Contact',
    zones: 'Areas served',
  },

  common: {
    clinicName: 'Maârif Veterinary Clinic',
    clinicNameShort: 'MAARIF',
    headerLine1: 'Veterinary Clinic',
    footerLine1: 'Veterinary Clinic',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    addressCity: 'Casablanca',
    tagline: 'Your pet, in good hands.',
    footerBlurb:
      'We care for all your pets — dogs, cats and exotic animals — in the heart of Maârif since 2002.',
    bookWhatsapp: 'Book an appointment',
    callClinic: 'Call the clinic',
    callUrgency: 'Emergency',
    urgencyLabel: 'Emergencies',
    openMap: 'Open in Google Maps',
    ourServices: 'Our services',
    allServices: 'All our services',
    allAreas: 'All areas',
    contactUs: 'Contact us',
    backHome: 'Back to home',
    languageMenu: 'Change language',
    ramadan: 'Ramadan',
    ramadanNote: 'open from 9:00am to 4:00pm.',
    hoursLabel: 'Opening hours',
    addressLabel: 'Address',
    hoursTable: [
      { days: 'Monday – Friday', hours: '9am – 7pm' },
      { days: 'Saturday', hours: '9am – 2pm' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    footerHours: 'Open Mon–Fri 9am – 7pm · Sat 9am – 2pm',
    rights: '— All rights reserved',
    designedBy: 'Website designed by OmniRise',
    breadcrumbHome: 'Home',
    breadcrumbZones: 'Areas',
    pageNotFoundTitle: 'This page ran off',
    pageNotFoundText:
      'Even pages get lost sometimes. The simplest fix: head back home, or message us directly on WhatsApp.',
    callPrice: '05 22 23 30 95',
  },

  home: {
    eyebrow: 'Casablanca · Since 2002',
    h1a: 'Your pet,',
    h1b: 'in good hands.',
    sub: 'Dogs, cats and exotic pets. Consultations, surgery, imaging and emergencies — in the heart of Maârif, on Boulevard Bir Anzarane.',
    trust: [
      { big: '2002', small: 'in Maârif since' },
      { big: '20+ years', small: 'of surgical experience' },
      { big: '9am – 7pm', small: 'Monday to Friday' },
      { big: 'Emergencies', small: 'direct line, 7 days a week' },
    ],
    servicesKicker: 'The clinic',
    servicesH2: 'Everything your pet needs, under one roof',
    surgeryKicker: 'Surgery',
    surgeryH2: 'A rigorous protocol, in four steps',
    surgeryP:
      'Pre-operative visit with a precise quote, aseptic preparation, anesthesia dosed to the gram, pain management. From spays and neuters to orthopedic surgery: the same standard of care, every time.',
    surgeryCta: 'See the full protocol',
    surgeryCaption: 'In the operating room — procedures performed at the clinic.',
    zonesKicker: 'Casablanca',
    zonesH2: 'Your veterinarian, wherever you live',
    faqKicker: 'Frequently asked questions',
    faqH2: 'The quick answers',
    ctaH2: 'An appointment, a question, an emergency?',
    ctaP: 'WhatsApp for everything that can wait. The direct line for everything that can’t.',
  },

  services: {
    heroKicker: 'Our services',
    heroH1: 'Everything your pet needs, under one roof',
    heroSub:
      'Dogs, cats and exotic pets. Consultations, surgery, imaging, hospitalization and emergencies — in the heart of Maârif, on Boulevard Bir Anzarane.',
    interiorCaption: 'Inside the clinic, Boulevard Bir Anzarane',
    findUs: 'Find us',
    surgeryKicker: 'Surgery',
    surgeryH2: 'A wide range of procedures, from routine to essential',
    surgeryP:
      'Spays, neuters and cosmetic procedures, or treatment of disease: every operation follows the same rigorous four-step protocol.',
    swipeHint: 'Swipe to follow the protocol, step by step',
    stepLabel: (n: string) => `Step ${n} of 4`,
    prevStep: 'Previous step',
    nextStep: 'Next step',
    interventionsTitle: 'Our most common procedures',
    aftercareTitle: 'After the procedure',
    photosCaption: 'In the operating room — procedures performed at the clinic.',
    ctaTitle: 'A procedure in mind? Start with a message.',
    ctaP: 'Describe the situation on WhatsApp: Dr Bassir will tell you whether a pre-operative visit is needed and what it will include.',
    ctaLabel: 'Ask a surgery question',
    interventionAreas: [
      {
        area: 'Reproductive system',
        items: ['Ovariohysterectomy (dog and cat spays)', 'Mastectomy (mammary tumors)'],
      },
      {
        area: 'Skin and subcutaneous tissue',
        items: ['Removal of cysts, warts and skin tumors', 'Skin and muscle sutures'],
      },
      { area: 'Urinary system', items: ['Cystotomy (bladder stones)', 'Urethrostomy'] },
      { area: 'Digestive system', items: ['Enterotomy (foreign bodies)', 'Enterectomy (necrosis, tumors)'] },
      {
        area: 'Other abdominal surgery',
        items: ['Splenectomy (spleen)', 'Herniorrhaphy (umbilical, inguinal hernias)'],
      },
      {
        area: 'Bones and joints',
        items: [
          'Intramedullary pinning (fractures)',
          'Cranial cruciate ligament repair',
          'Luxation reduction',
          'Femoral head excision',
        ],
      },
    ],
    aftercare: [
      'Stitches removed 10 to 12 days after surgery (or dissolvable stitches that disappear on their own within 3–4 weeks).',
      'Antibiotics for 5 to 6 days in most cases, painkillers when needed.',
      'A dressing change scheduled within 5 days if your pet goes home bandaged.',
      'Short hospitalization: usually just one day, going home the same evening.',
    ],
    protocol: [
      {
        short: 'Pre-operative visit',
        title: 'We check, we explain, we quote',
        body: 'Before every surgery: a health check of your pet, an explanation of the reasons for the procedure, how it will unfold and what recovery involves. You leave with a precise quote covering the operation and all associated care.',
      },
      {
        short: 'Preparation',
        title: 'Zero risk of infection',
        body: 'The area is clipped, cleaned with a disinfecting foam solution, then swabbed repeatedly with alcohol followed by Betadine. An operating-room protocol, followed to the letter.',
      },
      {
        short: 'Anesthesia',
        title: 'Doses measured to the gram',
        body: 'Every animal is weighed precisely so anesthetic doses can be tailored. For at-risk patients or longer procedures: an intravenous catheter, intubation and respiratory monitoring are standard.',
      },
      {
        short: 'Pain management',
        title: 'A gentler recovery',
        body: 'Analgesics are injected before or during the procedure. They enhance the anesthesia, allow lower doses, a gentler wake-up and a faster recovery.',
      },
    ],
    items: {
      consultations: {
        title: 'Consultations',
        short:
          'Dogs, cats and exotic pets (rabbits, ferrets, rodents, hedgehogs…). Health checks, diagnosis and follow-up care for your pet.',
        body: [
          'Every consultation begins with a full clinical examination: weight, temperature, auscultation, dental condition, skin and coat. We take the time to explain what we observe and to answer your questions.',
          'We welcome all pets — dogs, cats and exotic animals (rabbits, ferrets, rodents, hedgehogs…). Vaccination records, deworming, nutritional advice: your pet’s care is continuous, visit after visit.',
        ],
      },
      chirurgie: {
        title: 'Surgery',
        short:
          'Spays and neuters, tumors, bladder stones, fractures… A wide range of procedures, always with a precise quote upfront.',
        body: [
          'From routine spays and neuters to orthopedic surgery, every operation follows the same rigorous four-step protocol: a pre-operative visit with a precise quote, aseptic preparation of the surgical field, anesthesia dosed to the gram, and pain management.',
          'Hospitalization is usually short: your pet comes home the same evening, with written aftercare instructions and a scheduled check-up.',
        ],
      },
      imagerie: {
        title: 'Imaging & X-rays',
        short: 'X-rays to locate a fracture, check a calcification or guide a diagnosis.',
        body: [
          'Radiography is the first-line examination for exploring fractures, the airways, the abdomen or locating foreign bodies. It guides the diagnosis and lets us calmly decide on next steps: medical treatment or surgery.',
          'X-rays are taken on site, often the same day as the consultation, and explained to you.',
        ],
      },
      hospitalisation: {
        title: 'Hospitalization',
        short:
          'Post-operative monitoring during the day: in most cases your companion goes home the very evening of the procedure.',
        body: [
          'After surgery or a delicate procedure, your pet stays with us for monitoring: supervised recovery, pain relief, temperature and dressing checks.',
          'In the vast majority of cases, discharge happens the same evening, with written aftercare instructions and a stitch-check appointment booked.',
        ],
      },
      nutrition: {
        title: 'Nutrition',
        short:
          'Selected foods for all dogs and cats, including during illness or after surgery.',
        body: [
          'Diet has a direct impact on the health of the kidneys, liver and joints. We recommend and supply veterinary diets suited to every age and condition — including after surgery.',
        ],
      },
      urgences: {
        title: 'Emergencies',
        short: 'A dedicated direct line. Call before you come — the team will guide you immediately.',
        body: [
          'A dedicated direct line handles emergencies: poisoning, accidents, breathing difficulties, difficult births. Call before you come — the team will guide you and prepare for your arrival.',
        ],
      },
    },
  },

  equipe: {
    heroKicker: 'The team',
    heroH1: '“We will always do our utmost to make you feel at home”',
    heroSub: 'Dr Bassir and his team, serving the animals of Casablanca since 2002.',
    whoKicker: 'About us',
    whoH2: 'A neighborhood veterinarian, established for the long run',
    body1:
      'Established since 2002 on Rue Ahmed El Mejatti, the clinic moved in 2015 to 60, Boulevard Bir Anzarane, in central Casablanca — premises designed to welcome your pets in the best possible conditions.',
    body2:
      'We care for all your pets: dogs, cats and exotic animals (rabbits, ferrets, rodents, hedgehogs…). Consultations, surgery, imaging, hospitalization: your pet’s care is continuous, visit after visit.',
    body3:
      'As for the team, the clinic deliberately stays small. You are welcomed by familiar faces, and Dr Bassir personally follows every surgical case from start to finish.',
    body4: 'We welcome our clients in four languages: Arabic, French, English and Russian.',
    languagesH2: 'We speak your language',
    languagesP: 'The whole team welcomes and treats pets in four languages — in consultations and on the phone alike.',
    inPractice: 'The clinic in practice',
    facts: [
      { title: 'Mon – Fri', sub: '9am – 7pm · Sat 9am – 2pm' },
      { title: 'Maârif, Casablanca', sub: '60 Bd Bir Anzarane' },
      { title: 'Phone', sub: '05 22 23 30 95' },
      { title: 'Emergencies', sub: '06 61 49 26 18' },
    ],
    servicesCtaH: 'Our services',
    servicesCtaP: 'Consultations, surgery, imaging, hospitalization — the details of every service.',
    servicesCtaLabel: 'View services',
    rdvCtaH: 'Book an appointment',
    rdvCtaP: 'The simplest way: a WhatsApp message, or call the clinic at 05 22 23 30 95.',
    outsideHours: 'Emergencies outside opening hours:',
    urgencyWord: 'Emergency',
    phoneLabel: 'Phone',
    districtLabel: 'Maârif, Casablanca',
    directorCaption: 'Dr Bassir — Director',
  },

  faq: {
    heroKicker: 'Frequently asked questions',
    heroH1: 'You may be wondering…',
    heroSub: 'Answers to the questions we hear most often. Otherwise, a WhatsApp message beats a moment’s hesitation.',
    moreTitle: 'A question that isn’t here?',
    moreP: 'Write to us on WhatsApp — quick replies, even for a simple question about prices or availability.',
    moreCta: 'Ask your question',
    moreLinkP1: 'Or browse',
    moreLinkP2: 'our services',
    disclaimer:
      'Quotes are always given before any procedure. WhatsApp remains the fastest way to reach us.',
    items: [
      {
        q: 'How much does a consultation or procedure cost?',
        a: 'Our prices are provided on request — by WhatsApp or phone. For any procedure, a precise quote is given before anything is done: no surprises, you know exactly what you are paying for.',
      },
      {
        q: 'What are your opening hours?',
        a: 'Monday–Friday 9am – 7pm, Saturday 9am – 2pm, closed on Sunday. During Ramadan, the clinic is open from 9am to 4pm.',
      },
      {
        q: 'What should I do in an emergency?',
        a: 'Call the emergency line at 06 61 49 26 18 — it is Dr Bassir’s direct line. Describe the situation: we will tell you immediately what to do and prepare for your arrival.',
      },
      {
        q: 'Do I need an appointment?',
        a: 'Appointments are not mandatory but strongly recommended: WhatsApp is the easiest way, or by phone. Emergencies are always given absolute priority.',
      },
      {
        q: 'Do you treat rabbits, ferrets and rodents (exotic pets)?',
        a: 'Yes. We see exotic pets: rabbits, ferrets, rodents and hedgehogs. If possible, bring a photo or a description of your pet’s habitat so we can prepare for the consultation.',
      },
      {
        q: 'Where can I park near the clinic?',
        a: 'The clinic has private parking in front of the entrance, reserved for our clients: you park right outside, without hunting for a spot. 60, Boulevard Bir Anzarane is in the heart of Maârif.',
      },
      {
        q: 'Do you speak other languages?',
        a: 'Yes. At the clinic, we speak four languages: Arabic, French, English and Russian. You will be welcomed in whichever language suits you.',
      },
    ],
  },

  contact: {
    heroKicker: 'Contact',
    heroH1: 'Book an appointment',
    heroSub: 'The simplest way is a message: write to us on WhatsApp, or call the clinic directly. In an emergency, Dr Bassir’s direct line answers.',
    whatsappH: 'WhatsApp',
    whatsappP: 'Quick replies. Send a photo of your pet so we can prepare for the consultation.',
    whatsappCta: 'Message us on WhatsApp',
    phoneP: 'The clinic’s landline, during opening hours.',
    phoneCta: 'Call the clinic',
    urgencyP: 'Dr Bassir’s direct line, dedicated to emergencies.',
    seeTeam: 'Meet the team',
    seeAreas: 'Areas served',
    seeFaq: 'Frequently asked questions',
    emailLabel: 'Email',
  },

  zones: {
    heroKicker: 'Casablanca',
    heroH1: 'Your veterinarian, wherever you live',
    heroSub:
      'The clinic sits in the heart of Maârif — but it cares for animals from across central Casablanca. Here is how to reach us from the three main neighborhoods we serve.',
    otherTitle: 'In another part of Casablanca?',
    otherP:
      'We welcome clients from all over the city center — Maârif, Gauthier, Anfa, Racine, Bourgogne, California… Call us: we will point you to the simplest route and the closest parking.',
    routesLabel: 'Directions from',
    askDirections: 'Ask for directions',
    cardP: 'Directions, parking and landmarks from',
    cardCta: 'Page',
    quartier: {
      maarif: {
        title: 'Veterinarian in Maârif, Casablanca',
        intro:
          'The clinic is in the very heart of Maârif: we are quite literally your neighborhood veterinarian. 60, Boulevard Bir Anzarane — the clinic you walk past on your way to the shops.',
        landmarks: [
          'A stone’s throw from the Maârif market and its shopping streets',
          'A 5-minute walk from the Bir Anzarane × Massira crossing',
          'Close to the Maârif flea market and Rue Ibn Batouta',
        ],
        access:
          'Boulevard Bir Anzarane is served by bus lines crossing Maârif north to south. By car, it is easily reached from Rue Ibn Batouta or Avenue des FAR.',
        parking:
          'Private parking in front of the clinic, reserved for our clients — you park right outside, even at rush hour.',
        whyUs:
          'We have cared for the neighborhood’s animals since 2002: many of our clients have entrusted us with two, sometimes three generations of pets. It is that continuity that makes a neighborhood veterinarian unlike any other.',
      },
      gauthier: {
        title: 'Veterinarian in Gauthier, Casablanca',
        intro:
          'From Gauthier, the clinic is a 5-minute drive — head toward Maârif via Boulevard Bir Anzarane. Many of our clients come from Gauthier and upper Anfa.',
        landmarks: [
          '1.5 km from the Gauthier Market',
          '5 minutes from Boulevard d’Anfa',
          'A 10-minute walk from Lycée Lyautey (via Rue Ibnou Mounir)',
        ],
        access:
          'From Gauthier, follow Boulevard Bir Anzarane southeast: the clinic is on your left after the crossing with Rue Moulay Ismaïl.',
        parking:
          'Private parking in front of the clinic, reserved for our clients — no need to hunt for a spot when coming from Gauthier.',
        whyUs:
          'Gauthier is home to many families with cats and small dogs — our favorite kind of patients. Vaccinations, spays and neuters, senior care: close-to-home follow-up without crossing the city.',
      },
      anfa: {
        title: 'Veterinarian in Anfa, Casablanca',
        intro:
          'From California to upper Anfa, the clinic is under 10 minutes away — Boulevard Bir Anzarane, at the entrance to Maârif. The route is direct via Avenue des FAR.',
        landmarks: [
          '10 minutes from the Hassan II Mosque (via Avenue des FAR)',
          '5 minutes from Anfa Place and Boulevard d’Anfa',
          '10 minutes from the California district (via Boulevard Moulay Youssef)',
        ],
        access:
          'From Anfa, follow Avenue des FAR then turn onto Boulevard Bir Anzarane toward Maârif. The clinic faces the boulevard.',
        parking:
          'Private parking in front of the clinic, reserved for our clients — you park right outside when coming from Anfa.',
        whyUs:
          'Many of our Anfa clients found us during an emergency, then stayed for follow-up care. For families on the coast, we are the reference surgical veterinarian, 10 minutes away.',
      },
    },
    landmarksTitle: (name: string) => `Landmarks from ${name}`,
    byCarTitle: 'By car',
    parkingLabel: 'Parking',
    trustTitle: (name: string) => `Why residents of ${name} trust us`,
    othersTitle: 'Other areas served',
  },
}

export default en
