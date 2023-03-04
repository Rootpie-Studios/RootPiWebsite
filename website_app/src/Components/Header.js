import React from 'react';
import Button from './Button';
import '../css/header.css';
import logo from '../images/LogoTrans.png';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Button color="black" label={<img className="logo" src={logo} alt="Example Image" />} />
      </div>
      <div className="header-right">
        <a className="header-link" href="#">Portfolio</a>
        <a className="header-link" href="#">Students</a>
        <a className="header-link" href="#">About</a>
        <Button color="lightblue" textColor="black" label="Contact" />
      </div>
    </div>
  );
}

export default Header;