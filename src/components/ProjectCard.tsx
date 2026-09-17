import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  role: string;
  credits?: string;
  galleryImages?: string[];
  /**
   * Portada alternativa, en vertical, solo para la card del carrusel.
   * Dentro del caso de estudio se sigue usando `image`.
   */
  cardImage?: string;
  /**
   * Cómo encaja la portada dentro de la card del carrusel.
   * 'cover' (por defecto) llena la card recortando lo que sobra.
   * 'contain' muestra la imagen completa sobre un fondo desenfocado: útil
   * cuando la portada es horizontal y se perdería al recortarla.
   */
  coverFit?: 'cover' | 'contain';
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onExplore: () => void;
  onVisible: (index: number) => void;
}

export function ProjectCard({ project, index, onExplore, onVisible }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const isInView = useInView(cardRef, { amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const handleClick = () => {
    if (project.title === 'GRAFICO Y MULTIMEDIA') {
      window.open('https://www.behance.net/gallery/167666943/Portafolio-2023', '_blank');
    } else {
      onExplore();
    }
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="relative h-screen flex items-center justify-center px-4 md:px-8 snap-start z-10 bg-[#0B0B0B]"
      id={`project-${index}`}
    >
      <div
        className="relative w-full max-w-6xl h-[90vh] md:h-[85vh] overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Image with parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(0%)',
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full relative"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className={`w-full h-full ${project.title === 'GRAFICO Y MULTIMEDIA' ? 'object-contain' : 'object-cover'}`}
            />
            {/* Glass effect overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[rgba(0,0,0,0.08)] to-[rgba(0,0,0,0)] via-50% via-[rgba(0,0,0,0.03)]" />
          </motion.div>
        </motion.div>

        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${project.title === 'GRAFICO Y MULTIMEDIA' ? 'bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent' : 'bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent'}`} />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            {/* Index */}
            <div className="mb-3 md:mb-4 opacity-50 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[0.7rem] md:text-[0.875rem]">
              {String(index + 1).padStart(2, '0')} / 05
            </div>

            {/* Title */}
            <h2 className="mb-4 md:mb-6 tracking-tight">
              {project.title}
            </h2>

            {/* Meta information */}
            <div className="mb-6 md:mb-8 space-y-2 opacity-80">
              <div className="flex flex-wrap items-center gap-2 md:gap-3 uppercase tracking-[0.15em] md:tracking-[0.2em] text-[0.7rem] md:text-[0.875rem]">
                <span>
                  {project.title === 'BEGO WEB' 
                    ? 'WEB RESPONSIVO' 
                    : project.title === 'BEGO APP'
                    ? 'APP'
                    : project.title === 'SPRINTIA'
                    ? 'PRODUCTO'
                    : project.title === 'CANDADOS'
                    ? 'SaaS'
                    : project.title === 'HEY MOVIL'
                    ? 'WEB'
                    : project.title === 'CLARO'
                    ? 'Plataformas digitales'
                    : 'PORTAFOLIO'}
                </span>
                <span className="opacity-50">/</span>
                <span>{(project.title === 'BEGO WEB' || project.title === 'BEGO APP' || project.title === 'SPRINTIA' || project.title === 'CANDADOS') ? '2025' : project.title === 'HEY MOVIL' ? '2024' : project.title === 'CLARO' ? '2026' : '2023'}</span>
                <span className="opacity-50">/</span>
                <span>{project.title === 'GRAFICO Y MULTIMEDIA' ? 'GRAFICO Y DEMO REEL' : project.title === 'SPRINTIA' ? 'PRODUCT VISION LEAD Y DESIGNER' : (project.title === 'BEGO APP' || project.title === 'BEGO WEB') ? 'DISEÑADOR UX/UI' : project.title === 'CLARO' ? 'PRODUCT DESIGNER' : project.role}</span>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="group/btn inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 border border-white/30 hover:border-white/60 transition-colors uppercase tracking-[0.15em] md:tracking-[0.2em] text-[0.7rem] md:text-[0.875rem]"
            >
              Explorar
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}