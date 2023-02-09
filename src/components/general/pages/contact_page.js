
import Contact_form from '../components/contact_form';
import Page_header from "../components/page_header";
import Media from './../../media';
function Contact_page() {
  return (
    <section>
      <Page_header heading="Contact" display_icon="hidden" />
      <div className="flex flex-col mb-44">
        <div className="pl-64 mb-40">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Contact</p>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col mt-12 w-1/2">
                <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-16">Contact</p>
                <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-16">Got a Question?</p>
                <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] mb-24">Aid Humanity is a thoughtful, caring community of like-minded individuals ready to give back and make a difference. If you’d like to know more about what we do, or have a question about how you can help, all you have to do is ask.</p>
                
              </div>
            </div>     
          </div>
        </div>
        
        
      </div>
    </section>
  );
}
export default Contact_page;