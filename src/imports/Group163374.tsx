function Button() {
  return (
    <div className="absolute bg-[#fe0] bottom-0 content-stretch flex gap-[12px] h-[50px] items-center justify-center left-1/2 px-[24px] py-[12px] rounded-[50px] translate-x-[-50%] w-[151px]" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Avenir:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1f23] text-[18px] text-center">
        <p className="css-ew64yg leading-[22px]">Guardar</p>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Button />
    </div>
  );
}