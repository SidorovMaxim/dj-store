import './PopUpCall.scss';
import React, { useContext, useState } from 'react';
import { PopUpCallContext } from '../App.js';


const PopUpCall = () => {
  
  // Context
  const { popUpCallOpacity, togglePopUpCall } = useContext(PopUpCallContext);

  // State
  const [ status, setStatus ] = useState('showForm');
  const [ name, setName ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ checked, setChecked ] = useState(false);
  const [ checkboxClass, setCheckboxClass ] = useState('inactive');

  // Handlers
  const handleNameChange = (event) => setName(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  
  const toggleChecked = () => {
    setCheckboxClass(checkboxClass === 'active' ? 'inactive' : 'active');
    setChecked(!checked);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (checked) {
      const user = {name, phoneNumber};

      fetch('/post/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user)
        })
        .then(
          (result) => {
            setStatus('success');
          },
          (error) => {
            setStatus('error');
          }
        );

    } else {
      setCheckboxClass('unchecked');
    }
  }

  // Render
  if (status === 'showForm') {
    return (
      <div
        className="pop-up-call"
        style={{
          opacity: popUpCallOpacity,
          zIndex: popUpCallOpacity === 0 ? -1 : 9
        }}
      >
        <div className="question">
          Готовы обсудить проект?
        </div>

        <div className="description">
          Заполните форму ниже и мы свяжемся&nbsp;с&nbsp;вами.
        </div>

        <form onSubmit={handleFormSubmit}>
          <input
            type="name"
            placeholder="Имя*"
            value={name}
            onChange={handleNameChange}
          />

          <input
            type="tel"
            placeholder="Телефон*"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />

          <div className="personalInfo">
            <div
              className={"fake-checkbox " + checkboxClass}
              onClick={toggleChecked}
            />
            
            <span className="description">
              Я согласен с условиями обработки{" "}

              <a href="/personalInfo">
                персональных&nbsp;данных
              </a>
            </span>
          </div>
          

          <input
            className="send"
            type="submit"
            value="Отправить"
          />      
        </form>

        <button className="close" onClick={togglePopUpCall} />
      </div>
    );    

  } else if (status === 'success') {
    return (
      <div
        className="pop-up-call"
        style={{
          opacity: popUpCallOpacity,
          zIndex: popUpCallOpacity === 0 ? -1 : 9
        }}
      >
        <div className="result">
          Заявка принята
        </div>

        <button className="confirm" onClick={togglePopUpCall}>
          Ок
        </button>

        <button className="close" onClick={togglePopUpCall} />
      </div>     
    );

  } else { 
    return (
      <div
        className="pop-up-call"
        style={{
          opacity: popUpCallOpacity,
          zIndex: popUpCallOpacity === 0 ? -1 : 9
        }}
      >
        <div className="result">
          Нет ответа от сервера
        </div>

        <button className="confirm" onClick={togglePopUpCall}>
          Ок
        </button>

        <button className="close" onClick={togglePopUpCall} />
      </div>      
    );
  }

};


export default PopUpCall;