import React from 'react';
import { StaticContainer, DynamicContainer, ArrowsContainer } from './Containers.jsx';


const Slider = () => {
  return (
    <section className="slider">
      <StaticContainer />
      <DynamicContainer />
      <ArrowsContainer />
    </section>
  );
};


export default Slider;