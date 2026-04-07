import svgPaths from "./svg-xcujdrc4g1";
import imgAttentionInsightHeatmap from "figma:asset/7f1a314abb56547c9363068ae008ce648714ff9b.png";
import imgAttentionInsightFocusMap from "figma:asset/0160f1ffe30133f5deb4e2a573ece5287847ed8e.png";
import imgAttentionInsightContrastMap from "figma:asset/5965897340332e9740bad17e5e1a0138cf551d5b.png";

function BatteryPercentage() {
  return (
    <div className="h-[13.667px] relative shrink-0 w-[27.333px]" data-name="Battery/Percentage">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3333 13.6667">
        <g id="Battery/Percentage">
          <rect fill="var(--fill-0, #FEFEFE)" height="9" id="percent" rx="2.66667" width="10.3333" x="2" y="2.33341" />
          <g id="battery" opacity="0.4">
            <path clipRule="evenodd" d={svgPaths.p2b4515f0} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path d={svgPaths.pc45a800} fill="var(--fill-0, #FEFEFE)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusPro() {
  return (
    <div className="absolute content-stretch flex gap-[8px] inset-[18.93%_5.34%_64.07%_71.84%] items-center justify-end" data-name="Status/Pro">
      <div className="h-[12.333px] relative shrink-0 w-[19.333px]" data-name="Cellular">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3333 12.3333">
          <g id="Cellular">
            <path d={svgPaths.p8bdef00} fill="var(--fill-0, #FEFEFE)" />
            <path d={svgPaths.p12dc6500} fill="var(--fill-0, #FEFEFE)" />
            <path d={svgPaths.p5f0ea00} fill="var(--fill-0, #FEFEFE)" />
            <path d={svgPaths.p189c4440} fill="var(--fill-0, #FEFEFE)" />
          </g>
        </svg>
      </div>
      <div className="h-[12.333px] relative shrink-0 w-[17px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12.3333">
          <path clipRule="evenodd" d={svgPaths.p70af300} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <BatteryPercentage />
    </div>
  );
}

function Act() {
  return (
    <div className="absolute contents inset-[16%_5.34%_64%_9.71%]" data-name="Act">
      <StatusPro />
      <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] inset-[16%_77.18%_64%_9.71%] leading-[normal] not-italic text-[#fefefe] text-[17px] tracking-[-0.4px] whitespace-pre-wrap">9:41</p>
    </div>
  );
}

function IconFlechasIzquierdaSmall() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon - Flechas Izquierda Small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon - Flechas Izquierda Small">
          <path d={svgPaths.p12221600} fill="var(--fill-0, #FEFEFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return <div className="shrink-0 size-[32px]" />;
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[360px]">
      <IconFlechasIzquierdaSmall />
      <div className="flex flex-col font-['Gotham:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fefefe] text-[20px] text-center w-[286px]">
        <p className="leading-[normal] whitespace-pre-wrap">Crear Orden</p>
      </div>
      <Frame1 />
    </div>
  );
}

function IconNotificacion() {
  return (
    <div className="absolute left-[333px] size-[22px] top-[5px]" data-name="Icon - Notificación">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon - NotificaciÃ³n">
          <g id="Vector">
            <path d={svgPaths.p1753b5f0} fill="var(--fill-0, #FEFEFE)" />
            <path d={svgPaths.p22b73500} fill="var(--fill-0, #FEFEFE)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[7.69%] left-1/2 top-[59.62%] w-[360px]">
      <Frame />
      <IconNotificacion />
    </div>
  );
}

function HeaderResponsive() {
  return (
    <div className="absolute h-[104px] left-0 top-0 w-[412px]" data-name="Header Responsive">
      <Act />
      <div className="absolute bg-[#006470] inset-0 rounded-bl-[20px] rounded-br-[20px]" />
      <Frame3 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-[#f7fafa] content-stretch flex flex-col h-[80px] items-center mb-[-13px] px-[12px] py-[10px] relative rounded-[15px] shrink-0 w-[170px]">
      <div aria-hidden="true" className="absolute border border-[#006470] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Detalle de Orden</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[10px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Detalles de Orden y Documentación</p>
      </div>
    </div>
  );
}

function IconStepActual() {
  return (
    <div className="mb-[-13px] relative shrink-0 size-[24px]" data-name="Icon - Step Actual">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-[calc(50%+0.5px)]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Vector">
            <path d={svgPaths.ped68152} fill="#006470" />
          </g>
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-1/2 not-italic text-[#fefefe] text-[16px] text-center top-[calc(50%-11.5px)] tracking-[0.048px]">1</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[13px] relative shrink-0">
      <Frame111 />
      <IconStepActual />
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col h-[80px] items-center mb-[-13px] px-[12px] py-[10px] relative rounded-[15px] shrink-0 w-[170px]">
      <div aria-hidden="true" className="absolute border border-[#006470] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Caja/Contenedor</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[10px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Relaciona Cajas/Contenedores con candado</p>
      </div>
    </div>
  );
}

function IconNextStep() {
  return (
    <div className="mb-[-13px] relative shrink-0 size-[24px]" data-name="Icon - Next Step">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-[calc(50%+0.5px)]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Vector">
            <path d={svgPaths.ped68152} fill="#FEFEFE" />
            <path d={svgPaths.p199ccff0} fill="var(--fill-0, #006470)" />
          </g>
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-1/2 not-italic text-[#006470] text-[16px] text-center top-[calc(50%-11.5px)] tracking-[0.048px]">2</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[13px] relative shrink-0">
      <Frame112 />
      <IconNextStep />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame115 />
      <Frame113 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] whitespace-nowrap">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal]">No. de Orden</p>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.5px]">
        <p className="leading-[normal]">PVWERY1236</p>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#4b4b4b] whitespace-nowrap">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal]">Nombre del importador:</p>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">Johnathan Doe Doe</p>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[310px]">
      <Frame105 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal]">RFC:</p>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">VECJ880326</p>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal]">No. de Pedimento:</p>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">34D5647GH762HHJ</p>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#4b4b4b] w-[310px] whitespace-nowrap">
      <Frame106 />
      <Frame107 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#f7fafa] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[24px] relative w-full">
          <Frame127 />
          <Frame128 />
        </div>
      </div>
    </div>
  );
}

function IconFlechasAbajoSmall() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon - Flechas Abajo Small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon - Flechas Abajo Small">
          <path d={svgPaths.p2d296200} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[10px] h-[18px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b4b4b] text-[16px]">
        <p className="leading-[normal] whitespace-pre-wrap">Documentación</p>
      </div>
      <IconFlechasAbajoSmall />
    </div>
  );
}

function MobileListCard() {
  return (
    <div className="bg-[#f7fafa] relative rounded-[12px] shrink-0 w-full" data-name="Mobile - List Card">
      <div className="content-stretch flex flex-col items-start px-[19px] py-[12px] relative w-full">
        <Frame116 />
      </div>
    </div>
  );
}

function AcordeonResumen() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Acordeón Resumen">
      <MobileListCard />
    </div>
  );
}

function IconFlechasAbajoSmall1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon - Flechas Abajo Small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon - Flechas Abajo Small">
          <path d={svgPaths.p2d296200} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[10px] h-[18px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b4b4b] text-[16px]">
        <p className="leading-[normal] whitespace-pre-wrap">Resumen</p>
      </div>
      <IconFlechasAbajoSmall1 />
    </div>
  );
}

function MobileListCard1() {
  return (
    <div className="bg-[#f7fafa] relative rounded-[12px] shrink-0 w-full" data-name="Mobile - List Card">
      <div className="content-stretch flex flex-col items-start px-[19px] py-[12px] relative w-full">
        <Frame117 />
      </div>
    </div>
  );
}

function AcordeonResumen1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Acordeón Resumen">
      <MobileListCard1 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-center relative shrink-0 w-full">
      <Frame114 />
      <Frame125 />
      <Frame134 />
      <AcordeonResumen />
      <AcordeonResumen1 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[19px] relative w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#616161] text-[17.477px] tracking-[0.4369px]">Documentación</p>
        </div>
      </div>
    </div>
  );
}

function IconMail() {
  return (
    <div className="relative shrink-0 size-[20.972px]" data-name="Icon - Mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9722 20.9722">
        <g id="Icon - Mail">
          <path clipRule="evenodd" d={svgPaths.p1f389c00} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex h-full items-end justify-center py-[5.243px] relative shrink-0">
      <IconMail />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[20.972px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[12.234px] whitespace-nowrap">
        <p className="leading-[23.594px]">Email</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8.738px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[13.981px] tracking-[-0.5243px] whitespace-nowrap">
        <p className="leading-[normal]">jondoe@gmail.com|</p>
      </div>
    </div>
  );
}

function IconXSalir() {
  return (
    <div className="relative shrink-0 size-[13.981px]" data-name="Icon - X Salir">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9814 13.9814">
        <g id="Icon - X Salir">
          <path d={svgPaths.p3d3d5c80} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#fefefe] relative rounded-[21.846px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[21.846px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20.972px] pr-[7.865px] py-[6.117px] relative w-full">
          <Frame99 />
          <IconXSalir />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[260px]" data-name="Input">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-center justify-end relative shrink-0">
      <Input />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[17px] items-end justify-center relative shrink-0 w-full">
      <div className="flex flex-row items-end self-stretch">
        <Frame93 />
      </div>
      <Frame131 />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[13.981px] relative shrink-0 w-full" data-name="Component 5">
      <div className="absolute inset-[6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2338 12.2338">
          <circle cx="6.11688" cy="6.11688" fill="var(--fill-0, #006470)" id="Ellipse 217" r="6.11688" />
        </svg>
      </div>
      <div className="absolute inset-1/4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99072 6.99072">
          <circle cx="3.49536" cy="3.49536" fill="var(--fill-0, #FEFEFE)" id="Ellipse 216" r="3.49536" />
        </svg>
      </div>
    </div>
  );
}

function IconPin() {
  return (
    <div className="relative shrink-0 size-[13.981px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9814 13.9814">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pc39e500} fill="var(--fill-0, #006470)" fillRule="evenodd" />
            <path d={svgPaths.p3177bf80} fill="var(--fill-0, #006470)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OrigenDestino() {
  return (
    <div className="content-stretch flex flex-col gap-[4.369px] items-center justify-center relative shrink-0 w-[13.981px]" data-name="Origen / Destino">
      <Component />
      <div className="bg-[#d9d9d9] h-[66.412px] shrink-0 w-[0.874px]" />
      <IconPin />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex h-full items-end justify-center overflow-clip py-[8.738px] relative shrink-0">
      <OrigenDestino />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8.738px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[13.981px] tracking-[-0.5243px] whitespace-nowrap">
        <p className="leading-[normal]">Origen</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#fefefe] flex-[1_0_0] min-h-px min-w-px relative rounded-[21.846px]">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[21.846px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20.972px] pr-[7.865px] py-[6.117px] relative w-full">
          <Frame97 />
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex h-[35px] items-center justify-between relative shrink-0 w-[260px]" data-name="Input">
      <Frame8 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-center justify-end relative shrink-0">
      <Input1 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8.738px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[13.981px] tracking-[-0.5243px] whitespace-nowrap">
        <p className="leading-[normal]">Destino</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#fefefe] flex-[1_0_0] min-h-px min-w-px relative rounded-[21.846px]">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[21.846px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20.972px] pr-[7.865px] py-[6.117px] relative w-full">
          <Frame98 />
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex h-[35px] items-center justify-between relative shrink-0 w-[260px]" data-name="Input">
      <Frame9 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-center justify-end relative shrink-0">
      <Input2 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame132 />
      <Frame133 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[17px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame94 />
      </div>
      <Frame79 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame83 />
      <Frame80 />
    </div>
  );
}

function IconPoliceAduana() {
  return (
    <div className="relative shrink-0 size-[20.972px]" data-name="Icon - Police Aduana">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9722 20.9722">
        <g id="Icon - Police Aduana">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3b07b400} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2672900} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[10.486px] h-[19.224px] items-center relative shrink-0 w-full">
      <IconPoliceAduana />
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b4b4b] text-[13.981px] text-center tracking-[-0.5243px]">
        <p className="leading-[normal] whitespace-pre-wrap">Aduanas</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col gap-[6.991px] h-[33.206px] items-center justify-center px-[20.972px] py-[7.865px] relative rounded-[21.846px] shrink-0 w-[139.814px]" data-name="Button">
      <Frame76 />
    </div>
  );
}

function IconLupaBuscar() {
  return (
    <div className="absolute right-[4.23px] size-[13.981px] top-[4.37px]" data-name="Icon - Lupa Buscar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9814 13.9814">
        <g id="Icon - Lupa Buscar">
          <path d={svgPaths.p143ce400} fill="var(--fill-0, #A6A6A6)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[22.72px] relative shrink-0 w-[7.865px]">
      <IconLupaBuscar />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8.738px] items-center min-h-px min-w-px relative">
      <Frame11 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[13.981px] tracking-[-0.5243px] whitespace-nowrap">
        <p className="leading-[normal]">Buscar</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#fefefe] flex-[1_0_0] min-h-px min-w-px relative rounded-[21.846px]">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[21.846px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20.972px] pr-[7.865px] py-[6.117px] relative w-full">
          <Frame100 />
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex h-[34.954px] items-center justify-between relative shrink-0 w-[136.319px]" data-name="Input">
      <Frame10 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[14.855px] items-center justify-center relative shrink-0 w-full">
      <Button />
      <Input3 />
    </div>
  );
}

function IconPin1() {
  return (
    <div className="relative shrink-0 size-[19.224px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2245 19.2245">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28f14400} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p2d5e9d80} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[244.675px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] text-[10.486px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Perif. Blvd. Manuel Ávila Camacho 3130, Valle...</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] text-[8.738px] w-full whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de México...</p>
    </div>
  );
}

function Listas() {
  return (
    <div className="content-stretch flex gap-[12.234px] items-center justify-center relative shrink-0 w-[277.881px]" data-name="Listas">
      <IconPin1 />
      <Frame18 />
    </div>
  );
}

function IconPin2() {
  return (
    <div className="relative shrink-0 size-[19.224px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2245 19.2245">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28f14400} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p2d5e9d80} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[244.675px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] text-[10.486px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Perif. Blvd. Manuel Ávila Camacho 3130, Valle...</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] text-[8.738px] w-full whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de México...</p>
    </div>
  );
}

function Listas1() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-between px-[8.738px] py-[3.495px] relative rounded-[8.738px] shrink-0 w-[291.863px]" data-name="Listas">
      <IconPin2 />
      <Frame19 />
    </div>
  );
}

function IconPin3() {
  return (
    <div className="relative shrink-0 size-[19.224px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2245 19.2245">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28f14400} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p2d5e9d80} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[244.675px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] text-[10.486px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Perif. Blvd. Manuel Ávila Camacho 3130, Valle...</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] text-[8.738px] w-full whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de México...</p>
    </div>
  );
}

function Listas2() {
  return (
    <div className="content-stretch flex gap-[12.234px] items-center justify-center relative shrink-0 w-[277.881px]" data-name="Listas">
      <IconPin3 />
      <Frame20 />
    </div>
  );
}

function IconPin4() {
  return (
    <div className="relative shrink-0 size-[19.224px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2245 19.2245">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28f14400} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p2d5e9d80} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[244.675px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] text-[10.486px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Perif. Blvd. Manuel Ávila Camacho 3130, Valle...</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] text-[8.738px] w-full whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de México...</p>
    </div>
  );
}

function Listas3() {
  return (
    <div className="content-stretch flex gap-[12.234px] items-center justify-center relative shrink-0 w-[277.881px]" data-name="Listas">
      <IconPin4 />
      <Frame21 />
    </div>
  );
}

function IconPin5() {
  return (
    <div className="relative shrink-0 size-[19.224px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2245 19.2245">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28f14400} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p2d5e9d80} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[244.675px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] text-[10.486px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Perif. Blvd. Manuel Ávila Camacho 3130, Valle...</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] text-[8.738px] w-full whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de México...</p>
    </div>
  );
}

function Listas4() {
  return (
    <div className="content-stretch flex gap-[12.234px] items-center justify-center relative shrink-0 w-[277.881px]" data-name="Listas">
      <IconPin5 />
      <Frame22 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-[277.881px]">
      <Listas />
      <Listas1 />
      <Listas2 />
      <Listas3 />
      <Listas4 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame82 />
      <div className="bg-[#d9d9d9] h-[0.874px] rounded-[39.323px] shrink-0 w-[286.62px]" />
      <Frame84 />
      <Frame86 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="bg-[#f7fafa] content-stretch flex flex-col gap-[24px] items-center justify-center py-[24px] relative rounded-[24.468px] shrink-0 w-full">
      <Frame74 />
      <Frame88 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[27px] items-start left-1/2 top-[-435px] w-[360px]">
      <Frame135 />
      <Frame141 />
    </div>
  );
}

function KeyboardOption() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(235,235,237,0.9)] h-[44px] overflow-clip relative shrink-0 w-full" data-name="Keyboard/Option">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic right-[15px] text-[#007aff] text-[15px] text-right top-[calc(50%+1px)] whitespace-nowrap">
        <p className="leading-[normal]">Done</p>
      </div>
      <div className="-translate-y-1/2 absolute h-[9px] left-[57.25px] top-[calc(50%+0.25px)] w-[17px]" data-name="down">
        <div className="absolute inset-[-8.33%_-4.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 10.5">
            <path d={svgPaths.pe4cdac0} id="down" stroke="var(--stroke-0, #A4ADB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute h-[9px] left-[18.75px] top-[calc(50%-0.25px)] w-[17px]" data-name="up">
        <div className="absolute inset-[-8.33%_-4.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 10.5">
            <path d={svgPaths.p3dd15ca0} id="up" stroke="var(--stroke-0, #007AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function KeyboardSuggestion() {
  return (
    <div className="bg-[#d4d6dc] content-stretch flex h-[44px] items-center justify-center pb-[6px] pt-[13px] relative shrink-0 w-[375px]" data-name="Keyboard/Suggestion">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[17px] text-black text-center">
        <p className="leading-[normal] whitespace-pre-wrap">Hi</p>
      </div>
      <div className="bg-[#bdbec3] h-[25px] rounded-[1px] shrink-0 w-px" data-name="tr" />
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[17px] text-black text-center">
        <p className="leading-[normal] whitespace-pre-wrap">I</p>
      </div>
      <div className="bg-[#bdbec3] h-[25px] shrink-0 w-px" data-name="tr" />
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[17px] text-black text-center">
        <p className="leading-[normal] whitespace-pre-wrap">Ok</p>
      </div>
    </div>
  );
}

function KeyLetter() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">q</p>
    </div>
  );
}

function KeyLetter1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">W</p>
    </div>
  );
}

function KeyLetter2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">E</p>
    </div>
  );
}

function KeyLetter3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">R</p>
    </div>
  );
}

function KeyLetter4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">T</p>
    </div>
  );
}

function KeyLetter5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">Y</p>
    </div>
  );
}

function KeyLetter6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">U</p>
    </div>
  );
}

function KeyLetter7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">I</p>
    </div>
  );
}

function KeyLetter8() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">O</p>
    </div>
  );
}

function KeyLetter9() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">P</p>
    </div>
  );
}

function Component1stRow() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="1st Row">
      <KeyLetter />
      <KeyLetter1 />
      <KeyLetter2 />
      <KeyLetter3 />
      <KeyLetter4 />
      <KeyLetter5 />
      <KeyLetter6 />
      <KeyLetter7 />
      <KeyLetter8 />
      <KeyLetter9 />
    </div>
  );
}

function KeyLetter10() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.87%] lowercase not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">A</p>
    </div>
  );
}

function KeyLetter11() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.87%] lowercase not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">S</p>
    </div>
  );
}

function KeyLetter12() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.87%] lowercase not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">D</p>
    </div>
  );
}

function KeyLetter13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.87%] lowercase not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">F</p>
    </div>
  );
}

function KeyLetter14() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">G</p>
    </div>
  );
}

function KeyLetter15() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">H</p>
    </div>
  );
}

function KeyLetter16() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">J</p>
    </div>
  );
}

function KeyLetter17() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">K</p>
    </div>
  );
}

function KeyLetter18() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">L</p>
    </div>
  );
}

function Component2ndRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="2nd Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] relative w-full">
          <KeyLetter10 />
          <KeyLetter11 />
          <KeyLetter12 />
          <KeyLetter13 />
          <KeyLetter14 />
          <KeyLetter15 />
          <KeyLetter16 />
          <KeyLetter17 />
          <KeyLetter18 />
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2px)] size-[28px] top-[calc(50%+2px)]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icons">
          <path d={svgPaths.p1e2e0f40} fill="var(--fill-0, black)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function KeyShift() {
  return (
    <div className="bg-[#c7c7cc] relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)] shrink-0 size-[42px]" data-name="Key/Shift">
      <Icons />
    </div>
  );
}

function KeyLetter19() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">Z</p>
    </div>
  );
}

function KeyLetter20() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">X</p>
    </div>
  );
}

function KeyLetter21() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">C</p>
    </div>
  );
}

function KeyLetter22() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">V</p>
    </div>
  );
}

function KeyLetter23() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">B</p>
    </div>
  );
}

function KeyLetter24() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">N</p>
    </div>
  );
}

function KeyLetter25() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Letter">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] lowercase not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-13px)] whitespace-pre-wrap">M</p>
    </div>
  );
}

function Center() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-start min-h-px min-w-px relative" data-name="center">
      <KeyLetter19 />
      <KeyLetter20 />
      <KeyLetter21 />
      <KeyLetter22 />
      <KeyLetter23 />
      <KeyLetter24 />
      <KeyLetter25 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2px)] size-[28px] top-[calc(50%+2px)]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icons">
          <g id="icon">
            <path d={svgPaths.p19083e80} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p2010a570} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function KeySecondary() {
  return (
    <div className="bg-[#c7c7cc] relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)] shrink-0 size-[42px]" data-name="Key/Secondary">
      <Icons1 />
    </div>
  );
}

function Component3rdRow() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0 w-full" data-name="3rd Row">
      <KeyShift />
      <Center />
      <KeySecondary />
    </div>
  );
}

function KeyboardLayout() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Keyboard/Layout">
      <Component1stRow />
      <Component2ndRow />
      <Component3rdRow />
    </div>
  );
}

function KeySecondary1() {
  return (
    <div className="bg-[#aeb3be] h-[42px] relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)] shrink-0 w-[91px]" data-name="Key/Secondary">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center top-[calc(50%-9px)] tracking-[-0.32px] w-[40px] whitespace-pre-wrap">123</p>
    </div>
  );
}

function KeySpace() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key/Space">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[33.25%] lowercase not-italic right-[33.16%] text-[15.5px] text-black text-center top-[calc(50%-10px)] tracking-[-0.1px]">space</p>
    </div>
  );
}

function KeyReturn() {
  return (
    <div className="bg-[#aeb3be] h-[42px] relative rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)] shrink-0 w-[91px]" data-name="Key/Return">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-0 not-italic right-0 text-[16px] text-black text-center top-[calc(50%-10px)] tracking-[-0.32px] whitespace-pre-wrap">return</p>
    </div>
  );
}

function KeyboardInputType() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="Keyboard/Input Type">
      <KeySecondary1 />
      <KeySpace />
      <KeyReturn />
    </div>
  );
}

function Icons2() {
  return (
    <div className="-translate-y-1/2 absolute left-[26px] size-[37.333px] top-[calc(50%+0.17px)]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.3333 37.3333">
        <g id="Icons">
          <path clipRule="evenodd" d={svgPaths.p5359fe0} fill="var(--fill-0, #51555B)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="-translate-y-1/2 absolute right-[20.67px] size-[37.333px] top-[calc(50%+0.17px)]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.3333 37.3333">
        <g id="Icons">
          <path d={svgPaths.p140e8c00} fill="var(--fill-0, #51555B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute h-[33px] left-0 top-0 w-[349px]" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[139px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-black h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

function Component1Indicator() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[24px] bottom-0 h-[33px] left-1/2 w-[375px]" data-name="1. Indicator">
      <HomeIndicator />
    </div>
  );
}

function KeyboardHomeBar() {
  return (
    <div className="h-[75px] relative shrink-0 w-[375px]" data-name="Keyboard/Home Bar">
      <Icons2 />
      <Icons3 />
      <Component1Indicator />
    </div>
  );
}

function KeyboardDefault() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#d4d6dc] bottom-0 content-stretch flex flex-col items-center left-[calc(50%+0.5px)] px-[3px] w-[375px]" data-name="Keyboard/Default">
      <KeyboardOption />
      <KeyboardSuggestion />
      <div className="h-[7px] shrink-0 w-full" data-name="Spacer 7px" />
      <KeyboardLayout />
      <div className="h-[13px] shrink-0 w-full" data-name="Spacer 13px" />
      <KeyboardInputType />
      <KeyboardHomeBar />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 contents left-0">
      <div className="absolute bg-[#d4d6dc] bottom-0 h-[375px] left-0 w-[412px]" />
      <KeyboardDefault />
    </div>
  );
}

function OrdenesPrototipo() {
  return (
    <div className="absolute bg-white h-[917px] left-0 overflow-clip top-0 w-[412px]" data-name="Ordenes - Prototipo">
      <HeaderResponsive />
      <Frame142 />
      <Group />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[12px] h-[22px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#ededed] text-[16px] text-center tracking-[-0.6px]">
        <p className="leading-[normal] whitespace-pre-wrap">Siguiente</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#97b5b9] content-stretch flex flex-col gap-[8px] items-center justify-center left-[50.24%] px-[24px] py-[9px] right-[10.92%] rounded-[25px] top-[calc(50%+385.5px)]" data-name="Button">
      <Frame77 />
    </div>
  );
}

function ClarityScore() {
  return (
    <div className="absolute contents left-[10px] top-[10px]" data-name="Clarity Score">
      <div className="absolute bg-[#f3a861] left-[10px] rounded-[10px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] size-[100px] top-[10px]" data-name="Rectangle" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[60px] not-italic size-[100px] text-[30px] text-center text-white top-[60px]">
        <p className="leading-[normal] whitespace-pre-wrap">50</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-[60px] not-italic text-[12px] text-center text-white top-[94px] w-[100px]">
        <p className="leading-[normal] whitespace-pre-wrap">Moderate difficulty</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-[60px] not-italic text-[12px] text-black text-center top-[26px] w-[100px]">
        <p className="leading-[normal] whitespace-pre-wrap">Clarity Score</p>
      </div>
    </div>
  );
}

function FocusScore() {
  return (
    <div className="absolute contents left-[120px] top-[10px]" data-name="Focus Score">
      <div className="absolute bg-[#78bef4] left-[120px] rounded-[10px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] size-[100px] top-[10px]" data-name="Rectangle" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[170px] not-italic size-[100px] text-[30px] text-center text-white top-[60px]">
        <p className="leading-[normal] whitespace-pre-wrap">76</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-[170px] not-italic text-[12px] text-black text-center top-[26px] w-[100px]">
        <p className="leading-[normal] whitespace-pre-wrap">Focus Score</p>
      </div>
    </div>
  );
}

function AnnotationsGroup() {
  return (
    <div className="absolute contents left-[230px] top-[10px]" data-name="Annotations Group">
      <div className="absolute bg-white h-[60px] left-[230px] rounded-[10px] top-[10px] w-[260px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[250px] not-italic text-[14px] text-black top-[20px] w-[150px] whitespace-pre-wrap">CTA</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[410px] not-italic text-[#fa7269] text-[14px] top-[20px] w-[50px] whitespace-pre-wrap">6.5%</p>
    </div>
  );
}

function Results() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Results">
      <div className="absolute h-[917px] left-0 top-0 w-[412px]" data-name="Attention Insight Heatmap">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAttentionInsightHeatmap} />
      </div>
      <div className="absolute h-[917px] left-0 top-0 w-[412px]" data-name="Attention Insight Focus Map">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAttentionInsightFocusMap} />
      </div>
      <div className="absolute h-[917px] left-0 top-0 w-[412px]" data-name="Attention Insight Contrast Map">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAttentionInsightContrastMap} />
      </div>
      <ClarityScore />
      <FocusScore />
      <AnnotationsGroup />
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#f7fafa] content-stretch flex flex-col h-[80px] items-center mb-[-13px] px-[12px] py-[10px] relative rounded-[15px] shrink-0 w-[170px]">
      <div aria-hidden="true" className="absolute border border-[#006470] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Detalle de Orden</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[10px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Detalles de Orden y Documentación</p>
      </div>
    </div>
  );
}

function IconStepActual1() {
  return (
    <div className="mb-[-13px] relative shrink-0 size-[24px]" data-name="Icon - Step Actual">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-[calc(50%+0.5px)]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Vector">
            <path d={svgPaths.ped68152} fill="#006470" />
          </g>
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-1/2 not-italic text-[#fefefe] text-[16px] text-center top-[calc(50%-11.5px)] tracking-[0.048px]">1</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[13px] relative shrink-0">
      <Frame120 />
      <IconStepActual1 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col h-[80px] items-center mb-[-13px] px-[12px] py-[10px] relative rounded-[15px] shrink-0 w-[170px]">
      <div aria-hidden="true" className="absolute border border-[#006470] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">Caja/Contenedor</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[10px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Relaciona Cajas/Contenedores con candado</p>
      </div>
    </div>
  );
}

function IconNextStep1() {
  return (
    <div className="mb-[-13px] relative shrink-0 size-[24px]" data-name="Icon - Next Step">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-[calc(50%+0.5px)]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Vector">
            <path d={svgPaths.ped68152} fill="#FEFEFE" />
            <path d={svgPaths.p199ccff0} fill="var(--fill-0, #006470)" />
          </g>
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-1/2 not-italic text-[#006470] text-[16px] text-center top-[calc(50%-11.5px)] tracking-[0.048px]">2</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[13px] relative shrink-0">
      <Frame122 />
      <IconNextStep1 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame119 />
      <Frame121 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] whitespace-nowrap">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal]">No. de Orden</p>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.5px]">
        <p className="leading-[normal]">PVWERY1236</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#4b4b4b] whitespace-nowrap">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal]">Nombre del importador:</p>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">Johnathan Doe Doe</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[310px]">
      <Frame108 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal]">RFC:</p>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">VECJ880326</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal]">No. de Pedimento:</p>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal]">34D5647GH762HHJ</p>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#4b4b4b] w-[310px] whitespace-nowrap">
      <Frame109 />
      <Frame110 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="bg-[#f7fafa] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[24px] relative w-full">
          <Frame129 />
          <Frame130 />
        </div>
      </div>
    </div>
  );
}

function IconFlechasAbajoSmall2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon - Flechas Abajo Small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon - Flechas Abajo Small">
          <path d={svgPaths.p2d296200} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[10px] h-[18px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b4b4b] text-[16px]">
        <p className="leading-[normal] whitespace-pre-wrap">Documentación</p>
      </div>
      <IconFlechasAbajoSmall2 />
    </div>
  );
}

function MobileListCard2() {
  return (
    <div className="bg-[#f7fafa] relative rounded-[12px] shrink-0 w-full" data-name="Mobile - List Card">
      <div className="content-stretch flex flex-col items-start px-[19px] py-[12px] relative w-full">
        <Frame123 />
      </div>
    </div>
  );
}

function AcordeonResumen2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Acordeón Resumen">
      <MobileListCard2 />
    </div>
  );
}

function IconFlechasAbajoSmall3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon - Flechas Abajo Small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon - Flechas Abajo Small">
          <path d={svgPaths.p2d296200} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[10px] h-[18px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b4b4b] text-[16px]">
        <p className="leading-[normal] whitespace-pre-wrap">Resumen</p>
      </div>
      <IconFlechasAbajoSmall3 />
    </div>
  );
}

function MobileListCard3() {
  return (
    <div className="bg-[#f7fafa] relative rounded-[12px] shrink-0 w-full" data-name="Mobile - List Card">
      <div className="content-stretch flex flex-col items-start px-[19px] py-[12px] relative w-full">
        <Frame124 />
      </div>
    </div>
  );
}

function AcordeonResumen3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Acordeón Resumen">
      <MobileListCard3 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-center relative shrink-0 w-full">
      <Frame118 />
      <Frame126 />
      <Frame137 />
      <AcordeonResumen2 />
      <AcordeonResumen3 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[19px] relative w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#616161] text-[17.477px] tracking-[0.4369px]">Documentación</p>
        </div>
      </div>
    </div>
  );
}

function IconMail1() {
  return (
    <div className="relative shrink-0 size-[20.972px]" data-name="Icon - Mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9722 20.9722">
        <g id="Icon - Mail">
          <path clipRule="evenodd" d={svgPaths.p1f389c00} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex h-full items-end justify-center py-[5.243px] relative shrink-0">
      <IconMail1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[20.972px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[12.234px] whitespace-nowrap">
        <p className="leading-[23.594px]">Email</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8.738px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[13.981px] tracking-[-0.5243px] whitespace-nowrap">
        <p className="leading-[normal]">johndoe@gmail.com</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#fefefe] relative rounded-[21.846px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[21.846px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20.972px] pr-[7.865px] py-[6.117px] relative w-full">
          <Frame101 />
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[260px]" data-name="Input">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-center justify-end relative shrink-0">
      <Input4 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[17px] items-end justify-center relative shrink-0 w-full">
      <div className="flex flex-row items-end self-stretch">
        <Frame95 />
      </div>
      <Frame138 />
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[13.981px] relative shrink-0 w-full" data-name="Component 5">
      <div className="absolute inset-[6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2338 12.2338">
          <circle cx="6.11688" cy="6.11688" fill="var(--fill-0, #006470)" id="Ellipse 217" r="6.11688" />
        </svg>
      </div>
      <div className="absolute inset-1/4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99072 6.99072">
          <circle cx="3.49536" cy="3.49536" fill="var(--fill-0, #FEFEFE)" id="Ellipse 216" r="3.49536" />
        </svg>
      </div>
    </div>
  );
}

function IconPin6() {
  return (
    <div className="relative shrink-0 size-[13.981px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9814 13.9814">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pc39e500} fill="var(--fill-0, #006470)" fillRule="evenodd" />
            <path d={svgPaths.p3177bf80} fill="var(--fill-0, #006470)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OrigenDestino1() {
  return (
    <div className="content-stretch flex flex-col gap-[4.369px] items-center justify-center relative shrink-0 w-[13.981px]" data-name="Origen / Destino">
      <Component1 />
      <div className="bg-[#d9d9d9] h-[66.412px] shrink-0 w-[0.874px]" />
      <IconPin6 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex h-full items-end justify-center overflow-clip py-[8.738px] relative shrink-0">
      <OrigenDestino1 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8.738px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[13.981px] tracking-[-0.5243px] whitespace-nowrap">
        <p className="leading-[normal]">Origen</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#fefefe] flex-[1_0_0] min-h-px min-w-px relative rounded-[21.846px]">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[21.846px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20.972px] pr-[7.865px] py-[6.117px] relative w-full">
          <Frame102 />
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex h-[35px] items-center justify-between relative shrink-0 w-[260px]" data-name="Input">
      <Frame14 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-center justify-end relative shrink-0">
      <Input5 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8.738px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[13.981px] tracking-[-0.5243px] whitespace-nowrap">
        <p className="leading-[normal]">Destino</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#fefefe] flex-[1_0_0] min-h-px min-w-px relative rounded-[21.846px]">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[21.846px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20.972px] pr-[7.865px] py-[6.117px] relative w-full">
          <Frame103 />
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="content-stretch flex h-[35px] items-center justify-between relative shrink-0 w-[260px]" data-name="Input">
      <Frame15 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-center justify-end relative shrink-0">
      <Input6 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame139 />
      <Frame140 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[17px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame96 />
      </div>
      <Frame90 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame87 />
      <Frame81 />
    </div>
  );
}

function IconPoliceAduana1() {
  return (
    <div className="relative shrink-0 size-[20.972px]" data-name="Icon - Police Aduana">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9722 20.9722">
        <g id="Icon - Police Aduana">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3b07b400} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2672900} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[10.486px] h-[19.224px] items-center relative shrink-0 w-full">
      <IconPoliceAduana1 />
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b4b4b] text-[13.981px] text-center tracking-[-0.5243px]">
        <p className="leading-[normal] whitespace-pre-wrap">Aduanas</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col gap-[6.991px] h-[33.206px] items-center justify-center px-[20.972px] py-[7.865px] relative rounded-[21.846px] shrink-0 w-[139.814px]" data-name="Button">
      <Frame78 />
    </div>
  );
}

function IconLupaBuscar1() {
  return (
    <div className="absolute right-[4.23px] size-[13.981px] top-[4.37px]" data-name="Icon - Lupa Buscar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9814 13.9814">
        <g id="Icon - Lupa Buscar">
          <path d={svgPaths.p143ce400} fill="var(--fill-0, #A6A6A6)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[22.72px] relative shrink-0 w-[7.865px]">
      <IconLupaBuscar1 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8.738px] items-center min-h-px min-w-px relative">
      <Frame17 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6a6a6] text-[13.981px] tracking-[-0.5243px] whitespace-nowrap">
        <p className="leading-[normal]">Buscar</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#fefefe] flex-[1_0_0] min-h-px min-w-px relative rounded-[21.846px]">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[21.846px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20.972px] pr-[7.865px] py-[6.117px] relative w-full">
          <Frame104 />
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="content-stretch flex h-[34.954px] items-center justify-between relative shrink-0 w-[136.319px]" data-name="Input">
      <Frame16 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[14.855px] items-center justify-center relative shrink-0 w-full">
      <Button2 />
      <Input7 />
    </div>
  );
}

function Frame146() {
  return <div className="h-[29px] shrink-0 w-[277.881px]" />;
}

function IconPin7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">01 - Acapulco</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Avenida Costera Miguel Alemán s/n, Muelle Fis...</p>
    </div>
  );
}

function ListaAduanalMobile() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin7 />
      <Frame23 />
    </div>
  );
}

function IconPin8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">02 - Agua Prieta</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Avenida Panamericana s/n, entre Calles 1 y 2, ...</p>
    </div>
  );
}

function ListaAduanalMobile1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin8 />
      <Frame24 />
    </div>
  );
}

function IconPin9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">03 - Ciudad de Acuña</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de Méxic...</p>
    </div>
  );
}

function ListaAduanalMobile2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin9 />
      <Frame25 />
    </div>
  );
}

function IconPin10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">04 - Ciudad Camargo</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de Méxic...</p>
    </div>
  );
}

function ListaAduanalMobile3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin10 />
      <Frame26 />
    </div>
  );
}

function IconPin11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">05 - Ciudad Hidalgo</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de Méxic...</p>
    </div>
  );
}

function ListaAduanalMobile4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin11 />
      <Frame27 />
    </div>
  );
}

function IconPin12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">06 - Ciudad Juárez</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de Méxic...</p>
    </div>
  );
}

function ListaAduanalMobile5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin12 />
      <Frame28 />
    </div>
  );
}

function IconPin13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">07 - Ciudad Miguel Alemán</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de Méxic...</p>
    </div>
  );
}

function ListaAduanalMobile6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin13 />
      <Frame29 />
    </div>
  );
}

function IconPin14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">08 - Ciudad Reynosa</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de Méxic...</p>
    </div>
  );
}

function ListaAduanalMobile7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin14 />
      <Frame30 />
    </div>
  );
}

function IconPin15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">09 - Colombia</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de Méxic...</p>
    </div>
  );
}

function ListaAduanalMobile8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin15 />
      <Frame31 />
    </div>
  );
}

function IconPin16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">10 - Matamoros</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de Méxic...</p>
    </div>
  );
}

function ListaAduanalMobile9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin16 />
      <Frame32 />
    </div>
  );
}

function IconPin17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">11 - Mexicali</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Polanco, Polanco l Secc, 11510 Ciudad de Méxic...</p>
    </div>
  );
}

function ListaAduanalMobile10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin17 />
      <Frame33 />
    </div>
  );
}

function IconPin18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">12 - Naco</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Blvd. Abelardo L. Rodríguez s/n, Col. Alamitos, E...</p>
    </div>
  );
}

function ListaAduanalMobile11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin18 />
      <Frame34 />
    </div>
  );
}

function IconPin19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">13 - Nogales</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Blvd. Abelardo L. Rodríguez s/n, Col. Alamitos, E...</p>
    </div>
  );
}

function ListaAduanalMobile12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin19 />
      <Frame35 />
    </div>
  );
}

function IconPin20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">14 - Nuevo Laredo</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Carretera Nuevo Laredo – Piedras Negras Km 1...</p>
    </div>
  );
}

function ListaAduanalMobile13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin20 />
      <Frame36 />
    </div>
  );
}

function IconPin21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">15 - Ojinaga</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Carretera Nuevo Laredo – Piedras Negras Km 1...</p>
    </div>
  );
}

function ListaAduanalMobile14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin21 />
      <Frame37 />
    </div>
  );
}

function IconPin22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">16 - Piedras Negras</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Carretera Nuevo Laredo – Piedras Negras Km 1...</p>
    </div>
  );
}

function ListaAduanalMobile15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin22 />
      <Frame38 />
    </div>
  );
}

function IconPin23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">17 - Puerto Palomas</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Carretera Nuevo Laredo – Piedras Negras Km 1...</p>
    </div>
  );
}

function ListaAduanalMobile16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin23 />
      <Frame39 />
    </div>
  );
}

function IconPin24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">18 - San Luis Río Colorado</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Carretera Nuevo Laredo – Piedras Negras Km 1...</p>
    </div>
  );
}

function ListaAduanalMobile17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin24 />
      <Frame40 />
    </div>
  );
}

function IconPin25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">19 - Sonoyta</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Carretera Nuevo Laredo – Piedras Negras Km 1...</p>
    </div>
  );
}

function ListaAduanalMobile18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin25 />
      <Frame41 />
    </div>
  );
}

function IconPin26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">20 - Tecate</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Lázaro Cárdenas esquina Callejón Madero No. ...</p>
    </div>
  );
}

function ListaAduanalMobile19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin26 />
      <Frame42 />
    </div>
  );
}

function IconPin27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">21 - Tijuana</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin27 />
      <Frame43 />
    </div>
  );
}

function IconPin28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">22 - Subteniente López</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin28 />
      <Frame44 />
    </div>
  );
}

function IconPin29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">23 - Altamira</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin29 />
      <Frame45 />
    </div>
  );
}

function IconPin30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">24 - Cancún</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin30 />
      <Frame46 />
    </div>
  );
}

function IconPin31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">25 - Ciudad del Carmen</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin31 />
      <Frame47 />
    </div>
  );
}

function IconPin32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">26 - Coatzacoalcos</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile25() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin32 />
      <Frame48 />
    </div>
  );
}

function IconPin33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">27 - Dos Bocas</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin33 />
      <Frame49 />
    </div>
  );
}

function IconPin34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">28 - Ensenada</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin34 />
      <Frame50 />
    </div>
  );
}

function IconPin35() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">29 - Guaymas</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin35 />
      <Frame51 />
    </div>
  );
}

function IconPin36() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">30 - La Paz</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile29() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin36 />
      <Frame52 />
    </div>
  );
}

function IconPin37() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">31 - Lázaro Cárdenas</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin37 />
      <Frame53 />
    </div>
  );
}

function IconPin38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">32 - Manzanillo</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin38 />
      <Frame54 />
    </div>
  );
}

function IconPin39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">33 - Mazatlán</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile32() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin39 />
      <Frame55 />
    </div>
  );
}

function IconPin40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">34 - Progreso</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile33() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin40 />
      <Frame56 />
    </div>
  );
}

function IconPin41() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">35 - Salina Cruz</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin41 />
      <Frame57 />
    </div>
  );
}

function IconPin42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">36 - Tampico</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin42 />
      <Frame58 />
    </div>
  );
}

function IconPin43() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">37 - Tuxpan</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile36() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin43 />
      <Frame59 />
    </div>
  );
}

function IconPin44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">38 - Veracruz</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Calzada Lázaro Cárdenas No. 15751, Col. Chap...</p>
    </div>
  );
}

function ListaAduanalMobile37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin44 />
      <Frame60 />
    </div>
  );
}

function IconPin45() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">39 - AICM (Aeropuerto Internacional de la C...</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Avenida 602 s/n, Zona Federal, Col. Peñón de l...</p>
    </div>
  );
}

function ListaAduanalMobile38() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin45 />
      <Frame61 />
    </div>
  );
}

function IconPin46() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">40 - México</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin46 />
      <Frame62 />
    </div>
  );
}

function IconPin47() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">41 - AIFA (Aeropuerto Internacional Felipe An...</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin47 />
      <Frame63 />
    </div>
  );
}

function IconPin48() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">42 - Aguascalientes</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin48 />
      <Frame64 />
    </div>
  );
}

function IconPin49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">43 - Chihuahua (Interior)</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin49 />
      <Frame65 />
    </div>
  );
}

function IconPin50() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">44 - Guadalajara</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin50 />
      <Frame66 />
    </div>
  );
}

function IconPin51() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">45 - Guanajuato</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin51 />
      <Frame67 />
    </div>
  );
}

function IconPin52() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">46 - Monterrey</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile45() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin52 />
      <Frame68 />
    </div>
  );
}

function IconPin53() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">47 - Puebla</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile46() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin53 />
      <Frame69 />
    </div>
  );
}

function IconPin54() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">47 - Puebla</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile47() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin54 />
      <Frame70 />
    </div>
  );
}

function IconPin55() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">48 - Querétaro</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile48() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin55 />
      <Frame71 />
    </div>
  );
}

function IconPin56() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">49 - Toluca</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin56 />
      <Frame72 />
    </div>
  );
}

function IconPin57() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Pin">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28c26e80} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" />
            <path d={svgPaths.p18241b00} fill="var(--fill-0, #8E8E8E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[10px] w-[240px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b4b4b] w-[240px]">
        <p className="leading-[normal] whitespace-pre-wrap">50 - Torreón</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8e8e8e] w-[240px] whitespace-pre-wrap">Ferrocarril Central s/n esquina Av. Cuitláhuac, ...</p>
    </div>
  );
}

function ListaAduanalMobile50() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[6px] py-[4px] relative shrink-0" data-name="Lista Aduanal - Mobile">
      <IconPin57 />
      <Frame73 />
    </div>
  );
}

function Frame147() {
  return <div className="h-[29px] shrink-0 w-[277.881px]" />;
}

function Frame92() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-1/2 top-[-35.17px]">
      <Frame146 />
      <ListaAduanalMobile />
      <ListaAduanalMobile1 />
      <ListaAduanalMobile2 />
      <ListaAduanalMobile3 />
      <ListaAduanalMobile4 />
      <ListaAduanalMobile5 />
      <ListaAduanalMobile6 />
      <ListaAduanalMobile7 />
      <ListaAduanalMobile8 />
      <ListaAduanalMobile9 />
      <ListaAduanalMobile10 />
      <ListaAduanalMobile11 />
      <ListaAduanalMobile12 />
      <ListaAduanalMobile13 />
      <ListaAduanalMobile14 />
      <ListaAduanalMobile15 />
      <ListaAduanalMobile16 />
      <ListaAduanalMobile17 />
      <ListaAduanalMobile18 />
      <ListaAduanalMobile19 />
      <ListaAduanalMobile20 />
      <ListaAduanalMobile21 />
      <ListaAduanalMobile22 />
      <ListaAduanalMobile23 />
      <ListaAduanalMobile24 />
      <ListaAduanalMobile25 />
      <ListaAduanalMobile26 />
      <ListaAduanalMobile27 />
      <ListaAduanalMobile28 />
      <ListaAduanalMobile29 />
      <ListaAduanalMobile30 />
      <ListaAduanalMobile31 />
      <ListaAduanalMobile32 />
      <ListaAduanalMobile33 />
      <ListaAduanalMobile34 />
      <ListaAduanalMobile35 />
      <ListaAduanalMobile36 />
      <ListaAduanalMobile37 />
      <ListaAduanalMobile38 />
      <ListaAduanalMobile39 />
      <ListaAduanalMobile40 />
      <ListaAduanalMobile41 />
      <ListaAduanalMobile42 />
      <ListaAduanalMobile43 />
      <ListaAduanalMobile44 />
      <ListaAduanalMobile45 />
      <ListaAduanalMobile46 />
      <ListaAduanalMobile47 />
      <ListaAduanalMobile48 />
      <ListaAduanalMobile49 />
      <ListaAduanalMobile50 />
      <Frame147 />
    </div>
  );
}

function ScrollListaDeAduanas() {
  return (
    <div className="h-[230px] overflow-x-clip overflow-y-auto relative shrink-0 w-[320px]" data-name="Scroll - Lista de Aduanas">
      <Frame92 />
      <div className="absolute bg-[#c4c4c4] h-[72px] right-0 rounded-[5px] top-[80px] w-[4px]" />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame85 />
      <div className="bg-[#d9d9d9] h-[0.874px] rounded-[39.323px] shrink-0 w-[286.62px]" />
      <Frame91 />
      <ScrollListaDeAduanas />
    </div>
  );
}

function Frame145() {
  return (
    <div className="bg-[#f7fafa] content-stretch flex flex-col gap-[24px] items-center justify-center py-[24px] relative rounded-[24.468px] shrink-0 w-full">
      <Frame75 />
      <Frame89 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[27px] items-start left-1/2 top-[-539px] w-[360px]">
      <Frame136 />
      <Frame145 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="absolute h-[813px] left-[26px] top-[104px] w-[360px]">
      <Frame144 />
    </div>
  );
}

function BatteryPercentage1() {
  return (
    <div className="h-[13.667px] relative shrink-0 w-[27.333px]" data-name="Battery/Percentage">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3333 13.6667">
        <g id="Battery/Percentage">
          <rect fill="var(--fill-0, #FEFEFE)" height="9" id="percent" rx="2.66667" width="10.3333" x="2" y="2.33341" />
          <g id="battery" opacity="0.4">
            <path clipRule="evenodd" d={svgPaths.p2b4515f0} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" />
            <path d={svgPaths.pc45a800} fill="var(--fill-0, #FEFEFE)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusPro1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] inset-[18.93%_5.34%_64.07%_71.84%] items-center justify-end" data-name="Status/Pro">
      <div className="h-[12.333px] relative shrink-0 w-[19.333px]" data-name="Cellular">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3333 12.3333">
          <g id="Cellular">
            <path d={svgPaths.p8bdef00} fill="var(--fill-0, #FEFEFE)" />
            <path d={svgPaths.p12dc6500} fill="var(--fill-0, #FEFEFE)" />
            <path d={svgPaths.p5f0ea00} fill="var(--fill-0, #FEFEFE)" />
            <path d={svgPaths.p189c4440} fill="var(--fill-0, #FEFEFE)" />
          </g>
        </svg>
      </div>
      <div className="h-[12.333px] relative shrink-0 w-[17px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12.3333">
          <path clipRule="evenodd" d={svgPaths.p70af300} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <BatteryPercentage1 />
    </div>
  );
}

function Act1() {
  return (
    <div className="absolute contents inset-[16%_5.34%_64%_9.71%]" data-name="Act">
      <StatusPro1 />
      <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] inset-[16%_77.18%_64%_9.71%] leading-[normal] not-italic text-[#fefefe] text-[17px] tracking-[-0.4px] whitespace-pre-wrap">9:41</p>
    </div>
  );
}

function IconFlechasIzquierdaSmall1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon - Flechas Izquierda Small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon - Flechas Izquierda Small">
          <path d={svgPaths.p12221600} fill="var(--fill-0, #FEFEFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return <div className="shrink-0 size-[32px]" />;
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[360px]">
      <IconFlechasIzquierdaSmall1 />
      <div className="flex flex-col font-['Gotham:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fefefe] text-[20px] text-center w-[286px]">
        <p className="leading-[normal] whitespace-pre-wrap">Crear Orden</p>
      </div>
      <Frame5 />
    </div>
  );
}

function IconNotificacion1() {
  return (
    <div className="absolute left-[333px] size-[22px] top-[5px]" data-name="Icon - Notificación">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon - NotificaciÃ³n">
          <g id="Vector">
            <path d={svgPaths.p1753b5f0} fill="var(--fill-0, #FEFEFE)" />
            <path d={svgPaths.p22b73500} fill="var(--fill-0, #FEFEFE)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[7.69%] left-1/2 top-[59.62%] w-[360px]">
      <Frame2 />
      <IconNotificacion1 />
    </div>
  );
}

function HeaderResponsive1() {
  return (
    <div className="absolute h-[104px] left-0 top-0 w-[412px]" data-name="Header Responsive">
      <Act1 />
      <div className="absolute bg-[#006470] inset-0 rounded-bl-[20px] rounded-br-[20px]" />
      <Frame4 />
    </div>
  );
}

function AndroidCompact() {
  return (
    <div className="absolute bg-white h-[917px] left-[485px] overflow-x-clip overflow-y-auto top-0 w-[412px]" data-name="Android Compact - 978">
      <Button1 />
      <Results />
      <Frame143 />
      <HeaderResponsive1 />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <OrdenesPrototipo />
      <AndroidCompact />
      <div className="absolute h-[917px] left-[952px] top-0 w-[412px]" data-name="823940495">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAttentionInsightHeatmap} />
      </div>
    </div>
  );
}