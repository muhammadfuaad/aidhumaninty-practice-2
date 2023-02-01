function Amount(props) {
  return (  
    <ul className="flex text-[1.3rem] font-medium tracking-[0px] text-black h-20 rounded-xl border border-[#bdbdbd]">
      <li className="px-8 py-7 bg-white hover:bg-primary border-r border-[#bdbdbd] rounded-l-xl">£5</li>
      <li className="px-8 py-7 bg-white hover:bg-primary border-r border-[#bdbdbd]">£10</li>
      <li className="px-8 py-7 bg-white hover:bg-primary border-r border-[#bdbdbd]">£20</li>
      <li className="px-8 py-7 bg-white hover:bg-primary rounded-r-xl">£50</li>
    </ul> 
  )
} 
export default Amount;