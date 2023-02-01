import Water_hand_pumps_card from "./cards/water_hand_pumps_card";

function Water_hand_pumps() {
  return (
    <div className="w-[80%] sm:w-[25%] bg-primary">
      <div className="p-8 flex justify-between border-b border-black">
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-primary-dark">Add your donation</p>
        <img src="./icons/black-cross-circle.svg"></img>
      </div>
      <div className="p-8 flex flex-col">
        <p className="text-[2.2rem] font-bold tracking-[-0.55px] text-white mb-4">Water Hand Pumps</p>
        <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-white mb-6">Every single day, women around the world have to walk miles to collect water for their 
          household. Installing a hand pump brings this basic human right closer to home.
        </p>
        <Water_hand_pumps_card />
      </div>
      <img src="./icons/modal-background-logo.svg" className="-mt-40 -ml-20"></img>

    </div>
  )
} 
 
export default Water_hand_pumps;