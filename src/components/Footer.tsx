import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 md:px-8 py-8 md:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-50 text-[0.7rem] md:text-[0.875rem]"
          >
            Portafolio
          </motion.div>

          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 md:gap-6 opacity-50 text-[0.7rem] md:text-[0.875rem]"
          >
            <a
              href="#"
              className="uppercase tracking-[0.15em] md:tracking-[0.2em] hover:opacity-100 transition-opacity"
            >
              Cookies
            </a>
            <span>/</span>
            <a
              href="#"
              className="uppercase tracking-[0.15em] md:tracking-[0.2em] hover:opacity-100 transition-opacity"
            >
              Términos
            </a>
            <span>/</span>
            <a
              href="#"
              className="uppercase tracking-[0.15em] md:tracking-[0.2em] hover:opacity-100 transition-opacity"
            >
              Privacidad
            </a>
          </motion.div>

          {/* Copyright & Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 md:gap-6 opacity-50 text-[0.7rem] md:text-[0.875rem]"
          >
            <span className="uppercase tracking-[0.15em] md:tracking-[0.2em]">
              © {currentYear}
            </span>
            <span>/</span>
            <a
              href="mailto:hello@portafolio.com"
              className="uppercase tracking-[0.15em] md:tracking-[0.2em] hover:opacity-100 transition-opacity"
            >
              Escríbenos
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
