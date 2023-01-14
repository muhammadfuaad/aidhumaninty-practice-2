import Dashboard_sidebar from "./dashboard_sidebar";
import Profile_sidebar from "./profile_sidebar";
import Donation_history from "./donation_history";
import Dashboard_layout from "./dashboard_layout";

function Donation_history_page() {
  return (
    <section className="flex">
      <div className="w-[15%] hidden sm:block">
        < Dashboard_sidebar />
      </div>
      <section className="w-full sm:w-[60%] h-screen sm:h-auto relative">
        < Donation_history />
      </section>
        <div className="w-[25%] hidden sm:block">
          <Profile_sidebar />
        </div>   
    </section>
  );
}
export default Donation_history_page;