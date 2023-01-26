function Dashboard_sidebar_footer_mobile() {
  return (
    <ul className="flex flex-col space-y-4 text-[1rem] font-regular tracking-[0.05px] text-[#999999] my-8">
      <div className="flex">
        <li className="px-6 border-r-2"><a>Terms & Conditions</a></li>
        <li className="px-6"><a>Privacy Policy</a></li>
      </div>
      <div className="flex">
        <li className="px-6 border-r-2"><a>Donations Policy</a></li>
        <li className="px-6"><a>Refund Policy</a></li>
      </div>
    </ul>
  );
}
export default Dashboard_sidebar_footer_mobile;