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


export const DynamicContainer = () => {
  return (
    <div className="dynamic-container">
      <div className="slide first active">
        <div className="number">
          01
        </div>

        <div className="description">
          Простота использования оснащения<br />
          позволяет решать функциональные и<br />
          организационные задачи,<br />
          оптимизировать работу, проводить<br />
          мероприятия различного масштаба.
        </div>
      </div>

      <div className="vertical-line" />

      <div className="slide second inactive">
        <div className="number">
          02
        </div>

        <div className="description">
          Применение инновационных решений для<br />
          демонстрации культурных и исторических<br />
          реликвий – актуальная тенденция, которая<br />
          успешно применяется в музеях и на<br />
          площадках альтернативного искусства.
        </div>
      </div>
    </div>
  );
};


export const ArrowsContainer = () => {
  return (
    <div className="arrows-container">
      <button className="prev-slide" />
      <button className="next-slide" />          
    </div>
  );
};
