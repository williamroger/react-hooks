import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppUseState from './AppUseState';
// import AppUseEffect from './AppUseEffect';
// import AppUseContext from './AppUseContext';
// import AppUseReducer from './AppUseReducer';
// import AppUseCallback from './AppUseCallback';
// import AppUseMemo from './AppUseMemo';
import AppUseRef from './AppUseRef';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppUseRef />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
