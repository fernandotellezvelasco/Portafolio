import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { IconoObra } from './iconos/porsche';
import './porsche-claro.css';

/**
 * AVISO DE PROYECTO EN OBRA
 *
 * Monocromática, con el icono de relleno a dos tonos de las cards y el
 * resplandor de contorno de las tarjetas de Gobierno. Antes cada variante traía
 * su propio color de marca —rojo para CLARO, amarillo para el resto— y eso
 * hacía que el mismo aviso se viera como dos componentes distintos.
 */

interface InProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  variant?: 'default' | 'claro';
}

export function InProcessModal({
  isOpen,
  onClose,
  onConfirm,
  title = '¡Estamos remodelando!',
  message = 'Este proyecto está en proceso de adaptación al nuevo estilo visual del portafolio. Ya integré la nueva identidad y parte del proceso de diseño, pero algunas secciones siguen en el "taller".\n\n¿Te gustaría ver el avance actual?',
}: InProcessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="pds fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            {/* `animated`: el resplandor recorre el contorno al abrir, que es lo
                que hace que el aviso se note sin necesidad de un color de alerta */}
            <BorderGlow
              edgeSensitivity={28}
              glowColor="0 0 100"
              backgroundColor="#0D0D0D"
              borderRadius={20}
              glowRadius={36}
              glowIntensity={0.85}
              coneSpread={25}
              colors={['#ffffff', '#d4d4d8', '#a1a1aa']}
              fillOpacity={0.3}
              animated
            >
              <div className="relative p-7">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-white/40 transition-colors hover:text-white"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center text-center">
                  <IconoObra className="mb-6 h-[72px] w-auto" />

                  <h3 className="mb-3 text-[1.75rem] font-medium leading-tight text-white">
                    {title}
                  </h3>

                  <p className="mb-8 whitespace-pre-line leading-relaxed text-white/65">
                    {message}
                  </p>

                  <div className="flex w-full gap-3">
                    <button
                      onClick={onClose}
                      className="flex-1 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium
                                 text-white/60 transition-all hover:bg-white/5 hover:text-white"
                    >
                      Mejor luego
                    </button>
                    <button
                      onClick={onConfirm}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5
                                 text-sm font-medium text-[#0B0B0B] transition-all hover:bg-white/90"
                    >
                      Ver adelanto
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
