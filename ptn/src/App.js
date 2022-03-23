import React from 'react';
import Header from './components/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/event' element={<Events />} />
      </Routes>
    </div>
  );
};

export default App;
