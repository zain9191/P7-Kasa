import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './Pages/Home/index'
import Error from './components/Error';
import Footer from './components/Footer';
import Logement from './Pages/Logement';


const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <React.StrictMode>
      <GlobalStyle />
      <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        </Routes>
        <Footer/>
    </React.StrictMode>
  </Router>
);
