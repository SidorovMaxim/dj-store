import React from 'react';
import logo from './svg/logo.svg';
import Nav from './Nav.jsx';
import Mail from './Mail.jsx';
import Phone from './Phone.jsx';


const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <Nav />
      <Mail />
      <Phone />
    </header>
  );
};


export default Header;