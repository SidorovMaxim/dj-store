import React, { useState } from 'react';
import sliderImg_0_dt from './images/slider-img-0-dt.jpg';
import sliderImg_1_dt from './images/slider-img-1-dt.jpg';
import sliderImg_0_t from './images/slider-img-0-t.jpg';
import sliderImg_1_t from './images/slider-img-1-t.jpg';
import sliderImg_0_m from './images/slider-img-0-m.jpg';
import sliderImg_1_m from './images/slider-img-1-m.jpg';
import DynamicContainer from './containers/dynamicContainer/DynamicContainer.jsx';
import { StaticContainer, ArrowsContainer } from './containers/Containers.jsx';


const SCREEN_WIDTH = window.screen.width;
const SLIDER_IMAGES = [
  [
    sliderImg_0_dt,
    sliderImg_1_dt,
    sliderImg_0_dt,
    sliderImg_1_dt,
    sliderImg_0_dt
  ],
  [
    sliderImg_0_t,
    sliderImg_1_t,
    sliderImg_0_t,
    sliderImg_1_t,
    sliderImg_0_t
  ],
  [
    sliderImg_0_m,
    sliderImg_1_m,
    sliderImg_0_m,
    sliderImg_1_m,
    sliderImg_0_m
  ]
];

let sliderImgs = [];

if (SCREEN_WIDTH > 768) {
  sliderImgs = SLIDER_IMAGES[0];

} else if (SCREEN_WIDTH > 320) {
  sliderImgs = SLIDER_IMAGES[1];

} else {
  sliderImgs = SLIDER_IMAGES[2];
}


const Slider = () => {
  const [ currentSlide, setCurrentSlide ] = useState(2);

  const handlePrevSlide = () => setCurrentSlide(currentSlide - 1);
  const handleNextSlide = () => setCurrentSlide(currentSlide + 1);
  
  return (
    <section
      className="slider"
      style={{
        background: `white url(${sliderImgs[currentSlide]})`
      }}
    >
      <StaticContainer />
      <DynamicContainer
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