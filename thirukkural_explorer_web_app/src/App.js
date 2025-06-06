import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Quiz from './Quiz';

/**
 * PUBLIC_INTERFACE
 * Main app component with navigation and basic page routing.
 */
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">*</span> Thirukkural Explorer
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <NavLink
                  className={({ isActive }) => isActive ? "btn" : "btn btn-outline"}
                  to="/"
                  end
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive ? "btn" : "btn btn-outline"}
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive ? "btn" : "btn btn-outline"}
                  to="/quiz"
                >
                  Quiz
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <main style={{ marginTop: 80 }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;