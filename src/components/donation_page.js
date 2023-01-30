import Page_sidebar from './page_sidebar';
import Assistance from './assistance';
import Page_header from './page_header';
function Donation_page() {
  return (
    <section>
      <Page_header heading="Help Center" />
      <div className="page">
        <div className="block">
          <p className="navigator">Home / Help Center / Donation Policy</p>
          <div className="flex page relative">
            <div className="basis-1/2 flex flex-col space-y-8 pb-[100px]">
              <div className="flex flex-col space-y-8">
                <div>
                  <h1 className="page__heading">Donation Policy</h1>
                  <div className="page__content">
                    <p>
                      Aid Humanity understands the importance of your donation; the responsibility and 
                      accountability it brings. We pride ourselves on being completely transparent and 
                      aim to provide you with feedback from the moment you donate until we have carried
                      out the work you have donated towards.
                    </p>
                    <p>
                      When donating via the website or via bank transfer, please indicate the charitable
                      aim(s) you wish your donation to be applied to, we treat these donations as 
                      restricted funds. If any funds are not referenced, the trustees may use those donations
                      for any project at their discretion. If we collect insufficient funds to complete
                      the charitable works for which you have donated, the trustees will use their discretion
                      to move additional funds from general funds to complete the project.
                    </p>
                    <p>
                      If the charitable need for which we have collected for no longer exists or has been
                      completed, then the trustees will use their discretion to ascertain the intention of
                      the donors and any surplus funds would be allocated towards another appropriat
                      similar project.
                    </p>
                    <p>
                      We can also collect and correctly apply donations by Islamic categories,
                      like Fidya, Kaffarah, Zakat, these are restricted by Shariah criteria, in which 
                      the trustees will select the country based on overall considerations.
                    </p>
                    <p>
                      <span className="font-semibold"></span>100% Donations Policy<br></br> (Excluding Gift Aid and specified donations 
                      for administration)
                    </p>
                    <p>
                      All the charity’s administrative costs are covered by:<br></br> Donations specified 
                      for administration and from recycled clothing. The charity has a separate account for its 
                      administration fund to ensure the 100% donations policy is maintained. Tax reclaimed 
                      from your donation (where specified) from the UK government’s Gift Aid scheme. This allows 
                      taxpayers to increase the value of their donation by 25%. This additional money is 
                      allocated to the charity’s administration fund.  
                    </p>               
                  </div>
                  <Assistance />
                </div>
              </div>
            </div>
            <div className="relative min-w-full">
              <Page_sidebar />
              <img src="./icons/footer-background-logo.svg" className="absolute right-[-150px] bottom-[600px]"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Donation_page;