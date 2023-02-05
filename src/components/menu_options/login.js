import Mobile_header from "./mobile_header";
import Zakat_calculator from './zakat_calculator';
import Facebook from "./images/facebook.svg";
import Twitter from "./images/twitter.svg";
import Apple from "./images/apple.svg";
import Google from "./images/google.svg";
import Toggle from "../dashboard/toggle"

function Login() {
  return (
    <div className="bg-[#f5f6f7] min-h-screen relative overflow-hidden">
      <div className="">
        < Mobile_header title="Login" display_logout="hidden"/>
      </div>
        <div className="px-6 flex flex-col">
          <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-[#999] my-10">To continue, log in to Aid Humanity.</p>
          <div className="flex flex-col gap-4">
            <button className='w-full py-6 text-[1.4rem] font-semibold text-white bg-primary-medium rounded-xl
              flex space-x-4 justify-center items-center'>
              <img src={Facebook}></img>
              <span>Continue with Facebook</span>
            </button>
            <button className='w-full py-6 text-[1.4rem] font-semibold text-white bg-black rounded-xl
              flex space-x-4 justify-center items-center'>
              <img src={Apple}></img>
              <span>Continue with Apple</span>
            </button>
            <button class="w-full py-6 text-[1.4rem] font-semibold text-[#999999] bg-transparent outline
              outline-[#999999] rounded-xl flex justify-center items-center space-x-4">
              <img src={Google}></img>
              <span>Continue with Google</span>
            </button>
          </div>
          <p className="self-center text-[1.2rem] font-normal tracking-[-0.3px] text-body my-6">OR</p>
          <div className="flex flex-col gap-6">
            <div class="relative">
              <input type="text" id="email" className="focus:outline-primary bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
              <label for="email" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c]  top-2 left-4">Email Address or Username *</label>
            </div>
            <div class="relative">
              <input type="text" id="password" className="focus:outline-primary bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
              <label for="password" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c]  top-2 left-4">Password*</label>
            </div>
          </div>

          <p className="text-[1.2rem] font-bold tracking-[0.18px] text-primary mt-6">Forgot password</p>
          <div className="flex gap-4 items-center my-12">
            < Toggle />
            <p className="text-[1.4rem] font-medium tracking-[0px] text-black">Remember me</p>
          </div>
          <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
            Log In
          </button> 
        </div>
        <div className="bg-primary-light px-16 py-12 mt-32">
          <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">Don’t have an account? <span className="text-primary">Sign up</span>.</p>
        </div>
    </div>
  );
}
export default Login;