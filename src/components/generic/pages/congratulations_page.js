import Page_header from "../components/page_header";
import Generic_header from "../../generic_header";
import Footer from "../../footer";

function Congratulations_page() {
  return (
    
    <section>
      < Generic_header />
      <Page_header heading="Congratulations" icon="hidden" />
      <div className='bg-[#f9f9f9] pt-12 pb-52'>
        <div className='w-1/2 mx-auto bg-white p-12 rounded-3xl'>
          <div className='h-72 w-72 rounded-full my-6 bg-[#999] flex justify-center items-center mx-auto'><img src='/icons/logo-without-text.svg' className="w-24"></img></div>
            <div className='w-[70%] mx-auto text-[1.8rem] font-normal tracking-[-0.45px] text-black text-center '>
              <p className="font-semibold text-primary mb-6">You’ve madde a significant difference to people in need and played a major part in
                making the world a better place.
              </p>
              <p className="mb-6">
                Please continue to spread the word about this appeal, and take a moment to check your summary below.
              </p>
            </div>
          <div className=''>
            <ul className='bg-[#f9f9f9] rounded-3xl px-12 py-4 text-[1.4rem] font-medium tracking-[-0.21px] text-black'>
              <li className='py-6 border-b border-platinum flex justify-between items-center'><span>Rescue a street child</span><span className='font-bold'>£360.00</span></li>
              <li className='py-6 border-b border-platinum flex justify-between items-center'><span>Food pack for a family</span><span className='font-bold'>£50.00</span></li>
              <li className='py-6 border-b border-[#bdbdbd] flex justify-between items-center'>
                <div className='flex space-x-4 items-center'>
                  <img src="/icons/gift.svg"></img> 
                  <span className='font-bold py-3 tracking-[-0.35px]'>Gift Aid</span>
                </div>
                <span className='font-bold'>£360.00</span>
              </li>
              <li className='py-6 flex justify-between items-center'><span className='font-semibold tracking-[0px]'>TOTAL</span><span className='text-[1.8rem] font-bold tracking-[-0.27px]'>£360.00</span></li>
            </ul>
          </div>
        </div>
        
      </div>
      < Footer />
    </section>
  );
}
export default Congratulations_page;