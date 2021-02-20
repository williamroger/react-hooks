import React, { useState, useRef } from 'react';

import './App.css';

function App() {
  console.log('Rendered...');
  const number = useRef(0);
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  function handleSetValue() {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1);
    number.current = newNumber;
  }

  function handlePrintValue() {
    alert(number.current);
  }

  function handlePrintName() {
    alert(inputRef.current.value);
    console.log(inputRef.current);
  }

  return (
    <div className="App">
      <h1>useRef</h1>
      <button onClick={handleSetValue}>Set value</button>
      <button onClick={handlePrintValue}>Print value</button>

      <br /><br />
      {/* Utilizando assim com useState para cada letra digitada
          o componente será re-renderizado o que não é legal, já 
          que só utilizamos o valor desse input quando clicamos 
          no botão Print Name não faz sentido todo esse processamento
          desnecessário por isso vamos utilizar agora o useRef */}
      {/* <input onChange={(e) => setName(e.target.value)} /> */}
      <input ref={inputRef} />
      <button onClick={handlePrintName}>Print name</button>
    </div>
  );
}

export default App;