import Mobile_header from "../components/mobile_header";

import Donation_card from '../components/donation_card';
import Amount from "../../cart_sidebar/add_your_donation/cards/amount";

function Donate() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="">
        < Mobile_header title="Donate" display_logout="hidden"/>
      </div>
        <div className="flex flex-col">
          <div className="flex flex-col px-6 py-10 bg-[#f5f6f7]">
            <div className="flex gap-8 mt-12">
              <div className="">< Donation_card /></div>
              <div className="">< Donation_card /></div>
            </div>
            <div className="flex flex-col">
              <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-body mb-2">Donate to Support an <span className="font-bold">Orphaned Child</span></p>
              <div className="flex gap-2 items-center self-center">
                <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-body">fundraised by</p>
                <img src="./icons/user-circle.svg"></img>
                <p className="text-[1.1rem] font-semibold tracking-[-0.28px] text-primary-dark">Ron Hill</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[#f9f9f9] px-6">
            <p className="text-[2.6rem] font-bold tracking-[-0.65px] text-black self-center my-12">Donation Amount</p>
            < Amount />
            <div className="flex mt-6 mb-8">
              <div class="relative w-[70%]">
                <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl pl-9 pr-3 py-4 w-full text-[1.3rem] font-medium tracking-[0px] text-black" placeholder=" " />
                <label for="" className="absolute text-[1.7rem] font-medium tracking-[0px] text-primary top-4 left-4">£</label>
              </div>
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-[30%] text-[1.3rem] font-medium text-[#7c7c7c]
                tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
                <span className="text-[1.3rem] font-medium tracking-[0px] text-[#7c7c7c]">GBP</span>
                <img src="./icons/drop-down.svg" alt="dropdown"></img>
              </button>
            </div>
            <button className="mb-32 w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
              Continue
            </button>
          </div>
        </div>
    </div>
  );
}
export default Donate;