import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Eye, Ear, Brain, Frown, Smile, Zap, User } from 'lucide-react';

export function EmpathyMap() {
  return (
    <div className="w-full space-y-8 mt-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="font-bold text-white mb-2 flex items-center justify-center gap-3 text-[24px]">
          <User className="text-[#04DC0C]" size={28} />
          Mapa de Empatía – Jugador
        </h3>
        <p className="text-white/60 max-w-2xl mx-auto text-[17px]">
          Jugador de fútbol amateur que busca integrarse a equipos, ligas o torneos de forma confiable, justa y organizada.
        </p>
      </div>

      {/* 4 Quadrants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Says */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#04DC0C]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <MessageCircle size={60} />
          </div>
          <h4 className="text-[#04DC0C] font-semibold mb-4 flex items-center gap-2">
            <MessageCircle size={20} /> ¿Qué dice?
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <span className="text-[#04DC0C] mt-1">"</span>
              Quiero jugar, pero no conozco equipos confiables.
            </li>
            <li className="flex gap-2">
              <span className="text-[#04DC0C] mt-1">"</span>
              Siempre hay problemas o peleas en las ligas.
            </li>
            <li className="flex gap-2">
              <span className="text-[#04DC0C] mt-1">"</span>
              No sé si el equipo o la liga es seria.
            </li>
            <li className="flex gap-2">
              <span className="text-[#04DC0C] mt-1">"</span>
              Quiero que se reconozca mi nivel como jugador.
            </li>
          </ul>
        </div>

        {/* Thinks & Feels */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#04DC0C]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Brain size={60} />
          </div>
          <h4 className="text-[#04DC0C] font-semibold mb-4 flex items-center gap-2">
            <Brain size={20} /> ¿Qué piensa y siente?
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="border-l-2 border-white/10 pl-3">Frustración por perder tiempo y dinero.</li>
            <li className="border-l-2 border-white/10 pl-3">Inseguridad al unirse a equipos desconocidos.</li>
            <li className="border-l-2 border-white/10 pl-3">Deseo de competir en un entorno justo.</li>
            <li className="border-l-2 border-white/10 pl-3">Motivación por mejorar y ser reconocido.</li>
          </ul>
        </div>

        {/* Sees */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#04DC0C]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Eye size={60} />
          </div>
          <h4 className="text-[#04DC0C] font-semibold mb-4 flex items-center gap-2">
            <Eye size={20} /> ¿Qué ve?
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Equipos y ligas desorganizadas.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Falta de información clara sobre nivel o reglas.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Recomendaciones informales por WhatsApp/FB.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Preferencias hacia conocidos, no méritos.
            </li>
          </ul>
        </div>

        {/* Hears */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#04DC0C]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Ear size={60} />
          </div>
          <h4 className="text-[#04DC0C] font-semibold mb-4 flex items-center gap-2">
            <Ear size={20} /> ¿Qué escucha?
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Quejas sobre malos arbitrajes o peleas.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Historias de favoritismo o injusticias.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Recomendaciones boca a boca poco confiables.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
              Advertencias sobre ligas “conflictivas”.
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
            <li className="flex items-center gap-2"><span className="text-red-400">•</span> Falta de transparencia y confianza.</li>
            <li className="flex items-center gap-2"><span className="text-red-400">•</span> Ambientes conflictivos.</li>
            <li className="flex items-center gap-2"><span className="text-red-400">•</span> Dificultad para encontrar equipos de su nivel.</li>
            <li className="flex items-center gap-2"><span className="text-red-400">•</span> Ausencia de reputación o historial.</li>
          </ul>
        </div>

        {/* Gains */}
        <div className="bg-[#04DC0C]/10 p-6 rounded-xl border border-[#04DC0C]/20">
          <h4 className="text-[#04DC0C] font-semibold mb-4 flex items-center gap-2">
            <Smile size={20} /> Necesidades / Ganancias
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><span className="text-[#04DC0C]">•</span> Evaluar equipos y ligas antes de jugar.</li>
            <li className="flex items-center gap-2"><span className="text-[#04DC0C]">•</span> Mostrar su reputación y nivel deportivo.</li>
            <li className="flex items-center gap-2"><span className="text-[#04DC0C]">•</span> Encontrar oportunidades sin intermediarios.</li>
            <li className="flex items-center gap-2"><span className="text-[#04DC0C]">•</span> Jugar en entornos seguros y organizados.</li>
          </ul>
        </div>
      </div>

      {/* How Sprintia Helps */}
      <div className="bg-gradient-to-r from-[#04DC0C]/10 to-transparent p-6 md:p-8 rounded-xl border border-[#04DC0C]/20 mt-8">
        <h4 className="text-[#04DC0C] font-bold text-lg mb-6 flex items-center gap-2">
          <Zap size={24} className="fill-[#04DC0C]" /> Cómo ayuda Sprintia
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#04DC0C]/20 flex items-center justify-center shrink-0 text-[#04DC0C] font-bold text-sm">1</div>
            <p className="text-sm text-white/90">Matchmaking inteligente entre jugador, equipo y liga.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#04DC0C]/20 flex items-center justify-center shrink-0 text-[#04DC0C] font-bold text-sm">2</div>
            <p className="text-sm text-white/90">Sistema de reputación y reseñas bidireccionales.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#04DC0C]/20 flex items-center justify-center shrink-0 text-[#04DC0C] font-bold text-sm">3</div>
            <p className="text-sm text-white/90">Reducción de conflictos mediante transparencia.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#04DC0C]/20 flex items-center justify-center shrink-0 text-[#04DC0C] font-bold text-sm">4</div>
            <p className="text-sm text-white/90">Filtros detallados por nivel, modalidad y disponibilidad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
