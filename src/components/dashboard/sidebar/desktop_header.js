function Desktop_header() {
  return (
    <div className="hidden sm:flex justify-between items-center px-8 h-28 border-bottom-light">
      <a href="#"><img src="./Icons/dashboard-sidebar-logo.svg" className="w-60"></img></a>
      <a href="#"><img src="./Icons/dashboard-sidebar-toggler.svg" className="w-6"></img></a>
    </div>
  );
}
export default Desktop_header;