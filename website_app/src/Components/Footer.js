import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <h2 className='center-text'>About Our Company</h2>
        <p className='center-text'>We are a company that does awesome things.</p>
        <br />
        <div className="copyright">
          &copy; 2023 RootPi AB. All rights reserved.
        </div>
      </div>
      <div className="column column-right">
        <h2 className='center-text'>Contact Us</h2>
        <p className='center-text'>Email: info@rootpi.xyz</p>
      </div>
    </footer>
  );
}

export default Footer;