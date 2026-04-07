import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, MousePointerClick, CheckCircle, Smartphone, ChevronLeft, ChevronRight, BarChart3, Layers, Zap } from 'lucide-react';

export interface HeatmapSlide {
  id: string;
  image: string;
  label: string;
  description: string;
  icon: any;
}

export interface Hotspot {
  x: number;
  y: number;
  label: string;
  description: string;
  icon: any;
}

interface HeatmapAnalysisProps {
  slides: HeatmapSlide[];
  hotspots: Hotspot[];
  accentColor?: string;
  metrics?: {
    clarityScore: number;
    focusScore: number;
  };
  appName?: string;
}

export function HeatmapAnalysis({ 
  slides, 
  hotspots, 
  accentColor = '#00FF7F',
  metrics = { clarityScore: 64, focusScore: 67 },
  appName = "Attention Insight"
}: HeatmapAnalysisProps) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setActiveHotspot(null);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setActiveHotspot(null);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#060606] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
       {/* Visual Section */}
       <div className="relative w-full lg:w-1/2 min-h-[500px] flex items-center justify-center bg-gradient-to-br from-black to-black p-8 border-b lg:border-b-0 lg:border-r border-white/5 group/container"
            style={{ backgroundImage: `linear-gradient(to bottom right, ${accentColor}10, #000000)` }}>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-black transition-all duration-300 backdrop-blur-sm opacity-0 group-hover/container:opacity-100"
            style={{ borderColor: `rgba(255,255,255,0.1)` }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = accentColor; e.currentTarget.style.color = '#000'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-black transition-all duration-300 backdrop-blur-sm opacity-0 group-hover/container:opacity-100"
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = accentColor; e.currentTarget.style.color = '#000'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Phone Frame */}
          <div 
            className="relative w-[300px] h-[600px] shadow-2xl rounded-[40px] border-[8px] border-[#2a2a2a] bg-black overflow-hidden transform transition-transform hover:scale-[1.02] duration-500 cursor-pointer"
            onClick={nextSlide}
          >
             {/* Slides */}
             <div className="relative w-full h-full bg-[#1a1a1a]">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={slides[currentSlide].id}
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].label}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover opacity-90" 
                  />
                </AnimatePresence>
             </div>
             
             {/* Interactive Overlay Layer (Only on Heatmap) */}
             {slides[currentSlide].id === 'heatmap' && (
                 <div className="absolute inset-0 z-20">
                     {hotspots.map((spot, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveHotspot(index);
                          }}
                          className={`absolute w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 z-30 group/spot ${activeHotspot === index ? 'scale-110 text-black' : 'bg-black/40 border-2 hover:bg-black/60'}`}
                          style={{ 
                            left: `${spot.x}%`, 
                            top: `${spot.y}%`,
                            backgroundColor: activeHotspot === index ? accentColor : 'rgba(0,0,0,0.4)',
                            borderColor: accentColor,
                            color: activeHotspot === index ? '#000' : accentColor
                          }}
                        >
                           <spot.icon size={18} strokeWidth={2.5} />
                           
                           {/* Ripple Effect */}
                           <span 
                             className={`absolute inset-0 rounded-full animate-ping ${activeHotspot === index ? 'opacity-100' : 'opacity-0'}`} 
                             style={{ backgroundColor: `${accentColor}4D` }} // 30% opacity
                           />
                        </button>
                     ))}
                 </div>
             )}

             {/* Slide Indicator Overlay */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                {slides.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-4' : 'bg-white/30'}`}
                    style={{ backgroundColor: currentSlide === idx ? accentColor : undefined }}
                  />
                ))}
             </div>
          </div>
       </div>

       {/* Info/Context Section */}
       <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-8">
             <div 
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border"
               style={{ 
                 backgroundColor: `${accentColor}1A`, // 10% opacity
                 borderColor: `${accentColor}33`, // 20% opacity
                 color: accentColor
               }}
             >
                <Smartphone size={14} />
                {appName}
             </div>
             
             {/* Dynamic Title based on Slide */}
             <motion.div
                key={slides[currentSlide].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
             >
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                   {slides[currentSlide].label}
                   <span className="text-sm font-normal text-white/40 bg-white/5 px-2 py-1 rounded-lg border border-white/5">
                      {currentSlide + 1}/{slides.length}
                   </span>
                </h3>
                <p className="text-white/60 leading-relaxed text-lg">
                   {slides[currentSlide].description}
                </p>
             </motion.div>
          </div>

          <div className="space-y-4">
             {/* Show Hotspots List only on Heatmap slide, else show general info */}
             {slides[currentSlide].id === 'heatmap' ? (
                 hotspots.map((spot, index) => (
                    <div 
                        key={index}
                        onClick={() => setActiveHotspot(index)}
                        className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex gap-4 hover:bg-white/10`}
                        style={{
                           backgroundColor: activeHotspot === index ? `${accentColor}1A` : 'rgba(255,255,255,0.05)',
                           borderColor: activeHotspot === index ? `${accentColor}66` : 'transparent'
                        }}
                    >
                        <div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0`}
                          style={{
                            backgroundColor: activeHotspot === index ? accentColor : 'rgba(255,255,255,0.1)',
                            color: activeHotspot === index ? '#000' : 'rgba(255,255,255,0.5)'
                          }}
                        >
                            <spot.icon size={20} />
                        </div>
                        <div>
                            <h4 
                              className={`font-bold mb-1`}
                              style={{ color: activeHotspot === index ? accentColor : '#FFF' }}
                            >
                                {spot.label}
                            </h4>
                            <p className={`text-sm leading-relaxed ${activeHotspot === index ? 'text-white/90' : 'text-white/50'}`}>
                                {spot.description}
                            </p>
                        </div>
                    </div>
                 ))
             ) : (
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                   <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${accentColor}33`, color: accentColor }}
                      >
                         <BarChart3 size={24} />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-lg">Métricas de Atención</h4>
                         <p className="text-white/50 text-sm">Análisis cuantitativo de la interfaz</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                         <span className="text-white/40 text-xs uppercase tracking-wider font-bold">Clarity Score</span>
                         <div className="text-3xl font-bold text-white mt-1">
                            {metrics.clarityScore}
                            <span className="text-lg ml-1" style={{ color: accentColor }}>%</span>
                         </div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                         <span className="text-white/40 text-xs uppercase tracking-wider font-bold">Focus Score</span>
                         <div className="text-3xl font-bold text-white mt-1">
                            {metrics.focusScore}
                            <span className="text-lg ml-1" style={{ color: accentColor }}>%</span>
                         </div>
                      </div>
                   </div>
                </div>
             )}
          </div>
       </div>
    </div>
  );
}
