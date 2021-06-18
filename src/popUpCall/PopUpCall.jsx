import './PopUpCall.scss';
import React, { useContext, useState } from 'react';
import { PopUpCallContext } from '../App.js';


const PopUpCall = () => {
  const { popUpCallOpacity, togglePopUpCall } = useContext(PopUpCallContext);

  const [ name, setName ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ checked, setChecked ] = useState(false);
  const [ checkboxClass, setCheckboxClass ] = useState('inactive');

  const handleNameChange = (event) => setName(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  
  const toggleChecked = () => {
    setCheckboxClass(checkboxClass === 'active' ? 'inactive' : 'active');
    setChecked(!checked);
  }

  const handleFormChange = (event) => {
    event.preventDefault();
    alert(name + ' ' + phoneNumber);
  }

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

      <form onSubmit={handleFormChange}>
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
};


export default PopUpCall;