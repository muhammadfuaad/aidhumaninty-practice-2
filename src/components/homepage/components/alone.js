import Quick_ways from "./quick_ways";
import Icon_1 from "../../icons/donate.svg"
import Icon_2 from "../../icons/campaign.svg"
import Icon_3 from "../../icons/administrate.svg"

function Alone() {
  return (
    <div className="flex flex-col px-48 py-24">
      <p className="text-[3rem] font-bold tracking-[-0.75px] text-black leading-[3.4rem] mb-8">We can’t do this alone</p>
      <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3.2rem] mb-12">Making a difference means coming together to do something bigger and bolder than anyone thought possible.
        To make it happen, we need you to join us and make a commitment to changing the world.
      </p>
      <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3.2rem] mb-20">Here’s <span className="font-semibold">3 quick ways</span> you can do it:</p>
      <div className="flex justify-between mb-28">
        <Quick_ways number="1" title="Donate" description="your hard-earned money to a campaign that connects with your goals" img={Icon_1}/>
        <Quick_ways number="2" title="Campaign" description="and devote yourself to a cause that will make the world a better place" img={Icon_2}/>
        <Quick_ways number="3" title="Administrate" description="to ensure everything runs smoothly from beginning to end" img={Icon_3}/>
      </div>
      <div className="flex gap-16 items-center">
        <p className="text-[2rem] font-semibold tracking-[-0.5px] text-primary">When you’re ready, everything starts with a click…</p>
        <button className="px-20 py-6 uppercase text-[1.4rem] font-semibold text-primary-medium bg-transparent outline
            outline-primary rounded-xl">Register Now</button>
      </div>
    </div>
  );
}
export default Alone;