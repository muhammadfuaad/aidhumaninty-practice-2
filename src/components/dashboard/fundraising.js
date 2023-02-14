import Circular_progress_bar from "./circular_progress_bar";
function Fundraising() {
  return (
    <div className="bg-white rounded-3xl p-8">
      <p className="portal-subheading mb-8">Active pages</p>
      <div className="flex space-x-4 items-start bg-primary-light px-10 py-8 rounded-xl mb-8">
        <img src="./icons/blue-info-circle.svg"></img>
        <p className="text-[1.2rem] font-bold tracking-[-0.3px] text-primary">Raising money for a charity? Your donations are being sent to them automatically.</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex sm:w-1/2 justify-start items-center">
          <div className="relative">
            <img src="./images/pakistan-floods.png"></img>
            <div className="bg-amber rounded-full w-8 h-8 absolute -right-4 top-[40%] flex justify-center items-center">
              <p className="text-[1rem] font-bold text-black">Z</p>
            </div>
          </div>
          <div className="flex flex-col ml-8">
            <p className="text-[1.2rem] font-bold text-black mt-4 mb-2">Pakistan Floods</p>
            <p className="text-[0.8rem] font-medium text-black mb-4">Disaster & Emergency Appeals</p>
          
            <div className="flex space-x-8 relative">
              <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-spanish-gray">Edit</button>
              <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-spanish-gray">View</button>
              <div class="absolute top-1 left-4 w-[1px] h-4 bg-platinum"></div>
            </div>
          </div>
        </div>

        <div className="flex sm:w-1/2 justify-end items-center space-x-6">
          <div className="flex flex-col">
            <p className="text-[1.1rem] font-semibold tracking-[-0.17px] text-primary">Raised: £156<span className="text-green">/£634</span></p>
            <p className="flex space-x-2 text-[1.1rem] font-medium tracking-[-0.17px] text-spanish-gray">
              <span>by</span>
              <img src="./icons/user-circle.svg" className="w-5 brightness-50"></img>
              <span>117</span><span className="font-semibold">supporters</span>
            </p>
          </div>
          <div className="w-[15%]">
            <Circular_progress_bar />
          </div>
        </div>
      </div>      
    </div>
  );
}
export default Fundraising;
  