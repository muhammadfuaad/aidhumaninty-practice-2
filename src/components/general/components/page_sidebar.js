function Page_sidebar() {
  return (
    <div className="sidebar">
      <p className="sidebar__heading">Related Articles</p>
      <ul className="sidebar__list">
        <li><a className="sidebar__links">Terms & Conditions</a></li>
        <li><a className="sidebar__links">Privacy Policy</a></li>
        <li><a className="sidebar__links">Donation Policy</a></li>
        <li><a className="sidebar__links">Refund Policy</a></li>
      </ul>
    </div>
  );
}
export default Page_sidebar;