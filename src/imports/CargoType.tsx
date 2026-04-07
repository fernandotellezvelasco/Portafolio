import svgPaths from "./svg-wkphkn43sb";
import imgAttentionInsightHeatmap from "figma:asset/3a49cbb9ed1434483b08ee16c8b3447e6a1f606a.png";
import imgAttentionInsightFocusMap from "figma:asset/2a954d1b3386f5bf74dc152da39bdce58021a6d0.png";
import imgAttentionInsightContrastMap from "figma:asset/4e29677a211273f099c519df1cebe58a8a805777.png";

function StatusPro() {
  return (
    <div className="-translate-y-1/2 absolute h-[17px] right-[22px] top-[calc(50%-489.06px)] w-[94px]" data-name="Status/Pro">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 17">
        <g id="Status/Pro">
          <g id="Cellular">
            <path d={svgPaths.p26622a00} fill="var(--fill-0, #EDEDED)" />
            <path d={svgPaths.p2958a080} fill="var(--fill-0, #EDEDED)" />
            <path d={svgPaths.p38444a00} fill="var(--fill-0, #EDEDED)" />
            <path d={svgPaths.p13f30d00} fill="var(--fill-0, #EDEDED)" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p34744000} fill="var(--fill-0, #EDEDED)" fillRule="evenodd" id="Wifi" />
          <g id="Battery/Percentage">
            <rect fill="var(--fill-0, #EDEDED)" height="9" id="percent" rx="2.66667" width="10.3333" x="68.6667" y="4.00008" />
            <g id="battery" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p26cfcf80} fill="var(--fill-0, #EDEDED)" fillRule="evenodd" />
              <path d={svgPaths.p24e51ef0} fill="var(--fill-0, #EDEDED)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Act() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(56.25%-16.75px)] top-[calc(50%-490.5px)]" data-name="Act">
      <StatusPro />
      <p className="-translate-x-full absolute font-['SF_Pro_Text:Bold',sans-serif] leading-[normal] left-[94px] not-italic text-[#ededed] text-[17px] text-right top-[calc(50%-500.5px)] tracking-[-0.4px] w-[54px] whitespace-pre-wrap">9:41</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[40px] left-1/2 w-[412px]">
      <div className="-translate-x-1/2 absolute bg-[#ededed] bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[72px]" data-name="Home Indicator" />
    </div>
  );
}

function ClarityScore() {
  return (
    <div className="absolute contents left-[10px] top-[10px]" data-name="Clarity Score">
      <div className="absolute bg-[#f3a861] left-[10px] rounded-[10px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] size-[100px] top-[10px]" data-name="Rectangle" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[60px] not-italic size-[100px] text-[30px] text-center text-white top-[60px]">
        <p className="leading-[normal] whitespace-pre-wrap">56</p>
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
    <div className="absolute contents left-[calc(25%+17px)] top-[10px]" data-name="Focus Score">
      <div className="absolute bg-[#78bef4] left-[calc(25%+17px)] rounded-[10px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] size-[100px] top-[10px]" data-name="Rectangle" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(25%+67px)] not-italic size-[100px] text-[30px] text-center text-white top-[60px]">
        <p className="leading-[normal] whitespace-pre-wrap">68</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-[calc(25%+67px)] not-italic text-[12px] text-black text-center top-[26px] w-[100px]">
        <p className="leading-[normal] whitespace-pre-wrap">Focus Score</p>
      </div>
    </div>
  );
}

function AnnotationsGroup() {
  return (
    <div className="absolute contents left-[calc(50%+24px)] top-[10px]" data-name="Annotations Group">
      <div className="absolute bg-white h-[60px] left-[calc(50%+24px)] rounded-[10px] top-[10px] w-[260px]" data-name="Rectangle" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[calc(62.5%-7.5px)] not-italic text-[14px] text-black top-[20px] w-[150px] whitespace-pre-wrap">CTA</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[calc(100%-2px)] not-italic text-[#fae630] text-[14px] top-[20px] w-[50px] whitespace-pre-wrap">9.0%</p>
    </div>
  );
}

function Results() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Results">
      <div className="absolute h-[1033px] left-0 top-0 w-[412px]" data-name="Attention Insight Heatmap">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAttentionInsightHeatmap} />
      </div>
      <div className="absolute h-[1033px] left-0 top-0 w-[412px]" data-name="Attention Insight Focus Map">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAttentionInsightFocusMap} />
      </div>
      <div className="absolute h-[1033px] left-0 top-0 w-[412px]" data-name="Attention Insight Contrast Map">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAttentionInsightContrastMap} />
      </div>
      <ClarityScore />
      <FocusScore />
      <AnnotationsGroup />
    </div>
  );
}

function IconArrowLeft() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon - Arrow Left 33">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon - Arrow Left 33">
          <path d={svgPaths.pe907400} fill="var(--fill-0, #EDEDED)" id="Union" />
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
      <IconArrowLeft />
      <div className="flex flex-col font-['Gotham:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ededed] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[normal]">Dropoff</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[53px] w-[365px]" data-name="Header">
      <Frame />
    </div>
  );
}

function IconOrders() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon - Orders">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon - Orders">
          <path d={svgPaths.p3d7cbd00} fill="var(--fill-0, #55595B)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18603a80} fill="var(--fill-0, #55595B)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p18f08b80} fill="var(--fill-0, #55595B)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Medium',sans-serif] gap-[3px] items-start leading-[0] not-italic relative shrink-0 w-[157.696px]">
      <div className="flex flex-col h-[16.396px] justify-center relative shrink-0 text-[#c0c0c0] text-[10px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Referencia TEST</p>
      </div>
      <div className="flex flex-col h-[16.396px] justify-center relative shrink-0 text-[#ededed] text-[16px] w-full">
        <p className="leading-[1.011] whitespace-pre-wrap">Orden #ATX3HJP8</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <IconOrders />
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame20 />
      <p className="font-['Avenir:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ededed] text-[20px] text-right">55%</p>
    </div>
  );
}

function BarraDeEstado() {
  return (
    <div className="h-[10px] relative shrink-0 w-full" data-name="Barra de estado">
      <div className="absolute backdrop-blur-[6.9px] inset-0 rounded-[30px]" style={{ backgroundImage: "linear-gradient(183.218deg, rgba(237, 237, 237, 0.2) 10.815%, rgba(237, 237, 237, 0.04) 89.185%)" }} />
      <div className="absolute bg-[#ff2f55] inset-[0_86.42%_0_0] rounded-[45px]" />
    </div>
  );
}

function StatusOrder() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-end justify-center relative shrink-0 w-[276px]" data-name="Status Order">
      <Frame21 />
      <BarraDeEstado />
      <div className="flex flex-col font-['Gotham:Book',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#ededed] text-[12px] text-right w-[110px]">
        <p className="[text-decoration-skip-ink:none] decoration-[4%] decoration-solid leading-[27px] underline whitespace-pre-wrap">Completar factura</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[#1a1f23] border-[#55595b] border-[1.5px] border-solid inset-0 overflow-clip rounded-[25px]" data-name="container" />;
}

function Radial() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]" data-name="Radial">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#1a1f23] border-[#55595b] border-[1.5px] border-solid inset-0 overflow-clip rounded-[25px]" data-name="container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="circle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.pe74d900} fill="var(--fill-0, #FFEE00)" id="circle" />
        </svg>
      </div>
    </div>
  );
}

function Radial1() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]" data-name="Radial">
      <Container1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Radial />
      <Radial1 />
    </div>
  );
}

function LineaGris() {
  return (
    <div className="h-[16px] relative w-[84px]" data-name="Línea Gris">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 16">
        <g id="LÃ­nea Gris">
          <path d="M0 8H84" id="Vector 75" stroke="var(--stroke-0, #909090)" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#1a1f23] border-[#55595b] border-[1.5px] border-solid inset-0 overflow-clip rounded-[25px]" data-name="container" />;
}

function Radial2() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]" data-name="Radial">
      <Container2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Radial2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[20px]">
      <Group2 />
      <div className="flex h-[84px] items-center justify-center relative shrink-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <LineaGris />
        </div>
      </div>
      <Group3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-[#ededed] w-[280px] whitespace-pre-wrap">
      <p className="font-['Avenir:Light',sans-serif] leading-[14px] relative shrink-0 text-[10px] w-full">RECOLECCIÓN</p>
      <p className="font-['Avenir:Roman',sans-serif] leading-[16px] relative shrink-0 text-[14px] text-right w-full">México</p>
      <p className="font-['Avenir:Light',sans-serif] leading-[14px] relative shrink-0 text-[12px] text-right w-full">Mariano Matamoros, Sector Central, 01981, Tamau..</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function ChipCompletada() {
  return (
    <div className="content-stretch flex items-center justify-between px-[5px] py-[2px] relative rounded-[25px] shrink-0 w-[84px]" data-name="Chip - Completada" style={{ backgroundImage: "linear-gradient(198.396deg, rgba(237, 237, 237, 0.12) 10.815%, rgba(237, 237, 237, 0.1) 42.163%, rgba(237, 237, 237, 0.02) 89.185%)" }}>
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #32FF39)" id="Ellipse 192" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Avenir:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ededed] text-[10px] text-right w-[60px]">
        <p className="leading-[14px] whitespace-pre-wrap">Completada</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ChipCompletada />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[78px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function LineaGris1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Línea Gris">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 16">
        <g id="LÃ­nea Gris">
          <path d="M0 8H280" id="Vector 75" stroke="var(--stroke-0, #55595B)" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-[#ededed] text-right w-[280px] whitespace-pre-wrap">
      <p className="font-['Avenir:Light',sans-serif] leading-[14px] relative shrink-0 text-[10px] w-full">ENTREGA</p>
      <p className="font-['Avenir:Roman',sans-serif] leading-[16px] relative shrink-0 text-[14px] w-full">México</p>
      <p className="font-['Avenir:Light',sans-serif] leading-[14px] relative shrink-0 text-[12px] w-full">San Isidro 44, Reforma Socc, Miguel Hidalgo, Ciud..</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function ChipEnEspera() {
  return (
    <div className="content-stretch flex items-center justify-between px-[5px] py-[2px] relative rounded-[25px] shrink-0 w-[84px]" data-name="Chip - En espera" style={{ backgroundImage: "linear-gradient(198.396deg, rgba(237, 237, 237, 0.12) 10.815%, rgba(237, 237, 237, 0.1) 42.163%, rgba(237, 237, 237, 0.02) 89.185%)" }}>
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #909090)" id="Ellipse 192" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Avenir:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ededed] text-[10px] text-right w-[60px]">
        <p className="leading-[14px] whitespace-pre-wrap">En Espera</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ChipEnEspera />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[280px]">
      <Frame9 />
      <LineaGris1 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Frame163468CardEstatusDeOrdenes() {
  return (
    <div className="relative rounded-[25px] shrink-0 w-full" data-name="Frame 163468/Card - Estatus de Ordenes" style={{ backgroundImage: "linear-gradient(227.144deg, rgba(237, 237, 237, 0.12) 10.815%, rgba(237, 237, 237, 0.1) 42.163%, rgba(237, 237, 237, 0.02) 89.185%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center pb-[32px] pt-[24px] px-[24px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function IconDefaultProfilePicture() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Icon - Default Profile Picture">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <circle cx="32" cy="32" data-figma-bg-blur-radius="7.85965" fill="url(#paint0_linear_410_2290)" fillOpacity="0.2" id="Ellipse 147" r="32" />
        <defs>
          <clipPath id="bgblur_0_410_2290_clip_path" transform="translate(7.85965 7.85965)">
            <circle cx="32" cy="32" r="32" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_410_2290" x1="52.6186" x2="-5.66048" y1="-1.68948e-07" y2="37.5509">
            <stop stopColor="#EDEDED" stopOpacity="0.6" />
            <stop offset="0.4" stopColor="#EDEDED" stopOpacity="0.5" />
            <stop offset="1" stopColor="#EDEDED" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-[2.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.6316 60.6316">
          <circle cx="30.3158" cy="30.3158" data-figma-bg-blur-radius="7.85965" fill="url(#paint0_linear_410_2329)" fillOpacity="0.2" id="Ellipse 146" r="30.3158" />
          <defs>
            <clipPath id="bgblur_0_410_2329_clip_path" transform="translate(7.85965 7.85965)">
              <circle cx="30.3158" cy="30.3158" r="30.3158" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_410_2329" x1="49.8492" x2="-5.36256" y1="-1.60056e-07" y2="35.5746">
              <stop stopColor="#EDEDED" stopOpacity="0.6" />
              <stop offset="0.4" stopColor="#EDEDED" stopOpacity="0.5" />
              <stop offset="1" stopColor="#EDEDED" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[6.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.1404 56.1404">
          <circle cx="28.0702" cy="28.0702" data-figma-bg-blur-radius="7.74737" fill="url(#paint0_linear_410_2295)" fillOpacity="0.2" id="Ellipse 145" r="28.0702" />
          <defs>
            <clipPath id="bgblur_0_410_2295_clip_path" transform="translate(7.74737 7.74737)">
              <circle cx="28.0702" cy="28.0702" r="28.0702" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_410_2295" x1="46.1566" x2="-4.96533" y1="-1.482e-07" y2="32.9394">
              <stop stopColor="#EDEDED" stopOpacity="0.6" />
              <stop offset="0.4" stopColor="#EDEDED" stopOpacity="0.5" />
              <stop offset="1" stopColor="#EDEDED" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[9.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.6491 51.6491">
          <circle cx="25.8246" cy="25.8246" data-figma-bg-blur-radius="7.74737" fill="var(--fill-0, #1A1F23)" id="Ellipse 148" r="25.8246" />
          <defs>
            <clipPath id="bgblur_0_410_2306_clip_path" transform="translate(7.74737 7.74737)">
              <circle cx="25.8246" cy="25.8246" r="25.8246" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Soliden_Trial:Bold_Expanded',sans-serif] inset-[37.91%_12.28%_40.21%_12.28%] justify-center leading-[0] not-italic text-[#ededed] text-[22.456px] text-center">
        <p className="leading-[13.474px] whitespace-pre-wrap">JD</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[64px] relative shrink-0 w-[134px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Gotham:Medium',sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#ededed] text-[20px] top-[32px] w-[134px]">
        <p className="leading-[normal] whitespace-pre-wrap">5:17 PM</p>
      </div>
    </div>
  );
}

function IconEditAmarillo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon - Edit Amarillo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon - Edit Amarillo">
          <path d={svgPaths.p151e6e00} fill="var(--fill-0, #FFEE00)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[45px] items-start relative shrink-0 w-full">
      <IconDefaultProfilePicture />
      <Frame22 />
      <IconEditAmarillo />
    </div>
  );
}

function IconStepCheck() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon - Step Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon - Step Check">
          <circle cx="5" cy="5" fill="var(--fill-0, #FFEE00)" id="Ellipse 167" r="5" />
          <path d={svgPaths.p38d6c200} fill="var(--fill-0, #1A1F23)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LineaAmarilla() {
  return (
    <div className="h-[10px] relative w-[28px]" data-name="Línea Amarilla">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 10">
        <g id="LÃ­nea Amarilla">
          <path d="M0 5H28" id="Vector 75" stroke="var(--stroke-0, #FFEE00)" strokeWidth="0.625" />
        </g>
      </svg>
    </div>
  );
}

function IconStepCheck1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon - Step Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon - Step Check">
          <circle cx="5" cy="5" fill="var(--fill-0, #FFEE00)" id="Ellipse 167" r="5" />
          <path d={svgPaths.p38d6c200} fill="var(--fill-0, #1A1F23)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LineaAmarilla1() {
  return (
    <div className="h-[10px] relative w-[28px]" data-name="Línea Amarilla">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 10">
        <g id="LÃ­nea Amarilla">
          <path d="M0 5H28" id="Vector 75" stroke="var(--stroke-0, #FFEE00)" strokeWidth="0.625" />
        </g>
      </svg>
    </div>
  );
}

function IconStepCheck2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon - Step Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon - Step Check">
          <circle cx="5" cy="5" fill="var(--fill-0, #FFEE00)" id="Ellipse 167" r="5" />
          <path d={svgPaths.p38d6c200} fill="var(--fill-0, #1A1F23)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LineaAmarilla2() {
  return (
    <div className="h-[10px] relative w-[28px]" data-name="Línea Amarilla">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 10">
        <g id="LÃ­nea Amarilla">
          <path d="M0 5H28" id="Vector 75" stroke="var(--stroke-0, #FFEE00)" strokeWidth="0.625" />
        </g>
      </svg>
    </div>
  );
}

function IconStepCheck3() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon - Step Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon - Step Check">
          <circle cx="5" cy="5" fill="var(--fill-0, #FFEE00)" id="Ellipse 167" r="5" />
          <path d={svgPaths.p38d6c200} fill="var(--fill-0, #1A1F23)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Steps4Mobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Steps 4 Mobile">
      <IconStepCheck />
      <div className="flex h-[28px] items-center justify-center relative shrink-0 w-[10px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <LineaAmarilla />
        </div>
      </div>
      <IconStepCheck1 />
      <div className="flex h-[28px] items-center justify-center relative shrink-0 w-[10px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <LineaAmarilla1 />
        </div>
      </div>
      <IconStepCheck2 />
      <div className="flex h-[28px] items-center justify-center relative shrink-0 w-[10px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <LineaAmarilla2 />
        </div>
      </div>
      <IconStepCheck3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Roman',sans-serif] h-[130px] items-start justify-between leading-[0] not-italic relative shrink-0 text-[#ededed] text-[14px] w-[175px]">
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 w-[165px]">
        <p className="leading-[16px] whitespace-pre-wrap">Orden creada</p>
      </div>
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 w-[165px]">
        <p className="leading-[16px] whitespace-pre-wrap">Orden asignada</p>
      </div>
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 w-[165px]">
        <p className="leading-[16px] whitespace-pre-wrap">Recolección iniciada</p>
      </div>
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 w-[165px]">
        <p className="leading-[16px] whitespace-pre-wrap">Recolección completada</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[24px] items-center left-[75px] top-1/2 w-[199px]">
      <Steps4Mobile />
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[124px] relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fe0] content-stretch flex gap-[12px] h-[44px] items-center justify-center px-[24px] py-[12px] relative rounded-[50px] shrink-0 w-[154px]" data-name="Button">
      <div className="flex flex-col font-['Avenir:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1f23] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[22px]">Rastrear</p>
      </div>
    </div>
  );
}

function CardOrderSteps() {
  return (
    <div className="relative rounded-[25px] shrink-0 w-full" data-name="Card - Order Steps" style={{ backgroundImage: "linear-gradient(235.381deg, rgba(237, 237, 237, 0.12) 10.815%, rgba(237, 237, 237, 0.1) 42.163%, rgba(237, 237, 237, 0.02) 89.185%)" }}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[32px] pt-[24px] px-[24px] relative w-full">
          <Frame14 />
          <Frame13 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[30px] mt-[25px] relative row-1">
      <div className="-translate-x-full -translate-y-1/2 col-1 flex flex-col font-['Avenir:Heavy',sans-serif] justify-center ml-[196px] mt-[11px] not-italic relative row-1 text-[#ededed] text-[18px] text-right w-[196px]">
        <p className="leading-[22px] whitespace-pre-wrap">Datos de Recolección</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="backdrop-blur-[6.9px] col-1 h-[72px] mix-blend-luminosity ml-0 mt-0 rounded-[50px] row-1 w-[351px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(90deg, rgba(37, 44, 50, 0.5) 0%, rgba(37, 44, 50, 0.5) 100%), linear-gradient(90deg, rgba(237, 237, 237, 0.12) 0%, rgba(237, 237, 237, 0.12) 100%)" }} />
      <Group />
      <div className="col-1 flex h-[7px] items-center justify-center ml-[313px] mt-[33px] relative row-1 w-[13.03px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[7px] relative w-[13.03px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0302 7">
              <path d={svgPaths.p31ac7d00} fill="var(--fill-0, #FFEE00)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-center justify-center left-[24px] top-[112px] w-[360px]">
      <StatusOrder />
      <Frame163468CardEstatusDeOrdenes />
      <CardOrderSteps />
      <Group1 />
    </div>
  );
}

export default function CargoType() {
  return (
    <div className="bg-gradient-to-b from-[#191f24] relative size-full to-[#080c0f]" data-name="Cargo Type">
      <Act />
      <Frame2 />
      <Results />
      <Header />
      <Frame11 />
    </div>
  );
}