import { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValueEvent,
  MotionValue,
} from 'motion/react';
import { HeroParticles } from './HeroParticles';
import { Project } from './ProjectCard';
import CurvedLoop from './CurvedLoop';
import './CurvedLoop.css';
import './HeroStage.css';
import { ImageWithFallback } from './figma/ImageWithFallback';

/**
 * BLOQUE 1 (v2)
 *
 * Secuencia dirigida por scroll:
 *   1. El hero ocupa toda la pantalla (esfera de partículas intacta).
 *   2. Al hacer scroll el fondo pasa a blanco y el hero ENCOGE hasta quedar
 *      exactamente del tamaño de una card de proyecto — no se desvanece:
 *      se convierte en card. El relevo ocurre cuando ambas geometrías coinciden.
 *   3. Detrás aparece "Design that sells · Speed without compromise" pasando
 *      de borroso a nítido.
 *   4. Las cards forman un carrusel CIRCULAR: viven sobre un cilindro y giran
 *      sobre su propio eje, así que las laterales quedan de canto y se ve su
 *      reverso, como en el video de referencia.
 */

interface HeroStageProps {
  projects: Project[];
  /** `origen` es el punto de pantalla del clic: de ahí nace la transición */
  onExplore: (project: Project, origen?: { x: number; y: number }) => void;
  onVisible?: (index: number) => void;
}

const MARQUEE_TEXT = 'Design that sells ✦ Speed without compromise ✦ ';

/** Relación de aspecto de las cards (9:14, formato retrato) */
const CARD_RATIO = 14 / 9;

/**
 * Punto del scroll en el que el hero cede su lugar a la primera card.
 * Todo lo del hero se expresa como fracción de esta etapa (helper `h`), así
 * que mover este valor reescala la coreografía completa sin descuadrarla.
 */
const HANDOFF = 0.29;

/** Convierte una fracción de la etapa del hero (0→1) en progreso del track */
const h = (frac: number) => frac * HANDOFF;

/**
 * La pantalla rota 90° completos, como cuando giras el celular de horizontal a
 * vertical para ver un video. No se deforma: rota, y por eso termina vertical.
 */
const ROTACION = 90;

/** Profundidad de acompañamiento durante el giro (vuelve a cero al aterrizar) */
const TILT = { y: 14, x: 6 };

/**
 * Separación angular entre cards. No la derivamos de 360/nº de proyectos:
 * con 7 proyectos saldrían a 51°, demasiado de frente. Con 75° las vecinas
 * quedan casi de canto y se les ve el reverso, como en el video de referencia.
 * El anillo no cierra el círculo, pero las cards que se solaparían quedan
 * muy atrás y se desvanecen antes de verse.
 */
const ANGLE_STEP = 75;

/** Medidas de la card y del anillo, según el tamaño de pantalla */
function useRingMetrics() {
  const [m, setM] = useState({
    cardW: 330,
    cardH: 330 * CARD_RATIO,
    radius: 346,
    movil: false,
    viewportW: 0,
    viewportH: 0,
  });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const movil = vw < 640;

      /* Cards más grandes: además de verse mejor, el blanco de clic crece.
         En móvil se miden contra el ancho de pantalla (76%) para que la card
         protagonice, dejando ver apenas el canto de las vecinas.
         El tope por altura evita que en pantallas bajas se salga de cuadro. */
      const porAncho = movil ? vw * 0.76 : vw < 1024 ? 320 : 410;
      const porAlto = (vh * (movil ? 0.66 : 0.72)) / CARD_RATIO;
      const cardW = Math.round(Math.min(porAncho, porAlto));
      const cardH = cardW * CARD_RATIO;

      /* Radio del cilindro: cuanto menor, más juntas quedan las cards. En
         móvil lo acortamos para que las vecinas se asomen pegadas al borde y
         se entienda que hay más proyectos, sin robarle sitio a la del frente. */
      const radius = cardW * (movil ? 0.74 : 1.05);

      setM({
        cardW,
        cardH,
        radius,
        movil,
        viewportW: window.innerWidth,
        viewportH: window.innerHeight,
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return m;
}

export function HeroStage({ projects, onExplore, onVisible }: HeroStageProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { cardW, cardH, radius, movil, viewportW, viewportH } = useRingMetrics();

  /* En móvil la pantalla YA es vertical: rotarla 90° sería girarla hacia un
     formato que no le corresponde. Ahí el hero sólo hace zoom out y se adapta
     a la card. El giro es cosa de pantallas horizontales. */
  const giro = movil ? 0 : ROTACION;

  /* Tamaño con el que la primera card entra en escena: casi todo el alto, pero
     SIN pasarse del ancho. En móvil, medir sólo contra la altura daba una card
     más ancha que la pantalla; como el contenedor es flex, el navegador la
     encogía por su cuenta y el marco dejaba de coincidir con la card. */
  const bigScale =
    viewportH && viewportW
      ? Math.min((viewportH * 0.85) / cardH, (viewportW * 0.94) / cardW)
      : 1.5;
  const bigCardW = cardW * bigScale;
  const bigCardH = cardH * bigScale;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end start'],
  });

  // Suavizado: evita el "escalonado" del scroll por rueda
  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
    restDelta: 0.0005,
  });

  /* ---------- La pantalla que se transforma en card ---------- */
  /* Es UN SOLO elemento: cambia de tamaño (horizontal → vertical) y por dentro
     intercambia su contenido (partículas → primer proyecto). Antes eran dos
     objetos distintos cruzándose, y al girar los mismos grados se deformaban
     diferente bajo la perspectiva: por eso no encajaban. */

  /* La pantalla gira 90° en sentido horario mientras hace zoom out, igual que
     al rotar el celular. La clave: el marco NO cambia de proporción — sigue
     siendo horizontal en su propio sistema — y es la rotación la que lo deja
     vertical en pantalla. Por eso el contenido nunca se deforma.

     Al final, el marco mide (altoCard × anchoCard); rotado 90° se ve como una
     card vertical de (anchoCard × altoCard), exactamente la del carrusel. */

  const vw = viewportW || 1440;
  const vh = viewportH || 900;

  /* El marco llega al relevo con la medida de la card. En escritorio lo hace
     "acostado" (alto × ancho) porque la rotación de 90° lo deja vertical; en
     móvil, sin rotación, va directo a la medida final de la card. */
  const finW = movil ? bigCardW : bigCardH;
  const finH = movil ? bigCardH : bigCardW;

  const heroW = useTransform(p, [0, h(0.11), h(0.3), HANDOFF], [vw, vw, vw * 1.04, finW]);
  const heroH = useTransform(p, [0, h(0.11), h(0.3), HANDOFF], [vh, vh, vh * 1.04, finH]);

  // El giro completo de horizontal a vertical (en móvil, ninguno)
  const heroRotateZ = useTransform(p, [0, h(0.11), HANDOFF], [0, 0, giro]);

  // Algo de profundidad durante el giro, que se disuelve al aterrizar.
  // Sin giro no hay nada que acompañar, así que en móvil se queda plano.
  const heroRotateY = useTransform(
    p,
    [0, h(0.11), h(0.56), HANDOFF],
    [0, 0, movil ? 0 : TILT.y, 0]
  );
  const heroRotateX = useTransform(
    p,
    [0, h(0.11), h(0.56), HANDOFF],
    [0, 0, movil ? 0 : TILT.x, 0]
  );
  const heroRadius = useTransform(p, [0, h(0.19), HANDOFF], [0, 26, 28]);

  // El texto del hero se retira cuando el marco ya se hizo pequeño
  const heroContentOpacity = useTransform(p, [h(0.52), h(0.7)], [1, 0]);

  /* La esfera se repliega sobre sí misma conforme bajas: llega al relevo hecha
     un núcleo pequeño en vez de desaparecer de golpe. */
  const sphereScale = useTransform(p, [0, h(0.25), HANDOFF], [1, 0.92, 0.22]);

  /* El relevo ocurre ya casi completado el giro: sólo entonces la card vertical
     coincide con el marco. Si entra antes, se asoma el marco negro por detrás. */
  const particlesOpacity = useTransform(p, [h(0.81), h(0.96)], [1, 0]);
  const firstProjectOpacity = useTransform(p, [h(0.83), h(0.98)], [0, 1]);

  /* El proyecto va contra-rotado: siempre se ve derecho, como cuando el celular
     reacomoda el contenido al girarlo. Su caja es la de la card (vertical), que
     dentro del marco horizontal encaja justo al estar girada -90°. */
  const projectCounterRotate = useTransform(heroRotateZ, (r: number) => -r);
  /* Sin rotación (móvil) el proyecto comparte la caja del marco tal cual; con
     rotación va con los lados intercambiados, que al contra-rotar encajan. */
  const projectW = useTransform(
    p,
    [0, h(0.11), h(0.3), HANDOFF],
    movil ? [vw, vw, vw * 1.04, bigCardW] : [vh, vh, vh * 1.04, bigCardW]
  );
  const projectH = useTransform(
    p,
    [0, h(0.11), h(0.3), HANDOFF],
    movil ? [vh, vh, vh * 1.04, bigCardH] : [vw, vw, vw * 1.04, bigCardH]
  );

  // Relevo: al llegar aquí el elemento ya es idéntico a la card del anillo
  const heroOpacity = useTransform(p, [0, HANDOFF, HANDOFF + 0.01], [1, 1, 0]);

  /* Una vez entregada la escena, el hero sigue en el DOM y, aunque invisible,
     quedaría encima del carrusel tragándose los clics de las cards.
     En estado de React por lo mismo que las cards: Framer no re-aplica
     `pointer-events` desde un MotionValue. */
  const [heroActivo, setHeroActivo] = useState(true);
  useMotionValueEvent(p, 'change', (v: number) => {
    const activo = v < HANDOFF;
    setHeroActivo(prev => (prev === activo ? prev : activo));
  });

  /* El navegador congela el bucle de animación cuando la pestaña deja de estar
     al frente. Si mientras tanto la página se desplaza —o simplemente al
     volver— el muelle puede quedarse en un valor viejo: se ve una escena y el
     sitio está operando con otra. De ahí venían los clics que no respondían.

     Al recuperar visibilidad recalculamos el avance real a partir de la
     geometría del track (no del valor de Framer, que es justo el que puede
     estar desfasado) y empujamos el muelle a su sitio. */
  useEffect(() => {
    const resincroniza = () => {
      if (document.visibilityState !== 'visible') return;
      const track = trackRef.current;
      if (!track) return;
      const avance = Math.max(
        0,
        Math.min(1, (window.scrollY - track.offsetTop) / track.offsetHeight)
      );
      if (Math.abs(p.get() - avance) > 0.001) p.jump(avance);
    };

    document.addEventListener('visibilitychange', resincroniza);
    window.addEventListener('focus', resincroniza);
    window.addEventListener('pageshow', resincroniza);
    // Al montar: si el navegador restauró el scroll, nadie habría avisado
    const inicial = window.setTimeout(resincroniza, 120);

    return () => {
      document.removeEventListener('visibilitychange', resincroniza);
      window.removeEventListener('focus', resincroniza);
      window.removeEventListener('pageshow', resincroniza);
      window.clearTimeout(inicial);
    };
  }, [p]);

  /* ---------- El fondo: oscuro → blanco ---------- */

  const background = useTransform(
    p,
    [0, 0.07, 0.24, 1],
    ['#0B0B0B', '#0B0B0B', '#FFFFFF', '#FFFFFF']
  );

  /* ---------- El texto marquee de atrás ---------- */

  const textBlur = useTransform(p, [0.1, 0.3, 0.46], [28, 11, 0]);
  const textFilter = useTransform(textBlur, (b: number) => `blur(${b}px)`);
  const textOpacity = useTransform(p, [0.08, 0.3, 0.44], [0, 0.6, 1]);
  const textScale = useTransform(p, [0.1, 0.5], [1.14, 1]);

  /* ---------- El anillo de cards ---------- */
  /* Recoge la escena con la MISMA inclinación y a tamaño grande (la primera
     card llena casi toda la altura, como en el video). Después se endereza,
     encoge hasta su tamaño de carrusel y recién entonces empieza a girar. */

  const ringOpacity = useTransform(p, [HANDOFF - 0.01, HANDOFF], [0, 1]);

  const ringScale = useTransform(p, [HANDOFF, 0.38], [bigScale, 1]);

  // El hero aterriza derecho (termina el giro en 180° sin inclinación), así que
  // el anillo lo recoge también derecho: cualquier diferencia se notaría.
  const ringTiltZ = useTransform(p, [0, 1], [0, 0]);
  const ringTiltY = useTransform(p, [0, 1], [0, 0]);
  const ringTiltX = useTransform(p, [0, 1], [0, 0]);

  // Las vecinas aparecen cuando la primera card ya encogió
  const neighborOpacity = useTransform(p, [0.36, 0.43], [0, 1]);

  /* El carrusel se lleva ~70vh por proyecto (con menos recorrido el giro se
     volvía hipersensible) y TERMINA en 0.78, bastante antes de que el
     contenedor sticky se despegue (ocurre a falta de 100vh, ≈0.90). Ese margen
     es el que deja la última card centrada y quieta un momento antes de que la
     página siga bajando hacia el footer. */
  const ringProgress = useTransform(p, [0.43, 0.78], [0, 1]);

  /* ---------- Al abrir un proyecto ---------- */
  /* La card se acerca al espectador mientras la máscara en estrella crece
     desde el punto del clic. El zoom vive aquí (no en la transición) porque
     tiene que aplicarse al carrusel real, no a una copia. */
  const [zoom, setZoom] = useState(false);
  const temporizadorZoom = useRef<number | null>(null);

  const abrirProyecto = (project: Project, x: number, y: number) => {
    setZoom(true);
    if (temporizadorZoom.current) window.clearTimeout(temporizadorZoom.current);
    // Se deshace ya con el proyecto encima, así el carrusel no "rebota" a la vista
    temporizadorZoom.current = window.setTimeout(() => setZoom(false), 1600);
    onExplore(project, { x, y });
  };

  useEffect(
    () => () => {
      if (temporizadorZoom.current) window.clearTimeout(temporizadorZoom.current);
    },
    []
  );

  return (
    <section ref={trackRef} id="hero-stage" className="relative h-[1000vh]">
      <motion.div
        style={{ background }}
        className="sticky top-0 h-[100dvh] w-full overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{ perspective: '1700px', perspectiveOrigin: '50% 50%' }}
        >
          {/* Texto de fondo */}
          <motion.div
            style={{ opacity: textOpacity, filter: textFilter, scale: textScale }}
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-full">
              <CurvedLoop
                marqueeText={MARQUEE_TEXT}
                speed={1.2}
                curveAmount={0}
                direction="left"
                interactive={false}
                className="hero-stage-marquee"
              />
            </div>
          </motion.div>

          {/* Carrusel circular */}
          <ProjectRing
            projects={projects}
            onExplore={abrirProyecto}
            zoom={zoom}
            opacity={ringOpacity}
            progress={ringProgress}
            scale={ringScale}
            tiltX={ringTiltX}
            tiltY={ringTiltY}
            tiltZ={ringTiltZ}
            neighborOpacity={neighborOpacity}
            cardW={cardW}
            cardH={cardH}
            radius={radius}
          />

          {/* Pie: "Explora los proyectos — 01 / 07" */}
          <CarouselCounter
            progress={ringProgress}
            opacity={neighborOpacity}
            total={projects.length}
          />

          {/* El hero, que encoge hasta convertirse en card.
              preserve-3d es obligatorio: sin él este contenedor aplana a sus
              hijos y las rotaciones pierden la perspectiva. */}
          <div
            style={{ transformStyle: 'preserve-3d' }}
            className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              style={{
                width: heroW,
                height: heroH,
                borderRadius: heroRadius,
                rotateX: heroRotateX,
                rotateY: heroRotateY,
                rotateZ: heroRotateZ,
                opacity: heroOpacity,
                pointerEvents: heroActivo ? 'auto' : 'none',
                transformStyle: 'preserve-3d',
              }}
              className="relative overflow-hidden will-change-transform
                         bg-[#0B0B0B] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            >
              {/* El hero con la esfera de partículas */}
              <motion.div style={{ opacity: particlesOpacity }} className="absolute inset-0">
                <HeroParticles
                  embedded
                  onVisible={onVisible}
                  contentOpacity={heroContentOpacity}
                  sphereScale={sphereScale}
                  interactive={heroActivo}
                />
              </motion.div>

              {/* El primer proyecto toma el relevo dentro del mismo elemento,
                  contra-rotado para verse siempre derecho */}
              {/* pointer-events-none: aunque sea invisible al principio, esta capa
                  va encima del hero y si no, se traga los clics del botón. */}
              <motion.div
                style={{ opacity: firstProjectOpacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  style={{
                    width: projectW,
                    height: projectH,
                    rotateZ: projectCounterRotate,
                    borderRadius: heroRadius,
                  }}
                  className="relative overflow-hidden bg-[#0B0B0B]"
                >
                  {projects[0] && <CardFace project={projects[0]} />}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Carrusel circular                                                  */
/* ------------------------------------------------------------------ */

interface RingProps {
  projects: Project[];
  onExplore: (project: Project, x: number, y: number) => void;
  /** Cuando se abre un proyecto, el carrusel se acerca al espectador */
  zoom: boolean;
  opacity: MotionValue<number>;
  progress: MotionValue<number>;
  scale: MotionValue<number>;
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  tiltZ: MotionValue<number>;
  neighborOpacity: MotionValue<number>;
  cardW: number;
  cardH: number;
  radius: number;
}

function ProjectRing({
  projects,
  onExplore,
  zoom,
  opacity,
  progress,
  scale,
  tiltX,
  tiltY,
  tiltZ,
  neighborOpacity,
  cardW,
  cardH,
  radius,
}: RingProps) {
  const count = projects.length;

  /* Quién recibe el clic lo decide ESTE contenedor, midiendo dónde están las
     cards en pantalla. Las cards no interceptan nada (pointer-events: none).

     Dos intentos anteriores fallaron y conviene dejar escrito por qué:

     1. Sólo la card "del frente" era clicable, según el valor animado del
        carrusel. Pero el navegador congela las animaciones cuando la pestaña
        pasa a segundo plano: el valor se quedaba atrás y la card que veías
        dejaba de ser la que aceptaba clics.

     2. Se hicieron clicables todas. Peor: las cards vecinas ocupan su caja
        completa aunque se vean de canto, así que se robaban los clics entre
        ellas — hubo casos de una card con el 0% de su superficie útil.

     Midiendo las cajas reales no hay nada que se desincronice ni que se
     estorbe: de las cards que contienen el punto, gana la más frontal (la
     más ancha en pantalla), que es exactamente la que el ojo ve encima. */
  const contenedorRef = useRef<HTMLDivElement>(null);
  const presion = useRef<{ x: number; y: number; t: number } | null>(null);

  const cardEnPunto = (x: number, y: number): Project | null => {
    const cont = contenedorRef.current;
    if (!cont) return null;
    let mejor: { project: Project; ancho: number } | null = null;

    cont.querySelectorAll<HTMLElement>('[data-proyecto]').forEach(el => {
      // Una card desvanecida no debe capturar nada
      if (Number(getComputedStyle(el).opacity) <= 0.12) return;
      const r = el.getBoundingClientRect();
      if (x < r.left || x > r.right || y < r.top || y > r.bottom) return;

      const i = Number(el.dataset.proyecto);
      const project = projects[i];
      if (!project) return;
      // La más ancha es la menos girada: la que está de frente
      if (!mejor || r.width > mejor.ancho) mejor = { project, ancho: r.width };
    });

    return mejor ? mejor.project : null;
  };

  const alPresionar = (e: React.PointerEvent) => {
    presion.current = { x: e.clientX, y: e.clientY, t: performance.now() };
  };

  /* Como las cards ya no reciben eventos, tampoco reciben hover: el cursor de
     mano hay que ponerlo a mano sobre el contenedor. Se comprueba una vez por
     frame para no medir cajas en cada píxel que se mueve el ratón. */
  const frameCursor = useRef(0);
  const alMover = (e: React.PointerEvent) => {
    if (frameCursor.current) return;
    const { clientX, clientY } = e;
    frameCursor.current = requestAnimationFrame(() => {
      frameCursor.current = 0;
      const cont = contenedorRef.current;
      if (!cont) return;
      cont.style.cursor = cardEnPunto(clientX, clientY) ? 'pointer' : '';
    });
  };

  useEffect(
    () => () => {
      if (frameCursor.current) cancelAnimationFrame(frameCursor.current);
    },
    []
  );

  const alSoltar = (e: React.PointerEvent) => {
    const p = presion.current;
    presion.current = null;
    if (!p) return;

    const movimiento = Math.hypot(e.clientX - p.x, e.clientY - p.y);
    const transcurrido = performance.now() - p.t;
    // Si arrastró mucho o tardó demasiado, no era un clic. Los márgenes son
    // holgados a propósito: un clic con mouse tiembla unos pixeles y mucha
    // gente mantiene el botón presionado más de lo que uno imagina.
    if (movimiento >= 24 || transcurrido >= 1500) return;

    // Resolvemos en el punto donde se SOLTÓ: si la card se movió con la
    // inercia del scroll, vale la que está ahí ahora, que es la que se ve.
    const project = cardEnPunto(e.clientX, e.clientY) ?? cardEnPunto(p.x, p.y);
    if (project) onExplore(project, e.clientX, e.clientY);
  };

  return (
    <motion.div
      ref={contenedorRef}
      style={{ opacity, transformStyle: 'preserve-3d' }}
      id="projects-carousel"
      className="absolute inset-0 z-10 flex items-center justify-center"
      onPointerDown={alPresionar}
      onPointerUp={alSoltar}
      onPointerMove={alMover}
      onPointerLeave={e => {
        presion.current = null;
        (e.currentTarget as HTMLElement).style.cursor = '';
      }}
    >
      {/* Zoom de apertura: al entrar a un proyecto el carrusel avanza hacia el
          espectador mientras la máscara lo cubre. */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: zoom ? 'scale(1.32)' : 'scale(1)',
          transition: 'transform 900ms cubic-bezier(0.32, 0, 0.24, 1)',
        }}
      >
      {/* Escala e inclinación del conjunto: así el anillo recoge la escena
          justo como la dejó el hero y después se endereza y encoge. */}
      <motion.div
        style={{
          scale,
          rotateX: tiltX,
          rotateY: tiltY,
          rotateZ: tiltZ,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Echamos el anillo hacia atrás la medida de su radio, para que la card
            del frente quede a profundidad 0 — justo donde aterriza el hero. */}
        <div
          style={{
            transform: `translateZ(${-radius}px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            style={{ width: cardW, height: cardH, transformStyle: 'preserve-3d' }}
            className="relative"
          >
            {projects.map((project, i) => (
              <RingCard
                key={project.id}
                project={project}
                index={i}
                count={count}
                radius={radius}
                progress={progress}
                neighborOpacity={neighborOpacity}
                onExplore={onExplore}
              />
            ))}
          </div>
        </div>
      </motion.div>
      </div>
    </motion.div>
  );
}

/**
 * Pie del carrusel: invitación + posición dentro de la serie.
 * Deliberadamente sobrio — una línea, sin caja ni adornos.
 */
function CarouselCounter({
  progress,
  opacity,
  total,
}: {
  progress: MotionValue<number>;
  opacity: MotionValue<number>;
  total: number;
}) {
  const [current, setCurrent] = useState(1);

  useMotionValueEvent(progress, 'change', v => {
    const index = Math.round(v * (total - 1)) + 1;
    setCurrent(Math.min(total, Math.max(1, index)));
  });

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-x-0 bottom-[7vh] z-20 flex flex-col items-center gap-2
                 pointer-events-none select-none"
      aria-hidden="true"
    >
      <span className="text-[0.7rem] tracking-[0.35em] uppercase text-[#0B0B0B]/45">
        Explora los proyectos
      </span>

      <span className="text-sm tracking-[0.2em] text-[#0B0B0B] tabular-nums flex items-center">
        {/* El número entra y sale al cambiar de proyecto, para que el cambio
            se note. La altura fija evita que el renglón salte. */}
        <span className="relative inline-block w-[2.9ch] h-[1.4em] overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.span
              key={current}
              initial={{ y: '90%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-90%', opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {pad(current)}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="text-[#0B0B0B]/30 ml-1.5">/ {pad(total)}</span>
      </span>
    </motion.div>
  );
}

/**
 * La cara visible de una card. La usan tanto el anillo como la pantalla que se
 * transforma, para que en el momento del relevo se vea exactamente lo mismo.
 */
function CardFace({ project }: { project: Project }) {
  // Algunos proyectos traen una portada propia en vertical para la card
  const portada = project.cardImage ?? project.image;
  const completa = project.coverFit === 'contain';

  return (
    <>
      {completa ? (
        <>
          {/* Relleno: la misma imagen ampliada y desenfocada, para que no queden
              franjas vacías al mostrar la portada entera. */}
          <ImageWithFallback
            src={portada}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70"
          />
          <ImageWithFallback
            src={portada}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </>
      ) : (
        <ImageWithFallback
          src={portada}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-left">
        <div className="text-[0.65rem] tracking-[0.25em] uppercase text-white/60 mb-1">
          {project.category}
        </div>
        <div className="text-white text-lg font-bold leading-tight">
          {project.title === 'CANDADOS' ? 'GOBIERNO DE MÉXICO' : project.title}
        </div>
      </div>
    </>
  );
}

interface RingCardProps {
  project: Project;
  index: number;
  count: number;
  radius: number;
  progress: MotionValue<number>;
  neighborOpacity: MotionValue<number>;
  onExplore: (project: Project, x: number, y: number) => void;
}

function RingCard({
  project,
  index,
  count,
  radius,
  progress,
  neighborOpacity,
  onExplore,
}: RingCardProps) {
  // Posición de esta card respecto al frente del carrusel, en "puestos".
  // 0 = está al frente; ±1 = la vecina; etc.
  const offset = useTransform(progress, (v: number) => index - v * (count - 1));
  const angle = useTransform(offset, (o: number) => o * ANGLE_STEP);

  // Qué tan de frente está: 1 = mirándonos, 0 = de canto, -1 = de espaldas
  const facing = useTransform(angle, (a: number) => Math.cos((a * Math.PI) / 180));

  // Las de los lados se oscurecen para dar profundidad
  const overlay = useTransform(facing, (f: number) => Math.min(0.8, 0.5 - f * 0.45));
  // Las lejanas se retiran (si no, quedan cards flotando al fondo) y las
  // vecinas sólo aparecen cuando la primera card ya encogió: al principio
  // debe verse una sola card grande, como en el video.
  const cardOpacity = useTransform(
    [offset, neighborOpacity] as [MotionValue<number>, MotionValue<number>],
    ([o, reveal]: number[]) => {
      const distance = Math.max(0, Math.min(1, (2.4 - Math.abs(o)) / 0.9));
      const isFront = Math.abs(o) < 0.5;
      return distance * (isFront ? 1 : reveal);
    }
  );
  // IMPORTANTE: el transform se arma a mano. Si se pasan `rotateY` y `z` como
  // props de motion, Framer los compone en su propio orden (translate antes
  // que rotate) y las cards, en vez de repartirse por el círculo, giran todas
  // sobre el mismo punto.
  const transform = useMotionTemplate`rotateY(${angle}deg) translateZ(${radius}px)`;

  return (
    /* Nada aquí dentro intercepta el puntero: quién recibe el clic lo decide el
       contenedor del anillo midiendo las cajas. Así las cards no se roban los
       clics entre ellas, que era el origen de las zonas muertas.

       El botón sigue siendo <button> por accesibilidad: es enfocable con Tab y
       se activa con Enter, camino que sí pasa por su propio onClick. */
    <motion.div
      style={{ transform, transformStyle: 'preserve-3d' }}
      className="absolute inset-0 pointer-events-none"
    >
      <motion.button
        data-proyecto={index}
        // Sólo teclado (detail 0). El ratón lo resuelve el anillo al soltar.
        onClick={e => {
          if (e.detail !== 0) return;
          const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
          onExplore(project, r.x + r.width / 2, r.y + r.height / 2);
        }}
        style={{ opacity: cardOpacity }}
        className="absolute inset-0 rounded-[28px] overflow-hidden cursor-pointer group
                   pointer-events-none bg-[#0B0B0B] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        aria-label={`Ver proyecto ${project.title}`}
      >
        <CardFace project={project} />

        {/* Oscurece las cards que no están de frente, para dar profundidad */}
        <motion.div
          style={{ opacity: overlay }}
          className="absolute inset-0 bg-[#0B0B0B] pointer-events-none"
        />
      </motion.button>
    </motion.div>
  );
}
