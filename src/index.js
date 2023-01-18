import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      {/* <BrowserRouter> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
