import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import HireMe from './pages/HireMe';

// Scroll Management Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      {/* ScrollToTop must be inside Router but outside Routes */}
      <ScrollToTop />
      
      <div className="App" style={{ backgroundColor: '#020617', minHeight: '100vh' }}>
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/hire-me" element={<HireMe />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;