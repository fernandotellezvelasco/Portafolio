import { useId } from 'react';

/**
 * ICONOS DE RELLENO SÓLIDO A DOS TONOS
 *
 * El estilo sale del `libro.svg` que pasó Fernando: nada de trazos, sólo
 * siluetas macizas partidas por la mitad — la mitad izquierda en gris oscuro,
 * la derecha en blanco, separadas por una rendija. La rendija es lo que hace
 * que se lean como dos piezas y no como una figura a la que le cambiaron el
 * color a medias.
 *
 * Los iconos son dibujos propios. El sistema de dos tonos es el que se replica;
 * las formas no se copian de ningún set.
 *
 * CÓMO FUNCIONA EL CORTE
 *
 * Cada icono se declara una sola vez, como silueta completa, y se pinta dos
 * veces recortada: una con todo lo que queda a la izquierda de la rendija, otra
 * con lo de la derecha. Así el corte cae siempre en el mismo sitio y con el
 * mismo grosor en los cinco, que es justo lo que se pierde cuando cada icono se
 * dibuja a mano en dos piezas.
 *
 * El libro es la excepción: viene con sus dos mitades ya dibujadas, cada una
 * con su curvatura, así que se usa tal cual.
 */

const OSCURO = '#2B2B2B';
const CLARO = '#FFFFFF';

/** Ancho de la rendija entre las dos mitades, en unidades del viewBox */
const RENDIJA = 6;

const ANCHO = 116;
const ALTO = 96;
const MEDIO = ANCHO / 2;

interface PropsIcono {
  className?: string;
}

/** Silueta partida en dos por el eje vertical */
function Partido({
  d,
  evenodd = false,
  className = '',
}: {
  d: string;
  evenodd?: boolean;
  className?: string;
}) {
  // useId: si dos iconos comparten el id del clipPath, el segundo se rompe
  const id = useId().replace(/:/g, '');
  const regla = evenodd ? ('evenodd' as const) : ('nonzero' as const);

  return (
    <svg
      viewBox={`0 0 ${ANCHO} ${ALTO}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={`${id}-izq`}>
          <rect x="0" y="0" width={MEDIO - RENDIJA / 2} height={ALTO} />
        </clipPath>
        <clipPath id={`${id}-der`}>
          <rect x={MEDIO + RENDIJA / 2} y="0" width={MEDIO} height={ALTO} />
        </clipPath>
      </defs>
      <path d={d} fill={OSCURO} fillRule={regla} clipPath={`url(#${id}-izq)`} />
      <path d={d} fill={CLARO} fillRule={regla} clipPath={`url(#${id}-der)`} />
    </svg>
  );
}

/* ---------- Descripción ---------- */

/** Tal como lo entregó Fernando, sólo centrado en el lienzo común de 116×96 */
export function IconoLibro({ className = '' }: PropsIcono) {
  return (
    <svg
      viewBox={`0 0 ${ANCHO} ${ALTO}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(0, 2.5)">
        <path
          d="M109.198 0.0109368C98.1621 0.637267 76.2265 2.91703 62.6848 11.2063C61.7504 11.7783 61.2207 12.7953 61.2207 13.8587V87.1393C61.2207 89.4654 63.7643 90.9356 65.9091 89.8561C79.8414 82.8436 99.9907 80.9304 109.954 80.4068C113.355 80.2275 115.999 77.5007 115.999 74.2321V6.19368C116.001 2.62702 112.908 -0.198511 109.198 0.0109368Z"
          fill={CLARO}
        />
        <path
          d="M53.3146 11.2063C39.775 2.91703 17.8393 0.639281 6.80303 0.0109368C3.09339 -0.198511 0 2.62702 0 6.19368V74.2341C0 77.5047 2.64428 80.2316 6.0458 80.4088C16.0127 80.9324 36.1721 82.8477 50.1044 89.8642C52.2432 90.9416 54.7787 89.4735 54.7787 87.1534V13.8224C54.7787 12.7571 54.2511 11.7803 53.3146 11.2063Z"
          fill={OSCURO}
        />
      </g>
    </svg>
  );
}

/* ---------- Mi rol: una figura ---------- */

const PERSONA =
  'M58 5 A21 21 0 1 0 58 47 A21 21 0 1 0 58 5 Z' +
  'M58 54 C33 54 13 71 12 92 L104 92 C103 71 83 54 58 54 Z';

export function IconoPersona({ className = '' }: PropsIcono) {
  return <Partido d={PERSONA} className={className} />;
}

/* ---------- Objetivo: diana concéntrica ---------- */

/* Un anillo grueso y un disco, no anillos finos.
   La primera versión llevaba tres aros delgados y en pantalla se perdía: un aro
   de diez píxeles en gris #2B2B2B sobre una tarjeta casi negra desaparece, y
   sólo quedaba visible la mitad blanca — se leía como medio icono roto. Con
   masas anchas los dos tonos se sostienen, que es justo lo que hace que el
   libro de la referencia funcione. */
const DIANA =
  'M58 3 A45 45 0 1 0 58 93 A45 45 0 1 0 58 3 Z' +
  'M58 16 A32 32 0 1 0 58 80 A32 32 0 1 0 58 16 Z' +
  'M58 22 A26 26 0 1 0 58 74 A26 26 0 1 0 58 22 Z';

export function IconoDiana({ className = '' }: PropsIcono) {
  return <Partido d={DIANA} evenodd className={className} />;
}

/* ---------- Equipo: dos figuras ---------- */

/* Cada figura vive entera de su lado de la rendija: ninguna la cruza, así que
   el corte no parte a nadie por la mitad. */
const EQUIPO =
  'M29 14 A16 16 0 1 0 29 46 A16 16 0 1 0 29 14 Z' +
  'M29 52 C16 52 5 64 4 82 L54 82 C53 64 42 52 29 52 Z' +
  'M87 14 A16 16 0 1 0 87 46 A16 16 0 1 0 87 14 Z' +
  'M87 52 C74 52 63 64 62 82 L112 82 C111 64 100 52 87 52 Z';

export function IconoEquipo({ className = '' }: PropsIcono) {
  return <Partido d={EQUIPO} className={className} />;
}

/* ---------- Herramientas: engrane ---------- */

/* Ocho dientes trapezoidales calculados sobre dos radios (35 el cuerpo, 47 la
   punta) para que las caras queden rectas y los valles redondos. */
const ENGRANE =
  'M50.13 13.90 L51.05 1.52 A47 47 0 0 1 64.95 1.52 L65.87 13.90 A35 35 0 0 1 76.55 18.32 ' +
  'L85.96 10.22 A47 47 0 0 1 95.78 20.04 L87.68 29.45 A35 35 0 0 1 92.10 40.13 ' +
  'L104.48 41.05 A47 47 0 0 1 104.48 54.95 L92.10 55.87 A35 35 0 0 1 87.68 66.55 ' +
  'L95.78 75.96 A47 47 0 0 1 85.96 85.78 L76.55 77.68 A35 35 0 0 1 65.87 82.10 ' +
  'L64.95 94.48 A47 47 0 0 1 51.05 94.48 L50.13 82.10 A35 35 0 0 1 39.45 77.68 ' +
  'L30.04 85.78 A47 47 0 0 1 20.22 75.96 L28.32 66.55 A35 35 0 0 1 23.90 55.87 ' +
  'L11.52 54.95 A47 47 0 0 1 11.52 41.05 L23.90 40.13 A35 35 0 0 1 28.32 29.45 ' +
  'L20.22 20.04 A47 47 0 0 1 30.04 10.22 L39.45 18.32 A35 35 0 0 1 50.13 13.90 Z' +
  'M58 33 A15 15 0 1 0 58 63 A15 15 0 1 0 58 33 Z';

export function IconoEngrane({ className = '' }: PropsIcono) {
  return <Partido d={ENGRANE} evenodd className={className} />;
}

/* ---------- Interfaz: un panel con dos áreas ---------- */

/* Tres paneles macizos, no un marco con huecos.
   La primera versión era un recuadro con dos ventanas recortadas, y a los 48 px
   de las tarjetas de Gobierno la mitad oscura se quedaba en un filo de dos
   píxeles que desaparecía sobre el fondo casi negro: sólo se veía media
   interfaz. Con paneles llenos los dos tonos aguantan el tamaño pequeño. */
const INTERFAZ =
  /* Panel lateral, a la izquierda de la rendija */
  'M14 16 H46 A6 6 0 0 1 52 22 V74 A6 6 0 0 1 46 80 H14 A6 6 0 0 1 8 74 V22 A6 6 0 0 1 14 16 Z' +
  /* Dos paneles de contenido, a la derecha */
  'M70 16 H102 A6 6 0 0 1 108 22 V38 A6 6 0 0 1 102 44 H70 A6 6 0 0 1 64 38 V22 A6 6 0 0 1 70 16 Z' +
  'M70 52 H102 A6 6 0 0 1 108 58 V74 A6 6 0 0 1 102 80 H70 A6 6 0 0 1 64 74 V58 A6 6 0 0 1 70 52 Z';

export function IconoInterfaz({ className = '' }: PropsIcono) {
  return <Partido d={INTERFAZ} className={className} />;
}

/* ---------- Candado ---------- */

const CANDADO =
  /* El arco: exterior de radio 26, interior de 11 */
  'M32 44 V30 A26 26 0 0 1 84 30 V44 H69 V30 A11 11 0 0 0 47 30 V44 Z' +
  /* El cuerpo */
  'M34 44 H82 A12 12 0 0 1 94 56 V78 A12 12 0 0 1 82 90 H34 A12 12 0 0 1 22 78 V56 A12 12 0 0 1 34 44 Z';

export function IconoCandado({ className = '' }: PropsIcono) {
  return <Partido d={CANDADO} className={className} />;
}

/* ---------- Obra: cono de tránsito ---------- */

const OBRA =
  'M58 6 C60.5 6 62.7 7.7 63.4 10.1 L82 74 H34 L52.6 10.1 C53.3 7.7 55.5 6 58 6 Z' +
  /* La franja se resta del cono con la regla par-impar */
  'M44.5 40 H71.5 L74.5 52 H41.5 Z' +
  'M20 76 H96 A7 7 0 0 1 96 90 H20 A7 7 0 0 1 20 76 Z';

export function IconoObra({ className = '' }: PropsIcono) {
  return <Partido d={OBRA} evenodd className={className} />;
}
