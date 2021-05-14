import React from "react";
import "./contact.css";
import ContactForm from "../../components/ContactForm/contactform.js";

function Contact() {
  return (
    <section id="contact">
      <h1> Connect </h1>
      <p> Reach out and touch faith. </p>
      <img src="./images/landscape.png" className="landscape-img" />
      <ContactForm />
    </section>
  );
}

export default Contact;
