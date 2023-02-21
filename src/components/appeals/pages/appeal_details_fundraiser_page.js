import Fundraiser from "../../icons/fundraiser-hand.svg"
import Appeal_details_donator_page from "./appeal_details_donator_page";
import Fundraisers from './../fundraisers';
function Appeal_details_fundraiser_page() {
  return (
    <Appeal_details_donator_page fundraiser_details=
      <div>
        <div className="p-8 rounded-3xl border border-primary bg-primary-light mt-8">
          <div className="flex gap-8">
            <img src={Fundraiser}></img>
            <div className="flex flex-col gap-2">
              <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">Be a Fundraiser</p>
              <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Create your own appeal page for “Water for All” and help support this cause.</p>
            </div>
        
          </div>
          <button className="mt-8 w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-primary rounded-xl">
            Start Fundraising
          </button>
        </div>
        <div className="flex flex-col rounded-3xl bg-white mt-8">
          <div className="flex justify-between p-8 border-b border-[#999] text-[1.6rem] tracking-[-0.4px] text-black">
            <p className="font-bold">Fundraisers</p>
            <p className="font-medium">175</p>
          </div>
          <Fundraisers name="Matt Watson" time="17 hours ago" amount="£60.00" gift_aid="+ £15.00 Gift Aid" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."/>
          <Fundraisers name="Frederic Johannson" time="2 days ago" amount="£20.00"/>
          <Fundraisers name="Anonymous" time="17 hours ago" amount="£60.00" />
          <Fundraisers name="Benjamin Russow" time="17 hours ago" amount="£60.00" />
          <p className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark mb-3 self-center">Show more</p>
        </div>
      </div>
    />
  )
}
export default Appeal_details_fundraiser_page;