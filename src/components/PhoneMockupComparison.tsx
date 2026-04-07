import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import imgBefore from "figma:asset/89575b525b6d114f604dffeb349b46d9a95f24c4.png";
import imgAfter from "figma:asset/0f3f91dcb0fb162e41b89a3c5a4115c4959aa1b7.png";
import imgBefore2 from "figma:asset/72a8229102e35d264525de8b65adba5820637ae8.png";
import imgAfter2 from "figma:asset/c737561f16d3aa93b53e1f3a899429ed09e241e7.png";
import imgBefore3 from "figma:asset/54bf89f9a55c123725d57e13378d10d1bf147ad8.png";
import imgAfter3 from "figma:asset/8571ff328df80493a916ae7901652ac9d67b74bc.png";
import imgWebBefore from "figma:asset/7d6cd09e798c62b3df97c29e5865664989faaf49.png";
import imgWebAfter from "figma:asset/fde052730caf12fcae0fa9113fed84a5b35b15a0.png";
import imgTabbarBefore from "figma:asset/d2292a30d5f86f7bec0fdca55566f426b4250b92.png";
import imgTabbarAfter from "figma:asset/8e2fb3f7765b1b45a1f21c7ad86c879c9616e0e4.png";
import imgBegoMockups from "figma:asset/b0a74d983f855f1ff22c27b5b6930bc537e64178.png";

const slides = [
  {
    before: imgTabbarBefore,
    after: imgTabbarAfter,
    title: "Tabbar"
  },
  {
    before: imgBefore,
    after: imgAfter,
    title: "Historial de Viajes"
  },
  {
    before: imgBefore2,
    after: imgAfter2,
    title: "Detalle de Orden"
  },
  {
    before: imgBefore3,
    after: imgAfter3,
    title: "Edición de Perfil"
  }
];

const webSlides = [
    {
        image: imgWebBefore,
        label: "Antes",
        title: "Landing Page - Antes"
    },
    {
        image: imgWebAfter,
        label: "Después",
        title: "Landing Page - Después"
    }
];

export function PhoneMockupComparison({ isBegoWeb = false }: { isBegoWeb?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Determine which data source to use
  const activeSlides = isBegoWeb ? webSlides : slides;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <div className="w-full py-16 relative group/carousel">
      {/* Navigation Buttons - Always show if more than 1 slide */}
      {activeSlides.length > 1 && (
        <>
            <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-50">
                <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-[#FFEE00] text-white hover:text-black transition-all backdrop-blur-md border border-white/10 hover:scale-110 shadow-lg cursor-pointer"
                >
                <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
            
            <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-50">
                <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-[#FFEE00] text-white hover:text-black transition-all backdrop-blur-md border border-white/10 hover:scale-110 shadow-lg cursor-pointer"
                >
                <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </>
      )}

      {/* Slide Title */}
      <div className="text-center mb-8">
        <span className="text-white/40 text-sm uppercase tracking-widest font-medium">Comparativa de {isBegoWeb ? 'Web' : 'Pantallas'}</span>
        <h3 className="text-2xl font-bold text-white mt-2 text-[40px]">
            {activeSlides[currentIndex].title}
        </h3>
      </div>

      {/* Slides Container */}
      <div className="overflow-hidden px-4 md:px-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex flex-col items-center justify-center ${isBegoWeb ? '' : 'md:flex-row gap-12 md:gap-24'}`}
          >
            {isBegoWeb ? (
                 <div className="w-full max-w-4xl px-4">
                    <MockupDesktop 
                        image={activeSlides[currentIndex].image} 
                        label={activeSlides[currentIndex].label} 
                        delay={0}
                        isAfter={activeSlides[currentIndex].label === 'Después'}
                    />
                 </div>
            ) : (
                <>
                    {/* Before */}
                    <MockupPhone image={slides[currentIndex].before} label="Antes" delay={0} />
                    
                    {/* After */}
                    <MockupPhone image={slides[currentIndex].after} label="Después" delay={0.1} isAfter />
                </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {activeSlides.map((_, idx) => (
            <button
                key={idx}
                onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${idx === currentIndex ? 'bg-[#FFEE00] w-8' : 'bg-white/20 hover:bg-white/40'}`}
            />
        ))}
      </div>
      
      {/* Additional Mockups Image - Only for Bego App */}
      {!isBegoWeb && (
        <div className="mt-16">
          <ImageWithFallback 
            src={imgBegoMockups} 
            alt="Bego App Mockups" 
            className="w-full h-auto rounded-2xl" 
          />
        </div>
      )}
    </div>
  );
}

export function MockupPhone({ image, label, delay, isAfter = false, accentColor = '#FFEE00', children }: { image?: string, label: string, delay: number, isAfter?: boolean, accentColor?: string, children?: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Tilt effect range
  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative z-10"
    >
      <div className="text-center mb-8 pointer-events-none">
        <span 
            className={`inline-block px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase ${isAfter ? 'text-black' : 'bg-white/10 text-white/50 border border-white/5'}`}
            style={isAfter ? { backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}4D` } : undefined}
        >
            {label}
        </span>
      </div>
      
      {/* Interactive Tilt Container */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200 }}
        className="cursor-pointer"
      >
        <motion.div
            style={{ 
                rotateX: rotateXSpring, 
                rotateY: rotateYSpring,
                transformStyle: "preserve-3d" 
            }}
        >
            {/* Floating Animation */}
            <motion.div 
                className="relative w-[280px] h-[580px] bg-[#050505] rounded-[3rem] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden ring-1 ring-white/10"
                style={{ 
                    boxShadow: isAfter 
                        ? `0 30px 60px -15px ${accentColor}1A, 0 0 0 1px rgba(255,255,255,0.05)` 
                        : '0 30px 60px -15px rgba(0, 0, 0, 0.8)' 
                }}
            >

                
                {/* Side Buttons */}
                <div className="absolute top-24 -left-[8px] w-[2px] h-8 bg-[#333] rounded-l-md"></div>
                <div className="absolute top-36 -left-[8px] w-[2px] h-12 bg-[#333] rounded-l-md"></div>
                <div className="absolute top-28 -right-[8px] w-[2px] h-16 bg-[#333] rounded-r-md"></div>

                {/* Screen Content */}
                <div className="w-full h-full bg-gray-900 relative">
                    {children ? (
                        <div className="w-full h-full relative overflow-hidden bg-white">
                             <div className="absolute top-0 left-0 w-[430px] h-[932px] origin-top-left scale-[0.651]">
                                 {children}
                             </div>
                        </div>
                    ) : (
                        <ImageWithFallback src={image || ''} alt={label} className="w-full h-full object-cover object-top" />
                    )}
                    
                    {/* Screen Reflections */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-20 opacity-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none z-20"></div>
                </div>
            </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Floor Shadow */}
      <motion.div 
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[180px] h-4 bg-black/50 blur-xl rounded-[100%] pointer-events-none opacity-40"
      ></motion.div>
    </motion.div>
  )
}

export function MockupDesktop({ image, label, delay, isAfter = false, accentColor = '#FFEE00', children, interactive = true }: { image?: string, label: string, delay: number, isAfter?: boolean, accentColor?: string, children?: React.ReactNode, interactive?: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-150, 150], [5, -5]);
  const rotateY = useTransform(x, [-250, 250], [-5, 5]);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative z-10 w-full flex flex-col items-center"
    >
      <div className="text-center mb-8 pointer-events-none">
        <span 
            className={`inline-block px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase ${isAfter ? 'text-black shadow-lg' : 'bg-white/10 text-white/50 border border-white/5'}`}
            style={isAfter ? { backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}4D` } : undefined}
        >
            {label}
        </span>
      </div>
      
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200 }}
        className={`w-full ${interactive ? 'cursor-pointer' : ''}`}
      >
        <motion.div
            style={{ 
                rotateX: interactive ? rotateXSpring : 0, 
                rotateY: interactive ? rotateYSpring : 0,
                transformStyle: "preserve-3d" 
            }}
            className="w-full flex justify-center"
        >
            <motion.div 
                className="relative w-full aspect-[16/10] bg-[#050505] rounded-[1rem] border-[1px] border-[#333] shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col"
                style={{ 
                    boxShadow: isAfter 
                        ? `0 30px 60px -15px ${accentColor}1A, 0 0 0 1px rgba(255,255,255,0.05)` 
                        : '0 30px 60px -15px rgba(0, 0, 0, 0.8)' 
                }}
            >
                {/* Browser Toolbar */}
                <div className="h-8 bg-[#111] border-b border-[#222] flex items-center px-4 gap-2 z-20 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    <div className="ml-4 flex-1 h-5 bg-[#222] rounded-md opacity-50 flex items-center px-2">
                        <div className="w-full h-1 bg-white/10 rounded-full"></div>
                    </div>
                </div>

                {/* Screen Content */}
                <div className="w-full flex-1 bg-gray-900 relative overflow-hidden group">
                    {children ? (
                        <div 
                            className={`w-full h-full relative ${interactive ? 'overflow-y-auto' : 'overflow-hidden'}`}
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                             {!interactive ? (
                                <motion.div
                                    animate={{ y: ["0%", "-85%"] }}
                                    transition={{ 
                                        duration: 20, 
                                        ease: "linear", 
                                        repeat: Infinity, 
                                        repeatType: "mirror",
                                        delay: 1 
                                    }}
                                    className="w-full"
                                >
                                    {children}
                                </motion.div>
                             ) : (
                                children
                             )}
                             <style>{`
                                .w-full.h-full.relative.overflow-y-auto::-webkit-scrollbar {
                                  display: none;
                                }
                             `}</style>
                        </div>
                    ) : (
                        <ImageWithFallback src={image || ''} alt={label} className="w-full h-full object-cover object-top" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
            </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Floor Shadow */}
      <motion.div 
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/50 blur-2xl rounded-[100%] pointer-events-none opacity-30"
      ></motion.div>
    </motion.div>
  )
}