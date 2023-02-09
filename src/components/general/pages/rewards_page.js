import Page_header from "../components/page_header";
import Page_sidebar from "../components/page_sidebar";
import Assistance from "../components/assistance";
import Steps from '../components/steps';
import {Refine_message} from "../images/refine-message.svg"
import Fundariser_steps_list from "../components/fundraiser_steps_list";
import Role from '../components/role';
import Icon_1 from "../images/yellow-quotes.svg"
import Image_2 from "../images/child-watching-1.png"
import Heart from "../images/heart-hands-1.png"
import User_rank_list from "../components/user_rank_list";
import User_badge from './../components/user_badge';

function Rewards_page() {
  return (
    <section>
      <Page_header heading="Our Rewards" display_icon="hidden" />
      <div className="flex flex-col mb-44">
        <div className="pl-64 mb-40">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Our Rewards</p>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col mt-12 w-1/2">
                <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-16">Our Rewards</p>
                <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] mb-24">We’ve always believed that raising money for charity is reward in itself, but we also recognise the need to incentivise everyone to help spread the word.</p>
                <p className="mb-16 text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]">Here’s how you can get an additional <span className="font-semibold">morale boost</span> and <span className="font-semibold">take pride in the work</span> you’ve done:</p>
                <ul className="flex flex-col gap-12 text-[2rem] font-normal tracking-[-0.5px] text-body">
                  <li className="list-disc list-inside marker:text-primary leading-[2.5rem]">Get rewards based on how many appeals you’ve created and the money raised</li>
                  <li className="list-disc list-inside marker:text-primary leading-[2.5rem]">Earn recognition based on the number of people who donate to your appeal</li>
                  <li className="list-disc list-inside marker:text-primary leading-[2.5rem]">Be recognised for contributing to the wider Aid Humanity community online</li>
                </ul>
              </div>
              <div className="w-[45%]"><img src={Image_2} className="rounded-l-3xl h-[60rem] w-[94rem]"></img></div>
            </div>     
          </div>
        </div>
        
        <div className="pr-12 pl-64 flex flex-col">
          <div className="self-center flex gap-8 items-center w-[60%] ml-[40rem]">
            <p className="text-[2.4rem] font-bold tracking-[-0.6px] text-primary w-[60%]">By putting all of these together, we hope to empower you to achieve more than anyone else thought possible. With you by your side, we know anything is possible.</p>
            <img src={Icon_1} ></img>
          </div>
          <button className="mt-12 mb-20 self-center px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
            Start Fundraising Now
          </button>
          <div className="flex flex-col gap-24 mb-40">
            <p className="self-center text-[3rem] font-bold tracking-[-0.75px] text-black">Why wait to give back to those in need?</p>
            <div className="flex justify-between gap-16">
              <User_badge title="I'm in" slogan="First step in giving" description="(when user makes their first donation)" number="01" />
              <User_badge title="Bronze" slogan="Your making a crowd, keep going!" description="(when user makes total donation of £100)" number="02" />
              <User_badge title="Silver" slogan="Your making a difference" description="(when user makes total donation of £1000)" number="03" />
              <User_badge title="Gold" slogan="Your part of the Aid Humanity team" description="(when user makes total donation of £5000)" number="04" />
            </div>
          </div>

          <div className="flex flex-col gap-24">
            <p className="self-center text-[3rem] font-bold tracking-[-0.75px] text-black">When users who also create fundraisers</p>
            <div className="flex justify-between">
              <User_rank_list />        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Rewards_page;