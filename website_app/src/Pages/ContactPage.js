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
      <form onSubmit={handleSubmit} className="contact-form">
      <h1>Contact Us</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
      <Footer/>
    </div>
  );
}

export default ContactPage;
