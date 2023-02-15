
import floods from "../../icons/pakistan-floods.png"
import arrow from "../../icons/arrow-right.svg"

function Popular_donations() {
  return (
    <div class="bg-Ghost-white w-full py-[52px] px-16 grid grid-cols-4 gap-7">
      <div>
        <h1 class="font-bold text-4xl text-black p-0 whitespace-pre-line">Popular Donations</h1>
      </div>
      <div>
        <div class="rounded-2xl header-shadow bg-white flex">
          <div class="relative">
            <img src={floods}></img>
            <button class="rounded-md px-4 outline-none absolute bottom-2 left-2 right-2
            bg-primary text-white text-xs font-bold py-3">DONATE NOW</button>
            <span class="bg-amber w-9 h-9 flex items-center justify-center rounded-full -translate-y-1/2 absolute top-1/2 -right-2.5 text-[10px] font-bold">
              Z
            </span>
          </div>
          <div class="max-w-[96px] m-7 flex flex-col justify-between h-[94px]">
            <h3 class="text-[1.6rem] font-bold text-black">
              Pakistan Floods
            </h3>
            <img src={arrow} className="w-4"></img>
          </div>
        </div>
      </div>

      <div>
        <div class="rounded-2xl header-shadow bg-white flex">
          <div class="relative">
            <img src={floods}></img>
            <button class="rounded-md px-4 outline-none absolute bottom-2 left-2 right-2
            bg-primary text-white text-xs font-bold py-3">DONATE NOW</button>
            <span class="bg-amber w-9 h-9 flex items-center justify-center rounded-full -translate-y-1/2 absolute top-1/2 -right-2.5 text-[10px] font-bold">
              SJ
            </span>
          </div>
          <div class="max-w-[96px] m-7 flex flex-col justify-between h-[94px]">
            <h3 class="text-[1.6rem] font-bold text-black">
              Support an Orphan Child
            </h3>
            <img src={arrow} className="w-4"></img>
          </div>
        </div>
      </div>

      <div>
        <div class="rounded-2xl header-shadow bg-white flex">
          <div class="relative">
            <img src={floods}></img>
            <button class="rounded-md px-4 outline-none absolute bottom-2 left-2 right-2
            bg-primary text-white text-xs font-bold py-3">DONATE NOW</button>
            <span class="bg-amber w-9 h-9 flex items-center justify-center rounded-full -translate-y-1/2 absolute top-1/2 -right-2.5 text-[10px] font-bold">
              S
            </span>
          </div>
          <div class="max-w-[96px] m-7 flex flex-col justify-between h-[94px]">
            <h3 class="text-[1.6rem] font-bold text-black">
              Yemen Emergency
            </h3>
            <img src={arrow} className="w-4"></img>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Popular_donations;