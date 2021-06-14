import React from 'react';
import Nav from './Nav.jsx';
import mailIcon from './svg/mail_icon.svg';
import phoneIcon from './svg/phone_icon.svg';


const Header = () => {
  return (
    <header>
      <span className="logo">
        <span className="logo-in">
          PRO.
        </span>

        DJSTORE
      </span>

      <Nav />

      <span className="mail">
        <img className="mail-icon" src={mailIcon} alt="mail-icon" />

        <span className="mail-text">
          info@sld-store.ru
        </span>
      </span>

      <span className="phone">
        <img className="phone-icon" src={phoneIcon} alt="phone-icon" />

        <div className="phone-text-desc">
          Обратный звонок
        </div>

        <div className="phone-text-number">
          8 812 615-62-79
        </div>
      </span>
    </header>
  );
};


export default Header;