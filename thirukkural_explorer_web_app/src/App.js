import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Quiz from './Quiz';
import NavBar from './components/NavBar';
// Robust background image handling for all environments (React/Webpack)
import thiruvalluvarBG from './assets/thiruvalluvar-bg.png';

/**
 * PUBLIC_INTERFACE
 * Main app component with navigation and basic page routing.
 */
function App() {
  // On mount, inject a CSS variable for the Thiruvalluvar background image
  React.useEffect(() => {
    if (thiruvalluvarBG) {
      document.body.style.setProperty(
        '--thiruvalluvar-bg',
        `url('${thiruvalluvarBG}')`
      );
    }
  }, []);
  return (
    <Router>
      <div className="app">
        <NavBar />
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