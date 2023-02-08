import Icon_1 from "../images/create-account.svg"
import Icon_2 from "../images/refine-message.svg"
import Icon_3 from "../images/choose-amount.svg"
import Icon_4 from "../images/text-link.svg"
import Icon_5 from "../images/take-link.svg"
import Icon_6 from "../images/black-check-green-circle.svg";
function Steps_list() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#e6e6e6] relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">1.</p>
          </div>
          <div className="h-64 w-64 relative">
            <img src={Icon_1}></img>
            <div className="w-[30rem] h-[1px] bg-[#e6e6e6] absolute left-0 top-32"></div>  
          </div>
        </div>
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mt-8">Create an account</p>
      </div>

      <div className="flex gap-20 items-center">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#e6e6e6] relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">2.</p>
            <div className="h-52 w-[1px] bg-[#e6e6e6] absolute left-8 top-16"></div>
          </div>
          <img src={Icon_2}></img>
        </div>
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999] whitespace-normal w-[40%] mt-8">Refine your message so everyone will instantly connect with it.</p>
      </div>

      <div className="flex gap-20 items-center">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#e6e6e6] relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">3.</p>
            <div className="h-52 w-[1px] bg-[#e6e6e6] absolute left-8 top-16"></div>  
          </div>
          <img src={Icon_3}></img>
        </div>
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999] whitespace-normal w-[40%] mt-8">Choose the amount you want to raise and share it with the world.</p>
      </div>
      
      
    </div>

    
  );
}
export default Steps_list;