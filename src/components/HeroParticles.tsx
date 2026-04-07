import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function HeroParticles({ onVisible }: { onVisible?: (index: number) => void }) {
  const scrollRef = useRef(0);
  const [opacity, setOpacity] = useState(1);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    // Report visibility immediately as this is the hero section
    onVisible?.(-1);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      scrollRef.current = currentScroll;
      
      // Calculate opacity: 1 at 0px, 0 at 350px
      const newOpacity = Math.max(0, 1 - currentScroll / 350);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [onVisible]);

  // Canvas Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    // Initial size
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle System
    const particleCount = isMobile ? 2000 : 3500;
    const particles: { x: number; y: number; z: number; ox: number; oy: number; oz: number }[] = [];
    
    // Initialize particles on a sphere
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      const r = 1; // Unit sphere
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      particles.push({ x, y, z, ox: x, oy: y, oz: z });
    }

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left - width / 2;
      mouseY = e.clientY - rect.top - height / 2;
      
      // Check if hovering near center (approximate sphere)
      const dist = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
      isHovering = dist < (Math.min(width, height) * 0.35);
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    let rotationX = 0;
    let rotationY = 0;
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Mouse influence on rotation
      // Continuous rotation with mouse influence on speed
      const baseSpeed = 0.0002;
      const mouseSpeedX = mouseY * 0.00001;
      const mouseSpeedY = mouseX * 0.00001;
      
      rotationX += baseSpeed + mouseSpeedX;
      rotationY += baseSpeed + mouseSpeedY;

      // Scroll effect (shrink)
      const scroll = scrollRef.current || 0;
      const shrinkFactor = Math.max(0, 1 - (scroll / 800));
      
      // Sphere radius based on screen size
      const baseRadius = Math.min(width, height) * (isMobile ? 0.35 : 0.4);
      const currentRadius = baseRadius * shrinkFactor;
      
      if (currentRadius <= 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      
      // Pre-calculate rotation matrices
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      // Mouse repulsion radius
      const interactionRadius = 150;

      ctx.fillStyle = isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(200, 200, 200, 0.5)';
      
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        // 1. Rotate original position
        // Rotate around Y
        let x1 = p.ox * cosY - p.oz * sinY;
        let z1 = p.ox * sinY + p.oz * cosY;
        // Rotate around X
        let y1 = p.oy * cosX - z1 * sinX;
        let z2 = p.oy * sinX + z1 * cosX;
        
        // 2. Scale to radius
        let tx = x1 * currentRadius;
        let ty = y1 * currentRadius;
        let tz = z2 * currentRadius;

        // 3. Mouse repulsion (simplified 2D push)
        if (isHovering) {
          const dx = tx - mouseX;
          const dy = ty - mouseY;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < interactionRadius * interactionRadius) {
            const dist = Math.sqrt(distSq);
            const force = (interactionRadius - dist) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            
            tx += Math.cos(angle) * force * 40;
            ty += Math.sin(angle) * force * 40;
          }
        }
        
        // 4. Perspective projection
        const fov = 1000;
        const scale = fov / (fov - tz);
        
        const px = centerX + tx * scale;
        const py = centerY + ty * scale;
        
        // 5. Draw
        if (scale > 0) {
          const size = 1.5 * scale;
          ctx.globalAlpha = isHovering ? 0.8 : 0.6;
          // Simple rect is faster than arc for many particles
          ctx.fillRect(px, py, size, size);
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]); // Re-run if isMobile changes to update particle count

  const handleStart = () => {
    // Custom smooth scroll for controlled transition
    const smoothScrollTo = (targetY: number, duration: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      // Cubic ease out for faster response
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeOutCubic(progress);

        window.scrollTo(0, startY + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const nextSection = document.getElementById('project-0');
    if (nextSection) {
      const targetY = nextSection.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY, 500); // 0.5s duration
    } else {
      smoothScrollTo(window.innerHeight, 500);
    }
  };

  return (
    <div className="h-[100dvh] w-full sticky top-0 z-0 bg-[#0B0B0B] snap-start flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-full relative flex flex-col items-center justify-center">
      
      {/* 2D Canvas Scene */}
      <div className="absolute inset-0 z-0 touch-pan-y">
        <canvas 
            ref={canvasRef} 
            className="w-full h-full block"
        />
      </div>

      {/* Content Overlay */}
      <div 
        style={{ opacity }} 
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center mt-[-2vh] flex flex-col items-center pointer-events-none transition-opacity duration-300`}
      >
        {/* Badge/Pill */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-[13px] font-medium text-white/80 tracking-wide">Diseñador digital enfocado en UX/UI</span>
        </div>

        {/* Main Title Group */}
        <div className="mb-14">
          <h2
            className={`text-xl md:text-4xl font-normal mb-4 tracking-tight w-fit mx-auto transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.5) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Hola, soy Fernando.
          </h2>

          <h1 
            className={`text-xl md:text-4xl font-bold tracking-tight leading-[1.2] max-w-4xl mx-auto transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <span className="text-white">Ayudo</span> <span className="text-[rgb(169,167,167)]">a construir</span> <span className="text-[rgb(169,167,167)]">productos</span> <span className="text-[rgb(255,255,255)]">resolviendo</span> <br />
            <span className="text-white">problemas reales</span> <span className="text-[rgb(169,167,167)]">de los</span> <span className="text-[rgb(169,167,167)]">usuarios</span>
          </h1>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleStart}
          className={`bg-transparent border border-white text-white px-8 py-3 rounded-full text-base font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black pointer-events-auto hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 delay-500 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          Descubrir
        </button>
      </div>

      {/* Background Ambience */}
      <div 
        style={{ opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[800px] md:h-[800px] pointer-events-none transition-opacity duration-300"
      >
        <div className="bg-[rgba(43,127,255,0.1)] blur-[60px] md:blur-[120px] rounded-full w-full h-full" data-name="Container" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="w-[20px] h-[32px] border border-white/20 rounded-full flex justify-center p-1 bg-black/20 backdrop-blur-sm">
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
      </div>
    </div>
  );
}