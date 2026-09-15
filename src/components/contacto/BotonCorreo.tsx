import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Mail } from 'lucide-react';

/**
 * Botón de contacto con la microinteracción del sitio de referencia.
 *
 * En reposo dice "Contacto". Al pasar el cursor —o al recibir el foco por
 * teclado— el botón se ensancha y revela el correo, con las dos etiquetas
 * cruzándose mediante desenfoque en vez de un corte seco. Al pulsarlo copia
 * la dirección y el icono cambia de "copiar" a "listo".
 *
 * El ensanchado es `layout` de Motion: el botón de al lado se aparta solo,
 * sin que nadie calcule anchos.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export function BotonCorreo({ correo }: { correo: string }) {
  const [abierto, setAbierto] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    const avisar = () => {
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 1600);
    };

    try {
      await navigator.clipboard.writeText(correo);
      avisar();
    } catch {
      /* Safari sin permiso de portapapeles y navegadores viejos: el truco del
         textarea oculto sigue funcionando donde la API moderna no. */
      const ta = document.createElement('textarea');
      ta.value = correo;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        avisar();
      } catch {
        /* Si tampoco se puede, el correo igual quedó visible para copiarlo a mano */
      }
      document.body.removeChild(ta);
    }
  };

  return (
    <motion.button
      type="button"
      layout
      onClick={copiar}
      onHoverStart={() => setAbierto(true)}
      onHoverEnd={() => setAbierto(false)}
      onFocus={() => setAbierto(true)}
      onBlur={() => setAbierto(false)}
      aria-label={
        copiado ? 'Correo copiado' : abierto ? `Copiar ${correo}` : 'Mostrar el correo'
      }
      transition={{ layout: { duration: 0.55, ease: EASE } }}
      style={{ borderRadius: 12 }}
      className="relative inline-flex h-11 cursor-pointer items-center justify-center
                 bg-white px-5 text-sm font-medium text-[#0B0B0B]
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <motion.span layout="position" className="relative inline-flex items-center">
        <AnimatePresence initial={false} mode="popLayout">
          {abierto ? (
            <motion.span
              key="correo"
              layout="position"
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
                <AnimatePresence initial={false} mode="wait">
                  {copiado ? (
                    <motion.span
                      key="listo"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="inline-flex"
                    >
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copiar"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="inline-flex"
                    >
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              <span className="tabular-nums">{correo}</span>
            </motion.span>
          ) : (
            <motion.span
              key="contacto"
              layout="position"
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Contacto</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>

      {/* Aviso para lectores de pantalla: el cambio de icono no les llega */}
      <span className="sr-only" role="status" aria-live="polite">
        {copiado ? 'Correo copiado al portapapeles' : ''}
      </span>
    </motion.button>
  );
}
