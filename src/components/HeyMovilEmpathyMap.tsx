import { MessageSquare, Brain, MousePointerClick, Heart } from 'lucide-react';

export function HeyMovilEmpathyMap() {
  return (
    <div className="bg-[#111] rounded-2xl p-8 border border-white/10 mt-8">
      <h3 className="text-xl font-medium text-white mb-6">Mapa de Empatía</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* DICE */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border-l-4 border-[#FFEE00] relative overflow-hidden group hover:bg-[#222] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 text-[#FFEE00]" />
            <h4 className="text-lg font-bold text-white">¿Qué Dice?</h4>
          </div>
          <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside marker:text-[#FFEE00]">
            <li>"Necesito saber cuánto estamos gastando en total este mes."</li>
            <li>"No tengo tiempo para llamar a atención al cliente por cada línea que falla."</li>
            <li>"Quiero una factura única y clara para toda la flota."</li>
            <li>"¿Por qué es tan difícil cancelar un plan?"</li>
          </ul>
        </div>
        
        {/* PIENSA */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border-l-4 border-[#FFEE00] relative overflow-hidden group hover:bg-[#222] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-5 h-5 text-[#FFEE00]" />
            <h4 className="text-lg font-bold text-white">¿Qué Piensa?</h4>
          </div>
          <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside marker:text-[#FFEE00]">
            <li>Que las telefónicas actuales son burocráticas y obsoletas.</li>
            <li>Que debería ser más fácil autogestionar los servicios en línea.</li>
            <li>Le preocupa exceder el presupuesto mensual sin darse cuenta.</li>
            <li>Valora más la eficiencia que el precio más bajo.</li>
          </ul>
        </div>
        
        {/* HACE */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border-l-4 border-[#FFEE00] relative overflow-hidden group hover:bg-[#222] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <MousePointerClick className="w-5 h-5 text-[#FFEE00]" />
            <h4 className="text-lg font-bold text-white">¿Qué Hace?</h4>
          </div>
          <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside marker:text-[#FFEE00]">
            <li>Usa hojas de cálculo complejas para controlar los gastos manuales.</li>
            <li>Delega tareas operativas a su asistente pero supervisa los costos finales.</li>
            <li>Compara proveedores constantemente buscando mejor servicio.</li>
            <li>Revisa las facturas con lupa buscando errores.</li>
          </ul>
        </div>
        
        {/* SIENTE */}
        <div className="bg-[#1A1A1A] p-6 rounded-xl border-l-4 border-[#FFEE00] relative overflow-hidden group hover:bg-[#222] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-[#FFEE00]" />
            <h4 className="text-lg font-bold text-white">¿Qué Siente?</h4>
          </div>
          <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside marker:text-[#FFEE00]">
            <li>Frustración por la falta de claridad y control.</li>
            <li>Desconfianza ante cobros indebidos o "letras chiquitas".</li>
            <li>Estrés cuando la operación se detiene por falta de conectividad.</li>
            <li>Alivio y satisfacción cuando encuentra herramientas que ahorran tiempo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}