import svgPaths from "./svg-4dbgf8hkj5";
import imgImageBegoApp from "figma:asset/00e01e802a47dd2a073df85ecb3d931c9a9df05c.png";
import imgWireframes1 from "figma:asset/2cc6d581963c8b0c3108196450ca02982bd83eb7.png";

function ImageBegoApp() {
  return (
    <div className="absolute h-[640px] left-0 top-0 w-[1024px]" data-name="Image (BEGO APP)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBegoApp} />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p220558f0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch flex items-center justify-center left-[472px] pl-[4px] pr-0 py-0 rounded-[1.67772e+07px] size-[80px] top-[280px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.16)] h-[640px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.06)] w-[1024px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[640px] left-0 top-0 w-[1024px]" data-name="Container">
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_120px_60px_inset_rgba(11,11,11,0.95)]" />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[640px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <ImageBegoApp />
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function ProjectModal() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[1024px]" data-name="ProjectModal">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.7125px] whitespace-pre">BEGO APP</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[21px] opacity-50 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[2.6496px] uppercase whitespace-pre">Categoría</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">App Móvil</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[21px] opacity-50 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[2.6496px] uppercase whitespace-pre">Año</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">2025</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[21px] opacity-50 relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[2.6496px] uppercase whitespace-pre">Rol</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">DISEÑADOR UX UI</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function ProjectModal1() {
  return (
    <div className="absolute box-border gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[102px] left-0 pb-[49px] pt-0 px-0 top-[56px] w-[1024px]" data-name="ProjectModal">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container5 />
      <Container8 />
      <Container11 />
    </div>
  );
}

function ProjectModal2() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[182px] leading-[26px] left-0 not-italic opacity-80 text-[16px] text-white top-[206px] tracking-[-0.3125px] w-[1024px]" data-name="ProjectModal">
      <p className="absolute left-0 top-[-0.5px] w-[1021px]">Bego Driver es una aplicación diseñada para optimizar la gestión logística y el transporte de mercancías. Permite a los conductores coordinar entregas, monitorear rutas en tiempo real y mantener una comunicación eficiente con las empresas y clientes, mejorando la trazabilidad y la eficiencia operativa en cada envío.</p>
      <p className="absolute left-0 top-[103.5px] w-[962px]">Como Diseñador UX/UI, participé en el desarrollo de la plataforma web y la app móvil, creando experiencias claras e intuitivas que simplificaron procesos logísticos complejos. A través del rediseño de la interfaz y la optimización del flujo de usuario, logré mejorar la usabilidad, reducir tiempos de operación y aportar una experiencia más fluida tanto para conductores como para administradores.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 opacity-60 top-0 w-[1024px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[-0.1504px] whitespace-pre">*Diseño anterior antes del rediseño</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[gold] h-[36px] left-0 rounded-[8px] top-[37px] w-[128.633px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[17px] not-italic text-[14px] text-black text-nowrap top-[7.5px] tracking-[-0.3004px] whitespace-pre">Descargar app</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 opacity-70 top-[121px] w-[1024px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[2.8875px] uppercase whitespace-pre">WIREFRAMES</p>
    </div>
  );
}

function ProjectModal3() {
  return (
    <div className="absolute h-[145px] left-0 top-[428px] w-[1024px]" data-name="ProjectModal">
      <Paragraph />
      <Link1 />
      <Heading />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[573px] relative shrink-0 w-full" data-name="Container">
      <ProjectModal />
      <ProjectModal1 />
      <ProjectModal2 />
      <ProjectModal3 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.16)] h-[640px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.06)] w-[1024px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[640px] left-0 top-0 w-[1024px]" data-name="Container">
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_120px_60px_inset_rgba(11,11,11,0.95)]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[640px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute h-[636px] left-[111px] top-0 w-[802px]" data-name="wireframes 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWireframes1} />
      </div>
      <Container13 />
      <Container14 />
    </div>
  );
}

function ProjectModal4() {
  return (
    <div className="h-[21px] opacity-50 relative shrink-0 w-full" data-name="ProjectModal">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[2.6496px] uppercase whitespace-pre">Créditos</p>
    </div>
  );
}

function ProjectModal5() {
  return (
    <div className="h-[24px] opacity-80 relative shrink-0 w-full" data-name="ProjectModal">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Diseño: colaboración con equipo de diseño, Desarrollo IOS y Android</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[110px] items-start pb-0 pt-[49px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <ProjectModal4 />
      <ProjectModal5 />
    </div>
  );
}

function ProjectModal6() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[2139px] items-start relative shrink-0 w-full" data-name="ProjectModal">
      <Link />
      <Container12 />
      <Container15 />
      <Container16 />
    </div>
  );
}

export default function Container17() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[151px] pr-[166px] relative size-full">
          <ProjectModal6 />
        </div>
      </div>
    </div>
  );
}