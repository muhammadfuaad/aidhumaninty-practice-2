import Icon from "../images/question-mark-circle.svg";
function Page_header(props) {
  return (
    <div className="bg-primary-light py-20 flex gap-4 justify-center items-center">
      <img src={Icon} className={`${props.icon}`}></img>
      <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">{props.heading}</p>
    </div>
  );
}
export default Page_header;
