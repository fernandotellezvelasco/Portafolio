import imgAmarillo1 from "figma:asset/cb20fcdbacc16507d7d00c46bb67645d527e6326.png";
import imgIphoneBego21 from "figma:asset/0108e8c2be06175ecb5f092c91e4b10a31de4cc1.png";

export default function MacBookPro() {
  return (
    <div className="bg-[#1a1a1a] relative size-full" data-name="MacBook Pro 16' - 1">
      <div className="absolute h-[1143px] left-[512px] top-[-26px] w-[1216px]" />
      <div className="absolute bg-gradient-to-r from-[rgba(255,238,0,0.5)] h-[185px] left-[864px] rounded-[46px] to-[rgba(26,27,27,0)] top-[488px] w-[1014px]" />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[60px] left-[913px] not-italic text-[0px] text-nowrap text-white top-[519px] whitespace-pre">
        <p className="mb-0 text-[65.596px]">
          <span className="font-['Poppins:Regular',sans-serif] not-italic">Research UX/UI</span>{" "}
        </p>
        <p className="text-[36px] tracking-[32.4px]">DRIVER</p>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[52px] left-[904px] not-italic text-[32px] text-nowrap text-white top-[705px] whitespace-pre">
        <p className="mb-0">{`Tema: Perfil real de usuarios — `}</p>
        <p className="mb-0">Operador (driver) y Jefe de tráfico/Manager</p>
        <p className="mb-0">Entregable: hallazgos accionables</p>
        <p className="mb-0">{`Corte temporal: 1999–2025 `}</p>
        <p>(con foco en datos 2023–2025)</p>
      </div>
      <div className="absolute h-[717px] left-[-434px] top-[233px] w-[1338px]" data-name="amarillo 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-lighten object-50%-50% object-cover pointer-events-none size-full" src={imgAmarillo1} />
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.22984151542186737)+(var(--transform-inner-height)*0.9732280969619751)))] items-center justify-center left-[-2px] top-[-106px] w-[calc(1px*((var(--transform-inner-height)*0.22984151542186737)+(var(--transform-inner-width)*0.9732280969619751)))]" style={{ "--transform-inner-width": "651.375", "--transform-inner-height": "1185.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[346.712deg]">
          <div className="h-[1185.8px] relative w-[651.379px]" data-name="iphone bego 2 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIphoneBego21} />
          </div>
        </div>
      </div>
    </div>
  );
}