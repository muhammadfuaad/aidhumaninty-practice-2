import Appeal_status_2 from '../appeal_status_2';
import Fixed_navigator_1 from '../../fixed_navigator_1';
import Appeal_description_2 from "../appeal_description_2"
import Arrow from "../../icons/arrow-left-white.svg"
import Recent_donors from '../recent_donors';
import Appeal_details_header_mobile from '../appeal_details_header_mobile';
import Footer from "../../footer";
import Footer_mobile from '../../footer_mobile';
import Appeal_details_header from './../appeal_details_header';
import Appeal_card from '../../generic/components/appeal_card';
import Scroller from '../../scroller';
function Appeal_details_donator_page(props) {
  return (
    <div>
      <div className="flex flex-col bg-[#f5f6f7] min-h-screen relative overflow-hidden">
        <img src="./icons/footer-background-logo.svg" className='hidden sm:flex absolute top-[75rem] right-[-25rem]'></img>
        <div className='sm:hidden'>
          <Appeal_details_header_mobile/>
        </div>
        <div className='hidden sm:block'>< Appeal_details_header /></div>
        <div className='bg-primary-dark h-[26rem] sm:h-80'>
          <div className="flex justify-between w-full mt-10 sm:mt-20 px-8 sm:pl-56 sm:pr-48">
            <p className="hidden sm:flex text-[1.2rem] font-medium tracking-[-0.3px] text-[#e0f7ff]">Home / Appeals / Water for all / Water Hands Pumps</p>
            <div className="flex space-x-4 items-center">
              <img src={Arrow} className="w-8 h-4"></img>
              <p className="uppercase text-[1.2rem] font-bold tracking-[-0.18px] text-[#e0f7ff]">Back to All</p>
            </div>
          </div>
        </div>
        <div className='-mt-80 sm:-mt-40 flex flex-col'>
          <div className='flex flex-col gap-8 px-8 sm:gap-12 sm:flex-row sm:px-56'>
            <div className='sm:px-0 sm:w-[30%] sm:order-2 flex flex-col relative'>
              < Appeal_status_2 />
              {props.fundraiser_details}
              <div className="hidden sm:flex flex-col rounded-3xl bg-white mt-8 relative">
                <div className="flex justify-between p-8 border-b border-[#999] text-[1.6rem] tracking-[-0.4px] text-black">
                  <p className="font-bold">Recent Donors</p>
                  <p className="font-medium">175</p>
                </div>
                <Recent_donors name="Matt Watson" time="17 hours ago" amount="£60.00" gift_aid="+ £15.00 Gift Aid" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."/>
                <Recent_donors name="Frederic Johannson" time="2 days ago" amount="£20.00"/>
                <Recent_donors name="Anonymous" time="17 hours ago" amount="£60.00" />
                <Recent_donors name="Benjamin Russow" time="17 hours ago" amount="£60.00" />
                <p className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark mb-8 self-center">Show more</p>
              </div>
      
            </div>
            <div className='flex flex-col sm:px-0 sm:w-[70%] sm:order-1'>
              < Appeal_description_2 />
            </div>

            <div className="flex flex-col rounded-3xl bg-white sm:hidden mb-24">
              <div className="flex justify-between p-8 border-b border-[#999] text-[1.6rem] tracking-[-0.4px] text-black">
                <p className="font-bold">Recent Donors</p>
                <p className="font-medium">175</p>
              </div>
              <Recent_donors name="Matt Watson" time="17 hours ago" amount="£60.00" gift_aid="+ £15.00 Gift Aid" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."/>
              <Recent_donors name="Frederic Johannson" time="2 days ago" amount="£20.00"/>
              <Recent_donors name="Anonymous" time="17 hours ago" amount="£60.00" />
              <Recent_donors name="Benjamin Russow" time="17 hours ago" amount="£60.00" />
              <p className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark mb-3 self-center">Show more</p>
            </div>
          </div>
          
          <div className="sm:flex flex-col px-8 sm:px-48 hidden">
            <p className="self-center text-center generic-subheading mt-24 sm:mb-28">Recent Appeals</p>
            <div className="flex gap-12">
              <div><Appeal_card /></div>
              <div className="hidden sm:flex"><Appeal_card /></div>
              <div className="hidden sm:flex"><Appeal_card /></div>
            </div>
            <div className="my-20">
              <Scroller/>
            </div>
          </div>
        </div>
      
        < Fixed_navigator_1 />
      
      </div>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
    </div>
  )
}
export default Appeal_details_donator_page;