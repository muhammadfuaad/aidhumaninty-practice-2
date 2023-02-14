function Event() {
  return (
    <div className="flex flex-col w-[210px] h-[250px] bg-white rounded-xl p-6 hover:shadow-[10px_10px_10px_10px_rgba(0,0,0,0.2)] shadow-[2px_2px_2px_2px_rgba(0,0,0,0.03)]">
      <div className="flex flex-col space-y-4 h-[70%]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-primary-dark text-[11px] font-semibold tracking-[-0.17px] leading-[13px]"></p>
            <p className="text-primary text-[28px] font-semibold tracking-[-0.7px] leading-[32px]"></p>
          </div>
        </div>
        <p className="text-black text-[1.6rem] font-bold tracking-[-0.4px] leading-[20px]"></p>
      </div>

      <div className="flex flex-col justify-around">
          <div className="text-green flex space-x-2 items-center"><span className="text-[11px] font-semibold tracking-[-0.17px]">FR Target:</span><span className="text-[20px] font-semibold tracking-[-0.3px]"></span></div>
          <div className="text-Spanish-Gray flex space-x-2 items-center"><span className="text-[11px] font-semibold tracking-[-0.17px]">Reg Fee:</span><span className="text-[20px] font-semibold tracking-[-0.3px]"></span></div>
          <button className="border-2 border-amber w-[135px] h-[48px]">MORE INFO</button>
      </div>
    </div>


  );
}
export default Event;