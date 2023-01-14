function Donor_details({donor_name, location, appeal, category, amount, date}) {
  return (
    <div className="p-8 bg-[#f9f9f9] rounded-3xl">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <img src="./Icons/user-circle.svg" className=""></img>
          <p className="text-[1.5rem] font-semibold tracking-[-0.38px] text-primary-dark">{donor_name}</p>
        </div>
        <div className="flex space-x-8 items-center">
          <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-headings">From 
          <span className="font-semibold"> {location}</span></p>
          <div className="flex space-x-1 items-center">
            <img src="./Icons/calendar-clock.svg"></img>
            <span className="text-[1.1rem] font-medium tracking-[-0.28px] text-headings whitespace-nowrap">{date}</span>
          </div>

        </div>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-[1.2rem] font-bold tracking-[-0.3px] text-headings">{appeal}</p>
        <img src="./Icons/eye.svg"></img>
      </div>
      <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#bdbdbd]">{category}</p>

      <div className="flex justify-between mt-2">
        <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-primary">{amount}</p>
        <div className="flex space-x-8 relative">
          <div class="absolute top-2 left-20 w-0.5 h-4 bg-gray-600"></div>
          <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-[#999999]">Edit</button>
          <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-[#999999]">View</button>
        </div>
      </div>
    </div>
  );
}
export default Donor_details;