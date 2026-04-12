import React, { useState, useEffect } from 'react';

const Hero = () => {
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

  const sectionStyle = {
    backgroundColor: '#020617',
    minHeight: '160vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '120px 24px',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    color: 'white',
    textAlign: 'center',
    position: 'relative'
  };

  const nameStyle = {
    fontSize: 'clamp(3.5rem, 12vw, 7rem)',
    fontWeight: '900',
    margin: '20px 0',
    lineHeight: '1',
    letterSpacing: '-4px',
    background: 'linear-gradient(to bottom, #ffffff 40%, #fbbf24 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
    transition: '0.3s'
  };

  const iconStyle = { fontSize: '2.2rem', color: '#fbbf24', marginBottom: '10px' };

  const techBox = {
    backgroundColor: 'rgba(30, 41, 59, 0.4)',
    padding: '50px 30px',
    borderRadius: '40px',
    border: '1px solid rgba(251, 191, 36, 0.1)',
    width: '100%',
    maxWidth: '1100px',
    backdropFilter: 'blur(10px)'
  };

  const badgeStyle = {
    backgroundColor: '#1e293b',
    padding: '15px',
    borderRadius: '16px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    border: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  return (
    <section style={sectionStyle}>
      {/* Header Info */}
      <div style={{ zIndex: 1 }}>
        <div style={{ color: '#fbbf24', letterSpacing: '5px', fontWeight: '800', fontSize: '0.9rem' }}>
          WEB & APP DEVELOPMENT
        </div>
        <h1 style={nameStyle}>Atumanya Memory</h1>
        
        {/* Company Founder Badge */}
        <div style={{ 
            backgroundColor: 'rgba(251, 191, 36, 0.1)', 
            border: '1px solid #fbbf24', 
            padding: '10px 25px', 
            borderRadius: '50px',
            display: 'inline-block',
            marginTop: '10px'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '700', color: '#fbbf24' }}>
            <i className="fas fa-rocket" style={{ marginRight: '10px' }}></i>
            Founder, MemoTech Solutions
          </p>
        </div>
        
        <p style={{ fontSize: '1.4rem', color: '#94a3b8', maxWidth: '850px', margin: '40px auto', lineHeight: '2' }}>
          "Transforming complex logic into <span style={{ color: 'white' }}>seamless digital poetry</span>. 
          I architect experiences that bridge the gap between human imagination and technological reality."
        </p>

        {/* Dynamic Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', margin: '40px 0', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fbbf24', margin: 0 }}>{experience}+</p>
            <p style={{ fontSize: '0.8rem', color: '#64748b', letterSpacing: '2px' }}>YEARS EXPERIENCE</p>
          </div>
          <div>
            <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fbbf24', margin: 0 }}>{projects}+</p>
            <p style={{ fontSize: '0.8rem', color: '#64748b', letterSpacing: '2px' }}>WORKED PROJECTS</p>
          </div>
          <div>
            <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fbbf24', margin: 0 }}>{customers}%</p>
            <p style={{ fontSize: '0.8rem', color: '#64748b', letterSpacing: '2px' }}>SATISFACTION</p>
          </div>
        </div>
      </div>

      {/* The 6 Specialized Service Cards */}
      <div style={cardGrid}>
        <div style={cardStyle}>
          <i className="fas fa-globe" style={iconStyle}></i>
          <h3 style={{ margin: 0 }}>Website Development</h3>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0 }}>Creating high-speed, SEO-optimized web portals and scalable enterprise solutions.</p>
        </div>
        <div style={cardStyle}>
          <i className="fas fa-paint-brush" style={iconStyle}></i>
          <h3 style={{ margin: 0 }}>Graphics Designing</h3>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0 }}>Professional branding, corporate identities, and high-impact visual communication.</p>
        </div>
        <div style={cardStyle}>
          <i className="fas fa-server" style={iconStyle}></i>
          <h3 style={{ margin: 0 }}>System Development</h3>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0 }}>Building robust backend architectures and complex management systems.</p>
        </div>
        <div style={cardStyle}>
          <i className="fas fa-mobile-alt" style={iconStyle}></i>
          <h3 style={{ margin: 0 }}>Mobile App Design</h3>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0 }}>Crafting intuitive mobile interfaces for iOS and Android using React Native & Expo.</p>
        </div>
        <div style={cardStyle}>
          <i className="fas fa-vial" style={iconStyle}></i>
          <h3 style={{ margin: 0 }}>UI/UX Design</h3>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0 }}>User-centered prototyping focused on accessibility and seamless digital journeys.</p>
        </div>
        <div style={cardStyle}>
          <i className="fas fa-users-cog" style={iconStyle}></i>
          <h3 style={{ margin: 0 }}>Technical Collaboration</h3>
          <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0 }}>Agile leadership and Git version control for high-performing development teams.</p>
        </div>
      </div>

      {/* Boxed Tech Stack */}
      <div style={techBox}>
        <p style={{ color: '#fbbf24', fontWeight: '900', letterSpacing: '3px', marginBottom: '30px' }}>TOOLS & FRAMEWORKS</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
          <div style={badgeStyle}><i className="fab fa-react" style={{color: '#61DAFB'}}></i> REACT</div>
          <div style={badgeStyle}><i className="fas fa-mobile-screen"></i> REACT NATIVE</div>
          <div style={badgeStyle}><i className="fas fa-bolt" style={{color: '#fbbf24'}}></i> EXPO</div>
          <div style={badgeStyle}><i className="fas fa-fire" style={{color: '#FFCA28'}}></i> FIREBASE</div>
          <div style={badgeStyle}><i className="fab fa-node-js" style={{color: '#68A063'}}></i> NODE.JS</div>
          <div style={badgeStyle}><i className="fab fa-python" style={{color: '#3776AB'}}></i> PYTHON</div>
          <div style={badgeStyle}><i className="fab fa-php" style={{color: '#777BB4'}}></i> PHP</div>
          <div style={badgeStyle}><i className="fas fa-palette"></i> CANVA</div>
          <div style={badgeStyle}><i className="fas fa-image" style={{color: '#31A8FF'}}></i> PHOTOSHOP</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;