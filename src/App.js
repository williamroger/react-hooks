import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    setTimeout(() => {
      setCounter((prevState) => prevState + 1);
    }, 2000);
  }

  function handleMinus() {
    setTimeout(() => {
      setCounter((prevState) => prevState - 1);
    }, 2000);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default App;
