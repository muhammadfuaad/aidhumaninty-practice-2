import Button from "./dashboard/button";
function Take_off() {
  return (
    <div className="flex flex-col bg-primary-light px-8 py-12">
        <div className="flex justify-between space-x-8 mt-8">
          <img src="./Icons/rocket.svg"></img>
          <div className="flex flex-col space-y-4">
            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings">Ready for take-off?</p>
            <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-body">Share your page to get your first supporters.</p>
          </div>
        </div>
        <div className="flex space-between space-x-4 mt-8">
          <button className="w-1/2 py-6 uppercase text-[1.4rem] font-semibold text-primary bg-transparent outline outline-primary
      rounded-xl">Personalize</button>
          <button className="w-1/2 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
            Share
          </button>
        </div>
    </div>
  )
}
export default Take_off;