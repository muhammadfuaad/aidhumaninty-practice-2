function Cookie() {
  return (
    <div className='card status cookie bg-white w-[330px] h-[140px]'>
      <img src="./Icons/cookie.svg" className='left' alt=""></img>
      <div className='right'>
        <h3>Can we use Cookies?</h3>
        <p>They help our site run at 100% efficiency but you can opt out.</p>
        <button className="btn btn--primary mt-[10px] text-[13px]">Click Here</button>
      </div>
    </div>
  );
}
export default Cookie;