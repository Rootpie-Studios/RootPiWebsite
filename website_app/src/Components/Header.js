import React from 'react';
import { useEffect, useState } from 'react';
import Button from './Button';
import '../css/header.css';
import logo from '../images/LogoTrans.png';
import RoundButton from './RoundButton';
import { Link, useLocation } from 'react-router-dom';


function Header(props) {
  const location = useLocation();
  const [selected, setSelected] = useState('');
  
  useEffect(() => {
    const path = location.pathname.substring(1);
    setSelected(path || 'home');
  }, [location]);

  return (
    <div className="header">
      <div className="header-left">
        <Link className='link' to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <RoundButton color="black" label={<img className="logo" src={logo} alt="" />} />
          {props.subtitle}
        </Link>
      </div>
      <div className="header-right" style={{ display: window.innerWidth >= 800 ? 'flex' : 'none' }}>
        <Link style={{ color: props.textColor }} className={selected === 'portfolio' ? 'selected' : 'header-link'} onClick={() => setSelected('portfolio')} to="/portfolio">Portfolio</Link>
        <Link style={{ color: props.textColor }} className={selected === 'students' ? 'selected' : 'header-link'} onClick={() => setSelected('students')} to="/students">Students</Link>
        <Link style={{ color: props.textColor }} className={selected === 'about' ? 'selected' : 'header-link'} onClick={() => setSelected('about')}to="/about">About</Link>
       
        <Link to="/about">
          <Button color="lightblue" textColor="black" label="Contact" />
        </Link>
      </div>
    </div>
  );
}

export default Header;