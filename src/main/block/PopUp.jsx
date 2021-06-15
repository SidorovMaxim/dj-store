import React from 'react';
import mixerIcon from '../svg/mixer_icon.svg';


const PopUp = () => {
  return (
    <div className="pop-up">
      <div className="block">
        <img className="mixer-icon" src={mixerIcon} alt="mixer-icon" />

        <div className="block-name">
          Микшерный пульт<br />
          Yamaha MG10
        </div>
          
        <ul>
          <li>Простой интерфейс.</li>
          <li>Максимальная производительность.</li>
          <li>10 каналов.</li>
          <li>4 микрофонных / 10 линейных входов.</li>
        </ul>

        <button className="close" />
      </div>

      <button className="disclose">
        +
      </button>
    </div>
  );
};


export default PopUp;