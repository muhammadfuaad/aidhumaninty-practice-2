import Toggle from "../dashboard/toggle";
import Home_page_header from "../home_page_header";
import Footer from "../footer";
import Appeal_card from "../generic/components/appeal_card";
import Appeals_list from "../generic/components/appeals_list";
import Logo from "../icons/logo-without-text.svg"
import quotes from "../icons/double-quotes-yellow.svg"
import bulb from "../icons/bulb.svg"
import sun from "../icons/sun.svg"
import scale from "../icons/scale.svg"
import donation_1 from "../icons/donation-1.png"
import donation_2 from "../icons/donation-2.png"
import donation_3 from "../icons/donation-3.png"
import orange from "../icons/orange-1.png"
import News from "./components/news";
import Ways from "./components/ways";
import Achievement from './../generic/components/achievement';
import Testimonial from './../generic/components/testimonial';
import Event from './../generic/components/event';
import Contact from "./components/contact";
import Appeal_title from "../generic/components/appeal_title";
import Helped from "./components/helped";
import Slider from "./components/slider";
import Alone from "./components/alone";

function Home_page() {
  return (
    <section className="overflow-hidden">
      < Home_page_header />
      <Slider/>
      <div className="flex flex-col px-64 bg-[#f9f9f9]">
        <p className="text-[3rem] font-bold tracking-[-0.75px] text-black self-center my-20">Appeals that need your backing</p>

        <div className="flex gap-12">
          <Appeal_card />
          <Appeal_card />
          <Appeal_card />
        </div> 
        <div className='flex my-20 self-end'>
          <button className="px-10 py-6 self-end text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
            outline-spanish-gray rounded-xl">View All</button>
        </div>   
      </div>

      <section className="flex bg-amber px-48 py-12">
        <p className="basis-[25%] text-primary-dark text-[26px] font-semibold tracking-[-0.65px] leading-[30px] ">What if one action could change the world?</p>
        <div className="flex basis-[25%] items-center space-x-4">
          <div className="flex bg-primary-dark rounded-full relative w-[5rem] h-[5rem]">
            <img src={Logo} className="absolute top-[20%] left-[25%]"></img>
          </div>
          <p className="text-body text-[1.6rem] font-medium tracking-[-0.24px] leading-[20px]">Aid Humanity helps you make it happen…</p>
        </div>
        <p className="flex basis-[50%] items-center justify-center text-primary-dark text-[24px] font-semibold tracking-[-0.6px] leading-[28px]">Give Back - Deliver Better - Drive Change</p>
      </section>

      <Helped/>

      <section>
        <div className="flex px-48 py-12">
          <p className="basis-[30%] text-black text-[3rem] font-bold tracking-[-0.75px] pr-48">Passionate about progress</p>
          <p className="basis-[70%] text-body text-[22px] font-normal tracking-[-0.55px] pl-16 border-l border-opacity-25 border-Gray">We’ve always believed that charitable donations should find their way to the people
          who need them most, and always without delay. It’s why we’ve created a simple <span className="font-bold">100%
          donation policy</span> that makes sure every donation can:</p>
        </div>
        <div className="flex px-48 pb-20 relative">
          <div className="basis-[60%]">
          </div>
          <div className="flex flex-col bg-white w-[330px] h-[175px] px-16 py-8 border-amber border-2 rounded-lg absolute top-[10rem] left-[55rem]">
            <img src={bulb} className="w-20 absolute -top-10 left-[40%]"></img>
            <p className="text-center text-primary-dark text-lg font-normal tracking-[-0.45px]"><span className="text-black font-bold">Get Distributed Fairly</span> because never take a penny towards our running costs</p>
          </div>

          <div className="basis-[40%] flex flex-col pt-24 pl-48 space-y-12">
            <div className="flex flex-col bg-white w-[330px] h-[175px] px-16 py-8 border-primary border-2 rounded-lg relative">
              <img src={scale} className="w-20 absolute -top-10 left-[40%]"></img>
              <p className="text-center text-primary-dark text-lg font-normal tracking-[-0.45px]"><span className="text-black font-bold">Make A Difference</span> to the people in the world who need you</p>
            </div>
            <div className="flex flex-col bg-white w-[330px] h-[175px] px-16 py-8 border-primary-dark border-2 rounded-lg relative">
              <img src={sun} className="w-20 absolute -top-10 left-[40%]"></img>
              <p className="text-center text-primary-dark text-lg font-normal tracking-[-0.45px]"><span className="text-black font-bold">Be Spent Wisely</span> on projects that change lives and build communities</p>
            </div>
          </div>
          <div className="flex space-x-4 absolute top-[27rem] left-[21rem]">
            <p className="text-white text-[25px] font-semibold tracking-[-1.25px]">we transfer</p>
            <p className="text-white text-[17px] font-semibold tracking-[-0.85px]">of your donation</p>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-24 px-64 py-24 bg-[#f1f1f1]">
        <p className="self-center text-[3rem] font-medium tracking-[-0.75px] text-black"><span className="font-semibold">Our Achievements</span> with your help and more …</p>
        <div className="flex justify-between ">
          <Achievement/>
          <Achievement/>
          <Achievement/>
          <Achievement/>
        </div>
      </div>

      
      <section>
        <div className="flex items-center h-[150px] space-y-2 bg-primary px-48">
          <p className="text-white text-[1.8rem] font-semibold tracking-[-0.45px] leading-[28px] basis-[70%]">Faithful believers are to each other as the bricks of a wall, supporting and reinforcing each other.<br></br>So saying, the Prophet Muhammad clasped his hands by interlocking his fingers.</p>
          <div className="basis-[30%] flex space-x-6 items-end justify-end ">
            <p className="text-off-white text-[1.6rem] font-medium tracking-[-0.24px] leading-[20px] whitespace-nowrap mb-4">Prophet Muhammed (Al-Bukhari)</p>
            <img src={quotes}></img>
          </div>
        </div>
      </section>

      <Alone/>


      
      

      <div className="flex flex-col gap-24 px-64 py-24 bg-[#f1f1f1]">
        <p className="self-center text-[3rem] font-bold tracking-[-0.75px] text-black">Here’s what our community has to say</p>
        <div className="flex gap-12">
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
        </div>
      </div>

      <div className="flex flex-col gap-24 px-64 py-24 bg-white">
        <p className="self-center text-[3rem] font-bold tracking-[-0.75px] text-black">Upcoming Events</p>
        <div className="flex gap-12">
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          
        </div>
        <div className='flex my-20 self-end'>
          <button className="px-10 py-6 self-end text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
            outline-spanish-gray rounded-xl">View All</button>
        </div>
      </div>

      <News/>
      



      <Ways/>

      <div className="flex flex-col">
        <div className="flex justify-between">
          <p>FAQ</p>
          <p>Do you have more questions? Check out our full FAQ</p>
        </div>
        <div>
          <div className="bg-green-50 w-full sm:w-1/2 lg:w-96 border border-gray-200">
            <details>
              <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none">How is this made?</summary>
              <p className="pt-1 pb-3 px-4">With the HTML5</p>
            </details>
            <details>
              <summary className="question py-3 px-4 cursor-pointer select-none w-full">Can I use it?</summary>
              <p className="pt-1 pb-3 px-4">Of course. It's yours to use wherever and whenever you like.</p>
            </details>
          </div>
        </div>
      </div>

      <Contact/>


      <section>
  
</section>










      < Footer />
    </section>
  );
}
export default Home_page;