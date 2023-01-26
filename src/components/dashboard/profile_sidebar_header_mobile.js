function Profile_sidebar_header_mobile() {
  return (
    <div className="flex justify-between items-center px-4 h-20 border-bottom-light">
      <a className="flex space-x-4">
        <img src="./Icons/angle-left.svg" className="w-3"></img>
        <span className="text-[1.8rem] font-bold tracking-[-0.27px] text-headings">Menu</span>
      </a>
      <div className="flex justify-between space-x-10 relative">
        <a href="#" className="flex space-x-2 items-center"><img src="./Icons/logout.svg" className="w-6" alt=""></img><span className="text-[1.3rem] font-medium tracking-[-0.2px] text-headings">Log Out</span></a>
      </div>
    </div>
  )
  
}
export default Profile_sidebar_header_mobile;