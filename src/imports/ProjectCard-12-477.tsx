import imgMockupWeb1 from "figma:asset/e74f6c49b3bac2bda76f95ca4f96236bb774a2e6.png";

function Container() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[834.695px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.3)] w-[1152px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[24px] left-0 opacity-50 top-0 w-[672px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[4.4875px] uppercase w-[84px]">01 / 04</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[54px] left-0 top-[40px] w-[672px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[54px] left-0 not-italic text-[36px] text-nowrap text-white top-[0.5px] tracking-[-0.5309px] whitespace-pre">BEGO WEB</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[44.195px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[2.8875px] uppercase whitespace-pre">Web</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] opacity-50 relative shrink-0 w-[7.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[7.766px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[2.8875px] uppercase whitespace-pre">/</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[50.836px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[2.8875px] uppercase whitespace-pre">2025</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[118.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[118.703px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[2.8875px] uppercase whitespace-pre">Diseñador</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-0 opacity-80 top-[118px] w-[672px]" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[21px] left-[140.44px] top-[17px] w-[15.516px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[2.6496px] uppercase whitespace-pre">→</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[55px] left-0 top-[174px] w-[188.953px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[33px] not-italic text-[14px] text-nowrap text-white top-[17px] tracking-[2.6496px] uppercase whitespace-pre">Explorar</p>
      <Text5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[229px] left-[64px] top-[541.7px] w-[672px]" data-name="Container">
      <Container1 />
      <Heading2 />
      <Container2 />
      <Button />
    </div>
  );
}

export default function ProjectCard() {
  return (
    <div className="relative size-full" data-name="ProjectCard">
      <div className="absolute h-[951.881px] left-[-0.5px] top-[-72.65px] w-[1153px]" data-name="mockup_web 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMockupWeb1} />
      </div>
      <Container />
      <Container3 />
    </div>
  );
}