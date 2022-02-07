import React, {useRef, useState} from 'react';
import '../compCSS/contactForm.css'
import {ReactComponent as PhoneIcon} from './smartphone-call.svg';
import {ReactComponent as MapIcon} from './placeholder-svgrepo-com.svg';
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';






const ContactForm = () => {

const form = useRef();

function sendEmail(e){
  e.preventDefault();
  emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
  .then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text)
  });

e.target.reset();
};
  return (
    <>
    <div className="contact-form">
    <form className="form" id="contact-form" onSubmit={sendEmail} noValidate>
    <div className="contact-form-content">
      <div className="non-message-cont">
      <div className="contact-element">
        <input
               type="text"
               className="contact-input"
               name="fname"
               placeholder="First Name"
               required/>
      </div>
      <div className="contact-element">
        <input
               type="text"
               className="contact-input"
               name="lname"
               placeholder="Last Name"

               required/>
      </div>
      <div className="contact-element">
        <input
          className="contact-input"
          type="text"
          name="number"
          placeholder="Number"

          required/>
      </div>
      <div className="contact-element">
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Email"

          required/>
      </div>
      </div>
      <div className="message-content" >
        <textarea
        className="contact-input-message"
        name="message"
        id="message"
        placeholder="Enter Message Here..."
  required/>
<input className="contact-button"type="submit" value="Send"/>
      </div>
      </div>
    </form>
    <div className="other-cont">
      <div className="mappie-container"><iframe className="mappie"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.441430350781!2d-81.61800558507966!3d30.309959381786424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b714737f2bdb%3A0x107d1dfb8f1939fc!2sNewman%20Law%20Firm%2C%20PA!5e0!3m2!1sen!2sus!4v1641072614306!5m2!1sen!2sus"  allowFullScreen="" loading="lazy"></iframe></div>
      <div className="other-cont-text">
        <p className="box2-address"><span>{<MapIcon/>}</span><strong>4741 Atlantic Blvd, Suite B-6, 32207</strong></p>
        <p className="box2-numbo"><strong>Call:      </strong><a className="box2-number"href="tel:9043558835">(904) 355-8835</a></p>
        <p className="box2-numbo"><strong>Text:      </strong><a className="box2-number"href="tel:9044027499">(904) 402-7499</a></p>
      </div>
     </div>
    </div>
    </>
  )
};

export default ContactForm
