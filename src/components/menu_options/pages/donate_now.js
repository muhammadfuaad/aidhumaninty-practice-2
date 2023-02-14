import Mobile_header from "../components/mobile_header";

import Donation_card from '../components/donation_card';
import Amount from "../components/amount";
import Category_options from "../components/category_options";
import Category from "../../category";
import Radio from "../components/radio";

function Donate() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="">
        < Mobile_header title="Donate Now" display_logout="hidden"/>
      </div>
        <div className="flex flex-col">
          <div className="flex flex-col px-6 py-10 bg-[#f5f6f7]">
            <div className="flex gap-8">
              <div className="flex flex-col">
                < Category category="Z" />
                <p>Sadaqah</p>
                < Radio />
              </div>
              <div className="flex flex-col">
                < Category category="Z" />
                <p>Sadaqah Jariyah</p>
                < Radio />
              </div>
              <div className="flex flex-col">
                < Category category="Z" />
                <p>Sadaqah</p>
                < Radio />
              </div>
            </div>
            
          </div>

          <div className="flex flex-col bg-[#f9f9f9] px-6">
            <p className="text-[2.6rem] font-bold tracking-[-0.65px] text-black self-center my-12">Donation amount</p>
            < Amount />
            <div className="flex mt-6 mb-8">
              <div class="relative w-[70%]">
                <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl pl-9 pr-3 py-4 w-full text-[1.3rem] font-medium tracking-[0px] text-black" placeholder=" " />
                <label for="" className="absolute text-[1.7rem] font-medium tracking-[0px] text-primary top-4 left-4">£</label>
              </div>
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-[30%] text-[1.3rem] font-medium text-gray
                tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
                <span className="text-[1.3rem] font-medium tracking-[0px] text-gray">GBP</span>
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