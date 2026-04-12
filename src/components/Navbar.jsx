import React from 'react';

const Navbar = () => {
  // Styling Objects
  const navStyle = {
    backgroundColor: '#020617', // Match Hero background
    color: '#ffffff',
    padding: '1.2rem 2.5rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(251, 191, 36, 0.1)', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    backdropFilter: 'blur(10px)' 
  };

  const logoStyle = {
    fontWeight: '900',
    fontSize: '1.6rem',
    letterSpacing: '-1px',
    cursor: 'pointer',
    color: '#fbbf24' // Memory now in Yellow
  };

  const linkStyle = {
    color: '#94a3b8',
    textDecoration: 'none',
    margin: '0 20px',
    fontSize: '0.95rem',
    fontWeight: '600',
    transition: 'color 0.3s ease'
  };

  const hireButtonStyle = {
    backgroundColor: '#fbbf24',
    color: '#020617',
    padding: '10px 24px',
    borderRadius: '100px',
    textDecoration: 'none',
    fontWeight: '800',
    fontSize: '0.9rem',
    transition: 'transform 0.2s ease, boxShadow 0.2s ease',
    boxShadow: '0 4px 15px rgba(251, 191, 36, 0.2)'
  };

  return (
    <nav style={navStyle}>
      {/* Brand Name - Yellow & No full stop */}
      <div style={logoStyle}>
        MEMORY
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#home" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#fbbf24'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>Home</a>
        <a href="#projects" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#fbbf24'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>Projects</a>
        <a 
          href="#contact" 
          style={hireButtonStyle}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;