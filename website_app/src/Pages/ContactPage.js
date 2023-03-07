import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import logo from '../images/LogoTextTransBlack.png';
import '../css/contactpage.css';


function ContactPage() {
  return (
    <div className='App'>
      <Header subtitle={<img className='header-image-container' src={logo} alt="" />} />
      <main>
        <Card color="#696969" textColor="white" children={
          <div>
            <h2>This is us</h2>
            <p>Contact us </p>
            <br/>
          </div>
        } />
      </main>
      <Footer/>
    </div>
  );
}

export default ContactPage;