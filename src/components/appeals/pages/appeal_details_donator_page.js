import Appeal_view from '../appeal_view';
import Take_off from '../../take_off';
import Appeal_status_2 from '../appeal_status_2';
import Fixed_navigator from '../../fixed_navigator_1';
import Appeal_description from "../appeal_description_2"
import Dashboard_header_mobile from '../../dashboard/dashboard_header_mobile';
import Appeal_desktop_header from '../appeal_desktop_header';
import Arrow from "../../icons/arrow-left-white.svg"
import Recent_donors from '../recent_donors';
import Appeal_card from '../../generic/components/appeal_card';

function Appeal_details_donator_page(props) {
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen pb-40">
      <div className='sm:hidden'>< Dashboard_header_mobile /></div>
      <div className='hidden sm:block'>< Appeal_desktop_header /></div>
      <div className='bg-primary-dark h-80'>
        <div className="flex justify-between w-full mt-20 px-8 sm:pl-56 sm:pr-48">
          <p className="text-[1.2rem] font-medium tracking-[-0.3px] text-[#e0f7ff]">Home / Appeals / Water for all / Water Hands Pumps</p>

          <div className="hidden sm:flex space-x-4 items-center">
            <img src={Arrow} className="w-8 h-4"></img>
            <p className="uppercase text-[1.2rem] font-bold tracking-[-0.18px] text-[#e0f7ff]">Back to All</p>
          </div>
        </div>
      </div>

      <div className='-mt-40 flex flex-col space-y-12 px-8 sm:space-y-0 sm:flex-row sm:gap-10 sm:px-56'>
        
        
        <div className='sm:px-0 sm:w-[30%] sm:order-2 flex flex-col'>
          < Appeal_status_2 />
          {props.fundraiser_details}
          <div className="flex flex-col rounded-3xl bg-white mt-8">
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
        <div className='flex flex-col sm:px-0 sm:w-[70%] sm:order-1'>
          < Appeal_description />
          
        </div>
        
      </div>
      <div className='flex flex-col px-56'>
        <p className="text-[3rem] font-bold tracking-[-0.75px] text-black self-center my-20">Recent Appeals</p>

        <div className="flex gap-12">
          <Appeal_card />
          <Appeal_card />
          <Appeal_card />
        </div>
        <div className='flex my-20 self-end'>
          <button class="px-10 py-6 self-end text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
            outline-spanish-gray rounded-xl">View All</button>
        </div> 
      </div>
      < Fixed_navigator />
    </div>
  )
}
export default Appeal_details_donator_page;