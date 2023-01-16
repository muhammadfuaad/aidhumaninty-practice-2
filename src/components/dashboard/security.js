import Toggle from "./toggle";
import Button from "./button";
import Input from "./input";
function Security() {
  return (
    <div className="bg-white rounded-3xl">
      <div className="border-bottom-medium p-8">
        <p className="portal-subheading mb-8">Change Password</p>
        <Input type="password" id="current" label="Current"/>
        <Input type="password" id="new" label="New" />
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
        <Input type="password" id="retype-new" label="Retype New" />
      </div>
      <div className="p-8 flex flex-col">
        <p className="portal-subheading mb-6">Two-factor authentication</p>
        <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-8">An additional layer of security, using email address to generate a secret access code</p>
        < Toggle state="Enabled" />
        < Button text="Save Changes" classNames="bg-green" />
      </div>
    </div>
  );
}
export default Security;
  