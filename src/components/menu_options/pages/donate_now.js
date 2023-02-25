import Mobile_header from "../components/mobile_header";
import Header from "../components/header"
import Donation_card from '../components/donation_card';
import Amount from "../components/amount";
import React from "react"
import Input_dropdown from "../components/input_dropdown";

function Donate_now() {
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
            <Input_dropdown/>
            <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
              Continue
            </button>
          </div>
        </div>
    </div>
  );
}
export default Donate_now;