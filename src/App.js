import React from 'react';
import clock from './clock.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import ClockingTime from './component/ClokingTime';

const App = () => {
    const [clocking, setClock] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      setInterval(() => {
        setClock(clocking => 
          <div>
            {new Date().toLocaleTimeString()}
          </div>
        );
      }, 1000);
    });

  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <div className="detail-view">
        <img src={clock} className="App-logo" alt="logo" />
        <h3>Clocking...</h3>
        <h1>{clocking}</h1>
        <ClockingTime/>
      </div>
    </div>
  );
};

export default App;