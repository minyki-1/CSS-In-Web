import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'

import CssInWeb from './components/cssinweb';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssInWeb url="http://localhost:9000/">
        <App />
      </CssInWeb>
    </BrowserRouter>
  </React.StrictMode>
);
