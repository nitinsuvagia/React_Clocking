import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => 
          <div>
            <h1>{new Date().toLocaleTimeString()}</h1>
          </div>
        );
      }, 1000);
    });

  return (
    <div className="App">
      <header className="App-header">
        <h3>Clocking...</h3>
        {seconds}
      </header>
    </div>
  );
};

export default App;