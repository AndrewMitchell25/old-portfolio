import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import {Routes, Route, BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>
);

