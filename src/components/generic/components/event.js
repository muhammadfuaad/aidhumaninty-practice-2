function Event() {
  return (
    <div class="flex flex-col w-[210px] h-[250px] bg-White rounded-xl p-6 hover:shadow-[10px_10px_10px_10px_rgba(0,0,0,0.2)] shadow-[2px_2px_2px_2px_rgba(0,0,0,0.03)]">
      <div class="flex flex-col space-y-4 h-[70%]">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <p class="text-Space-Cadet text-[11px] font-semibold tracking-[-0.17px] leading-[13px]"></p>
            <p class="text-Vivd-Cerulean text-[28px] font-semibold tracking-[-0.7px] leading-[32px]"></p>
          </div>
        </div>
        <p class="text-Eerie-Black text-base font-bold tracking-[-0.4px] leading-[20px]"></p>
      </div>

      <div class="flex flex-col justify-around">
          <div class="text-Green flex space-x-2 items-center"><span class="text-[11px] font-semibold tracking-[-0.17px]">FR Target:</span><span class="text-[20px] font-semibold tracking-[-0.3px]"></span></div>
          <div class="text-Spanish-Gray flex space-x-2 items-center"><span class="text-[11px] font-semibold tracking-[-0.17px]">Reg Fee:</span><span class="text-[20px] font-semibold tracking-[-0.3px]"></span></div>
          <button class="border-2 border-Amber w-[135px] h-[48px]">MORE INFO</button>
      </div>
    </div>


  );
}
export default Event;