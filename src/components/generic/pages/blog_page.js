import Page_header from "../components/page_header";
import Generic_header from "../../generic_header";
import Footer from "../../footer";
import Hero from "../../icons/blog-hero-1.png"
import Readable_list from "../components/readable_list";
import Blog_card from "../components/blog_card"
import Clock from "../../icons/clock.svg";
import Home_page_header_mobile from './../../homepage/components/home_page_header_mobile';
import Footer_mobile from '../../footer_mobile';
import Layout_1 from './layout_1';
import Layout_page from "./layout_page";



function Blog_page() {
  return (
    <Layout_1 content=
      <div>
        <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] mt-16 mb-20 hidden sm:flex">Home / Blog</p>
        <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mt-12 sm:mt-0 mb-12">Blog</p>
        <div className="flex gap-8">
          <div className="w-full sm:w-[80%]">
    
            <div className="p-8 sm:p-16 h-[40rem] rounded-3xl bg-cover bg-[url('assets/images/smiling-children-1.png')]">
              <div className="w-full sm:w-3/4 mt-28">
                <button className="px-8 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-red mb-6">
                  New
                </button>
                <p className="text-[3rem] font-bold tracking-[-0.45px] text-white leading-[3.2rem]
                sm:text-[3.6rem] sm:font-bold sm:tracking-[-0.54px] sm:text-white sm:leading-[4rem] mb-4 sm:mb-8">Donec turpis eros, euismod nec justo sit amet</p>
                <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#f5f6f7] leading-[2.4rem] mb-4 sm:mb-8">Pellentesque consequat dui turpis, nec porta nisi varius quis. Ut mattis velit quis mi consectetur, non rhoncus metus dapibus.</p>
                <div className="flex gap-2 items-center">
                  <img src={Clock}></img>
                  <div className="flex gap-4 items-center text-[1.1rem] font-normal tracking-[-0.17px] text-[#bdbdbd]">
                    <p>April 20, 2022</p>
                    <p className='font-bold mb-2'>.</p>
                    <p>3 minutes to read</p>
                  </div>
                </div>
              </div>
             

            </div>
            <div className="sm:hidden mt-16">
              <Readable_list />
            </div>
            <div className="flex flex-col sm:flex-row gap-8 mt-10">
              < Blog_card img="./images/blog-1.png" title="Mauris vel ornare massa, at ullamcorper ligula" description="Cras ullamcorper dolor ac viverra finibus. Fusce iaculis accumsan ex, in placerat arcu luctus vitae. Fusce velit lacus, hendrerit scelerisque efficitur eget, placerat eu lectus." />
              < Blog_card img="./images/blog-2.png" title="Aenean ac iaculis urna, quis condimentum elit" description="Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue, nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum." />
              < Blog_card img="./images/blog-3.png" title="Congue quisque egestas diam in arcu cursus" description="Nunc eget lorem dolor sed viverra ipsum nunc. Ac ut consequat semper viverra nam. Urna neque viverra justo nec ultrices. Feugiat scelerisque varius morbi enim nunc faucibus a." />
            </div>
            <div className="flex flex-col sm:flex-row gap-8 mt-10">
              < Blog_card img="./images/blog-2.png" title="Enim diam vulputate ut pharetra sit amet aliquam id" description="Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum." />
              < Blog_card img="./images/blog-5.png" title="Nunc id cursus metus aliquam eleifend" description="Quis eleifend quam adipiscing vitae. In hac habitasse platea dictumst vestibulum. Duis ut diam quam nulla porttitor massa id. Tincidunt arcu non sodales neque sodales ut etiam." />
              < Blog_card img="./images/blog-6.png" title="In arcu cursus euismod quis viverra nibh cras pulvinar mattis" description="Dui id ornare arcu odio ut sem nulla pharetra diam. Ligula ullamcorper malesuada proin libero nunc. Sagittis aliquam malesuada bibendum arcu vitae elementum." />
            </div>
            <button className="w-full py-6 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
            outline-spanish-gray rounded-xl mt-16 mb-24 sm:mt-20 sm:mb-48">Load More</button>
          </div>
          <div className="hidden sm:flex">
            <Readable_list />
          </div>
    
        </div>
      </div>
    />
  );
}
export default Blog_page;