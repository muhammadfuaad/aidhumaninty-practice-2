import Radio from "./radio"
function Profile() {
  return (
    <div className="bg-white rounded-2xl">          
      <div className="p-8 border-bottom-medium">
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-headings mb-8">Info</p>
        <div className="flex flex-col space-y-8">
          <form className="flex space-x-12">
            < Radio marital_status="Mr" />
            < Radio marital_status="Mrs" />
            < Radio marital_status="Miss" />
            < Radio marital_status="Ms" />
            < Radio marital_status="Other" />
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
        <div className="flex flex-col space-y-8">
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-[#7c7c7c]
          tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
            <span>United Kingdom</span>
            <img src="./Icons/drop-down.svg" alt="dropdown"></img>
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

          <div className="flex space-x-4">
            <div class="relative w-1/2">
              <input type="text" id="line-1" className="focus:border-none block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
              <label for="line-1" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">Address Line 1</label>
            </div>
            <div class="relative w-1/2">
              <input type="text" id="line-2" className="block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
              <label for="line-2" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">Address Line 2</label>
            </div>
          </div>

          <div className="flex space-x-4">
            <div class="relative w-2/3">
              <input type="text" id="town" className="focus:border-none block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
              <label for="town" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">Town</label>
            </div>

            <div class="relative w-1/3">
              <input type="text" id="zip" className="block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
              <label for="zip" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">ZIP/Postal</label>
            </div>
          </div>
          <button className="self-start px-20 py-6 uppercase text-[1.4rem] font-semibold text-headings bg-green rounded-xl">Save Changes</button>
        </div>
      </div>          
    </div>  
  );
}
export default Profile;