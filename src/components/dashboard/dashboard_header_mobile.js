function Dashboard_header_mobile() {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-4">
        <img src="./Icons/dashboard-sidebar-toggler.svg"></img>
        <img src="./Icons/dashboard-sidebar-logo.svg"></img>
      </div>

      <div className="flex space-x-4">
        <img src="./Icons/plus-circle.svg"></img>
        <img src="./Icons/user-circle.svg"></img>
      </div>
    </div>
  );
}
export default Dashboard_header_mobile;