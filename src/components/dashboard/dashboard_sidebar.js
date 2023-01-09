function Dashboard_sidebar() {
  return (
    <section className="dashboard-sidebar w-[20%]">
      <div className="dashboard-sidebar__header flex justify-between p-5 ">
        <img src="./Icons/dashboard-sidebar-logo.svg"></img>
        <img src="./Icons/dashboard-sidebar-toggler.svg"></img>
      </div>
      <div class="dashboard-sidebar__body">
        <p>Menu</p>
        <ul>
          <li><a><div className="flex space-x-4"><img src="./Icons/dashboard.svg" alt=""></img><span className="list__item">Dashboard</span></div></a></li>
          <li><a><div className="flex space-x-4"><img src="./Icons/profile.svg" alt=""></img><span className="list__item">Profile</span></div></a></li>
          <li><a><div className="flex space-x-4"><img src="./Icons/fundraising.svg" alt=""></img><span className="list__item">Fundraising</span></div></a></li>
          <li><a><div className="flex space-x-4"><img src="./Icons/security.svg" alt=""></img><span className="list__item">Security</span></div></a></li>
          <li><a><div className="flex space-x-4"><img src="./Icons/donation-history.svg" alt=""></img><span className="list__item">Donation history</span></div></a></li>
          <li><a><div className="flex space-x-4"><img src="./Icons/monthly-donations.svg" alt=""></img><span className="list__item">Monthly donations</span></div></a></li>
          <li><a><div className="flex space-x-4"><img src="./Icons/payment-methods.svg" alt=""></img><span className="list__item">Payment methods</span></div></a></li>
          <li><a><div className="flex space-x-4"><img src="./Icons/preferences.svg" alt=""></img><span className="list__item">Preferences</span></div></a></li>
        </ul>
      </div>
    </section>
  );
}
export default Dashboard_sidebar;