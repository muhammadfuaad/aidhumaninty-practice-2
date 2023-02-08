import Page_header from "../components/page_header";
import Page_sidebar from "../components/page_sidebar";
import Assistance from "../components/assistance";
import Steps from '../components/steps';
import {Refine_message} from "../images/refine-message.svg"
import Fundariser_steps_list from "../components/fundraiser_steps_list";
import Role from '../components/role';
import Icon_1 from "../images/yellow-quotes.svg"
import Heart from "../images/heart-hands.png"

function Fundraiser_page() {
  return (
    <section>
      <Page_header heading="Become a Fundraiser" display_icon="hidden" />
      <div className="">
        <div className="pl-64">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Become a Fundraiser</p>
          <div className="flex flex-col">
            <div className="flex">
              <div className="w-[60%] flex flex-col pb-[100px]">
                <div className="flex flex-col">
                    <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-12">Become a Fundraiser</p>
                    <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]">There’s nothing better in life than deciding you’re going to engage in an activity that makes life better for someone else. That’s why we want to make becoming a fundraiser as quick and easy as it should be:</p>
              
              
              
                    
              
                </div>
              
              </div>

              <div className="w-[40%]">
                <img src={Heart} />
              </div>
            </div>
            <div className="-mt-32">
              <Fundariser_steps_list />
            </div>
            <div className="flex gap-16 items-center self-center mb-24">
              <p className="text-[2.4rem] font-bold tracking-[-0.6px] text-primary">We can’t do this without you…</p>
              <img src={Icon_1}></img>
            </div>
              <button className="mb-8 self-center px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
                Donate Now
              </button>
              <p className="self-center text-[1.8rem] font-bold tracking-[-0.45px] text-black">Still waiting...?</p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
export default Fundraiser_page;