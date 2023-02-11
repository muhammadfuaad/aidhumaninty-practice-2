import {ReactComponent as Phone} from "../../icons/phone-volume-props.svg" 
import Email from "../../icons/email.svg";
import Contact_form from '../components/contact_form';
import Page_header from "../components/page_header";
import Media from './../../media';
import Yellow_ring_large from "../../icons/yellow-ring-large.png";
import Yellow_ring_small from "../../icons/yellow-ring-small.png";
import Blue_circle from "../../icons/blue-circle.png";

function Contact_page() {
  return (
    <section className="relative overflow-hidden">
      <img src={Yellow_ring_small} className="absolute top-[50rem]"></img>
      <img src={Yellow_ring_large} className="absolute top-[30rem] -right-[30rem]"></img>
      <img src={Blue_circle} className="absolute top-[90rem] left-[20rem]"></img>

      <Page_header heading="Contact" icon="hidden" />
      <div className="flex flex-col mb-44">
        <div className="pl-64 pr-8 mb-40">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Contact</p>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col mt-12 w-1/2">
                <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-16">Contact</p>
                <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-16">Got a Question?</p>
                <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] mb-24">Aid Humanity is a thoughtful, caring community of like-minded individuals ready to give back and make a difference. If you’d like to know more about what we do, or have a question about how you can help, all you have to do is ask.</p>
                
                <div className='flex justify-between py-20 border-y border-[#e6e6e6] pr-12'>
                  <div className='flex gap-4'>
                    <div className="mb-8">
                      <Phone stroke="#1d1d1d" />
                    </div>
                    <div className='flex flex-col'>
                      <p className="text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c] uppercase">Phone</p>
                      <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">03300579957</p>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    <img src={Email} className="mb-8"></img>
                    <div className='flex flex-col'>
                      <p className="text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c] uppercase">Email</p>
                      <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">info@aidhumanity.co.uk</p>
                    </div>
                  </div>
                </div>

                <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-16">Company Details</p>
                <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] mb-24">Aid Humanity, Unit 9, Twelve o’clock Court, Sheffield, S4 7WW</p>
              </div>

              <Contact_form />
            </div>     
          </div>
        </div>
        
        
      </div>
    </section>
  );
}
export default Contact_page;