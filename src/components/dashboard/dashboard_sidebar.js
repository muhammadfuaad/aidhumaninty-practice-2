function Dashboard_sidebar() {
  return (
    <section className="dashboard-sidebar w-[20%] h-screen">
      <div className="dashboard-sidebar__header flex justify-between p-8">
        <img src="./Icons/dashboard-sidebar-logo.svg"></img>
        <img src="./Icons/dashboard-sidebar-toggler.svg"></img>
      </div>
      <div class="dashboard-sidebar__body">        
        <ul className="list">
          <p className="text-[1rem] font-medium tracking-[0.5px] text-[#bdbdbd] mt-4 mb-2">MENU</p>
          <li className="list__item"><a className=""><img src="./Icons/dashboard.svg" alt=""></img><span>Dashboard</span></a></li>
          <li className="list__item"><a className=""><img src="./Icons/profile.svg" alt=""></img><span>Profile</span></a></li>
          <li className="list__item"><a className=""><img src="./Icons/fundraising.svg" alt=""></img><span>Fundraising</span></a></li>
          <li className="list__item"><a className=""><img src="./Icons/security.svg" alt=""></img><span>Security</span></a></li>
          <li className="list__item"><a className=""><img src="./Icons/donation-history.svg" alt=""></img><span>Donation history</span></a></li>
          <li className="list__item"><a className=""><img src="./Icons/monthly-donations.svg" alt=""></img><span>Monthly donations</span></a></li>
          <li className="list__item"><a className=""><img src="./Icons/payment-methods.svg" alt=""></img><span>Payment methods</span></a></li>
          <li className="list__item"><a className=""><img src="./Icons/preferences.svg" alt=""></img><span>Preferences</span></a></li>
        </ul>
        <div className="bg-primary flex space-x-4 py-8 px-4 rounded-3xl mt-20">
          <img src="./Icons/dashboard-sidebar-badge.svg" className="left"></img>
          <div className="right">
            <p className="text-[1.4rem] font-medium tracking-[-0.35px] text-[#fff]">Level <span className="font-semibold">Silver</span></p>
            <p className="text-[1.1rem] font-medium tracking-[-0.28px] text-[#fff]">total donation: <span className="font-semibold">£834.00</span></p>
            <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#E0F7FF] mt-2">until level gold still remains: £176.00</p>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Dashboard_sidebar;