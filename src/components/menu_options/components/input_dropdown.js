import React from "react";
function Input_dropdown(props) {
  const [showDropdown, setShowDropdown] = React.useState(false)

  return (  
    <div className="h-28 flex mt-6 mb-8 relative">
      <div className="relative w-[85%]">
        <input type="number" id="" className="h-full focus:outline-none focus:bg-white block border-l border-l-platinum border-y border-y-platinum rounded-l-xl px-20 w-full text-[4rem] font-bold tracking-[0px] text-primary" placeholder=" " />
        <label for="" className="absolute text-[2rem] font-medium tracking-[0px] text-[#7c7c7c] top-11 left-8">£</label>
      </div>
      <div className="relative border-r border-r-platinum border-y border-y-platinum rounded-r-xl w-[15%]">
        <button onClick={()=>setShowDropdown(current=> !current)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full h-full bg-white  text-[1.3rem] font-medium text-gray 
          tracking-[0px] px-4 inline-flex justify-between items-center  relative" type="button">
          <span className="text-[1.6rem] font-medium tracking-[0px] text-gray">GBP</span>
          <img src="./icons/drop-down-black.svg" alt="dropdown"></img>
          <div className="bg-platinum h-[4.75rem] w-px absolute right-40 top-5 z-10"></div>
        </button>
        {showDropdown ?
          <div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USD</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PKR</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pounds</a>
                </li>
              </ul>
          </div> : null}
      </div>

    </div>
  )
} 
export default Input_dropdown;