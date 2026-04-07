import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cake, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import imgAmarillo1 from "figma:asset/cb20fcdbacc16507d7d00c46bb67645d527e6326.png";
import imgCarlosProfile from "figma:asset/55303ec65e745c6b2487d20f612495ff0b2eb5e6.png";

export function HeyMovilPersona() {
  return (
    <div className="relative w-full bg-[#181818] rounded-2xl overflow-hidden min-h-[600px] border border-white/10">
      {/* Background Asset */}
      <div className="absolute top-[-30%] left-[-40%] w-[150%] h-[150%] pointer-events-none opacity-60">
        <ImageWithFallback 
            src={imgAmarillo1} 
            alt="" 
            className="w-full h-full object-cover mix-blend-lighten"
        />
      </div>

      <div className="relative z-10 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Profile */}
        <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Profile Image with Reflection Effect */}
            <div className="relative group">
                <div className="relative rounded-[26px] overflow-hidden aspect-[4/5] z-10 shadow-2xl">
                     <ImageWithFallback 
                       src={imgCarlosProfile}
                       alt="Carlos Méndez"
                       className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                     />
                     {/* Gradient Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
                     
                     <div className="absolute bottom-8 left-6 z-20">
                        <h3 className="text-3xl font-bold text-white leading-tight font-[Avenir,sans-serif]">Carlos<br/>Méndez</h3>
                        <p className="text-[#FFEE00] text-lg font-light mt-1 font-[Avenir,sans-serif]">Gerente de Compras</p>
                    </div>
                </div>
                
                {/* Reflection/Blur Effect */}
                <div className="absolute -bottom-4 left-4 right-4 h-12 bg-[#FFEE00]/20 blur-xl rounded-full opacity-60"></div>
            </div>

            {/* Info Icons */}
            <div className="space-y-6 pl-2">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#FFEE00] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,238,0,0.3)]">
                        <Cake className="w-5 h-5 text-[#181818]" />
                    </div>
                    <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Edad</p>
                        <p className="text-white font-medium">45 años</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#FFEE00] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,238,0,0.3)]">
                        <MapPin className="w-5 h-5 text-[#181818]" />
                    </div>
                    <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Ubicación</p>
                        <p className="text-white font-medium">CDMX</p>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#FFEE00] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,238,0,0.3)]">
                        <Briefcase className="w-5 h-5 text-[#181818]" />
                    </div>
                    <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Rol</p>
                        <p className="text-white font-medium">Administración</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Content Card */}
        <div className="lg:col-span-8 relative min-h-[400px]">
            {/* Glass Background Container */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md border border-white/[0.08]"></div>
                
                {/* Decorative gradients inside glass card */}
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-b from-[#898989]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[20%] w-[300px] h-[300px] bg-[#FFEE00]/5 rounded-full blur-[80px] pointer-events-none"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
                 <div className="mb-12">
                     <h5 className="text-[#FFEE00] font-bold mb-6 uppercase text-xs tracking-[0.2em] flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-[#FFEE00]"></span>
                        Bio
                     </h5>
                     <p className="text-gray-300/90 leading-relaxed font-light text-[16px]">
                       Carlos gestiona los recursos tecnológicos de una empresa de logística con más de 200 empleados. Es el responsable directo de la contratación, renovación y administración de las líneas telefónicas corporativas. Su día a día implica resolver problemas operativos y buscar formas de optimizar el presupuesto.
                     </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-auto">
                     <div>
                       <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em] opacity-80">Objetivos</h5>
                       <ul className="space-y-4">
                         {[
                           "Centralizar la facturación de todas las líneas.",
                           "Reducir costos operativos mensuales.",
                           "Gestionar altas y bajas de forma inmediata.",
                           "Tener visibilidad del consumo de datos."
                         ].map((item, i) => (
                           <li key={i} className="flex items-start gap-4 group">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FFEE00] shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_8px_#FFEE00]"></span>
                              <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{item}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                     
                     <div>
                       <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em] opacity-80">Frustraciones</h5>
                       <ul className="space-y-4">
                         {[
                           "Facturas confusas y dispersas.",
                           "Tiempos de espera largos en Call Centers.",
                           "Procesos burocráticos y lentos.",
                           "Falta de herramientas de autogestión."
                         ].map((item, i) => (
                           <li key={i} className="flex items-start gap-4 group">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E35053] shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_8px_#E35053]"></span>
                              <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{item}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
}