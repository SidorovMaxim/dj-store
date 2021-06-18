import './App.scss';
import React, { createContext, useState } from 'react';
import Header from './header/Header.jsx';
import Main from './main/Main.jsx';
import PopUpCall from './popUpCall/PopUpCall.jsx';
import Footer from './footer/Footer.jsx';


export const PopUpCallContext = createContext();


function App() {
  const [ popUpCallOpacity, setPopUpCallOpacity ] = useState(0);

  const togglePopUpCall = () => {
    setPopUpCallOpacity(popUpCallOpacity === 1 ? 0 : 1);
  }

  return (
    <PopUpCallContext.Provider
      value={{
        popUpCallOpacity,
        togglePopUpCall
      }}
    >
      <Header />
      <Main />
      <PopUpCall />
      <Footer />
    </PopUpCallContext.Provider>
  );
}


export default App;
