import React, { useState, useMemo } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');

  const total = useMemo(() => {
    console.log('useMemo rodou...');
    return counter * 31235 * 454534;
  }, [counter]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <div className="App">
      <h1>useMemo</h1>
      <h2>{counter}</h2>
      <h3>{total}</h3>
      <button onClick={handlePlus}>+</button>

      <br /><br />
      <span>{name}</span>
      <br />
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;