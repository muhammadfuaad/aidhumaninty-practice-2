import Mobile_header from "./mobile_header";
function Emergency() {
  return (
    <div className="bg-[#f5f6f7] min-h-screen relative overflow-hidden">
      <div className="">
        < Mobile_header title="Emergency" display_logout="hidden"/>
      </div>
      <div className="px-6 py-14">
        <div className="flex flex-col gap-12">         
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
        </div>
        <button class="w-[95%] py-6 uppercase text-[1.4rem] font-semibold text-[#006ba3] bg-transparent outline
          outline-primary rounded-xl fixed bottom-8">Donate Now</button>
        
        <img src="./icons/footer-background-logo.svg" className="absolute -right-[22rem] top-40"></img>
      </div>

    </div>
  );
}
export default Emergency;