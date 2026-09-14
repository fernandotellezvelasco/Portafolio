import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { HeroParticles } from './HeroParticles';
import { Project } from './ProjectCard';
import CurvedLoop from './CurvedLoop';
import './CurvedLoop.css';
import './HeroStage.css';
import { ImageWithFallback } from './figma/ImageWithFallback';

/**
 * BLOQUE 1 (v2)
 *
 * Animación dirigida por scroll, siguiendo los frames 01→04 de Figma:
 *   01  hero a pantalla completa (esfera de partículas intacta)
 *   02  el fondo pasa a blanco, la card gira en 3D y encoge; detrás aparece
 *       el texto "Design that sells · Speed without compromise" muy borroso
 *   03  más rotación, el texto se va enfocando
 *   04  la card queda pequeña y el texto totalmente nítido → entra el carrusel
 *
 * Todo se resuelve con transforms CSS sobre un contenedor con perspectiva:
 * no añade dependencias nuevas ni un tercer contexto WebGL.
 */

interface HeroStageProps {
  projects: Project[];
  onExplore: (project: Project) => void;
  onVisible?: (index: number) => void;
}

const MARQUEE_TEXT = 'Design that sells ✦ Speed without compromise ✦ ';

export function HeroStage({ projects, onExplore, onVisible }: HeroStageProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  // 0 → 1 a lo largo de todo el track (el track mide 320vh, así que la
  // animación se siente pausada y controlable con el trackpad)
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

  /* ---------- La card del hero ---------- */
  /* El hero ocupa el primer ~45% del track; el resto es para el carrusel. */

  // Escala: full-bleed → card pequeña
  const scale = useTransform(p, [0, 0.06, 0.3, 0.5], [1, 1, 0.78, 0.5]);
  // Rotaciones: quieta → diagonal (como los frames 02/03)
  const rotateZ = useTransform(p, [0, 0.06, 0.3, 0.5], [0, 0, -18, -28]);
  const rotateY = useTransform(p, [0, 0.06, 0.3, 0.5], [0, 0, 14, 22]);
  const rotateX = useTransform(p, [0, 0.06, 0.3, 0.5], [0, 0, 7, 11]);
  // Se va alejando de la cámara
  const z = useTransform(p, [0, 0.5], [0, -260]);
  // Esquinas redondeadas como en el frame 01
  const radius = useTransform(p, [0, 0.1, 0.3], [0, 28, 42]);
  // Sale de escena ANTES de que entre el carrusel (si se cruzan, se ve sucio)
  const cardOpacity = useTransform(p, [0, 0.34, 0.44], [1, 1, 0]);

  /* ---------- El fondo: oscuro → blanco → oscuro ---------- */
  // Transición corta para no quedarnos en un gris intermedio, y regreso a
  // oscuro al final para enlazar con las secciones siguientes del sitio.

  const background = useTransform(
    p,
    [0, 0.07, 0.24, 1],
    ['#0B0B0B', '#0B0B0B', '#FFFFFF', '#FFFFFF']
  );

  /* ---------- El texto marquee de atrás ---------- */

  // Desenfoque: entra muy borroso y se va enfocando (frames 02 → 04)
  const textBlur = useTransform(p, [0.1, 0.3, 0.46], [28, 11, 0]);
  const textFilter = useTransform(textBlur, (b: number) => `blur(${b}px)`);
  const textOpacity = useTransform(p, [0.08, 0.3, 0.44], [0, 0.6, 1]);
  const textScale = useTransform(p, [0.1, 0.5], [1.14, 1]);

  /* ---------- El carrusel 3D de proyectos ---------- */

  // Entra cuando la card del hero ya terminó de salir y recorre hasta el final
  const carouselOpacity = useTransform(p, [0.44, 0.54], [0, 1]);
  const carouselProgress = useTransform(p, [0.54, 0.96], [0, 1]);

  return (
    <section ref={trackRef} id="hero-stage" className="relative h-[400vh]">
      <motion.div
        style={{ background }}
        className="sticky top-0 h-[100dvh] w-full overflow-hidden"
      >
        {/* Escenario con perspectiva: todo lo 3D vive aquí dentro */}
        <div
          className="absolute inset-0"
          style={{ perspective: '1600px', perspectiveOrigin: '50% 45%' }}
        >
          {/* Texto de fondo — detrás de todo */}
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

          {/* La card del hero */}
          <motion.div
            style={{
              scale,
              rotateX,
              rotateY,
              rotateZ,
              z,
              borderRadius: radius,
              opacity: cardOpacity,
              transformStyle: 'preserve-3d',
            }}
            className="absolute inset-0 z-20 overflow-hidden will-change-transform shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
          >
            <HeroParticles embedded onVisible={onVisible} />
          </motion.div>

          {/* Carrusel de proyectos */}
          <ProjectCarousel3D
            projects={projects}
            onExplore={onExplore}
            opacity={carouselOpacity}
            progress={carouselProgress}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Carrusel 3D                                                        */
/* ------------------------------------------------------------------ */

interface CarouselProps {
  projects: Project[];
  onExplore: (project: Project) => void;
  opacity: MotionValue<number>;
  progress: MotionValue<number>;
}

/** La separación entre cards se adapta al ancho de pantalla */
function useCarouselGap() {
  const [gap, setGap] = useState(330);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setGap(w < 640 ? 190 : w < 1024 ? 260 : 330);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return gap;
}

function ProjectCarousel3D({ projects, onExplore, opacity, progress }: CarouselProps) {
  const gap = useCarouselGap();

  return (
    <motion.div
      style={{ opacity }}
      id="projects-carousel"
      className="absolute inset-0 z-10 flex items-center justify-center"
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {projects.map((project, i) => (
          <CarouselCard
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
            progress={progress}
            gap={gap}
            onExplore={onExplore}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface CarouselCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  gap: number;
  onExplore: (project: Project) => void;
}

function CarouselCard({ project, index, total, progress, gap, onExplore }: CarouselCardProps) {
  // Posición de esta card respecto al centro del escenario.
  // progress 0 → la card 0 está centrada; progress 1 → la última lo está.
  const offset = useTransform(progress, (v: number) => index - v * (total - 1));

  const x = useTransform(offset, (o: number) => o * gap);
  // Las cards laterales giran hacia dentro: es lo que da la perspectiva del video
  const rotateY = useTransform(offset, (o: number) => Math.max(-38, Math.min(38, -o * 20)));
  const translateZ = useTransform(offset, (o: number) => -Math.abs(o) * 150);
  // La del centro manda: crece un poco y las vecinas se quedan algo atrás
  const cardScale = useTransform(offset, (o: number) =>
    Math.max(0.82, 1.06 - Math.abs(o) * 0.12)
  );
  // Caída suave y solo se apagan del todo las que ya están muy lejos
  const cardOpacity = useTransform(offset, (o: number) => {
    const d = Math.abs(o);
    if (d <= 1) return 1;
    return Math.max(0, 1 - (d - 1) * 0.55);
  });
  const zIndex = useTransform(offset, (o: number) => 100 - Math.round(Math.abs(o) * 10));

  return (
    <motion.button
      onClick={() => onExplore(project)}
      style={{
        x,
        rotateY,
        z: translateZ,
        scale: cardScale,
        opacity: cardOpacity,
        zIndex,
        transformStyle: 'preserve-3d',
      }}
      className="absolute w-[clamp(230px,23vw,330px)] aspect-[9/14] rounded-[28px] overflow-hidden
                 will-change-transform cursor-pointer group
                 shadow-[0_30px_80px_rgba(0,0,0,0.35)] bg-[#0B0B0B]
                 transition-shadow hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
      aria-label={`Ver proyecto ${project.title}`}
    >
      <ImageWithFallback
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-left">
        <div className="text-[0.65rem] tracking-[0.25em] uppercase text-white/60 mb-1">
          {project.category}
        </div>
        <div className="text-white text-lg font-bold leading-tight">
          {project.title === 'CANDADOS' ? 'GOBIERNO DE MÉXICO' : project.title}
        </div>
      </div>
    </motion.button>
  );
}
