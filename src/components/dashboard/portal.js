import Sidebar from "./sidebar/sidebar";
import Profile_sidebar from "./profile_sidebar/profile_sidebar";

function Portal() {
  return (
    <section className="flex justify-between">
      < Sidebar />
      < Profile_sidebar />
    </section>
  );
}
export default Portal;