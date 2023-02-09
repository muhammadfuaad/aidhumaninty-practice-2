import Page_header from "../components/page_header";
import Mother_daughter from "../images/mother-daughter.png";
import Orange from "../images/orange-1.png";
import Logo from "../images/logo-without-text.svg";
import Yellow_ring_large from "../images/yellow-ring-large.png"
import Yellow_ring_small from "../images/yellow-ring-small.png"
import Blue_circle from "../images/blue-circle.png"


function Story_page() {
  return (
    <section>
      <Page_header heading="Our Story" display_icon="hidden" />
      <div className="flex flex-col mb-44 relative">
        <img src={Logo} className="absolute w-[30rem] h-[40rem] top-[30rem] right-[70rem]"></img>
        <img src={Yellow_ring_small} className="absolute w-36 h-36 top-[90rem] left-4"></img>
        <img src={Yellow_ring_large} className="absolute w-[30rem] h-[30rem] top-[150rem] -right-40"></img>
        <img src={Blue_circle} className="absolute w-16 h-16 top-[140rem] left-[30rem]"></img>


        <div className="flex flex-col pl-64 mb-40">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Our Story</p>
          <div className="flex gap-48">
            <div className="w-1/2 flex flex-col">
              <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-16">Our Story</p>
              <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-12">About Us</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body mb-36 leading-[3.5rem]">Aid Humanity is proud to be a non-profit organisation that passes 100% of our donations to charitable causes around the world.</p>
              <img src={Mother_daughter}></img>
            </div>

            <div className="w-1/2 flex flex-col">
              <img src={Orange} className="rounded-l-3xl"></img>
              <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-12 mt-24">A Pillar to consider</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body mb-36 leading-[3.5rem] pr-40">One of the 5 pillars of Islam is Charity (zakah), and our goal is to help muslims look for resources to help those in need. We believe that charity works best when the complexity and friction is removed, so we’ve created a simple platform that allows you to connect with, launch, and promote good causes to people all over the world. Exactly what you want to hear when it’s time to make a difference by bringing the charitable tenants of Islam together to solve global issues.</p>
              
            </div>
          </div>

          <div className="self-center w-1/2">
            <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-12 mt-24">Our Promise</p>
            <div className="text-[2.2rem] font-normal tracking-[-0.55px] text-body mb-36 leading-[3.5rem] flex flex-col gap-12">
              <p>We take pride in our non-profit philosophy and promise to never take a penny of donations towards our running costs. We started to make a difference, we’re committed to making a difference, and with you by our side, we know we can seriously make a difference in communities all over the world. This is our promise to you, and we will always keep it.
              </p>
              <p> When it’s time to change the world one little action at a time, nothing less will do.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Story_page;