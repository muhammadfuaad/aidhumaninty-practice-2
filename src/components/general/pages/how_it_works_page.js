import Page_header from "../components/page_header";
import Page_sidebar from "../components/page_sidebar";
import Assistance from "../components/assistance";
import Steps from '../components/steps';
import {Refine_message} from "../images/refine-message.svg"
import Steps_list from "../components/steps_list";

function How_it_works_page() {
  return (
    <section>
      <Page_header heading="Help Center" />
      <div className="">
        <div className="px-64">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / How it works</p>
          <div className="flex relative">
            <div className="w-[80%] flex flex-col pb-[100px]">
              <div className="flex flex-col">
                  <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-12">How it works</p>
                  <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] mb-48">We’ve build Aid Humnity to be as simple and straightforward as possible. Here’s the simplest way to make a difference with just a few clicks…</p>
                  <Steps_list />
                  <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body my-28">It’s the simple, straightforward, and transparent way to bring people together to make the world a better place. Just what you want to hear when it’s time to devote your time and energy to a good cause that really means something to you.</p>
                  <div>
                    <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">Want to do even more?</p>
                    <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]">To help incentivise kind-hearted people to do even more, we’ve proud to be able to offfer the chance to make referrals and earn rewards. It’s our way of making sure every good deed is noticed the right way.</p>
                  </div>
                  <button className="mb-8 self-center px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
                    Start Fundraising Now
                  </button>
                  <p className="self-center text-[1.8rem] font-bold tracking-[-0.45px] text-black">Why wait a moment longer?</p>
              </div>
            </div>
            <div className="relative ml-32">
              <Page_sidebar />
              <img src="./icons/footer-background-logo.svg" className="absolute right-[-150px] bottom-[600px]"></img>
              <div className="h-[50rem] w-[1px] bg-[#e6e6e6] absolute -left-16 top-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default How_it_works_page;