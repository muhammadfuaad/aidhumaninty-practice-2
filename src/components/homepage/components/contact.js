import donation_1 from "../../icons/donation-1.png"
import donation_2 from "../../icons/donation-2.png"
import donation_3 from "../../icons/donation-3.png"
import orange from "../../icons/orange-1.png"

function Contact() {
  return (
    <section>
    <div className="flex space-x-8 py-8">
      <div className="basis-[60%] space-y-8 flex flex-col pl-48 bg-white">
        <div className="flex flex-col mr-96 space-y-4">
          <p className="text-black text-3xl font-bold tracking-[-0.75px]">Ways to give</p>
          <p className="text-body text-[22px] font-normal tracking-[-0.55px]">Crowd funding lets people play a more important role in their charity.
          Start building your network of giving today.</p>
        </div>
        <div className="flex flex-col space-y-4 pr-44">
          <div className="flex items-center p-4 space-x-8  shadow-md border-Gray border-2 border-opacity-25 rounded-lg">
            <p className="text-primary-dark text-[38px] font-medium tracking-[-0.95px]">01.</p>
            <img src={donation_1} className="w-[9rem] h-[7rem]"></img>
            <div className="flex flex-col space-y-2">
              <p className="text-black text-lg font-bold tracking-[-0.45px]">You could make a quick one off donation</p>
              <p className="text-Spanish-Gray text-[1.6rem] font-normal tracking-[-0.4px]">For those last minute donors or when your unsure of how much to give</p>
            </div>
          </div>
          <div className="flex items-center p-4 space-x-8  shadow-md border-Gray border-2 border-opacity-25 rounded-lg">
            <p className="text-primary-dark text-[38px] font-medium tracking-[-0.95px]">02.</p>
            <img src={donation_2} className="w-[10rem] h-[10rem]"></img>
            <div className="flex flex-col space-y-2">
              <p className="text-black text-lg font-bold tracking-[-0.45px]">Subscription donation</p>
              <p className="text-Spanish-Gray text-[1.6rem] font-normal tracking-[-0.4px]">Making a donation on every Friday or come Ramadan for that continuous support</p>
            </div>
          </div>
          <div className="flex items-center p-4 space-x-8  shadow-md border-Gray border-2 border-opacity-25 rounded-lg">
            <p className="text-primary-dark text-[38px] font-medium tracking-[-0.95px]">03.</p>
            <img src={donation_3} className="w-[8.5rem] h-[10.5rem]"></img>
            <div className="flex flex-col space-y-2">
              <p className="text-black text-lg font-bold tracking-[-0.45px]">Project Backed donation</p>
              <p className="text-Spanish-Gray text-[1.6rem] font-normal tracking-[-0.4px]">This is great when you back a project that’s close to your heart and receive updates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="basis-[40%] flex flex-col">
        <img src={orange}></img>
        <div className="flex flex-col space-y-4 pr-48">
          <p className="text-primary text-[36px] font-bold tracking-[-0.54px]">Don’t wait for the world to improve.</p>
          <p className="text-body text-[22px] font-normal tracking-[-0.55px]">Drive meaningful change.</p>
          <button className="w-[170px] h-[50px] text-primary border-2 border-primary rounded-lg">REGISTER NOW</button>
        </div>
      </div>
    </div>
  </section>
  );
}
export default Contact;