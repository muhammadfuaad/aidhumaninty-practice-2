import Page_header from './page_header';
function Congratulations_page() {
  return (
    
    <section>
      <Page_header heading="Congratulations" />
      <div className='bg-[#f9f9f9] pt-12 pb-52'>
        <div className='greetings'>
          <div className='circle my-6'><img src='./Icons/logo-without-text.svg'></img></div>
          <div className='text'>
            <p className="highlights font-semibold mb-5">You’ve madde a significant difference to people in need and played a major part in
              making the world a better place.
            </p>
            <p>
              Please continue to spread the word about this appeal, and take a moment to check your summary below.
            </p>
          </div>
          <div className='card fund-list'>
            <ul className='list'>
              <li className='list__item'><span>Rescue a street child</span><span className='amount'>£360.00</span></li>
              <li className='list__item'><span>Food pack for a family</span><span className='amount'>£50.00</span></li>
              <li className='list__item'>
                <div className='flex space-x-4 items-center'>
                  <img src="./Icons/gift.svg"></img> 
                  <span className='font-bold py-3 tracking-[-0.35px]'>Gift Aid</span>
                </div>
                <span className='amount'>£360.00</span>
              </li>
              <li className='list__item'><span className='font-semibold'>TOTAL</span><span className='amount'>£360.00</span></li>
            </ul>
          </div>
        </div>
      
      </div>
    </section>
  );
}
export default Congratulations_page;