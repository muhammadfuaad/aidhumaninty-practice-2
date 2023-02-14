import Page_header from "../components/page_header";
import Page_sidebar from "../components/page_sidebar";
import Assistance from "../components/assistance";
import Generic_header from "../../Generic_header";
import Footer from "../../footer";

function Layout_page(props) {
  return (
    <section>
      < Header />
      <Page_header heading={props.banner_heading} icon={props.icon} />
      <div className="px-64">
        {props.navigator}
        <div className="flex">
          <div className="w-[80%] flex flex-col pb-[100px]">
            <div>
              <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-12">{props.heading}</p>
              {props.content}
              <div className="mt-20">
                <div className="{props.assistance}">
                  <Assistance />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-1/5 ml-32">
            <Page_sidebar />
            <img src="./icons/footer-background-logo.svg" className="absolute right-[-150px] bottom-[600px]"></img>
            <div className="h-[50rem] w-[1px] bg-[#e6e6e6] absolute -left-16 top-0"></div>
          </div>
        </div>
      </div>
      < Footer />
    </section>
  );
}
export default Layout_page;