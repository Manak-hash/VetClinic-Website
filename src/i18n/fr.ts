/* ================================================================== */
/* DICTIONNAIRE MAÎTRE — FR (source de vérité)                         */
/* Chaque locale (en/ru/ar) est annotée `: Messages` → tsc enforce la   */
/* parité des clés dans les deux sens. PAS de `as const`.               */
/* ================================================================== */

export interface ServiceEntry {
  title: string
  short: string
  body: string[]
}

export interface FaqEntry {
  q: string
  a: string
}

export interface QuartierEntry {
  title: string
  intro: string
  landmarks: string[]
  access: string
  parking: string
  whyUs: string
}

export interface ProtocolEntry {
  short: string
  title: string
  body: string
}

export interface Messages {
  meta: Record<
    'home' | 'services' | 'equipe' | 'faq' | 'contact' | 'zones' | 'zoneMaarif' | 'zoneGauthier' | 'zoneAnfa' | 'notfound',
    { title: string; description: string }
  >

  nav: {
    home: string
    services: string
    equipe: string
    faq: string
    contact: string
    zones: string
  }

  common: {
    clinicName: string
    clinicNameShort: string
    headerLine1: string
    footerLine1: string
    menuOpen: string
    menuClose: string
    languageLabel: string
    addressCity: string
    tagline: string
    footerBlurb: string
    bookWhatsapp: string
    callClinic: string
    callUrgency: string
    urgencyLabel: string
    openMap: string
    ourServices: string
    allServices: string
    allAreas: string
    contactUs: string
    backHome: string
    languageMenu: string
    ramadan: string
    ramadanNote: string
    hoursLabel: string
    addressLabel: string
    hoursTable: { days: string; hours: string }[]
    footerHours: string
    rights: string
    designedBy: string
    breadcrumbHome: string
    breadcrumbZones: string
    pageNotFoundTitle: string
    pageNotFoundText: string
    callPrice: string
  }

  home: {
    eyebrow: string
    h1a: string
    h1b: string
    sub: string
    trust: { big: string; small: string }[]
    servicesKicker: string
    servicesH2: string
    surgeryKicker: string
    surgeryH2: string
    surgeryP: string
    surgeryCta: string
    surgeryCaption: string
    zonesKicker: string
    zonesH2: string
    faqKicker: string
    faqH2: string
    ctaH2: string
    ctaP: string
  }

  services: {
    heroKicker: string
    heroH1: string
    heroSub: string
    interiorCaption: string
    findUs: string
    surgeryKicker: string
    surgeryH2: string
    surgeryP: string
    swipeHint: string
    stepLabel: (n: string) => string
    prevStep: string
    nextStep: string
    interventionsTitle: string
    aftercareTitle: string
    photosCaption: string
    ctaTitle: string
    ctaP: string
    ctaLabel: string
    interventionAreas: { area: string; items: string[] }[]
    aftercare: string[]
    protocol: ProtocolEntry[]
    items: Record<'consultations' | 'chirurgie' | 'imagerie' | 'hospitalisation' | 'nutrition' | 'urgences', ServiceEntry>
  }

  equipe: {
    heroKicker: string
    heroH1: string
    heroSub: string
    whoKicker: string
    whoH2: string
    body1: string
    body2: string
    body3: string
    body4: string
    languagesH2: string
    languagesP: string
    inPractice: string
    facts: { title: string; sub: string }[]
    servicesCtaH: string
    servicesCtaP: string
    servicesCtaLabel: string
    rdvCtaH: string
    rdvCtaP: string
    outsideHours: string
    urgencyWord: string
    phoneLabel: string
    districtLabel: string
    directorCaption: string
  }

  faq: {
    heroKicker: string
    heroH1: string
    heroSub: string
    moreTitle: string
    moreP: string
    moreCta: string
    moreLinkP1: string
    moreLinkP2: string
    disclaimer: string
    items: FaqEntry[]
  }

  contact: {
    heroKicker: string
    heroH1: string
    heroSub: string
    whatsappH: string
    whatsappP: string
    whatsappCta: string
    phoneP: string
    phoneCta: string
    urgencyP: string
    seeTeam: string
    seeAreas: string
    seeFaq: string
    emailLabel: string
  }

  zones: {
    heroKicker: string
    heroH1: string
    heroSub: string
    otherTitle: string
    otherP: string
    routesLabel: string
    askDirections: string
    cardP: string
    cardCta: string
    quartier: Record<'maarif' | 'gauthier' | 'anfa', QuartierEntry>
    landmarksTitle: (name: string) => string
    byCarTitle: string
    parkingLabel: string
    trustTitle: (name: string) => string
    othersTitle: string
  }
}

const fr: Messages = {
  meta: {
    home: {
      title: 'Clinique Vétérinaire Maârif — Vétérinaire à Casablanca depuis 2002',
      description:
        'Votre vétérinaire au Maârif, Casablanca : consultations chiens/chats/NAC, chirurgie, imagerie, urgences. 60 Bd Bir Anzarane. Lun–ven 9h–19h.',
    },
    services: {
      title: 'Services — Consultations, chirurgie, imagerie | Clinique Vétérinaire Maârif Casablanca',
      description:
        "Consultations chiens, chats et NAC, chirurgie avec devis à l'avance, radiographie, hospitalisation, nutrition et urgences au Maârif, Casablanca.",
    },
    equipe: {
      title: "L'équipe — Dr Bassir | Clinique Vétérinaire Maârif Casablanca",
      description:
        "Dr Bassir et l'équipe de la Clinique Vétérinaire Maârif : plus de 20 ans d'expérience chirurgicale au service des animaux de Casablanca depuis 2002.",
    },
    faq: {
      title: 'FAQ — Tarifs, horaires, urgences | Clinique Vétérinaire Maârif Casablanca',
      description:
        "Questions fréquentes : prix d'une consultation, horaires, urgences, rendez-vous, NAC, stationnement. Clinique Vétérinaire Maârif, Casablanca.",
    },
    contact: {
      title: 'Contact & RDV — Clinique Vétérinaire Maârif, Casablanca',
      description:
        'Prendre rendez-vous : WhatsApp, téléphone ou urgence. 60 Bd Bir Anzarane, Maârif, Casablanca. Lun–ven 9h–19h, sam 9h–14h.',
    },
    zones: {
      title: 'Vétérinaire à Casablanca — Zones desservies | Clinique Vétérinaire Maârif',
      description:
        'Votre vétérinaire au Maârif, au Gauthier et à Anfa : itinéraires, stationnement privé et accès depuis chaque quartier de Casablanca.',
    },
    zoneMaarif: {
      title: 'Vétérinaire au Maârif, Casablanca | Clinique Vétérinaire Maârif',
      description:
        'Clinique vétérinaire pour les habitants du Maârif, Casablanca : itinéraire, stationnement privé devant la clinique, repères. Chiens, chats et NAC — chirurgie et urgences.',
    },
    zoneGauthier: {
      title: 'Vétérinaire au Gauthier, Casablanca | Clinique Vétérinaire Maârif',
      description:
        'Clinique vétérinaire pour les habitants du Gauthier, Casablanca : itinéraire depuis le Gauthier, stationnement privé, repères. Chiens, chats et NAC — chirurgie et urgences.',
    },
    zoneAnfa: {
      title: 'Vétérinaire à Anfa, Casablanca | Clinique Vétérinaire Maârif',
      description:
        'Clinique vétérinaire pour les habitants d’Anfa, Casablanca : itinéraire depuis Anfa, stationnement privé, repères. Chiens, chats et NAC — chirurgie et urgences.',
    },
    notfound: {
      title: 'Page introuvable | Clinique Vétérinaire Maârif',
      description: "Cette page n'existe pas. Retour à l'accueil de la Clinique Vétérinaire Maârif, Casablanca.",
    },
  },

  nav: {
    home: 'Accueil',
    services: 'Services',
    equipe: "L'équipe",
    faq: 'FAQ',
    contact: 'Contact',
    zones: 'Zones desservies',
  },

  common: {
    clinicName: 'Clinique Vétérinaire Maârif',
    clinicNameShort: 'MAARIF',
    headerLine1: 'Clinique Vétérinaire',
    footerLine1: 'Clinique Vétérinaire',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    languageLabel: 'Langue',
    addressCity: 'Casablanca',
    tagline: 'Votre animal, entre de bonnes mains.',
    footerBlurb:
      'Nous prenons soin de tous vos animaux domestiques — chiens, chats et NAC — au cœur du Maârif depuis 2002.',
    bookWhatsapp: 'Prendre rendez-vous',
    callClinic: 'Appeler la clinique',
    callUrgency: 'Urgence',
    urgencyLabel: 'Urgences',
    openMap: 'Ouvrir dans Google Maps',
    ourServices: 'Nos services',
    allServices: 'Tous nos services',
    allAreas: 'Toutes les zones',
    contactUs: 'Nous contacter',
    backHome: "Retour à l'accueil",
    languageMenu: 'Changer de langue',
    ramadan: 'Ramadan',
    ramadanNote: 'ouvert de 9h00 à 16h00.',
    hoursLabel: 'Horaires',
    addressLabel: 'Adresse',
    hoursTable: [
      { days: 'Lundi – Vendredi', hours: '9h – 19h' },
      { days: 'Samedi', hours: '9h – 14h' },
      { days: 'Dimanche', hours: 'Fermé' },
    ],
    footerHours: 'Ouvert lun–ven 9h–19h · sam 9h–14h',
    rights: '— Tous droits réservés',
    designedBy: 'Site conçu par OmniRise',
    breadcrumbHome: 'Accueil',
    breadcrumbZones: 'Zones',
    pageNotFoundTitle: 'Cette page s’est enfuie',
    pageNotFoundText:
      'Même les pages se perdent parfois. Le plus simple : revenir à l’accueil, ou nous écrire directement sur WhatsApp.',
    callPrice: '05 22 23 30 95',
  },

  home: {
    eyebrow: 'Casablanca · Depuis 2002',
    h1a: 'Votre animal,',
    h1b: 'entre de bonnes mains.',
    sub: 'Chiens, chats et NAC. Consultations, chirurgie, imagerie et urgences — au cœur du Maârif, sur le boulevard Bir Anzarane.',
    trust: [
      { big: '2002', small: 'au Maârif depuis' },
      { big: '20+ ans', small: 'd’expérience chirurgicale' },
      { big: '9h – 19h', small: 'lundi au vendredi' },
      { big: 'Urgences', small: 'ligne directe 7j/7' },
    ],
    servicesKicker: 'La clinique',
    servicesH2: 'Tout ce dont votre animal a besoin, sous un seul toit',
    surgeryKicker: 'Chirurgie',
    surgeryH2: 'Un protocole rigoureux, en quatre étapes',
    surgeryP:
      'Visite préopératoire avec devis précis, préparation aseptique, anesthésie dosée au gramme près, gestion de la douleur. Stérilisations comme chirurgies orthopédiques : même exigence.',
    surgeryCta: 'Voir le protocole complet',
    surgeryCaption: 'Au bloc opératoire — interventions suivies à la clinique.',
    zonesKicker: 'Casablanca',
    zonesH2: 'Votre vétérinaire, selon votre quartier',
    faqKicker: 'Questions fréquentes',
    faqH2: 'Les réponses rapides',
    ctaH2: 'Un rendez-vous, une question, une urgence ?',
    ctaP: 'WhatsApp pour tout ce qui n’est pas urgent. La ligne directe pour tout ce qui l’est.',
  },

  services: {
    heroKicker: 'Nos services',
    heroH1: 'Tout ce dont votre animal a besoin, sous un seul toit',
    heroSub:
      'Chiens, chats et NAC. Consultations, chirurgie, imagerie, hospitalisation et urgences — au cœur du Maârif, sur le boulevard Bir Anzarane.',
    interiorCaption: 'Les locaux de la clinique, boulevard Bir Anzarane',
    findUs: 'Nous trouver',
    surgeryKicker: 'Chirurgie',
    surgeryH2: 'Une grande variété de chirurgies, de la convenance à la nécessité',
    surgeryP:
      'Stérilisations et interventions esthétiques, ou traitement de pathologies : chaque opération suit le même protocole rigoureux, en quatre étapes.',
    swipeHint: 'Glissez pour suivre le protocole, étape par étape',
    stepLabel: (n: string) => `Étape ${n} sur 4`,
    prevStep: 'Étape précédente',
    nextStep: 'Étape suivante',
    interventionsTitle: 'Interventions les plus fréquentes',
    aftercareTitle: 'Après l’intervention',
    photosCaption: 'Au bloc opératoire — interventions suivies à la clinique.',
    ctaTitle: 'Une intervention en tête ? Commencez par un message.',
    ctaP: 'Décrivez la situation sur WhatsApp : le Dr Bassir vous indique si une visite préopératoire est nécessaire et ce qu’elle comprendra.',
    ctaLabel: 'Poser une question chirurgie',
    interventionAreas: [
      {
        area: 'Appareil génital',
        items: ['Ovariectomie (stérilisation chienne, chatte)', 'Mastectomies (tumeurs mammaires)'],
      },
      {
        area: 'Peau et sous-peau',
        items: ['Exérèse de kystes, verrues, tumeurs cutanées', 'Sutures cutanées et musculaires'],
      },
      { area: 'Appareil urinaire', items: ['Cystotomie (calculs dans la vessie)', 'Urétrostomies'] },
      { area: 'Appareil digestif', items: ['Entérotomie (corps étranger)', 'Entérectomie (nécrose, tumeur)'] },
      {
        area: 'Autres chirurgies abdominales',
        items: ['Splénectomie (rate)', 'Herniorraphies (hernies ombilicale, inguinale)'],
      },
      {
        area: 'Os et articulations',
        items: [
          'Enclouage centro-médullaire (fractures)',
          'Ligament croisé antérieur du genou',
          'Réductions de luxation',
          'Exérèse de la tête du fémur',
        ],
      },
    ],
    aftercare: [
      'Retrait des points 10 à 12 jours après (ou points résorbables qui disparaissent seuls en 3–4 semaines).',
      'Antibiotique 5 à 6 jours dans la plupart des cas, antalgique si nécessaire.',
      'Changement de pansement programmé dans les 5 jours si l’animal est rendu pansé.',
      'Hospitalisation courte : en général une journée, retour à la maison le soir même.',
    ],
    protocol: [
      {
        short: 'Visite préopératoire',
        title: 'On vérifie, on explique, on chiffre',
        body: 'Avant chaque chirurgie : bilan de santé de votre animal, explication des motifs, du déroulement et des suites. Vous repartez avec un devis précis de l’intervention et de ses soins annexes.',
      },
      {
        short: 'Préparation',
        title: 'Zéro risque d’infection',
        body: 'Tonte de la zone, nettoyage à la solution moussante désinfectante, passages multiples à l’alcool puis à la Bétadine. Un protocole de bloc opératoire appliqué à la lettre.',
      },
      {
        short: 'Anesthésie',
        title: 'Des doses au gramme près',
        body: 'Chaque animal est pesé précisément pour adapter les doses d’anesthésiant. Pour les animaux à risques ou les chirurgies longues : cathéter veineux, intubation et monitoring respiratoire systématiques.',
      },
      {
        short: 'Gestion de la douleur',
        title: 'Un réveil plus doux',
        body: 'Antalgiques injectés avant ou pendant l’intervention. Ils potentialisent l’anesthésie, permettent de diminuer les doses, un réveil plus doux et une récupération plus rapide.',
      },
    ],
    items: {
      consultations: {
        title: 'Consultations',
        short:
          'Chiens, chats et NAC (lapins, furets, rongeurs, hérissons…). Bilan de santé, diagnostic et suivi de votre animal.',
        body: [
          'Chaque consultation commence par un examen clinique complet : poids, température, auscultation, état dentaire, peau et pelage. Nous prenons le temps d’expliquer ce que nous observons et de répondre à vos questions.',
          'Nous recevons tous les animaux domestiques — chiens, chats et NAC (lapins, furets, rongeurs, hérissons…). Carnet de vaccination, vermifuges, conseil en nutrition : le suivi de votre animal est assuré dans la continuité, visite après visite.',
        ],
      },
      chirurgie: {
        title: 'Chirurgie',
        short:
          'Stérilisations, tumeurs, calculs urinaires, fractures… Une grande variété d’interventions, avec devis précis à l’avance.',
        body: [
          'De la stérilisation de convenance aux chirurgies orthopédiques, chaque opération suit le même protocole rigoureux en quatre étapes : visite préopératoire avec devis précis, préparation aseptique du champ opératoire, anesthésie dosée au gramme près, gestion de la douleur.',
          'L’hospitalisation est en général courte : votre animal rentre le soir même, avec ses consignes de soins écrites et un point de contrôle programmé.',
        ],
      },
      imagerie: {
        title: 'Imagerie & radio',
        short: 'Radiographie pour localiser une fracture, contrôler une calcification, guider un diagnostic.',
        body: [
          'La radiographie est l’examen de première intention pour explorer les fractures, les voies respiratoires, l’abdomen ou localiser des corps étrangers. Elle guide le diagnostic et permet de décider sereinement de la suite : traitement médical ou intervention chirurgicale.',
          'Les clichés sont réalisés sur place, souvent le jour même de la consultation, et vous sont expliqués.',
        ],
      },
      hospitalisation: {
        title: 'Hospitalisation',
        short:
          'Surveillance post-opératoire dans la journée : en général votre compagnon rentre le soir même de l’intervention.',
        body: [
          'Après une chirurgie ou une intervention délicate, votre animal reste en surveillance dans nos locaux : réveil surveillé, antalgie, contrôle de la température et des pansements.',
          'Dans la grande majorité des cas, la sortie se fait le soir même, avec les consignes de suivi écrites et le rendez-vous de contrôle des points.',
        ],
      },
      nutrition: {
        title: 'Nutrition',
        short:
          'Aliments sélectionnés pour tous les chiens et chats, y compris en cas de maladie ou après une intervention.',
        body: [
          'L’alimentation joue un rôle direct sur la santé du rein, du foie et des articulations. Nous recommandons et fournissons des aliments vétérinaires adaptés à chaque âge et à chaque pathologie — y compris après une intervention chirurgicale.',
        ],
      },
      urgences: {
        title: 'Urgences',
        short: 'Une ligne directe dédiée. Appelez avant de venir, l’équipe vous guide immédiatement.',
        body: [
          'Une ligne directe dédiée répond aux urgences : intoxication, accident, difficulté respiratoire, mise bas difficile. Appelez avant de venir — l’équipe vous guide et prépare votre accueil.',
        ],
      },
    },
  },

  equipe: {
    heroKicker: "L'équipe",
    heroH1: '« Nous ferons toujours le maximum pour que vous vous y sentiez chez vous »',
    heroSub: 'Dr Bassir et son équipe, au service des animaux de Casablanca depuis 2002.',
    whoKicker: 'Qui suis-je ?',
    whoH2: 'Un vétérinaire de quartier, installé de longue date',
    body1:
      'Installée depuis 2002 rue Ahmed El Mejatti, la clinique a déménagé en 2015 au 60, boulevard Bir Anzarane, au centre de Casablanca — des locaux pensés pour accueillir vos animaux dans les meilleures conditions.',
    body2:
      'Nous prenons soin de tous vos animaux domestiques : chiens, chats et NAC (lapins, furets, rongeurs, hérissons…). Consultations, chirurgie, imagerie, hospitalisation : le suivi de votre animal est assuré dans la continuité, visite après visite.',
    body3:
      'Côté équipe, la clinique fonctionne en petit comité — c’est un choix. Vous êtes reçu par des visages connus, et le Dr Bassir suit personnellement les dossiers chirurgicaux du début à la fin.',
    body4: 'Nous accueillons nos clients en quatre langues : arabe, français, anglais et russe.',
    languagesH2: 'On parle votre langue',
    languagesP: 'Toute l’équipe accueille et soigne en quatre langues — en consultation comme au téléphone.',
    inPractice: 'La clinique en pratique',
    facts: [
      { title: 'Lun – Ven', sub: '9h – 19h · sam. 9h – 14h' },
      { title: 'Maârif, Casablanca', sub: '60 Bd Bir Anzarane' },
      { title: 'Téléphone', sub: '05 22 23 30 95' },
      { title: 'Urgences', sub: '06 61 49 26 18' },
    ],
    servicesCtaH: 'Nos services',
    servicesCtaP: 'Consultations, chirurgie, imagerie, hospitalisation — le détail de chaque service.',
    servicesCtaLabel: 'Voir les services',
    rdvCtaH: 'Prendre rendez-vous',
    rdvCtaP: 'Le plus simple : un message WhatsApp, ou appelez la clinique au 05 22 23 30 95.',
    outsideHours: 'Urgences en dehors des horaires :',
    urgencyWord: 'Urgence',
    phoneLabel: 'Téléphone',
    districtLabel: 'Maârif, Casablanca',
    directorCaption: 'Dr Bassir — Directeur',
  },

  faq: {
    heroKicker: 'Questions fréquentes',
    heroH1: 'Vous vous demandez peut-être…',
    heroSub: 'Les réponses aux questions qu’on nous pose le plus souvent. Sinon, un message WhatsApp vaut mieux qu’une hésitation.',
    moreTitle: "Une question qui n'y est pas ?",
    moreP: 'Écrivez-nous sur WhatsApp — réponse rapide, même pour une simple question de tarif ou de disponibilité.',
    moreCta: 'Poser la question',
    moreLinkP1: 'Ou consultez directement',
    moreLinkP2: 'nos services',
    disclaimer:
      'Les devis sont toujours annoncés avant l’acte. La réponse la plus rapide reste WhatsApp.',
    items: [
      {
        q: 'Combien coûte une consultation ou une intervention ?',
        a: 'Nos tarifs vous sont communiqués sur demande — par WhatsApp ou par téléphone. Pour toute intervention, un devis précis vous est remis avant l’acte : pas de surprise, vous savez exactement ce que vous payez.',
      },
      {
        q: 'Quels sont vos horaires ?',
        a: 'Lundi–vendredi de 9h à 19h, samedi de 9h à 14h, fermé le dimanche. Pendant le Ramadan, la clinique est ouverte de 9h à 16h.',
      },
      {
        q: 'Que faire en cas d’urgence ?',
        a: 'Appelez la ligne d’urgence au 06 61 49 26 18 — c’est la ligne directe du Dr Bassir. Décrivez la situation : nous vous indiquons immédiatement la conduite à tenir et préparons votre arrivée.',
      },
      {
        q: 'Faut-il prendre rendez-vous ?',
        a: 'Le rendez-vous n’est pas obligatoire mais il est fortement recommandé : WhatsApp est le moyen le plus simple, ou par téléphone. Les urgences sont traitées en priorité absolue.',
      },
      {
        q: 'Soignez-vous les lapins, furets et rongeurs (NAC) ?',
        a: 'Oui. Nous recevons les NAC : lapins, furets, rongeurs et hérissons. Apportez si possible une photo ou une description de l’habitat de votre animal pour préparer la consultation.',
      },
      {
        q: 'Où se garer près de la clinique ?',
        a: 'La clinique dispose d’un stationnement privé devant l’entrée, réservé à nos clients : vous vous garez directement devant, sans chercher de place. Le 60, boulevard Bir Anzarane se trouve au cœur du Maârif.',
      },
      {
        q: 'Parlez-vous d’autres langues ?',
        a: 'Oui. À la clinique, nous parlons quatre langues : arabe, français, anglais et russe. Vous êtes accueilli dans la langue qui vous convient.',
      },
    ],
  },

  contact: {
    heroKicker: 'Contact',
    heroH1: 'Prendre rendez-vous',
    heroSub: 'Le plus simple reste le message : écrivez-nous sur WhatsApp, ou appelez directement la clinique. En cas d’urgence, la ligne directe du Dr Bassir répond.',
    whatsappH: 'WhatsApp',
    whatsappP: 'Réponse rapide. Envoyez une photo de votre animal pour préparer la consultation.',
    whatsappCta: 'Écrire sur WhatsApp',
    phoneP: 'Ligne fixe de la clinique, pendant les horaires d’ouverture.',
    phoneCta: 'Appeler la clinique',
    urgencyP: 'Ligne directe du Dr Bassir, dédiée aux urgences.',
    seeTeam: "Voir l'équipe",
    seeAreas: 'Zones desservies',
    seeFaq: 'Questions fréquentes',
    emailLabel: 'E-mail',
  },

  zones: {
    heroKicker: 'Casablanca',
    heroH1: 'Votre vétérinaire, selon votre quartier',
    heroSub:
      'La clinique est installée au cœur du Maârif — mais elle soigne les animaux de tout le centre de Casablanca. Voici comment nous rejoindre depuis les trois principaux quartiers que nous desservons.',
    otherTitle: 'Un autre quartier de Casablanca ?',
    otherP:
      'Nous recevons des clients de toute la ville centrale — Maârif, Gauthier, Anfa, Racine, Bourgogne, California… Appelez-nous : nous vous indiquons l’itinéraire le plus simple et le stationnement le plus proche.',
    routesLabel: 'Itinéraire depuis',
    askDirections: "Demander l'itinéraire",
    cardP: 'Itinéraire, stationnement et repères depuis',
    cardCta: 'Page',
    quartier: {
      maarif: {
        title: 'Vétérinaire au Maârif, Casablanca',
        intro:
          'La clinique est AU CŒUR du Maârif : nous sommes littéralement votre vétérinaire de quartier. 60, boulevard Bir Anzarane — la clinique que vous croisez en descendant faire vos courses.',
        landmarks: [
          'À moins de 500 m du marché Maârif et de ses rues commerçantes',
          'À moins de 1 km du Triangle d’Or',
          'À moins de 1 km du croisement Bir Anzarane × Massira',
        ],
        access:
          'La clinique est en façade du boulevard Bir Anzarane, l’axe principal qui traverse le Maârif. Lignes de bus sur le boulevard, station de taxi à proximité.',
        parking:
          'Stationnement privé devant la clinique, réservé à nos clients — vous vous garez directement devant, même en heure de pointe.',
        whyUs:
          'Nous soignons les animaux du quartier depuis 2002 : beaucoup de nos clients nous ont confié deux, parfois trois générations d’animaux. C’est cette continuité qui fait qu’un vétérinaire de quartier n’est pas un vétérinaire comme les autres.',
      },
      gauthier: {
        title: 'Vétérinaire au Gauthier, Casablanca',
        intro:
          'Le Gauthier jouxte le Maârif par le nord : depuis le marché Chaouia ou le boulevard d’Anfa, la clinique est à environ 2 km — le vétérinaire de proximité sans traverser la ville.',
        landmarks: [
          'À environ 2 km du marché Chaouia (cœur du Gauthier)',
          'À moins de 2 km du Lycée Lyautey',
          'À moins de 1 km de la rue Ibnou Mounir',
        ],
        access:
          'Depuis le Gauthier, rejoignez le boulevard Bir Anzarane et descendez vers le sud-est : la clinique est en façade du boulevard, côté Maârif.',
        parking:
          'Stationnement privé devant la clinique, réservé à nos clients — pas besoin de chercher une place en arrivant du Gauthier.',
        whyUs:
          'Le Gauthier compte beaucoup de familles avec chats et petits chiens — notre secteur de prédilection. Vaccination, stérilisation, suivi senior : le suivi de proximité sans traverser la ville.',
      },
      anfa: {
        title: 'Vétérinaire à Anfa, Casablanca',
        intro:
          'D’Anfa supérieur à la corniche, la clinique est à environ 3 à 4 km — boulevard Bir Anzarane, à l’entrée du Maârif. Un itinéraire direct, sans traverser le centre.',
        landmarks: [
          'À environ 3 km de la Mosquée Hassan-II',
          'À environ 3,5 km d’Anfaplace et de la corniche',
          'À moins de 3 km du boulevard Moulay Youssef',
        ],
        access:
          'Depuis Anfa, rejoignez l’avenue des FAR ou le boulevard Moulay Youssef, puis le boulevard Bir Anzarane en direction du Maârif. La clinique est en façade du boulevard.',
        parking:
          'Stationnement privé devant la clinique, réservé à nos clients — vous vous garez directement en arrivant d’Anfa.',
        whyUs:
          'Beaucoup de nos clients d’Anfa nous ont trouvés après une urgence, puis sont restés pour le suivi. Pour les familles de la côte, c’est le vétérinaire chirurgien de référence à quelques minutes.',
      },
    },
    landmarksTitle: (name: string) => `Repères depuis ${name}`,
    byCarTitle: 'En voiture',
    parkingLabel: 'Stationnement',
    trustTitle: (name: string) => `Pourquoi les habitants de ${name} nous font confiance`,
    othersTitle: 'Autres quartiers desservis',
  },
}

export default fr
