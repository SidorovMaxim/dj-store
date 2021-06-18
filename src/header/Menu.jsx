import React, { useState } from 'react';
import Nav from './Nav.jsx';
import Mail from './Mail.jsx';
import Phone from './Phone.jsx';


const Menu = () => {
  const [ menuVisibility, setMenuVisibility ] = useState('closed');
  const [ togglerClass, setTogglerClass ] = useState('open');


  const handleMenuToggler = () => {
    setMenuVisibility(menuVisibility === 'closed' ? 'opened' : 'closed');
    setTogglerClass(togglerClass === 'open' ? 'close' : 'open');
  }

  return (
    <>
      <button
        className={`menu-toggler ${togglerClass}`}
        onClick={handleMenuToggler}
      />

      <div className={`menu ${menuVisibility}`}>
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






