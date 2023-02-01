import {ReactComponent as Drop_down} from "../../../../icons/drop-down.svg";
import Radio from "../../../dashboard/radio";

function Ramadan_card() {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col space-y-4">  
      <button className="w-full py-4 capitalize text-[1.2rem] font-semibold text-white bg-green rounded-xl">
        Recurring<br></br> Payments
      </button>

      <p>Choose your Cause</p>
      <p>Aid humanity supports hundreds of projects around the world and your donation on this month will be needed in those most neediest of places</p>

      <div className="flex flex-col space-y-8 items-center">
        <div className="flex space-x-4">
          <Radio />
          <img src="./icons/zakat.svg"></img>
          <p>Most Needy</p>
        </div>

        <div className="flex space-x-4">
          <Radio />
          <img src="./icons/zakat.svg"></img>
          <p>Most Needy</p>
        </div>

        <div className="flex space-x-4">
          <Radio />
          <img src="./icons/zakat.svg"></img>
          <p>Zakat</p>
        </div>

        <div className="flex space-x-4">
          <Radio />
          <img src="./icons/zakat.svg"></img>
          <p>Food</p>
        </div>

        <div className="flex space-x-4">
          <Radio />
          <img src="./icons/zakat.svg"></img>
          <p>Sadaqah</p>
        </div>

        <div className="flex space-x-4">
          <Radio />
          <img src="./icons/zakat.svg"></img>
          <p>Water Wells</p>
        </div>

        <div className="flex space-x-4">
          <Radio />
          <img src="./icons/mosque.svg"></img>
          <p>Mosque Builds</p>
        </div>
      </div>
    </div>
  )
} 
 
export default Ramadan_card;