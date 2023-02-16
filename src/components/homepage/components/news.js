import Blog_card from "../../generic/components/blog_card";

function News() {
  return (
      <section className="bg-f9">
        <div className="flex flex-col space-y-8 bg-Ghost-white px-48 py-12">
          <p className="text-black text-[3rem] font-bold tracking-[-0.75px]">Latest News</p>
          <div className="flex gap-8">
            <div className="basis-[50%] p-14 bg-cover rounded-3xl bg-[url('assets/images/blog-hero-1.png')]">
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

            <div className="w-1/2 flex gap-8">
              <div className="flex-col">
                <Blog_card/>
              </div>
              <div className="flex-col">
                <Blog_card/>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-16">
            
          <button className="px-72 py-6 uppercase text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
            outline-spanish-gray rounded-xl">View All</button>
          </div>
        </div>
      </section>
  );
}
export default News;