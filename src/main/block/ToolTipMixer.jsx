import React, { useState } from 'react';
import mixerIcon from '../svg/mixer_icon.svg';


const ToolTipMixer = () => {
  const [blockOpacity, setBlockOpacity] = useState(0);

  const handleOpen = () => setBlockOpacity(1);
  const handleClose = () => setBlockOpacity(0);

  return (
    <div className="tool-tip">
      <div
        className="block"
        style={{opacity: blockOpacity}}
      >
        <img
          className="mixer-icon"
          src={mixerIcon}
          alt="mixer-icon"
        />

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

        <button className="close" onClick={handleClose} />
      </div>

      <button className="open" onClick={handleOpen}>
        +
      </button>
    </div>
  );
};


export default ToolTipMixer;