import Toggle from "../../dashboard/toggle";
import Generic_header from "../../generic_header";
import Footer from "../../footer";
import Radio_component from "../components/radio_component";
import Appeal_title from "../components/appeal_title";
import Mosque from "../../icons/mosque.svg";
import Water_drop from "../../icons/water-drop.svg";
import Hunger_appeal from "../../icons/hunger-appeal.svg";
import Emergency from "../../icons/emergency.svg";
import Sponsor_orphan from "../../icons/sponsor-orphan.svg";
import Appeal_card from "../components/appeal_card";
import Appeals_list from "../components/appeals_list";
import Logo from "../../icons/logo.svg"



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
          <button class="px-10 py-6 self-end text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
            outline-[#999999] rounded-xl">View All</button>
        </div>   
      </div>

      <section class="flex bg-amber px-48 py-12">
        <p class="basis-[25%] text-primary-dark text-[26px] font-semibold tracking-[-0.65px] leading-[30px] ">What if one action could change the world?</p>
        <div class="flex basis-[25%] items-center space-x-4">
          <div class="flex bg-primary-dark rounded-full relative w-[3rem] h-[3rem]">
            <img src={Logo} className="absolute top-[20%] left-[25%]"></img>
          </div>
          <p class="text-Outer-Space text-base font-medium tracking-[-0.24px] leading-[20px]">Aid Humanity helps you make it happen…</p>
        </div>
        <p class="flex basis-[50%] items-center justify-center text-primary-dark text-[24px] font-semibold tracking-[-0.6px] leading-[28px]">Give Back - Deliver Better - Drive Change</p>
      </section>

      <section>
        <div class="flex flex-col space-y-8 bg-Ghost-White px-48 py-12">
          <p class="text-Eerie-Black text-3xl font-bold tracking-[-0.75px]">Latest News</p>
          <div class="flex">
            <div class="basis-[50%] p-14 bg-cover bg-center">
              <div class="w-[80px] h-[40px] bg-Red text-center text-White font-semibold mt-40 px-2 py-3">
                <p class="my-auto">NEW</p>
              </div>
              <p class="text-White text-[36px] font-bold tracking-[-0.54px]">Donec turpis eros, euismod nec justo sit amet</p>
              <p class="text-F5 text-base font-normal tracking-[-0.4px]">Pellentesque consequat dui turpis, nec porta nisi varius quis.
              Ut mattis velit quis mi consectetur, non rhoncus metus dapibus.</p>
              <div class="flex space-x-2 items-center">
                <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">July 3, 2022</p>
                <p>.</p>
                <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">5 minutes to read</p>
              </div>
            </div>

            <div class="basis-[25%] flex-col">
              <div class="px-8 space-y-1">
                <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">Mauris vel ornare massa, at ullamcorper ligula</p>
                <p class="text-Gray text-base font-normal tracking-[-0.4px]">Cras ullamcorper dolor ac viverra finibus. Fusce iaculis accumsan ex, in placerat arcu
                luctus vitae. Fusce velit lacus, hendrerit scelerisque efficitur eget, placerat eu lectus.</p>
                <div class="flex space-x-2 items-center">
                  <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">April 20, 2022</p>
                  <p>.</p>
                  <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">3 minutes to read</p>
                </div>
              </div>
            </div>

            <div class="basis-[25%] flex-col">
              <div class="px-8 space-y-1">
                <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">Aenean ac iaculis urna, quis condimentum elit</p>
                <p class="text-Gray text-base font-normal tracking-[-0.4px]">Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue,
                nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum.</p>
                <div class="flex space-x-2 items-center">
                  <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">March 7, 2022</p>
                  <p>.</p>
                  <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">4 minutes to read</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button class="w-[450px] text-Space-Cadet font-medium rounded-lg border-Gray border-2 border-opacity-50 py-2">View All</button>
          </div>
        </div>
      </section>
      
      <section>
        <div class="flex items-center h-[150px] space-y-2 bg-Vivd-Cerulean px-48">
          <p class="text-White text-lg font-semibold tracking-[-0.45px] leading-[28px] basis-[70%] ">Faithful believers are to each other as the bricks of a wall, supporting and reinforcing each other.<br></br>So saying, the Prophet Muhammad clasped his hands by interlocking his fingers.</p>
          <div class="basis-[30%] flex space-x-6 items-end justify-end text-Off-White text-base font-medium tracking-[-0.24px] leading-[20px] ">
            <p>Prophet Muhammed (Al-Bukhari)</p>
          </div>
        </div>
      </section>

      <section>
        <div class="flex px-48 py-12">
          <p class="basis-[30%] text-Eerie-Black text-3xl font-bold tracking-[-0.75px] pr-48">Passionate about progress</p>
          <p class="basis-[70%] text-Outer-Space text-[22px] font-normal tracking-[-0.55px] pl-16 border-l border-opacity-25 border-Gray">We’ve always believed that charitable donations should find their way to the people
          who need them most, and always without delay. It’s why we’ve created a simple <span class="font-bold">100%
          donation policy</span> that makes sure every donation can:</p>
        </div>
        <div class="flex px-48 pb-20 relative">
          <div class="basis-[60%]">
          </div>
          <div class="flex flex-col bg-White w-[330px] h-[175px] px-16 py-8 border-Amber border-2 rounded-lg absolute top-[10rem] left-[55rem]">
            <p class="text-center text-Space-Cadet text-lg font-normal tracking-[-0.45px]"><span class="text-Eerie-Black font-bold">Get Distributed Fairly</span> because never take a penny towards our running costs</p>
          </div>

          <div class="basis-[40%] flex flex-col pt-24 pl-48 space-y-12">
            <div class="flex flex-col bg-White w-[330px] h-[175px] px-16 py-8 border-Vivd-Cerulean border-2 rounded-lg relative">
              <p class="text-center text-Space-Cadet text-lg font-normal tracking-[-0.45px]"><span class="text-Eerie-Black font-bold">Make A Difference</span> to the people in the world who need you</p>
            </div>
            <div class="flex flex-col bg-White w-[330px] h-[175px] px-16 py-8 border-Space-Cadet border-2 rounded-lg relative">
              <p class="text-center text-Space-Cadet text-lg font-normal tracking-[-0.45px]"><span class="text-Eerie-Black font-bold">Be Spent Wisely</span> on projects that change lives and build communities</p>
            </div>
          </div>
          <div class="flex space-x-4 absolute top-[27rem] left-[21rem]">
            <p class="text-White text-[25px] font-semibold tracking-[-1.25px]">we transfer</p>
            <p class="text-White text-[17px] font-semibold tracking-[-0.85px]">of your donation</p>
          </div>
        </div>
      </section>

      <section>
        <div class="flex space-x-8 py-8">
          <div class="basis-[60%] space-y-8 flex flex-col pl-48 bg-White">
            <div class="flex flex-col mr-96 space-y-4">
              <p class="text-Eerie-Black text-3xl font-bold tracking-[-0.75px]">Ways to give</p>
              <p class="text-Outer-Space text-[22px] font-normal tracking-[-0.55px]">Crowd funding lets people play a more important role in their charity.
              Start building your network of giving today.</p>
            </div>
            <div class="flex flex-col space-y-4 pr-44">
              <div class="flex items-center p-4 space-x-8  shadow-md border-Gray border-2 border-opacity-25 rounded-lg">
                <p class="text-Space-Cadet text-[38px] font-medium tracking-[-0.95px]">01.</p>
                <div class="flex flex-col space-y-2">
                  <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">You could make a quick one off donation</p>
                  <p class="text-Spanish-Gray text-base font-normal tracking-[-0.4px]">For those last minute donors or when your unsure of how much to give</p>
                </div>
              </div>
              <div class="flex items-center p-4 space-x-8  shadow-md border-Gray border-2 border-opacity-25 rounded-lg">
                <p class="text-Space-Cadet text-[38px] font-medium tracking-[-0.95px]">02.</p>
                <div class="flex flex-col space-y-2">
                  <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">Subscription donation</p>
                  <p class="text-Spanish-Gray text-base font-normal tracking-[-0.4px]">Making a donation on every Friday or come Ramadan for that continuous support</p>
                </div>
              </div>
              <div class="flex items-center p-4 space-x-8  shadow-md border-Gray border-2 border-opacity-25 rounded-lg">
                <p class="text-Space-Cadet text-[38px] font-medium tracking-[-0.95px]">03.</p>
                <div class="flex flex-col space-y-2">
                  <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">Project Backed donation</p>
                  <p class="text-Spanish-Gray text-base font-normal tracking-[-0.4px]">This is great when you back a project that’s close to your heart and receive updates</p>
                </div>
              </div>
            </div>
          </div>

          <div class="basis-[40%] flex flex-col">
            <div class="flex flex-col space-y-4 pr-48">
              <p class="text-Vivd-Cerulean text-[36px] font-bold tracking-[-0.54px]">Don’t wait for the world to improve.</p>
              <p class="text-Outer-Space text-[22px] font-normal tracking-[-0.55px]">Drive meaningful change.</p>
              <button class="w-[170px] h-[50px] text-Vivd-Cerulean border-2 border-Vivd-Cerulean rounded-lg">REGISTER NOW</button>
            </div>
          </div>
        </div>
      </section>


      <div class="flex flex-col space-y-2 bg-Amber px-48 py-12">
        <div class="flex flex-col px-[260px] space-y-12">
          <p class="text-Eerie-Black text-[30px] font-bold tracking-[-0.75px] leading-[34px]">Contact Us</p>
          <div class="flex justify-center space-x-12">
            <div class="flex flex-col space-y-12">
              <div class="flex flex-col space-y-4">
                <div class="flex flex-col space-y-4 bg-White border-Eerie-Black border-2 p-5 rounded-xl w-[330px] h-[140px]">
                  <div class="flex justify-between">
                    <div class="flex space-x-2 items-center">
                      <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px] leading-[24px]">Register</p>
                    </div>
                  </div>
                  <p class="text-Outer-Space text-base font-normal tracking-[-0.4px] leading-[24px]">I want to help Aid Humanity and receive future appeals</p>
                </div>

                <div class="flex flex-col space-y-4 border-Gray border-opacity-25 border-2 p-5 rounded-xl w-[330px] h-[140px]">
                  <div class="flex justify-between">
                    <div class="flex space-x-2 items-center">
                      <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px] leading-[24px]">Fundraiser</p>
                    </div>
                  </div>
                  <p class="text-Outer-Space text-base font-normal tracking-[-0.4px] leading-[24px]">Become a fundraiser and kick start your own Charity appeal</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col space-y-8">
              <div class="flex flex-col space-y-4 w-[540px]">
                <input class="placeholder-Eerie-Black text-[13px] font-normal tracking-[0px] leading-[15px] bg-Amber border-2 border-opacity-50 border-Eerie-Black rounded-lg h-[50px] p-2" placeholder="Name and Surname*"></input>
                <input class="placeholder-Eerie-Black text-[13px] font-normal tracking-[0px] leading-[15px] bg-Amber border-2 border-opacity-50 border-Eerie-Black rounded-lg h-[50px] p-2" placeholder="Email*"></input>
                <input class="placeholder:text-start placeholder:-translate-y-6 placeholder-Eerie-Black text-[13px] font-normal tracking-[0px] leading-[15px] bg-Amber border-2 border-opacity-50 border-Eerie-Black rounded-lg h-[98px] p-2" placeholder="Please provide as much detailed information as possible. Thank you *"></input>
              </div>
              <button class="bg-Green w-[210px] h-[50px] rounded-lg text-sm font-bold">SUBMIT MESSAGE</button>
            </div>
          </div>
        </div>
      </div>


      <section>
  <div class="flex flex-col space-y-8 bg-Ghost-White px-48 py-12">
    <p class="text-Eerie-Black text-3xl font-bold tracking-[-0.75px]">Latest News</p>
    <div class="flex">
      <div class="basis-[50%] p-14 bg-[url('news-1.png')] bg-cover bg-center">
        <div class="w-[80px] h-[40px] bg-Red text-center text-White font-semibold mt-40 px-2 py-3">
          <p class="my-auto">NEW</p>
        </div>
        <p class="text-White text-[36px] font-bold tracking-[-0.54px]">Donec turpis eros, euismod nec justo sit amet</p>
        <p class="text-F5 text-base font-normal tracking-[-0.4px]">Pellentesque consequat dui turpis, nec porta nisi varius quis.
         Ut mattis velit quis mi consectetur, non rhoncus metus dapibus.</p>
         <div class="flex space-x-2 items-center">
          <%= image_tag "clock.svg" %>
          <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">July 3, 2022</p>
          <p>.</p>
          <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">5 minutes to read</p>
        </div>
      </div>

      <!-- Image box -->
      <div class="basis-[25%] flex-col">
        <%= image_tag "news-2.png", alt: "image" %>
        <div class="px-8 space-y-1">
          <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">Mauris vel ornare massa, at ullamcorper ligula</p>
          <p class="text-Gray text-base font-normal tracking-[-0.4px]">Cras ullamcorper dolor ac viverra finibus. Fusce iaculis accumsan ex, in placerat arcu
          luctus vitae. Fusce velit lacus, hendrerit scelerisque efficitur eget, placerat eu lectus.</p>
          <div class="flex space-x-2 items-center">
            <%= image_tag "clock.svg" %>
            <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">April 20, 2022</p>
            <p>.</p>
            <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">3 minutes to read</p>
          </div>
        </div>
      </div>

      <!-- Image box -->
      <div class="basis-[25%] flex-col">
        <%= image_tag "news-3.png", alt: "image" %>
        <div class="px-8 space-y-1">
          <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">Aenean ac iaculis urna, quis condimentum elit</p>
          <p class="text-Gray text-base font-normal tracking-[-0.4px]">Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue,
          nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum.</p>
          <div class="flex space-x-2 items-center">
            <%= image_tag "clock.svg" %>
            <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">March 7, 2022</p>
            <p>.</p>
            <p class="text-Testimonial-Gray text-[11px] font-normal tracking-[-0.17px]">4 minutes to read</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <button class="w-[450px] text-Space-Cadet font-medium rounded-lg border-Gray border-2 border-opacity-50 py-2">View All</button>
    </div>
  </div>
</section>



<section>
  <div class="flex space-x-8 py-8">
    <div class="basis-[60%] space-y-8 flex flex-col pl-48 bg-White">
      <div class="flex flex-col mr-96 space-y-4">
        <p class="text-Eerie-Black text-3xl font-bold tracking-[-0.75px]">Ways to give</p>
        <p class="text-Outer-Space text-[22px] font-normal tracking-[-0.55px]">Crowd funding lets people play a more important role in their charity.
        Start building your network of giving today.</p>
      </div>
      <!-- steps box -->
      <div class="flex flex-col space-y-4 pr-44">
        <!-- first box -->
        <div class="flex items-center p-4 space-x-8  shadow-md border-Gray border-2 border-opacity-25 rounded-lg">
          <p class="text-Space-Cadet text-[38px] font-medium tracking-[-0.95px]">01.</p>
          <%= image_tag "off-donation.svg" %>
          <div class="flex flex-col space-y-2">
            <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">You could make a quick one off donation</p>
            <p class="text-Spanish-Gray text-base font-normal tracking-[-0.4px]">For those last minute donors or when your unsure of how much to give</p>
          </div>
        </div>
        <!-- second box -->
        <div class="flex items-center p-4 space-x-8  shadow-md border-Gray border-2 border-opacity-25 rounded-lg">
          <p class="text-Space-Cadet text-[38px] font-medium tracking-[-0.95px]">02.</p>
          <%= image_tag "subscription-donation.svg" %>
          <div class="flex flex-col space-y-2">
            <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">Subscription donation</p>
            <p class="text-Spanish-Gray text-base font-normal tracking-[-0.4px]">Making a donation on every Friday or come Ramadan for that continuous support</p>
          </div>
        </div>
        <!-- third box -->
        <div class="flex items-center p-4 space-x-8  shadow-md border-Gray border-2 border-opacity-25 rounded-lg">
          <p class="text-Space-Cadet text-[38px] font-medium tracking-[-0.95px]">03.</p>
          <%= image_tag "project-backed-donation.svg" %>
          <div class="flex flex-col space-y-2">
            <p class="text-Eerie-Black text-lg font-bold tracking-[-0.45px]">Project Backed donation</p>
            <p class="text-Spanish-Gray text-base font-normal tracking-[-0.4px]">This is great when you back a project that’s close to your heart and receive updates</p>
          </div>
        </div>
      </div>
    </div>

    <div class="basis-[40%] flex flex-col">
      <%= image_tag "donation-types.png" %>
      <div class="flex flex-col space-y-4 pr-48">
        <p class="text-Vivd-Cerulean text-[36px] font-bold tracking-[-0.54px]">Don’t wait for the world to improve.</p>
        <p class="text-Outer-Space text-[22px] font-normal tracking-[-0.55px]">Drive meaningful change.</p>
        <button class="w-[170px] h-[50px] text-Vivd-Cerulean border-2 border-Vivd-Cerulean rounded-lg">REGISTER NOW</button>
      </div>
    </div>
  </div>
</section>






      < Footer />
    </section>
  );
}
export default Home_page;