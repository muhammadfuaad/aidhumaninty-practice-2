import Toggle from "../../dashboard/toggle";
import Header from "../../header";
import Footer from "../../footer";
import Radio_component from "../components/radio_component";
import Appeal_title from "../components/appeal_title";
import Mosque from "../../icons/mosque.svg";
import Water_drop from "../../icons/water-drop.svg";
import Hunger_appeal from "../../icons/hunger-appeal.svg";
import Emergency from "../../icons/emergency.svg";
import Sponsor_orphan from "../../icons/sponsor-orphan.svg";
import Appeal_card from "../components/appeal_card";
import Appeals_list from "../components/appeals_list";



function Appeals_index_page() {
  return (
    <section className="overflow-hidden">
      < Header />
      <div className="flex flex-col px-64 bg-[#f9f9f9]">
        <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Appeals</p>
        <div className="flex justify-between">
          <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-12">Appeals</p>
          <div className="flex gap-4 items-center">
            <Radio_component label="All" />
            <Radio_component label="Zakat" />
            <Radio_component label="Sadaqah" />
            <Radio_component label="Sadaqah Jariyah" />
            <Radio_component label="Our fundraiser" />
          </div>
        </div>

        <div className="flex justify-between gap-4 pb-16 border-b-2 border-[#e6e6e6]">
          <a href="#" className="rounded-2xl bg-[#f1f1f1] hover:bg-white hover:border-2 hover:border-primary p-8 flex items-center">
            <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">All</p>
          </a>
          <Appeal_title img={Mosque} label="Build a Mosque" />
          <Appeal_title img={Emergency} label="Disaster & Emergency Appeals" />
          <Appeal_title img={Water_drop} label="Water for all" />
          <Appeal_title img={Sponsor_orphan} label="Sponsor an Orphan" />
          <Appeal_title img={Hunger_appeal} label="Hunger Appeal" />
        </div>   

        <div className="mt-16">
          <Appeals_list />  
        </div>  
        <button class="px-12 py-6 self-center mt-24 mb-32 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
            outline-[#999999] rounded-xl">Load More</button>   
      </div>
      < Footer />
    </section>
  );
}
export default Appeals_index_page;