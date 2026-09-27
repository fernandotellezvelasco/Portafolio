/**
 * Desplazamientos del sitio.
 *
 * El escenario del hero ocupa un track larguísimo (1000vh) donde la posición
 * del scroll ES el estado de la animación: el principio es la pantalla de
 * bienvenida y más abajo está el carrusel. Por eso "ir a los proyectos" no es
 * saltar a otra página sino aterrizar en el punto exacto del track donde las
 * cards ya se formaron.
 */

/** Fracción del track donde el carrusel ya está armado y centrado */
const PUNTO_PROYECTOS = 0.45;

/**
 * Tramo del track que recorre el carrusel: en ANILLO_INICIO está al frente el
 * primer proyecto y en ANILLO_FIN el último. HeroStage los usa para animar el
 * anillo y las flechas para saber adónde saltar — si vivieran duplicados, bastaría
 * con cambiar uno para que las flechas dejaran de caer justo en cada card.
 */
export const ANILLO_INICIO = 0.43;
export const ANILLO_FIN = 0.78;

/* Estado compartido entre llamadas a `desplazarSuave`. */
let animacionVigente = 0;
let comportamientoOriginal: string | null = null;

/**
 * Desplaza con una curva propia en vez de `behavior: smooth`.
 *
 * El CSS global tiene `scroll-behavior: smooth`, y si no lo desactivamos aquí
 * cada paso de esta animación dispara además un scroll nativo: los dos se
 * pelean y el movimiento se siente trabado. Lo restauramos al terminar.
 *
 * Tres reglas que antes no existían y que las flechas del carrusel hicieron
 * necesarias, porque ahí sí se pulsa varias veces seguidas:
 *
 *   1. Una llamada nueva releva a la anterior. Antes las dos animaciones
 *      corrían a la vez, cada una llamando a scrollTo con su propio destino.
 *   2. El comportamiento original se guarda una sola vez. Si la segunda llamada
 *      lo guardaba, guardaba el 'auto' que había puesto la primera, y el sitio
 *      se quedaba sin scroll suave para siempre.
 *   3. Si el usuario toma el control —rueda o dedo— se le cede. Pelear contra
 *      su gesto es lo que hace que un scroll programado se sienta roto.
 */
export function desplazarSuave(destinoY: number, duracion?: number) {
  const inicioY = window.scrollY;
  const distancia = destinoY - inicioY;
  if (Math.abs(distancia) < 2) return;

  const raiz = document.documentElement;

  // Con "reducir movimiento" no hay recorrido animado: se llega directamente
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const previo = raiz.style.scrollBehavior;
    raiz.style.scrollBehavior = 'auto';
    window.scrollTo(0, destinoY);
    raiz.style.scrollBehavior = previo;
    return;
  }

  if (comportamientoOriginal === null) comportamientoOriginal = raiz.style.scrollBehavior;
  raiz.style.scrollBehavior = 'auto';

  const token = ++animacionVigente;
  let cedida = false;

  // Proporcional a la distancia, con topes: saltos cortos no deben sentirse
  // lentos ni los largos eternos.
  const ms = duracion ?? Math.min(1500, Math.max(650, Math.abs(distancia) / 3.2));
  const inicio = performance.now();

  // Ease-out: arranca de inmediato y frena al final. Con ease-in parecería
  // que el botón tardó en responder.
  const suave = (t: number) => 1 - Math.pow(1 - t, 3);

  const ceder = () => {
    cedida = true;
  };
  window.addEventListener('wheel', ceder, { passive: true });
  window.addEventListener('touchstart', ceder, { passive: true });

  const terminar = () => {
    window.removeEventListener('wheel', ceder);
    window.removeEventListener('touchstart', ceder);
    // Sólo la animación vigente devuelve el comportamiento original; si otra
    // la relevó, esa se encargará al acabar.
    if (token === animacionVigente && comportamientoOriginal !== null) {
      raiz.style.scrollBehavior = comportamientoOriginal;
      comportamientoOriginal = null;
    }
  };

  const paso = (ahora: number) => {
    if (cedida || token !== animacionVigente) {
      terminar();
      return;
    }
    const avance = Math.min((ahora - inicio) / ms, 1);
    window.scrollTo(0, inicioY + distancia * suave(avance));
    if (avance < 1) requestAnimationFrame(paso);
    else terminar();
  };

  // Primer paso ya, sin esperar al siguiente fotograma
  paso(performance.now());
}

/**
 * Deja al frente del carrusel el proyecto `indice` (0 = el primero).
 *
 * No hay un estado "proyecto actual" aparte: el carrusel lo deduce del scroll,
 * y esto sólo mueve el scroll al punto donde ese proyecto queda centrado. Así
 * flechas y scroll no pueden contradecirse nunca.
 */
export function irAProyecto(indice: number, total: number) {
  const escenario = document.getElementById('hero-stage');
  if (!escenario || escenario.offsetHeight === 0) return;
  const t = total > 1 ? indice / (total - 1) : 0;
  const fraccion = ANILLO_INICIO + (ANILLO_FIN - ANILLO_INICIO) * t;
  desplazarSuave(escenario.offsetTop + escenario.offsetHeight * fraccion);
}

/**
 * Lleva al carrusel de proyectos, no al inicio del escenario.
 *
 * Si venimos de otra sección, el escenario todavía no existe: las secciones se
 * intercambian con una animación de salida y la nueva no se monta hasta que la
 * anterior termina. En vez de apostar por un retraso fijo, esperamos a que el
 * elemento aparezca — así da igual cuánto dure la transición.
 */
export function irAProyectos() {
  const intentar = (intentosRestantes: number) => {
    const escenario = document.getElementById('hero-stage');

    if (escenario && escenario.offsetHeight > 0) {
      desplazarSuave(escenario.offsetTop + escenario.offsetHeight * PUNTO_PROYECTOS);
      return;
    }

    if (intentosRestantes > 0) {
      requestAnimationFrame(() => intentar(intentosRestantes - 1));
      return;
    }

    // Algo impidió que el escenario se montara: al menos subimos al principio
    desplazarSuave(0);
  };

  // ~120 fotogramas ≈ 2 s de margen, de sobra para la transición entre secciones
  intentar(120);
}

/** Lleva a la pantalla de bienvenida */
export function irAInicio() {
  desplazarSuave(0);
}
