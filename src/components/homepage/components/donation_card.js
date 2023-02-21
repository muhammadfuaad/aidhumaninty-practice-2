import arrow from "../../icons/arrow-right.svg"

function Donation_card(props) {
  return (
    <div class="rounded-2xl header-shadow bg-white flex">
      <div class="relative bg-[url('assets/images/pakistan-floods.png')] bg-cover w-1/2">
        
        <button class="rounded-md px-4 outline-none absolute bottom-2 left-2 right-2
        bg-primary text-white text-xs font-bold py-3">DONATE NOW</button>
        <span class="bg-amber w-9 h-9 flex items-center justify-center rounded-full -translate-y-1/2 absolute top-1/2 -right-2.5 text-[10px] font-bold">
          {props.category}
        </span>
      </div>
      <div class="max-w-[96px] m-7 flex flex-col justify-between h-[94px]">
        <h3 class="text-[1.4rem] font-bold tracking-[-0.35px] text-black leading-[2rem]">
          {props.title}
        </h3>
        <img src="./icons/arrow-right-primary.svg" className="w-4"></img>
      </div>
    </div>

  );
}
export default Donation_card;