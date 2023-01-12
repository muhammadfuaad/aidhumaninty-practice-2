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
                <div class="flex items-center space-x-4">
                  <input id="mrs" type="radio" value="" name="status" class="w-4 h-4 text-[#7c7c7c] bg-gray-100 border-gray-300 focus:ring-[#7c7c7c] focus:ring-2"></input>
                  <label for="mrs" class="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Mrs</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input id="miss" type="radio" value="" name="status" class="w-4 h-4 text-[#7c7c7c] bg-gray-100 border-gray-300 focus:ring-[#7c7c7c] focus:ring-2"></input>
                  <label for="miss" class="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Miss</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input id="ms" type="radio" value="" name="status" class="w-4 h-4 text-[#7c7c7c] bg-gray-100 border-gray-300 focus:ring-[#7c7c7c] focus:ring-2"></input>
                  <label for="ms" class="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Ms</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input id="other" type="radio" value="" name="status" class="w-4 h-4 text-[#7c7c7c] bg-gray-100 border-gray-300 focus:ring-[#7c7c7c] focus:ring-2"></input>
                  <label for="other" class="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Other</label>
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

          <div className="p-8 border-bottom-medium">
            <p className="portal-subheading mb-8">Address</p>
            
            
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black border-light font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Dropdown button <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
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
  