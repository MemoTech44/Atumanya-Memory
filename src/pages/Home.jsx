import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mem1 from '../assets/mem1.jpeg';

const Home = () => {
  // Counting logic for the stats
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setExperience((prev) => (prev < 3 ? prev + 1 : 3));
      setProjects((prev) => (prev < 25 ? prev + 1 : 25));
      setCustomers((prev) => (prev < 100 ? prev + 1 : 100));
    }, 60);
    return () => clearInterval(timer);
  }, []);

  // Styles
  const sectionStyle = {
    backgroundColor: '#020617',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 24px',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    color: 'white',
    textAlign: 'center',
  };

  const profileImgStyle = {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #fbbf24',
    marginBottom: '20px',
    boxShadow: '0 0 30px rgba(251, 191, 36, 0.2)'
  };

  const socialIconStyle = {
    color: '#94a3b8',
    fontSize: '1.5rem',
    transition: '0.3s',
    margin: '0 15px',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const nameStyle = {
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: '900',
    margin: '10px 0',
    lineHeight: '1',
    letterSpacing: '-3px',
    background: 'linear-gradient(to bottom, #ffffff 40%, #fbbf24 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    width: '100%',
    maxWidth: '1200px',
    margin: '80px 0'
  };

  const cardStyle = {
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    padding: '40px 30px',
    borderRadius: '32px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const philosophyBox = {
    backgroundColor: 'rgba(30, 41, 59, 0.4)',
    padding: 'clamp(30px, 5vw, 60px) clamp(20px, 4vw, 40px)',
    borderRadius: '40px',
    border: '1px solid rgba(251, 191, 36, 0.1)',
    width: '100%',
    maxWidth: '1100px',
    backdropFilter: 'blur(10px)',
    textAlign: 'left',
    marginTop: '60px'
  };

  return (
    <section style={sectionStyle}>
      {/* Profile Image */}
      <img src={mem1} alt="Atumanya Memory" style={profileImgStyle} />

      {/* Social Links with Hover Effects */}
      <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="https://github.com/MemoTech44" target="_blank" rel="noreferrer" style={socialIconStyle} 
           onMouseOver={(e) => e.currentTarget.style.color = '#fbbf24'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://wa.me/256704405903" target="_blank" rel="noreferrer" style={socialIconStyle}
           onMouseOver={(e) => e.currentTarget.style.color = '#25D366'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://x.com/AtumanyaMemory" target="_blank" rel="noreferrer" style={socialIconStyle}
           onMouseOver={(e) => e.currentTarget.style.color = '#fbbf24'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.instagram.com/atumanyamemory/" target="_blank" rel="noreferrer" style={socialIconStyle}
           onMouseOver={(e) => e.currentTarget.style.color = '#fbbf24'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100070780981811" target="_blank" rel="noreferrer" style={socialIconStyle}
           onMouseOver={(e) => e.currentTarget.style.color = '#fbbf24'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.tiktok.com/@memotech_1" target="_blank" rel="noreferrer" style={socialIconStyle}
           onMouseOver={(e) => e.currentTarget.style.color = '#fbbf24'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
      
      <div style={{ color: '#fbbf24', letterSpacing: '5px', fontWeight: '800', fontSize: '0.8rem', marginBottom: '10px' }}>
        WEB & APP DEVELOPMENT
      </div>
      
      <h1 style={nameStyle}>Atumanya Memory</h1>

      {/* Brand Badge */}
      <div style={{ 
          backgroundColor: 'rgba(251, 191, 36, 0.1)', 
          border: '1px solid #fbbf24', 
          padding: '12px 30px', 
          borderRadius: '50px',
          marginTop: '15px'
      }}>
        <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: '#fbbf24' }}>
          <i className="fas fa-rocket" style={{ marginRight: '10px' }}></i>
          Founder, MemoTech Solutions
        </p>
      </div>

      <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '800px', margin: '40px auto', lineHeight: '1.8' }}>
        Building the next generation of high-performance digital systems. 
        I specialize in turning complex logic into seamless, scalable experiences 
        that empower modern businesses.
      </p>

      {/* Dynamic Stats */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', margin: '40px 0', flexWrap: 'wrap' }}>
        <div>
          <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fbbf24', margin: 0 }}>{experience}+</p>
          <p style={{ fontSize: '0.75rem', color: '#64748b', letterSpacing: '2px' }}>YEARS EXPERIENCE</p>
        </div>
        <div>
          <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fbbf24', margin: 0 }}>{projects}+</p>
          <p style={{ fontSize: '0.75rem', color: '#64748b', letterSpacing: '2px' }}>SUCCESSFUL PROJECTS</p>
        </div>
        <div>
          <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fbbf24', margin: 0 }}>{customers}%</p>
          <p style={{ fontSize: '0.75rem', color: '#64748b', letterSpacing: '2px' }}>SATISFACTION</p>
        </div>
      </div>

      <Link to="/portfolio" style={{
        backgroundColor: '#fbbf24', color: '#020617', padding: '18px 40px', 
        borderRadius: '15px', fontWeight: '800', textDecoration: 'none', fontSize: '1.1rem',
        boxShadow: '0 10px 30px rgba(251, 191, 36, 0.2)'
      }}>
        View Portfolio
      </Link>

      {/* Services Grid */}
      <div style={cardGrid}>
        <div style={cardStyle}>
          <i className="fas fa-globe" style={{ fontSize: '2rem', color: '#fbbf24' }}></i>
          <h3 style={{ margin: '10px 0' }}>Enterprise Web Portals</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
            Engineering high-speed, SEO-optimized portals that handle heavy administrative workflows with security and precision.
          </p>
        </div>
        <div style={cardStyle}>
          <i className="fas fa-server" style={{ fontSize: '2rem', color: '#fbbf24' }}></i>
          <h3 style={{ margin: '10px 0' }}>Custom System Design</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
            Robust backend architectures and data-driven management systems built for performance and absolute stability.
          </p>
        </div>
        <div style={cardStyle}>
          <i className="fas fa-mobile-alt" style={{ fontSize: '2rem', color: '#fbbf24' }}></i>
          <h3 style={{ margin: '10px 0' }}>Cross-Platform Apps</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
            Crafting intuitive iOS and Android experiences using React Native, focusing on real-time features and seamless UI.
          </p>
        </div>
      </div>

      {/* Responsive Philosophy Section */}
      <div style={philosophyBox}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Main Content */}
          <div style={{ flex: '1 1 450px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: '900', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
              Turning Complexity into <span style={{ color: '#fbbf24' }}>Simplicity.</span>
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
              At <b style={{color: 'white'}}>MemoTech Solutions</b>, we don't just write code; we solve business problems. 
              Our approach ensures that your technical requirements are met with systems that are stable, scalable, and secure.
            </p>
          </div>

          {/* Value Points */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ borderLeft: '3px solid #fbbf24', paddingLeft: '20px' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#f8fafc', fontSize: '1.1rem' }}>Technical Rigor</h4>
              <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>Expertise in full-stack architecture, high-speed performance, and data integrity.</p>
            </div>
            <div style={{ borderLeft: '3px solid #fbbf24', paddingLeft: '20px' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#f8fafc', fontSize: '1.1rem' }}>Business Vision</h4>
              <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>A founder-led perspective that prioritizes long-term ROI and professional brand stability.</p>
            </div>
            <div style={{ borderLeft: '3px solid #fbbf24', paddingLeft: '20px' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#f8fafc', fontSize: '1.1rem' }}>Scalable Growth</h4>
              <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>Building systems designed to evolve seamlessly as your business expands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;