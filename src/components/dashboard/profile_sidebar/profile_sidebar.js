import { DomPlatform } from "chart.js";
import Funding_stats from "./funding_stats";
import Zakat from "./zakat";
import React from "react";
import Image_upload from "../image_upload";
import Profile_sidebar_header from "../profile_sidebar_header";
import Profile_sidebar_header_mobile from "../profile_sidebar_header_mobile";

function Profile_sidebar() {
  const [visibility, setVisibility] = React.useState(false);
  return (
    <section className="overflow-hidden relative">
      {visibility? <div className="fixed right-0 z-10"><Image_upload /></div> : null}
      <img src="./Icons/footer-background-logo.svg" className="absolute left-40 top-[35rem] z-0"></img>
      <div className="hidden sm:block">
        <Profile_sidebar_header />
      </div>
      <div className="sm:hidden">
        <Profile_sidebar_header_mobile />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#fafafa] sm:bg-white px-8 pb-6 sm:pb-[30rem]">
        <div className="mt-20 w-48 h-48 rounded-[50%] bg-[#bdbdbd] flex justify-center items-center relative">
          <img src="./Icons/user-circle.svg" className="w-24 brightness-[1000]"></img>
          <a href="#" className="flex justify-center bg-[#e6e6e6] w-14 h-14 rounded-full absolute bottom-1 right-1 align-middle" onClick={()=>setVisibility(current=> !current)}><img src="./Icons/edit.svg" className="w-8"></img></a>
        </div>
        <p className="mt-6 text-[1.8rem] font-bold tracking-[-0.45px] text-headings">James Matthews</p>
        <div className="flex space-x-2 items-center">
          <img src="./Icons/calendar-clock.svg"></img>
          <p className="text-[1rem] font-medium tracking-[-0.15px] text-[#bdbdbd]">Joined 12th of August 2021</p>
        </div>
        <button className="px-16 py-4 uppercase text-[1.4rem] font-semibold text-primary outline outline-2 outline-primary rounded-lg mt-8">View Profile</button>
        <button className="px-8 py-4 uppercase text-[1.4rem] font-semibold text-[#bdbdbd] outline outline-2 outline-[#bdbdbd] rounded-lg mt-6">Edit Profile</button>
        <div className="mt-12 flex space-x-4 z-10">
          <Funding_stats title="Total raised" amount="£100" percentage="10%" classNames="bg-primary" symbol="plus"
          img="bottom" />
          <Funding_stats title="Total given" amount="£100" percentage="10%" classNames="bg-green" symbol="minus"
          img="top" />
        </div>
        <div className="mt-12 w-full z-10">
          <Zakat />
        </div>
      </div>
    </section>
  );
}
export default Profile_sidebar;