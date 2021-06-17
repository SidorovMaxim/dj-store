import React, { useState } from 'react';
import Nav from './Nav.jsx';
import Mail from './Mail.jsx';
import Phone from './Phone.jsx';


const Menu = () => {
  const [ displayMenu, setDisplayMenu ] = useState('');
  const [ togglerClass, setTogglerClass ] = useState('open');


  const handleMenuToggler = () => {
    setDisplayMenu(displayMenu === 'flex' ? 'none' : 'flex');
    setTogglerClass(togglerClass === 'open' ? 'close' : 'open');
  }

  return (
    <>
      <button
        className={`menu-toggler ${togglerClass}`}
        onClick={handleMenuToggler}
      />

      <div className="menu" style={{display: displayMenu}}>

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






