import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when navigating
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
          z-index: 1001;
        }

        .hamburger span {
          width: 28px;
          height: 3px;
          background: #fbbf24;
          border-radius: 10px;
          transition: 0.3s;
        }

        @media (max-width: 992px) {
          .hamburger { display: flex; }

          .nav-links {
            position: absolute;
            top: 100%;
            right: ${isOpen ? '0' : '-110%'};
            width: 280px;
            /* height: auto ensures the box ends after the Hire Me button */
            height: auto; 
            background: #0f172a;
            padding: 30px 20px;
            flex-direction: column;
            /* align-items: center handles the horizontal centering */
            align-items: center; 
            gap: 15px;
            transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-bottom-left-radius: 30px;
            border-left: 1px solid rgba(251, 191, 36, 0.15);
            border-bottom: 1px solid rgba(251, 191, 36, 0.15);
            box-shadow: -15px 15px 40px rgba(0,0,0,0.5);
          }

          .nav-links a {
            width: 100%;
            text-align: center;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          /* Special treatment for Hire Me button in mobile menu */
          .nav-links a:last-child {
            border-bottom: none;
            width: 85%;
            margin-top: 10px;
          }

          .open span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
          .open span:nth-child(2) { opacity: 0; }
          .open span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
        }
      `}</style>

      <nav style={navStyle}>
        <Link to="/" style={logoStyle} onClick={() => window.scrollTo(0,0)}>
          ATUMANYA MEMORY
        </Link>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

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