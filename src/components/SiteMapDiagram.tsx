import React from 'react';
import { motion } from 'motion/react';

interface SiteMapDiagramProps {
  accentColor?: string;
}

export const SiteMapDiagram = ({ accentColor = '#FFEE00' }: SiteMapDiagramProps) => {
  const categories = [
    {
      title: "Empresas",
      items: [
        { 
          label: "Busco transporte de carga",
          subItems: ["Transporte terrestre", "Transporte marítimo", "Transporte aéreo"]
        },
        { label: "BeGo Black (admin. de flotillas)" },
        { label: "BeGo Pay (liquidez y pagos)" },
        { label: "Carta Porte / Documentación" }
      ]
    },
    {
      title: "Transportistas",
      items: [
        { label: "Buscar cargas disponibles" },
        { label: "BeGo Driver (app)" },
        { label: "Gestión de flotilla" },
        { label: "Hey Móvil (conectividad)" }
      ]
    },
    {
      title: "Nosotros",
      items: [
        { label: "Nuestra historia / visión" },
        { label: "Alianzas y patrocinadores" },
        { label: "Aviso de privacidad / Términos" }
      ]
    },
    {
      title: "Recursos",
      items: [
        { label: "Blog / Noticias" },
        { label: "Centro de ayuda / FAQ" },
        { label: "Mapa del sitio" }
      ]
    },
    {
      title: "Contacto",
      items: [
        { label: "Formulario y datos de contacto" }
      ]
    }
  ];

  return (
    <div className="w-full py-4 md:py-8">
      {/* Mobile Layout (Vertical Tree) */}
      <div className="md:hidden flex flex-col items-start pl-2">
        {/* Root Node Mobile */}
        <div className="flex items-center gap-3 mb-6">
           <div 
             className="px-4 py-2 text-black font-bold rounded-lg text-sm border"
             style={{ 
               backgroundColor: accentColor, 
               borderColor: accentColor,
               boxShadow: `0 0 15px ${accentColor}33`
             }}
           >
             Inicio
           </div>
        </div>

        {/* Tree Structure */}
        <div className="relative pl-4 border-l border-white/20 ml-4 space-y-8 pb-4">
           {categories.map((cat, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, x: -10 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="relative pl-6"
             >
               {/* Horizontal Connector */}
               <div className="absolute top-3 left-0 w-6 h-px bg-white/20"></div>
               
               {/* Category Title */}
               <div 
                 className="rounded-lg px-3 py-1.5 w-fit mb-3 backdrop-blur-sm border"
                 style={{ 
                   backgroundColor: `${accentColor}1A`, // 10% opacity approx
                   borderColor: `${accentColor}4D` // 30% opacity
                 }}
               >
                 <h3 
                   className="font-bold text-xs uppercase tracking-wide"
                   style={{ color: accentColor }}
                 >
                   {cat.title}
                 </h3>
               </div>
               
               {/* Items */}
               <div className="flex flex-col gap-2">
                 {cat.items.map((item, i) => (
                   <div key={i} className="flex flex-col gap-1">
                     <div className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white/80 w-fit">
                       {item.label}
                     </div>
                     {item.subItems && (
                       <div className="pl-3 flex flex-col gap-1 mt-1 border-l border-white/10 ml-2">
                         {item.subItems.map((sub, j) => (
                           <div key={j} className="text-[10px] text-white/50 bg-white/5 rounded px-2 py-1 w-fit">
                             {sub}
                           </div>
                         ))}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Desktop Layout (Horizontal Diagram) */}
      <div className="hidden md:block overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-[800px] flex flex-col items-center">
          {/* Root Node */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 mb-8"
          >
            <div 
              className="px-8 py-3 text-black font-bold rounded-lg border"
              style={{ 
                backgroundColor: accentColor, 
                borderColor: accentColor,
                boxShadow: `0 0 20px ${accentColor}4D`
              }}
            >
              Inicio
            </div>
            {/* Vertical line from root */}
            <div className="absolute top-full left-1/2 w-px h-8 bg-white/20 -translate-x-1/2"></div>
          </motion.div>

          {/* Connection Horizontal Line */}
          <div className="relative w-[90%] h-px bg-white/20 mb-8">
            {/* Vertical connectors to children */}
            <div className="absolute top-0 left-0 w-px h-8 bg-white/20"></div>
            <div className="absolute top-0 left-1/4 w-px h-8 bg-white/20"></div>
            <div className="absolute top-0 left-1/2 w-px h-8 bg-white/20"></div>
            <div className="absolute top-0 left-3/4 w-px h-8 bg-white/20"></div>
            <div className="absolute top-0 right-0 w-px h-8 bg-white/20"></div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-5 gap-4 w-full px-4 items-start">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div 
                  className="w-full rounded-lg p-3 mb-4 text-center backdrop-blur-sm transition-all border group hover:brightness-110"
                  style={{ 
                    backgroundColor: `${accentColor}1A`, 
                    borderColor: `${accentColor}4D` 
                  }}
                >
                  <h3 
                    className="font-bold text-sm"
                    style={{ color: accentColor }}
                  >
                    {cat.title}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-2 w-full">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition-colors text-center">
                        {item.label}
                      </div>
                      {item.subItems && (
                        <div className="pl-2 flex flex-col gap-1 mt-1 border-l border-white/10 ml-2">
                          {item.subItems.map((sub, j) => (
                            <div key={j} className="text-[10px] text-white/50 bg-white/5 rounded px-2 py-1">
                              {sub}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
