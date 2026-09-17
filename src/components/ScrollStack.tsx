import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import './ScrollStack.css';

/**
 * CARDS APILADAS
 *
 * Las tarjetas se van clavando una encima de otra conforme bajas: la de abajo
 * se queda fija y encoge un poco mientras la siguiente la cubre, dejando asomar
 * apenas su borde superior. Al llegar al final, el bloque entero se despega y
 * sigue con el resto de la página.
 *
 * Todas miden exactamente lo mismo. La altura es fija, no la marca el
 * contenido: si cada tarjeta creciera con su texto, el asomo del montón
 * quedaría desigual y el efecto perdería la retícula.
 *
 * DOS DECISIONES QUE IMPORTAN
 *
 * 1. No crea su propio contenedor con scroll. El componente busca hacia arriba
 *    quién es el que realmente hace scroll (aquí es el modal del proyecto, que
 *    es `fixed inset-0 overflow-y-auto`) y se engancha a ése. Si montáramos un
 *    scroller anidado —o Lenis, como hace el componente original— el usuario
 *    quedaría atrapado: la rueda del ratón se la comería el bloque interno y el
 *    caso de estudio dejaría de avanzar.
 *
 * 2. Nada de esto altera el scroll. Sólo lee `scrollTop` y escribe `transform`
 *    y una opacidad, las dos propiedades que el navegador resuelve en el
 *    compositor. El scroll sigue siendo el nativo del sistema, con su inercia
 *    y su barra, y si el JavaScript fallara las tarjetas quedarían una debajo
 *    de otra, legibles.
 *
 * Cada tarjeta vive dentro de una "ranura" que nunca se transforma: la ranura
 * es la que reserva el hueco en el flujo y la que medimos. Así la medición
 * nunca se contamina con la transformación que acabamos de aplicar.
 */

export interface ScrollStackCard {
  /** Etiqueta corta de arriba (Descripción, Mi rol…) */
  eyebrow: string;
  /** La frase grande: es el contenido, no un título decorativo */
  statement: ReactNode;
  /** Fichas de rol, bajo la frase */
  chips?: string[];
  /** Detalle en viñetas. Sólo la card de Mi rol lo usa. */
  bullets?: string[];
  /** Línea fina de apoyo al pie */
  meta?: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ScrollStackProps {
  cards: ScrollStackCard[];
  /** Distancia desde el borde superior de la ventana donde se clava la primera */
  topOffset?: number;
  className?: string;
}

/** Cuánto asoma el borde de cada tarjeta ya apilada */
const ASOMO = 16;
const ASOMO_MOVIL = 11;

/** Cuánto encoge una tarjeta por cada tarjeta que se le monta encima */
const ENCOGE = 0.032;

/* Desvanecido al quedar cubierta.
 *
 * Se apaga la tarjeta entera, no sólo su contenido. Es lo que hace que se vea
 * la translucidez: mientras baja de opacidad, la tarjeta de enfrente pasa por
 * encima y a través de su vidrio se sigue viendo, desenfocada, la de atrás.
 * Si en cambio apagáramos sólo el texto y dejáramos la superficie intacta, la
 * de enfrente pasaría sobre una placa opaca y no habría nada que mirar.
 *
 * No llega a cero: se queda en un resto, porque si desapareciera del todo el
 * montón dejaría de leerse como montón. */
const DESVANECE = 0.85;
const RESTO = 0.15;

/* Cuándo ocurre el desvanecido, en fracción del recorrido que separa una
   tarjeta de la siguiente.
 *
 * RAMPA es lo que dura, y es larga a propósito: el desvanecido tiene que cubrir
 * todo el trayecto en que la tarjeta de enfrente le pasa por encima, no un
 * tramo corto al final. Con una rampa corta la de atrás se apagaba antes de que
 * empezara lo interesante y el paso quedaba en seco.
 *
 * ADELANTO adelanta un poco el final respecto al momento en que la de enfrente
 * queda clavada arriba, para que el último tramo del paso ya la encuentre
 * apagada. */
const ADELANTO = 0.12;
const RAMPA = 0.8;

/** Encuentra el ancestro que realmente hace scroll */
function buscarScroller(desde: HTMLElement): HTMLElement | null {
  let el: HTMLElement | null = desde.parentElement;
  while (el && el !== document.body) {
    const { overflowY } = getComputedStyle(el);
    if ((overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
      return el;
    }
    el = el.parentElement;
  }
  return null; // se usará la ventana
}

export function ScrollStack({ cards, topOffset, className = '' }: ScrollStackProps) {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const ranurasRef = useRef<HTMLDivElement[]>([]);
  const finRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor) return;

    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducido) {
      /* WCAG 2.3.3: con "reducir movimiento" las tarjetas se quedan quietas,
         una debajo de otra. El contenido es idéntico; sólo falta el apilado. */
      contenedor.classList.add('scroll-stack--quieto');
      return;
    }

    const scroller = buscarScroller(contenedor);
    const objetivo: HTMLElement | Window = scroller ?? window;

    let pendiente = false;
    let vivo = true;

    /* Posiciones de anclaje, medidas sin transformaciones encima: las ranuras
       nunca se mueven, así que basta recalcularlas cuando cambia el tamaño. */
    let anclas: number[] = [];
    let soltar = 0;
    const tapadas: boolean[] = [];

    const leerScroll = () => (scroller ? scroller.scrollTop : window.scrollY);

    const medir = () => {
      const ranuras = ranurasRef.current.filter(Boolean);
      if (!ranuras.length) return;

      const alto = scroller ? scroller.clientHeight : window.innerHeight;
      const movil = window.innerWidth < 768;
      const asomo = movil ? ASOMO_MOVIL : ASOMO;

      // Dónde se clava la primera tarjeta, contando desde el borde de la ventana
      const tope = topOffset ?? (movil ? 80 : 104);

      const origen = scroller ? scroller.getBoundingClientRect().top : 0;
      const scroll = leerScroll();

      anclas = ranuras.map((ranura, i) => {
        const y = ranura.getBoundingClientRect().top - origen + scroll;
        return y - tope - i * asomo;
      });

      // El bloque se despega cuando el cierre alcanza la línea de apilado
      const fin = finRef.current;
      if (fin) {
        const y = fin.getBoundingClientRect().top - origen + scroll;
        soltar = Math.max(anclas[anclas.length - 1] ?? 0, y - tope - Math.min(alto * 0.6, 460));
      } else {
        soltar = anclas[anclas.length - 1] ?? 0;
      }
    };

    const pintar = () => {
      pendiente = false;
      if (!vivo) return;

      const ranuras = ranurasRef.current.filter(Boolean);
      if (!ranuras.length || !anclas.length) return;

      const scroll = leerScroll();

      /* Cuánto lleva encima cada tarjeta, contando lo que ha avanzado cada una
         de las que vienen detrás. Se mide contra la separación real entre
         anclas, no contra un número fijo de píxeles, para que el ritmo sea el
         mismo aunque las tarjetas cambien de alto. */
      const profundidades = ranuras.map((_, i) => {
        let d = 0;
        for (let j = i + 1; j < ranuras.length; j++) {
          const separacion = Math.max(anclas[j] - anclas[j - 1], 1);
          const fin = anclas[j] - separacion * ADELANTO;
          const rampa = separacion * RAMPA;
          const t = (scroll - (fin - rampa)) / rampa;
          d += t < 0 ? 0 : t > 1 ? 1 : t;
        }
        return d;
      });

      for (let i = 0; i < ranuras.length; i++) {
        const tarjeta = ranuras[i].firstElementChild as HTMLElement | null;
        if (!tarjeta) continue;

        // Clavada entre su ancla y el punto de soltar; antes y después, al natural
        const y = Math.max(0, Math.min(scroll, soltar) - anclas[i]);
        const d = profundidades[i];
        const escala = 1 - d * ENCOGE;
        const opacidad = Math.max(RESTO, 1 - d * DESVANECE);

        tarjeta.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${escala.toFixed(4)})`;
        tarjeta.style.opacity = opacidad.toFixed(3);
        // La de más abajo del montón no debe tapar a las que se le montan
        tarjeta.style.zIndex = String(i + 1);

        /* `backdrop-filter` obliga al navegador a releer y desenfocar todo lo
           que hay detrás en cada fotograma, y con las tarjetas encimadas eso se
           multiplica. Se lo quitamos a las que ya terminaron de desvanecerse:
           en ese punto la tarjeta lleva otra encima cubriéndola entera salvo la
           rendija, y está al 15% de opacidad. Nada que desenfocar ahí se
           distingue, y el cambio ocurre cuando esa tarjeta ya no se mueve —
           así no hay salto. */
        const tapada = d >= 1;
        if (tapada !== tapadas[i]) {
          tarjeta.classList.toggle('esta-tapada', tapada);
          tapadas[i] = tapada;
        }
      }
    };

    const alScroll = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(pintar);
    };

    const alRedimensionar = () => {
      medir();
      alScroll();
    };

    medir();
    pintar();

    objetivo.addEventListener('scroll', alScroll, { passive: true });
    window.addEventListener('resize', alRedimensionar);

    /* Las imágenes y tipografías del caso de estudio cambian la altura después
       del primer render: si no volvemos a medir, las anclas quedan corridas. */
    const observador = new ResizeObserver(alRedimensionar);
    observador.observe(contenedor);

    return () => {
      vivo = false;
      objetivo.removeEventListener('scroll', alScroll);
      window.removeEventListener('resize', alRedimensionar);
      observador.disconnect();
    };
  }, [cards.length, topOffset]);

  /* Al cerrar y reabrir el modal el scroll vuelve a 0 pero los transform
     quedarían con el último valor pintado. */
  useEffect(() => {
    const ranuras = ranurasRef.current;
    return () => {
      ranuras.forEach(r => {
        const t = r?.firstElementChild as HTMLElement | null;
        if (t) {
          t.style.transform = '';
          t.style.opacity = '';
        }
      });
    };
  }, []);

  return (
    <div ref={contenedorRef} className={`scroll-stack ${className}`}>
      {cards.map((card, i) => {
        const Icono = card.icon;
        return (
          <div
            key={card.eyebrow}
            className="scroll-stack-slot"
            ref={el => {
              if (el) ranurasRef.current[i] = el;
            }}
          >
            <article className="scroll-stack-card">
              {/* Foco suave detrás del icono: es lo que le da volumen al vidrio.
                  Va debajo del contenido y no recibe eventos. */}
              <span className="scroll-stack-glow" aria-hidden="true" />

              <div className="scroll-stack-figure">
                <Icono className="scroll-stack-icon" />
              </div>

              <div className="scroll-stack-text">
                <p className="scroll-stack-eyebrow">{card.eyebrow}</p>
                <p className="scroll-stack-statement">{card.statement}</p>

                {card.chips && (
                  <div className="scroll-stack-chips">
                    {card.chips.map(chip => (
                      <span key={chip} className="scroll-stack-chip">{chip}</span>
                    ))}
                  </div>
                )}

                {card.bullets && (
                  <ul className="scroll-stack-list">
                    {card.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                )}

                {card.meta && <p className="scroll-stack-meta">{card.meta}</p>}
              </div>
            </article>
          </div>
        );
      })}
      <div ref={finRef} className="scroll-stack-end" aria-hidden="true" />
    </div>
  );
}

export default ScrollStack;
