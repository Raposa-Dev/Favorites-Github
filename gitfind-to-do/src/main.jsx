import React from 'react';
import ReactDOM from 'react-dom/client';
import StyleGlobal from './style'
import App from './app';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleGlobal/>
    <App />
  </React.StrictMode>
);
