import Icon_1 from "../images/create-account.svg"
import Icon_2 from "../images/register.svg"
import Icon_3 from "../images/donate.svg"
import Icon_4 from "../images/text-link.svg"
import Icon_5 from "../images/take-link.svg"
import Icon_6 from "../images/black-check-green-circle.svg";
function Fundraiser_steps_list() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#e6e6e6] relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">1.</p>
          </div>
          <div className="h-64 w-64 relative">
            <img src={Icon_1}></img>
            <div className="w-[40rem] h-[1px] bg-[#e6e6e6] absolute left-0 top-32"></div>  
          </div>
        </div>
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mt-8">Join us by creating an account with the click of a button</p>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#e6e6e6] relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">2.</p>
          </div>
          <div className="h-64 w-64 relative">
            <img src={Icon_2}></img>
            <div className="w-[40rem] h-[1px] bg-[#e6e6e6] absolute left-0 top-32"></div>  
          </div>
        </div>
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mt-8">Find a cause that means something to you right now</p>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#e6e6e6] relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">3.</p>
          </div>
          <div className="h-64 w-64 relative">
            <img src={Icon_3}></img>
          </div>
        </div>
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mt-8">Raise funds and source donations to make the world a better place</p>
      </div>
      
      
    </div>

    
  );
}
export default Fundraiser_steps_list;