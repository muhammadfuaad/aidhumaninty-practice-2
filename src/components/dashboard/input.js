import React from 'react';
function Input(props) {
  const [status, setStatus] = React.useState(false);
  const [visibility, setVisibility] = React.useState(false);

  return (
    <div class="relative mb-6">
      <input type={status? "text" : "password"} onChange={()=>setVisibility(true)} id={`${props.id}`} className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
      <label for={`${props.id}`} className="absolute text-[1.1rem] font-semibold tracking-[0px] text-[#7c7c7c]  top-2 left-4">{props.label}</label>
      {visibility? <a href="#" className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark absolute right-6 top-6" onClick={()=>setStatus(current => !current)}>Show</a> : null}
    </div>
  );
}
export default Input;