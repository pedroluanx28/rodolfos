import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './Pages/Dashboard';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { Kart } from './Pages/Kart';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kart" element={<Kart />} />
        <Route path="/product/:id" element={<span>Produto com id</span>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
