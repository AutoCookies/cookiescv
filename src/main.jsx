import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Format from './components/Format';
import Home from './pages/home/home';
import UploadCV from './pages/cv/uploadCV';
import MyCVs from './pages/cv/myCVs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Format />}>
        <Route path="/" element={<Home />} />
        <Route path="/cv/upload" element={<UploadCV />} />
        <Route path="/cv" element={<MyCVs />} />
      </Route>

      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
