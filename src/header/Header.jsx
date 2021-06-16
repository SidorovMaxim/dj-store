import React from 'react';
import logo from './svg/logo.svg';
import Nav from './Nav.jsx';
import Mail from './Mail.jsx';
import Phone from './Phone.jsx';


const Header = () => {
  return (
    <header>
      <a className="logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <Nav />
      <Mail />
      <Phone />
    </header>
  );
};


export default Header;