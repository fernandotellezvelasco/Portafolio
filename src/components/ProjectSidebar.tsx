import { motion } from 'motion/react';

interface ProjectSidebarProps {
  total: number;
  current: number;
  onIndexChange: (index: number) => void;
}

export function ProjectSidebar({ total, current, onIndexChange }: ProjectSidebarProps) {
  // Always visible to serve as navigation/indicator
  const isVisible = true;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -20
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-start gap-[10px] hidden md:flex"
    >
      <div className="relative flex flex-col items-start">
        {Array.from({ length: total }).map((_, i) => {
          const isActive = i === current;
          
          // Using a fixed height container to maintain the center-to-center spacing of ~40px
          // In the design: 0px (start), 26px (start of active), 79px (start of next)
          // Centers are roughly ~40px apart.
          return (
            <div 
              key={i} 
              className="relative h-[40px] w-[50px] flex items-center cursor-pointer group bg-[rgba(223,219,219,0)]"
              onClick={() => onIndexChange(i)}
            > 
               {/* Number Label - Only visible when active */}
               <div className="absolute left-0 w-[20px] flex justify-start">
                  <motion.span
                    initial={{ opacity: 0, color: '#bcbcbc', scale: 1 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0,
                      color: isActive ? '#FFFFFF' : '#bcbcbc',
                      scale: isActive ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="font-['Montserrat'] font-medium text-[9.7px] leading-[12.2px] text-justify origin-left"
                  >
                    {`0${i + 1}`}
                  </motion.span>
               </div>
  
               {/* Vertical Bar Indicator */}
               {/* Positioned at left-[26px] per design */}
               <div className="absolute left-[26px] flex items-center justify-center w-[2px]">
                  <motion.div
                    initial={false}
                    animate={{
                      height: i <= current ? 36 : 6,
                      backgroundColor: i <= current ? '#fffbfb' : '#3b3b3b',
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="w-[2px] rounded-[11px]"
                  />
               </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
