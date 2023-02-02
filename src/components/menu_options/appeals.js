import Mobile_header from "./mobile_header";
function Menu() {
  return (
    <div className="bg-[#f5f6f7] min-h-screen relative overflow-hidden">
      <div className="">
        < Mobile_header title="Appeals" display_logout="hidden"/>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-12">
          <div>
            <div className="flex gap-4 items-center mb-4">
              <img src="./icons/mosque.svg"></img>
              <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">Build a Mosque</p>
            </div>
            <ul className="text-[1.6rem] font-medium tracking-[-0.24px] text-[#7c7c7c] ml-16 flex flex-col gap-6">
              <li>Pay for a Brick</li>
              <li>Quran Appeal</li>
              <li>Books</li>
            </ul>
          </div>

          <div>
            <div className="flex gap-4 items-center mb-4">
              <img src="./icons/emergency.svg"></img>
              <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">Disaster & Emergency Appeals</p>
            </div>
            <ul className="text-[1.6rem] font-medium tracking-[-0.24px] text-[#7c7c7c] ml-16 flex flex-col gap-6">
              <li>Pakistan Floods</li>
              <li>Bangladesh Floods</li>
              <li>Rohingya Appeal</li>
              <li>Palestine Gaza</li>
              <li>Ukraine Emergency Appeal</li>
            </ul>
          </div>
          <div>
            <div className="flex gap-4 items-center mb-5">
              <img src="./icons/water-drop.svg"></img>
              <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">Water For All</p>
            </div>
            <ul className="text-[1.6rem] font-medium tracking-[-0.24px] text-[#7c7c7c] ml-14 flex flex-col gap-6">
              <li>Water Wells</li>
            </ul>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <img src="./icons/sponsor-orphan.svg"></img>
            <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">Sponsor an Orphan</p>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <img src="./icons/food.svg"></img>
            <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">Hunger Appeal</p>
          </div>
        </div>
        
        <button class="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#006ba3] bg-transparent outline
          outline-primary rounded-xl mt-28">Donate Now</button>
        
        <img src="./icons/footer-background-logo.svg" className="absolute -right-[22rem] top-40"></img>
      </div>

    </div>
  );
}
export default Menu;