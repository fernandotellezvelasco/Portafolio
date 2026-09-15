import { useEffect, useRef, useState } from 'react';
import { HERRAMIENTAS } from './datos';
import { ICONOS, Glifo as TipoGlifo } from './iconos';

/**
 * HERRAMIENTAS — las que uso, como fichas físicas dentro de una caja.
 *
 * Caen, chocan entre sí, se apilan y se pueden arrastrar. Es el bloque con
 * más gracia del sitio de referencia y la razón es simple: una lista de
 * logos se mira, una caja de fichas se toca.
 *
 * La simulación es propia y deliberadamente simple —círculos, gravedad y
 * colisiones elásticas— para no cargar una librería de física entera por un
 * bloque decorativo. Las fichas son elementos del DOM, no canvas, así que
 * los glifos se dibujan como SVG nítido a cualquier densidad de pantalla.
 */

interface Ficha {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/* Gravedad baja a propósito: las fichas caen despacio y, al chocar, se
   quedan flotando un momento antes de asentarse. Con una gravedad realista
   se desplomaban de golpe y el bloque perdía toda la gracia. */
const GRAVEDAD = 0.14;
const REBOTE = 0.72; // conservan bastante energía al rebotar
const ROCE = 0.997; // el aire apenas las frena
const ROCE_SUELO = 0.97;
/** Cuánto se empujan al chocar entre ellas (1 = choque elástico) */
const ELASTICIDAD = 0.85;

export function Herramientas() {
  const cajaRef = useRef<HTMLDivElement>(null);
  const nodosRef = useRef<(HTMLDivElement | null)[]>([]);
  const fichasRef = useRef<Ficha[]>([]);
  const arrastreRef = useRef<{ i: number; dx: number; dy: number; px: number; py: number } | null>(
    null
  );
  const rafRef = useRef(0);
  const [reinicios, setReinicios] = useState(0);

  useEffect(() => {
    const caja = cajaRef.current;
    if (!caja) return;

    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let ancho = caja.clientWidth;
    let alto = caja.clientHeight;

    /* Reparto inicial: en columnas y por encima del borde superior, para que
       entren cayendo escalonadas en vez de aparecer amontonadas. */
    const medirRadio = () => (ancho < 420 ? 28 : ancho < 700 ? 34 : 38);
    const colocar = () => {
      const r = medirRadio();
      const porFila = Math.max(3, Math.floor((ancho - 40) / (r * 2.3)));
      fichasRef.current = HERRAMIENTAS.map((_, i) => ({
        r,
        x: 24 + r + (i % porFila) * ((ancho - 48 - r * 2) / Math.max(1, porFila - 1)),
        y: -60 - Math.floor(i / porFila) * (r * 2.9) - Math.random() * 70,
        vx: (Math.random() - 0.5) * 1.6,
        vy: 0,
      }));
    };
    colocar();

    /* Si el usuario pidió menos movimiento, las dejamos ya asentadas y sin
       bucle: se ve una cuadrícula ordenada y nadie se marea. */
    if (reducir) {
      const r = medirRadio();
      const porFila = Math.max(3, Math.floor((ancho - 40) / (r * 2.3)));
      fichasRef.current.forEach((f, i) => {
        f.x = 24 + r + (i % porFila) * ((ancho - 48 - r * 2) / Math.max(1, porFila - 1));
        f.y = alto - r - 16 - Math.floor(i / porFila) * (r * 2.1);
        f.vx = f.vy = 0;
      });
      pintar();
      return;
    }

    function pintar() {
      const fichas = fichasRef.current;
      for (let i = 0; i < fichas.length; i++) {
        const n = nodosRef.current[i];
        if (!n) continue;
        const f = fichas[i];
        n.style.transform = `translate3d(${f.x - f.r}px, ${f.y - f.r}px, 0)`;
        n.style.width = n.style.height = `${f.r * 2}px`;
      }
    }

    const paso = () => {
      const fichas = fichasRef.current;
      const arr = arrastreRef.current;

      for (let i = 0; i < fichas.length; i++) {
        const f = fichas[i];

        if (arr && arr.i === i) {
          // La ficha arrastrada obedece al dedo; su velocidad la hereda al soltar
          f.vx = (arr.px - arr.dx - f.x) * 0.35;
          f.vy = (arr.py - arr.dy - f.y) * 0.35;
          f.x = arr.px - arr.dx;
          f.y = arr.py - arr.dy;
          continue;
        }

        f.vy += GRAVEDAD;
        f.vx *= ROCE;
        f.vy *= ROCE;
        f.x += f.vx;
        f.y += f.vy;

        // Paredes
        if (f.x - f.r < 0) {
          f.x = f.r;
          f.vx = Math.abs(f.vx) * REBOTE;
        } else if (f.x + f.r > ancho) {
          f.x = ancho - f.r;
          f.vx = -Math.abs(f.vx) * REBOTE;
        }
        // Suelo
        if (f.y + f.r > alto) {
          f.y = alto - f.r;
          f.vy = -Math.abs(f.vy) * REBOTE;
          f.vx *= ROCE_SUELO;
          if (Math.abs(f.vy) < 0.25) f.vy = 0;
        }
        // Techo abierto: pueden entrar desde arriba, pero no escaparse por él
        if (f.y - f.r < -alto) f.y = -alto + f.r;
      }

      // Choques entre fichas: se separan y se reparten el impulso
      for (let i = 0; i < fichas.length; i++) {
        for (let j = i + 1; j < fichas.length; j++) {
          const a = fichas[i];
          const b = fichas[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.001;
          const solape = a.r + b.r - dist;
          if (solape <= 0) continue;

          const nx = dx / dist;
          const ny = dy / dist;
          const arrastrandoA = arr?.i === i;
          const arrastrandoB = arr?.i === j;

          // Separación posicional
          if (!arrastrandoA && !arrastrandoB) {
            a.x -= nx * solape * 0.5;
            a.y -= ny * solape * 0.5;
            b.x += nx * solape * 0.5;
            b.y += ny * solape * 0.5;
          } else if (arrastrandoA) {
            b.x += nx * solape;
            b.y += ny * solape;
          } else {
            a.x -= nx * solape;
            a.y -= ny * solape;
          }

          // Impulso a lo largo de la normal
          const vRel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
          if (vRel > 0) continue;
          const imp = -(1 + ELASTICIDAD) * vRel * 0.5;
          if (!arrastrandoA) {
            a.vx -= imp * nx;
            a.vy -= imp * ny;
          }
          if (!arrastrandoB) {
            b.vx += imp * nx;
            b.vy += imp * ny;
          }
        }
      }

      pintar();
      rafRef.current = requestAnimationFrame(paso);
    };

    rafRef.current = requestAnimationFrame(paso);

    const alRedimensionar = () => {
      const a = caja.clientWidth;
      const h = caja.clientHeight;
      if (a === ancho && h === alto) return;
      ancho = a;
      alto = h;
      colocar();
    };
    window.addEventListener('resize', alRedimensionar);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', alRedimensionar);
    };
    // `reinicios` fuerza a recolocar las fichas al pulsar el botón
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reinicios]);

  /* ---- arrastre ---- */

  const alPresionar = (e: React.PointerEvent, i: number) => {
    const caja = cajaRef.current;
    if (!caja) return;
    const r = caja.getBoundingClientRect();
    const f = fichasRef.current[i];
    if (!f) return;
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    arrastreRef.current = { i, dx: px - f.x, dy: py - f.y, px, py };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const alMover = (e: React.PointerEvent) => {
    const arr = arrastreRef.current;
    const caja = cajaRef.current;
    if (!arr || !caja) return;
    const r = caja.getBoundingClientRect();
    arr.px = e.clientX - r.left;
    arr.py = e.clientY - r.top;
  };

  const alSoltar = (e: React.PointerEvent) => {
    arrastreRef.current = null;
    const el = e.currentTarget as HTMLElement;
    if (el.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };

  return (
    <section>
      <div className="mb-4 md:mb-5 flex items-center justify-between">
        <h3 className="text-white text-[1.05rem] md:text-[1.2rem] font-medium tracking-tight">
          Herramientas
        </h3>
        <button
          type="button"
          onClick={() => setReinicios(n => n + 1)}
          className="p-2 rounded-lg border border-white/10 text-white/40
                     hover:border-white/25 hover:text-white/80 transition-colors"
          aria-label="Reiniciar las fichas"
          title="Reiniciar"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
            <path
              d="M3 12a9 9 0 1 0 2.64-6.36M3 4v5h5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        ref={cajaRef}
        onPointerMove={alMover}
        onPointerUp={alSoltar}
        onPointerLeave={alSoltar}
        className="relative h-[260px] md:h-[300px] rounded-[26px] border border-white/[0.08]
                   bg-white/[0.02] overflow-hidden select-none touch-none"
      >
        {HERRAMIENTAS.map((h, i) => (
          <div
            key={h.nombre}
            ref={el => {
              nodosRef.current[i] = el;
            }}
            onPointerDown={e => alPresionar(e, i)}
            title={h.nombre}
            className="absolute top-0 left-0 rounded-full border border-white/15
                       bg-[#131313] flex items-center justify-center
                       cursor-grab active:cursor-grabbing will-change-transform
                       shadow-[0_6px_18px_rgba(0,0,0,0.45)]
                       hover:border-white/40 transition-[border-color] duration-200"
          >
            {h.icono && ICONOS[h.icono] ? (
              <Glifo icono={ICONOS[h.icono]} className="w-[46%] h-[46%] fill-white/85" />
            ) : (
              <span className="text-white/80 text-[0.78rem] font-medium tracking-tight">
                {h.monograma}
              </span>
            )}
            <span className="sr-only">{h.nombre}</span>
          </div>
        ))}
      </div>

      {/* Los nombres, para quien no reconozca un glifo — y para los lectores
          de pantalla, que no pueden jugar con la caja. */}
      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
        {HERRAMIENTAS.map(h => (
          <span key={h.nombre} className="text-white/35 text-[0.72rem] md:text-[0.76rem]">
            {h.nombre}
          </span>
        ))}
      </div>
    </section>
  );
}

/** Dibuja un glifo respetando su propia caja y su regla de relleno */
function Glifo({ icono, className }: { icono: TipoGlifo; className: string }) {
  return (
    <svg viewBox={icono.vb ?? '0 0 24 24'} className={className} aria-hidden="true">
      <path d={icono.d} fillRule={icono.evenodd ? 'evenodd' : undefined} clipRule={icono.evenodd ? 'evenodd' : undefined} />
    </svg>
  );
}
