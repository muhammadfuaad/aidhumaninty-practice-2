function Donation_type_card() {
  return (
    <div className="p-10 bg-white rounded-3xl flex flex-col border-2 border-green relative">
      <div className="flex justify-between items-start gap-4">
        <p className="text-[1.2rem] font-semibold tracking-[-0.18px] text-black">Sponsor a child for one year</p>
        <p className="text-[1.2rem] font-bold tracking-[-0.18px] text-black">£360.00</p>
      </div>
      <div className="flex justify-between items-start gap-4">
        <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-[#999] uppercase">MOST NEEDED, DONATION</p>
        <img src="./icons/red-cross.svg"></img>
      </div>
      <div className="bg-green absolute -top-6 left-8 px-8 py-4 rounded-xl">
        <p className="text-[1rem] font-bold tracking-[0.15px] text-white">Single</p>
      </div>
    </div>
  )
}
export default Donation_type_card;