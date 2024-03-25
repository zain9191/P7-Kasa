import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './Home'
import Error from './components/Error';
import Footer from './components/Footer';


const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <React.StrictMode>
      <GlobalStyle />
      <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
    </React.StrictMode>
  </Router>
);
