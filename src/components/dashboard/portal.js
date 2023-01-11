import Dashboard_sidebar from "./dashboard_sidebar";
import Profile from "./profile";

function Portal() {
  return (
    <section className="flex justify-between">
      < Dashboard_sidebar />
      < Profile />
    </section>
  );
}
export default Portal;