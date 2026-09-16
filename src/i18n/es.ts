/* ================================================================== */
/* Diccionario ES — tipado contra Messages (fr.ts es la fuente de      */
/* verdad). tsc garantiza la paridad de claves en ambos sentidos.      */
/* ================================================================== */

import type { Messages } from './fr'

const es: Messages = {
  meta: {
    home: {
      title: 'Clínica Veterinaria Maârif — Veterinario en Casablanca desde 2002',
      description:
        'Su veterinario en Maârif, Casablanca: consultas para perros, gatos y exóticos, cirugía, imagen, urgencias. 60 Bd Bir Anzarane. Lun–vie 9h–19h.',
    },
    services: {
      title: 'Servicios — Consultas, cirugía, laboratorio, odontología | Clínica Veterinaria Maârif Casablanca',
      description:
        'Consultas para perros, gatos y exóticos, cirugía, laboratorio de análisis, odontología, oftalmología, hospitalización, peluquería, láser y urgencias en Maârif, Casablanca.',
    },
    equipe: {
      title: 'El equipo — Dr. Bassir | Clínica Veterinaria Maârif Casablanca',
      description:
        'El Dr. Bassir y el equipo de la Clínica Veterinaria Maârif: más de 20 años de experiencia quirúrgica al servicio de los animales de Casablanca desde 2002.',
    },
    faq: {
      title: 'FAQ — Precios, horarios, urgencias | Clínica Veterinaria Maârif Casablanca',
      description:
        'Preguntas frecuentes: precio de la consulta, horarios, urgencias, citas, exóticos, aparcamiento. Clínica Veterinaria Maârif, Casablanca.',
    },
    contact: {
      title: 'Contacto y citas — Clínica Veterinaria Maârif, Casablanca',
      description:
        'Pedir cita: WhatsApp, teléfono o urgencias. 60 Bd Bir Anzarane, Maârif, Casablanca. Lun–vie 9h–19h, sáb 9h–14h.',
    },
    zones: {
      title: 'Veterinario en Casablanca — Zonas cubiertas | Clínica Veterinaria Maârif',
      description:
        'Su veterinario en Maârif, Gauthier y Anfa: cómo llegar, aparcamiento privado y acceso desde cada barrio de Casablanca.',
    },
    zoneMaarif: {
      title: 'Veterinario en Maârif, Casablanca | Clínica Veterinaria Maârif',
      description:
        'Clínica veterinaria para los vecinos de Maârif, Casablanca: cómo llegar, aparcamiento privado frente a la clínica, referencias locales. Perros, gatos y exóticos (conejos, hurones, roedores, erizos) — cirugía y urgencias.',
    },
    zoneGauthier: {
      title: 'Veterinario en Gauthier, Casablanca | Clínica Veterinaria Maârif',
      description:
        'Clínica veterinaria para los vecinos de Gauthier, Casablanca: cómo llegar desde Gauthier, aparcamiento privado, referencias locales. Perros, gatos y exóticos (conejos, hurones, roedores, erizos) — cirugía y urgencias.',
    },
    zoneAnfa: {
      title: 'Veterinario en Anfa, Casablanca | Clínica Veterinaria Maârif',
      description:
        'Clínica veterinaria para los vecinos de Anfa, Casablanca: cómo llegar desde Anfa, aparcamiento privado, referencias locales. Perros, gatos y exóticos (conejos, hurones, roedores, erizos) — cirugía y urgencias.',
    },
    notfound: {
      title: 'Página no encontrada | Clínica Veterinaria Maârif',
      description: 'Esta página no existe. Vuelva a la página de inicio de la Clínica Veterinaria Maârif, Casablanca.',
    },
    privacy: {
      title: 'Privacidad | Clínica Veterinaria Maârif, Casablanca',
      description:
        'Privacidad: este sitio web no recopila datos personales. Alojamiento, servicios de terceros y sus derechos (ley marroquí 09-08).',
    },
  },

  nav: {
    home: 'Inicio',
    services: 'Servicios',
    equipe: 'El equipo',
    faq: 'FAQ',
    contact: 'Contacto',
    zones: 'Zonas cubiertas',
    privacy: 'Privacidad',
  },

  common: {
    clinicName: 'Clínica Veterinaria Maârif',
    clinicNameShort: 'MAARIF',
    headerLine1: 'Clínica Veterinaria',
    footerLine1: 'Clínica Veterinaria',
    menuOpen: 'Abrir el menú',
    menuClose: 'Cerrar el menú',
    languageLabel: 'Idioma',
    addressCity: 'Casablanca',
    tagline: 'Su mascota, en buenas manos.',
    footerBlurb:
      'Cuidamos de todas sus mascotas — perros, gatos y animales exóticos — en pleno corazón de Maârif desde 2002.',
    bookWhatsapp: 'Pedir cita',
    callClinic: 'Llamar a la clínica',
    callUrgency: 'Urgencias',
    urgencyLabel: 'Urgencias',
    openMap: 'Abrir en Google Maps',
    ourServices: 'Nuestros servicios',
    allServices: 'Todos nuestros servicios',
    allAreas: 'Todas las zonas',
    contactUs: 'Contactarnos',
    backHome: 'Volver al inicio',
    languageMenu: 'Cambiar de idioma',
    ramadan: 'Ramadán',
    ramadanNote: 'abierto de 9:00 a 16:00.',
    hoursLabel: 'Horarios',
    addressLabel: 'Dirección',
    hoursTable: [
      { days: 'Lunes – Viernes', hours: '9h – 19h' },
      { days: 'Sábado', hours: '9h – 14h' },
      { days: 'Domingo', hours: 'Cerrado' },
    ],
    footerHours: 'Abierto lun–vie 9h – 19h · sáb 9h – 14h',
    rights: '— Todos los derechos reservados',
    designedBy: 'Sitio web diseñado por OmniRise',
    breadcrumbHome: 'Inicio',
    breadcrumbZones: 'Zonas',
    pageNotFoundTitle: 'Esta página se ha escapado',
    pageNotFoundText:
      'A veces también las páginas se pierden. Lo más sencillo: volver al inicio o escribirnos directamente por WhatsApp.',
    callPrice: '05 22 23 30 95',
    skipToContent: 'Ir al contenido principal',
    loadMap: 'Cargar el mapa de Google Maps',
  },

  privacy: {
    heroKicker: 'Transparencia',
    heroH1: 'Privacidad',
    heroSub:
      'Este sitio web no recopila datos personales: sin formularios, sin rastreadores, sin cookies publicitarias. Esta página explica con total transparencia qué ocurre cuando lo visita.',
    updated: 'Última actualización: septiembre de 2026.',
    collectTitle: 'Ninguna recogida de datos',
    collectBody:
      'El sitio no tiene formulario de contacto, cuentas de usuario, herramientas de analítica ni cookies de seguimiento. El sitio en sí no recopila, almacena ni comparte ningún dato personal. Pedir cita o hacer una consulta se hace por WhatsApp, teléfono o email: la conversación transcurre entonces directamente con la clínica, fuera del sitio web.',
    hostTitle: 'Alojamiento',
    hostBody:
      'El sitio está alojado en Cloudflare, Inc. Como en cualquier visita web, los servidores de alojamiento reciben la información técnica necesaria para mostrar la página: dirección IP, tipo de navegador, fecha y hora de la petición. Estos registros técnicos sirven exclusivamente para la seguridad y el funcionamiento del servicio, se conservan durante un tiempo limitado por el proveedor, y no se analizan con fines publicitarios ni se ceden. El sitio se sirve por HTTPS (conexión cifrada).',
    thirdTitle: 'Servicios de terceros',
    thirdBody:
      'El sitio no carga ningún servicio de terceros sin su conocimiento. Solo la página de Contacto contiene un mapa de Google Maps, que se muestra únicamente si usted lo solicita — antes de ese clic, Google no recibe ninguna información sobre usted. Los siguientes enlaces salen del sitio web y se rigen por las condiciones de sus editores:',
    thirdItems: [
      'WhatsApp (Meta) — citas: la conversación y su contenido se rigen por las condiciones de WhatsApp.',
      'Google Maps — plano de acceso: se carga solo tras pulsar «Cargar el mapa».',
      'Instagram (Meta) — página pública de la clínica.',
      'Teléfono y email — contacto directo con la clínica, independiente del sitio web.',
    ],
    rightsTitle: 'Sus derechos (ley 09-08)',
    rightsBody:
      'Conforme a la ley marroquí 09-08 relativa a la protección de las personas físicas respecto al tratamiento de datos de carácter personal, usted dispone de derechos de acceso, rectificación y oposición sobre los datos que haya comunicado directamente a la clínica (citas, WhatsApp, email). Para ejercerlos: contact@cndp.ma o directamente en la recepción de la clínica.',
    cndpTitle: 'Declaración CNDP',
    cndpBody:
      'Al no realizar el sitio ningún tratamiento automatizado de datos personales, no está sujeto a declaración previa ante la Comisión Nacional de control de la protección de datos de carácter personal (CNDP). Si la clínica llegara a recopilar datos en el futuro (por ejemplo, un formulario de cita en línea), la declaración necesaria se presentaría antes de cualquier recogida y esta página se actualizaría.',
    responsible: 'Responsable del sitio: Clínica Veterinaria Maârif, 60, Boulevard Bir Anzarane, 20330 Casablanca, Marruecos.',
  },

  home: {
    eyebrow: 'Casablanca · desde 2002',
    h1a: 'Su mascota,',
    h1b: 'en buenas manos.',
    sub: 'Perros, gatos y exóticos. Consultas, cirugía, imagen y urgencias — en pleno corazón de Maârif, en el bulevar Bir Anzarane.',
    trust: [
      { big: '2002', small: 'en Maârif desde' },
      { big: '20+ años', small: 'de experiencia quirúrgica' },
      { big: '9h – 19h', small: 'de lunes a viernes' },
      { big: 'Urgencias', small: 'línea directa 7/7' },
    ],
    servicesKicker: 'La clínica',
    servicesH2: 'Todo lo que su mascota necesita, bajo un mismo techo',
    surgeryKicker: 'Cirugía',
    surgeryH2: 'Un protocolo riguroso, en cuatro pasos',
    surgeryP:
      'Visita preoperatoria con presupuesto preciso, preparación aséptica, anestesia dosada al gramo y control del dolor. Desde esterilizaciones hasta cirugía ortopédica: la misma exigencia siempre.',
    surgeryCta: 'Ver el protocolo completo',
    surgeryCaption: 'En el quirófano — intervenciones realizadas en la clínica.',
    surgeryAlt1: 'Preparación aséptica del campo quirúrgico en el quirófano de la clínica.',
    surgeryAlt2: 'El Dr. Bassir en intervención, con instrumentación estéril en el quirófano.',
    surgeryAlt3: 'Vigilancia postoperatoria de un animal bajo anestesia.',
    doctorKicker: 'Su veterinario',
    doctorH2: 'El veterinario que su barrio ya conoce',
    doctorQuote:
      '«Animales sanos para un mundo mejor»',
    doctorByline: 'Dr. Adib Bassir — Veterinario cirujano, director de la clínica.',
    doctorCta: 'Conocer al equipo',
    doctorPhotoAlt:
      'El Dr. Bassir frente a la Clínica Veterinaria Maârif, con un golden retriever a su lado.',
    reviews: {
      kicker: 'Opiniones de clientes',
      h2: 'Nos confían a sus mascotas',
      viewAll: 'Ver las 175 opiniones de Google',
      basedOn: 'Nota de 4,3 sobre 5, basada en 175 opiniones de Google',
      rating: '4,3',
      items: [
        { author: 'Asmaa B.', stars: 5, when: 'hace un año', text: 'El mejor veterinario que he visto, muy competente, hizo un trabajo excepcional y salvó a mi gato que estaba a punto de morir. Mil gracias al Dr. Bassir, el mejor, de verdad RECOMENDADÍSIMO.' },
        { author: 'Kenza B.', stars: 5, when: 'hace un año', text: 'Un doctor muy entregado y amable que nos atendió en plena noche y salvó la vida de nuestra perra. El personal también es muy cariñoso con los animales. ¡Lo recomiendo muchísimo!' },
        { author: 'Mia M.', stars: 5, when: 'hace 6 meses', text: 'Llevo más de 3 años trayendo a mi perro (un malinois) y estoy muy satisfecha. El médico es muy amable, atento, servicial, y los precios razonables. Muchas gracias por la calidad de su trabajo.' },
        { author: 'Rita I.', stars: 5, when: 'hace 2 años', text: 'Es mi clínica veterinaria desde hace casi 9 años y estoy muy muy satisfecha con mis bebés. Impecable y con mucha humanidad. El personal también muy bondadoso.' },
        { author: 'Amal H.', stars: 4, when: 'hace 2 años', text: 'Voy al Dr. Bassir, el veterinario de mis gatas, desde hace más de 15 años, y estoy muy satisfecha con sus servicios. ¡Su saber hacer y su destreza con los animales, en especial los gatos, son notables!' },
        { author: 'Fatim-Zohra A.', stars: 5, when: 'hace 2 años', text: 'Clínica de diez, muy limpia a cualquier hora. Atenciones y cirugías de calidad. Un veterinario que escucha a los dueños y a sus animales. Equipo muy competente, amable y simpático, siempre sonriente.' },
      ],
    },
    zonesKicker: 'Casablanca',
    zonesH2: 'Su veterinario, según su barrio',
    faqKicker: 'Preguntas frecuentes',
    faqH2: 'Las respuestas rápidas',
    ctaH2: '¿Una cita, una duda, una urgencia?',
    ctaP: 'WhatsApp para todo lo que no es urgente. La línea directa para todo lo que sí lo es.',
  },

  services: {
    heroKicker: 'Nuestros servicios',
    heroH1: 'Todo lo que su mascota necesita, bajo un mismo techo',
    heroSub:
      'Perros, gatos y exóticos. Consultas, cirugía, laboratorio, odontología, imagen, hospitalización, peluquería, láser y urgencias — en pleno corazón de Maârif, en el bulevar Bir Anzarane.',
    interiorCaption: 'El interior de la clínica, bulevar Bir Anzarane',
    findUs: 'Encontrarnos',
    surgeryKicker: 'Cirugía',
    surgeryH2: 'Una amplia gama de intervenciones, de lo rutinario a lo esencial',
    surgeryP:
      'Esterilizaciones, tungias o estética, o tratamiento de enfermedades: toda operación sigue el mismo protocolo riguroso de cuatro pasos.',
    swipeHint: 'Deslice para seguir el protocolo, paso a paso',
    stepLabel: (n: string) => `Paso ${n} de 4`,
    prevStep: 'Paso anterior',
    nextStep: 'Paso siguiente',
    interventionsTitle: 'Nuestras intervenciones más frecuentes',
    aftercareTitle: 'Después de la intervención',
    photosCaption: 'En el quirófano — intervenciones realizadas en la clínica.',
    labCaption: 'En el laboratorio de análisis — paneles realizados in situ por el Dr. Bassir.',
    xrayLegAlt: 'Radiografía de una extremidad — prueba de imagen realizada en la clínica',
    xrayOtherAlt: 'Radiografía veterinaria — interpretada en el momento por el Dr. Bassir',
    ctaTitle: '¿Piensa en una intervención? Empiece con un mensaje.',
    ctaP: 'Describa la situación por WhatsApp: el Dr. Bassir le dirá si hace falta una visita preoperatoria y en qué consistirá.',
    ctaLabel: 'Consultar sobre cirugía',
    interventionAreas: [
      {
        area: 'Aparato reproductor',
        items: ['Ovariohisterectomía (esterilización de perras y gatas)', 'Mastectomía (tumores mamarios)'],
      },
      {
        area: 'Piel y tejido subcutáneo',
        items: ['Extirpación de quistes, papilomas y tumores cutáneos', 'Suturas cutáneas y musculares'],
      },
      { area: 'Aparato urinario', items: ['Cistotomía (cálculos vesicales)', 'Uretrostomía'] },
      { area: 'Aparato digestivo', items: ['Enterotomía (cuerpos extraños)', 'Enterectomía (necrosis, tumores)'] },
      {
        area: 'Otras cirugías abdominales',
        items: ['Esplenectomía (bazo)', 'Herniorrafia (hernias umbilicales e inguinales)'],
      },
      {
        area: 'Huesos y articulaciones',
        items: [
          'Enclavijado intramedular (fracturas)',
          'Reparación del ligamento cruzado craneal',
          'Reducción de luxaciones',
          'Excisión de la cabeza femoral',
        ],
      },
    ],
    aftercare: [
      'Los puntos se retiran entre 10 y 12 días después de la cirugía (o son reabsorbibles y desaparecen solos en 3–4 semanas).',
      'Antibióticos durante 5 o 6 días en la mayoría de los casos, y analgésicos si son necesarios.',
      'Un cambio de vendaje programado en un plazo de 5 días si su mascota vuelve a casa vendada.',
      'Hospitalización breve: normalmente un solo día, con regreso a casa esa misma tarde.',
    ],
    protocol: [
      {
        short: 'Visita preoperatoria',
        title: 'Examinamos, explicamos y presupuestamos',
        body: 'Antes de cada cirugía: un chequeo de salud de su mascota, la explicación de los motivos de la intervención, de cómo se desarrollará y de qué implica la recuperación. Se va con un presupuesto preciso que cubre la operación y todos los cuidados asociados.',
      },
      {
        short: 'Preparación',
        title: 'Riesgo de infección cero',
        body: 'Se rapa la zona, se limpia con una espuma desinfectante y después se aplica alcohol seguido de Betadine en varias pasadas. Un protocolo de quirófano, seguido al pie de la letra.',
      },
      {
        short: 'Anestesia',
        title: 'Dosis medidas al gramo',
        body: 'Cada animal se pesa con precisión para ajustar las dosis de anestesia. Para pacientes de riesgo o intervenciones largas: vía intravenosa, intubación y control respiratorio son estándar.',
      },
      {
        short: 'Control del dolor',
        title: 'Una recuperación más suave',
        body: 'Los analgésicos se inyectan antes o durante la intervención. Potencian la anestesia, permiten reducir dosis, lograr un despertar más suave y una recuperación más rápida.',
      },
    ],
    items: {
      consultations: {
        title: 'Consultas',
        short:
          'Perros, gatos y exóticos (conejos, hurones, roedores, erizos…). Chequeos, diagnóstico y seguimiento de su mascota.',
        body: [
          'Toda consulta comienza con un examen clínico completo: peso, temperatura, auscultación, estado dental, piel y pelaje. Nos tomamos el tiempo de explicarle lo que observamos y de responder a sus preguntas.',
          'Recibimos a todas las mascotas — perros, gatos y animales exóticos (conejos, hurones, roedores, erizos…). Cartilla de vacunación, desparasitación, consejos de nutrición: el cuidado de su mascota es continuo, visita tras visita.',
        ],
      },
      vaccination: {
        title: 'Vacunación',
        short:
          'Vacunas de perro y gato según el calendario marroquí, recordatorios registrados en la cartilla sanitaria y citas programadas.',
        body: [
          'La vacunación protege a su mascota contra enfermedades contagiosas graves: rabia, moquillo, hepatitis, parvovirus, gripe felina, leucemia felina. Construimos un calendario según la edad y el estilo de vida de su compañero.',
          'Cada inyección se registra en la cartilla de vacunación y hacemos el seguimiento de los recordatorios con usted — es además un documento exigido por residencias, viajes y muchos países.',
        ],
      },
      chirurgie: {
        title: 'Cirugía',
        short:
          'Esterilizaciones, tumores, cálculos vesicales, fracturas… Una amplia gama de intervenciones, siempre con presupuesto previo preciso.',
        body: [
          'Desde las esterilizaciones de rutina hasta la cirugía ortopédica, toda operación sigue el mismo protocolo riguroso de cuatro pasos: visita preoperatoria con presupuesto preciso, preparación aséptica del campo quirúrgico, anestesia dosada al gramo y control del dolor.',
          'La hospitalización suele ser breve: su mascota vuelve a casa esa misma tarde, con las instrucciones postoperatorias por escrito y una cita de control programada.',
        ],
      },
      imagerie: {
        title: 'Imagen y radiografías',
        short: 'Radiografías para localizar una fractura, comprobar una calcificación o orientar un diagnóstico.',
        body: [
          'La radiografía es la prueba de primera línea para explorar fracturas, vías respiratorias, abdomen o localizar cuerpos extraños. Orienta el diagnóstico y nos permite decidir con calma el siguiente paso: tratamiento médico o cirugía.',
          'Las radiografías se realizan en la clínica, a menudo el mismo día de la consulta, y se le explican.',
        ],
      },
      laboratoire: {
        title: 'Laboratorio propio',
        short:
          'Analíticas de sangre y paneles completos realizados en la clínica: resultados el mismo día, nada se envía fuera.',
        body: [
          'Nuestro laboratorio integrado (analizador BioMajestik) realiza hemogramas completos, fórmulas leucocitarias y cribados preanestésicos en la propia clínica. La rapidez de los resultados permite empezar el tratamiento sin esperas.',
          'Los paneles preoperatorios hacen cada cirugía más segura: comprobamos la función renal y hepática antes de cualquier anestesia y ajustamos los protocolos en animales mayores.',
        ],
      },
      dentisterie: {
        title: 'Odontología',
        short:
          'Limpiezas, tratamientos dentales y extracciones: una boca sana es una mascota que come mejor y envejece mejor.',
        body: [
          'El sarro y la enfermedad periodontal afectan a la mayoría de las mascotas a partir de los 3 años: mal aliento, dolor, infecciones que llegan al corazón y a los riñones. Realizamos limpiezas ultrasónicas, pulido y extracciones cuando son necesarias.',
          'Un control dental se ofrece en cada consulta — la forma más sencilla de actuar antes de que aparezca el dolor.',
        ],
      },
      ophtalmologie: {
        title: 'Oftalmología',
        short:
          'Ojos rojos, lagrimeo, cataratas: exploración y tratamiento de las afecciones oculares más frecuentes.',
        body: [
          'Los ojos son urgencias: una conjuntivitis, una úlcera de córnea o un glaucoma pueden empeorar en cuestión de horas. Realizamos una exploración completa (tinción con fluoresceína, medición de la presión) e iniciamos el tratamiento adecuado.',
          'Las razas braquicéfalas (bulldogs, shih-tzus, persas) están especialmente expuestas: el seguimiento regular evita las urgencias.',
        ],
      },
      hospitalisation: {
        title: 'Hospitalización',
        short:
          'Vigilancia postoperatoria durante el día: en la mayoría de los casos su compañero vuelve a casa esa misma tarde.',
        body: [
          'Tras una cirugía o un gesto delicado, su mascota se queda con nosotros en observación: despertar supervisado, control del dolor, de la temperatura y del vendaje.',
          'En la gran mayoría de los casos el alta se produce esa misma tarde, con las instrucciones postoperatorias por escrito y la cita de revisión de puntos reservada.',
        ],
      },
      nutrition: {
        title: 'Nutrición',
        short:
          'Alimentos seleccionados para todos los perros y gatos, también durante la enfermedad o tras una cirugía.',
        body: [
          'La alimentación influye directamente en la salud de los riñones, del hígado y de las articulaciones. Recomendamos y suministramos dietas veterinarias adaptadas a cada edad y cada condición — también después de una cirugía.',
        ],
      },
      pharmacie: {
        title: 'Farmacia',
        short:
          'Medicamentos veterinarios, antiparasitarios y alimentos terapéuticos disponibles directamente en la clínica.',
        body: [
          'Nuestra farmacia clínica almacena los tratamientos esenciales: antiparasitarios internos y externos, antibióticos, antiinflamatorios, colirios y dietas terapéuticas. Se lleva el tratamiento completo el mismo día.',
          'Le damos consejos gratuitos sobre dosificación y errores frecuentes — nunca administre medicamentos humanos a una mascota sin indicación.',
        ],
      },
      toilettage: {
        title: 'Peluquería y corte',
        short:
          'Aseo y corte higiénico, por el equipo que sus mascotas ya conocen — y con suavidad.',
        body: [
          'Baños, cortes, corte de uñas, limpieza de oídos y de glándulas anales: la peluquería la realiza el mismo equipo familiar que sus animales ya conocen — sin estrés innecesario.',
          'La peluquería también es salud: en cada visita se revisan la piel y el pelaje, y los problemas (parásitos, manchas, bultos) se detectan a tiempo.',
        ],
      },
      laser: {
        title: 'Láser terapéutico',
        short:
          'Láser terapéutico contra el dolor y la inflamación: articulaciones, heridas, recuperación postoperatoria.',
        body: [
          'El láser terapéutico estimula la circulación y acelera la reparación de los tejidos: alivio para la artrosis de los perros mayores, cicatrización de heridas, reducción de la inflamación tras una cirugía.',
          'Sesiones breves e indoloras sin sedación — los animales se relajan durante el tratamiento. Protocolos adaptados a cada indicación.',
        ],
      },
      urgences: {
        title: 'Urgencias',
        short: 'Una línea directa dedicada. Llame antes de venir — el equipo le orientará de inmediato.',
        body: [
          'Una línea directa dedicada atiende las urgencias: intoxicaciones, accidentes, dificultades respiratorias, partos difíciles. Llame antes de venir — el equipo le orientará y preparará su llegada.',
        ],
      },
    },
  },

  equipe: {
    heroKicker: 'El equipo',
    heroH1: '«Haremos siempre todo lo posible para que se sienta como en casa»',
    heroSub: 'El Dr. Bassir y su equipo, al servicio de los animales de Casablanca desde 2002.',
    whoKicker: 'Sobre nosotros',
    whoH2: 'Un veterinario de barrio, implantado para quedarse',
    body1:
      'Instalada desde 2002 en la calle Ahmed El Mejatti, la clínica se trasladó en 2015 al 60 del bulevar Bir Anzarane, en el centro de Casablanca — unas instalaciones pensadas para recibir a sus mascotas en las mejores condiciones.',
    body2:
      'Cuidamos de todas sus mascotas: perros, gatos y animales exóticos (conejos, hurones, roedores, erizos…). Consultas, cirugía, laboratorio, odontología: el cuidado de su mascota es continuo, visita tras visita.',
    body3:
      'En cuanto al equipo, la clínica permanece deliberadamente pequeña. Le recibe gente conocida, y el Dr. Bassir sigue personalmente cada caso quirúrgico de principio a fin.',
    body4: 'Recibimos a nuestros clientes en cinco idiomas: árabe, francés, inglés, ruso y español.',
    languagesH2: 'Hablamos su idioma',
    languagesP: 'Todo el equipo atiende y trata a las mascotas en cinco idiomas — tanto en las consultas como por teléfono.',
    inPractice: 'La clínica en la práctica',
    facts: [
      { title: 'Lun – Vie', sub: '9h – 19h · Sáb 9h – 14h' },
      { title: 'Maârif, Casablanca', sub: '60 Bd Bir Anzarane' },
      { title: 'Teléfono', sub: '05 22 23 30 95' },
      { title: 'Urgencias', sub: '06 61 49 26 18' },
    ],
    servicesCtaH: 'Nuestros servicios',
    servicesCtaP: 'Consultas, cirugía, laboratorio, odontología, oftalmología, láser, peluquería — el detalle de cada servicio.',
    servicesCtaLabel: 'Ver los servicios',
    rdvCtaH: 'Pedir cita',
    rdvCtaP: 'La forma más sencilla: un mensaje de WhatsApp, o llamar a la clínica al 05 22 23 30 95.',
    outsideHours: 'Urgencias fuera del horario de apertura:',
    urgencyWord: 'Urgencias',
    phoneLabel: 'Teléfono',
    districtLabel: 'Maârif, Casablanca',
    directorCaption: 'Dr. Bassir — Director',
    actionCaption: 'Dr. Bassir — administrando una vacuna en la clínica.',
  },

  faq: {
    heroKicker: 'Preguntas frecuentes',
    heroH1: 'Quizá se esté preguntando…',
    heroSub: 'Respuestas a las preguntas que oímos con más frecuencia. Si no, un mensaje de WhatsApp vale más que un momento de duda.',
    moreTitle: '¿Su pregunta no está aquí?',
    moreP: 'Escríbanos por WhatsApp — respondemos rápido, incluso para una simple duda sobre precios o disponibilidad.',
    moreCta: 'Hacer su pregunta',
    moreLinkP1: 'O consulte',
    moreLinkP2: 'nuestros servicios',
    disclaimer:
      'El presupuesto siempre se facilita antes de cualquier intervención. WhatsApp sigue siendo la vía más rápida para contactarnos.',
    items: [
      {
        q: '¿Cuánto cuesta una consulta o una intervención?',
        a: 'Nuestros precios se facilitan a petición — por WhatsApp o por teléfono. Para cualquier intervención, se entrega un presupuesto preciso antes de hacer nada: sin sorpresas, sabe exactamente lo que paga.',
      },
      {
        q: '¿Cuál es vuestro horario?',
        a: 'De lunes a viernes de 9h a 19h, sábado de 9h a 14h, cerrado el domingo. Durante el Ramadán, la clínica abre de 9h a 16h.',
      },
      {
        q: '¿Qué hago en caso de urgencia?',
        a: 'Llame a la línea de urgencias del 06 61 49 26 18 — es la línea directa del Dr. Bassir. Describa la situación: le diremos de inmediato qué hacer y prepararemos su llegada.',
      },
      {
        q: '¿Hace falta cita previa?',
        a: 'La cita no es obligatoria pero sí muy recomendable: por WhatsApp es lo más fácil, o por teléfono. Las urgencias siempre tienen prioridad absoluta.',
      },
      {
        q: '¿Atienden conejos, hurones y roedores (exóticos)?',
        a: 'Sí. Vemos animales exóticos: conejos, hurones, roedores y erizos. Si es posible, traiga una foto o una descripción del hábitat de su mascota para que podamos preparar la consulta.',
      },
      {
        q: '¿Dónde puedo aparcar cerca de la clínica?',
        a: 'La clínica dispone de aparcamiento privado frente a la entrada, reservado a nuestros clientes: aparca justo a la puerta, sin dar vueltas. El 60 del bulevar Bir Anzarane está en pleno corazón de Maârif.',
      },
      {
        q: '¿Hablan otros idiomas?',
        a: 'Sí. En la clínica hablamos cinco idiomas: árabe, francés, inglés, ruso y español. Le atenderemos en el idioma que le resulte más cómodo.',
      },
    ],
  },

  contact: {
    heroKicker: 'Contacto',
    heroH1: 'Pedir cita',
    heroSub: 'La forma más sencilla es un mensaje: escríbanos por WhatsApp o llame directamente a la clínica. En caso de urgencia, responde la línea directa del Dr. Bassir.',
    whatsappH: 'WhatsApp',
    whatsappP: 'Respuestas rápidas. Envíe una foto de su mascota para que podamos preparar la consulta.',
    whatsappCta: 'Escribirnos por WhatsApp',
    phoneP: 'El teléfono fijo de la clínica, durante el horario de apertura.',
    phoneCta: 'Llamar a la clínica',
    urgencyP: 'La línea directa del Dr. Bassir, dedicada a las urgencias.',
    seeTeam: 'Conocer al equipo',
    seeAreas: 'Zonas cubiertas',
    seeFaq: 'Preguntas frecuentes',
    emailLabel: 'Correo electrónico',
  },

  zones: {
    heroKicker: 'Casablanca',
    heroH1: 'Su veterinario, viva donde viva',
    heroSub:
      'La clínica está en pleno corazón de Maârif — pero cuida de animales de todo el centro de Casablanca. Así se llega desde los tres principales barrios que atendemos.',
    otherTitle: '¿En otra zona de Casablanca?',
    otherP:
      'Recibimos clientes de toda la ciudad — Maârif, Gauthier, Anfa, Racine, Bourgogne, California… Llámenos: le indicaremos la ruta más sencilla y el aparcamiento más cercano.',
    routesLabel: 'Cómo llegar desde',
    askDirections: 'Pedir indicaciones',
    cardP: 'Indicaciones, aparcamiento y referencias desde',
    cardCta: 'Página',
    quartier: {
      maarif: {
        title: 'Veterinario en Maârif, Casablanca',
        intro:
          'La clínica está en pleno corazón de Maârif: somos literalmente su veterinario de barrio. 60, bulevar Bir Anzarane — la clínica que pasa de camino a la tienda.',
        landmarks: [
          'A menos de 500 m del mercado de Maârif y sus calles comerciales',
          'A menos de 1 km del Triangle d’Or',
          'A menos de 1 km del cruce Bir Anzarane × Massira',
        ],
        access:
          'La clínica está frente al bulevar Bir Anzarane, el eje principal que atraviesa Maârif. Líneas de autobús en el bulevar, parada de taxis cerca.',
        parking:
          'Aparcamiento privado frente a la clínica, reservado a nuestros clientes — aparca a la puerta incluso en hora punta.',
        whyUs:
          'Cuidamos de los animales del barrio desde 2002: muchos de nuestros clientes nos han confiado dos, incluso tres generaciones de mascotas. Esa continuidad es lo que hace único a un veterinario de barrio.',
      },
      gauthier: {
        title: 'Veterinario en Gauthier, Casablanca',
        intro:
          'Gauthier limita con Maârif por el norte: desde el mercado de Chaouia o el bulevar d’Anfa, la clínica está a unos 2 km — atención veterinaria de barrio sin cruzar la ciudad.',
        landmarks: [
          'A unos 2 km del mercado de Chaouia (corazón de Gauthier)',
          'A menos de 2 km del Lycée Lyautey',
          'A menos de 1 km de la calle Ibnou Mounir',
        ],
        access:
          'Desde Gauthier, incorpórese al bulevar Bir Anzarane en dirección sureste: la clínica está frente al bulevar, en el lado de Maârif.',
        parking:
          'Aparcamiento privado frente a la clínica, reservado a nuestros clientes — sin buscar sitio cuando viene desde Gauthier.',
        whyUs:
          'En Gauthier viven muchas familias con gatos y perros pequeños — nuestros pacientes favoritos. Vacunas, esterilizaciones, seguimiento de mayores: cuidados de barrio sin cruzar la ciudad.',
      },
      anfa: {
        title: 'Veterinario en Anfa, Casablanca',
        intro:
          'Desde el Anfa alto hasta la cornisa, la clínica está a unos 3 o 4 km — bulevar Bir Anzarane, a la entrada de Maârif. Ruta directa, sin atravesar el centro.',
        landmarks: [
          'A unos 3 km de la Mezquita de Hassan II',
          'A unos 3,5 km de Anfaplace y la cornisa',
          'A menos de 3 km del bulevar Moulay Youssef',
        ],
        access:
          'Desde Anfa, tome la avenida de las FAR o el bulevar Moulay Youssef, y después el bulevar Bir Anzarane hacia Maârif. La clínica está frente al bulevar.',
        parking:
          'Aparcamiento privado frente a la clínica, reservado a nuestros clientes — aparca a la puerta cuando viene desde Anfa.',
        whyUs:
          'Muchos de nuestros clientes de Anfa nos encontraron en una urgencia y luego se quedaron para el seguimiento. Para las familias de la costa somos el veterinario cirujano de referencia, a unos minutos.',
      },
    },
    landmarksTitle: (name: string) => `Referencias desde ${name}`,
    byCarTitle: 'En coche',
    parkingLabel: 'Aparcamiento',
    trustTitle: (name: string) => `Por qué los vecinos de ${name} confían en nosotros`,
    othersTitle: 'Otras zonas cubiertas',
  },
}

export default es
