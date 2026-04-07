import React from 'react';
import { Search, Send, Home, Calendar, Users, User, Settings, Bell, MessageCircle, Filter, ChevronLeft, Mic } from 'lucide-react';
import { motion } from 'motion/react';

export function AiScreen() {
  return (
    <div className="bg-[#0a0a0a] w-full h-full rounded-[30px] overflow-hidden relative font-['Montserrat'] flex flex-col border border-white/10 shadow-2xl">
        {/* Ambient Background */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#00FF88]/20 blur-[100px] rounded-full pointer-events-none" />

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 pt-20 relative z-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#00FF88]/20 to-[#009954]/20 flex items-center justify-center mb-8 border border-[#00FF88]/30 shadow-[0_0_30px_rgba(0,255,136,0.1)]">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#00FF88] to-[#009954] blur-md opacity-80 animate-pulse" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-2 tracking-wider">SPRINTIA AI</h2>
            <p className="text-[#888] text-sm mb-12">¿Qué necesitas hoy?</p>

            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {[
                    "Buscar portero en CDMX",
                    "Equipos cerca de mí",
                    "Organizar partido este fin de semana",
                    "Defensas nivel intermedio"
                ].map((text, i) => (
                    <button key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-left hover:bg-white/10 hover:border-[#00FF88]/30 transition-all group">
                        <p className="text-[13px] text-white/80 group-hover:text-white leading-snug">{text}</p>
                    </button>
                ))}
            </div>
        </div>

        {/* Input Area */}
        <div className="p-6 pb-8 relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-2 flex items-center gap-3 pr-4">
                <input 
                    type="text" 
                    placeholder="Envía un mensaje..." 
                    className="bg-transparent border-none outline-none text-white text-sm flex-1 pl-4 h-12 placeholder:text-white/30"
                />
                <button className="w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center text-[#00FF88] hover:bg-[#00FF88]/20 transition-colors">
                    <Send size={18} />
                </button>
            </div>
            <p className="text-[10px] text-white/30 text-center mt-4">Sprintia AI puede cometer errores. Verifica la información importante.</p>
        </div>

        {/* Tab Bar */}
        <div className="h-20 border-t border-white/10 bg-[#0a0a0a] flex items-center justify-around px-2">
            <div className="flex flex-col items-center gap-1 opacity-50">
                <Home size={22} className="text-white" />
                <span className="text-[10px] text-white">Home</span>
            </div>
            <div className="flex flex-col items-center gap-1 opacity-50">
                <Calendar size={22} className="text-white" />
                <span className="text-[10px] text-white">Partidos</span>
            </div>
            <div className="relative -top-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#00FF88] to-[#009954] flex items-center justify-center shadow-[0_4px_20px_rgba(0,255,136,0.4)] border-4 border-[#0a0a0a]">
                    <span className="font-bold text-[#0a0a0a] text-xs">AI</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 opacity-50">
                <Users size={22} className="text-white" />
                <span className="text-[10px] text-white">Comunidad</span>
            </div>
            <div className="flex flex-col items-center gap-1 opacity-50">
                <User size={22} className="text-white" />
                <span className="text-[10px] text-white">Perfil</span>
            </div>
        </div>
    </div>
  );
}

export function MatchesScreen() {
    return (
      <div className="bg-[#0a0a0a] w-full h-full rounded-[30px] overflow-hidden relative font-['Montserrat'] flex flex-col border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="pt-14 px-6 pb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white tracking-wide">PARTIDOS</h2>
              <div className="flex gap-4">
                  <MessageCircle size={22} className="text-white/80" />
                  <div className="relative">
                    <Bell size={22} className="text-white/80" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#0a0a0a]" />
                  </div>
              </div>
          </div>

          <p className="px-6 text-white/50 text-xs mb-6">Encuentra y únete a partidos en tu zona</p>

          {/* Search */}
          <div className="px-6 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl flex items-center px-4 h-12 gap-3">
                  <Search size={18} className="text-white/30" />
                  <input type="text" placeholder="Buscar partidos, equipos..." className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-white/30" />
              </div>
          </div>

          {/* Filters */}
          <div className="px-6 mb-8 flex gap-3 overflow-x-auto no-scrollbar">
              <button className="bg-[#00FF88] text-black px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">
                  Mis Partidos
              </button>
              <button className="bg-white/5 text-white/70 border border-white/10 px-5 py-2 rounded-full text-xs font-medium whitespace-nowrap hover:bg-white/10">
                  Todos
              </button>
              <button className="bg-white/5 text-white/70 border border-white/10 px-5 py-2 rounded-full text-xs font-medium whitespace-nowrap hover:bg-white/10">
                  Disponibles
              </button>
              <button className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Filter size={14} className="text-white/70" />
              </button>
          </div>

          {/* Match Cards */}
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-24 no-scrollbar">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111] rounded-2xl p-5 border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FF88] via-transparent to-transparent opacity-50" />
                  
                  <div className="flex justify-between items-center mb-6 text-[10px] text-white/40 uppercase tracking-widest font-medium">
                      <span>Torneo</span>
                      <span>Sábado • 18:00</span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col items-center gap-2 w-1/3">
                          <div className="w-12 h-12 rounded-full bg-white/5 p-2 flex items-center justify-center border border-white/5">
                            <div className="w-8 h-8 rounded-full bg-blue-900/50" />
                          </div>
                          <span className="text-[11px] text-white font-medium text-center">Rayados FC</span>
                          <span className="text-[9px] text-[#00FF88]">• Local</span>
                      </div>

                      <div className="w-1/3 flex flex-col items-center">
                          <div className="bg-[#0a0a0a] border border-white/10 px-4 py-2 rounded-lg mb-1">
                              <span className="text-xl font-bold text-white tracking-widest">1-2</span>
                          </div>
                          <span className="text-[9px] text-white/30">Finalizado</span>
                      </div>

                      <div className="flex flex-col items-center gap-2 w-1/3">
                          <div className="w-12 h-12 rounded-full bg-white/5 p-2 flex items-center justify-center border border-white/5">
                             <div className="w-8 h-8 rounded-full bg-yellow-600/50" />
                          </div>
                          <span className="text-[11px] text-white font-medium text-center">Tigres Utd</span>
                          <span className="text-[9px] text-white/40">Visitante</span>
                      </div>
                  </div>

                  <div className="flex items-center justify-center pt-4 border-t border-white/5">
                      <span className="text-[11px] text-white/60 font-medium">Estadio Municipal</span>
                  </div>
              </div>

               {/* Card 2 */}
               <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111] rounded-2xl p-5 border border-white/5 relative overflow-hidden group">
                  <div className="flex justify-between items-center mb-6 text-[10px] text-white/40 uppercase tracking-widest font-medium">
                      <span>Liga</span>
                      <span>Domingo • 10:00</span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col items-center gap-2 w-1/3">
                          <div className="w-12 h-12 rounded-full bg-white/5 p-2 flex items-center justify-center border border-white/5">
                             <div className="w-8 h-8 rounded-full bg-red-900/50" />
                          </div>
                          <span className="text-[11px] text-white font-medium text-center">Águilas FC</span>
                          <span className="text-[9px] text-[#00FF88]">• Local</span>
                      </div>

                      <div className="w-1/3 flex flex-col items-center">
                         <div className="bg-[#0a0a0a] border border-white/10 px-4 py-2 rounded-lg mb-1">
                              <span className="text-xl font-bold text-white tracking-widest">3-0</span>
                          </div>
                          <span className="text-[9px] text-[#00FF88]">En Vivo</span>
                      </div>

                      <div className="flex flex-col items-center gap-2 w-1/3">
                          <div className="w-12 h-12 rounded-full bg-white/5 p-2 flex items-center justify-center border border-white/5">
                             <div className="w-8 h-8 rounded-full bg-blue-900/50" />
                          </div>
                          <span className="text-[11px] text-white font-medium text-center">Rayados FC</span>
                          <span className="text-[9px] text-white/40">Visitante</span>
                      </div>
                  </div>

                  <div className="flex items-center justify-center pt-4 border-t border-white/5">
                      <span className="text-[11px] text-white/60 font-medium">Complejo Deportivo Valle</span>
                  </div>
              </div>
          </div>

          {/* Tab Bar (Duplicate for visual consistency) */}
          <div className="absolute bottom-0 w-full h-20 border-t border-white/10 bg-[#0a0a0a] flex items-center justify-around px-2">
            <div className="flex flex-col items-center gap-1 opacity-50">
                <Home size={22} className="text-white" />
                <span className="text-[10px] text-white">Home</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-[#00FF88]">
                <Calendar size={22} className="text-[#00FF88]" />
                <span className="text-[10px]">Partidos</span>
            </div>
            <div className="relative -top-6">
                <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center border-4 border-[#0a0a0a]">
                     <div className="w-full h-full rounded-full flex items-center justify-center border border-white/20">
                        <span className="font-bold text-white text-xs">AI</span>
                     </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 opacity-50">
                <Users size={22} className="text-white" />
                <span className="text-[10px] text-white">Comunidad</span>
            </div>
            <div className="flex flex-col items-center gap-1 opacity-50">
                <User size={22} className="text-white" />
                <span className="text-[10px] text-white">Perfil</span>
            </div>
        </div>
      </div>
    );
  }
