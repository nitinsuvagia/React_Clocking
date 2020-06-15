import React from 'react';
import clock from './clock.svg';
import './App.css';
import { useState, useEffect } from 'react';

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
      <header className="App-header">
        <img src={clock} className="App-logo" alt="logo" />
        <h3>Clocking...</h3>
        <h1>{clocking}</h1>
      </header>
    </div>
  );
};

export default App;