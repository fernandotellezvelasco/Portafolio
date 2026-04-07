import svgPaths from "./svg-tsgx38ehaj";
import imgImageWithFallback from "figma:asset/e74f6c49b3bac2bda76f95ca4f96236bb774a2e6.png";
import imgImageWithFallback1 from "figma:asset/d1374282898f5472e24c2dc24988e6dc9d913c65.png";
import { imgVector } from "./svg-1r1ea";

function ImageWithFallback() {
  return (
    <div className="absolute h-[834.695px] left-0 top-0 w-[1152px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function ProjectCard() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.08)] h-[834.695px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.03)] w-[1152px]" data-name="ProjectCard" />;
}

function ProjectCard1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[834.695px] left-0 top-0 w-[1152px]" data-name="ProjectCard">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_60px_30px_rgba(11,11,11,0.6)]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[834.695px] left-0 top-[-3.26px] w-[1152px]" data-name="Container">
      <ImageWithFallback />
      <ProjectCard />
      <ProjectCard1 />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-b from-[#0b0b0b] h-[834.695px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[1152px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[21px] left-0 opacity-50 top-0 w-[672px]" data-name="Container">
      <p className="absolute css-4hzbpn font-['Montserrat:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[4.2px] uppercase w-[73px]">01 / 05</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 top-[37px] w-[672px]" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-0 tracking-[-0.4px]">BEGO WEB</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[173.273px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[2.8px] uppercase">WEB RESPONSIVO</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[21px] left-[185.27px] opacity-50 top-0 w-[7.484px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[2.8px] uppercase">/</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[21px] left-[204.76px] top-0 w-[44.266px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[2.8px] uppercase">2025</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[21px] left-[261.02px] opacity-50 top-0 w-[7.484px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[2.8px] uppercase">/</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[21px] left-[280.51px] top-0 w-[174.68px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-0 tracking-[2.8px] uppercase">DISEÑADOR UX/UI</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[21px] left-0 opacity-80 top-[85px] w-[672px]" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[21px] left-[144.57px] top-[16px] w-[11.203px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[21px] left-[6.5px] text-[14px] text-center text-white top-0 tracking-[2.8px] translate-x-[-50%] uppercase">→</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.3)] border-solid h-[55px] left-0 top-[138px] w-[189.773px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[21px] left-[82px] text-[14px] text-center text-white top-[16px] tracking-[2.8px] translate-x-[-50%] uppercase">Explorar</p>
      <Text5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[193px] left-[64px] top-[577.7px] w-[672px]" data-name="Container">
      <Container2 />
      <Heading />
      <Container3 />
      <Button />
    </div>
  );
}

function ProjectCard2() {
  return (
    <div className="absolute h-[834.695px] left-[156px] overflow-clip top-[73.65px] w-[1152px]" data-name="ProjectCard">
      <Container />
      <Container1 />
      <Container4 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[54px] top-[409px]">
      <div className="absolute bg-[#3b3b3b] h-[6px] left-[80px] rounded-[11px] top-[409px] w-[2px]" />
      <div className="absolute bg-[#3b3b3b] h-[6px] left-[80px] rounded-[11px] top-[488px] w-[2px]" />
      <div className="absolute bg-[#3b3b3b] h-[6px] left-[80px] rounded-[11px] top-[527px] w-[2px]" />
      <div className="absolute bg-[#3b3b3b] h-[6px] left-[80px] rounded-[11px] top-[567px] w-[2px]" />
      <p className="absolute css-ew64yg font-['Montserrat:Medium',sans-serif] leading-[12.174px] left-[54px] not-italic text-[#bcbcbc] text-[9.739px] text-justify top-[445px]">02</p>
      <div className="absolute bg-[#fffbfb] h-[32px] left-[80px] rounded-[11px] top-[435px] w-[2px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#0b0b0b] h-[982px] left-0 top-[982px] w-[1464px]" data-name="Container">
      <ProjectCard2 />
      <Group />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[681.356px] left-0 top-0 w-[940.37px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function ProjectCard3() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.08)] h-[681.356px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.03)] w-[940.37px]" data-name="ProjectCard" />;
}

function ProjectCard4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[681.356px] left-0 top-0 w-[940.37px]" data-name="ProjectCard">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_60px_30px_rgba(11,11,11,0.6)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[681.356px] left-0 top-[78.97px] w-[940.37px]" data-name="Container">
      <ImageWithFallback1 />
      <ProjectCard3 />
      <ProjectCard4 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-gradient-to-b from-[#0b0b0b] h-[681.356px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[940.37px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute h-[681.356px] left-0 top-0 w-[940.37px]" data-name="Container" />;
}

function ProjectCard5() {
  return (
    <div className="absolute h-[681.356px] left-[127.34px] overflow-clip top-[60.12px] w-[940.37px]" data-name="ProjectCard">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#0b0b0b] h-[801.6px] left-[134.47px] opacity-8 top-[2054.2px] w-[1195.053px]" data-name="Container">
      <ProjectCard5 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[5892px] relative shrink-0 w-full" data-name="Main Content">
      <Container5 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return <div className="h-[21px] shrink-0 w-full" data-name="Container" />;
}

function Footer() {
  return (
    <div className="h-[118px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[49px] px-[92px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#0b0b0b] content-stretch flex flex-col h-[6010px] items-start left-0 top-[-982px] w-[1464px]" data-name="App">
      <MainContent />
      <Footer />
    </div>
  );
}

function Logotipo() {
  return (
    <div className="absolute contents inset-[0_0.02%_0.59%_0]" data-name="Logotipo">
      <div className="absolute inset-[6.68%_7.62%_7.27%_7.57%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.422px_-2.138px] mask-size-[31.991px_31.812px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1397 27.5369">
          <path d={svgPaths.p33954df0} fill="var(--fill-0, #FFFFF8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0.02%_0.59%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[31.991px_31.812px]" data-name="Vector_2" style={{ maskImage: `url('${imgVector}')` }}>
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

function Text6() {
  return (
    <div className="absolute h-[21px] left-[44px] top-[5.5px] w-[136.078px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[21px] left-[68px] text-[14px] text-center text-white top-0 tracking-[4.2px] translate-x-[-50%] uppercase">Portafolio</p>
    </div>
  );
}

function Header() {
  return (
    <div className="h-[32px] relative shrink-0 w-[180.078px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Logotipo1 />
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-[64px] text-[16px] text-center text-white top-0 tracking-[3.2px] translate-x-[-50%] uppercase">Proyectos</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 overflow-clip top-0 w-[128.625px]" data-name="Text">
      {[...Array(2).keys()].map((_, i) => (
        <Text7 key={i} />
      ))}
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-white h-px left-0 top-[23px] w-[128.625px]" data-name="Container" />;
}

function NavLink() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[128.625px]" data-name="NavLink">
      <Text8 />
      <Container11 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-[54.5px] text-[16px] text-center text-white top-0 tracking-[3.2px] translate-x-[-50%] uppercase">Sobre mí</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 overflow-clip top-0 w-[107.523px]" data-name="Text">
      {[...Array(2).keys()].map((_, i) => (
        <Text9 key={i} />
      ))}
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-white h-px left-0 top-[23px] w-0" data-name="Container" />;
}

function NavLink1() {
  return (
    <div className="absolute h-[24px] left-[160.63px] opacity-50 top-0 w-[107.523px]" data-name="NavLink">
      <Text10 />
      <Container12 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute css-ew64yg font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-[58px] text-[16px] text-center text-white top-0 tracking-[3.2px] translate-x-[-50%] uppercase">Contacto</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 overflow-clip top-0 w-[116.32px]" data-name="Text">
      {[...Array(2).keys()].map((_, i) => (
        <Text11 key={i} />
      ))}
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-white h-px left-0 top-[23px] w-0" data-name="Container" />;
}

function NavLink2() {
  return (
    <div className="absolute h-[24px] left-[300.15px] opacity-50 top-0 w-[116.32px]" data-name="NavLink">
      <Text12 />
      <Container13 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[24px] relative shrink-0 w-[416.469px]" data-name="Navigation">
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
    <div className="absolute bg-gradient-to-b content-stretch flex from-[rgba(11,11,11,0.9)] h-[80px] items-center justify-between left-0 px-[32px] to-[rgba(11,11,11,0)] top-[32px] w-[1464px]" data-name="Header">
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