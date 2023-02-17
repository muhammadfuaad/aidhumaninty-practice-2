import dot from "../../icons/dot-circle.png"
import profile from "../../icons/profile-plus.png"

function Contact() {
  return (
    <div className="flex flex-col space-y-2 bg-amber py-24">
      <div className="flex flex-col space-y-12 w-1/2 self-center">
        <p className="text-black text-[30px] font-bold tracking-[-0.75px] leading-[34px]">Contact Us</p>
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-4 bg-white border-black border-2 p-5 rounded-xl w-[330px] h-[140px]">
                <div className="flex justify-between">
                  <div className="flex space-x-2 items-center">
                    <img src={dot} className="w-8"></img>
                    <p className="text-black text-[1.8rem] font-bold tracking-[-0.45px] leading-[24px]">Register</p>
                  </div>
                  <img src={profile} className="w-12"></img>
                </div>
                <p className="text-body text-[1.6rem] font-normal tracking-[-0.4px] leading-[24px]">I want to help Aid Humanity and receive future appeals</p>
              </div>

              <div className="flex flex-col space-y-4 border-Gray border-opacity-25 border-2 p-5 rounded-xl w-[330px] h-[140px]">
                <div className="flex justify-between">
                  <div className="flex space-x-2 items-center">
                    <img src={dot} className="w-8"></img>
                    <p className="text-black text-[1.8rem] font-bold tracking-[-0.45px] leading-[24px]">Fundraiser</p>
                  </div>
                  <img src={profile} className="w-12"></img>
                </div>
                <p className="text-body text-[1.6rem] font-normal tracking-[-0.4px] leading-[24px]">Become a fundraiser and kick start your own Charity appeal</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8 w-full">
            <div className="flex flex-col space-y-4">
              <input className="placeholder-black text-[13px] font-normal tracking-[0px] leading-[15px] bg-amber border-2 border-opacity-50 border-black rounded-lg h-[50px] p-2" placeholder="Name and Surname*"></input>
              <input className="placeholder-black text-[13px] font-normal tracking-[0px] leading-[15px] bg-amber border-2 border-opacity-50 border-black rounded-lg h-[50px] p-2" placeholder="Email*"></input>
              <textarea rows="6" className="placeholder:text-start placeholder-black text-[13px] font-normal tracking-[0px] leading-[15px] bg-amber border-2 border-opacity-50 border-black rounded-lg h-[98px] p-2" placeholder="Please provide as much detailed information as possible. Thank you *"></textarea>
            </div>
            <button className="self-start px-20 h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
              Submit Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;