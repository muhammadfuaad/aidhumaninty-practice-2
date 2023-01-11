import Dashboard_bottom_links from "./dashboard_bottom_links";
import Dashboard_sidebar from "./dashboard_sidebar";
import Profile from "./profile";

function Payment_methods() {
  return (
    <section className="flex">
      < Dashboard_sidebar />
      <section className="bg-[#f5f6f7] w-[55%] relative">
        <div className="portal__header px-16 h-28 flex items-center border-bottom-light">
          <p className="portal-heading">Payment methods</p>
        </div>
        <div className="p-16">
          <div className="bg-white p-8 rounded-2xl">
            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings">Saved cards</p>
            <div className="flex flex-col items-center space-y-4 w-[14rem] mx-auto my-40">
              <div className="bg-[#e6e6e6] w-24 h-24 rounded-full"><img src="./Icons/mother-child-charity.svg" className="w-[5rem] -translate-y-6 translate-x-2"></img></div>
              <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-headings text-center">There doesn’t seem to be anything here</p>
            </div>
          </div>
        </div>
        <div className="absolute left-8 bottom-8">
          <Dashboard_bottom_links />
        </div>
      </section>
      < Profile />
    </section>
  );
}
export default Payment_methods;