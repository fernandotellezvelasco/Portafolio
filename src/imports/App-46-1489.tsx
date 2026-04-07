function Button() {
  return (
    <div className="bg-[springgreen] h-[36px] relative rounded-[8px] shrink-0 w-[109px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[109px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[17.02px] not-italic text-[14px] text-black text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">Demo App</p>
      </div>
    </div>
  );
}

function Icon() {
  return <div className="absolute left-[152.32px] size-[16px] top-[10px]" data-name="Icon" />;
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-[160px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[springgreen] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[160px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[13px] not-italic text-[14px] text-[springgreen] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">Demo landing page</p>
        <Icon />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative size-full" data-name="App">
      <Button />
      <Button1 />
    </div>
  );
}