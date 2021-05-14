import React from "react";
import "./contactform.css";

function ContactForm() {
  return (
    <div className="form-div">
      <form action="/email" className="contact-form" method="get">
        <input placeholder="Your email" type="text" id="email" name="email" />
        <input
          placeholder="Your message"
          type="text"
          id="message"
          name="message"
        />
        <input type="submit" className="submit-btn" value="Send" />
      </form>
    </div>
  );
}
export default ContactForm;
