import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when navigating or resizing
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navStyle = {
    backgroundColor: 'rgba(2, 6, 23, 0.95)',
    color: '#ffffff',
    padding: '1rem 5%',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(251, 191, 36, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  };

  const logoStyle = {
    fontWeight: '900',
    fontSize: '1.5rem',
    letterSpacing: '-1px',
    cursor: 'pointer',
    color: '#fbbf24',
    textDecoration: 'none',
    zIndex: 1001,
  };

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#fbbf24' : '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: '0.3s ease',
  });

  const hireButtonStyle = {
    backgroundColor: '#fbbf24',
    color: '#020617',
    padding: '12px 30px',
    borderRadius: '100px',
    textDecoration: 'none',
    fontWeight: '800',
    fontSize: '0.85rem',
    transition: '0.3s ease',
    boxShadow: '0 4px 15px rgba(251, 191, 36, 0.2)',
    textAlign: 'center',
  };

  return (
    <>
      <style>{`
        /* Prevent horizontal overflow on the whole site */
        html, body {
          overflow-x: hidden;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          z-index: 2000; /* Higher than menu */
          padding: 5px;
        }

        .hamburger span {
          width: 28px;
          height: 3px;
          background: #fbbf24;
          border-radius: 10px;
          transition: 0.3s ease;
        }

        @media (max-width: 992px) {
          .hamburger { display: flex; }

          .nav-links {
            position: fixed;
            top: 80px; /* Positioned below the navbar */
            right: 20px;
            width: 260px;
            height: auto;
            background: #0f172a;
            padding: 25px;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            
            /* Slide Animation */
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
            transform: ${isOpen ? 'translateX(0)' : 'translateX(120%)'};
            opacity: ${isOpen ? '1' : '0'};
            pointer-events: ${isOpen ? 'all' : 'none'}; /* Prevents clicking closed menu */
            
            border-radius: 20px;
            border: 1px solid rgba(251, 191, 36, 0.3);
            box-shadow: 0 15px 40px rgba(0,0,0,0.8);
            z-index: 1999;
          }

          .nav-links a {
            width: 100%;
            text-align: center;
            padding: 14px 0;
            font-size: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .nav-links a:last-child {
            border-bottom: none;
            width: 90%;
            margin-top: 10px;
          }

          /* X animation for hamburger */
          .open span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
          .open span:nth-child(2) { opacity: 0; }
          .open span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
        }
      `}</style>

      <nav style={navStyle}>
        <Link to="/" style={logoStyle} onClick={() => window.scrollTo(0,0)}>
          ATUMANYA MEMORY
        </Link>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Me', path: '/about' },
            { name: 'Resume', path: '/resume' },
            { name: 'Services', path: '/services' },
            { name: 'Portfolio', path: '/portfolio' }
          ].map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              style={linkStyle(link.path)}
              onClick={() => {
                setIsOpen(false);
                window.scrollTo(0,0);
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/hire-me" 
            style={hireButtonStyle}
            onClick={() => {
              setIsOpen(false);
              window.scrollTo(0,0);
            }}
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;