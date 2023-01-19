import Progress_bar from './progress_bar';

function Appeal_status_1(props) {
  const amount_raised = 12;
  return (
    <div className="flex space-x-4">
      <div className="w-[30%]">
        <img src="./images/pakistan-floods.png"></img>
      </div>

      <div className="flex flex-col w-[70%]">
        <div className="flex justify-between items-center">
          <p className="text-[1.2rem] font-bold text-headings mt-4 mb-2">
            {props.title}
          </p>
          <div className="bg-amber rounded-full w-8 h-8 flex justify-center items-center">
            <p className="text-[0.8rem] font-bold text-headings">Z</p>
          </div>
        </div>
        <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#bdbdbd] mb-1">
          {props.category}
        </p>
        <Progress_bar progress="30" option="2" />
        <div className="flex mt-1">
          <p className="text-[1.1rem] font-semibold tracking-[-0.17px]">
            <span className="text-primary">{amount_raised}</span>
            <span className=" text-[#bdbdbd]">ASDF</span>
          </p>
          <div className="flex space-x-2">
            <img src="./Icons/user-circle.svg"></img>
            <p className="text-[1rem] font-medium tracking-[-0.15px] text-body">
              ASDF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Appeal_status_1;
