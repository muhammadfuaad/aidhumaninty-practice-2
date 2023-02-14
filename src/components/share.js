function Share() {
  return (
    <div className='card flex flex-row share relative'>
      <img src="./icons/cross-circle.svg" className='absolute top-[20px] right-[20px]'></img>
      <div className='flex flex-col left'>
        <h1>Share with<br></br> friends is powerfull</h1>
        <div className="flex flex-col gap-5">
          <p>Sharing this page with your friends could help Ron Hill raise over 3x more in donations</p>
          <button className='btn btn--transparent flex justify-center space-x-4'><img src="./icons/cross-circle.svg" className="mr-2" alt="share cion"></img>Share</button>
          <p className="highlight">Now now, maybe later</p>
        </div>
      </div>
      <div className="right">
        <img src="./icons/link-sharing.svg" className="w-[175px] h-[186px]" alt="link sharing icon"></img>
      </div>
    </div>
  );
}
export default Share;