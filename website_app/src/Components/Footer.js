import React from 'react';
import '../css/footer.css';

function Footer(props) {
  return (
    <div className='footer-box'>
      <footer className="footer">
        <div className="column">
          <h2 style={{ color: props.textColor }} className='center-text'>About Our Company</h2>
          <p style={{ color: props.textColor }} className='center-text'>We are a company that does awesome things.</p>
          <br />
          <div style={{ color: props.textColor }} className="copyright">
            &copy; 2023 RootPi AB. All rights reserved.
          </div>
        </div>
        <div className="column column-right">
          <h2 style={{ color: props.textColor }} className='center-text'>Contact Us</h2>
          <p style={{ color: props.textColor }} className='center-text'>Email: info@rootpi.xyz</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;