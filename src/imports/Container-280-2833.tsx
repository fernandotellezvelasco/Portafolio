import img33331 from "figma:asset/9b2a9159d45cccd916d8be896f0a982b2f18ecbd.png";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[816px] ml-0 mt-0 relative row-1 w-[877px]" data-name="3333 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.03%] left-[10.9%] max-w-none top-[-16.39%] w-[93.07%]" src={img33331} />
        </div>
      </div>
      <div className="bg-gradient-to-b col-1 from-[9.366%] from-[rgba(8,12,15,0)] h-[511.033px] ml-[120.11px] mt-[802.26px] row-1 to-[#0d0d0d] to-[36.599%] w-[725.888px]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative rounded-[14px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Group />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}