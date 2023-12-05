import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App, Bpp } from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); /// 

const root1 = createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <Bpp />
  </React.StrictMode>
);

/// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
