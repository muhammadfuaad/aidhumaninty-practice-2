import Donation_type_card from "./donation_type_card";
function Donation_added() {
  return (
      <div className="w-[80%] sm:w-[25%] bg-[#f5f6f7] overflow-hidden">
        <div className="p-8 flex justify-between border-b border-black">
          <div className="flex gap-2 items-center">
            <img src="./icons/green-plus.svg"></img>

            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-primary-dark">Donation added</p>
          </div>
          <img src="./icons/black-cross-circle-hollow.svg"></img>
        </div>
        <div className="p-8 flex flex-col">
          <p className="text-[1.6rem] font-semibold tracking-[-0.4px] text-body">You are donating to <span className="text-red">3 causes</span></p>
          < Donation_type_card title="Sponsor a child for one year" category="MOST NEEDED, DONATION" />
          
          
        </div>
        <img src="./icons/modal-background-logo.svg" className="-ml-20"></img>
      </div>
  )
}
export default Donation_added;