import React from "react";
import Phone from "./icons/phone-volume.svg";
import Dropdown from "./icons/drop-down.svg";
import User from "./icons/user-circle.svg";
import Logo from "./icons/horizontal-logo.svg";
import Heart from "./icons/heart.svg";

function Header() {
  return (
    <div className="">
      <div className="flex justify-between text-[1.4rem] font-medium tracking-[-0.21px] text-[#999] py-4 px-64 border-b border-[#e6e6e6]">
        <div className="flex gap-2">
          <p>En</p>
          <img src={Dropdown} className="w-4"></img>
        </div>

        <div className="flex gap-4">
          <p>Latest News</p>
          <p>Zakat Calculator</p>
        </div>

        <div className="flex gap-16">
          <div className="flex gap-4 relative">
            <div className="bg-[#e6e6e6] h-6 w-[1px] absolute -right-8"></div>
            <img src={Phone}></img>
            <p className="font-bold text-primary">0330 057 9957</p>
          </div>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="flex justify-between px-64">
        <div className="flex gap-24">
          <img src={Logo}></img>
          <ul className="flex justify-between gap-24 items-center text-[1.8rem] font-semibold tracking-[-0.27px] text-black
              ">
            <li>Our Story</li>
            <li>Appeals</li>
            <li>Emergency</li>
            <li>Zakat</li>
            <li>Get Involved</li>
          </ul>
        </div>

        <div className="flex gap-8">
          <div className="flex gap-4 items-center">
            <img src={User} className="w-8"></img>
            <p className="text-[1.4rem] font-semibold tracking-[-0.21px] text-black">My Account</p>
          </div>
          <img src={Heart} className="w-8"></img>
          <button class="w-full py-6 uppercase text-[1.4rem] font-semibold text-primary bg-transparent outline
            outline-primary rounded-xl">Donate now</button>
        </div>
      </div>
    </div>
  );
}

export default Header;