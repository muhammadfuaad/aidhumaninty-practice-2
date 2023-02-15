import mosque from "../../icons/mosque.svg"
import emergency from "../../icons/emergency.svg"
import water from "../../icons/water-drop.svg"
import hunger from "../../icons/hunger-appeal.svg"
import sponsor from "../../icons/sponsor-orphan.svg"
import floods from "../../icons/pakistan-floods.png"
import arrow from "../../icons/arrow-right.svg"
import Popular_donations from "./popular_donations"

function Appeals_options() {
  return (
    <div className="w-4/5 mx-auto border border-black flex flex-col rounded-3xl">
      <div class="px-16 py-12 flex space-x-10">
        <div class="flex-1">
          <div class="flex items-center space-x-4">
            <img src={mosque}></img>
            <h3 class="mb-0 text-primary-dark text-[1.6rem] font-bold">
              Build a Mosque
            </h3>
          </div>

          <ul class="list-none ml-16 mt-5 space-y-2">
            <li class="hover:underline text-Gray hover:text-Outer-Space text-[1.6rem] font-medium">
              Pay for a Brick
            </li>
            <li class="hover:underline text-Gray hover:text-Outer-Space text-[1.6rem] font-medium">
              Books
            </li>
            <li class="hover:underline text-Gray hover:text-Outer-Space text-[1.6rem] font-medium">
              Quran Appeal
            </li>
          </ul>
        </div>

        <div class="w-px h-56 bg-Platinum"></div>
        <div class="flex-1">
          <div class="flex items-center space-x-4">
            <img src={emergency}></img>

            <h3 class="mb-0 text-primary-dark text-[1.6rem] font-bold">
              Disasters & Emergency Appeals
            </h3>
          </div>

          <ul class="list-none ml-16 mt-5 space-y-2">
            <li class="hover:underline text-Gray hover:text-Outer-Space text-[1.6rem] font-medium">
              Pakistan Floods
            </li>
            <li class="hover:underline text-Gray hover:text-Outer-Space text-[1.6rem] font-medium">
              Bangladesh Floods
            </li>
            <li class="hover:underline text-Gray hover:text-Outer-Space text-[1.6rem] font-medium">
              Rohingya Appeals
            </li>
            <li class="hover:underline text-Gray hover:text-Outer-Space text-[1.6rem] font-medium">
              Palestine Gaza
            </li>
            <li class="hover:underline text-Gray hover:text-Outer-Space text-[1.6rem] font-medium">
              Ukraine Emergency Appeal
            </li>
          </ul>
        </div>

        <div class="w-px h-56 bg-Platinum"></div>

        <div class="space-y-6 flex-1">
          <div>
            <div class="flex items-center space-x-4">
            <img src={water}></img>

              <h3 class="mb-0 text-primary-dark text-[1.6rem] font-bold">
                Water for All
              </h3>
            </div>
            <ul class="list-none mt-2 ml-16">
              <li class="hover:underline text-Gray hover:text-Outer-Space text-[1.6rem] font-medium">
                Water Wells
              </li>
            </ul>
          </div>

          <div class="flex items-center space-x-4">
            <img src={sponsor}></img>

            <h3 class="mb-0 text-primary-dark text-[1.6rem] font-bold">
              Sponsor an Orphan
            </h3>
          </div>

          <div class="flex items-center space-x-4">
            <img src={hunger}></img>
              
            <h3 class="mb-0 text-primary-dark text-[1.6rem] font-bold">
              Hunger Appeal
            </h3>
          </div>
        </div>
      </div>
      <Popular_donations/>
    </div>


  );
}
export default Appeals_options;