import Orphan from '../../icons/orphan-1.png';
import Clock from "../../icons/clock.svg";

function Blog_card() {
  return (
    <div className="flex flex-col">
      <div><img src={Orphan} className="rounded-3xl mb-10"></img></div>
      <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-4">Aenean ac iaculis urna, quis condimentum elit</p>
      <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] mb-8">Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue, nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum.</p>
      <div className="flex gap-2 items-center">
        <img src={Clock}></img>
        <div className="flex gap-4 items-center text-[1.1rem] font-normal tracking-[-0.17px] text-[#bdbdbd]">
          <p>April 20, 2022</p>
          <p className='font-bold mb-2'>.</p>
          <p>3 minutes to read</p>
        </div>
      </div>
    </div>
  );
}
export default Blog_card;