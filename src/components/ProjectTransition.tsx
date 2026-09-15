import { useEffect, useRef } from 'react';

/**
 * Transición al abrir un proyecto (bloque 1, segundos 3–4 del video de
 * referencia). Tres momentos encadenados:
 *
 *   1. Una estrella negra crece desde el punto donde se hizo clic hasta cubrir
 *      la pantalla. Es la "máscara".
 *   2. Al quedar todo en negro aparece la esfera de partículas del inicio —sin
 *      el texto— y estalla suavemente hacia afuera, dispersándose.
 *   3. El caso de estudio entra desvanecido por detrás de las partículas.
 *
 * Todo se dibuja en un único canvas propio, así que no interfiere con la
 * esfera del hero ni con el carrusel.
 */

interface ProjectTransitionProps {
  /** Punto de la pantalla donde nació la transición (el clic sobre la card) */
  origen: { x: number; y: number };
  /** Se llama cuando la pantalla ya está cubierta: momento de montar el proyecto */
  onCubierto: () => void;
  /** Se llama al terminar del todo, para desmontar la transición */
  onFin: () => void;
}

/** Duraciones, en milisegundos */
const T = {
  estrella: 620, // la estrella crece y cubre
  esfera: 190, // la esfera ya está encendida detrás de la estrella que crece
  esperaProyecto: 900, // cuándo se monta el caso de estudio
  abrirNegro: 1150, // el respaldo negro empieza a irse y asoma el proyecto
  abrirNegroDur: 700,
  total: 2200,
};

/** Estrella de cuatro puntas, en una caja de 100×100 centrada en (50,50) */
const ESTRELLA =
  'M50 0 C54 34 66 46 100 50 C66 54 54 66 50 100 C46 66 34 54 0 50 C34 46 46 34 50 0 Z';

export function ProjectTransition({ origen, onCubierto, onFin }: ProjectTransitionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const estrellaRef = useRef<SVGGElement>(null);
  const negroRef = useRef<HTMLDivElement>(null);
  const cubiertoRef = useRef(false);
  const finRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    canvas.width = ancho;
    canvas.height = alto;

    const diagonal = Math.hypot(ancho, alto);
    // La estrella tiene los costados cóncavos: para tapar las esquinas hay que
    // pasarse bastante del tamaño de la pantalla.
    const escalaFinal = (diagonal * 3.4) / 100;

    /* ---- partículas: misma esfera del hero, cada una con su propio empuje ---- */
    const total = reducirMovimiento ? 2000 : 9000;
    const datos = new Float32Array(total * 5); // x, y, z, empuje, brillo
    const anguloAureo = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < total; i++) {
      const y = 1 - (i / (total - 1)) * 2;
      const radioEnY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = anguloAureo * i;
      const o = i * 5;
      datos[o] = Math.cos(theta) * radioEnY;
      datos[o + 1] = y;
      datos[o + 2] = Math.sin(theta) * radioEnY;
      datos[o + 3] = 0.55 + Math.random() * 1.15; // cuánto sale disparada
      datos[o + 4] = 0.5 + Math.random() * 0.5; // variación de brillo
    }

    const suave = (t: number) => 1 - Math.pow(1 - t, 3);
    const inicio = performance.now();
    let raf = 0;

    const dibuja = (ahora: number) => {
      const ms = ahora - inicio;

      /* 1. La estrella crece */
      const tEstrella = Math.min(1, ms / T.estrella);
      if (estrellaRef.current) {
        const s = suave(tEstrella) * escalaFinal;
        estrellaRef.current.setAttribute(
          'transform',
          `translate(${origen.x} ${origen.y}) scale(${s}) translate(-50 -50)`
        );
      }
      // Un negro de respaldo entra al final del crecimiento: garantiza que no
      // queden esquinas sin cubrir por las concavidades de la estrella. Después
      // se retira, y el proyecto aparece desvanecido detrás de las partículas.
      if (negroRef.current) {
        const entra = Math.max(0, Math.min(1, (ms - T.estrella * 0.62) / (T.estrella * 0.45)));
        const sale = Math.max(0, Math.min(1, (ms - T.abrirNegro) / T.abrirNegroDur));
        negroRef.current.style.opacity = String(entra * (1 - sale));
      }
      // La estrella también se retira con él, si no reaparecería sobre el proyecto.
      if (estrellaRef.current) {
        const sale = Math.max(0, Math.min(1, (ms - T.abrirNegro) / T.abrirNegroDur));
        estrellaRef.current.style.opacity = String(1 - sale);
      }

      if (!cubiertoRef.current && ms >= T.esperaProyecto) {
        cubiertoRef.current = true;
        onCubierto();
      }

      /* 2. La esfera estalla */
      ctx.clearRect(0, 0, ancho, alto);
      const tEsfera = (ms - T.esfera) / (T.total - T.esfera);

      if (tEsfera > 0 && tEsfera < 1) {
        // Smoothstep: la esfera respira antes de abrirse. Con una curva que
        // arranca de golpe se veía un estallido seco, no la expansión tenue
        // del video.
        const e = tEsfera * tEsfera * (3 - 2 * tEsfera);
        // Entra rápido y se apaga recién cuando ya se dispersó
        const aparicion = Math.min(1, tEsfera / 0.1);
        const desvanece = 1 - Math.max(0, (tEsfera - 0.45) / 0.55);

        const radioBase = Math.min(ancho, alto) * 0.22;
        const giro = tEsfera * 0.6;
        const cosY = Math.cos(giro), sinY = Math.sin(giro);
        const cx = ancho / 2, cy = alto / 2;

        ctx.fillStyle = '#FFFFFF';

        for (let i = 0; i < total; i++) {
          const o = i * 5;
          // Cada partícula se aleja según su propio empuje
          const r = radioBase * (1 + e * datos[o + 3] * 1.9);

          const x0 = datos[o], y0 = datos[o + 1], z0 = datos[o + 2];
          const x1 = x0 * cosY - z0 * sinY;
          const z1 = x0 * sinY + z0 * cosY;

          const tx = x1 * r;
          const ty = y0 * r;
          const tz = z1 * r;

          const fov = 1000;
          const escala = fov / (fov - tz);
          if (escala <= 0) continue;

          const px = cx + tx * escala;
          const py = cy + ty * escala;
          if (px < -20 || px > ancho + 20 || py < -20 || py > alto + 20) continue;

          const borde = 1 - Math.abs(z1);
          ctx.globalAlpha =
            (0.12 + borde * borde * 0.88) * datos[o + 4] * aparicion * desvanece;
          const tam = 1.15 * escala;
          ctx.fillRect(px, py, tam, tam);
        }
      }

      if (ms < T.total) {
        raf = requestAnimationFrame(dibuja);
      } else if (!finRef.current) {
        finRef.current = true;
        onFin();
      }
    };

    raf = requestAnimationFrame(dibuja);

    const alRedimensionar = () => {
      ancho = window.innerWidth;
      alto = window.innerHeight;
      canvas.width = ancho;
      canvas.height = alto;
    };
    window.addEventListener('resize', alRedimensionar);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', alRedimensionar);
    };
    // Se monta una sola vez por transición
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 z-[150] pointer-events-none" aria-hidden="true">
      {/* Máscara: la estrella que crece */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <g ref={estrellaRef} transform={`translate(${origen.x} ${origen.y}) scale(0) translate(-50 -50)`}>
          <path d={ESTRELLA} fill="#0B0B0B" />
        </g>
      </svg>

      {/* Respaldo para las esquinas que la estrella no alcanza */}
      <div ref={negroRef} className="absolute inset-0 bg-[#0B0B0B]" style={{ opacity: 0 }} />

      {/* La esfera estallando */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
