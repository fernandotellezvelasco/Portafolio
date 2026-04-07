import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgButtons from "figma:asset/7a2a6aa77aa9a07a5e675d1ecfca4bdb76960200.png";
import imgCarrierMenu from "figma:asset/b9cf7a9bb4a2095614edca6e430be60f1b4f019e.png";
import imgDropdownCards from "figma:asset/dcb3b705de5caef50bb9ca9ad5e99567af270d21.png";
import imgTextInput from "figma:asset/3621a4a99544af520ef83a191b6cc6b496e71778.png";

export function ComponentsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: imgButtons, title: 'Sistema de Botones y Estados' },
    { image: imgCarrierMenu, title: 'Menú de Navegación Carrier' },
    { image: imgDropdownCards, title: 'Tarjetas y Dropdowns' },
    { image: imgTextInput, title: 'Inputs y Formularios' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative mt-8 mb-16">
      {/* Carousel container */}
      <div className="relative w-full bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5 aspect-[16/9] md:aspect-[21/9]">
        <div className="absolute inset-0">
            <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
            >
                <ImageWithFallback
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-contain"
                />
            </motion.div>
            </AnimatePresence>
        </div>
        
        {/* Background gradient/decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all hover:scale-105 active:scale-95"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide indicators with Title */}
        <div className="flex flex-col items-center gap-3">
            <div className="text-sm font-medium text-white/90 text-center">
                {slides[currentSlide].title}
            </div>
            <div className="flex items-center gap-2">
            {slides.map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                    ? 'w-8 bg-[#FFEE00]' 
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
                />
            ))}
            </div>
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all hover:scale-105 active:scale-95"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
