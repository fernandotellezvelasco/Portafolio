import img33331 from "figma:asset/9b2a9159d45cccd916d8be896f0a982b2f18ecbd.png";

function Heading() {
  return (
    <div className="h-[27.625px] opacity-90 relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute css-ew64yg font-['Montserrat:Medium',sans-serif] leading-[27.625px] left-0 not-italic text-[17px] text-white top-0">Wireframes de Baja Fidelidad</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[816.243px]" data-name="3333 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[11.11%] max-w-none size-full top-[-21.85%]" src={img33331} />
        </div>
      </div>
      <div className="bg-gradient-to-b col-1 from-[9.366%] from-[rgba(8,12,15,0)] h-[511.033px] ml-[120.11px] mt-[802.1px] row-1 to-[#0d0d0d] to-[36.599%] w-[725.888px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[534.375px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Group />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Container">
      <Heading />
      <Container />
    </div>
  );
}