<div>
  <p className="text-[1rem] font-normal tracking-[-0.25px] text-[#999]"></p>
  {/* outline-button */}
  <button class="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#999999] bg-transparent outline
            outline-[#999999] rounded-xl">Edit Your Page</button>

  {/* background-button */}
  <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
              Add Donation
            </button>
  
  {/* outline-button with icon */}
  <button class="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#999999] bg-transparent outline 
              outline-[#999999] rounded-xl flex justify-center space-x-4">
              <img src="./icons/share-icon.svg"></img>
              <span>Share</span>
            </button>

  {/* background-button with icon */}
  <button className='w-full py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl 
              flex space-x-4 justify-center'>
              <img src="./icons/arrow-top.svg"></img>
              <span>Share</span>
            </button>

  {/* fixed button */}
  <button className="self-start fixed left-0 sm:static bottom-0 w-full sm:w-fit sm:px-20 py-8 sm:py-6 
            uppercase text-[1.4rem] font-semibold text-black bg-green sm:rounded-xl">Save Changes</button>

  {/* input field with top label */}
  <div className="relative">
          <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c] top-2 left-4"></label>   
        </div>

  {/* input field with left label */}
  <div class="relative">
            <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl pl-9 pr-3 py-4 w-full text-[1.3rem] font-medium tracking-[0px] text-black" placeholder=" " />
            <label for="" className="absolute text-[1.7rem] font-medium tracking-[0px] text-primary top-4 left-4">£</label>   
          </div>

  {/* dropdown */}
  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-[#7c7c7c]
              tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
              <span className="text-[1.3rem] font-medium tracking-[0px] text-[#7c7c7c]">United Kingdom</span>
              <img src="./icons/drop-down.svg" alt="dropdown"></img>
            </button>

  {/* z-component */}
  <div className="bg-amber rounded-full w-8 h-8 flex justify-center items-center">
              <p className="text-[1rem] font-bold text-black">Z</p>
            </div>

  {/* border-light */}
   className="border-[1px] border-[#e6e6e6]"


</div>

