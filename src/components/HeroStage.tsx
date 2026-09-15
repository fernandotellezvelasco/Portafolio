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
    viewportW: 0,
    viewportH: 0,
  });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const cardW = vw < 640 ? 210 : vw < 1024 ? 270 : 330;
      const cardH = cardW * CARD_RATIO;
      // Radio del cilindro: cuanto menor, más juntas quedan las cards
      const radius = cardW * 1.05;

      setM({
        cardW,
        cardH,
        radius,
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
  const { cardW, cardH, radius, viewportW, viewportH } = useRingMetrics();

  // Tamaño con el que la primera card entra en escena (casi todo el alto)
  const bigScale = viewportH ? (viewportH * 0.85) / cardH : 1.5;
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

  const heroW = useTransform(p, [0, h(0.11), h(0.3), HANDOFF], [vw, vw, vw * 1.04, bigCardH]);
  const heroH = useTransform(p, [0, h(0.11), h(0.3), HANDOFF], [vh, vh, vh * 1.04, bigCardW]);

  // El giro completo de horizontal a vertical
  const heroRotateZ = useTransform(p, [0, h(0.11), HANDOFF], [0, 0, ROTACION]);

  // Algo de profundidad durante el giro, que se disuelve al aterrizar
  const heroRotateY = useTransform(p, [0, h(0.11), h(0.56), HANDOFF], [0, 0, TILT.y, 0]);
  const heroRotateX = useTransform(p, [0, h(0.11), h(0.56), HANDOFF], [0, 0, TILT.x, 0]);
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
  const projectW = useTransform(p, [0, h(0.11), h(0.3), HANDOFF], [vh, vh, vh * 1.04, bigCardW]);
  const projectH = useTransform(p, [0, h(0.11), h(0.3), HANDOFF], [vw, vw, vw * 1.04, bigCardH]);

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

  /* El navegador solo dispara `click` si la presión y la soltada ocurren sobre
     el MISMO elemento. Las cards se están moviendo con la inercia del scroll,
     así que si la card se desplaza entre una y otra, el clic nunca llega y
     parece que hubiera zonas muertas. Por eso registramos la card al presionar
     y resolvemos al soltar, aquí en el contenedor, que no se mueve. */
  const presion = useRef<{ project: Project; x: number; y: number; t: number } | null>(null);

  const alSoltar = (e: React.PointerEvent) => {
    const p = presion.current;
    presion.current = null;
    if (!p) return;
    const movimiento = Math.hypot(e.clientX - p.x, e.clientY - p.y);
    const transcurrido = performance.now() - p.t;
    // Si arrastró mucho o tardó demasiado, no era un clic
    if (movimiento < 14 && transcurrido < 800) onExplore(p.project, e.clientX, e.clientY);
  };

  return (
    <motion.div
      style={{ opacity, transformStyle: 'preserve-3d' }}
      id="projects-carousel"
      className="absolute inset-0 z-10 flex items-center justify-center"
      onPointerUp={alSoltar}
      onPointerLeave={() => {
        presion.current = null;
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
                onPress={(x, y) => {
                  presion.current = { project, x, y, t: performance.now() };
                }}
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
  /** Avisa al anillo qué card se presionó y dónde */
  onPress: (x: number, y: number) => void;
}

function RingCard({
  project,
  index,
  count,
  radius,
  progress,
  neighborOpacity,
  onExplore,
  onPress,
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
  /* Clicable la card más cercana al centro (|offset| ≤ 0.5: con un umbral menor
     quedaba una zona muerta justo entre dos proyectos).

     Va en estado de React y NO como valor animado: Framer no re-aplica
     `pointer-events` cuando cambia un MotionValue, así que las cards se
     quedaban con el estado que tenían al montar y unas tapaban a otras. */
  const [esFrente, setEsFrente] = useState(index === 0);
  useMotionValueEvent(offset, 'change', (o: number) => {
    const frente = Math.abs(o) <= 0.5;
    setEsFrente(prev => (prev === frente ? prev : frente));
  });

  // IMPORTANTE: el transform se arma a mano. Si se pasan `rotateY` y `z` como
  // props de motion, Framer los compone en su propio orden (translate antes
  // que rotate) y las cards, en vez de repartirse por el círculo, giran todas
  // sobre el mismo punto.
  const transform = useMotionTemplate`rotateY(${angle}deg) translateZ(${radius}px)`;

  return (
    /* pointer-events-none en el contenedor 3D: si no, el de una card vecina
       —que ocupa toda la caja de la card aunque no se vea— puede quedar encima
       de la del frente y tragarse sus clics. El botón de adentro vuelve a
       activarlos cuando le toca estar al frente. */
    <motion.div
      style={{ transform, transformStyle: 'preserve-3d' }}
      className="absolute inset-0 pointer-events-none"
    >
      <motion.button
        onPointerDown={e => onPress(e.clientX, e.clientY)}
        // El ratón lo resuelve el anillo al soltar; este onClick queda para el
        // teclado (Enter/Espacio), donde detail es 0.
        onClick={e => {
          if (e.detail !== 0) return;
          // Con teclado no hay puntero: la transición nace del centro de la card
          const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
          onExplore(project, r.x + r.width / 2, r.y + r.height / 2);
        }}
        style={{
          opacity: cardOpacity,
          pointerEvents: esFrente ? 'auto' : 'none',
        }}
        className="absolute inset-0 rounded-[28px] overflow-hidden cursor-pointer group
                   bg-[#0B0B0B] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
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
