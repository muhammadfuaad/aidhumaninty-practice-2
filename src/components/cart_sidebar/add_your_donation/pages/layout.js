function Layout(props) {
  return (
    <div className="w-[80%] sm:w-[25%] min-w-[33rem] h-full bg-primary pb-[35rem] overflow-hidden relative">
      <div className="p-8 flex justify-between border-b border-black">
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-primary-dark">Add your donation</p>
        <img src="./icons/black-cross-circle-hollow.svg"></img>
      </div>
      <div className="p-8 flex flex-col">
        {props.page}
        {props.card}
      </div>
    </div>
  )
}  
export default Layout;