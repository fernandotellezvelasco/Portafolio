import type { ScrollStackCard } from './ScrollStack';
import {
  IconoLibro,
  IconoPersona,
  IconoDiana,
  IconoEquipo,
  IconoEngrane,
} from './iconos/porsche';

/**
 * RESUMEN DE CADA PROYECTO EN CINCO CARDS
 *
 * Las mismas cinco preguntas en el mismo orden para los seis casos de estudio:
 * de qué va, qué hice yo, para qué, con quién y con qué. Eso es lo que hace que
 * el portafolio se lea como un portafolio y no como seis páginas sueltas.
 *
 * Todo el texto sale del propio caso de estudio — la descripción, las viñetas
 * del rol, la cita del objetivo y los créditos ya estaban escritos más abajo.
 * Aquí se reordenan, no se inventan. Las únicas líneas deducidas son las de
 * Herramientas, y se apoyan en lo que cada caso muestra: Microsoft Clarity en
 * CLARO, Maze en BEGO APP y en los proyectos de Gobierno, Make y Horizon en
 * SPRINTIA.
 *
 * Vive fuera de ProjectModal porque ese archivo ya pasa de las dos mil líneas y
 * esto es contenido, no interfaz: se edita con criterio de redacción.
 */

/** Claves internas, no títulos: el título puede cambiar sin romper esto */
export type ClaveProyecto =
  | 'claro'
  | 'begoApp'
  | 'begoWeb'
  | 'sprintia'
  | 'candados'
  | 'gobierno';

const RESUMENES: Record<ClaveProyecto, ScrollStackCard[]> = {
  claro: [
    {
      eyebrow: 'Descripción',
      icon: IconoLibro,
      statement:
        'Auditoría de experiencia digital del Portal de Pagos de Claro Colombia y rediseño del widget "Resumen en Vivo" de gestión de dispositivos y planes.',
      meta: 'claro.com.co · Mayo 2026',
    },
    {
      eyebrow: 'Mi rol',
      icon: IconoPersona,
      statement: 'UX Researcher y diseñador de producto, de punta a punta.',
      chips: ['UX Research', 'Análisis de datos', 'UI Design'],
      bullets: [
        'Auditoría del Portal de Pagos con Microsoft Clarity sobre 40 sesiones reales de mayo de 2026.',
        'Causa raíz de las fricciones: un error JS activo desde el segundo 0:01 que bloqueaba el CTA "Pagar mi factura Claro".',
        '10.42% de sesiones con dead clicks y 29.66% con rage clicks, concentrados en un solo elemento del Hero.',
        'Rediseño del widget "Resumen en Vivo" en tres variantes de tema: claro, oscuro y de marca.',
      ],
    },
    {
      eyebrow: 'Objetivo',
      icon: IconoDiana,
      statement:
        'Detectar, cuantificar y priorizar las fricciones que impiden completar el pago de la factura, y convertirlas en un rediseño accionable.',
      meta: 'Portal de Pagos · Widget Resumen en Vivo',
    },
    {
      eyebrow: 'Equipo',
      icon: IconoEquipo,
      statement:
        'Auditoría, investigación y propuesta visual en solitario. Los hallazgos se entregan priorizados por severidad para el equipo de desarrollo.',
      meta: 'Luis Fernando Téllez',
    },
    {
      eyebrow: 'Herramientas',
      icon: IconoEngrane,
      statement:
        'Microsoft Clarity para leer el comportamiento —grabaciones, mapas de calor, dead y rage clicks— y Figma para el rediseño.',
      meta: 'Microsoft Clarity · Figma',
    },
  ],

  begoApp: [
    {
      eyebrow: 'Descripción',
      icon: IconoLibro,
      statement:
        'BeGo Driver es una app móvil para transportistas: encontrar y aceptar cargas, gestionar viajes y dar seguimiento a los servicios de transporte.',
      meta: 'App nativa iOS y Android · 2025',
    },
    {
      eyebrow: 'Mi rol',
      icon: IconoPersona,
      statement: 'Diseñador UX/UI y UX Writer del rediseño.',
      chips: ['UX Design', 'UI Design', 'UX Writer'],
      bullets: [
        'Rediseño UX/UI de los flujos clave con metodologías ágiles, hacia una experiencia más intuitiva.',
        'Prototipos de baja y alta fidelidad para validar iteraciones y asegurar una implementación precisa.',
        'Co-creación del Design System desde cero con Atomic Design, para escalabilidad y consistencia.',
        'Componentes booleanos avanzados para optimizar estados y agilizar el mantenimiento del equipo.',
      ],
    },
    {
      eyebrow: 'Objetivo',
      icon: IconoDiana,
      statement:
        'Conectar cargadores con transportistas usando inteligencia artificial, para optimizar las operaciones logísticas en una plataforma nativa.',
      meta: 'Visibilidad operativa · Retornos en vacío',
    },
    {
      eyebrow: 'Equipo',
      icon: IconoEquipo,
      statement:
        'Diseño en Sprintia Studio, con el equipo móvil a cargo del desarrollo en iOS y Android.',
      meta: 'Sprintia Studio · Mobile Team',
    },
    {
      eyebrow: 'Herramientas',
      icon: IconoEngrane,
      statement:
        'Figma para el diseño y el Design System, y Maze como plataforma de validación: pruebas A/B, usabilidad, encuestas y mapas de calor.',
      meta: 'Figma · Maze',
    },
  ],

  begoWeb: [
    {
      eyebrow: 'Descripción',
      icon: IconoLibro,
      statement:
        'Plataforma web de gestión logística. El rediseño atacó una navegación poco intuitiva y una propuesta de valor difícil de entender.',
      meta: 'Web responsivo · 2025',
    },
    {
      eyebrow: 'Mi rol',
      icon: IconoPersona,
      statement:
        'Diseñador UX/UI y UX Writer: convertir la operación logística en una experiencia digital clara.',
      chips: ['UX Design', 'UI Design', 'UX Writer'],
      bullets: [
        'Simplificación del registro y el seguimiento, para reducir fricciones en la operación.',
        'Interfaces orientadas a datos, con las métricas logísticas legibles de un vistazo.',
        'Diseño responsivo pensado para usarse en carretera, no sólo en escritorio.',
      ],
    },
    {
      eyebrow: 'Objetivo',
      icon: IconoDiana,
      statement:
        'Transformar la gestión logística en un ecosistema digital transparente que optimice el flujo de mercancías y centralice el control operativo.',
      meta: 'Claridad de producto · Usabilidad',
    },
    {
      eyebrow: 'Equipo',
      icon: IconoEquipo,
      statement: 'Diseño en Sprintia Studio, desarrollo a cargo de Tech Partners.',
      meta: 'Sprintia Studio · Tech Partners',
    },
    {
      eyebrow: 'Herramientas',
      icon: IconoEngrane,
      statement:
        'Figma para arquitectura de información, wireframes y diseño visual. La investigación de profundidad se reprogramó por plazos del proyecto.',
      meta: 'Figma',
    },
  ],

  sprintia: [
    {
      eyebrow: 'Descripción',
      icon: IconoLibro,
      statement:
        'Plataforma para el fútbol amateur que conecta jugadores, equipos y ligas con matchmaking inteligente, reputación deportiva y filtros por nivel.',
      meta: 'Producto · 2025',
    },
    {
      eyebrow: 'Mi rol',
      icon: IconoPersona,
      statement:
        'Product Vision Lead: de la visión y la estrategia hasta el diseño y el frontend.',
      chips: ['Product Vision Lead', 'Desarrollador IA', 'Product Designer'],
      bullets: [
        'Definición de la visión, la estrategia y el liderazgo de producto.',
        'Diseño de flujos UX/UI con foco en usabilidad, sobre un Design System adaptable.',
        'Frontend desarrollado con herramientas de IA, con componentes reutilizables.',
        'Branding, identidad visual y contenido multimedia, integrando diseño, negocio y tecnología.',
      ],
    },
    {
      eyebrow: 'Objetivo',
      icon: IconoDiana,
      statement:
        'Dar transparencia al fútbol amateur y reducir conflictos, mediante un sistema de reseñas y perfiles que fortalezca la reputación de los jugadores.',
      meta: 'Matchmaking · Reputación deportiva',
    },
    {
      eyebrow: 'Equipo',
      icon: IconoEquipo,
      statement: 'Diseño de producto en Sprintia Studio, con estrategia del equipo interno.',
      meta: 'Sprintia Studio · Equipo interno',
    },
    {
      eyebrow: 'Herramientas',
      icon: IconoEngrane,
      statement:
        'Figma para diseño y Design System; Make y Horizon, impulsados por IA, para construir el frontend.',
      meta: 'Figma · Make · Horizon',
    },
  ],

  candados: [
    {
      eyebrow: 'Descripción',
      icon: IconoLibro,
      statement:
        'Plataforma de seguridad para la gestión y el monitoreo de candados satelitales, con control de accesos críticos en tiempo real.',
      meta: 'SaaS / Seguridad · 2025',
    },
    {
      eyebrow: 'Mi rol',
      icon: IconoPersona,
      statement:
        'Diseño integral desde cero, iterando en UX y UI hasta una adaptación responsive sólida.',
      chips: ['UX Design', 'UI Design', 'Prototyping'],
      bullets: [
        'Interfaz capaz de mostrar el estado de miles de dispositivos a la vez.',
        'Sistema de filtrado y alertas críticas para reducir el tiempo de respuesta ante incidentes.',
        'Adaptación responsive completa, de escritorio a móvil.',
      ],
    },
    {
      eyebrow: 'Objetivo',
      icon: IconoDiana,
      statement:
        'Garantizar la integridad de la cadena de custodia con una plataforma de monitoreo en tiempo real y alertas de seguridad.',
      meta: 'Cadena de custodia · Alertas en tiempo real',
    },
    {
      eyebrow: 'Equipo',
      icon: IconoEquipo,
      statement:
        'Diseño y desarrollo en Sprintia Studio, con consultoría de seguridad de CyberSafe.',
      meta: 'Sprintia Studio · CyberSafe',
    },
    {
      eyebrow: 'Herramientas',
      icon: IconoEngrane,
      statement:
        'Figma para el diseño y el sistema de componentes, y Maze para pruebas de usabilidad, mapas de calor y encuestas sobre los flujos.',
      meta: 'Figma · Maze',
    },
  ],

  gobierno: [
    {
      eyebrow: 'Descripción',
      icon: IconoLibro,
      statement:
        'Adaptación de la suite de servicios Bego a la identidad institucional del Gobierno Federal, como demostración para una alianza estratégica.',
      meta: 'SaaS · 2025',
    },
    {
      eyebrow: 'Mi rol',
      icon: IconoPersona,
      statement:
        'Reskinning sistemático: traducir los flujos operativos existentes a una interfaz institucional.',
      chips: ['UI Adaptation', 'Visual Translation'],
      bullets: [
        'Deconstrucción de los componentes de Bego para mapearlos uno a uno a la nueva identidad.',
        'Aplicación de los lineamientos visuales federales sin alterar los flujos ya validados.',
        'Por directriz del liderazgo, esta fase no contempló descubrimiento de usuarios.',
      ],
    },
    {
      eyebrow: 'Objetivo',
      icon: IconoDiana,
      statement:
        'Demostrar la viabilidad de los servicios de Bego dentro del ecosistema gubernamental, sin incurrir en desarrollo de nuevas funcionalidades.',
      meta: 'Normativa visual federal',
    },
    {
      eyebrow: 'Equipo',
      icon: IconoEquipo,
      statement:
        'Diseño y desarrollo en Sprintia Studio, con consultoría de seguridad de CyberSafe.',
      meta: 'Sprintia Studio · CyberSafe',
    },
    {
      eyebrow: 'Herramientas',
      icon: IconoEngrane,
      statement:
        'Figma para la adaptación de componentes, sobre los lineamientos de identidad del Gobierno Federal.',
      meta: 'Figma · Identidad federal',
    },
  ],
};

export function resumenDe(clave: ClaveProyecto | null): ScrollStackCard[] | null {
  return clave ? RESUMENES[clave] : null;
}
