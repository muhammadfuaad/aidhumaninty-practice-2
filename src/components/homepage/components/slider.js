import Percentage_vertical from "../../percentage_vertical";
import decorators from "../../icons/decorators.png";
import {ReactComponent as Arrow} from "../../icons/arrow-right-props.svg"


function Slider() {
  return (
    <div className="flex flex-col px-96 py-48 bg-[url('assets/images/hero.png')] bg-no-repeat bg-cover 
    h-screen relative bg-gradient-to-r from-purple-600 to-blue-600">
      <img src={decorators} className="absolute"></img>
      <div className="absolute right-[50rem] top-[30rem]"><Percentage_vertical/></div>
      <button className="mb-12 self-start px-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-transparent outline outline-white rounded-xl">Water for all</button>

      <div className="w-[40%]">
        <p className="text-white text-[5rem] font-bold tracking-[-0.75px] mb-10">Build<br></br> a water well</p>
        <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-white leading-[3.2rem] mb-20">Whatever the use of freshwater (agriculture, industry, domestic use), huge saving of water and improving of water management is possible. Almost everywhere, water is wasted.</p>
      </div>

      <div className="flex gap-12 items-center">
      <button className='p-8 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl 
              flex space-x-4 justify-center items-center'>
        
        <span>Donate Now</span>
        <Arrow stroke="#fff"/>
      </button>
      <p className="text-amber">from 140</p>
      </div>
    </div>
  );
}
export default Slider;