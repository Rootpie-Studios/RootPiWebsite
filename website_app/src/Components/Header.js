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
        <Link className='link' to="/">
          <RoundButton color="black" label={<img className="logo" src={logo} alt="" />} />
          {props.subtitle}
        </Link>
      </div>
      <div className="header-right" style={{ display: window.innerWidth >= 800 ? 'flex' : 'none' }}>
        <Link style={{ color: props.textColor }} className="header-link" to="/portfolio">Portfolio</Link>
        <Link style={{ color: props.textColor }} className="header-link" to="/students">Students</Link>
        <Link style={{ color: props.textColor }} className="header-link" to="/about">about</Link>
        <Link to="/about">
          <Button color="lightblue" textColor="black" label="Contact" />
        </Link>
      </div>
    </div>
  );
}

export default Header;