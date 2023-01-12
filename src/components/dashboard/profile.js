import Dashboard_bottom_links from "./dashboard_bottom_links";
function Profile() {
  return (
    <div className="bg-[#f5f6f7] h-full w-full">
      <div className="portal__header mt-8 sm:mt-0 px-8 sm:px-16 h-28 flex items-center sm:border-bottom-light">
        <p className="portal-heading">Profile</p>
      </div>
      <div className="px-8 sm:p-16">
        <div className="bg-white p-8 rounded-2xl">
          <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings">Info</p>
          <form className="flex justify-between">
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label for="html">Mr</label><br></br>
            <input type="radio" id="css" name="fav_language" value="CSS"></input>
            <label for="css">Mrs</label><br></br>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
            <label for="javascript">Miss</label>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
            <label for="javascript">Ms</label>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
            <label for="javascript">Other</label>
          </form> 
        </div>
      </div>
      <div className="absolute left-8 bottom-8 hidden sm:block ">
        < Dashboard_bottom_links />
      </div>
    </div>
  );
}
export default Profile;
  