/**
 * Contenido de los cuatro bloques de "Sobre mí".
 * Separado de los componentes para que actualizar el CV no obligue a tocar
 * maquetación: aquí se edita, allá sólo se pinta.
 */

import logoBego from '../../assets/empresas/bego.svg';
import logoSprintia from '../../assets/empresas/sprintia.webp';
import logoHitss from '../../assets/empresas/hitss.webp';

export interface Puesto {
  empresa: string;
  cargo: string;
  periodo: string;
  /** Imagen del logotipo; si no hay, se usa `inicial` */
  logo?: string;
  inicial?: string;
  /** Una línea de contexto, visible al desplegar */
  detalle?: string;
}

export const EXPERIENCIA: Puesto[] = [
  {
    empresa: 'HITSS',
    cargo: 'Product Designer · UX/UI',
    periodo: '2026 — Actualidad',
    logo: logoHitss,
    detalle:
      'Diseño end-to-end de Mi Claro Empresas y rediseño de portales corporativos en toda Latinoamérica. Design Systems escalables e investigación con Microsoft Clarity.',
  },
  {
    empresa: 'Sprintia',
    cargo: 'Product Designer · UX/UI · Developer IA',
    periodo: '2025 — 2026',
    logo: logoSprintia,
    detalle:
      'Visión de producto y propuesta de valor junto al equipo fundador. Investigación, arquitectura de información y flujos end-to-end, con implementación apoyada en IA.',
  },
  {
    empresa: 'Bego',
    cargo: 'Product Designer · UX/UI & Multimedia',
    periodo: '2023 — 2026',
    logo: logoBego,
    detalle:
      'Experiencias digitales para plataformas web y canales digitales, trabajando de la mano de producto, marketing y desarrollo.',
  },
  {
    empresa: 'Santo Niño',
    cargo: 'Diseñador Gráfico · UX/UI Support',
    periodo: '2022 — 2023',
    inicial: 'S',
    detalle:
      'Diseño web, branding, editorial y animación para campañas. Trato directo con clientes como Walmart, Vogue y Pétalo.',
  },
  {
    empresa: 'Freelance',
    cargo: 'Diseñador y Fotógrafo de Producto',
    periodo: '2018 — 2021',
    inicial: 'F',
    detalle:
      'Identidad visual, materiales impresos y digitales, y producción fotográfica de producto para ecommerce y catálogo.',
  },
];

export interface Estudio {
  institucion: string;
  titulo: string;
  periodo: string;
  /** Nombre del icono en `iconos.ts`, o inicial de respaldo */
  icono?: string;
  inicial?: string;
}

export const EDUCACION: Estudio[] = [
  {
    institucion: 'Universidad Tecnológica de México',
    titulo: 'Licenciatura en Diseño Gráfico',
    periodo: '2017 — 2021',
    inicial: 'U',
  },
  {
    institucion: 'Google · Coursera',
    titulo: 'Certificado Profesional de Diseño UX',
    periodo: '2025 — 2026',
    icono: 'coursera',
  },
  {
    institucion: 'Udemy',
    titulo: 'UX/UI Avanzado',
    periodo: '2023',
    icono: 'udemy',
  },
  {
    institucion: 'Google Actívate',
    titulo: 'Marketing Digital',
    periodo: '2022',
    icono: 'google',
  },
];

/** Lo que hago: capacidades reales, agrupadas de lo estratégico a lo técnico */
export const LO_QUE_HAGO: string[] = [
  'Diseño de producto end-to-end',
  'Investigación con usuarios',
  'Arquitectura de información',
  'Auditoría UX',
  'Wireframing y prototipado',
  'Design Systems',
  'Diseño de interfaz',
  'Análisis de métricas',
  'Identidad visual',
  'Diseño editorial',
  'Motion y animación',
  'Fotografía de producto',
  'Vibe coding',
  'Integración de IA',
];

export interface Herramienta {
  nombre: string;
  /** Clave en `iconos.ts`; si falta, se dibuja el monograma */
  icono?: string;
  monograma?: string;
}

export const HERRAMIENTAS: Herramienta[] = [
  { nombre: 'Figma', icono: 'figma' },
  { nombre: 'Figma Make', monograma: 'FM' },
  { nombre: 'Sketch', icono: 'sketch' },
  { nombre: 'Photoshop', icono: 'photoshop' },
  { nombre: 'Illustrator', icono: 'illustrator' },
  { nombre: 'After Effects', icono: 'aftereffects' },
  { nombre: 'Premiere', icono: 'premiere' },
  { nombre: 'Blender', icono: 'blender' },
  { nombre: 'Maze', icono: 'maze' },
  { nombre: 'Clarity', monograma: 'Cl' },
  { nombre: 'Claude Code', icono: 'claude' },
  { nombre: 'Cursor', icono: 'cursor' },
  { nombre: 'Lovable', monograma: 'Lo' },
  { nombre: 'GitHub', icono: 'github' },
];
