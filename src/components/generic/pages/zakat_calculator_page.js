import Page_header from "../components/page_header";
import Page_sidebar from "../components/page_sidebar";
import Assistance from "../components/assistance";
import Generic_header from "../../generic_header";
import Footer from "../../footer";
import Logo from "../../icons/footer-background-logo.svg";
import Zakat_calculator from "../components/zakat_calculator";
import Scholar_verified from './../components/scholar_verified';

function Zakat_calculator_page(props) {
  return (
    <section>
      < Generic_header />
      <Page_header heading="Zakat Calculator" icon="hidden" />
      <div className="px-64">
      <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Zakat Calculator</p>
        <div className="flex">
          <div className="w-[80%] flex flex-col pb-[100px]">
            <div className="flex flex-col gap-10">
              <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-12">Zakat Calculator</p>
              
              <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">Simplifying your Zakat calculation</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]">Calculating your Zakat isn’t as difficult as you may think. We find that breaking your assets down into different categories makes the Zakat calculation process really simple.</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]"> We have broken down the calculation process into Zakatable assets (gold, silver, cash, savings, business assets etc.) and Deductible liabilities (money you owe, other outgoings due) so you can calculate the Zakat you owe easily.</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]"> The amount of Zakat you need to pay will be determined once you have calculated the value of your net assets. You then need to see whether your net assets are equal to, or exceed, the <span className="font-semibold text-primary">Nisab</span> threshold.</p>

              <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">Using the Zakat calculator</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]">Enter all assets that have been in your possession over a lunar year into the Zakat calculator. This will then give you the total amount of Zakat owed.</p>
              <p></p>

              <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">Zakat Scholar: Providing specialist advice</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]">We understand that calculating your Zakat can be daunting, and even confusing. Therefore, we work with a dedicated <span className="font-semibold text-primary">Zakat scholar</span> during Ramadan to provide a specialised advice service. This service allows you to speak directly to a learned scholar via email or telephone.</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]"> Please note: the Zakat scholar is only available <span className="font-semibold">during Ramadan from 3 to 8pm (Monday to Friday only)</span>. The scholar can therefore only call back during these time periods.</p>

              <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">What is Nisab?</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]">The <span className="font-semibold text-primary">nisab</span> is the minimum amount of wealth a Muslim must possess before they become eligible to pay Zakat. This amount is often referred to as the nisab threshold.</p>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]"> Gold and silver are the two values used to calculate the nisab threshold. Therefore the nisab is the value of 87.48 grams of gold or 612.36 grams of silver.</p>

              <p className="text-[2.4rem] font-bold tracking-[-0.6px] text-black">Current Nisab threshold (as of 06/04/2022):</p>
              <ul className="marker:text-primary list-outisde list-disc ml-8">
                <li>Using value of silver (612.36 grams) – approximately £366.80</li>
                <li> Using value of gold (87.48 grams) – approximately £4,139.55</li>
              </ul>
              <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem]">Visit our Zakat page for an extensive list of <span className="font-semibold text-primary">Zakat FAQs</span>. You can also watch this <span className="font-semibold text-primary">YouTube video series</span> where scholars answer Zakat related questions.</p>
              <Scholar_verified />             
            </div>
          </div>
          <div className="relative w-1/5 ml-32">
            <Zakat_calculator />
            <img src={Logo} className="absolute right-[-150px] bottom-[600px]"></img>
          </div>
        </div>
      </div>
      < Footer />
    </section>
  );
}
export default Zakat_calculator_page;