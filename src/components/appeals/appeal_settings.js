import { ReactComponent as Calendar_clock} from "../../icons/calendar-clock.svg"
import { ReactComponent as Drop_down} from "../../icons/drop-down.svg"
import Dashboard_header_mobile from "../dashboard/dashboard_header_mobile";
import Fixed_navigator from "../fixed_navigator";
import Appeal_desktop_header from './appeal_desktop_header';
function Appeal_settings() {
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen pb-40">
      <div className="sm:hidden">< Dashboard_header_mobile /></div>
      <div className="hidden sm:block">< Appeal_desktop_header /></div>
      <div className='px-6'>
        <p className='text-[2.6rem] font-bold tracking-[-0.65px] text-primary my-20'>Settings</p>
        <div className='flex flex-col bg-white rounded-3xl'>
          <div className='p-12 border-bottom-medium'>
            <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-headings'>Extend your page</p>
          </div>
          <div className='p-12 border-bottom-medium'>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] leading-9 text-body mb-8'>Your page will stop taking donations on <span className="font-semibold">08 March 2023</span></p>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full
              tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
              <div className="flex space-x-2">
                < Calendar_clock fill="none" stroke="#7c7c7c"/>
                <span className="text-[1.3rem] font-medium tracking-[0px] text-[#7c7c7c]">08 March 2023</span>
              </div>
              < Drop_down  stroke="#444445"/>
            </button>
          </div>
          <div className='p-12 border-bottom-medium'>
            <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-headings mb-12'>Thank you message</p>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] leading-9 text-body mb-8'>Its really good idea to personalize the thank you message, which is sent automatically to 
              anyone who makes a donation through your Aid Humanity page.
            </p>
            <div className="px-6 py-10 h-48 border-light rounded-3xl">
              <div className='text-[1.3rem] font-medium tracking-[0px] text-headings'>
                <p>Thank you very much for your donation. It really means a lot to me.</p>
                <p className="mt-4">Ron Hill</p>
              </div>
            </div>
          </div>

          <div className='p-12 border-bottom-medium flex flex-col'>
            <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-headings mb-12'>Send a QR code</p>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] leading-9 text-body mb-8'>Here’s your very own QR code to help your supporters find your page more easily. Just open up the camera on your smart phone and point it at this screen and it’ll take you directly to the page. You can either save, screenshot, print posters, and send your QR code with family and friends on WhatsApp, text or email. It couldn’t be easier.
            </p>
            <img src="./icons/qr-code.svg" className="self-center w-1/2"></img>
          </div>

          <div className='p-12 flex flex-col'>
            <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-headings mb-12'>Cancel page</p>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] leading-9 text-body mb-8'>Canceling your page is inreveraible and means:</p>
            <ul className="flex flex-col space-y-6">
              <li className="marker:text-primary list-inside list-disc mr-3 text-[1.4rem] font-normal tracking-[-0.35px] text-body">You won’t be able to collect any more online donations through this page</li>
              <li className="marker:text-primary list-inside list-disc mr-3 text-[1.4rem] font-normal tracking-[-0.35px] text-body">You won’t be able to see this page</li>
            </ul>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] leading-9 text-body mt-8'>Any donations already received on the fundraising page will be automatically paid to the charity you have selected. You do not need to do anything else.</p>
            <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-white bg-red rounded-xl mt-8">
              Cancel My Aid Humanity Page
            </button>
          </div>
         
        </div>

        
      </div>
      < Fixed_navigator />
    </div>
  )
}
export default Appeal_settings;