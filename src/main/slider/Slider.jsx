import React, { useState } from 'react';
import sliderBgImg0 from './images/slider_image_0.jpg';
import sliderBgImg1 from './images/slider_image_1.jpg';
import DynamicContainer from './containers/dynamicContainer/DynamicContainer.jsx';
import { StaticContainer, ArrowsContainer } from './containers/Containers.jsx';


const sliderBgImages = [sliderBgImg0, sliderBgImg1, sliderBgImg0, sliderBgImg1, sliderBgImg0];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const handlePrevSlide = () => setCurrentSlide(currentSlide - 1);
  const handleNextSlide = () => setCurrentSlide(currentSlide + 1);
  
  return (
    <section
      className="slider"
      style={{
        background: `white url(${sliderBgImages[currentSlide]})`
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