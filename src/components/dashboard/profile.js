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
              <form className="flex space-x-12">
                <label className="relative inline-flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="mr" name="status" className="sr-only peer"></input>
                  <div className="w-6 h-6 rounded-full border-2 border-[#e6e6e6] peer peer-checked:after:bg-[#7c7c7c]
                    after:content-[''] after:absolute  after:top-2 after:left-2 after:bg-[#e6e6e6] after:rounded-full after:h-2 after:w-2
                    after:transition-all after:duration-500 peer-checked:border-body">
                  </div>
                  <span className="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Mr</span>
                </label>
                <label className="relative inline-flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="mrs" name="status" className="sr-only peer"></input>
                  <div className="w-6 h-6 rounded-full border-2 border-[#e6e6e6] peer peer-checked:after:bg-[#7c7c7c]
                    after:content-[''] after:absolute  after:top-2 after:left-2 after:bg-[#e6e6e6] after:rounded-full after:h-2 after:w-2
                    after:transition-all after:duration-500 peer-checked:border-body">
                  </div>
                  <span className="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Mrs</span>
                </label>
                <label className="relative inline-flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="miss" name="status" className="sr-only peer"></input>
                  <div className="w-6 h-6 rounded-full border-2 border-[#e6e6e6] peer peer-checked:after:bg-[#7c7c7c]
                    after:content-[''] after:absolute  after:top-2 after:left-2 after:bg-[#e6e6e6] after:rounded-full after:h-2 after:w-2
                    after:transition-all after:duration-500 peer-checked:border-body">
                  </div>
                  <span className="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Miss</span>
                </label>
                <label className="relative inline-flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="ms" name="status" className="sr-only peer"></input>
                  <div className="w-6 h-6 rounded-full border-2 border-[#e6e6e6] peer peer-checked:after:bg-[#7c7c7c]
                    after:content-[''] after:absolute  after:top-2 after:left-2 after:bg-[#e6e6e6] after:rounded-full after:h-2 after:w-2
                    after:transition-all after:duration-500 peer-checked:border-body">
                  </div>
                  <span className="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Ms</span>
                </label>
                <label className="relative inline-flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="other" name="status" className="sr-only peer"></input>
                  <div className="w-6 h-6 rounded-full border-2 border-[#e6e6e6] peer peer-checked:after:bg-[#7c7c7c]
                    after:content-[''] after:absolute  after:top-2 after:left-2 after:bg-[#e6e6e6] after:rounded-full after:h-2 after:w-2
                    after:transition-all after:duration-500 peer-checked:border-body">
                  </div>
                  <span className="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Other</span>
                </label>
              </form>
              
              <div className="flex space-x-4">
                <div class="relative w-1/2">
                  <input type="text" id="first-name" className="focus:border-none block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
                  <label for="first-name" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">First Name</label>
                </div>

                <div class="relative w-1/2">
                  <input type="text" id="last-name" className="block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
                  <label for="last-name" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">Last Name</label>
                </div>           
              </div>
            </div>
          </div> 
          <div className="p-8 border-bottom-medium">
            <p className="portal-subheading mb-8">Email</p>
            <div class="relative">
              <input type="text" id="email" className="block border-light rounded-xl px-4 py-5 w-full placeholder:text-[1.3rem] 
              placeholder:font-medium placeholder:text-[#7c7c7c] placeholder:tracking-[0px] text-[1.3rem] font-medium text-headings 
              tracking-[0px]" placeholder="Email" />
            </div>
          </div>

          <div className="p-8">
            <p className="portal-subheading mb-8">Address</p>
            
            
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-[#7c7c7c] 
            tracking-[0px] px-4 py-5 inline-flex items-center border-light rounded-xl" type="button">United Kingdom <svg class="w-4 h-4 ml-2" 
            aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
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

            <div className="flex space-x-4 mt-8">
              <div class="relative w-1/2">
                <input type="text" id="line-1" className="focus:border-none block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
                <label for="line-1" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">Address Line 1</label>
              </div>

              <div class="relative w-1/2">
                <input type="text" id="line-2" className="block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
                <label for="line-2" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">Address Line 2</label>
              </div>           
            </div>

            <div className="flex space-x-4 mt-8">
              <div class="relative w-2/3">
                <input type="text" id="town" className="focus:border-none block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
                <label for="town" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">Town</label>
              </div>

              <div class="relative w-1/3">
                <input type="text" id="zip" className="block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
                <label for="zip" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">ZIP/Postal</label>
              </div>           
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
  