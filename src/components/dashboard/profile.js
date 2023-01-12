import Dashboard_bottom_links from "./dashboard_bottom_links";
function Profile() {
  return (
    <div className="bg-[#f5f6f7] h-full w-full">
      <div className="portal__header mt-8 sm:mt-0 px-8 sm:px-16 h-28 flex items-center sm:border-bottom-light">
        <p className="portal-heading">Profile</p>
      </div>
      <div className="px-8 sm:p-16">
        <div className="bg-white rounded-2xl">
          
          <div className="p-8 border-bottom-medium">
            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings mb-8">Info</p>
            <div className="flex flex-col space-y-8">
              <form className="flex space-x-16">
              <div class="flex items-center space-x-4">
                  <input id="mr" type="radio" value="" name="status" class="w-4 h-4 text-[#7c7c7c] bg-gray-100 border-gray-300 focus:ring-[#7c7c7c] focus:ring-2"></input>
                  <label for="mr" class="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Mr</label>
              </div>


                <div className="flex space-x-6">
                  <input type="radio" id="html" name="fav_language" value="HTML"></input>
                  <label for="html">Mr</label>
                </div>
                <div className="flex space-x-6">
                  <input type="radio" id="html" name="fav_language" value="HTML"></input>
                  <label for="html">Mr</label>
                </div>
                <div className="flex space-x-6">
                  <input type="radio" id="html" name="fav_language" value="HTML"></input>
                  <label for="html">Mr</label>
                </div>
                <div className="flex space-x-6">
                  <input type="radio" id="html" name="fav_language" value="HTML"></input>
                  <label for="html">Mr</label>
                </div>
                <div className="flex space-x-6">
                  <input type="radio" id="html" name="fav_language" value="HTML"></input>
                  <label for="html">Mr</label>
                </div>
              </form>
              <div className="flex space-x-4">
                <div class="relative w-1/2">
                  <input type="text" id="first-name" className="block border-light rounded-xl px-2.5 pb-2.5 pt-5 w-full text-[1.3rem] font-medium text-headings tracking-[0px] peer" placeholder=" " />
                  <label for="first-name" className="absolute text-[1.1rem] font-semimedium text-[#7c7c7c] tracking-[0px] duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#7c7c7c] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First Name</label>
                </div>
                <div class="relative w-1/2">
                  <input type="text" id="last-name" className="block border-light rounded-xl px-2.5 pb-2.5 pt-5 w-full text-[1.4rem] text-gray-900 bg-gray-50 dark:bg-gray-700 peer" placeholder=" " />
                  <label for="last-name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#7c7c7c] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last Name</label>
                </div>
              </div>
            </div>
          </div> 
          <div className="p-8 border-bottom-medium">
            <p className="portal-subheading mb-8">Email</p>
            <div class="relative">
              <input type="text" id="email" className="block border-light rounded-xl px-2.5 pb-2.5 pt-5 w-full text-[1.4rem] text-gray-900 bg-gray-50 dark:bg-gray-700 peer" placeholder=" " />
              <label for="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#7c7c7c] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Floating filled</label>
            </div>
          </div>
        </div>

        
      </div>
      <div className="absolute left-8 bottom-8 hidden sm:block ">
        < Dashboard_bottom_links />
      </div>
    </div>
  );
}
export default Profile;
  