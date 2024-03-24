import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './Home'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      {/* <Header /> */}
      <Header>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </Header>
      <Card/>
    </React.StrictMode>
  </BrowserRouter>
);
