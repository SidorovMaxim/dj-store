import './Block.scss';
import React from 'react';
import ToolTipMixer from './ToolTipMixer.jsx';


const Block = () => {
  return (
    <section className="block">
      <div className="img-container img-0" />
      <div className="img-container img-1" />
      <ToolTipMixer />
    </section>
  );
};


export default Block;