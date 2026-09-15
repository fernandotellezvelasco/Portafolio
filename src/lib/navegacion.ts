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
 * Desplaza con una curva propia en vez de `behavior: smooth`.
 *
 * El CSS global tiene `scroll-behavior: smooth`, y si no lo desactivamos aquí
 * cada paso de esta animación dispara además un scroll nativo: los dos se
 * pelean y el movimiento se siente trabado. Lo restauramos al terminar.
 */
export function desplazarSuave(destinoY: number, duracion?: number) {
  const inicioY = window.scrollY;
  const distancia = destinoY - inicioY;
  if (Math.abs(distancia) < 2) return;

  const raiz = document.documentElement;
  const comportamientoPrevio = raiz.style.scrollBehavior;
  raiz.style.scrollBehavior = 'auto';

  // Proporcional a la distancia, con topes: saltos cortos no deben sentirse
  // lentos ni los largos eternos.
  const ms = duracion ?? Math.min(1500, Math.max(650, Math.abs(distancia) / 3.2));
  const inicio = performance.now();

  // Ease-out: arranca de inmediato y frena al final. Con ease-in parecería
  // que el botón tardó en responder.
  const suave = (t: number) => 1 - Math.pow(1 - t, 3);

  const paso = (ahora: number) => {
    const avance = Math.min((ahora - inicio) / ms, 1);
    window.scrollTo(0, inicioY + distancia * suave(avance));
    if (avance < 1) requestAnimationFrame(paso);
    else raiz.style.scrollBehavior = comportamientoPrevio;
  };

  // Primer paso ya, sin esperar al siguiente fotograma
  paso(performance.now());
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
