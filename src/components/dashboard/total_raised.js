function Total_raised() {
  return (
    <div className="bg-primary px-8 py-10 rounded-3xl flex flex-col">
      <div className="flex justify-between items-start">
        <span className="text-[3rem] font-bold tracking-[-0.75px] text-headings">Total raised</span>
        <img src="./Icons/plus-circle.svg"></img>
      </div>
      <span className="text-[2.4rem] font-semibold tracking-[-0.6px] text-headings">£4.342</span>
      <div className="mt-8 flex space-x-2">
        <img src="./Icons/arrow-top.svg"></img>
        <span className="text-[1.2rem] font-semibold tracking-[-0.18px] text-[#fff]">3.21%</span>
      </div>
      <span className="text-[1rem] font-normal tracking-[-0.18px] text-[#fff]">Than last month</span>
    </div>
  );
}
export default Total_raised;