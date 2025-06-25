import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import JobList from './pages/JobList';
import RegisterPage from './pages/RegisterPage';
import MyCVPage from './pages/user/MyCVPage';

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ padding: '2rem', minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/manage-cv" element={<MyCVPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
