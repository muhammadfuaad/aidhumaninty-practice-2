import Donor_details from "./donor_details";
import Donor_details_mobile from "./donor_details_mobile";
import Button from "./button";

function Donation_history() {
  return (    
    <div className="sm:bg-white sm:p-8 sm:rounded-3xl">
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
      <div className="">
        <div className="sm:flex sm:flex-col space-y-8 mt-8 hidden">
          < Donor_details donor_name="Ron Hill" location="Great Britain" date="Tue 12 Dec, 08:15"
          appeal="Water Hands Pumps Uganda" category="Water for All" amount="£231.50"/>
          < Donor_details donor_name="Alexander Jacob" location="Germany" date="Sat 8 Sep, 09:03"
          appeal="Pakistan Floods" category="Disaster & Emergency Appeals" amount="£301.50"/>
        </div>
        <div className="flex flex-col space-y-8 mt-16 sm:hidden">
          < Donor_details_mobile donor_name="Ron Hill" location="Great Britain" date="Tue 12 Dec, 08:15"
          appeal="Water Hands Pumps Uganda" category="Water for All" amount="£231.50"/>
          < Donor_details_mobile donor_name="Alexander Jacob" location="Germany" date="Sat 8 Sep, 09:03"
          appeal="Pakistan Floods" category="Disaster & Emergency Appeals" amount="£301.50"/>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 sm:mt-8">
        <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-headings">24 results</p>
        <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-headings">1234</p>
        <div className="flex space-x-4">
          < Button text="Previous" classNames="outline outline-1 outline-[#999] text-[#999] text-[1rem] bg-[#e6e6e6] px-8 py-4"/>
          < Button text="Next" classNames="outline outline-1 outline-[#999] text-[#999] text-[1rem] px-8 py-4 bg-[#f5f6f7]"/>
        </div>
      </div>
    </div>      
  );
}
export default Donation_history;
  