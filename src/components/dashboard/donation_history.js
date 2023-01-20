import Dashboard_bottom_links from "./dashboard_bottom_links";
import Donor_details from "./donor_details";
function Donation_history() {
  return (    
    <div className="bg-white p-8 rounded-3xl">
      <div className="flex space-x-56">
        <div className="flex flex-col space-y-3">
          <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-headings">Total donations</p>
          <p className="text-[2.4rem] font-semibold tracking-[-0.6px] text-headings">£2.134</p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-headings">Total donations</p>
          <p className="text-[2.4rem] font-semibold tracking-[-0.6px] text-headings">£2.134</p>
        </div>
      </div>
      <div className="flex flex-col space-y-8 mt-8">
        < Donor_details donor_name="Ron Hill" location="Great Britain" date="Tue 12 Dec, 08:15"
        appeal="Water Hands Pumps Uganda" category="Water for All" amount="£231.50"/>
        < Donor_details donor_name="Alexander Jacob" location="Germany" date="Sat 8 Sep, 09:03"
        appeal="Pakistan Floods" category="Disaster & Emergency Appeals" amount="£301.50"/>
      </div>
    </div>      
  );
}
export default Donation_history;
  