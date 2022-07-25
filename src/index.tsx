import React from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalStyle } from '@/styles/globalTheme';

import { App } from './App';

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
