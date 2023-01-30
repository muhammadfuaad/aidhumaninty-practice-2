
function Appeal_desktop_header() {
  return (
    <div className="flex justify-between bg-white pl-56 pr-36 py-8">
      <div className="flex items-center">
        <img src="./icons/dashboard-sidebar-logo.svg" className="mr-8"></img>
        <img src="./icons/dashboard-sidebar-toggler.svg" className="mr-12"></img>
        <button className="flex space-x-4 items-center bg-primary-dark rounded-2xl py-4 px-6 h-fit">
          <img src="./icons/blue-plus.svg" className="w-4"></img>
          <span className="text-white text-[1.4rem] font-semibold uppercase">New Appeal</span>
        </button>
      </div>

      <div>
        <div className="flex space-x-8">
          <a className="flex space-x-2">
            <span>En</span>
            <img src="./icons/drop-down.svg"></img>
          </a>
          <a><img src="./icons/user-circle.svg"></img></a>
        </div>
      </div>

    </div>
  )
}
export default Appeal_desktop_header;