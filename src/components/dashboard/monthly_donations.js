import Dashboard_bottom_links from "./dashboard_bottom_links";
function Monthly_donations() {
  return (
    <div className="bg-[#f5f6f7] h-full w-full">
      <div className="portal__header mt-8 sm:mt-0 px-8 sm:px-16 h-28 flex items-center sm:border-bottom-light">
        <p className="portal-heading">Monthly Donations</p>
      </div>
      
      <div className="px-8 sm:p-16">
        <div className="bg-white rounded-2xl">          
          <div className="px-8 py-12 border-bottom-medium">
            <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-2">
              Manage your recurring donations for the cuses you support.
            </p>
          </div>

          <div className="px-8 py-12 border-bottom-medium">
            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings mb-8">Direct Debits</p>
            <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-2">
              You don’t have any active direct debits.
            </p>
          </div>

          <div className="px-8 py-12">
            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings mb-8">Recurring card payments</p>
            <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-2">
              You don’t have any active monthly donations.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-8 bottom-8 hidden sm:block ">
        < Dashboard_bottom_links />
      </div>
    </div>
  );
}
export default Monthly_donations;
  