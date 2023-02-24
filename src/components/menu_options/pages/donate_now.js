import Mobile_header from "../components/mobile_header";
import Header from "../components/header"
import Donation_card from '../components/donation_card';
import Amount from "../components/amount";
import React from "react"

function Donate_now() {
  const [showDropdown, setShowDropdown] = React.useState(false)
  return (
    <div className="bg-[#f5f6f7] min-h-screen sm:min-h-0 relative overflow-hidden sm:w-[60rem] sm:rounded-3xl">
      <div className="block sm:hidden">
        < Mobile_header title="Donate Now" display_logout="hidden"/>
      </div>
      <div className="sm:block hidden">
        < Header title="Donate Now"/>
      </div>
        <div className="flex flex-col">
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

          <div className="flex flex-col bg-[#f9f9f9] px-6 pb-6">
            <p className="text-[2.6rem] font-bold tracking-[-0.65px] text-black self-center my-12">Donation Amount</p>
            < Amount />
            <div className="h-28 flex mt-6 mb-8 relative">
              <div className="relative w-[85%]">
                <input type="number" id="" className="h-full focus:outline-none focus:bg-white block border-l border-l-platinum border-y border-y-platinum rounded-l-xl px-20 w-full text-[4rem] font-bold tracking-[0px] text-primary" placeholder=" " />
                <label for="" className="absolute text-[2rem] font-medium tracking-[0px] text-[#7c7c7c] top-11 left-8">£</label>
              </div>
              <button onClick={()=>setShowDropdown(current=> !current)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="h-full bg-white w-[15%] text-[1.3rem] font-medium text-gray
                tracking-[0px] px-4 inline-flex justify-between items-center border-r border-r-platinum border-y border-y-platinum rounded-r-xl relative" type="button">
                <span className="text-[1.6rem] font-medium tracking-[0px] text-gray">GBP</span>
                <img src="./icons/drop-down-black.svg" alt="dropdown"></img>
                <div className="bg-platinum h-[4.75rem] w-px absolute right-40 top-5 z-10"></div>
              </button>
              {showDropdown ? 
              <div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
              </div> : null}
            </div>
            <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
              Continue
            </button>
          </div>
        </div>
    </div>
  );
}
export default Donate_now;