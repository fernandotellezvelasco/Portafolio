import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCIA, EDUCACION, LO_QUE_HAGO, Puesto, Estudio } from './datos';
import { ICONOS } from './iconos';
import GradualBlur from '../GradualBlur';

/**
 * Bloques de credenciales de "Sobre mí": Experiencia, Educación y Lo que hago.
 *
 * La lista vive dentro de UN contenedor y las filas son tarjetas anidadas.
 * Cuando hay más de las que se muestran, las últimas se van desvaneciendo y
 * el botón de "mostrar más" flota sobre ese degradado: así el corte se lee
 * como una decisión y no como contenido cortado a la mitad.
 */

/* ------------------------------------------------------------------ */
/*  Piezas compartidas                                                 */
/* ------------------------------------------------------------------ */

function Titulo({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 md:mb-5 text-white text-[1.05rem] md:text-[1.2rem] font-medium tracking-tight">
      {children}
    </h3>
  );
}

/**
 * Placa del logotipo: fondo blanco, como en la referencia. La mayoría de los
 * logos de marca están pensados para fondo claro y sobre negro se pierden.
 */
function Placa({
  logo,
  icono,
  inicial,
  alt,
}: {
  logo?: string;
  icono?: string;
  inicial?: string;
  alt: string;
}) {
  const claro = Boolean(logo);
  return (
    <div
      className={`flex-shrink-0 w-12 h-12 md:w-[52px] md:h-[52px] rounded-2xl
                  flex items-center justify-center overflow-hidden
                  ${claro ? 'bg-white' : 'bg-white/[0.07] border border-white/10'}`}
    >
      {logo ? (
        <img src={logo} alt={alt} className="w-[72%] h-[72%] object-contain" loading="lazy" />
      ) : icono && ICONOS[icono] ? (
        <svg
          viewBox={ICONOS[icono].vb ?? '0 0 24 24'}
          className="w-5 h-5 fill-white/85"
          aria-hidden="true"
        >
          <path
            d={ICONOS[icono].d}
            fillRule={ICONOS[icono].evenodd ? 'evenodd' : undefined}
            clipRule={ICONOS[icono].evenodd ? 'evenodd' : undefined}
          />
        </svg>
      ) : (
        <span className="text-white/75 text-[1.05rem] font-medium">{inicial}</span>
      )}
    </div>
  );
}

/** Contenedor exterior común a Experiencia y Educación */
function Marco({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.02] p-2.5 md:p-3">
      {children}
    </div>
  );
}

const FILA =
  'group relative w-full text-left rounded-[20px] bg-white/[0.035] ' +
  'transition-colors duration-300 hover:bg-white/[0.07]';

function Encabezado({
  titulo,
  sub,
  periodo,
}: {
  titulo: string;
  sub: string;
  periodo: string;
}) {
  return (
    <div className="min-w-0 flex-1">
      <div className="text-white text-[1.05rem] md:text-[1.15rem] font-medium leading-tight tracking-tight">
        {titulo}
      </div>
      <div className="mt-1 text-white/40 text-[0.85rem] md:text-[0.92rem] leading-tight">
        {sub}
        <span className="mx-2 opacity-70">•</span>
        {periodo}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Experiencia                                                        */
/* ------------------------------------------------------------------ */

/** Cuántos puestos se ven antes de pedir "mostrar más" */
const VISIBLES = 2;

function FilaPuesto({ puesto }: { puesto: Puesto }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setAbierto(a => !a)}
      className={`${FILA} px-3 py-3 md:px-4 md:py-3.5`}
      aria-expanded={abierto}
    >
      <div className="flex items-center gap-3.5 md:gap-4">
        <Placa logo={puesto.logo} inicial={puesto.inicial} alt={puesto.empresa} />
        <Encabezado titulo={puesto.empresa} sub={puesto.cargo} periodo={puesto.periodo} />

        {puesto.detalle && (
          <motion.svg
            viewBox="0 0 24 24"
            animate={{ rotate: abierto ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 w-4 h-4 mr-1 text-white/25 group-hover:text-white/60 transition-colors"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        )}
      </div>

      <AnimatePresence initial={false}>
        {abierto && puesto.detalle && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 pb-1 pl-[3.9rem] md:pl-[4.1rem] pr-3 text-white/50 text-[0.85rem] md:text-[0.9rem] leading-relaxed">
              {puesto.detalle}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export function Experiencia() {
  const [todo, setTodo] = useState(false);
  const restantes = EXPERIENCIA.length - VISIBLES;
  const recortado = !todo && restantes > 0;

  return (
    <section>
      <Titulo>Experiencia</Titulo>

      <Marco>
        <div className="flex flex-col gap-2">
          {(todo ? EXPERIENCIA : EXPERIENCIA.slice(0, VISIBLES + 1)).map(p => (
            <FilaPuesto key={p.empresa} puesto={p} />
          ))}
        </div>

        {/* El corte no se apaga a negro: se desenfoca. La última fila queda
            legible pero fuera de foco, que insinúa que hay más sin ocultarlo. */}
        {recortado && (
          <GradualBlur
            target="parent"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential
            opacity={1}
          />
        )}

        {restantes > 0 && (
          <div
            className={
              recortado
                ? 'absolute inset-x-0 bottom-3 z-[1001] flex justify-center pointer-events-none'
                : 'mt-2 flex justify-center'
            }
          >
            <button
              type="button"
              onClick={() => setTodo(t => !t)}
              className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full
                         text-white/80 text-[0.9rem] hover:text-white transition-colors"
            >
              {todo ? 'Mostrar menos' : `Mostrar ${restantes} más`}
              <motion.svg
                viewBox="0 0 24 24"
                animate={{ rotate: todo ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
          </div>
        )}
      </Marco>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Educación                                                          */
/* ------------------------------------------------------------------ */

function FilaEstudio({ estudio }: { estudio: Estudio }) {
  return (
    <div className={`${FILA} px-3 py-3 md:px-4 md:py-3.5 cursor-default`}>
      <div className="flex items-center gap-3.5 md:gap-4">
        <Placa icono={estudio.icono} inicial={estudio.inicial} alt={estudio.institucion} />
        <Encabezado
          titulo={estudio.institucion}
          sub={estudio.titulo}
          periodo={estudio.periodo}
        />
      </div>
    </div>
  );
}

export function Educacion() {
  return (
    <section>
      <Titulo>Educación</Titulo>
      <Marco>
        <div className="flex flex-col gap-2">
          {EDUCACION.map(e => (
            <FilaEstudio key={e.institucion + e.titulo} estudio={e} />
          ))}
        </div>
      </Marco>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Lo que hago                                                        */
/* ------------------------------------------------------------------ */

export function LoQueHago() {
  return (
    <section>
      <Titulo>Lo que hago</Titulo>
      <div className="flex flex-wrap gap-2">
        {LO_QUE_HAGO.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.035, 0.4) }}
            className="px-4 py-2.5 rounded-2xl bg-white/[0.035] text-white/75
                       text-[0.85rem] md:text-[0.92rem]
                       transition-colors duration-300
                       hover:bg-white/[0.09] hover:text-white
                       cursor-default select-none"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
