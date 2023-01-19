import Toggle from "./toggle";
import Button from "./button";
import Table from "../table";
import Appeal_status_1 from "./appeal_status_1";
function Dashboard() {
  return (
    <>
    <div className="rounded-2xl bg-white w-[60%]">
      <div className="p-8 border-bottom-medium">
        <div className="flex justify-between items-center">
          <p className="portal-subheading">Fundraisisng</p>
          <a href="#" className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark">View All</a>
        </div>
      </div>
      <div className="p-8">        
        <Appeal_status_1 title="Pakistan Floods" category="Disaster & Emergency Appeals" amount_raised="£113" 
        amount_remaining="£243" supporters="4" />     
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
    </>



    
  );
}
export default Dashboard;
  