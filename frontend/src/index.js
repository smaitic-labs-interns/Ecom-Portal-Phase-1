import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/homePage'
import Product from './pages/productPage'
import AboutUs from './pages/aboutUsPage'
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="productPage" element={<Product />} />
      <Route path="aboutUsPage" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
