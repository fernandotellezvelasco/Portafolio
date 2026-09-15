import { useEffect, useState } from 'react';
import { motion, LayoutGroup } from 'motion/react';
import { Mail, Instagram, Facebook, Linkedin, Phone, ArrowRight } from 'lucide-react';
import Antigravity from './Antigravity/Antigravity';
import { BotonCorreo } from './contacto/BotonCorreo';

/**
 * CONTACTO
 *
 * Fondo blanco con el campo de partículas en negro, como en
 * antigravity.google, y sobre él la tarjeta oscura: la inversión de valores
 * hace que la tarjeta sea lo primero que el ojo encuentra.
 *
 * Dentro de la tarjeta, una iluminación en la parte superior — dos focos que
 * se solapan, uno frío y uno cálido, recortados con una elipse.
 */

/** Condiciones del entorno que cambian cómo se dibuja el fondo */
function useEntorno() {
  const [entorno, setEntorno] = useState({ movil: false, reducido: false });

  useEffect(() => {
    const consulta = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revisar = () =>
      setEntorno({ movil: window.innerWidth < 768, reducido: consulta.matches });

    revisar();
    window.addEventListener('resize', revisar);
    consulta.addEventListener('change', revisar);
    return () => {
      window.removeEventListener('resize', revisar);
      consulta.removeEventListener('change', revisar);
    };
  }, []);

  return entorno;
}

const CORREO = 'fernandotellezvelasco@gmail.com';
const TELEFONO = '55 5818 1905';

/** Partículas en negro: sobre el blanco leen como tinta salpicada */
const COLOR_PARTICULA = '#0B0B0B';

const REDES = [
  { nombre: 'Correo', href: `mailto:${CORREO}`, Icono: Mail },
  {
    nombre: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luis-fernando-tellez-velasco-492a13281',
    Icono: Linkedin,
  },
  {
    nombre: 'Instagram',
    href: 'https://www.instagram.com/fer_tellez_v/?igsh=bWl5N3JhOXN4M3Yz&utm_source=qr',
    Icono: Instagram,
  },
  {
    nombre: 'Facebook',
    href: 'https://www.facebook.com/fernando.tellezvelasco?locale=es_LA',
    Icono: Facebook,
  },
];

/* La iluminación se recorta con esta elipse: nítida en el centro y
   desvaneciéndose hacia los bordes, para que no se vea el corte del degradado. */
const MASCARA_LUZ =
  'radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)';

export function Contact() {
  const { movil, reducido } = useEntorno();
  const anio = new Date().getFullYear();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Campo de partículas: decorativo.
          - `aria-hidden` y sin eventos de puntero en móvil: sin cursor el campo
            magnético no aporta nada, y una capa a pantalla completa con
            manejadores de puntero puede tragarse el gesto de scroll.
          - No se dibuja con "reducir movimiento": la pauta WCAG 2.2.2 exige
            poder detener el contenido en movimiento continuo. */}
      {!reducido && (
        <div
          className={`absolute inset-0 z-0 ${movil ? 'pointer-events-none' : ''}`}
          aria-hidden="true"
        >
          <Antigravity
            count={movil ? 150 : 300}
            magnetRadius={10}
            ringRadius={12}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={movil ? 0.55 : 0.8}
            lerpSpeed={0.05}
            color={COLOR_PARTICULA}
            autoAnimate={true}
            particleVariance={1}
            depthFactor={0}
            pulseSpeed={1.1}
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[1100px]"
      >
        {/* Marco exterior: un borde finísimo con relleno, que es lo que da la
            sensación de placa montada y no de rectángulo dibujado. */}
        <div className="relative w-full overflow-hidden rounded-[2rem] border border-black/10 bg-[#0B0B0B] p-1.5 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
          <div className="relative w-full overflow-hidden rounded-[1.6rem] bg-[#0A0A0A]">
            {/* Iluminación superior, recortada con la elipse */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{ WebkitMaskImage: MASCARA_LUZ, maskImage: MASCARA_LUZ }}
            >
              {/* Dos focos que se solapan: uno frío arriba a la izquierda y
                  uno cálido a la derecha, que es la mezcla que hace el shader
                  del repositorio (un tono azulado contra uno anaranjado). */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(85% 70% at 20% -12%, rgba(120,150,255,0.30) 0%, rgba(90,110,200,0.14) 34%, transparent 68%)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(70% 60% at 82% -6%, rgba(255,160,120,0.20) 0%, rgba(200,110,90,0.08) 40%, transparent 72%)',
                }}
              />
              <div
                className="absolute inset-x-0 top-0 h-[48%]"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0) 100%)',
                }}
              />
            </div>

            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-8 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-8">
              {/* Invitación y acciones */}
              <div className="flex flex-col gap-5 justify-center">
                <h2 className="text-white text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-medium leading-[1.05] tracking-tight">
                  Conectemos
                </h2>

                <p className="max-w-[30ch] text-white/60 text-[1.05rem] sm:text-[1.3rem] leading-[1.4] tracking-tight mb-4">
                  Siempre estoy abierto a hablar sobre nuevos proyectos, ideas creativas
                  u oportunidades para formar parte de tus visiones.
                </p>

                {/* LayoutGroup: cuando el botón del correo se ensancha, el de
                    al lado se aparta con la misma curva en vez de saltar. */}
                <LayoutGroup>
                  <motion.div
                    layout
                    transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
                    className="mt-2 flex flex-wrap items-center gap-3"
                  >
                    <BotonCorreo correo={CORREO} />

                    <motion.div
                      layout
                      transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
                    >
                      <a
                        href="#work"
                        className="group inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl
                                   border border-white/15 bg-white/[0.04] px-5 text-sm font-medium
                                   text-white/85 transition-colors hover:border-white/35 hover:text-white"
                      >
                        Ver proyectos
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </motion.div>
                  </motion.div>
                </LayoutGroup>
              </div>

              {/* Panel de vías de contacto */}
              <div className="flex flex-col items-center justify-center gap-6 rounded-[1.1rem] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  {REDES.map(({ nombre, href, Icono }) => (
                    <a
                      key={nombre}
                      href={href}
                      {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      aria-label={nombre}
                      title={nombre}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl
                                 border border-white/[0.09] bg-white/[0.03] text-white/65
                                 transition-colors hover:border-white/30 hover:text-white"
                    >
                      <Icono className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                    </a>
                  ))}
                </div>

                <a
                  href={`tel:+52${TELEFONO.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 py-1.5 text-white/75
                             text-[0.95rem] transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {TELEFONO}
                </a>

                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-[13px] tracking-tight text-white/60">
                    {anio} © Fernando Téllez
                  </p>
                  <p className="text-[12px] tracking-tight text-white/35">
                    Ciudad de México
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
