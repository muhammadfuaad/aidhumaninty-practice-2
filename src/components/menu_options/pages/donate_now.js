import Mobile_header from "../components/mobile_header";
import Header_1 from "../components/header_1"
import Donation_card from '../components/donation_card';
import Amount from "../components/amount";
import React from "react"
import Input_dropdown from "../components/input_dropdown";
import Donation_form from "../components/donation_form";

function Donate_now() {
  return (
    <Donation_form
    title="Donate Now"
      content =
      <div className="flex flex-col px-10 py-10 bg-[#f5f6f7]">
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
    />
  );
}
export default Donate_now;