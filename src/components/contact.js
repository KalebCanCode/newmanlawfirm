import React from 'react'
import ContactForm from './contactForm.js'
import '../compCSS/contact.css'
import ContactNavbar from './contactNavbar.js'
import Copyright from './copyright.js'

const Contact = () => {
  return (
    <>
  <div className="kontent">
    <ContactNavbar/>
      <h1 className="content-h1">Contact Newman Law Firm PA.</h1>
    <div className="content-paragraph">
      <p>Call or send a message for a free initial consultation!</p>

    <br/><br/>
    <p className="content-paragraph"> Jarahn Newman: <a className="content-anchor" href="tel:9044027499">(904) 402-7499</a></p><br/>
    <p className="content-paragraph"> Marvin Zanders: <a className="content-anchor" href="tel:9042105107">(904) 210-5107</a></p><br/>
    <p className="content-paragraph"> Email: <a className="content-anchor" href = "mailto: newmanlawfirmpa@gmail.com">newmanlawfirmpa@gmail.com</a></p><br/><br/>
</div>


      <div className="contaxx-container">
      <ContactForm/>
      </div>
      <div className="bottomBoxx"><Copyright/></div>
    </div>
    </>
  )
}

export default Contact
