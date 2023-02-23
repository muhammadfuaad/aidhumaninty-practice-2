import React from "react";
import Appeals_options from "../../homepage/components/appeals_options";
import Login from '../../menu_options/pages/login';
import Heart from "../../homepage/components/heart"

function Generic_header_1() {
  return (
    <div className="">
      <div className="flex justify-between text-[1.4rem] font-medium tracking-[-0.21px] text-[#999] py-4 px-48 border-b border-platinum">
        <a href="#" className="flex gap-2">
          <p>En</p>
          <img src="./icons/drop-down.svg" className="w-4"></img>
        </a>

        <div className="flex gap-4">
          <a href="#">Latest News</a>
          <a href="#">Zakat Calculator</a>
        </div>

        <div className="flex gap-16">
          <a href="#" className="flex gap-4 relative">
            <div className="bg-platinum h-6 w-[1px] absolute -right-8"></div>
            <img src="./icons/phone-volume.svg"></img>
            <p className="font-bold text-primary">0330 057 9957</p>
          </a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="flex justify-between px-48 py-8">
        <div className="flex justify-between w-[65%]">
          <img src="./icons/primary-horizontal-logo.png" className="w-[23rem]"></img>
          <ul className="w-[65%] flex justify-between items-center text-[1.8rem] font-semibold tracking-[-0.27px] text-black
              ">
            <li><a href="#" className="whitespace-nowrap">Our Story</a></li>
            <li className="group">
              <a href="#" className="whitespace-nowrap">Appeals</a>
              <div className="hidden group-hover:block"><Appeals_options/></div>
            </li>
            <li><a href="#" className="whitespace-nowrap">Emergency</a></li>
            <li><a href="#" className="whitespace-nowrap">Zakat</a></li>
            <li><a href="#" className="whitespace-nowrap">Get Involved</a></li>
          </ul>
        </div>

        <div className="flex gap-2 justify-between items-center">
          <a href="#">
            <div className="flex gap-4 items-center mr-4 group relative">
              <div className="hidden group-hover:block absolute top-8 left-[-25rem] z-10"><Login/></div>
              <img src="./icons/user-circle-black.svg" className="w-8"></img>
              <p className="text-[1.4rem] font-semibold tracking-[-0.21px] text-black whitespace-nowrap">My Account</p>
            </div>
          </a>
          <a href="#" className="mr-6">
            <div className="w-8"><Heart/></div>
          </a>
          <button className="px-10 py-4 uppercase text-[1.4rem] font-semibold text-primary-medium bg-transparent outline
            outline-primary rounded-xl">Donate now</button>
        </div>
      </div>
    </div>
  );
}

export default Generic_header_1;