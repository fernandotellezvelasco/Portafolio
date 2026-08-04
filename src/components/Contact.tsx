import { motion } from 'motion/react';
import { Mail, Instagram, Facebook, Linkedin, Phone, MapPin } from 'lucide-react';
import Antigravity from './Antigravity/Antigravity';

export function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-24 md:py-32 relative overflow-hidden">
      {/* Antigravity background effect */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={6}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.6}
          lerpSpeed={0.05}
          color="#edebf4"
          autoAnimate={true}
          particleVariance={1}
          depthFactor={1.3}
          fieldStrength={16.7}
        />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <div className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-3 md:mb-4 uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-50 text-[0.75rem] md:text-[0.875rem]"
            >
              Contacto
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="tracking-tight"
            >
              Trabajemos juntos
            </motion.h1>
          </div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 md:mb-16 space-y-8 md:space-y-12"
          >
            <div>
              <div className="mb-3 md:mb-4 uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 text-[0.75rem] md:text-[0.875rem]">
                Email
              </div>
              <a
                href="mailto:hello@sprintia.com"
                className="inline-flex items-center gap-2 md:gap-3 hover:opacity-70 transition-opacity group text-[0.875rem] md:text-[1rem]"
              >
                <Mail size={20} className="md:w-6 md:h-6" />
                <span>fernandotellezvelasco@gmail.com</span>
              </a>
            </div>

            <div>
              <div className="mb-3 md:mb-4 uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 text-[0.75rem] md:text-[0.875rem]">
                Teléfono
              </div>
              <a
                href="tel:+525558181905"
                className="inline-flex items-center gap-2 md:gap-3 hover:opacity-70 transition-opacity group text-[0.875rem] md:text-[1rem]"
              >
                <Phone size={20} className="md:w-6 md:h-6" />
                <span>55 5818 1905</span>
              </a>
            </div>

            <div>
              <div className="mb-3 md:mb-4 uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 text-[0.75rem] md:text-[0.875rem]">
                Ubicación
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-start gap-2 md:gap-3 text-[0.875rem] md:text-[1rem]">
                  <MapPin size={20} className="md:w-6 md:h-6 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Farmaseuticos 312</p>
                    <p className="opacity-70">Colonia Sifón, Iztapalapa</p>
                    <p className="opacity-70">Ciudad de México</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 md:mb-4 uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 text-[0.75rem] md:text-[0.875rem]">
                Consultas Generales
              </div>
              <p className="opacity-80 leading-relaxed max-w-2xl text-[0.875rem] md:text-[1rem]">
                ¿Tienes un proyecto en mente? Me encantaría conocer los detalles. Envíame un email y te responderé en 24 horas.
              </p>
            </div>

            <div>
              <div className="mb-3 md:mb-4 uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 text-[0.75rem] md:text-[0.875rem]">
                Nuevos Negocios
              </div>
              <p className="opacity-80 leading-relaxed max-w-2xl text-[0.875rem] md:text-[1rem]">
                Para oportunidades de asociación y colaboración, contáctame directamente.
                Siempre estoy interesado en trabajar con equipos apasionados.
              </p>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-12 md:pt-16 border-t border-white/10"
          >
            <div className="mb-4 md:mb-6 uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 text-[0.75rem] md:text-[0.875rem]">
              Síguenos
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="https://www.instagram.com/fer_tellez_v/?igsh=bWl5N3JhOXN4M3Yz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 border border-white/30 hover:border-white/60 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 border border-white/30 hover:border-white/60 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-fernando-tellez-velasco-492a13281"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 border border-white/30 hover:border-white/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}