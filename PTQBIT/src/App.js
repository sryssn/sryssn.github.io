import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TechnicalTest from './components/qbit/TechnicalTest';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qbit" element={<TechnicalTest />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/our-menu" element={<MenuPage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
