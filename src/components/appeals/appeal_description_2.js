import {ReactComponent as User_circle} from "../../icons/user-circle.svg";
import email from "../icons/email.svg";
import Pump from "../icons/water-hand-pumps-1.png"

function Appeal_description() {
  return (
    <div className="flex flex-col bg-white rounded-3xl">
      <div className="py-8 px-8">
        <p className="text-[1.2rem] font-medium tracking-[-0.3px] text-[#bdbdbd] mb-1">Water for All</p>
        <div className="flex justify-between">
          <p className="text-[2rem] font-bold tracking-[-0.75px] text-black mb-12 sm:mb-4">Water Hand Pumps</p>
          <div className="bg-amber rounded-full w-10 h-10 hidden sm:flex justify-center items-center">
            <p className="text-[1.2rem] font-bold text-black">Z</p>
          </div>
        </div>  
        <div className="sm:flex space-x-2 items-center hidden">
          <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-body">fundraised by</p>
          < User_circle stroke="#102558" />
          <p className="text-[1.1rem] font-semibold tracking-[-0.28px] text-primary-dark">Ron Hill</p>
        </div>
      </div>
      

        <div className="w-full"><img src={Pump} className="w-full"></img></div>
      <div className="p-8 border-bottom-light">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black mb-8">Story</p>
        <div className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">
          <p className="mb-8 sm:mb-0">
            1 in every 3 people around the world do not have clean water to drink. Millions are forced
            to drink dirty, unsafe water that could kill them, and is spreading deadly diseases among
            vulnerable communities. Women and children are forced to walk miles each day on dangerous
            terrain to fetch clean water, when they should be at home, at school, thriving and content.
            In 2016, UNICEF estimated that 200 million hours a day are spent by women and girls around
            the world just collecting water.
          </p>
          <p>
            A water donation is one of the greatest things you can do
            with your charity this Ramadan.
          </p>
        </div>
      </div>

      <div className="p-8 border-bottom-light">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black mb-8">About</p>
        <div className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">
          <p className="mb-8 sm:mb-0">
            1 in every 3 people around the world do not have clean water to drink. Millions are forced
            to drink dirty, unsafe water that could kill them, and is spreading deadly diseases among
            vulnerable communities. Women and children are forced to walk miles each day on dangerous
            terrain to fetch clean water, when they should be at home, at school, thriving and content.
            In 2016, UNICEF estimated that 200 million hours a day are spent by women and girls around
            the world just collecting water.
          </p>
          <p>
            A water donation is one of the greatest things you can do
            with your charity this Ramadan.
          </p>
        </div>
      </div>

      <div className="p-8 border-bottom-light">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black mb-8">Summary</p>
        <div className="rounded-3xl p-8 w-full">
          <table className="w-full">
            <tr className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">
              <th className="w-1/4 text-start pb-2">Total raised</th>
              <th className="w-1/4 text-start pb-2">Direct donations</th>
              <th className="w-1/4 text-start pb-2">Donations via Fundraisers</th>
              <th className="w-1/4 text-start pb-2">Offline donations</th>

            </tr>
            <tr className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">
              <td>£4.342</td>
              <td>£1.034</td>
              <td>£1.034</td>
              <td>£1.034</td>

            </tr>
          </table>
          <p className="text-[1rem] font-medium tracking-[-0.15px] text-[#bdbdbd] mt-6">* Charities pay a small fee for our service. <span className="font-semibold text-primary">Find out how much its is and what we do for it.</span></p>
        </div>        
      </div>

      <div className="p-8 border-bottom-light">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black mb-8">Share</p>
        <div className="flex gap-8">
          <button className='w-full py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary-medium rounded-xl
                flex space-x-4 justify-center'>
            <img src="./icons/facebook.svg"></img>
            <span>Share on Facebook</span>
          </button>
          <button className='w-full py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl
            flex space-x-4 justify-center'>
            <img src="./icons/twitter-white.svg"></img>
            <span>Share</span>
          </button>
          <button class="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#999999] bg-transparent outline
                outline-[#999999] rounded-xl flex justify-center space-x-4">
            <img src={email}></img>
            <span>Share</span>
          </button>
        </div>

      </div>
    </div>
  )
}
export default Appeal_description;