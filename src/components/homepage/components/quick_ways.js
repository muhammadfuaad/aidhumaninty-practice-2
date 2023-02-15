import Icon_1 from "../../icons/donate.svg"
import Icon_2 from "../../icons/campaign.svg"
import Icon_3 from "../../icons/administrate.svg"

function Quick_ways(props) {
  return (
    <div className="flex w-1/4">
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-platinum relative">
          <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">{props.number}.</p>
        </div>
        <div className="h-64 w-64 relative">
          <img src={props.img}></img>
        </div>
      </div>
      <div className="flex flex-col mt-12 gap-16 relative">
        <div className="w-80 h-[1px] bg-platinum absolute left-0 top-20"></div>  

        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black leading-[2.4rem]">{props.title}</p>
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999]] leading-[2.4rem]">{props.description}</p>
      </div>
    </div>

    
  );
}
export default Quick_ways;