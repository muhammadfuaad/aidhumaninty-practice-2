import { ReactComponent as Calendar_clock} from "../../icons/calendar-clock.svg"
import { ReactComponent as Drop_down} from "../../icons/drop-down.svg"
import Dashboard_header_mobile from "../dashboard/dashboard_header_mobile";
import Fixed_navigator from "../fixed_navigator";
import Button from "../dashboard/button"
function Appeal_edit() {
  return (
    
      
        <div>
          <div className='flex flex-col bg-white rounded-3xl'>
            <div className='p-12 border-bottom-medium'>
              <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-black'>Info</p>
            </div>
            <div className="p-12 flex flex-col space-y-6 border-bottom-medium">
              <div class="relative">
                <input type="text" id="title" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c]  top-2 left-4">Page title</label>
              </div>
              <div class="relative">
                <input type="text" id="title" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c]  top-2 left-4">Category</label>
              </div>
              <div class="relative">
                <input type="text" id="title" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c]  top-2 left-4">Fundraising target</label>
              </div>
              <div class="relative">
                <textarea type="text" id="title" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px] " rows="4" placeholder=" ">Every single day, women around the world have to walk miles to collect water for their household. Installing a hand pump brings this basic human right closer to home.</textarea>
                <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c]  top-2 left-4">Page summary</label>
              </div>
            </div>
            <div className="p-12">
              <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-black mb-12'>Story</p>
              <div class="relative mb-8">
                <textarea type="text" id="title" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px] h-96" placeholder=" ">
                1 in every 3 people around the world do not have clean water to drink. Millions are forced to drink dirty, unsafe water that could kill them, and is spreading deadly diseases among vulnerable communities. Women and children are forced to walk miles each day on dangerous terrain to fetch clean water, when they should be at home, at school, thriving and content. In 2016, UNICEF estimated that 200 million hours a day are spent by women and girls around the world just collecting water. A water donation is one of the greatest things you can do with your charity this Ramadan.
                </textarea>
                <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c]  top-2 left-4">Page summary</label>
              </div>
              <button className="self-start fixed left-0 sm:static bottom-24 w-full sm:w-fit sm:px-20 py-8 sm:py-6
              uppercase text-[1.4rem] font-semibold text-black bg-green sm:rounded-xl">Save Changes</button>
            </div>
            
          </div>
          
          
        </div>
     
  )
}
export default Appeal_edit;