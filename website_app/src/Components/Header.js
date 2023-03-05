import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../css/header.css';
import logo from '../images/LogoTrans.png';
import RoundButton from './RoundButton';

function Header(props) {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <RoundButton color="black" label={<img className="logo" src={logo} alt="" />} />
        </Link>
        {props.subtitle}
      </div>
      <div className="header-right" style={{ display: window.innerWidth >= 800 ? 'flex' : 'none' }}>
        <a style={{ color: props.textColor }} className="header-link" href="/portfolio">Portfolio</a>
        <a style={{ color: props.textColor }} className="header-link" href="/students">Students</a>
        <a style={{ color: props.textColor }} className="header-link" href="/about">About</a>
        <Link to="/about">
          <Button color="lightblue" textColor="black" label="Contact" />
        </Link>
      </div>
    </div>
  );
}

export default Header;