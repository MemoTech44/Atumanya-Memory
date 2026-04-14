import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const footerStyle = {
    backgroundColor: '#020617',
    color: '#94a3b8',
    padding: '80px 24px 40px 24px',
    borderTop: '1px solid rgba(251, 191, 36, 0.3)',
    textAlign: 'center',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  };

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px'
  };

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#fbbf24' : '#f8fafc',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    transition: '0.3s ease',
  });

  const socialLinkStyle = {
    color: '#fbbf24',
    textDecoration: 'none',
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease, color 0.3s ease',
    display: 'inline-block'
  };

  // Helper to ensure the new page starts at the top
  const handlePageChange = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        
        {/* Brand & Identity */}
        <div>
          <h3 style={{ 
            color: 'white', 
            fontSize: '2.2rem', 
            fontWeight: '900', 
            margin: '0 0 10px 0',
            letterSpacing: '-1.5px' 
          }}>
            ATUMANYA MEMORY
          </h3>
          <p style={{ 
            color: '#fbbf24', 
            fontWeight: '800', 
            letterSpacing: '3px', 
            fontSize: '0.75rem',
            textTransform: 'uppercase'
          }}>
            Founder, MemoTech Solutions
          </p>
        </div>

        {/* Navigation - Identical to Navbar logic */}
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '30px' 
        }}>
          {[
            { name: 'Home', path: '/' },
            { name: 'About Me', path: '/about' },
            { name: 'Resume', path: '/resume' },
            { name: 'Services', path: '/services' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Hire Me', path: '/hire-me' }
          ].map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              style={linkStyle(link.path)}
              onClick={handlePageChange}
              onMouseOver={(e) => e.target.style.color = '#fbbf24'} 
              onMouseOut={(e) => e.target.style.color = location.pathname === link.path ? '#fbbf24' : '#f8fafc'}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Ecosystem */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '25px',
          padding: '10px 0'
        }}>
          <a href="https://github.com/MemoTech44" target="_blank" rel="noreferrer" style={socialLinkStyle}
             onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://wa.me/256704405903" target="_blank" rel="noreferrer" style={socialLinkStyle}
             onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://x.com/AtumanyaMemory" target="_blank" rel="noreferrer" style={socialLinkStyle}
             onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/atumanyamemory/" target="_blank" rel="noreferrer" style={socialLinkStyle}
             onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100070780981811" target="_blank" rel="noreferrer" style={socialLinkStyle}
             onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.tiktok.com/@memotech_1" target="_blank" rel="noreferrer" style={socialLinkStyle}
             onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>

        {/* Legal & Location */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '30px',
          width: '100%',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <p style={{ margin: '0 0 10px 0', lineHeight: '1.6' }}>
            © {new Date().getFullYear()} <span style={{ color: '#fbbf24', fontWeight: '700' }}>MemoTech Solutions</span>. 
            All Rights Reserved.
          </p>
          <p style={{ margin: 0, letterSpacing: '1px', fontSize: '0.7rem' }}>
            ENGINEERED WITH PRECISION IN <span style={{ color: '#f8fafc' }}>KAMPALA, UGANDA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;