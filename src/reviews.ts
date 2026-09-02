/* ------------------------------------------------------------------ */
/* Avis clients Google — extraits RÉELS de la fiche Google Business    */
/* (4,3★ · 175 avis, relevés le 02/09/2026). Textes laissés verbatim.  */
/* La section utilise un échantillon curaté ; le lien renvoie vers     */
/* la fiche Google pour la liste complète.                             */
/* ------------------------------------------------------------------ */

export const RATING_VALUE = 4.3
export const RATING_COUNT = 175
export const RATING_LABEL_FR = '4,3'

export interface Review {
  author: string
  stars: number
  when: string
  text: string
}

export const REVIEWS: Review[] = [
  {
    author: 'Asmaa B.',
    stars: 5,
    when: 'il y a un an',
    text: 'Le meilleur vétérinaire que je n’ai jamais vu, très compétent, il a fait un travail exceptionnel et a sauvé mon chat qui allait mourir. Mille merci à Dr Bassir qui est le meilleur, vraiment À RECOMMANDER.',
  },
  {
    author: 'Kenza B.',
    stars: 5,
    when: 'il y a un an',
    text: 'Un docteur très engagé et gentil qui nous a rencontré en pleine nuit et a sauvé la vie de notre chienne. Le personnel est également très gentil et affectueux avec les animaux. Je recommande vivement !',
  },
  {
    author: 'Mia M.',
    stars: 5,
    when: 'il y a 6 mois',
    text: 'Ça fait plus de 3 ans que je ramène mon chien (malinois) et je suis très satisfaite. Le médecin est très gentil, à l’écoute, serviable, et les prix raisonnables. Merci beaucoup pour votre qualité de travail.',
  },
  {
    author: 'Rita I.',
    stars: 5,
    when: 'il y a 2 ans',
    text: 'C’est ma clinique vétérinaire depuis bientôt 9 ans, et je suis très très satisfaite pour mes loulous. Impeccable et beaucoup d’humanité. Personnel également très bienveillant.',
  },
  {
    author: 'Amal H.',
    stars: 4,
    when: 'il y a 2 ans',
    text: 'Je consulte le Dr Bassir, le vétérinaire de mes chats, depuis plus de 15 ans, et je suis très satisfaite de ses services. Son savoir-faire et son habileté avec les animaux, en particulier les chats, sont remarquables !',
  },
  {
    author: 'Fatim-Zohra A.',
    stars: 5,
    when: 'il y a 2 ans',
    text: 'Clinique au top, très propre quelque soit l’heure. Soins et chirurgies de qualité. Un vétérinaire à l’écoute des propriétaires et de leurs animaux. Équipe très compétente, très gentille et sympathique toujours souriante.',
  },
]
