import React from 'react';
import mailIcon from './svg/mail_icon.svg';


const Mail = () => {
  return (
    <span className="mail">
      <img className="mail-icon" src={mailIcon} alt="mail-icon" />

      <span className="mail-text">
        info@sld-store.ru
      </span>
    </span>
  );
};


export default Mail;