import { useState } from 'react';
import { ChevronLeft, ChevronRight, Target, AlertCircle, FileSearch, Lightbulb, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BegoEmpathyMap } from './BegoEmpathyMap';
import imgSlide1Bego from "figma:asset/a40b7806335c894d7302a87bc913ebb78b77a50a.png";
import imgSlide1Sprintia from "figma:asset/921d4efa2d83a5b540be51580f0178545fc9948e.png";
import imgSlide2 from "figma:asset/25637e0cb0dbd2afb4707f7dcc8ecb81975cc5f9.png";
import imgSlide3 from "figma:asset/8cdb7c3f047f344e93ea45c0030af5a486f0acd7.png";
import imgSlide4 from "figma:asset/964003c862c1d2e37957e84d85b3636d4ed9458c.png";
import imgSlide5 from "figma:asset/5481be1354d293120bafdc7b47b0c1fab6b069ae.png";
import imgSlide6 from "figma:asset/9557bf5eb62c93e5fe6d1146066577b0386e1022.png";
import imgSlide7 from "figma:asset/28761d91227a743b2a29827358c7579a5764500f.png";
import imgSlide8 from "figma:asset/7b4e848651ce330d296e0f2e1dd270442993736e.png";
import imgSlide9 from "figma:asset/66f6bee293b021a3849c82668add3bc49cb82af1.png";
import imgSlide10 from "figma:asset/7dc4b667926bf1e9140999128f31cad498d73c19.png";

interface ResearchCarouselProps {
  isBegoApp?: boolean;
  isSprintia?: boolean;
  isHeyMovil?: boolean;
}

export function ResearchCarousel({ isBegoApp = false, isSprintia = false, isHeyMovil = false }: ResearchCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // HeyMovil Text Slides
  const heyMovilData = [
    {
      icon: Target,
      title: 'Objetivo de Investigación',
      content: 'Comprender las dinámicas de contratación y gestión de telefonía móvil en el sector B2B (PyMEs) para identificar oportunidades de digitalización.',
      highlight: 'Gestión B2B y Autogestión'
    },
    {
      icon: FileSearch,
      title: 'Metodología',
      content: 'Investigación cualitativa mediante entrevistas a profundidad con 8 tomadores de decisiones (Gerentes administrativos). Análisis de competencia directa e indirecta.',
      highlight: 'Entrevistas a profundidad'
    },
    {
      icon: Lightbulb,
      title: 'Hallazgos Clave',
      content: 'El 80% de los usuarios B2B sienten que las gestiones actuales son lentas y dependen demasiado de ejecutivos. Valoran la transparencia en facturación.',
      highlight: 'Dependencia y Transparencia'
    },
    {
       icon: CheckCircle2,
       title: 'Oportunidad',
       content: 'Desarrollar una plataforma de autogestión que permita a los administradores controlar líneas, facturas y reportes sin intermediarios humanos.',
       highlight: 'Plataforma de Autogestión'
    }
  ];

  // Sprintia Text Slides
  const sprintiaData = [
    {
      icon: Target,
      title: 'Objetivo',
      content: 'Para el desarrollo de Sprintia, se llevó a cabo una fase de UX Research con el objetivo de comprender a profundidad las necesidades, frustraciones y comportamientos de los jugadores, equipos y ligas de fútbol amateur.',
      highlight: 'Comprender necesidades reales'
    },
    {
      icon: AlertCircle,
      title: 'Problemática',
      content: 'La investigación se centró en identificar los principales problemas del ecosistema: dificultad para encontrar equipos confiables, falta de transparencia en la reputación y alta incidencia de conflictos en ligas amateurs.',
      highlight: 'Falta de transparencia y conflictos'
    },
    {
      icon: FileSearch,
      title: 'Metodología',
      content: 'Se utilizaron métodos cualitativos y cuantitativos:\n• Entrevistas con jugadores y dueños.\n• Encuestas de comportamiento.\n• Análisis de plataformas actuales.\n• Benchmarking de soluciones similares.',
      highlight: 'Enfoque mixto: Cualitativo y Cuantitativo'
    },
    {
      icon: Lightbulb,
      title: 'Hallazgos',
      content: 'Los usuarios buscan confianza, claridad y rapidez al integrarse a un equipo. Necesitan herramientas para evaluar el comportamiento y nivel deportivo de otros participantes antes de jugar.',
      highlight: 'Confianza y Evaluación previa'
    },
    {
      icon: CheckCircle2,
      title: 'Solución',
      content: 'Se definieron los pilares del producto: sistema de reputación tipo FIFA, matchmaking inteligente y segmentación por roles. Estos resultados guiaron el diseño UX enfocado en mejorar la convivencia.',
      highlight: 'Reputación y Matchmaking'
    }
  ];

  // Default Image Slides
  const imageSlides = [
    { image: isBegoApp ? imgSlide1Bego : imgSlide1Sprintia, title: 'Research UX/UI Driver' },
    { image: imgSlide2, title: 'Objetivos y método' },
    { image: imgSlide3, title: 'Panorama digital en México' },
    { image: imgSlide4, title: 'Adopción Digital México' },
    { image: imgSlide5, title: 'Manager - Datos' },
    { image: imgSlide6, title: 'Persona Operador - Datos' },
    { image: imgSlide7, title: 'Recomendaciones de diseño' },
    { image: imgSlide8, title: 'Journey del Operador' },
    { image: imgSlide9, title: 'Métricas UX/Producto sugeridas' },
    { image: imgSlide10, title: 'Siguientes pasos de research' }
  ];

  const activeSlides = isSprintia ? sprintiaData : isHeyMovil ? heyMovilData : imageSlides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  return (
    <div className="relative mt-8 md:mt-12">
      {/* Carousel container */}
      <div 
        className={`relative w-full bg-[#181818] rounded-lg overflow-hidden border border-white/5 ${isSprintia || isHeyMovil ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[1920/1328]'}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {isSprintia || isHeyMovil ? (
                // Sprintia/HeyMovil Text Layout
                <div className="w-full h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 relative">
                    {/* Background Accents */}
                    <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full pointer-events-none ${isHeyMovil ? 'bg-[#FFEE00]/5' : 'bg-[springgreen]/5'}`}></div>
                    <div className={`absolute bottom-0 left-0 w-48 h-48 blur-[80px] rounded-full pointer-events-none ${isHeyMovil ? 'bg-[#FFEE00]/5' : 'bg-[springgreen]/5'}`}></div>
                    
                    <div className="relative z-10 max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            {(() => {
                                const Icon = (activeSlides[currentSlide] as typeof sprintiaData[0]).icon;
                                return <Icon className={`w-6 h-6 ${isHeyMovil ? 'text-[#FFEE00]' : 'text-[springgreen]'}`} />;
                            })()}
                            <h3 className={`text-sm font-bold uppercase tracking-widest font-[Montserrat] ${isHeyMovil ? 'text-[#FFEE00]' : 'text-[springgreen]'}`}>
                                {(activeSlides[currentSlide] as typeof sprintiaData[0]).title}
                            </h3>
                        </div>
                        
                        <div className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed mb-8 font-[Montserrat]">
                            {/* Handle content with newlines for bullet points */}
                            {(activeSlides[currentSlide] as typeof sprintiaData[0]).content.split('\n').map((line, i) => (
                                <span key={i} className="block mb-2">
                                    {line}
                                </span>
                            ))}
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                            <div className={`w-1.5 h-1.5 rounded-full ${isHeyMovil ? 'bg-[#FFEE00]' : 'bg-[springgreen]'}`}></div>
                            <span className="text-xs md:text-sm text-white/60 font-[Montserrat]">
                                {(activeSlides[currentSlide] as typeof sprintiaData[0]).highlight}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                // Image Layout
                (isBegoApp && currentSlide === 3) ? (
                    <div className="w-full h-full overflow-y-auto px-4 md:px-12 pb-12">
                        <BegoEmpathyMap />
                    </div>
                ) : (
                    <ImageWithFallback
                      src={(activeSlides[currentSlide] as typeof imageSlides[0]).image}
                      alt={(activeSlides[currentSlide] as typeof imageSlides[0]).title}
                      className="w-full h-full object-cover"
                    />
                )
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-6 md:mt-8">
        <button
          onClick={prevSlide}
          className="p-2 md:p-3 hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed group"
          disabled={currentSlide === 0}
          aria-label="Anterior"
        >
          <ChevronLeft className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${isSprintia || isHeyMovil ? `text-white/50 ${isHeyMovil ? 'group-hover:text-[#FFEE00]' : 'group-hover:text-[springgreen]'}` : 'text-white'}`} />
        </button>

        {/* Slide indicators */}
        <div className="flex items-center gap-2 md:gap-3">
          {activeSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? `w-8 md:w-10 ${(isSprintia || isHeyMovil) ? (isHeyMovil ? 'bg-[#FFEE00]' : 'bg-[springgreen]') : 'bg-white'}`
                  : `w-1.5 md:w-2 ${(isSprintia || isHeyMovil) ? 'bg-white/20 hover:bg-white/40' : 'bg-white/30 hover:bg-white/50'}`
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 md:p-3 hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed group"
          disabled={currentSlide === activeSlides.length - 1}
          aria-label="Siguiente"
        >
          <ChevronRight className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${isSprintia || isHeyMovil ? `text-white/50 ${isHeyMovil ? 'group-hover:text-[#FFEE00]' : 'group-hover:text-[springgreen]'}` : 'text-white'}`} />
        </button>
      </div>

      {/* Slide counter */}
      <div className={`text-center mt-4 md:mt-5 opacity-40 text-[0.75rem] md:text-[0.875rem] font-mono ${(isSprintia || isHeyMovil) ? (isHeyMovil ? 'text-[#FFEE00]' : 'text-[springgreen]') : 'text-white'}`}>
        {currentSlide + 1} / {activeSlides.length}
      </div>
    </div>
  );
}
