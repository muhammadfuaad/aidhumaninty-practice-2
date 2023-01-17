import Progress_bar from "./progress_bar";
function Badge_bronze() {
  return (
    <div className="bg-[#777] flex justify-center items-center h-screen">
      <div className="bg-light-gray w-[32rem] rounded-3xl">
        <div className="flex flex-col p-8 border-bottom-medium relative">
          <div className="absolute -bottom-20 right-12">
            <img src="./Icons/badge-bronze.svg"></img>
            <p className="text-[0.9rem] font-semibold tracking-[-0.23px] text-headings uppercase mt-2 text-center">Bronze</p>
          </div>
          <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings mb-1">Ron Hill</p>
          <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-headings">Great Britain</p>
        </div>
        <div className="p-12 bg-white rounded-3xl">
          <div className="flex flex-col">
            <p className="text-[0.9rem] font-medium tracking-[0px] text-[#bdbdbd] uppercase">Amount</p>
            <p className="text-[2rem] font-semibold tracking-[-0.5px] text-primary mb-2">£231.50</p>
            <p className="text-[0.9rem] font-medium tracking-[0px] text-[#bdbdbd] uppercase mb-2">For Appeal</p>  
            <div className="flex justify-between">
              <p className="text-[1.2rem] font-bold tracking-[-0.3px] text-headings">Water Hands Pumps Uganda</p>
              <div className="bg-amber rounded-full w-8 h-8 flex justify-center items-center">
                <p className="text-[1rem] font-[800] text-headings">Z</p>
              </div>
            </div>
            <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#bdbdbd] mb-2">Water for All</p>
            < Progress_bar progress='10' />
            <div className="flex space-x-2 items-center mt-8">
              <img src="./Icons/calendar-clock.svg"></img>
              <p className="text-[1.1rem] font-medium tracking-[-0.28px] text-headings">Tue 12 Dec, 08:15</p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
export default Badge_bronze;