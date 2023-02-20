import Percentage_vertical from "../../percentage_vertical";
import decorators from "../../icons/decorators.png";
import {ReactComponent as Arrow} from "../../icons/arrow-right-props.svg"
import hero from "../../icons/hero.png"
import Hero_card from './hero_card';


function Slider() {
  return (
    <div className="flex flex-col px-96 py-48 bg-gradient-to-r from-slate-500 to-slate-200 bg-no-repeat bg-cover 
    h-[60vh] relative">
      <img src={decorators} className="absolute right-24 bottom-4"></img>
      <div className="flex gap-8 absolute bottom-48 right-56">
        <Hero_card title="Pakistan Floods"/>
        <Hero_card title="Support an orphan child"/>
      </div>
      <div className="absolute top-80 right-[30rem]"><Percentage_vertical/></div>
      <button className="mb-6 self-start px-8 py-6 uppercase text-[1.4rem] font-semibold text-white bg-transparent outline outline-white rounded-xl">Water for all</button>

      <div className="w-[60%]">
        <p className="text-white text-[5rem] font-bold tracking-[-0.75px] mb-10">Build<br></br> a water well</p>
        <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-white leading-[3.2rem] mb-28 w-[80%]">1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive.</p>
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