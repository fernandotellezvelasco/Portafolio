import { motion } from 'motion/react';
import { Search, Target, Layout, Palette, Users, Zap, GitBranch } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgUserFlows from "figma:asset/2cbd562a120d3835def7e298d8a9e53be5189054.png";

interface DesignProcessGraphicProps {
  accentColor?: string;
  imageSrc?: string;
}

export function DesignProcessGraphic({ accentColor = '#FFEE00', imageSrc }: DesignProcessGraphicProps) {
  const steps = [
    { id: 1, label: "Descubrimiento", sub: "User Research • Benchmarking", icon: Search, radius: 450 },
    { id: 2, label: "Definición", sub: "Arquitectura • User Personas", icon: Target, radius: 370 },
    { id: 3, label: "Ideación", sub: "Wireframes • User Flows", icon: Layout, radius: 290 },
    { id: 4, label: "Diseño UI", sub: "Design System • High Fidelity", icon: Palette, radius: 210 },
    { id: 5, label: "Validación", sub: "Prototyping • Testing", icon: Users, radius: 130 },
  ];

  // Calculate distinct x positions for the top labels
  const labelXPositions = [100, 250, 400, 550, 700];

  return (
    <div className="w-full relative pt-8 md:pt-12 pb-0">


        {/* Mobile View - Vertical Timeline */}
        <div className="md:hidden flex flex-col gap-8 relative px-6 py-4 select-none">
            {/* Connecting Line */}
            <div 
              className="absolute left-12 top-8 bottom-8 w-px" 
              style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}66, transparent)` }} // 66 is ~40% opacity
            />
            
            {steps.map((step, index) => (
                <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-6 relative z-10"
                >
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 shadow-lg relative z-10 group">
                        <step.icon size={20} style={{ color: accentColor }} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-1 truncate">
                            {index === 0 ? "Research" : step.label}
                        </h5>
                        <p className="text-white/50 text-[11px] uppercase tracking-widest font-medium leading-tight">
                            {step.sub}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Desktop View - Arc Visualization */}
        <div className="hidden md:flex relative w-full aspect-[16/10] items-end justify-center select-none overflow-hidden">
            {/* SVG Container */}
            <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMax meet">
                <defs>
                    <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={accentColor} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
                    </linearGradient>
                     <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                    </linearGradient>
                </defs>

                {/* Center Core (Bottom) */}
                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                     <circle cx="400" cy="500" r="50" fill={accentColor} fillOpacity="0.1" />
                     <circle cx="400" cy="500" r="20" fill={accentColor} />
                     <Zap x="388" y="488" size={24} className="text-black" />
                </motion.g>
                
                {/* Arcs */}
                {steps.map((step, index) => (
                    <g key={step.id}>
                        {/* The Arc */}
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: index * 0.15 }}
                            d={`M ${400 - step.radius} 500 A ${step.radius} ${step.radius} 0 0 1 ${400 + step.radius} 500`}
                            fill="none"
                            stroke="white"
                            strokeOpacity="0.15"
                            strokeWidth="1"
                        />
                         
                         {/* Text on Arc */}
                        <text dy="-8" className="text-[10px] uppercase tracking-[0.2em] fill-white/50 font-medium pointer-events-none">
                            <textPath href={`#arc-${step.id}`} startOffset="18%" textAnchor="middle" side="right">
                                {step.sub}
                            </textPath>
                        </text>

                         {/* Hidden path for text */}
                        <path id={`arc-${step.id}`} d={`M ${400 - step.radius} 500 A ${step.radius} ${step.radius} 0 0 1 ${400 + step.radius} 500`} fill="none" />
                    </g>
                ))}

                 {/* Top Labels and Vertical Lines */}
                 {steps.map((step, index) => {
                     const xPos = labelXPositions[index];
                     // We need to find where the vertical line intersects the specific arc for this step
                     // Circle equation: (x-400)^2 + (y-500)^2 = r^2
                     // We want y for a given x. (y-500)^2 = r^2 - (x-400)^2
                     // y = 500 - sqrt(r^2 - (x-400)^2)
                     const dx = xPos - 400;
                     const dy = Math.sqrt(Math.pow(step.radius, 2) - Math.pow(dx, 2));
                     const intersectY = 500 - dy;

                     return (
                        <g key={`label-${step.id}`}>
                            {/* Icon & Label Group */}
                            <foreignObject x={xPos - 40} y="20" width="80" height="100">
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                    className="flex flex-col items-center justify-center text-center group"
                                >
                                    <div 
                                      className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center mb-3 mt-2 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-20"
                                      style={{ borderColor: 'rgba(255,255,255,0.1)' }} // Default border
                                    >
                                        <div className="absolute inset-0 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: accentColor }}></div>
                                        <style>{`
                                          .group:hover .icon-${step.id} {
                                            color: ${accentColor} !important;
                                          }
                                        `}</style>
                                        <step.icon size={18} className={`text-white/70 transition-colors z-10 icon-${step.id}`} />
                                    </div>
                                    <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider block">{index === 0 ? "Research" : step.label}</span>
                                </motion.div>
                            </foreignObject>
                            
                            {/* Vertical Line dropping to arc */}
                            { !isNaN(intersectY) && (
                                <>
                                    <motion.line 
                                        x1={xPos} y1="80" 
                                        x2={xPos} y2={intersectY} 
                                        stroke="url(#line-gradient)" 
                                        strokeWidth="1"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                                    />
                                    {/* Dot at intersection */}
                                    <motion.circle 
                                        cx={xPos} cy={intersectY} r="3" fill={accentColor}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
                                    />
                                </>
                            )}
                        </g>
                     )
                 })}
            </svg>
            
            {/* Background Gradients for blending */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
        </div>

        {/* User Flows Section */}
        <div className="mt-12 md:mt-16">
          <h4 className="flex items-center gap-3 text-lg font-medium mb-3 opacity-90 text-white">
             <GitBranch className="w-5 h-5" style={{ color: accentColor }} />
             User Flows
          </h4>
          <p className="text-white/70 leading-relaxed mb-8 max-w-3xl text-[17px]">
             En colaboración con el equipo, analizamos y rediseñamos el flujo de usuarios para garantizar un rediseño objetivo y sin sesgos.
          </p>
          <div className={`rounded-xl overflow-hidden border border-white/10 relative group bg-[#060606] ${accentColor === '#00FF7F' ? 'w-[70%] mx-auto' : 'w-full'}`}>
              <ImageWithFallback 
                  src={imageSrc || imgUserFlows} 
                  alt="User Flows Diagram" 
                  className={`h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 w-full max-w-3xl ${imageSrc ? 'mx-auto' : 'ml-0'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
    </div>
  );
}
