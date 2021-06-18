import './Slider.scss';
import React, { useState } from 'react';
import { slide_0, slide_1 } from './Slides.jsx';
import DynamicContainer from './containers/dynamicContainer/DynamicContainer.jsx';
import { StaticContainer, ArrowsContainer } from './containers/Containers.jsx';


const slides = [
  {num: 0, data: slide_0}, 
  {num: 1, data: slide_1}, 
  {num: 0, data: slide_0}, 
  {num: 1, data: slide_1}, 
  {num: 0, data: slide_0}
];


const Slider = () => {
  const [ currentSlide, setCurrentSlide ] = useState(2);

  const handlePrevSlide = () => setCurrentSlide(currentSlide - 1);
  const handleNextSlide = () => setCurrentSlide(currentSlide + 1);
  
  return (
    <section className="slider" >
      <div className={`slider-background-img img-${slides[currentSlide].num}`}></div>
      <StaticContainer />
      <DynamicContainer
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <ArrowsContainer
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
      />
    </section>
  );
};


export default Slider;