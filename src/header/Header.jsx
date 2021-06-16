import React from 'react';
import logo from './svg/logo.svg';
import Menu from './Menu.jsx';


const Header = () => {
  return (
    <header>
      <a className="logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <Menu />
    </header>
  );
};


export default Header;