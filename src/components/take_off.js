function Take_off() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex justify-between">
          <img src="./Icons/rocket.svg"></img>
          <div className="flex flex-col">
            <p>Ready for take-off?</p>
            <p>Share your page to get your first supporters.</p>
          </div>
        </div>
        <div className="flex">
          <button>Personlaize</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  )
}
export default Take_off;