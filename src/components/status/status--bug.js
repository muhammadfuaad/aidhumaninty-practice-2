function Status_green() {
  return (
    <div className='card status status--pink'>
      <img src="./Icons/bug.svg" className='left' alt=""></img>
      <div className='right'>
        <h3>Oh no, there’s Bug!</h3>
        <p>Please contact us directly so we can put this right without delay. 
          We appreciate your patience.
        </p>
      </div>
    </div>
  );
}
export default Status_green;