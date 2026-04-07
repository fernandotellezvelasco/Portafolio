import { Type, Palette, Move, Layers } from 'lucide-react';

interface AtomicDesignVisualProps {
  accentColor?: string;
}

export function AtomicDesignVisual({ accentColor = '#FFEE00' }: AtomicDesignVisualProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
        
        {/* Sub-atomic */}
        <div className="flex flex-col gap-4 relative group">
          <div className="text-center mb-2">
            <h5 className="text-white font-medium text-sm">Sub-atomic</h5>
          </div>
          <div className="flex-1 bg-[#060606] border border-white/10 rounded-2xl p-4 grid grid-cols-2 gap-2 content-center relative group">
             {/* Icons representing tokens */}
             <div className="aspect-square rounded-full bg-white/5 flex items-center justify-center flex-col gap-1">
                <Type size={14} className="text-white/70" />
                <span className="text-[0.5rem] text-white/50">Typo</span>
             </div>
             <div className="aspect-square rounded-full bg-white/5 flex items-center justify-center flex-col gap-1">
                <Layers size={14} className="text-white/70" />
                <span className="text-[0.5rem] text-white/50">Shadow</span>
             </div>
             <div className="aspect-square rounded-full bg-white/5 flex items-center justify-center flex-col gap-1">
                <Palette size={14} className="text-white/70" />
                <span className="text-[0.5rem] text-white/50">Color</span>
             </div>
             <div className="aspect-square rounded-full bg-white/5 flex items-center justify-center flex-col gap-1">
                <Move size={14} className="text-white/70" />
                <span className="text-[0.5rem] text-white/50">Space</span>
             </div>
             
             {/* Arc separator simulation */}
             <div className="hidden lg:block absolute -right-4 top-0 bottom-0 w-8 border-r border-white/10 rounded-[50%] opacity-30 pointer-events-none translate-x-1/2"></div>
          </div>
        </div>

        {/* Atoms */}
        <div className="flex flex-col gap-4 relative">
          <div className="text-center mb-2">
            <h5 className="text-white font-medium text-sm">Atoms</h5>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4 px-2">
             <div className="text-[0.7rem] text-white/50 pl-1">Input labels</div>
             <div className="h-9 bg-[#1A1A1A] border border-white/10 rounded flex items-center px-3 text-[0.7rem] text-white/30">
               Input field
             </div>
             {/* Figma Button Style */}
             <button 
               className="h-9 px-6 rounded-full text-[#1A1F23] text-[0.7rem] font-bold shadow-lg font-['Avenir',sans-serif]"
               style={{ backgroundColor: accentColor, boxShadow: `0 10px 15px -3px ${accentColor}33` }}
             >
               Guardar
             </button>
             
             <div className="hidden lg:block absolute -right-4 top-0 bottom-0 w-8 border-r border-white/10 rounded-[50%] opacity-30 pointer-events-none translate-x-1/2"></div>
          </div>
        </div>

        {/* Molecules */}
        <div className="flex flex-col gap-4 relative">
          <div className="text-center mb-2">
             <h5 className="text-white font-medium text-sm">Molecules</h5>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6 px-2">
             <div className="flex flex-col gap-1.5">
               <span className="text-[0.7rem] text-white/70 pl-1">Email</span>
               <div className="h-9 bg-[#1A1A1A] border border-white/10 rounded px-3 flex items-center text-[0.7rem] text-white/50">
                 name@email.com
               </div>
             </div>
             
             <div className="hidden lg:block absolute -right-4 top-0 bottom-0 w-8 border-r border-white/10 rounded-[50%] opacity-30 pointer-events-none translate-x-1/2"></div>
          </div>
        </div>

        {/* Organisms */}
        <div className="flex flex-col gap-4 relative">
          <div className="text-center mb-2">
             <h5 className="text-white font-medium text-sm">Organisms</h5>
          </div>
           <div className="flex-1 flex flex-col justify-center gap-3 px-3 py-4 bg-[#0A0A0A] border border-white/10 rounded-xl relative overflow-hidden">
             <div className="flex flex-col gap-1">
               <span className="text-[0.6rem] text-white/70">Email</span>
               <div className="h-8 bg-[#1A1A1A] border border-white/10 rounded px-2 flex items-center text-[0.6rem] text-white/50">
                 name@email.com
               </div>
             </div>
             <div className="flex flex-col gap-1">
               <span className="text-[0.6rem] text-white/70">Password</span>
               <div className="h-8 bg-[#1A1A1A] border border-white/10 rounded px-2 flex items-center text-[0.6rem] text-white/50">
                 ********
               </div>
             </div>
             <button 
                className="h-8 rounded-full text-[#1A1F23] text-[0.65rem] font-bold mt-1 font-['Avenir',sans-serif]"
                style={{ backgroundColor: accentColor }}
             >
               Login
             </button>
             
             <div className="hidden lg:block absolute -right-6 top-0 bottom-0 w-8 border-r border-white/10 rounded-[50%] opacity-30 pointer-events-none translate-x-1/2 z-10"></div>
          </div>
        </div>

        {/* Templates */}
        <div className="flex flex-col gap-4 relative">
          <div className="text-center mb-2">
             <h5 className="text-white font-medium text-sm">Templates</h5>
          </div>
          <div className="flex-1 border border-white/20 rounded-xl p-2 flex items-center justify-center bg-[#050505]">
             <div className="w-full h-full border border-dashed border-white/20 rounded p-3 flex flex-col gap-3 justify-center">
                <div className="w-4 h-4 rounded-full border border-dashed border-white/20"></div>
                <div className="w-full flex-1 border border-dashed border-white/20 rounded flex flex-col gap-2 p-2 justify-center">
                   <div className="h-6 w-full border border-dashed border-white/20 rounded"></div>
                   <div className="h-6 w-full border border-dashed border-white/20 rounded"></div>
                   <div className="h-8 w-full border border-dashed border-white/20 rounded mt-2"></div>
                </div>
             </div>
             
             <div className="hidden lg:block absolute -right-4 top-0 bottom-0 w-8 border-r border-white/10 rounded-[50%] opacity-30 pointer-events-none translate-x-1/2"></div>
          </div>
        </div>

         {/* Pages */}
        <div className="flex flex-col gap-4">
          <div className="text-center mb-2">
             <h5 className="text-white font-medium text-sm">Pages</h5>
          </div>
          <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-xl p-3 relative overflow-hidden flex flex-col">
             {/* Header */}
             <div className="flex justify-between items-center mb-4 px-1">
               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
               <div className="flex gap-1">
                  <div className="w-4 h-1 bg-white/20 rounded-full"></div>
                  <div className="w-4 h-1 bg-white/20 rounded-full"></div>
               </div>
             </div>
             
             <div className="flex-1 flex flex-col justify-center gap-3">
               <div className="text-center mb-1">
                 <div className="text-[0.8rem] text-white font-bold">Login</div>
               </div>
               <div className="space-y-2">
                  <div className="h-7 bg-[#151515] rounded border border-white/5 px-2 flex items-center text-[0.6rem] text-white/40">rohan@email.com</div>
                  <div className="h-7 bg-[#151515] rounded border border-white/5 px-2 flex items-center text-[0.6rem] text-white/40">******</div>
                  <button 
                    className="w-full h-7 rounded-full text-[#1A1F23] text-[0.6rem] font-bold shadow-lg font-['Avenir',sans-serif]"
                    style={{ backgroundColor: accentColor, boxShadow: `0 10px 15px -3px ${accentColor}33` }}
                  >
                    Login
                  </button>
               </div>
               <div className="text-[0.5rem] text-white/30 text-center mt-2">Reset Password</div>
             </div>
             
             {/* Gradient glow */}
             <div 
               className="absolute -top-10 -left-10 w-32 h-32 blur-3xl rounded-full pointer-events-none"
               style={{ backgroundColor: accentColor, opacity: 0.1 }}
             ></div>
          </div>
        </div>

      </div>
    </div>
  );
}
