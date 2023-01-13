import Dashboard_sidebar from "./dashboard_sidebar";
import Profile_sidebar from "./profile_sidebar";
import Monthly_donations from "./monthly_donations";

function Monthly_donations_page() {
  return (
    <section className="flex">
      <div className="w-[15%] hidden sm:block">
        < Dashboard_sidebar />
      </div>
      <div className="w-full sm:w-[60%] h-screen sm:h-auto relative">
        < Monthly_donations />
      </div>
      <div className="w-[25%] hidden sm:block">
        <Profile_sidebar />
      </div>  
    </section>
  );
}
export default Monthly_donations_page;