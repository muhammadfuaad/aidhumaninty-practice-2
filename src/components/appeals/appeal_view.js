import Take_off from '../take_off';
import Appeal_status from './appeal_status';
import Fixed_navigator from '../fixed_navigator';
import Appeal_description from "./appeal_description"
import Dashboard_header_mobile from '../dashboard/dashboard_header_mobile';

function Appeal_view() {
  return (
    <div className="flex flex-col  bg-[#f5f6f7]">
      < Dashboard_header_mobile />
      < Take_off />
      <div className="px-8 py-12 bg-white">
        <button class="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#999999] bg-transparent outline outline-[#999999]
        rounded-xl">Edit Your Page</button>
      </div>

      <div className='px-8 mt-16'>
        < Appeal_status />
      </div>
      <div className='px-8 mt-16'>
        < Appeal_description />
      </div>
      < Fixed_navigator />
    </div>
  )
}
export default Appeal_view;