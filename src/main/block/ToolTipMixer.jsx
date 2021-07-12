import React, { useState } from 'react';
import mixerIcon from './images/mixer_icon.png';


const ToolTipMixer = () => {
  const [blockOpacity, setBlockOpacity] = useState(0);

  const toggleOpacity = () => setBlockOpacity(blockOpacity === 0 ? 1 : 0);

  return (
    <div className="tool-tip-container">
      <div
        className="tool-tip"
        style={{
          opacity: blockOpacity,
          zIndex: blockOpacity === 0 ? -1 : 9
      }}
      >
        <img
          className="mixer-icon"
          src={mixerIcon}
          alt="mixer-icon"
        />

        <div className="tool-tip-name">
          Микшерный пульт<br />
          Yamaha MG10
        </div>
          
        <ul>
          <li>Простой интерфейс.</li>
          <li>Максимальная производительность.</li>
          <li>10 каналов.</li>
          <li>4 микрофонных / 10 линейных входов.</li>
        </ul>

        <button className="close" onClick={toggleOpacity} />
      </div>

      <div className="button-container">
        <button className="open" onClick={toggleOpacity}> + </button>
      </div>
    </div>
  );
};


export default ToolTipMixer;