import Copyright from "./copyright";

function Dashboard_sidebar() {
  return (
    <section className="h-full relative">
      <div className="flex justify-between items-center px-8 h-28 border-bottom-light">
        <a href="#"><img src="./Icons/dashboard-sidebar-logo.svg" className="w-60"></img></a>
        <a href="#"><img src="./Icons/dashboard-sidebar-toggler.svg" className="w-6"></img></a>
      </div>
      <div className="">       
        <p className="text-[1rem] font-medium tracking-[0.5px] text-[#bdbdbd] mt-12 mb-2 px-8">MENU</p>

        <ul className="text-[1.2rem] font-medium text-headings">
          <li className="px-8 border-x-4 border-white hover:border-l-primary hover:text-primary-dark group"><a className="flex justify-start space-x-4 items-center py-4 cursor-pointer border-bottom-light"><img src="./Icons/dashboard.svg" className="w-8 group-hover:filter-none brightness-50" alt=""></img><span>Dashboard</span></a></li>
          <li className="px-8 border-x-4 border-white hover:border-l-primary hover:text-primary-dark group"><a className="flex justify-start space-x-4 items-center py-4 cursor-pointer border-bottom-light"><img src="./Icons/profile.svg" className="w-8 group-hover:filter-none brightness-50" alt=""></img><span>Profile</span></a></li>
          <li className="px-8 border-x-4 border-white hover:border-l-primary hover:text-primary-dark group"><a className="flex justify-start space-x-4 items-center py-4 cursor-pointer border-bottom-light"><img src="./Icons/fundraising.svg" className="w-8 group-hover:filter-none brightness-50" alt=""></img><span>Fundraising</span></a></li>
          <li className="px-8 border-x-4 border-white hover:border-l-primary hover:text-primary-dark group"><a className="flex justify-start space-x-4 items-center py-4 cursor-pointer border-bottom-light"><img src="./Icons/security.svg" className="w-8 group-hover:filter-none brightness-50" alt=""></img><span>Security</span></a></li>
          <li className="px-8 border-x-4 border-white hover:border-l-primary hover:text-primary-dark group"><a className="flex justify-start space-x-4 items-center py-4 cursor-pointer border-bottom-light"><img src="./Icons/donation-history.svg" className="w-8 group-hover:filter-none brightness-50" alt=""></img><span>Donation history</span></a></li>
          <li className="px-8 border-x-4 border-white hover:border-l-primary hover:text-primary-dark group"><a className="flex justify-start space-x-4 items-center py-4 cursor-pointer border-bottom-light"><img src="./Icons/monthly-donations.svg" className="w-8 group-hover:filter-none brightness-50" alt=""></img><span>Monthly donations</span></a></li>
          <li className="px-8 border-x-4 border-white hover:border-l-primary hover:text-primary-dark group"><a className="flex justify-start space-x-4 items-center py-4 cursor-pointer border-bottom-light"><img src="./Icons/payment-methods.svg" className="w-8 group-hover:filter-none brightness-50" alt=""></img><span>Payment methods</span></a></li>
          <li className="px-8 border-x-4 border-white hover:border-l-primary hover:text-primary-dark group"><a className="flex justify-start space-x-4 items-center py-4 cursor-pointer"><img src="./Icons/preferences.svg" className="w-8 group-hover:filter-none brightness-50" alt=""></img><span>Preferences</span></a></li>
        </ul>
        <div className="bg-primary flex space-x-4 py-8 px-4 rounded-3xl mt-20 mx-8 relative">
          <img src="./Icons/yellow-star-small.svg" className="absolute left-3 top-4"></img>
          <img src="./Icons/yellow-star-large.svg" className="absolute right-6 bottom-4"></img>
          <img src="./Icons/dashboard-sidebar-badge.svg" className="left"></img>
          <div className="right">
            <p className="text-[1.4rem] font-medium tracking-[-0.35px] text-[#fff]">Level <span className="font-semibold">Silver</span></p>
            <p className="text-[1.1rem] font-medium tracking-[-0.28px] text-[#fff]">total donation: <span className="font-semibold">£834.00</span></p>
            <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#E0F7FF] mt-2">until level gold still remains: £176.00</p>
          </div>

        </div>
      </div>
      <div className="absolute left-8 bottom-8">
        <Copyright />
      </div>
    </section>
  );
}
export default Dashboard_sidebar;