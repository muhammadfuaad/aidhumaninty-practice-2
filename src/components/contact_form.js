function Contact_form() {
  return (
  <div className="card contact-form relative">
    <h2 className="card__heading">Contact Form</h2>
    <div class="form__inputs">
      <div className="input-container">
        <input className="input" type="text" id="name" required></input>
        <label for="name">Name*</label>
      </div>
      <div className="input-container">
        <input className="input" type="text" id="email" required></input>
        <label for="email">Email*</label>
      </div>
      <div className="input-container">
        <input className="input" type="text" id="phone" required></input>
        <label for="phone">Phone*</label>
      </div>
      <div className="input-container">
        <input className="input" type="text" id="subject" required></input>
        <label for="subject">Subject*</label>
      </div>
      <div className="input-container">
        <input className="input message" type="text" id="message" required></input>
        <label for="message">Message*</label>
      </div>
    </div>
    <p className="character-limit">9/999</p>
    
    <div className="flex space-x-2 my-2">
      <a href=""><img className="w-5 mt-1" src="/Icons/icon_toogle-off.svg" alt="logo_facebook" /></a>
      <p className="disclaimer">I agree to <span className="highlights">Terms & Conditions </span>
      and <span className="highlights">Privacy Policy</span></p>
    </div>
    <button className="btn btn--primary">Submit</button>   
  </div>
  );
}
export default Contact_form;