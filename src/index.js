import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import Index from './components/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Electronics from './Products/Electronics';
import Grocery from './Products/Grocery';
import Fashion from './Products/Fashion';
import Appliances from './Products/Appliances';
import Sub from './Products/Sub';
import About from './components/About';
ReactDOM.render(
  <BrowserRouter>

  <Index/>
  
      <Routes>  
      
      <Route path="/" element={<App />}/>
      <Route path="/about" element={<About />}/>      
      <Route path="/products" element={<Sub />}>
        <Route path="/products/electronics" element={<Electronics />} />        
        <Route path="/products/grocery" element={<Grocery />} />
        <Route path="/products/fashion" element={<Fashion />} />
        <Route path="/products/appliances" element={<Appliances />} />        
      </Route>     
        
        </Routes>
        </BrowserRouter>,
  
 
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
