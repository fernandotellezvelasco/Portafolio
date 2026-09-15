import { useRef, useEffect, useState } from 'react';
import { motion, MotionValue } from 'motion/react';

export function HeroParticles({
  onVisible,
  embedded = false,
  contentOpacity,
  sphereScale,
  interactive = true,
}: {
  onVisible?: (index: number) => void;
  /** Cuando el hero vive dentro del escenario 3D (v2): sin sticky/snap propio y sin fade interno por scroll */
  embedded?: boolean;
  /** El escenario puede retirar el texto antes de que la card sea pequeña */
  contentOpacity?: MotionValue<number>;
  /**
   * Factor de contracción de la esfera (1 = tamaño normal). El escenario lo
   * baja con el scroll para que la esfera se repliegue sobre sí misma en vez
   * de simplemente desvanecerse.
   */
  sphereScale?: MotionValue<number>;
  /**
   * Una vez que el hero entregó la escena al carrusel hay que apagar el botón:
   * su `pointer-events-auto` sobrescribe al del contenedor y, aunque el hero ya
   * sea invisible, seguiría robando los clics de las cards de proyecto.
   */
  interactive?: boolean;
}) {
  const scrollRef = useRef(0);
  /* El bucle del canvas es imperativo, así que leemos la contracción desde una
     ref que mantenemos sincronizada con el MotionValue del escenario. */
  const escalaEsferaRef = useRef(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!sphereScale) return;
    escalaEsferaRef.current = sphereScale.get();
    return sphereScale.on('change', v => {
      escalaEsferaRef.current = v;
    });
  }, [sphereScale]);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    // Report visibility immediately as this is the hero section
    onVisible?.(-1);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // En modo embedded el escenario 3D controla la animación: el hero no se desvanece solo
      if (embedded) {
        scrollRef.current = 0;
        setOpacity(1);
        return;
      }
      scrollRef.current = currentScroll;

      // Calculate opacity: 1 at 0px, 0 at 350px
      const newOpacity = Math.max(0, 1 - currentScroll / 350);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [onVisible, embedded]);

  // Canvas Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    /* El búfer del canvas se dimensiona SOLO con la ventana, nunca con la card.
       Asignar canvas.width/height borra el canvas, y la card cambia de tamaño
       en cada fotograma del scroll: si lo atábamos a ella, el canvas se
       limpiaba justo después de dibujarse y la esfera desaparecía. Como el
       elemento es w-full/h-full, el CSS escala el mismo búfer mientras la card
       encoge, que además es más barato. */
    const handleResize = () => {
      const w = Math.max(1, window.innerWidth);
      const h = Math.max(1, window.innerHeight);
      if (w === canvas.width && h === canvas.height) return;
      width = w;
      height = h;
      canvas.width = w;
      canvas.height = h;
    };

    // Initial size
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle System
    const particleCount = isMobile ? 7000 : 16000;

    /* Cada partícula guarda su posición en la esfera unitaria y, precalculados,
       el seno y coseno de tres patrones espaciales. Con ellos la onda viajera
       se resuelve por fotograma sin una sola llamada trigonométrica por
       partícula (identidad sin(a+b) = sin a·cos b + cos a·sin b), que es lo que
       permite subir a 16 000 puntos sin perder fluidez. */
    const particles: Float32Array = new Float32Array(particleCount * 9);

    /* Distribución de Fibonacci en vez de aleatoria: reparte los puntos de
       forma uniforme y hace visible la retícula de la referencia, en lugar del
       ruido irregular que daba el azar. */
    const anguloAureo = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < particleCount; i++) {
      const y = 1 - (i / (particleCount - 1)) * 2; // de 1 a -1
      const radioEnY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = anguloAureo * i;
      const phi = Math.acos(Math.max(-1, Math.min(1, y)));

      const e1 = 1.7 * theta + 2.3 * phi;
      const e2 = 3.1 * phi + 1.3 * theta;
      const e3 = 2.6 * theta - 1.9 * phi;

      const o = i * 9;
      particles[o] = Math.cos(theta) * radioEnY; // x
      particles[o + 1] = y;
      particles[o + 2] = Math.sin(theta) * radioEnY; // z
      particles[o + 3] = Math.sin(e1);
      particles[o + 4] = Math.cos(e1);
      particles[o + 5] = Math.sin(e2);
      particles[o + 6] = Math.cos(e2);
      particles[o + 7] = Math.sin(e3);
      particles[o + 8] = Math.cos(e3);
    }

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left - width / 2;
      mouseY = e.clientY - rect.top - height / 2;
      
      // Check if hovering near center (approximate sphere)
      const dist = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
      isHovering = dist < (Math.min(width, height) * 0.35);
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    let rotationX = 0;
    let rotationY = 0;
    let tiempo = 0;
    let animationFrameId: number;

    /** Cuánto se deforma la esfera. 0 = esfera perfecta */
    const ONDA_AMPLITUD = 0.21;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tiempo += 0.006;
      
      // Mouse influence on rotation
      // Continuous rotation with mouse influence on speed
      const baseSpeed = 0.0002;
      const mouseSpeedX = mouseY * 0.00001;
      const mouseSpeedY = mouseX * 0.00001;
      
      rotationX += baseSpeed + mouseSpeedX;
      rotationY += baseSpeed + mouseSpeedY;

      // Scroll effect (shrink)
      const scroll = scrollRef.current || 0;
      const shrinkFactor = Math.max(0, 1 - (scroll / 800));
      
      // Sphere radius based on screen size
      /* En móvil la esfera se mide contra el ancho, que es el lado corto: con
         el factor de escritorio quedaba diminuta dentro de una pantalla alta,
         así que ahí sí la agrandamos. En escritorio se queda como estaba. */
      const baseRadius = Math.min(width, height) * (isMobile ? 0.46 : 0.4);
      // La contracción del escenario se suma al encogido propio del hero v1
      const currentRadius = baseRadius * shrinkFactor * escalaEsferaRef.current;
      
      if (currentRadius <= 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      
      // Pre-calculate rotation matrices
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      // Mouse repulsion radius
      const interactionRadius = 150;

      // Blanco puro: la opacidad de cada partícula se calcula por profundidad
      ctx.fillStyle = '#FFFFFF';

      // Fase de las tres ondas: se calcula una vez por fotograma, no por partícula
      const st1 = Math.sin(tiempo * 0.9), ct1 = Math.cos(tiempo * 0.9);
      const st2 = Math.sin(tiempo * 0.62 + 1.1), ct2 = Math.cos(tiempo * 0.62 + 1.1);
      const st3 = Math.sin(tiempo * 0.41 + 2.3), ct3 = Math.cos(tiempo * 0.41 + 2.3);

      for (let i = 0; i < particleCount; i++) {
        const o = i * 9;

        /* 0. Ondas viajeras sobre la superficie: la esfera deja de ser perfecta
           y se vuelve un cuerpo orgánico con crestas y valles en movimiento. */
        const onda =
          1 +
          ONDA_AMPLITUD *
            (0.5 * (particles[o + 3] * ct1 + particles[o + 4] * st1) +
              0.32 * (particles[o + 5] * ct2 + particles[o + 6] * st2) +
              0.24 * (particles[o + 7] * ct3 + particles[o + 8] * st3));

        const ox = particles[o] * onda;
        const oy = particles[o + 1] * onda;
        const oz = particles[o + 2] * onda;

        // 1. Rotate original position
        // Rotate around Y
        let x1 = ox * cosY - oz * sinY;
        let z1 = ox * sinY + oz * cosY;
        // Rotate around X
        let y1 = oy * cosX - z1 * sinX;
        let z2 = oy * sinX + z1 * cosX;

        // 2. Scale to radius
        let tx = x1 * currentRadius;
        let ty = y1 * currentRadius;
        let tz = z2 * currentRadius;

        // 3. Mouse repulsion (simplified 2D push)
        if (isHovering) {
          const dx = tx - mouseX;
          const dy = ty - mouseY;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < interactionRadius * interactionRadius) {
            const dist = Math.sqrt(distSq);
            const force = (interactionRadius - dist) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            
            tx += Math.cos(angle) * force * 40;
            ty += Math.sin(angle) * force * 40;
          }
        }
        
        // 4. Perspective projection
        const fov = 1000;
        const scale = fov / (fov - tz);
        
        const px = centerX + tx * scale;
        const py = centerY + ty * scale;
        
        // 5. Draw
        if (scale > 0) {
          const size = 1.05 * scale;
          /* Iluminación de borde: brillan las partículas que quedan de canto
             (su normal es perpendicular a la cámara) y se apagan las que miran
             de frente. Eso es lo que forma el anillo luminoso del contorno y
             deja hueco el centro. La cara trasera además se atenúa, para que
             se lea el volumen. */
          const borde = 1 - Math.abs(z2);
          const alFrente = z2 > 0;
          ctx.globalAlpha =
            (0.1 + borde * borde * 0.9) * (alFrente ? 1 : 0.45) * (isHovering ? 1 : 0.9);
          // Simple rect is faster than arc for many particles
          ctx.fillRect(px, py, size, size);
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]); // Re-run if isMobile changes to update particle count

  const handleStart = () => {
    const smoothScrollTo = (targetY: number, duration: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      /* El CSS global tiene scroll-behavior: smooth. Sin desactivarlo, cada
         window.scrollTo de esta animación dispara un scroll nativo propio y
         todos se pelean entre sí: el botón parecía tardar más de un segundo en
         responder. Lo restauramos al terminar. */
      const root = document.documentElement;
      const comportamientoPrevio = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';

      // Ease-out: arranca de inmediato y frena al final. Una curva con
      // ease-in se siente como si el botón tardara en responder.
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const step = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        window.scrollTo(0, startY + distance * easeOutCubic(progress));
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          root.style.scrollBehavior = comportamientoPrevio;
        }
      };

      // Primer paso ya, sin esperar al siguiente frame
      step(performance.now());
    };

    // v2: el escenario del hero es un track largo; el carrusel queda formado
    // aproximadamente a la mitad de su recorrido.
    const stage = document.getElementById('hero-stage');
    if (stage) {
      const targetY = stage.offsetTop + stage.offsetHeight * 0.45;
      // Con ease-out la mayor parte del recorrido se cubre al principio, así
      // que no hace falta tanta duración: se siente inmediato y aun así suave.
      const distancia = Math.abs(targetY - window.scrollY);
      const duracion = Math.min(1400, Math.max(650, distancia / 3.4));
      smoothScrollTo(targetY, duracion);
      return;
    }

    // v1: la primera sección de proyecto
    const nextSection = document.getElementById('project-0');
    if (nextSection) {
      smoothScrollTo(nextSection.getBoundingClientRect().top + window.scrollY, 600);
    } else {
      smoothScrollTo(window.innerHeight, 600);
    }
  };

  return (
    <div
      className={
        embedded
          ? 'h-full w-full relative z-0 bg-[#0B0B0B] flex flex-col items-center justify-center overflow-hidden'
          : 'h-[100dvh] w-full sticky top-0 z-0 bg-[#0B0B0B] snap-start flex flex-col items-center justify-center overflow-hidden'
      }
    >
      <div className="w-full h-full relative flex flex-col items-center justify-center">
      
      {/* 2D Canvas Scene */}
      <div className="absolute inset-0 z-0 touch-pan-y">
        <canvas 
            ref={canvasRef} 
            className="w-full h-full block"
        />
      </div>

      {/* Content Overlay */}
      <motion.div
        style={contentOpacity ? { opacity: contentOpacity } : { opacity }}
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center mt-[-2vh] flex flex-col items-center pointer-events-none transition-opacity duration-300`}
      >
        {/* Badge/Pill */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-[13px] font-medium text-white/80 tracking-wide">Diseñador digital enfocado en UX/UI</span>
        </div>

        {/* Main Title Group */}
        <div className="mb-14">
          {/* Misma tipografía que la frase de fondo del carrusel (Montserrat),
              en blanco. El saludo va en regular con las letras abiertas, para
              ese aire minimal/tecnológico; la frase principal, en light. */}
          <h2
            className={`text-xl md:text-4xl mb-5 w-fit mx-auto text-white transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ fontWeight: 400, letterSpacing: '-0.02em' }}
          >
            Hola, soy Fernando.
          </h2>

          <h1
            className={`text-xl md:text-4xl leading-[1.25] max-w-4xl mx-auto text-white transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ fontWeight: 300, letterSpacing: '0.01em' }}
          >
            Ayudo a construir productos resolviendo <br />
            problemas reales de los usuarios
          </h1>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleStart}
          disabled={!interactive}
          tabIndex={interactive ? 0 : -1}
          className={`bg-transparent border border-white text-white px-8 py-3 rounded-full text-base font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 delay-500 ${interactive ? 'pointer-events-auto' : 'pointer-events-none'} ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          Descubrir
        </button>
      </motion.div>

      {/* Background Ambience */}
      <div 
        style={{ opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[800px] md:h-[800px] pointer-events-none transition-opacity duration-300"
      >
        <div className="bg-[rgba(43,127,255,0.1)] blur-[60px] md:blur-[120px] rounded-full w-full h-full" data-name="Container" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="w-[20px] h-[32px] border border-white/20 rounded-full flex justify-center p-1 bg-black/20 backdrop-blur-sm">
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
      </div>
    </div>
  );
}