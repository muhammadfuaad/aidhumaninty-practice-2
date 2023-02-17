import Quick_ways from "./quick_ways";
import Icon_1 from "../../icons/donate.svg"
import Icon_2 from "../../icons/campaign.svg"
import Icon_3 from "../../icons/administrate.svg"
import React from "react";

function Hero_card(props) {
  
  return (
    <div className="flex flex-col rounded-3xl h-32 w-[33rem]">
      <img src="./icons/pakistan-floods-1.png" className="rounded-t-3xl"></img>
      <div className="flex justify-between bg-white p-12 rounded-b-3xl">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">{props.title}</p>
        <img src="./icons/arrow-right.svg"></img>
      </div>
    </div>
  );
}
export default Hero_card;