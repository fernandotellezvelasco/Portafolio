import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import './ScrollStack.css';

/**
 * CARDS APILADAS
 *
 * Las tarjetas se van clavando una encima de otra conforme bajas: la de abajo
 * se queda fija y se desvanece mientras la siguiente la cubre, dejando asomar
 * apenas su borde superior. Al llegar al final, el bloque entero se despega y
 * sigue con el resto de la página.
 *
 * EL CLAVADO LO HACE CSS, NO JAVASCRIPT
 *
 * Cada tarjeta es `position: sticky` con su propio `top`. Antes lo resolvía yo
 * a mano, escribiendo un `translateY` en cada fotograma, y eso traía dos
 * problemas que se veían sobre todo en el móvil:
 *
 *   1. Iba a remolque. El navegador entrega los eventos de scroll a destiempo
 *      —durante el desplazamiento por inercia del móvil los agrupa o los
 *      retrasa—, así que la tarjeta llegaba a su sitio uno o dos fotogramas
 *      tarde y el apilado se sentía trabado. `sticky` lo resuelve el
 *      compositor: nunca se retrasa, aunque el hilo principal esté ocupado.
 *
 *   2. Se comía la sección siguiente. `translateY` mueve la tarjeta pero no
 *      reserva su hueco, así que mientras estaba clavada el contenido de abajo
 *      se le metía debajo. `sticky` la deja en el flujo: el hueco sigue ahí y
 *      nada se superpone.
 *
 * Lo único que queda en JavaScript es la escala y la opacidad, que son puro
 * adorno: si se retrasan un fotograma no se nota.
 *
 * Tampoco crea un contenedor con scroll propio. Si lo hiciera —o si usara
 * Lenis, como el componente original— la rueda del ratón se la comería el
 * bloque y el caso de estudio dejaría de avanzar.
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
  className?: string;
}

/** Cuánto encoge una tarjeta por cada tarjeta que se le monta encima */
const ENCOGE = 0.032;

/* Desvanecido al quedar cubierta.
 *
 * Se apaga la tarjeta entera, no sólo su contenido: es lo que deja ver la
 * translucidez. Mientras baja de opacidad, la de enfrente pasa por encima y a
 * través de su vidrio se sigue viendo, desenfocada, la de atrás.
 *
 * No llega a cero: se queda en un resto, porque si desapareciera del todo el
 * montón dejaría de leerse como montón. */
const DESVANECE = 0.85;
const RESTO = 0.15;

/* Cuándo ocurre, medido en lo que le falta a la tarjeta de enfrente para
   clavarse arriba.
   - Empieza cuando aún le falta el 85% de su propio alto, que es justo cuando
     empieza a tapar a la de atrás.
   - Termina 50 px antes de que se clave, para que el último tramo del paso ya
     la encuentre apagada. */
const INICIO_REL = 0.85;
const FIN_PX = 50;

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

export function ScrollStack({ cards, className = '' }: ScrollStackProps) {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const tarjetasRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor) return;

    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducido) {
      /* WCAG 2.3.3: con "reducir movimiento" no hay apilado ni desvanecido.
         El contenido es idéntico, una tarjeta debajo de otra. */
      contenedor.classList.add('scroll-stack--quieto');
      return;
    }

    const scroller = buscarScroller(contenedor);
    const objetivo: HTMLElement | Window = scroller ?? window;

    let pendiente = false;
    let vivo = true;

    const pintar = () => {
      pendiente = false;
      if (!vivo) return;

      const tarjetas = tarjetasRef.current.filter(Boolean);
      if (!tarjetas.length) return;

      const estilo = getComputedStyle(contenedor);
      const tope = parseFloat(estilo.getPropertyValue('--tope')) || 0;
      const asomo = parseFloat(estilo.getPropertyValue('--asomo')) || 0;
      const origen = scroller ? scroller.getBoundingClientRect().top : 0;

      /* Cuánto le falta a cada tarjeta para clavarse. La escala no altera este
         número porque el origen de la transformación es el borde superior. */
      const faltan = tarjetas.map((t, i) => {
        const clavado = tope + i * asomo;
        return t.getBoundingClientRect().top - origen - clavado;
      });

      const alto = tarjetas[0].getBoundingClientRect().height;
      const inicio = Math.max(alto * INICIO_REL, FIN_PX + 40);
      const recorrido = inicio - FIN_PX;

      for (let i = 0; i < tarjetas.length; i++) {
        // Cuántas tarjetas lleva encima, contando las que están en camino
        let d = 0;
        for (let j = i + 1; j < tarjetas.length; j++) {
          const t = (inicio - faltan[j]) / recorrido;
          d += t < 0 ? 0 : t > 1 ? 1 : t;
        }

        const tarjeta = tarjetas[i];
        tarjeta.style.transform = `scale(${(1 - d * ENCOGE).toFixed(4)})`;
        tarjeta.style.opacity = Math.max(RESTO, 1 - d * DESVANECE).toFixed(3);

        /* `backdrop-filter` obliga al navegador a releer y desenfocar todo lo
           que hay detrás en cada fotograma, y con las tarjetas encimadas eso se
           multiplica. Se lo quitamos a las que ya terminaron de desvanecerse:
           en ese punto llevan otra encima cubriéndolas enteras salvo la
           rendija, y están al 15%. Nada que desenfocar ahí se distingue. */
        tarjeta.classList.toggle('esta-tapada', d >= 1);
      }
    };

    const alScroll = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(pintar);
    };

    pintar();
    objetivo.addEventListener('scroll', alScroll, { passive: true });
    window.addEventListener('resize', alScroll);

    /* Las imágenes y tipografías del caso de estudio cambian la altura después
       del primer render y mueven las tarjetas de sitio. */
    const observador = new ResizeObserver(alScroll);
    observador.observe(contenedor);

    return () => {
      vivo = false;
      objetivo.removeEventListener('scroll', alScroll);
      window.removeEventListener('resize', alScroll);
      observador.disconnect();
    };
  }, [cards.length]);

  /* Al cerrar y reabrir el modal el scroll vuelve a 0 pero los estilos
     quedarían con el último valor pintado. */
  useEffect(() => {
    const tarjetas = tarjetasRef.current;
    return () => {
      tarjetas.forEach(t => {
        if (!t) return;
        t.style.transform = '';
        t.style.opacity = '';
      });
    };
  }, []);

  return (
    <div ref={contenedorRef} className={`scroll-stack ${className}`}>
      {cards.map((card, i) => {
        const Icono = card.icon;
        return (
          <article
            key={card.eyebrow}
            className="scroll-stack-card"
            ref={el => {
              if (el) tarjetasRef.current[i] = el;
            }}
            /* `top`: cada una se clava un escalón más abajo que la anterior, y
               ése es el borde que asoma y hace que se lea como montón.

               `margin-bottom` escalonado al revés: una tarjeta clavada se
               suelta cuando el fondo de su contenedor la alcanza, y como todas
               miden lo mismo, la que se clava más abajo se soltaba primero —
               los asomos se cerraban de golpe justo antes de que el montón se
               fuera. Dándole a cada una el margen que le falta para igualar su
               posición de clavado, todas topan a la vez y el montón se despega
               entero, con su escalonado intacto. */
            style={{
              top: `calc(var(--tope) + ${i} * var(--asomo))`,
              marginBottom: `calc(var(--separacion) + ${cards.length - 1 - i} * var(--asomo))`,
              zIndex: i + 1,
            }}
          >
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
        );
      })}

      {/* Retención: el hueco que mantiene clavada a la última un rato más antes
          de soltar el montón. Es espacio real, no un truco de transformación,
          así que la sección siguiente nunca se le monta encima. */}
      <div className="scroll-stack-end" aria-hidden="true" />
    </div>
  );
}

export default ScrollStack;
