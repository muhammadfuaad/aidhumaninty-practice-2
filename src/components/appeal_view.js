import Take_off from './take_off';
import Appeal_status from './appeal_status';

function Appeal_view() {
  return (
    <div className="flex flex-col">
      < Take_off />
      <div className="px-8 py-12 bg-white">
        <button class="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#999999] bg-transparent outline outline-[#999999]
        rounded-xl">Edit Your Page</button>
      </div>

      <div className='px-8 py-16 bg-[#f5f6f7]'>
        < Appeal_status />
      </div>
    </div>
  )
}
export default Appeal_view;