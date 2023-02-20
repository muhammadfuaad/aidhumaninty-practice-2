import Home_page_header from "./components/home_page_header";
import kid from "../icons/kid.png"
import Footer from "../footer";
import Appeal_card from "../generic/components/appeal_card";
import Logo from "../icons/logo-without-text.svg"
import quotes from "../icons/double-quotes-yellow.svg"
import News from "./components/news";
import Ways from "./components/ways";
import Achievement from './../generic/components/achievement';
import Testimonial from './../generic/components/testimonial';
import Event from './../generic/components/event';
import Contact from "./components/contact";
import Helped from "./components/helped";
import Slider from "./components/slider";
import Alone from "./components/alone";
import Passionate from "./components/passionate";
import Home_page_header_mobile from './components/home_page_header_mobile';
import Faq from './components/faq';

function Home_page() {
  return (
    <section className="overflow-hidden">
      <div className="hidden sm:block">< Home_page_header /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>
      <Slider/>
      <div className="flex flex-col px-48 bg-[#f9f9f9] mb-[-25rem]">
        <p className="self-start text-[3rem] font-bold tracking-[-0.75px] text-black mt-36 mb-28">Appeals that need your backing</p>

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
      <div className="bg-f5 h-[25rem]"></div>
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
      <Passionate/>
      <div className="flex flex-col gap-24 px-48 py-24 bg-[#f1f1f1]">
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
        <div className="flex justify-between">
          <Testimonial name="Andrew" age="9" feedback="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna." img={kid}/>
          <Testimonial name="Sumayia" age="12" feedback="Suspendisse quis nulla cursus, elementum eros quis, consequat tortor. Nullam sed ex vel mi dignissim molestie id at est. Integer feugiat gravida purus, vel ultrices mauris." img={kid}/>
          <Testimonial name="Zakya" age="13" feedback="Donec non justo diam. Fusce egestas diam sit amet turpis condimentum, vel imperdiet lectus aliquam. Nunc malesuada enim viverra eros laoreet, eget tincidunt erat aliquet." img={kid}/>
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
      <Faq/>
      <Contact/>
      < Footer />
    </section>
  );
}
export default Home_page;