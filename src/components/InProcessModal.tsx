import { motion, AnimatePresence } from 'motion/react';
import { Construction, ArrowRight, X } from 'lucide-react';

interface InProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function InProcessModal({ isOpen, onClose, onConfirm }: InProcessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
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
            className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFEE00]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors z-10"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FFEE00]/10 rounded-full flex items-center justify-center mb-6 border border-[#FFEE00]/20">
                    <Construction className="w-8 h-8 text-[#FFEE00]" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 text-[36px]">
                    ¡Estamos remodelando!
                </h3>
                
                <p className="text-white/70 mb-8 leading-relaxed">
                    Este proyecto está en proceso de adaptación al nuevo estilo visual del portafolio. Ya integré la nueva identidad y parte del proceso de diseño, pero algunas secciones siguen en el "taller".
                    <br/><br/>
                    ¿Te gustaría ver el avance actual?
                </p>
                
                <div className="flex gap-3 w-full">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all font-medium text-sm"
                    >
                        Mejor luego
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-3 px-4 rounded-xl bg-[#FFEE00] text-black font-bold hover:bg-[#FFEE00]/90 transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#FFEE00]/10"
                    >
                        Ver adelanto
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
