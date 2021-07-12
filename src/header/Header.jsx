import './Header.scss';
import React, { useState, useEffect } from 'react';
import logo from './svg/logo.svg';
import Menu from './Menu.jsx';


const scroll = {
  prev: 0,
  current: 0
}


const Header = () => {
  const [ headerPosition, setHeaderPosition ] = useState(0);

  const handleScroll = () => {
    scroll.current = window.pageYOffset;
    
    if (scroll.current < scroll.prev) {
      setHeaderPosition(0);
      
    } else {
      setHeaderPosition(-100);
    }

    scroll.prev = scroll.current;
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  });

  return (
    <header
      style={{
        transform: `translateY(${headerPosition}%)`
      }}
    >
      <a className="logo" href="./">
        <img src={logo} alt="logo" />
      </a>
      <Menu />
    </header>
  );
};


export default Header;