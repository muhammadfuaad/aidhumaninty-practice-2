import Media from '../components/media';
import Contact_form from '../components/contact_form';
import Page_header from './page_header';
function Contact_page() {
  return (
    <section>
      <Page_header heading="Contact" />
      <div className="page">
      
        <div className="block">
          <p className="navigator">Home / Contact</p>
          <div className="flex page relative">
            <img className="absolute bottom-[120px] left-[100px]" src="/images/vectors/blue-circle-small.svg"></img>
            <img className="absolute top-[200px] left-[-120px]" src="/images/vectors/yellow-ring-small.svg"></img>
            <img className="absolute top-[100px] right-[-200px]" src="/images/vectors/yellow-ring-large.svg"></img>
            <div className="basis-1/2 flex flex-col space-y-8 page__content">
              <div className="flex flex-col space-y-8">
      
                <div>
                  <h1 className="page__heading">Contact</h1>
                  <h2 className="card__heading">Got a Question?</h2>
                  <p className="body__text">Aid Humanity is a thoughtful, caring community of like-minded
                   individuals ready to give back and make a difference. If you’d like to know more about
                   what we do, or have a question about how you can help, all you have to do is ask.
                  </p>
                </div>
      
                <Media />
      
                <div>
                  <h2 className="card__heading">Company Details</h2>
                  <p className="body__text">Aid Humanity, Unit 9, Twelve o’clock Court, Sheffield, S4 7WW</p>
                </div>
              </div>
            </div>
            <Contact_form />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact_page;