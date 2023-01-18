import Toggle from "./toggle";
import Button from "./button";
import Input from "./input";
function Fundraising() {
  return (
    <>
    <div className="bg-white rounded-3xl p-8">
        <p className="portal-subheading mb-8">Active pages</p>
        <div className="flex space-x-4 items-start bg-primary-light px-10 py-8 rounded-xl mb-8">
          <img src="./Icons/blue-info-circle.svg"></img>
          <p className="text-[1.2rem] font-bold tracking-[-0.3px] text-primary">Raising money for a charity? Your donations are being sent to them automatically.</p>
        </div>
        <div className="flex justify-between">
          <div className="flex w-1/2 justify-start items-center">
            <div className="relative">
              <img src="./images/pakistan-floods.png"></img>
              <div className="bg-amber rounded-full w-8 h-8 absolute -right-2 top-[40%] flex justify-center items-center">
                <p className="text-[0.8rem] font-bold text-headings">Z</p>
              </div>
            </div>
            <div className="flex flex-col ml-8">
              <p className="text-[1.2rem] font-bold text-headings mt-4 mb-2">Pakistan Floods</p>
              <p className="text-[0.8rem] font-medium text-headings mb-4">Disaster & Emergency Appeals</p>
            
              <div className="flex space-x-8 relative">
                <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-[#999999]">Edit</button>
                <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-[#999999]">View</button>
                <div class="absolute top-1 left-4 w-0.5 h-4 bg-gray-600"></div>
              </div>
            </div>
          </div>

          <div className="flex w-1/2 justify-end items-center space-x-6">
            <div className="flex flex-col">
              <p className="text-[1.1rem] font-semibold tracking-[-0.17px] text-primary">Raised: £156<span className="text-green">/£634</span></p>
              <p className="flex space-x-2 text-[1.1rem] font-medium tracking-[-0.17px] text-[#999999]">
                <span>by</span>
                <img src="./Icons/user-circle.svg" className="w-5"></img>
                <span>117</span><span className="font-semibold">supporters</span>
              </p>
            </div>
            <img src="./Icons/loader-medium.svg" className="w-24"></img>
          </div>
        </div>      
    </div>
    <table className="w-full p-4 pt-0 border-2">
      <tr className="text-[0.9rem] font-medium tracking-[0px] text-[#bdbdbd] uppercase">
        <th width="25%" className="text-left py-4 border-bottom-light">Name</th>
        <th width="25%" className="text-left py-4 border-bottom-light">Country</th>
        <th width="20%" className="text-left py-4 border-bottom-light">Date</th>
        <th width="30%" className="text-left py-4 border-bottom-light">Amount</th>
      </tr>
      <tr className="text-[1.1rem] tracking-[-0.28px]">
        <td className="flex space-x-2 items-center py-4 border-bottom-light">
          <img src="./Icons/user-circle.svg"></img>
          <span className="font-semibold text-primary-dark">Ron Hill</span>
        </td>
        
        <td className="flex"><span className="font-medium text-headings py-4 border-bottom-light">Great Britain</span></td>

        <td className="flex space-x-2 items-center py-4 border-bottom-light">
          <img src="./Icons/calendar-clock.svg"></img>
          <span>Tue 12 Dec, 08:15</span>
        </td>
        <td className="flex space-x-2 items-center py-4 border-bottom-light">
          <span>£231.50</span>
          <img src="./Icons/eye.svg"></img>
        </td>        
      </tr>
    </table>
  </>       
  );
}
export default Fundraising;
  