
function Appeal_cancel() {
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen pb-40">

      <div className="flex justify-between items-center bg-white px-4 h-28 border-bottom-light">
        <a className="flex space-x-4">
          <img src="./Icons/angle-left.svg" className="w-3"></img>
          <span className="text-[1.8rem] font-bold tracking-[-0.27px] text-headings">Cancel page</span>
        </a>      
      </div>

      <div className='px-8'>
        <p className="text-[1.6rem] font-normal traking-[-0.4px] text-body mt-16 mb-96">Your are about to cancel the page “Water Hands Pumps”</p>
        <button class="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#999999] bg-transparent outline
        outline-[#999999] rounded-xl">No, Keep My Page</button>
        <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-headings bg-green rounded-xl mt-8">
          Yes, Cancel My Page
        </button>
      </div>
    </div>
  )
}
export default Appeal_cancel;