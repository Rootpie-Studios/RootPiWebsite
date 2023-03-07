import React from 'react';
import { useEffect, useState } from 'react';
import Button from './Button';
import '../css/header.css';
import logo from '../images/LogoTrans.png';
import RoundButton from './RoundButton';
import { Link, useLocation } from 'react-router-dom';
import {RxHamburgerMenu} from 'react-icons/rx';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';


function Header(props) {
  const location = useLocation();
  const [selected, setSelected] = useState('');
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
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
      <div className="header-right" style={{ display: window.innerWidth >= 900 ? 'flex' : 'none' }}>
        <Link style={{ color: props.textColor }} className={selected === 'portfolio' ? 'selected' : 'header-link'} onClick={() => setSelected('portfolio')} to="/portfolio">Portfolio</Link>
        <Link style={{ color: props.textColor }} className={selected === 'students' ? 'selected' : 'header-link'} onClick={() => setSelected('students')} to="/students">Students</Link>
       
        <Link to="/contact">
          <Button color="dodgerblue" textColor="black" label="Contact"/>
        </Link>
      </div>

      <div className="header-right" style={{ display: window.innerWidth < 900 ? 'flex' : 'none' }}>
        <h1 className='hamburger center-content' onClick={toggleDrawer('right', true)}><RxHamburgerMenu style={{color: 'black'}} /></h1>
        <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <Box
              sx={{ width: 200 }}
              role="presentation"
              onClick={toggleDrawer('right', false)}
              onKeyDown={toggleDrawer('right', false)}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link style={{ color: props.textColor }} className={selected === 'portfolio' ? 'selected' : 'header-link'} onClick={() => setSelected('portfolio')} to="/portfolio">Portfolio</Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link style={{ color: props.textColor }} className={selected === 'students' ? 'selected' : 'header-link'} onClick={() => setSelected('students')} to="/students">Students</Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link style={{marginLeft: '5px'}} to="/contact">
                      <Button color="dodgerblue" textColor="black" label="Contact"/>
                    </Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
        </Drawer>
      </div>


    </div>
  );
}

export default Header;