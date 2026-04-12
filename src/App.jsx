import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import HireMe from './components/HireMe';

function App() {
  const mainWrapper = {
    backgroundColor: '#020617', // Consistent deep navy/black
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    fontFamily: '"Plus Jakarta Sans", sans-serif'
  };

  return (
    <div style={mainWrapper}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        {/* Sections are stacked for a smooth scrolling experience */}
        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="hire-me">
          <HireMe />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;