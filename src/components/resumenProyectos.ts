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
 * CLARO, Maze en BEGO APP y en CANDADOS INTELIGENTES, Make y Horizon en
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
  | 'candados';

const RESUMENES: Record<ClaveProyecto, ScrollStackCard[]> = {
  claro: [
    {
      eyebrow: 'Descripción',
      icon: IconoLibro,
      statement:
        'Soluciones digitales para los portales de Claro. La primera: el rediseño del Asesor de Velocidad y Experiencia Wi-Fi de República Dominicana, el flujo que recomienda el plan de Internet Fijo.',
      meta: 'Claro Rep. Dominicana · Internet Fijo',
    },
    {
      eyebrow: 'Mi rol',
      icon: IconoPersona,
      statement: 'UX Researcher y diseñador de producto, de punta a punta.',
      chips: ['UX Research', 'Análisis de datos', 'UI Design'],
      bullets: [
        'Medí el comportamiento real en el asesor actual con Microsoft Clarity: 30 días de sesiones, escritorio contra móvil y nuevos contra recurrentes.',
        'Los clics fallidos en escritorio duplican a los de móvil (51% contra 25%): ver más opciones de golpe genera más fricción, no menos.',
        'Rediseñé los tres pasos con menos carga por pantalla y validación que avisa en el momento, en vez de dejar al usuario atascado.',
        'Extendí el resultado con el equipo Mesh recomendado y un flujo de contratación que antes no existía.',
      ],
    },
    {
      eyebrow: 'Objetivo',
      icon: IconoDiana,
      statement:
        'Que el usuario llegue a un plan que de verdad le sirve sin abandonar a medio camino, y que pueda contratarlo ahí mismo.',
      meta: 'Internet Fijo · Equipos Mesh',
    },
    {
      eyebrow: 'Equipo',
      icon: IconoEquipo,
      statement:
        'Trabajé de la mano y de punta a punta con el equipo de desarrollo, Marketing y los stakeholders del país, del levantamiento del requerimiento a la entrega para implementación.',
      meta: 'Desarrollo · Marketing · Stakeholders',
    },
    {
      eyebrow: 'Herramientas',
      icon: IconoEngrane,
      statement:
        'Microsoft Clarity para leer el comportamiento, Figma para el rediseño y sus responsive, y una maquetación navegable para que el país y desarrollo lo probaran antes de construirlo.',
      meta: 'Microsoft Clarity · Figma · Maquetación HTML',
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
        'Trabajé de la mano y de punta a punta con el equipo de desarrollo móvil, Marketing y los stakeholders del producto, desde la definición hasta la entrega para iOS y Android.',
      meta: 'Sprintia Studio · Desarrollo · Marketing · Stakeholders',
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
      statement:
        'Trabajé de la mano y de punta a punta con el equipo de desarrollo, Marketing y los stakeholders del proyecto, del levantamiento a la entrega para implementación.',
      meta: 'Sprintia Studio · Desarrollo · Marketing · Stakeholders',
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
      statement:
        'Trabajé de la mano y de punta a punta con el equipo de desarrollo, Marketing y los stakeholders, de la visión de producto a la puesta en marcha.',
      meta: 'Sprintia Studio · Desarrollo · Marketing · Stakeholders',
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
        'Iniciativa independiente de Bego: una plataforma de seguridad para la gestión y el monitoreo de candados satelitales, con control de accesos críticos en tiempo real.',
      meta: 'Bego · SaaS / Seguridad · 2025',
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
        'Trabajé de la mano y de punta a punta con el equipo de desarrollo, Marketing y los stakeholders, con consultoría de seguridad de CyberSafe.',
      meta: 'Desarrollo · Marketing · Stakeholders · CyberSafe',
    },
    {
      eyebrow: 'Herramientas',
      icon: IconoEngrane,
      statement:
        'Figma para el diseño y el sistema de componentes, y Maze para pruebas de usabilidad, mapas de calor y encuestas sobre los flujos.',
      meta: 'Figma · Maze',
    },
  ],

};

export function resumenDe(clave: ClaveProyecto | null): ScrollStackCard[] | null {
  return clave ? RESUMENES[clave] : null;
}
