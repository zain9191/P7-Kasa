import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Header />
    </React.StrictMode>
  </BrowserRouter>
);
