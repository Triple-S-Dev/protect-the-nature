import React, { useState, useEffect } from 'react';
import { supabase } from './supabase';
import Header from './components/Header';

import { Routes, Route, useNavigate } from 'react-router-dom';

// CSS style
import './App.css';

// pages module
import Events from './pages/Events';
import LandingPage from './pages/LandingPage';
import EventDetail from './pages/EventDetail';
import About from './pages/About';
import Leaderboard from './pages/Leaderboard';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

const App = () => {
  const [authenticatedState, setAuthenticatedState] =
    useState('not-authenticated');
  const router = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === 'SIGNED_IN') {
          setAuthenticatedState('authenticated');
          router('/profile');
        }
        if (event === 'SIGNED_OUT') {
          setAuthenticatedState('not-authenticated');
        }
      }
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const handleAuthChange = async (event, session) => {
    await fetch('/api/auth.js', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  };

  const checkUser = async () => {
    const user = await supabase.auth.user();
    if (user) {
      setAuthenticatedState('authenticated');
    }
  };

  return (
    <div>
      <Header authenticatedState={authenticatedState} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/signin' element={<Auth />} />
        {/* ============= Event Page================ */}
        <Route path='/event' element={<Events />} />
        <Route
          path='/event/detail/:id'
          element={<EventDetail authenticatedState={authenticatedState} />}
        />
        <Route path='/profile' element={<Profile />} />
        {/* ============= Event Page================ */}
      </Routes>
    </div>
  );
};

export default App;
