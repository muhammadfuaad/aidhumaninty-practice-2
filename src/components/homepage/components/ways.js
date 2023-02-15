import donation_1 from "../../icons/donation-1.png"
import donation_2 from "../../icons/donation-2.png"
import donation_3 from "../../icons/donation-3.png"
import orange from "../../icons/orange-1.png"

function Ways() {
  return (
    <div className="flex space-x-8 py-24">
      <div className="basis-[60%] space-y-8 flex flex-col pl-48 bg-white">
        <div className="flex flex-col w-[60%] space-y-4">
          <p className="text-black text-[3rem] font-bold tracking-[-0.75px]">Ways to give</p>
          <p className="text-body text-[2.2rem] font-normal tracking-[-0.55px] leading-[3.2rem]">Crowd funding lets people play a more important role in their charity.
          Start building your network of giving today.</p>
        </div>
        <div className="flex flex-col space-y-4 pr-44">
          <div className="h-[17.5rem] flex items-center p-12 space-x-12 border-platinum border-2 rounded-xl">
            <p className="text-primary-dark text-[38px] font-medium tracking-[-0.95px]">01.</p>
            <img src={donation_1} className="w-[9rem] h-[7rem]"></img>
            <div className="flex flex-col space-y-2">
              <p className="text-black text-[1.8rem] font-bold tracking-[-0.45px] mb-4">You could make a quick one off donation</p>
              <p className="text-spanish-gray text-[1.6rem] font-normal tracking-[-0.4px]">For those last minute donors or when your unsure of how much to give</p>
            </div>
          </div>
          <div className="h-[17.5rem] flex items-center p-12 space-x-12 border-platinum border-2 rounded-xl">
            <p className="text-primary-dark text-[38px] font-medium tracking-[-0.95px]">02.</p>
            <img src={donation_2} className="w-[10rem] h-[10rem]"></img>
            <div className="flex flex-col space-y-2">
              <p className="text-black text-[1.8rem] font-bold tracking-[-0.45px] mb-4">Subscription donation</p>
              <p className="text-spanish-gray text-[1.6rem] font-normal tracking-[-0.4px]">Making a donation on every Friday or come Ramadan for that continuous support</p>
            </div>
          </div>
          <div className="h-[17.5rem] flex items-center p-12 space-x-12 border-platinum border-2 rounded-xl">
            <p className="text-primary-dark text-[38px] font-medium tracking-[-0.95px]">03.</p>
            <img src={donation_3} className="w-[8.5rem] h-[10.5rem]"></img>
            <div className="flex flex-col space-y-2">
              <p className="text-black text-[1.8rem] font-bold tracking-[-0.45px] mb-4">Project Backed donation</p>
              <p className="text-spanish-gray text-[1.6rem] font-normal tracking-[-0.4px]">This is great when you back a project that’s close to your heart and receive updates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="basis-[40%] flex flex-col">
        <img src={orange} className="rounded-l-3xl"></img>
        <div className="flex flex-col pr-48">
          <p className="text-primary text-[36px] font-bold tracking-[-0.54px] mt-16 mb-8">Don’t wait for the world to improve.</p>
          <p className="text-body text-[22px] font-normal tracking-[-0.55px] mb-8">Drive meaningful change.</p>
          <button className="px-20 self-start py-6 uppercase text-[1.4rem] font-semibold text-primary-medium bg-transparent outline
              outline-primary rounded-xl">
            Register now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Ways;