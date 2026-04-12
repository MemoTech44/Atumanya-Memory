import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#020617',
    color: '#94a3b8',
    padding: '80px 24px 60px 24px',
    borderTop: '2px solid #fbbf24', // Bold yellow top border
    textAlign: 'center', // Center align everything
    fontFamily: '"Plus Jakarta Sans", sans-serif'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '35px'
  };

  const socialLinkStyle = {
    color: '#fbbf24', // Yellow social links
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: '0.3s',
    margin: '0 15px'
  };

  const navLinkStyle = {
    color: '#f8fafc',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '0 15px'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        
        {/* Brand Section */}
        <div>
          <h3 style={{ 
            color: 'white', 
            fontSize: '2rem', 
            fontWeight: '900', 
            margin: '0 0 10px 0',
            letterSpacing: '-1px' 
          }}>
            Atumanya Memory
          </h3>
          <p style={{ color: '#fbbf24', fontWeight: '700', letterSpacing: '2px', fontSize: '0.85rem' }}>
            WEB & APP DEVELOPMENT SPECIALIST
          </p>
        </div>

        {/* Navigation Links */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <a href="#home" style={navLinkStyle}>Home</a>
          <a href="#projects" style={navLinkStyle}>Projects</a>
          <a href="#contact" style={navLinkStyle}>Hire Me</a>
        </div>

        {/* Social Icons with Yellow Accent */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://github.com/MemoTech44" target="_blank" rel="noreferrer" style={socialLinkStyle}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/memory-atumanya-b674082bb/" target="_blank" rel="noreferrer" style={socialLinkStyle}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/AtumanyaMemory" target="_blank" rel="noreferrer" style={socialLinkStyle}>
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.tiktok.com/@memotech_1" target="_blank" rel="noreferrer" style={socialLinkStyle}>
            <i className="fab fa-tiktok"></i>
          </a>
        </div>

        {/* Bottom Rights Section */}
        <div style={{
          borderTop: '1px solid rgba(251, 191, 36, 0.2)', // Light yellow border
          paddingTop: '30px',
          width: '100%',
          fontSize: '0.85rem'
        }}>
          <p style={{ margin: '0' }}>
            © {new Date().getFullYear()} <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>MemoTech</span>. 
            Engineered with Precision in Uganda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;