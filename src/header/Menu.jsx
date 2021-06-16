import React from 'react';
import Nav from './Nav.jsx';
import Mail from './Mail.jsx';
import Phone from './Phone.jsx';


const Menu = () => {
  return (
    <>
      <button className="menu-toggler" />

      <div className="menu">

        <Nav />
        
        <button className="fill-out-brief">
          Заполнить бриф
        </button>

        <Mail />
        <Phone />
      </div>
    </>
  );
};


export default Menu;






