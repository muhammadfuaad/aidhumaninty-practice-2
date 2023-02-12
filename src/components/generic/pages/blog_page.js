import Page_header from "../components/page_header";
import Header from "../../header";
import Footer from "../../footer";
import Hero from "../../icons/blog-hero-1.png"
import Readable from "../components/readable";
import Blog_card from "../components/blog_card"
import Clock from "../../icons/clock.svg";



function Blog_page() {
  return (
    <section>
      < Header />
      <div className="flex flex-col px-64 bg-[#f9f9f9]">
        <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Blog</p>
        <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-12">Blog</p>
        <div className="flex gap-8">
          <div className="w-[80%]">
          
            <div className="h-[40rem] rounded-3xl border border-black relative">
              <div className="absolute bottom-12 left-12 w-1/2">
                <button className="px-20 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-red rounded-xl mb-6">
                  New
                </button>
                <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-white leading-[4rem] mb-8">Donec turpis eros, euismod nec justo sit amet</p>
                <p className="text-[1.6rem] font-normal tracking-[-0.54px] text-[#f5f6f7] leading-[2.4rem] mb-8">Pellentesque consequat dui turpis, nec porta nisi varius quis. Ut mattis velit quis mi consectetur, non rhoncus metus dapibus.</p>
                <div className="flex gap-2 items-center">
                  <img src={Clock}></img>
                  <div className="flex gap-4 items-center text-[1.1rem] font-normal tracking-[-0.17px] text-[#bdbdbd]">
                    <p>April 20, 2022</p>
                    <p>3 minutes to read</p>
                  </div>
                </div>
              </div>
              <img src={Hero} className="h-full rounded-3xl"></img>
            </div>
            <div className="flex gap-8 mt-10">
              < Blog_card />
              < Blog_card />
              < Blog_card />
            </div>
            <div className="flex gap-8 mt-10">
              < Blog_card />
              < Blog_card />
              < Blog_card />
            </div>

            <button class="w-full py-6 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
            outline-[#999999] rounded-xl mt-20 mb-48">Load More</button>
          </div>
          <div>
            <p className="text-[2.4rem] font-bold tracking-[-0.6px] text-primary">Most readable</p>
            
            <div className="flex flex-col">
              <div className="border-b border-[#e6e6e6]">< Readable /></div>
              <div className="border-b border-[#e6e6e6]">< Readable /></div>
              <div className="border-b border-[#e6e6e6]">< Readable /></div>
              <div className="border-b border-[#e6e6e6]">< Readable /></div>
              <div className="">< Readable /></div>

            </div>
              
          </div>
        </div>
      </div>
      < Footer />
    </section>
  );
}
export default Blog_page;