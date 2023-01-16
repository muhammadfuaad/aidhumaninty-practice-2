function Input(props) {
  return (
    <div class="relative mb-6">
      <input type={`${props.type}`} id={`${props.id}`} className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-headings tracking-[0px]" placeholder=" " />
      <label for={`${props.id}`} className="absolute text-[1.1rem] font-semibold text-[#7c7c7c] tracking-[0px] top-2 left-4">{props.label}</label>
    </div>
  );
}
export default Input;