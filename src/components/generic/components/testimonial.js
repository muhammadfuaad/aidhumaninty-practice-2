import bar from "../../icons/blue-bar.svg"
import quotes from "../../icons/double-quotes-yellow.svg"
import kid from "../../icons/kid.png"
function Testimonial() {
  return (
    <div className="bg-white p-12 rounded-3xl relative">
      <img src={bar} className="absolute -top-2 left-4"></img>
      <div className="flex gap-4 mb-2">
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-body leading-[2.4rem] mb-12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
      </div>
      <div className="flex gap-8 items-center">
        <img src={kid} className="w-[4.5rem] h-[4.5rem]"></img>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p className="text-[2.2rem] font-bold tracking-[-0.55px] text-primary">Andrew</p>
            <p className="text-[1.1rem] font-medium tracking-[-0.17px] text-[#bdbdbd]">6 years old</p>
          </div>
          <img src={quotes} className="w-12"></img>
        </div>
      </div>
    </div>

  );
}
export default Testimonial;