import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

import antes01 from '../../assets/claro/asesor/antes_01_hogar.webp';
import antes02 from '../../assets/claro/asesor/antes_02_dispositivos.webp';
import antes03 from '../../assets/claro/asesor/antes_03_usos.webp';
import antes04 from '../../assets/claro/asesor/antes_04_resultado.webp';

import nuevo01 from '../../assets/claro/asesor/nuevo_01_hogar.webp';
import nuevo02 from '../../assets/claro/asesor/nuevo_02_dispositivos.webp';
import nuevo03 from '../../assets/claro/asesor/nuevo_03_usos.webp';
import nuevo04 from '../../assets/claro/asesor/nuevo_04_resultado.webp';
import nuevo05 from '../../assets/claro/asesor/nuevo_05_equipo.webp';
import nuevo06 from '../../assets/claro/asesor/nuevo_06_compra.webp';
import nuevo07 from '../../assets/claro/asesor/nuevo_07_datos.webp';

import movil01 from '../../assets/claro/asesor/movil_01_hogar.webp';
import movil02 from '../../assets/claro/asesor/movil_02_dispositivos.webp';
import movil03 from '../../assets/claro/asesor/movil_03_usos.webp';
import movil04 from '../../assets/claro/asesor/movil_04_resultado.webp';

import clarity01 from '../../assets/claro/asesor/clarity_01_escritorio.webp';
import clarity02 from '../../assets/claro/asesor/clarity_02_movil.webp';
import clarity03 from '../../assets/claro/asesor/clarity_03_mapa_escritorio.webp';
import clarity04 from '../../assets/claro/asesor/clarity_04_mapa_movil.webp';

/**
 * ASESOR DE VELOCIDAD Y EXPERIENCIA WI-FI — Claro República Dominicana
 *
 * Es la primera de las soluciones del caso de estudio de CLARO y va antes que
 * nada porque es la más completa: hay datos de comportamiento que justifican
 * cada decisión, un antes y un después comparables, y una maquetación que se
 * entregó funcionando.
 *
 * Los cuatro hallazgos de Clarity se construyen como texto y no como captura
 * del Figma a propósito: así se leen en un lector de pantalla, se buscan, y no
 * se pixelan en una pantalla grande.
 */

interface Props {
  onVerImagen: (src: string) => void;
}

/**
 * EL PROCESO, EN EL ORDEN EN QUE OCURRIÓ
 *
 * No es una lista de hallazgos sueltos: cada paso explica por qué el siguiente
 * tenía sentido. Los números son los que se ven en las capturas de Clarity que
 * acompañan la sección — 30 días de sesiones del asesor actual.
 */
const PROCESO = [
  {
    paso: '01',
    titulo: 'Quién estaba entrando',
    dato: '4 de cada 10',
    etiqueta: 'sesiones de usuarios recurrentes',
    texto:
      'Lo primero que miré no fue el error, sino la audiencia. Una parte grande de quienes entran ya habían pasado antes por el asesor, y los datos mostraban que a ellos les cuesta menos avanzar: la familiaridad reduce la fricción.',
    decision:
      'Por eso descarté un cambio abrupto en la primera pantalla. Quien ya conocía el flujo tenía que reconocer, de un vistazo, que seguía en el mismo asesor.',
  },
  {
    paso: '02',
    titulo: 'Dónde se rompía',
    dato: '49,72%',
    etiqueta: 'de sesiones con clics fallidos en escritorio',
    texto:
      'Los clics de frustración se concentraban en escritorio: 49,72% de las sesiones, contra 24,19% en móvil. Los retrocesos rápidos seguían el mismo patrón —56,98% contra 46,77%— y el tiempo activo duplicaba al del celular sin que eso se tradujera en avanzar.',
    decision:
      'El usuario no abandonaba por el contenido. Abandonaba por la pantalla en la que ese contenido estaba.',
  },
  {
    paso: '03',
    titulo: 'Por qué pasaba',
    dato: '28,54%',
    etiqueta: 'de los clics, en un solo grupo de casillas',
    texto:
      'El mapa de calor lo confirmó: el grueso de la interacción caía sobre el bloque de casillas de uso, donde se ofrecían todas las categorías y todas sus opciones al mismo tiempo. En escritorio caben más, así que se mostraban más — y ahí es donde más se fallaba.',
    decision:
      'El diagnóstico fue carga cognitiva, no diseño feo: demasiadas opciones simultáneas para una sola decisión.',
  },
  {
    paso: '04',
    titulo: 'Qué cambié',
    dato: '+40%',
    etiqueta: 'de conversión tras el rediseño',
    texto:
      'Apliqué la ley de Miller —la memoria de trabajo sostiene un número limitado de elementos a la vez— al flujo entero: el desplegable de metros pasó a opciones visibles de una en una, y los usos se agruparon en acordeón, con una categoría abierta cada vez.',
    decision:
      'El usuario elige opción por opción, no todas de golpe. El esqueleto de tres pasos se mantuvo intacto.',
  },
];

/* Las capturas que sostienen cada número. Van juntas y con su pie, para que
   cualquiera pueda comprobar de dónde sale cada cifra. */
const CLARITY = [
  { src: clarity01, pie: 'Panel de escritorio · 179 sesiones, 49,72% con clics fallidos y 56,98% con retrocesos rápidos' },
  { src: clarity02, pie: 'Panel de móvil · 558 sesiones, 24,19% con clics fallidos y 46,77% con retrocesos' },
  { src: clarity03, pie: 'Mapa de calor en escritorio · las casillas de uso concentran el 28,54% de los clics' },
  { src: clarity04, pie: 'Mapa de calor en móvil · el mismo bloque baja al 18,93% y "Continuar" sube al 10,48%' },
];

const ANTES = [
  { src: antes01, pie: 'Paso 1 · Metros cuadrados en un desplegable y estructura de paredes' },
  { src: antes02, pie: 'Paso 2 · Seis categorías de dispositivos, todas en cero' },
  { src: antes03, pie: 'Paso 3 · Usos por categoría, con todo el contenido desplegado' },
  { src: antes04, pie: 'Resultado · Plan recomendado y una variable de plantilla sin reemplazar' },
];

const NUEVO = [
  { src: nuevo01, pie: 'Paso 1 · Opciones de superficie a la vista, sin desplegable' },
  { src: nuevo02, pie: 'Paso 2 · Conteo de dispositivos con la ilustración de apoyo' },
  { src: nuevo03, pie: 'Paso 3 · Usos en acordeón: una categoría abierta a la vez' },
  { src: nuevo04, pie: 'Resultado · Plan con velocidad, precio y para qué sirve' },
  { src: nuevo05, pie: 'Resultado · Equipo Mesh recomendado y qué incluye Ultra Wi-Fi' },
  { src: nuevo06, pie: 'Contratación · Elegir entre comprar en línea o recibir una llamada' },
  { src: nuevo07, pie: 'Contratación · Captura de datos y número de solicitud' },
];

const MOVIL = [
  { src: movil01, pie: 'Paso 1' },
  { src: movil02, pie: 'Paso 2' },
  { src: movil03, pie: 'Paso 3' },
  { src: movil04, pie: 'Resultado' },
];

/** Carrusel sencillo: una imagen grande y el pie que la explica */
function Galeria({
  laminas,
  onVerImagen,
  etiqueta,
}: {
  laminas: { src: string; pie: string }[];
  onVerImagen: (src: string) => void;
  etiqueta: string;
}) {
  const [i, setI] = useState(0);
  const total = laminas.length;
  const ir = (d: number) => setI(v => (v + d + total) % total);

  return (
    <div className="relative" role="group" aria-roledescription="carrusel" aria-label={etiqueta}>
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] cursor-zoom-in"
        onClick={() => onVerImagen(laminas[i].src)}
      >
        <ImageWithFallback
          src={laminas[i].src}
          alt={laminas[i].pie}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <p className="text-sm text-white/65 leading-relaxed max-w-[60ch]" aria-live="polite">
          {laminas[i].pie}
        </p>

        <div className="flex shrink-0 items-center gap-2">
          <span className="text-xs tabular-nums text-white/60">
            {i + 1} / {total}
          </span>
          <button
            onClick={() => ir(-1)}
            aria-label="Lámina anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => ir(1)}
            aria-label="Lámina siguiente"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function AsesorVelocidad({ onVerImagen }: Props) {
  return (
    <div className="space-y-16">
      <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-white/75 max-w-[68ch]">
        El Asesor de Velocidad y Experiencia Wi-Fi es el flujo que recomienda un plan de Internet
        Fijo a partir de tres preguntas: cómo es el hogar, cuántos dispositivos se conectan y qué se
        hace con ellos. Es la puerta de entrada a la contratación, así que cada abandono a mitad del
        flujo es una venta que no ocurre.
      </p>

      {/* ---------- El punto de partida ---------- */}
      <div className="space-y-6">
        <h4 className="text-[1.05rem] md:text-[1.2rem] font-medium text-white">
          El punto de partida
        </h4>
        <p className="text-white/70 leading-relaxed max-w-[68ch]">
          El asesor ya existía y funcionaba, pero pedía mucho de una sola vez y terminaba en un
          callejón: recomendaba un plan y ahí se acababa. No había forma de contratarlo desde ahí.
        </p>

        <Galeria laminas={ANTES} onVerImagen={onVerImagen} etiqueta="Versión anterior del asesor" />

        {/* Un hallazgo que no vino de los datos sino de recorrer el flujo */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-3">
            Encontrado al recorrer el flujo
          </p>
          <p className="text-white/80 leading-relaxed">
            La pantalla de resultado mostraba{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-white">
              {'{numequiposWi-FiMesh}'}
            </code>{' '}
            en el texto de recomendación: una variable de plantilla que nunca se reemplazaba. El
            usuario leía código en la pantalla que debía convencerlo de contratar.
          </p>
        </div>
      </div>

      {/* ---------- El proceso ---------- */}
      <div className="space-y-6">
        <h4 className="text-[1.05rem] md:text-[1.2rem] font-medium text-white">Mi proceso</h4>
        <p className="text-white/70 leading-relaxed max-w-[68ch]">
          Treinta días de sesiones reales en Microsoft Clarity, mirando escritorio contra móvil y
          usuarios nuevos contra recurrentes. Cada cosa que encontré condicionó la siguiente, y esa
          cadena es la que explica el rediseño.
        </p>

        <ol className="space-y-4">
          {PROCESO.map((p, i) => (
            <motion.li
              key={p.paso}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                <div>
                  <div className="text-xs tabular-nums tracking-widest text-white/60">{p.paso}</div>
                  <div className="mt-3 text-[1.75rem] font-medium leading-none text-white">
                    {p.dato}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-white/60">
                    {p.etiqueta}
                  </div>
                </div>

                <div>
                  <h5 className="text-[1.05rem] font-medium text-white">{p.titulo}</h5>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{p.texto}</p>
                  {/* La decisión que salió del dato: sin esto sería sólo una métrica */}
                  <p className="mt-4 border-l-2 border-white/25 pl-4 text-sm leading-relaxed text-white/80">
                    {p.decision}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* ---------- Las capturas que lo sostienen ---------- */}
      <div className="space-y-6">
        <h4 className="text-[1.05rem] md:text-[1.2rem] font-medium text-white">
          De dónde salen los números
        </h4>
        <p className="text-white/70 leading-relaxed max-w-[68ch]">
          Los paneles y mapas de calor de Clarity, segmentados por la URL del asesor y por
          dispositivo. La comparación entre escritorio y móvil es la que hace visible el patrón.
        </p>

        <Galeria laminas={CLARITY} onVerImagen={onVerImagen} etiqueta="Datos de Microsoft Clarity" />
      </div>

      {/* ---------- El rediseño ---------- */}
      <div className="space-y-6">
        <h4 className="text-[1.05rem] md:text-[1.2rem] font-medium text-white">El rediseño</h4>
        <p className="text-white/70 leading-relaxed max-w-[68ch]">
          Mismo esqueleto de tres pasos —no había razón para reeducar a quien ya lo conocía— pero
          con menos carga por pantalla, validación que avisa en el momento y un final que ahora sí
          lleva a algún sitio.
        </p>

        <Galeria laminas={NUEVO} onVerImagen={onVerImagen} etiqueta="Rediseño del asesor" />

        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            'El desplegable de metros cuadrados pasa a opciones visibles, de una en una.',
            'Los usos se agrupan en acordeón: una categoría abierta a la vez, no las seis.',
            'Validación en línea: "Selecciona al menos una opción de uso para poder continuar".',
            'El resultado explica para qué sirve el plan, no sólo cuánto cuesta.',
            'Equipo Mesh recomendado, con su precio y qué incluye Ultra Wi-Fi.',
            'Contratación dentro del flujo: comprar en línea o pedir una llamada.',
          ].map(t => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-white/65">
              <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-white/40" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* ---------- Móvil ---------- */}
      <div className="space-y-6">
        <h4 className="text-[1.05rem] md:text-[1.2rem] font-medium text-white">En móvil</h4>
        <p className="text-white/70 leading-relaxed max-w-[68ch]">
          Los datos decían que el móvil era el entorno con menos fricción: la pantalla ya obligaba a
          mostrar poco de golpe. El diseño responsive parte de ahí y lo lleva al escritorio, no al
          revés.
        </p>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {MOVIL.map(m => (
            <figure key={m.pie} className="space-y-3">
              <div
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] cursor-zoom-in"
                onClick={() => onVerImagen(m.src)}
              >
                <ImageWithFallback src={m.src} alt={`Asesor de velocidad en móvil — ${m.pie}`} className="w-full h-auto" />
              </div>
              <figcaption className="text-xs text-white/60">{m.pie}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* ---------- Entrega ---------- */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h4 className="text-[1.05rem] md:text-[1.2rem] font-medium text-white">
          Una maquetación, no un PDF
        </h4>
        <p className="mt-3 text-white/70 leading-relaxed max-w-[68ch]">
          El rediseño se entregó como una maquetación navegable, no como pantallas sueltas. El país
          pudo recorrer el flujo completo antes de aprobarlo y el equipo de desarrollo vio los
          estados reales —validaciones, acordeones, transiciones— sin tener que deducirlos.
        </p>
        <a
          href="https://claro-asesor-velocidad-wifi.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-2.5 text-sm font-medium text-[#0B0B0B] transition-colors hover:bg-white/90"
        >
          Recorrer la maquetación
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default AsesorVelocidad;
