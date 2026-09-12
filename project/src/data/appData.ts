/**
 * ============================================================
 *  RAÍCES — CONFIGURACIÓN CENTRAL DEL SITIO
 * ============================================================
 *
 *  Toda la información del sitio se define en este único archivo.
 *  Esto facilita una futura migración a Django: basta con sustituir
 *  este objeto estático por una respuesta de la API con la misma
 *  estructura.
 *
 *  PUNTOS CLAVE PARA PERSONALIZAR:
 *
 *  1. APK  → Coloca tu archivo "app-release.apk" en:
 *            public/downloads/app-release.apk
 *
 *  2. VERSIÓN → Cambia el campo "version".
 *
 *  3. URL DEL QR → Cambia "siteUrl" por tu URL definitiva.
 *
 *  4. IMÁGENES / CAPTURAS → Modifica los arreglos "screenshots"
 *                           y "heroImage".
 *
 *  5. INFORMACIÓN GENERAL → Edita nombre, misión, características, etc.
 * ============================================================
 */

export interface Screenshot {
  src: string;
  alt: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface MissionBlock {
  icon: string;
  title: string;
  text: string;
}

export interface ComparisonItem {
  label: string;
  app: string;
  command: string;
}

export interface SecurityItem {
  icon: string;
  title: string;
  description: string;
}

export interface DeviceRow {
  name: string;
  status: 'connected' | 'syncing' | 'offline';
  lastSync: string;
}

export interface ActivityRow {
  icon: string;
  action: string;
  time: string;
}

export const appData = {
  // ── Identidad de marca ──────────────────────────────────────
  appName: 'Raíces',
  tagline: 'La historia de tu familia, siempre contigo.',
  description:
    'Una plataforma creada para preservar recuerdos, historias, fotografías y momentos importantes de tu familia, conectando generaciones a través de la tecnología.',

  // ── Footer tagline ──────────────────────────────────────────
  footerTagline: 'Conectando generaciones. Preservando historias.',

  // ── Versión de la aplicación ─────────────────────────────────
  version: '1.0.0',
  apkSize: '18 MB',
  minAndroidVersion: 'Android 7.0 (Nougat) o superior',

  // ── Ruta de descarga del APK ────────────────────────────────
  // Coloca el archivo en: public/downloads/app-release.apk
  apkPath: '/downloads/app-release.apk',
  apkFileName: 'app-release.apk',

  // ── URL del sitio (para el código QR) ───────────────────────
  // ⚠️ Cambia esta URL por la URL definitiva al publicar.
  siteUrl: 'https://raices.app',

  // ── Colores de marca ────────────────────────────────────────
  brandColors: {
    primary: '#26382d',       // forest-800 — Deep forest
    primaryMid: '#49634b',    // forest-500 — Natural green
    brown: '#7d6438',         // earth-600 — Earth brown
    terracotta: '#c46a3e',    // clay-500  — Terracotta
    sand: '#e8dcc8',          // sand-400  — Warm sand
    cream: '#faf8f3',         // cream-100 — Cream background
    ink: '#211f1a',          // ink       — Dark text
  },

  // ── Imagen principal del hero ───────────────────────────────
  heroImage: 'https://images.pexels.com/photos/7545270/pexels-photo-7545270.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // ── ¿Qué es Raíces? ─────────────────────────────────────────
  whatIs: {
    title: 'Una nueva forma de preservar nuestra historia',
    subtitle: 'Cada recuerdo es una raíz. Cada generación es una nueva rama.',
    description:
      'Raíces permite a las familias organizar digitalmente fotografías, videos, documentos, historias familiares, fechas importantes, recuerdos, información de familiares y momentos especiales. Transforma la memoria de tu familia en un legado digital vivo.',
    items: [
      'Fotografías',
      'Videos',
      'Documentos',
      'Historias familiares',
      'Fechas importantes',
      'Recuerdos',
      'Información de familiares',
      'Momentos especiales',
    ],
  },

  // ── Misión ──────────────────────────────────────────────────
  mission: {
    title: 'Nuestra misión',
    subtitle: 'Preservar la memoria familiar',
    text: 'Preservar la memoria familiar y facilitar que las nuevas generaciones puedan conocer, comprender y mantener viva su historia.',
    blocks: [
      {
        icon: 'Link',
        title: 'Conectar',
        text: 'Conecta generaciones y familiares mediante una historia compartida que trasciende el tiempo.',
      },
      {
        icon: 'Archive',
        title: 'Preservar',
        text: 'Guarda fotografías, documentos, historias y recuerdos importantes en un espacio seguro y organizado.',
      },
      {
        icon: 'Gift',
        title: 'Legar',
        text: 'Permite que el conocimiento y las experiencias familiares permanezcan para futuras generaciones.',
      },
    ] as MissionBlock[],
  },

  // ── Características de la aplicación ────────────────────────
  features: [
    {
      icon: 'Network',
      title: 'Árbol familiar',
      description: 'Visualiza las conexiones entre las diferentes generaciones de la familia.',
    },
    {
      icon: 'Camera',
      title: 'Recuerdos',
      description: 'Guarda fotografías, videos y momentos importantes de tu familia.',
    },
    {
      icon: 'BookOpen',
      title: 'Historias',
      description: 'Registra historias y experiencias que forman parte de la familia.',
    },
    {
      icon: 'Clock',
      title: 'Línea del tiempo',
      description: 'Organiza acontecimientos familiares cronológicamente.',
    },
    {
      icon: 'Lock',
      title: 'Privacidad',
      description: 'Controla quién puede acceder a la información familiar.',
    },
    {
      icon: 'Cloud',
      title: 'Sincronización',
      description: 'Mantén la información disponible y organizada entre dispositivos autorizados.',
    },
  ] as Feature[],

  // ── Vista previa de la app ──────────────────────────────────
  appPreview: {
    title: 'Tu historia familiar en la palma de la mano',
    subtitle: 'Diseño intuitivo, emocional y fácil de usar',
    description:
      'Raíces está diseñada para que cualquier miembro de la familia, sin importar su edad, pueda navegar y contribuir. Desde el abuelo que quiere compartir sus historias hasta el nieto que quiere descubrir sus raíces.',
    highlights: [
      'Interfaz limpia y accesible para todas las edades',
      'Navegación sencilla e intuitiva',
      'Árbol familiar interactivo',
      'Línea del tiempo visual',
    ],
    image: 'https://images.pexels.com/photos/33270087/pexels-photo-33270087.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // ── Cómo funciona ──────────────────────────────────────────
  steps: [
    {
      number: '01',
      title: 'Crea tu familia',
      description: 'Registra tu espacio familiar y configura los datos básicos de tu árbol genealógico.',
      icon: 'Home',
    },
    {
      number: '02',
      title: 'Conecta',
      description: 'Agrega familiares y dispositivos autorizados para que todos puedan participar.',
      icon: 'UserPlus',
    },
    {
      number: '03',
      title: 'Comparte recuerdos',
      description: 'Sube fotografías, documentos, videos e historias que forman parte de tu familia.',
      icon: 'Upload',
    },
    {
      number: '04',
      title: 'Construye tu legado',
      description: 'Toda la información comienza a formar una historia familiar digital permanente.',
      icon: 'TreePine',
    },
  ] as Step[],

  // ── Centro de Mando ─────────────────────────────────────────
  commandCenter: {
    title: 'Centro de Mando',
    subtitle: 'El control de tu ecosistema Raíces',
    description:
      'El Centro de Mando permite administrar dispositivos autorizados, supervisar la actividad de la familia y gestionar determinadas funciones que no estarán disponibles directamente desde la aplicación.',
    status: 'En desarrollo',
    devices: [
      { name: 'Teléfono de Mamá', status: 'connected' as const, lastSync: 'Hace 5 min' },
      { name: 'Tablet de Papá', status: 'syncing' as const, lastSync: 'Sincronizando...' },
      { name: 'Portátil de Ana', status: 'offline' as const, lastSync: 'Hace 2 días' },
    ] as DeviceRow[],
    activities: [
      { icon: 'Camera', action: 'Fotografía subida', time: 'Hace 10 min' },
      { icon: 'FileText', action: 'Documento agregado', time: 'Hace 1 h' },
      { icon: 'BookOpen', action: 'Nuevo recuerdo creado', time: 'Hace 3 h' },
      { icon: 'RefreshCw', action: 'Dispositivo sincronizado', time: 'Hace 5 h' },
    ] as ActivityRow[],
    storage: {
      used: '2.4 GB',
      total: '10 GB',
      files: '1,247 archivos',
    },
    adminSections: ['Usuarios', 'Permisos', 'Dispositivos', 'Seguridad', 'Configuración'],
  },

  // ── Comparación App vs Centro de Mando ──────────────────────
  comparison: {
    title: 'Aplicación y Centro de Mando',
    subtitle: 'Dos herramientas complementarias para tu ecosistema Raíces',
    appTitle: 'Aplicación Raíces',
    appSubtitle: 'Diseñada para los miembros de la familia',
    appFeatures: [
      'Ver el árbol familiar',
      'Subir recuerdos',
      'Ver fotografías',
      'Añadir historias',
      'Explorar la línea del tiempo',
      'Conectar con la familia',
    ],
    commandTitle: 'Centro de Mando',
    commandSubtitle: 'Diseñado para la administración y supervisión',
    commandFeatures: [
      'Gestionar dispositivos autorizados',
      'Supervisar la actividad',
      'Gestionar permisos',
      'Supervisar la sincronización',
      'Gestionar el almacenamiento',
      'Revisar la actividad del sistema',
      'Configurar ajustes avanzados',
    ],
  },

  // ── Seguridad y privacidad ──────────────────────────────────
  security: {
    title: 'Seguridad y privacidad',
    subtitle: 'La información de tu familia es privada',
    description:
      'Raíces está diseñada para que la información familiar sea tratada como privada. Tú decides quién puede acceder y qué puede ver cada persona.',
    items: [
      {
        icon: 'KeyRound',
        title: 'Control de acceso',
        description: 'Solo las personas autorizadas pueden entrar al espacio familiar.',
      },
      {
        icon: 'Smartphone',
        title: 'Dispositivos autorizados',
        description: 'Cada dispositivo debe ser autorizado antes de acceder a la información.',
      },
      {
        icon: 'Users',
        title: 'Gestión de permisos',
        description: 'Define qué puede ver y hacer cada miembro de la familia.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Protección de información',
        description: 'Los datos familiares se tratan con cuidado y privacidad.',
      },
      {
        icon: 'Settings',
        title: 'Administración familiar',
        description: 'Gestiona quién forma parte del espacio y quién puede invitar a otros.',
      },
    ] as SecurityItem[],
  },

  // ── Capturas de pantalla ───────────────────────────────────
  screenshots: [
    {
      src: 'https://images.pexels.com/photos/33270087/pexels-photo-33270087.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Inicio de Raíces',
    },
    {
      src: 'https://images.pexels.com/photos/17790673/pexels-photo-17790673.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Árbol familiar',
    },
    {
      src: 'https://images.pexels.com/photos/15250537/pexels-photo-15250537.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Recuerdos y fotografías',
    },
    {
      src: 'https://images.pexels.com/photos/17950967/pexels-photo-17950967.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Línea del tiempo familiar',
    },
    {
      src: 'https://images.pexels.com/photos/7545406/pexels-photo-7545406.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Perfil familiar',
    },
    {
      src: 'https://images.pexels.com/photos/6274899/pexels-photo-6274899.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Álbum de recuerdos',
    },
  ] as Screenshot[],

  // ── Preguntas frecuentes ────────────────────────────────────
  faq: [
    {
      question: '¿Qué es Raíces?',
      answer:
        'Raíces es una plataforma digital diseñada para ayudar a las familias a preservar, organizar y conectar su historia, recuerdos, fotografías, documentos y relatos a lo largo de las generaciones.',
    },
    {
      question: '¿Para quién está diseñada la aplicación?',
      answer:
        'Para cualquier familia que quiera mantener viva su historia. Está pensada para que tanto adultos mayores como jóvenes puedan usarla con facilidad.',
    },
    {
      question: '¿Qué tipo de recuerdos puedo guardar?',
      answer:
        'Puedes guardar fotografías, videos, documentos, historias escritas, fechas importantes y cualquier momento especial que forme parte de la historia de tu familia.',
    },
    {
      question: '¿Puedo agregar a otros familiares?',
      answer:
        'Sí. Puedes invitar a familiares y autorizar sus dispositivos para que participen en el espacio familiar y contribuyan con sus propios recuerdos.',
    },
    {
      question: '¿Cómo funciona el Centro de Mando?',
      answer:
        'El Centro de Mando es una plataforma de administración que permite gestionar dispositivos autorizados, supervisar la actividad familiar y controlar permisos. Estará disponible en una etapa posterior del proyecto.',
    },
    {
      question: '¿La aplicación está disponible para Android?',
      answer:
        'Sí. La aplicación Raíces está disponible para Android. Puedes descargar el archivo APK directamente desde esta página.',
    },
    {
      question: '¿Habrá una versión para iPhone?',
      answer:
        'Sí, está previsto que Raíces esté disponible para iPhone en el futuro. La versión para iPhone llegará próximamente.',
    },
    {
      question: '¿Quién puede acceder a la información familiar?',
      answer:
        'Solo las personas que tú autorices. Tú decides quién puede acceder al espacio familiar y qué permisos tiene cada persona.',
    },
  ] as FaqItem[],

  // ── Contacto ────────────────────────────────────────────────
  contactEmail: 'contacto@raices.app',
  contactPhone: '',
  contactAddress: '',
  socialLinks: {
    instagram: '',
    twitter: '',
    facebook: '',
  },
};

export type AppData = typeof appData;
