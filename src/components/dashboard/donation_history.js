import Donor_details from "./donor_details";
import Donor_details_mobile from "./donor_details_mobile";
import Button from "./button";

function Donation_history() {
  return (    
    <div className="sm:bg-white sm:p-8 sm:rounded-3xl">
      <div className="flex space-x-56">
        <div className="flex flex-col space-y-3">
          <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">Total donations</p>
          <p className="text-[2.4rem] font-semibold tracking-[-0.6px] text-black">£2.134</p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">Total donations</p>
          <p className="text-[2.4rem] font-semibold tracking-[-0.6px] text-black">£2.134</p>
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
        <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-black">24 results</p>
        <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-black">1234</p>
        <div className="flex space-x-4">
          
          <button className="px-8 py-2 uppercase text-[1.4rem] font-semibold text-bd bg-platinum outline
            outline-bd rounded-xl">Previous</button>
          <button className="px-16 py-6 uppercase text-[1.4rem] font-semibold text-bd bg-transparent outline
          outline-bd rounded-xl">Next</button>
        </div>
      </div>
    </div>      
  );
}
export default Donation_history;
  