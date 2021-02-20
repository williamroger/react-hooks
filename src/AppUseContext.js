import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value={{ mode: 'dark' }}>
      <h1>useContext</h1>
      <Button />
    </ThemeContext.Provider>
  )
}


function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button className={theme.mode === 'dark' && 'dark-mode'}>
      mode {theme.mode}
    </button>
  );
}
export default App;