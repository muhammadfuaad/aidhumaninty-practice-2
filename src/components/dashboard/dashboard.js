import Toggle from "./toggle";
import Button from "./button";
import Table from "../table";
import Appeal_status_1 from "./appeal_status_1";
import Circular_chart from "./circular_chart";

function Dashboard() {
  return (
    <>
    <div className="flex flex-col space-y-6">
      <div className="flex space-x-4">
        <div className="rounded-2xl bg-white w-[60%]">
          <div className="p-8 border-bottom-medium">
            <div className="flex justify-between items-center">
              <p className="portal-subheading">Fundraising</p>
              <a href="#" className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark">View All</a>
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col space-y-6">
              <Appeal_status_1 title="Pakistan Floods" category="Disaster & Emergency Appeals" amount_raised="£113"
              amount_remaining="£243" supporters="4" eligibility="Z" />
              <Appeal_status_1 title="Pakistan Floods" category="Disaster & Emergency Appeals" amount_raised="£113"
              amount_remaining="£243" supporters="4" eligibility="Z" />
            </div>
          </div>
        </div>

        
        <div className="rounded-2xl bg-white w-[40%]">
          <div className="p-8 border-bottom-medium">
            <div className="flex justify-between items-center">
              <p className="portal-subheading">Appeal Type</p>
            </div>
          </div>
          <div className="p-8">< Circular_chart /></div>
        </div>
      </div>
      <div className="rounded-2xl bg-white">
        <div className="p-8 border-bottom-medium">
          <div className="flex justify-between items-center">
            <p className="portal-subheading">Donation history</p>
            <a href="#" className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark">View All</a>
          </div>
        </div>
        <div className="px-8 pb-8">
          <Table />
        </div>
      </div>
    </div>
    </>



    
  );
}
export default Dashboard;
  