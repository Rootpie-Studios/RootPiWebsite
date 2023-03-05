import React, { useState } from 'react';
import Button from './Button';
import '../css/header.css';
import logo from '../images/LogoTrans.png';
import RoundButton from './RoundButton';

function Header(props) {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  console.log(window.innerWidth);

  return (
    <div className="header">
      <div className="header-left">
        <RoundButton color="black" label={<img className="logo" src={logo} alt="Example Image" />} />
        {props.subtitle}
      </div>
      <div className="header-right" style={{ display: window.innerWidth >= 800 ? 'flex' : 'none' }}>
        <a style={{ color: props.textColor }} className="header-link" href="#">Portfolio</a>
        <a style={{ color: props.textColor }} className="header-link" href="#">Students</a>
        <a style={{ color: props.textColor }} className="header-link" href="#">About</a>
        <Button color="lightblue" textColor="black" label="Contact" />
      </div>
    </div>
  );
}

export default Header;