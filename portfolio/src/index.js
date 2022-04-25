import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
);

