import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TechnicalTest from './components/qbit/TechnicalTest';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/qbit" element={<TechnicalTest />} />
      </Routes>
    </div>
  );
}

export default App;
