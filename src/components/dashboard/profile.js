import Total_raised from "./total_raised";
import Zakat from "./zakat";

function Profile() {
  return (
    <section className="">
      <div className="flex justify-between items-center px-8 h-28 border-bottom-light">
        <button className="flex space-x-4 items-enter bg-primary-dark rounded-2xl py-4 px-6 h-fit">
          <img src="./Icons/blue-plus.svg" className="w-4"></img>
          <span className="text-white text-[1.4rem] font-semibold uppercase">New Appeal</span>
        </button>
        <div className="flex justify-between space-x-4">
          <a className="flex space-x-2 items-center"><span className="text-[1.4rem] font-medium tracking-[-0.21px] text-[#999999]">En</span><img src="./Icons/drop-down.svg" alt=""></img></a>
          <a className="flex space-x-2 items-center"><img src="./Icons/logout.svg" className="w-8" alt=""></img><span className="text-[1.3rem] font-medium tracking-[-0.2px] text-headings">Log Out</span></a>
        </div>
      </div>
      <div className="flex flex-col items-center px-8">
        <div className="mt-20 w-48 h-48 rounded-[50%] bg-[#e6e6e6] flex justify-center items-center"><img src="./Icons/user-circle.svg" className="w-24 fill-white"></img></div>
        <p className="mt-6 text-[1.8rem] font-bold tracking-[-0.45px] text-headings">James Matthews</p>
        <div className="flex space-x-2 items-center">
          <img src="./Icons/calendar-clock.svg"></img>
          <p className="text-[1rem] font-medium tracking-[-0.15px] text-[#bdbdbd]">Joined 12th of August 2021</p>
        </div>
        <button className="px-16 py-4 uppercase text-[1.4rem] font-semibold text-primary outline outline-2 outline-primary rounded-lg mt-8">View Profile</button>
        <button className="px-8 py-4 uppercase text-[1.4rem] font-semibold text-[#bdbdbd] outline outline-2 outline-[#bdbdbd] rounded-lg mt-6">Edit Profile</button>
        <div className="mt-12 flex space-x-4">
          <Total_raised />
          <Total_raised />
        </div>
        <div className="mt-12 w-full">
          <Zakat />
        </div>
      </div>
    </section>
  );
}
export default Profile;