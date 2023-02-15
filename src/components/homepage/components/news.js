function News() {
  return (
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
  );
}
export default News;