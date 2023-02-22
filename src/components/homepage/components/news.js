import Blog_card from "../../generic/components/blog_card";
import Date from './../../date';

function News() {
  return (
      <section className="bg-f9">
        <div className="flex flex-col bg-Ghost-white px-8 sm:px-48 py-20">
          <p className="generic-subheading mb-20 text-center sm:text-start">Latest News</p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="basis-[50%] p-14 bg-cover rounded-3xl bg-[url('assets/images/blog-hero-1.png')]">
              <div className="w-[80px] h-[40px] flex justify-center items-center bg-red text-center text-white text-[1.5rem] font-semibold mt-60 mb-4 px-2 py-3">
                <p className="">NEW</p>
              </div>
              <p className="text-white text-[3rem] sm:text-[3.6rem] font-bold tracking-[-0.45px] sm:tracking-[-0.54px] leading-[3.2rem] sm:leading-[4rem] mb-4">Donec turpis eros, euismod nec justo sit amet</p>
              <p className="text-f5 text-[1.6rem] font-normal tracking-[-0.4px] mb-8">Pellentesque consequat dui turpis, nec porta nisi varius quis.
              Ut mattis velit quis mi consectetur, non rhoncus metus dapibus.</p>
              <Date/>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-8">
              < Blog_card img="./images/blog-1.png" title="Mauris vel ornare massa, at ullamcorper ligula" description="Cras ullamcorper dolor ac viverra finibus. Fusce iaculis accumsan ex, in placerat arcu luctus vitae. Fusce velit lacus, hendrerit scelerisque efficitur eget, placerat eu lectus." />
              < Blog_card img="./images/blog-2.png" title="Aenean ac iaculis urna, quis condimentum elit" description="Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue, nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum." />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 sm:mt-20">
            
            <button className="w-full sm:w-fit sm:px-72 py-6 uppercase text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
              outline-spanish-gray rounded-xl sm:mb-8">View All</button>
          </div>
        </div>
      </section>
  );
}
export default News;