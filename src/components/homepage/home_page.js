import Toggle from "../dashboard/toggle";
import Generic_header from "../generic_header";
import Footer from "../footer";
import Radio_component from "../generic/components/radio_component";
import Appeal_title from "../generic/components/appeal_title";
import Mosque from "../icons/mosque.svg";
import Water_drop from "../icons/water-drop.svg";
import Hunger_appeal from "../icons/hunger-appeal.svg";
import Emergency from "../icons/emergency.svg";
import Sponsor_orphan from "../icons/sponsor-orphan.svg";
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





function Home_page() {
  return (
    <section className="overflow-hidden">
      < Generic_header />
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

      <section>
        <div className="flex flex-col space-y-8 bg-Ghost-white px-48 py-12">
          <p className="text-black text-3xl font-bold tracking-[-0.75px]">Latest News</p>
          <div className="flex">
            <div className="basis-[50%] p-14 bg-cover bg-center">
              <div className="w-[80px] h-[40px] bg-red text-center text-white font-semibold mt-40 px-2 py-3">
                <p className="my-auto">NEW</p>
              </div>
              <p className="text-white text-[36px] font-bold tracking-[-0.54px]">Donec turpis eros, euismod nec justo sit amet</p>
              <p className="text-F5 text-[1.6rem] font-normal tracking-[-0.4px]">Pellentesque consequat dui turpis, nec porta nisi varius quis.
              Ut mattis velit quis mi consectetur, non rhoncus metus dapibus.</p>
              <div className="flex space-x-2 items-center">
                <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">July 3, 2022</p>
                <p>.</p>
                <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">5 minutes to read</p>
              </div>
            </div>

            <div className="basis-[25%] flex-col">
              <div className="px-8 space-y-1">
                <p className="text-black text-lg font-bold tracking-[-0.45px]">Mauris vel ornare massa, at ullamcorper ligula</p>
                <p className="text-Gray text-[1.6rem] font-normal tracking-[-0.4px]">Cras ullamcorper dolor ac viverra finibus. Fusce iaculis accumsan ex, in placerat arcu
                luctus vitae. Fusce velit lacus, hendrerit scelerisque efficitur eget, placerat eu lectus.</p>
                <div className="flex space-x-2 items-center">
                  <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">April 20, 2022</p>
                  <p>.</p>
                  <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">3 minutes to read</p>
                </div>
              </div>
            </div>

            <div className="basis-[25%] flex-col">
              <div className="px-8 space-y-1">
                <p className="text-black text-lg font-bold tracking-[-0.45px]">Aenean ac iaculis urna, quis condimentum elit</p>
                <p className="text-Gray text-[1.6rem] font-normal tracking-[-0.4px]">Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue,
                nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum.</p>
                <div className="flex space-x-2 items-center">
                  <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">March 7, 2022</p>
                  <p>.</p>
                  <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">4 minutes to read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-[450px] text-primary-dark font-medium rounded-lg border-Gray border-2 border-opacity-50 py-2">View All</button>
          </div>
        </div>
      </section>
      
      <section>
        <div className="flex items-center h-[150px] space-y-2 bg-primary px-48">
          <p className="text-white text-[1.8rem] font-semibold tracking-[-0.45px] leading-[28px] basis-[70%]">Faithful believers are to each other as the bricks of a wall, supporting and reinforcing each other.<br></br>So saying, the Prophet Muhammad clasped his hands by interlocking his fingers.</p>
          <div className="basis-[30%] flex space-x-6 items-end justify-end ">
            <p className="text-off-white text-[1.6rem] font-medium tracking-[-0.24px] leading-[20px] whitespace-nowrap mb-4">Prophet Muhammed (Al-Bukhari)</p>
            <img src={quotes}></img>
          </div>
        </div>
      </section>

      <section>
        <div className="flex px-48 py-12">
          <p className="basis-[30%] text-black text-3xl font-bold tracking-[-0.75px] pr-48">Passionate about progress</p>
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


      <div className="flex flex-col space-y-2 bg-amber px-48 py-12">
        <div className="flex flex-col px-[260px] space-y-12">
          <p className="text-black text-[30px] font-bold tracking-[-0.75px] leading-[34px]">Contact Us</p>
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col space-y-12">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-4 bg-white border-black border-2 p-5 rounded-xl w-[330px] h-[140px]">
                  <div className="flex justify-between">
                    <div className="flex space-x-2 items-center">
                      <p className="text-black text-lg font-bold tracking-[-0.45px] leading-[24px]">Register</p>
                    </div>
                  </div>
                  <p className="text-body text-[1.6rem] font-normal tracking-[-0.4px] leading-[24px]">I want to help Aid Humanity and receive future appeals</p>
                </div>

                <div className="flex flex-col space-y-4 border-Gray border-opacity-25 border-2 p-5 rounded-xl w-[330px] h-[140px]">
                  <div className="flex justify-between">
                    <div className="flex space-x-2 items-center">
                      <p className="text-black text-lg font-bold tracking-[-0.45px] leading-[24px]">Fundraiser</p>
                    </div>
                  </div>
                  <p className="text-body text-[1.6rem] font-normal tracking-[-0.4px] leading-[24px]">Become a fundraiser and kick start your own Charity appeal</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <div className="flex flex-col space-y-4 w-[540px]">
                <input className="placeholder-black text-[13px] font-normal tracking-[0px] leading-[15px] bg-amber border-2 border-opacity-50 border-black rounded-lg h-[50px] p-2" placeholder="Name and Surname*"></input>
                <input className="placeholder-black text-[13px] font-normal tracking-[0px] leading-[15px] bg-amber border-2 border-opacity-50 border-black rounded-lg h-[50px] p-2" placeholder="Email*"></input>
                <input className="placeholder:text-start placeholder:-translate-y-6 placeholder-black text-[13px] font-normal tracking-[0px] leading-[15px] bg-amber border-2 border-opacity-50 border-black rounded-lg h-[98px] p-2" placeholder="Please provide as much detailed information as possible. Thank you *"></input>
              </div>
              <button className="bg-green w-[210px] h-[50px] rounded-lg text-sm font-bold">SUBMIT MESSAGE</button>
            </div>
          </div>
        </div>
      </div>


      <section>
  <div className="flex flex-col space-y-8 bg-Ghost-white px-48 py-12">
    <p className="text-black text-3xl font-bold tracking-[-0.75px]">Latest News</p>
    <div className="flex">
      <div className="basis-[50%] p-14  bg-cover bg-center">
        <div className="w-[80px] h-[40px] bg-red text-center text-white font-semibold mt-40 px-2 py-3">
          <p className="my-auto">NEW</p>
        </div>
        <p className="text-white text-[36px] font-bold tracking-[-0.54px]">Donec turpis eros, euismod nec justo sit amet</p>
        <p className="text-F5 text-[1.6rem] font-normal tracking-[-0.4px]">Pellentesque consequat dui turpis, nec porta nisi varius quis.
         Ut mattis velit quis mi consectetur, non rhoncus metus dapibus.</p>
         <div className="flex space-x-2 items-center">
          <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">July 3, 2022</p>
          <p>.</p>
          <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">5 minutes to read</p>
        </div>
      </div>

      <div className="basis-[25%] flex-col">
        <div className="px-8 space-y-1">
          <p className="text-black text-lg font-bold tracking-[-0.45px]">Mauris vel ornare massa, at ullamcorper ligula</p>
          <p className="text-Gray text-[1.6rem] font-normal tracking-[-0.4px]">Cras ullamcorper dolor ac viverra finibus. Fusce iaculis accumsan ex, in placerat arcu
          luctus vitae. Fusce velit lacus, hendrerit scelerisque efficitur eget, placerat eu lectus.</p>
          <div className="flex space-x-2 items-center">
            <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">April 20, 2022</p>
            <p>.</p>
            <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">3 minutes to read</p>
          </div>
        </div>
      </div>

      <div className="basis-[25%] flex-col">
        <div className="px-8 space-y-1">
          <p className="text-black text-lg font-bold tracking-[-0.45px]">Aenean ac iaculis urna, quis condimentum elit</p>
          <p className="text-Gray text-[1.6rem] font-normal tracking-[-0.4px]">Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue,
          nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum.</p>
          <div className="flex space-x-2 items-center">
            <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">March 7, 2022</p>
            <p>.</p>
            <p className="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">4 minutes to read</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <button className="w-[450px] text-primary-dark font-medium rounded-lg border-Gray border-2 border-opacity-50 py-2">View All</button>
    </div>
  </div>
</section>










      < Footer />
    </section>
  );
}
export default Home_page;