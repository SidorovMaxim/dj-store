import React, { useContext } from 'react';
import phoneIcon from './svg/phone_icon.svg';
import { PopUpCallContext } from '../App.js';


const Phone = () => {
  const { togglePopUpCall } = useContext(PopUpCallContext);
  
  return (
    <span className="phone" onClick={togglePopUpCall}>
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