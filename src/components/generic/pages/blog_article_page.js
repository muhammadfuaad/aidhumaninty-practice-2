import Page_header from "../components/page_header";
import Header from "../../header";
import Footer from "../../footer";
import Hero from "../../icons/blog-hero-1.png"
import Readable from "../components/readable";
import Blog_card from "../components/blog_card"
import Clock from "../../icons/clock.svg";
import Arrow from "../../icons/arrow-left.svg"
import Readable_list from './../components/readable_list';
import Facebook from "../../icons/facebook.png"
import Twitter from "../../icons/twitter.png"
import Email from "../../icons/email-white.svg"


function Blog_page() {
  return (
    <section>
      < Header />
      <div className="flex flex-col px-64 bg-[#f9f9f9] pb-40">
        <div className="flex justify-between">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Blog / Donec turpis eros, euismod nec justo sit amet</p>
          <div className="flex gap-4 items-center">
            <p className="text-[1.1rem] font-bold tracking-[-0.17px] text-[#999]">BACK TO ALL ARTICLES</p>
            <img src={Arrow}></img>
          </div>
        </div>
          <div className="mx-auto flex gap-2 items-center mb-8">
            <img src={Clock}></img>
            <div className="flex gap-4 items-center text-[1.1rem] font-normal tracking-[-0.17px] text-[#bdbdbd]">
              <p>April 20, 2022</p>
              <p>3 minutes to read</p>
            </div>          
          </div>
        <p className="mx-auto text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-10">Donec turpis eros, euismod nec justo sit amet</p>
        <div className="flex gap-8">
          <div className="flex flex-col">
          
            <div className="h-[40rem] rounded-3xl border border-black relative">
              <button className="px-8 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-red mb-6 absolute top-12 left-12">
                    New
                  </button>
              <img src={Hero} className="h-full w-full rounded-3xl"></img>
            </div>

            <div className="flex gap-8 text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] mt-20">
              <div className="w-[70%] flex flex-col gap-12 relative">
                <div className="absolute -left-24 flex flex-col gap-6">
                  <div className="bg-primary-dark w-16 h-16 rounded-full flex justify-center items-center">
                    <img src={Facebook} className="w-3"></img>
                  </div>
                  <div className="bg-primary-dark w-16 h-16 rounded-full flex justify-center items-center">
                    <img src={Twitter} className="w-4"></img>
                  </div>
                  <div className="bg-primary-dark w-16 h-16 rounded-full flex justify-center items-center">
                    <img src={Email} className="w-4"></img>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut lectus arcu bibendum at. Non curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
                <ul className="list-disc list-outisde marker:text-primary ml-8">
                  <li>Ac turpis egestas integer eget. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.</li>
                  <li> Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</li>
                </ul>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Ac turpis egestas integer eget</p>
                  <p>Nisi porta lorem mollis aliquam ut porttitor. Eget mi proin sed libero enim sed faucibus turpis. Etiam sit amet nisl purus. Aliquam ut porttitor leo a diam sollicitudin tempor id.</p>
                </div>
                <p>Laoreet id donec ultrices tincidunt arcu. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Id venenatis a condimentum vitae sapien pellentesque. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Id ornare arcu odio ut sem nulla pharetra diam sit. Leo a diam sollicitudin tempor id eu nisl nunc. Curabitur vitae nunc sed velit dignissim sodales ut. Facilisi morbi tempus iaculis urna id volutpat lacus. Ut eu sem integer vitae justo eget magna fermentum iaculis. Tellus elementum sagittis vitae et leo duis. Amet nulla facilisi morbi tempus. Consectetur adipiscing elit duis tristique sollicitudin nibh.</p>
              </div>
              < Readable_list />
            </div>
            <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mx-auto self-center">Similar Articles</p>
            <div className="flex gap-8 mt-10">
              < Blog_card />
              < Blog_card />
              < Blog_card />
              < Blog_card />
            </div>
            
          </div>
          
        </div>
      </div>
      < Footer />
    </section>
  );
}
export default Blog_page;