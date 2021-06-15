import React from 'react';
import blockImg1 from '../images/block_image_1.jpg';
import blockImg2 from '../images/block_image_2.jpg';
import PopUp from './PopUp.jsx';

const Block = () => {
  return (
    <section className="block">
      <div className="img-container">
        <img src={blockImg1} alt="block-img" />
      </div>

      <div className="img-container">
        <img src={blockImg2} alt="block-img" />
      </div>

      <PopUp />
    </section>
  );
};


export default Block;