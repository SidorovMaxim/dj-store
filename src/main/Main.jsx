import React from 'react';
import blockImg1 from './images/block_image_1.jpg';
import blockImg2 from './images/block_image_2.jpg';
import mixerIcon from './svg/mixer_icon.svg';

const Main = () => {
  return (
    <>
      <section className="slider">
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

        <div className="arrows-container">
          <button className="prev-slide" />
          <button className="next-slide" />          
        </div>
      </section>

      <section className="block">
        <div className="img-container">
          <img src={blockImg1} alt="block-img" />
        </div>

        <div className="img-container">
          <img src={blockImg2} alt="block-img" />
        </div>

        <div className="pop-up">
          <div className="block">
            <img className="mixer-icon" src={mixerIcon} alt="mixer-icon" />

            <div className="block-name">
              Микшерный пульт<br />
              Yamaha MG10
            </div>
              
            <ul>
              <li>
                Простой интерфейс.
              </li>

              <li>
                Максимальная производительность.
              </li>

              <li>
                10 каналов.
              </li>

              <li>
                4 микрофонных / 10 линейных входов.
              </li>
            </ul>

            <button className="close" />
          </div>

          <button className="disclose">
            +
          </button>
        </div>
      </section>
    </>
  );
};


export default Main;
