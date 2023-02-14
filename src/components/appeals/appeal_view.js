import Take_off from '../take_off';
import Appeal_status from './appeal_status';
import Fixed_navigator from '../fixed_navigator';
import Appeal_description from "./appeal_description"
import Dashboard_header_mobile from '../dashboard/dashboard_header_mobile';
import Appeal_desktop_header from './appeal_desktop_header';

function Appeal_view() {
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen pb-40">
      <div className='sm:hidden'>< Dashboard_header_mobile /></div>
      <div className='hidden sm:block'>< Appeal_desktop_header /></div>
      < Take_off />
      <div className="px-8 py-12 bg-white flex justify-center items-center">
        <button class="w-full sm:w-fit sm:px-20 py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline outline-spanish-gray
        rounded-xl">Edit Your Page</button>
      </div>

      <div className='flex flex-col space-y-12 px-8 sm:space-y-0 mt-16 sm:flex-row sm:gap-10 sm:px-56'>
        
        
        <div className='sm:px-0 sm:w-[30%] sm:order-2'>
          < Appeal_status />
        </div>
        <div className='sm:px-0 sm:w-[70%] sm:order-1'>
          < Appeal_description />
        </div>
      </div>
      < Fixed_navigator />
    </div>
  )
}
export default Appeal_view;