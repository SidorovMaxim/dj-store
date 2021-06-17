import React, { useEffect } from 'react';


const slidesTransition = {value: '0.3s'};


const DynamicContainer = (props) => {
  const { slides, currentSlide, setCurrentSlide } = props;

  useEffect(() => {
    setTimeout(() => {
      if (currentSlide === slides.length - 2) {
        slidesTransition.value = 'none';
        setCurrentSlide(1);
        
      } else if (currentSlide === 0) {
        slidesTransition.value = 'none';
        setCurrentSlide(2);
      }

      slidesTransition.value = '0.3s';
    }, 300);
  });

  return (
    <div className="dynamic-container">
      <div
        className="slides-container"
        style={{
          transition: slidesTransition.value,
          transform: `translateX(${-379 * currentSlide}px)`
        }}
      >
        {slides.map((item, j) => (
          (j === currentSlide)
            ? (
              <div className="slide active" key={`slide-${j}`}>
                {item.data}
              </div>
            ) : (
              <div className="slide inactive" key={`slide-${j}`}>
                {item.data}
              </div>
            )
        ))}
      </div>
    </div>
  );
};


export default DynamicContainer;
