function Button(props) {
  return (
    <button className={`mt-8 self-start px-20 py-6 uppercase text-[1.4rem] font-semibold text-headings 
    ${props.classNames} rounded-xl`}>{props.text}</button>
  );
}
export default Button;
