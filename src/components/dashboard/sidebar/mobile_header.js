function Mobile_header() {
  return (
    <div className="bg-white flex justify-between items-center px-4 h-20 border-bottom-light">
      <a className="flex space-x-4">
        <img src="./Icons/angle-left.svg" className="w-3"></img>
        <span className="text-[1.8rem] font-bold tracking-[-0.27px] text-headings">Menu</span>
      </a>
    </div>
  )
}
export default Mobile_header;