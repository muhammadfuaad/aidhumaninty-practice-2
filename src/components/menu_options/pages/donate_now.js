import Mobile_header from "../components/mobile_header";
import Header from "../components/header"
import Donation_card from '../components/donation_card';
import Amount from "../components/amount";

function Donate_now() {
  return (
    <div className="min-h-screen relative overflow-hidden sm:w-[60rem] sm:rounded-3xl">
      <div className="block sm:hidden">
        < Mobile_header title="Donate Now" display_logout="hidden"/>
      </div>
      <div className="sm:block hidden">
        < Header title="Donate Now"/>
      </div>
        <div className="flex flex-col h-screen">
          <div className="flex flex-col px-6 py-10 bg-[#f5f6f7]">
            <div className="flex gap-8 mt-12">
              <div className="">< Donation_card /></div>
              <div className="">< Donation_card /></div>
            </div>
            <div className="flex flex-col mt-12 mx-auto w-[90%]">
              <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-body mb-2">Donate to Support an <span className="font-bold">Orphaned Child</span></p>
              <div className="flex gap-2 items-center self-center">
                <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-body">fundraised by</p>
                <img src="./icons/user-circle.svg"></img>
                <p className="text-[1.1rem] font-semibold tracking-[-0.28px] text-primary-dark">Ron Hill</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[#f9f9f9] px-6 h-full">
            <p className="text-[2.6rem] font-bold tracking-[-0.65px] text-black self-center my-12">Donation Amount</p>
            < Amount />
            <div className="h-28 flex mt-6 mb-8 relative">
              <div className="bg-platinum h-[4.75rem] w-px absolute right-40 top-5 z-10"></div>
              <div className="relative w-[75%]">
                <input type="number" id="" className="h-full focus:outline-none focus:bg-white block border-l border-l-platinum border-y border-y-platinum rounded-l-xl px-20 w-full text-[4rem] font-bold tracking-[0px] text-primary" placeholder=" " />
                <label for="" className="absolute text-[2rem] font-medium tracking-[0px] text-[#7c7c7c] top-11 left-8">£</label>
              </div>
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="h-full bg-white w-[25%] text-[1.3rem] font-medium text-gray
                tracking-[0px] px-4 inline-flex justify-between items-center border-r border-r-platinum border-y border-y-platinum rounded-r-xl" type="button">
                <span className="text-[1.6rem] font-medium tracking-[0px] text-gray">GBP</span>
                <img src="./icons/drop-down-black.svg" alt="dropdown"></img>
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
export default Donate_now;