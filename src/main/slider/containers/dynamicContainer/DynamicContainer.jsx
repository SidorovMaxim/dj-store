import React, { useEffect } from 'react';
import { slide_0, slide_1 } from './Slides.jsx';


const slides = [slide_0, slide_1, slide_0, slide_1, slide_0];

let slidesTransition = '0.3s';


const DynamicContainer = (props) => {
  const { currentSlide, setCurrentSlide } = props;

  useEffect(() => {
    setTimeout(() => {
      if (currentSlide === slides.length - 2) {
        slidesTransition = 'none';
        setCurrentSlide(1);
        
      } else if (currentSlide === 0) {
        slidesTransition = 'none';
        setCurrentSlide(2);
      }

      slidesTransition = '0.3s';
    }, 300);
  });

  return (
    <div className="dynamic-container">
      <div
        className="slides-container"
        style={{
          transition: slidesTransition,
          transform: `translateX(${-379 * currentSlide}px)`
        }}
      >
        {slides.map((item, j) => (
          (j === currentSlide)
            ? (
              <div className="slide active" key={`slide-${j}`}>
                {item}
              </div>
            ) : (
              <div className="slide inactive" key={`slide-${j}`}>
                {item}
              </div>
            )
        ))}
      </div>
    </div>
  );
};


export default DynamicContainer;


// const line = <div className="vertical-line" />;
{/*      {slides.map((item, j) => (
        j === currentSlide
          ? (
            <div
              className={`slide slide-${j} active`}
              key={`slide-${j}`}
            >
              {item}
            </div>
          )
          : (
            <div
              className={`slide slide-${j} inactive`}
              key={`slide-${j}`}
            >
              {item}
            </div>
          )
      ))}*/}