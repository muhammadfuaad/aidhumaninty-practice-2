import Dashboard_sidebar from "./dashboard_sidebar";
import Profile_sidebar from "./profile_sidebar";
import Preferences from "./preferences";

function Preferences_page() {
  return (
    <section className="flex">
      <div className="w-[15%] hidden sm:block">
        < Dashboard_sidebar />
      </div>
      <div className="w-full sm:w-[60%] h-screen sm:h-auto relative">
        < Preferences />
      </div>
      <div className="w-[25%] hidden sm:block">
        <Profile_sidebar />
      </div>  
    </section>
  );
}
export default Preferences_page;