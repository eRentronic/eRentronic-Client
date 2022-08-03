import React from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalStyle } from '@/styles/globalStyle';

import { App } from './App';
import '@/styles/index.css';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
