import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './Pages/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<span>Register</span>} />
        <Route path="/login" element={<span>Login</span>} />
        <Route path="/kart" element={<span>Kart</span>} />
        <Route path="/product/:id" element={<span>Produto com id</span>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
