import Toggle from "./toggle";
function Security() {
  return (
    <div className="bg-white rounded-3xl">
      <div className="border-bottom-medium p-8">
        <p className="portal-subheading mb-8">Change Password</p>
        <div class="relative mb-6">
          <input type="text" id="first-name" className="focus:border-none block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
          <label for="first-name" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">Current</label>
        </div>
        <div class="relative mb-6">
          <input type="text" id="first-name" className="focus:border-none block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
          <label for="first-name" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">New</label>
        </div>
        <div className="flex flex-col space-y-2 mb-6">
          <div className="flex space-x-4 items-start">
            <img src="./Icons/green-check-circle.svg"></img>
            <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Must be at least 12 characters</p>
          </div>
          <div className="flex space-x-4 items-start">
            <img src="./Icons/green-check-circle.svg"></img>
            <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Must include at least one number, a lower
            or upper case letter and a special character (#,$,%,&,@ etc.)</p>
          </div>
          <div className="flex space-x-4 items-start">
            <img src="./Icons/red-info-circle.svg"></img>
            <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-[#FD4949]">Must not be the same as the last 6 used passwords</p>
          </div>
          <div className="flex space-x-4 items-start">
            <img src="./Icons/green-check-circle.svg"></img>
            <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">Must not include your email or name</p>
          </div>
        </div>
        <div class="relative">
          <input type="text" id="first-name" className="focus:border-none block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
          <label for="first-name" className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">Retype New</label>
        </div>
      </div>
      <div className="p-8 flex flex-col">
        <p className="portal-subheading mb-6">Two-factor authentication</p>
        <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-8">An additional layer of security, using email address to generate a secret access code</p>
        < Toggle state="Enabled" />
        <button className="mt-8 self-start px-20 py-6 uppercase text-[1.4rem] font-semibold text-headings bg-green rounded-xl">Save Changes</button>
      </div>
    </div>
  );
}
export default Security;
  