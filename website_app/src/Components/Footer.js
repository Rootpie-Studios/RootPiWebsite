import React from 'react';
import '../css/footer.css';

function Footer(props) {
  return (
    <div className='footer-box'>
      <footer className="footer">
        <div className="container">
          <div className='column'>

            <h2 style={{ color: props.textColor }} className='footer-text'>About Us</h2>
            <p style={{ color: props.textColor }} className='footer-text'>
            We are a small team of engineers dedicated to providing the perfect solutions tailored to your needs. </p>
            
            {/* <p style={{ color: props.textColor }} className='footer-text '>
            With experience in a wide range of programming languages, frameworks and softwares we can create the tools you need and help you realize your visions. </p> */}

            <br />
            <div style={{ color: props.textColor }} className="copyright">
            &copy; 2023 RootPi AB. All rights reserved.
            <br />
            <br />
            <br />
          </div>
          </div>
          
          
        
        <div className="column">
          <h2 style={{ color: props.textColor }} className='footer-text'>Contact Us</h2>
          <p style={{ color: props.textColor }} className='footer-text'>info@rootpi.xyz</p>
        </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;