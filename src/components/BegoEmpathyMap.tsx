import React from 'react';
import { MessageCircle, Eye, Ear, Brain, Frown, Smile, Zap, Truck } from 'lucide-react';

export function BegoEmpathyMap() {
  return (
    <div className="w-full space-y-8 mt-12 bg-[#181818]/50 p-6 rounded-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="font-bold text-white mb-2 flex items-center justify-center gap-3 text-[24px]">
          <Truck className="text-[#FFEE00]" size={28} />
          Mapa de Empatía – Operador Logístico
        </h3>
        <p className="text-white/60 max-w-2xl mx-auto text-[17px]">
          Transportista independiente o dueño de flota que busca optimizar sus rutas, asegurar pagos rápidos y minimizar tiempos muertos en sus operaciones.
        </p>
      </div>

      {/* 4 Quadrants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Says */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#FFEE00]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <MessageCircle size={60} className="text-[#FFEE00]" />
          </div>
          <h4 className="text-[#FFEE00] font-semibold mb-4 flex items-center gap-2">
            <MessageCircle size={20} /> ¿Qué dice?
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <span className="text-[#FFEE00] mt-1">"</span>
              Necesito asegurar carga de regreso para no perder dinero.
            </li>
            <li className="flex gap-2">
              <span className="text-[#FFEE00] mt-1">"</span>
              Los pagos tardan demasiado, necesito liquidez para el diésel.
            </li>
            <li className="flex gap-2">
              <span className="text-[#FFEE00] mt-1">"</span>
              Quiero evitar intermediarios que se quedan con gran parte de la tarifa.
            </li>
          </ul>
        </div>

        {/* Thinks & Feels */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#FFEE00]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Brain size={60} className="text-[#FFEE00]" />
          </div>
          <h4 className="text-[#FFEE00] font-semibold mb-4 flex items-center gap-2">
            <Brain size={20} /> ¿Qué piensa y siente?
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="border-l-2 border-white/10 pl-3">Preocupación constante por el flujo de caja y gastos operativos.</li>
            <li className="border-l-2 border-white/10 pl-3">Estrés por la inseguridad en carreteras y tiempos de espera.</li>
            <li className="border-l-2 border-white/10 pl-3">Deseo de formalizar y hacer crecer su negocio de transporte.</li>
          </ul>
        </div>

        {/* Sees */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#FFEE00]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Eye size={60} className="text-[#FFEE00]" />
          </div>
          <h4 className="text-[#FFEE00] font-semibold mb-4 flex items-center gap-2">
            <Eye size={20} /> ¿Qué ve?
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Procesos manuales ineficientes y papeleo excesivo.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Aplicaciones complejas que no entienden sus necesidades.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Falta de transparencia en las tarifas del mercado.
            </li>
          </ul>
        </div>

        {/* Hears */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#FFEE00]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Ear size={60} className="text-[#FFEE00]" />
          </div>
          <h4 className="text-[#FFEE00] font-semibold mb-4 flex items-center gap-2">
            <Ear size={20} /> ¿Qué escucha?
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Recomendaciones de colegas sobre plataformas confiables.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Historias de impagos o fraudes en el sector.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Nuevas regulaciones (Carta Porte) que complican la operación.
            </li>
          </ul>
        </div>
      </div>

      {/* Pains & Gains */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pains */}
        <div className="bg-red-900/10 p-6 rounded-xl border border-red-500/20">
          <h4 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
            <Frown size={20} /> Dolores (Pain Points)
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><span className="text-red-400">•</span> Falta de liquidez inmediata.</li>
            <li className="flex items-center gap-2"><span className="text-red-400">•</span> Regresos vacíos (Deadhead).</li>
            <li className="flex items-center gap-2"><span className="text-red-400">•</span> Gestión administrativa compleja.</li>
          </ul>
        </div>

        {/* Gains */}
        <div className="bg-[#FFEE00]/10 p-6 rounded-xl border border-[#FFEE00]/20">
          <h4 className="text-[#FFEE00] font-semibold mb-4 flex items-center gap-2">
            <Smile size={20} /> Necesidades / Ganancias
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><span className="text-[#FFEE00]">•</span> Pago rápido y garantizado (Pronto Pago).</li>
            <li className="flex items-center gap-2"><span className="text-[#FFEE00]">•</span> Cargas verificadas y constantes.</li>
            <li className="flex items-center gap-2"><span className="text-[#FFEE00]">•</span> Herramientas digitales simples y eficientes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
