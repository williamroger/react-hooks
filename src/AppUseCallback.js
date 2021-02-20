import React, { useState, useCallback } from 'react';

import './App.css';

const fnCounter = new Set();

function App() {
  const [counter, setCounter] = useState(0);

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  // function handlePlus() {
  //   setCounter((prevState) => prevState + 1);
  // }

  fnCounter.add(handlePlus);
  // Retorna quantas vezes a função foi criada na memória
  console.log(fnCounter.size);

  return (
    <div className="App">
      <h1>useCallback</h1>
      <h2>{counter}</h2>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default App;