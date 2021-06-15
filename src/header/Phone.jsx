import React from 'react';
import phoneIcon from './svg/phone_icon.svg';


const Phone = () => {
  return (
    <span className="phone">
      <img className="phone-icon" src={phoneIcon} alt="phone-icon" />

      <div className="phone-text-desc">
        Обратный звонок
      </div>

      <div className="phone-text-number">
        8 812 615-62-79
      </div>
    </span>
  );
};


export default Phone;