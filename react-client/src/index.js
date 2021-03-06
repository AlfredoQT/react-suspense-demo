import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import App from './App';
import './index.css';
import DefaultErrorBoundary from './DefaultErrorBoundary';

import { configureConnectionToWebSocketServer } from './api/sockets';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  () => {
    configureConnectionToWebSocketServer();
  }
);
