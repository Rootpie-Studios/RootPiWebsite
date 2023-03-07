import React, { useState }  from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import logo from '../images/LogoTextTransBlack.png';
import '../css/contactpage.css';


function ContactPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting form with name ${name}, email ${email}, and message ${message}`);
    // Replace this console log with code to submit the form to a server or API
  };
  
  return (
    <div className='App'>
      <Header subtitle={<img className='header-image-container' src={logo} alt="" />} />
        <h1>Contact Us</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" className="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      <Footer/>
    </div>
  );
}

export default ContactPage;
