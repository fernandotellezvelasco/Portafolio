import svgPaths from "./svg-5v4ngbxfhc";
import imgCanvas from "figma:asset/8cf3793a94aeaee78249e45f5d6d2af4bacc3572.png";
import imgAyudoAConstruirProductosResolviendoProblemas from "figma:asset/fa5a29686b0c056a0f2d36a9a2a64e9652c4d836.png";
import { imgVector } from "./svg-9czaa";

function CanvasImage() {
  return (
    <div className="h-[982px] relative shrink-0 w-full" data-name="Canvas">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCanvas} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[982px] items-start left-0 overflow-clip top-0 w-[1464px]" data-name="Container">
      <CanvasImage />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(43,127,255,0.1)] blur-[120px] h-[500px] left-[332px] rounded-[16777200px] top-0 w-[800px]" data-name="Container" />;
}

function HeroParticles() {
  return <div className="absolute bg-white left-[16px] opacity-97 rounded-[16777200px] size-[8px] top-[14px]" data-name="HeroParticles" />;
}

function HeroParticles1() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[8px] w-[234.492px]" data-name="HeroParticles">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[117.5px] not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-center top-[0.5px] tracking-[0.1996px] translate-x-[-50%] whitespace-pre">Disponible para nuevos proyectos</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[38px] left-[305.75px] rounded-[16777200px] top-0 w-[284.492px]" data-name="Container">
      <HeroParticles />
      <HeroParticles1 />
    </div>
  );
}

function HeroParticles2() {
  return <div className="absolute h-[79.195px] left-0 top-[83.93px] w-[848px]" data-name="HeroParticles" />;
}

function HeroParticles3() {
  return (
    <div className="absolute h-[242.891px] left-[8.56px] text-[rgba(0,0,0,0)] text-center top-[84.2px] w-[830.875px]" data-name="HeroParticles">
      <p className="absolute bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] font-['Montserrat:Bold',sans-serif] font-bold leading-[48px] left-[415.38px] text-[36px] top-[102.85px] tracking-[-1px] translate-x-[-50%] w-[791.875px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent", backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), url('${imgAyudoAConstruirProductosResolviendoProblemas}')` }}>
        Ayudo a construir productos resolviendo problemas reales de los usuarios
      </p>
      <p className="absolute bg-clip-text font-['Montserrat:Regular',sans-serif] font-normal leading-[75.471px] left-[415.44px] text-[45.74px] top-[26.73px] tracking-[-3.3133px] translate-x-[-50%] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90.2022deg, rgb(12, 14, 18) 24.964%, rgba(255, 255, 255, 0.8) 47.292%, rgb(12, 14, 18) 119.55%)" }}>
        Hola, soy Fernando.
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[324.781px] left-[24px] top-[70px] w-[848px]" data-name="Heading 1">
      <HeroParticles2 />
      <HeroParticles3 />
    </div>
  );
}

function HeroParticles4() {
  return (
    <div className="h-[111.984px] relative shrink-0 w-[512px]" data-name="HeroParticles">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[#ededed] h-[42px] left-[164px] rounded-[75px] top-[29px] w-[184px]" />
        <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[53.363px] left-[255px] not-italic text-[24px] text-black text-center top-[23px] translate-x-[-50%] whitespace-pre">Comenzar</p>
      </div>
    </div>
  );
}

function Container3() {
  return <div className="bg-[rgba(255,255,255,0.5)] h-[8px] rounded-[16777200px] shrink-0 w-[4px]" data-name="Container" />;
}

function HeroParticles5() {
  return (
    <div className="h-[40px] opacity-50 relative rounded-[16777200px] shrink-0 w-[24px]" data-name="HeroParticles">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[2px] pt-[10px] px-[2px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[70.67px] h-[283px] items-center left-[24px] pb-[9.33px] pt-0 px-0 top-[375.93px] w-[848px]" data-name="Container">
      <HeroParticles4 />
      <HeroParticles5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[658.766px] left-[284px] top-[137.07px] w-[896px]" data-name="Container">
      <Container2 />
      <Heading />
      <Container4 />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-gradient-to-b from-[#0b0b0b] h-[128px] left-0 to-[rgba(0,0,0,0)] top-[854px] w-[1464px]" data-name="Container" />;
}

function HeroParticles6() {
  return (
    <div className="bg-[#0b0b0b] h-[982px] overflow-clip relative shrink-0 w-full" data-name="HeroParticles">
      <Container />
      <Container1 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return <div className="h-[21px] shrink-0 w-full" data-name="Container" />;
}

function Footer() {
  return (
    <div className="h-[118px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-0 pt-[49px] px-[92px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#0b0b0b] content-stretch flex flex-col gap-[4910px] h-[6010px] items-start left-0 top-0 w-[1464px]" data-name="App">
      <HeroParticles6 />
      <Footer />
    </div>
  );
}

function Logotipo() {
  return (
    <div className="absolute contents inset-[0_0.02%_0.59%_0]" data-name="Logotipo">
      <div className="absolute inset-[6.68%_7.62%_7.27%_7.57%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.421px_-2.138px] mask-size-[31.991px_31.811px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1397 27.5369">
          <path d={svgPaths.p33954df0} fill="var(--fill-0, #FFFFF8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0.02%_0.59%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[31.991px_31.811px]" data-name="Vector_2" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9931 31.8111">
          <path d={svgPaths.p1985d570} fill="var(--fill-0, #FFFDFA)" id="Vector_2" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.03%_0.59%_0]" data-name="Clip path group">
      <Logotipo />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Logotipo1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[32px] top-0" data-name="Logotipo">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[21px] left-[44px] top-[5.5px] w-[127.797px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[64px] not-italic text-[14px] text-center text-white top-0 tracking-[4.0496px] translate-x-[-50%] uppercase whitespace-pre">Portafolio</p>
    </div>
  );
}

function Header() {
  return (
    <div className="h-[32px] relative shrink-0 w-[171.797px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Logotipo1 />
        <Text />
      </div>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-white h-px left-0 top-[23px] w-[121.695px]" data-name="Container" />;
}

function NavLink() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[121.695px]" data-name="NavLink">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[61px] not-italic text-[16px] text-center text-white top-[-0.5px] tracking-[2.8875px] translate-x-[-50%] uppercase whitespace-pre">Proyectos</p>
      <Container8 />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-white h-px left-0 top-[23px] w-0" data-name="Container" />;
}

function NavLink1() {
  return (
    <div className="absolute h-[24px] left-[153.7px] opacity-50 top-0 w-[98.906px]" data-name="NavLink">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[49px] not-italic text-[16px] text-center text-white top-[-0.5px] tracking-[2.8875px] translate-x-[-50%] uppercase whitespace-pre">Sobre mí</p>
      <Container9 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-white h-px left-0 top-[23px] w-0" data-name="Container" />;
}

function NavLink2() {
  return (
    <div className="absolute h-[24px] left-[284.6px] opacity-50 top-0 w-[110.898px]" data-name="NavLink">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[55.5px] not-italic text-[16px] text-center text-white top-[-0.5px] tracking-[2.8875px] translate-x-[-50%] uppercase whitespace-pre">Contacto</p>
      <Container10 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[24px] relative shrink-0 w-[395.5px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <NavLink />
        <NavLink1 />
        <NavLink2 />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[rgba(11,11,11,0.9)] h-[80px] items-center justify-between left-0 px-[32px] py-0 to-[rgba(11,11,11,0)] top-0 w-[1464px]" data-name="Header">
      <Header />
      <Navigation />
    </div>
  );
}

export default function Portafolio() {
  return (
    <div className="bg-[#0b0b0b] relative size-full" data-name="Portafolio">
      <App />
      <Header1 />
    </div>
  );
}