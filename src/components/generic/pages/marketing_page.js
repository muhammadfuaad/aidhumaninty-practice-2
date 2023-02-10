import Page_header from "../components/page_header";
import Page_sidebar from "../components/page_sidebar";
import Assistance from "../components/assistance";
import Steps from './../components/steps';
import {Refine_message} from "../images/refine-message.svg"
import Marketing_steps_list from "../components/marketing_steps_list";
import Footer from "../../footer"
import Header from "../../header"
import Logo from "../../icons/footer-background-logo.svg"


function Marketing_page() {
  return (
    <section>
      < Header />
      <Page_header heading="Help Center" />
      <div className="">
        <div className="px-64">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / <span className="text-body">Help Center</span> / Donation Policy</p>
          <div className="flex relative">
            <div className="w-[80%] flex flex-col pb-[100px]">
              <div className="flex flex-col">
                  <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-12">Marketing</p>
                  <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-8">Marketing your campaign</p>
                  <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] mb-48">We want your campaign to be a sucess from the moment you launch it, which is why we’ve created a simple, straightforward process that covers everything. All you have to do is follow it step by step and watch as the world helps you change things for the better:</p>
                  <Marketing_steps_list />
                  <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body my-28">These quick steps will get your campaign up and running before you know it. From there, it’s over to you to innovate and create so that your ideas never run out of steam. We know you can do this, and the more passion you have, the more you’ll raise.</p>
                  <button className="mb-8 self-center px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
                    Start Fundraising Now
                  </button>
                  <p className="self-center text-[1.8rem] font-bold tracking-[-0.45px] text-black">Why wait a moment longer?</p>
              </div>
            </div>
            <div className="relative ml-32">
              <Page_sidebar />
              <img src={Logo} className="absolute right-[-150px] bottom-[600px] w-64"></img>
              <div className="h-[50rem] w-[1px] bg-[#e6e6e6] absolute -left-16 top-0"></div>
            </div>
          </div>
        </div>
      </div>
      < Footer />
    </section>
  );
}
export default Marketing_page;