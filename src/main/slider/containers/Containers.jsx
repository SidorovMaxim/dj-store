import React from 'react';


export const StaticContainer = () => {
  return (
    <div className="static-container">
      <div className="trend">
        Оснащение конференц-залов
      </div>

      <h1>
        Видео конференции
      </h1>

      <div className="description">
        Профессиональное оборудование для конференц-залов
        предназначено для проведения и организации презентаций,
        совещаний, бизнес-тренингов и онлайн-трансляции контента.
      </div>

      <button className="back-call">
        Обратный звонок
      </button>

      <button className="fill-out-brief">
        Заполнить бриф
      </button>
    </div>
  );
};


export const ArrowsContainer = (props) => {
  const { handlePrevSlide, handleNextSlide } = props;

  return (
    <div className="arrows-container">
      <button className="prev-slide" onClick={handlePrevSlide} />
      <button className="next-slide" onClick={handleNextSlide} />          
    </div>
  );
};
