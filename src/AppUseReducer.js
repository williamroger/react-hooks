import React, { useReducer } from 'react';

import './App.css';

function reducer(state, action) {
  console.log('action ', action);
  switch (action.type) {
    case 'plus':
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1
      }

    case 'minus':
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1
      }

    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0,
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);


  function handlePlus() {
    dispatch({ type: 'plus' });
  }

  function handleMinus() {
    dispatch({ type: 'minus' })
  }

  return (
    <div className="App">
      <h1>useReducer</h1>
      <h2>{state.counter}</h2>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default App;
