function Achievement() {
  return (
    <div className="flex flex-col justify-between space-y-2 bg-white p-[2rem] w-[450px] h-[250px] rounded-xl relative">
      <p className="text-body font-normal text-[1.6rem] tracking-[-0.4px] leading-[24px]"></p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <p className="text-primary font-bold text-[22px] tracking-[-0.55px] leading-[24px]"></p>
            <p className="text-Testimonial-Gray font-medium text-11 tracking-[-0.17px] leading-[13px]"></p>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Achievement;