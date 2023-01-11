function Zakat() {
  return (
    <div className="bg-amber px-8 py-10 rounded-3xl flex flex-col">
      <div className="flex justify-between items-start">
        <span className="text-[3rem] font-bold tracking-[-0.75px] text-headings">Zakat</span>
        <div>
          <div className="flex flex-col justify-center">
            <span className="text-[2rem] font-semibold text-headings">234  :</span>
            <span className="text-[1rem] font-semibold tracking-[-0.25px] text-headings">days</span>
          </div>
        </div>
        
      </div>
      <div className="flex justify-between mt-6">
        <span className="text-[2.4rem] font-semibold tracking-[-0.6px] text-headings">£4.342</span>
        <button className="px-8 py-4 text-[1.4rem] font-semibold text-[#bdbdbd] bg-headings rounded-lg">Reset</button>
      </div>
    </div>
  );
}
export default Zakat;