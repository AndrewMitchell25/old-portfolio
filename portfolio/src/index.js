import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import CaptureTheFlag from './pages/CaptureTheFlag'
import {Routes, Route, BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/capture-the-flag" element={<CaptureTheFlag />} />
    </Routes>
  </BrowserRouter>
);

