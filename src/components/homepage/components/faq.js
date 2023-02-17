import Accordion from "./accordion";

function Faq() {
  return (
    <div className="flex flex-col w-full px-4 py-24 bg-f5 relative">
      <img src="./icons/yellow-ring-large.png" className="w-[30rem] absolute right-0 -top-60"></img>
      <img src="./icons/yellow-ring-small.png" className="w-40 absolute bottom-60 left-60"></img>
      <img src="./icons/blue-circle.png" className="w-20 absolute top-[25rem] right-[30rem]"></img>

      <div className="flex flex-col w-1/2 self-center">
        <div className="flex justify-between mb-20">
          <p className="text-[3rem] font-bold tracking-[-0.75px] text-black leading-[3.4rem]">FAQ</p>
          <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3.2rem]">Do you have more questions? Check out our full <span className="font-semibold text-primary-medium">FAQ</span></p>
        </div>
        <div className="flex flex-col gap-8">
          <Accordion question="Does all my donation go to the appeal?" answer="Yes, obviously, why not, why are you scared?" />
          <Accordion question="Can I cancel my subscription?" answer="You can caccel your donation at any time. However if your last paymentt of the month is still yet to come this will still be deducted. Until the next month." />
          <Accordion question="Can I start my own appeal?" answer="Yes, obviously, why not, why are you scared?" />
        </div>
      </div>
    </div>
  );
}
export default Faq;