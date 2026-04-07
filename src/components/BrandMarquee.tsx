import { motion } from 'motion/react';
import Frame163939 from '../imports/Frame163939';

export function BrandMarquee() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-[#0B0B0B] border-b border-white/5">
      <div className="mb-12 text-center">
        <p className="text-xs md:text-sm text-white/30 tracking-wider uppercase font-light">
          Marcas que han confiado en mi trabajo
        </p>
      </div>
      
      <div className="relative w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        
        {/* Animated marquee container */}
        <div className="flex">
          {/* First set of logos */}
          <motion.div
            animate={{
              x: [0, -1200]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
            className="flex items-center shrink-0"
          >
            <Frame163939 />
          </motion.div>
          
          {/* Duplicate for seamless loop */}
          <motion.div
            animate={{
              x: [0, -1200]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
            className="flex items-center shrink-0"
          >
            <Frame163939 />
          </motion.div>
          
          {/* Third copy for extra smoothness */}
          <motion.div
            animate={{
              x: [0, -1200]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
            className="flex items-center shrink-0"
          >
            <Frame163939 />
          </motion.div>
        </div>
      </div>
    </section>
  );
}