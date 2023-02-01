function Check(props) {
  return (  
    <div className="flex flex-col">
      <div className="flex space-x-4 mt-2 mb-1">
        <img src="./icons/green-check-circle.svg"></img>
        <p>£{props.amount}</p>
      </div>
      <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-[#999999]">{props.title}<br></br>{props.category}</p>
    </div>      
  )
} 
export default Check;

