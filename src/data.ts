/* ------------------------------------------------------------------ */
/* Données globales du site — une seule source de vérité               */
/* ------------------------------------------------------------------ */

export const CLINIC = {
  name: 'Clinique Vétérinaire Maârif',
  shortName: 'CVM',
  legal:
    'Clinique Vétérinaire Maârif — 60, Boulevard Bir Anzarane, Maârif, Casablanca, Maroc',
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

export const HOURS = [
  { d: 'Lundi – Vendredi', h: '9h – 19h' },
  { d: 'Samedi', h: '9h – 14h' },
  { d: 'Dimanche', h: 'Fermé' },
]

/* ----- Services (page dédiée + cartes accueil) --------------------- */

export interface Service {
  slug: string
  title: string
  short: string
  body: string[]
  icon: string
}

export const SERVICES: Service[] = [
  {
    slug: 'consultations',
    title: 'Consultations',
    short:
      'Chiens, chats et NAC (lapins, furets, rongeurs, hérissons…). Bilan de santé, diagnostic et suivi de votre animal.',
    body: [
      'Chaque consultation commence par un examen clinique complet : poids, température, auscultation, état dentaire, peau et pelage. Nous prenons le temps d’expliquer ce que nous observons et de répondre à vos questions.',
      'Nous recevons tous les animaux domestiques — chiens, chats et NAC (lapins, furets, rongeurs, hérissons…). Carnet de vaccination, vermifuges, conseil en nutrition : le suivi de votre animal est assuré dans la continuité, visite après visite.',
    ],
    icon: 'stethoscope',
  },
  {
    slug: 'chirurgie',
    title: 'Chirurgie',
    short:
      'Stérilisations, tumeurs, calculs urinaires, fractures… Une grande variété d’interventions, avec devis précis à l’avance.',
    body: [
      'De la stérilisation de convenance aux chirurgies orthopédiques, chaque opération suit le même protocole rigoureux en quatre étapes : visite préopératoire avec devis précis, préparation aseptique du champ opératoire, anesthésie dosée au gramme près, gestion de la douleur.',
      'L’hospitalisation est en général courte : votre animal rentre le soir même, avec ses consignes de soins écrites et un point de contrôle programmé.',
    ],
    icon: 'scalpel',
  },
  {
    slug: 'imagerie',
    title: 'Imagerie & radio',
    short:
      'Radiographie pour localiser une fracture, contrôler une calcification, guider un diagnostic.',
    body: [
      'La radiographie est l’examen de première intention pour explorer les fractures, les voies respiratoires, l’abdomen ou localiser des corps étrangers. Elle guide le diagnostic et permet de décider sereinement de la suite : traitement médical ou intervention chirurgicale.',
      'Les clichés sont réalisés sur place, souvent le jour même de la consultation, et vous sont expliqués.',
    ],
    icon: 'xray',
  },
  {
    slug: 'hospitalisation',
    title: 'Hospitalisation',
    short:
      'Surveillance post-opératoire dans la journée : en général votre compagnon rentre le soir même de l’intervention.',
    body: [
      'Après une chirurgie ou une intervention délicate, votre animal reste en surveillance dans nos locaux : réveil surveillé, antalgie, contrôle de la température et des pansements.',
      'Dans la grande majorité des cas, la sortie se fait le soir même, avec les consignes de suivi écrites et le rendez-vous de contrôle des points.',
    ],
    icon: 'bed',
  },
  {
    slug: 'nutrition',
    title: 'Nutrition',
    short:
      'Aliments sélectionnés pour tous les chiens et chats, y compris en cas de maladie ou après une intervention.',
    body: [
      'L’alimentation joue un rôle direct sur la santé du rein, du foie et des articulations. Nous recommandons et fournissons des aliments vétérinaires adaptés à chaque âge et à chaque pathologie — y compris après une intervention chirurgicale.',
    ],
    icon: 'bowl',
  },
  {
    slug: 'urgences',
    title: 'Urgences',
    short:
      'Une ligne directe dédiée. Appelez avant de venir, l’équipe vous guide immédiatement.',
    body: [
      'Une ligne directe dédiée répond aux urgences : intoxication, accident, difficulté respiratoire, mise bas difficile. Appelez avant de venir — l’équipe vous guide et prépare votre accueil.',
    ],
    icon: 'alert',
  },
]

/* ----- Protocole chirurgical (page chirurgie) ---------------------- */

export const PROTOCOL = [
  {
    n: '1',
    short: 'Visite préopératoire',
    title: 'On vérifie, on explique, on chiffre',
    body: 'Avant chaque chirurgie : bilan de santé de votre animal, explication des motifs, du déroulement et des suites. Vous repartez avec un devis précis de l’intervention et de ses soins annexes.',
  },
  {
    n: '2',
    short: 'Préparation',
    title: 'Zéro risque d’infection',
    body: 'Tonte de la zone, nettoyage à la solution moussante désinfectante, passages multiples à l’alcool puis à la Bétadine. Un protocole de bloc opératoire appliqué à la lettre.',
  },
  {
    n: '3',
    short: 'Anesthésie',
    title: 'Des doses au gramme près',
    body: 'Chaque animal est pesé précisément pour adapter les doses d’anesthésiant. Pour les animaux à risques ou les chirurgies longues : cathéter veineux, intubation et monitoring respiratoire systématiques.',
  },
  {
    n: '4',
    short: 'Gestion de la douleur',
    title: 'Un réveil plus doux',
    body: 'Antalgiques injectés avant ou pendant l’intervention. Ils potentialisent l’anesthésie, permettent de diminuer les doses, un réveil plus doux et une récupération plus rapide.',
  },
]

export const INTERVENTIONS = [
  {
    area: 'Appareil génital',
    items: ['Ovariectomie (stérilisation chienne, chatte)', 'Mastectomies (tumeurs mammaires)'],
  },
  {
    area: 'Peau et sous-peau',
    items: ['Exérèse de kystes, verrues, tumeurs cutanées', 'Sutures cutanées et musculaires'],
  },
  {
    area: 'Appareil urinaire',
    items: ['Cystotomie (calculs dans la vessie)', 'Urétrostomies'],
  },
  {
    area: 'Appareil digestif',
    items: ['Entérotomie (corps étranger)', 'Entérectomie (nécrose, tumeur)'],
  },
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
]

export const AFTERCARE = [
  'Retrait des points 10 à 12 jours après (ou points résorbables qui disparaissent seuls en 3–4 semaines).',
  'Antibiotique 5 à 6 jours dans la plupart des cas, antalgique si nécessaire.',
  'Changement de pansement programmé dans les 5 jours si l’animal est rendu pansé.',
  'Hospitalisation courte : en général une journée, retour à la maison le soir même.',
]

/* ----- FAQ (données structurées FAQPage) --------------------------- */
/* À valider par Dr Bassir au kickoff — tarifs indicatifs              */

export const FAQ = [
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
    a: 'Appelez la ligne d’urgence au 06 61 49 26 18 — c’est la ligne directe du Dr. Bassir. Décrivez la situation : nous vous indiquons immédiatement la conduite à tenir et préparons votre arrivée.',
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
]

/* ----- Pages quartier (contenu local distinct — arme SEO #4) -------- */

export interface Quartier {
  slug: string
  name: string
  title: string
  intro: string
  landmarks: string[]
  access: string
  parking: string
  whyUs: string
}

export const QUARTIERS: Quartier[] = [
  {
    slug: 'maarif',
    name: 'Maârif',
    title: 'Vétérinaire au Maârif, Casablanca',
    intro:
      'La clinique est AU CŒUR du Maârif : nous sommes littéralement votre vétérinaire de quartier. 60, boulevard Bir Anzarane — la clinique que vous croisez en descendant faire vos courses.',
    landmarks: [
      'À deux pas du marché Maârif et de ses rues commerçantes',
      'À 5 minutes à pied du croisement Bir Anzarane × Massira',
      'À proximité du marché aux puces du Maârif et de la rue Ibn Batouta',
    ],
    access:
      'Le boulevard Bir Anzarane est desservi par les lignes de bus qui traversent le Maârif nord-sud. En voiture, on accède facilement depuis la rue Ibn Batouta ou l’avenue des FAR.',
    parking:
      'Stationnement privé devant la clinique, réservé à nos clients — vous vous garez directement devant, même en heure de pointe.',
    whyUs:
      'Nous soignons les animaux du quartier depuis 2002 : beaucoup de nos clients nous ont confié deux, parfois trois générations d’animaux. C’est cette continuité qui fait qu’un vétérinaire de quartier n’est pas un vétérinaire comme les autres.',
  },
  {
    slug: 'gauthier',
    name: 'Gauthier',
    title: 'Vétérinaire au Gauthier, Casablanca',
    intro:
      'Du Gauthier, la clinique est à 5 minutes en voiture — direction Maârif, par le boulevard Bir Anzarane. Beaucoup de nos clients viennent du Gauthier et d’Anfa supérieur.',
    landmarks: [
      'À 1,5 km du Marché du Gauthier',
      'À 5 minutes du Doublehoot Gauthier et du boulevard d’Anfa',
      'À 10 minutes à pied du Lycée Lyautey (par la rue Ibnou Mounir)',
    ],
    access:
      'Depuis le Gauthier, remontez le boulevard Bir Anzarane vers le sud-est : la clinique est sur votre gauche après le croisement avec la rue Moulay Ismaïl.',
    parking:
      'Stationnement privé devant la clinique, réservé à nos clients — pas besoin de chercher une place en arrivant du Gauthier.',
    whyUs:
      'Le Gauthier compte beaucoup de familles avec chats et petits chiens — notre secteur de prédilection. Vaccination, stérilisation, suivi senior : le suivi de proximité sans traverser la ville.',
  },
  {
    slug: 'anfa',
    name: 'Anfa',
    title: 'Vétérinaire à Anfa, Casablanca',
    intro:
      'De la Californie à Anfa supérieur, la clinique est à moins de 10 minutes — boulevard Bir Anzarane, à l’entrée du Maârif. L’itinéraire est direct par l’avenue des FAR.',
    landmarks: [
      'À 10 minutes de la Mosquée Hassan-II (par l’avenue des FAR)',
      'À 5 minutes d’Anfa Place et du boulevard d’Anfa',
      'À 10 minutes du quartier California (par le boulevard Moulay Youssef)',
    ],
    access:
      'Depuis Anfa, longez l’avenue des FAR puis tournez sur le boulevard Bir Anzarane en direction du Maârif. La clinique est en façade du boulevard.',
    parking:
      'Stationnement privé devant la clinique, réservé à nos clients — vous vous garez directement en arrivant d’Anfa.',
    whyUs:
      'Beaucoup de nos clients d’Anfa nous ont trouvés après une urgence, puis sont restés pour le suivi. Pour les familles de la côte, c’est le vétérinaire chirurgien de référence à 10 minutes.',
  },
]

/* ----- Langues parlées à la clinique (Dr Bassir, 31/08) ------------ */

export const LANGUAGES = [
  { code: 'ar', name: 'Arabe', native: 'العربية' },
  { code: 'fr', name: 'Français', native: 'Français' },
  { code: 'en', name: 'Anglais', native: 'English' },
  { code: 'ru', name: 'Russe', native: 'Русский' },
]

/* ----- Navigation --------------------------------------------------- */

export const NAV = [
  { to: '/', label: 'Accueil' },
  { to: '/services/', label: 'Services' },
  { to: '/equipe/', label: "L'équipe" },
  { to: '/faq/', label: 'FAQ' },
  { to: '/contact/', label: 'Contact' },
]
