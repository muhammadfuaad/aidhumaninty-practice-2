import bulb from "../../icons/bulb.svg"
import sun from "../../icons/sun.svg"
import scale from "../../icons/scale.svg"
import grains from "../../icons/grains.png"
import percent from "../../icons/100percent.svg"
import Distribution from "./distribution"
function Passionate() {
  return (
    <section>
      <div className="flex px-48 py-32">
        <p className="basis-[30%] text-black text-[3rem] font-bold tracking-[-0.75px] pr-20">Passionate about progress</p>
        <p className="basis-[70%] text-body text-[22px] font-normal tracking-[-0.55px] pl-16 border-l border-platinum">We’ve always believed that charitable donations should find their way to the people
        who need them most, and always without delay. It’s why we’ve created a simple <span className="font-bold">100%
        donation policy</span> that makes sure every donation can:</p>
      </div>
      <div className="flex px-48 pb-20 relative">
        <div className="basis-[60%]">
          <img src={grains} className="rounded-3xl"></img>
          <div className="flex space-x-4 absolute top-[85%] left-[20%]">
            <p className="text-white text-[2.5rem] font-semibold tracking-[-1.25px]">we transfer</p>
            <img src={percent} className="w-[27.4rem] h-44"></img>
            <p className="text-white text-[1.7rem] font-semibold tracking-[-0.85px]">of your donation</p>
          </div>
        </div>
        
        <div className="absolute top-[10rem] left-[55rem]">
          <Distribution img={sun} title="Get Distributed Fairly" description="because never take a penny towards our running costs" border_color="border-amber"/>
        </div>

        <div className="basis-[40%] flex flex-col gap-24 pt-24 pl-48 space-y-12">
          
          <div className="relative">
            <Distribution img={scale} title="Make A Difference" description="because never take a penny towards our running costs" border_color="border-primary"/>
          </div>
          <div className="relative">
            <Distribution img={bulb} title="Be Spent Wisely" description="because never take a penny towards our running costs" border_color="border-primary-dark"/>
          </div>
          
          
        </div>
       
      </div>
    </section>
  );
}
export default Passionate;