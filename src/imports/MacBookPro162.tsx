import imgAmarillo1 from "figma:asset/cb20fcdbacc16507d7d00c46bb67645d527e6326.png";

export default function MacBookPro() {
  return (
    <div className="bg-[#181818] relative size-full" data-name="MacBook Pro 16' - 2">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[60px] left-[119px] not-italic text-[65.596px] text-nowrap text-white top-[157px] whitespace-pre">Objetivos y método</p>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[52px] left-[119px] not-italic text-[32px] text-nowrap text-white top-[299px] whitespace-pre">
        <p className="mb-0">Objetivos: entender hábitos, fricciones y uso tecnológico de operadores y managers.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Método: desk research con fuentes oficiales (INEGI/ENDUTIH, DataMéxico, IMT, CANACAR), `}</p>
        <p className="mb-0">prensa especializada y entrevistasen video.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Entregables: personas, mapa de viaje, oportunidades de UX y métricas clave.</p>
      </div>
      <div className="absolute h-[717px] left-[696px] top-[611px] w-[1338px]" data-name="amarillo 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-lighten object-50%-50% object-cover pointer-events-none size-full" src={imgAmarillo1} />
      </div>
    </div>
  );
}