import React from 'react';

const Projects = () => {
  const sectionStyle = {
    padding: '120px 24px',
    backgroundColor: '#020617', 
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: '"Plus Jakarta Sans", sans-serif'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    width: '100%',
    maxWidth: '1200px'
  };

  const projectCard = {
    backgroundColor: '#0f172a',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease'
  };

  const imgPlaceholder = {
    width: '100%',
    height: '220px',
    backgroundColor: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    color: '#fbbf24',
    fontWeight: '800',
    letterSpacing: '2px',
    borderBottom: '1px solid rgba(251, 191, 36, 0.1)'
  };

  const contentStyle = {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  const tagStyle = {
    fontSize: '0.7rem',
    color: '#fbbf24',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    padding: '4px 12px',
    borderRadius: '20px',
    width: 'fit-content'
  };

  const titleStyle = {
    fontSize: '1.4rem',
    fontWeight: '700',
    margin: '0',
    color: '#f8fafc'
  };

  const descStyle = {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    margin: '0'
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0' }}>
          Featured <span style={{ color: '#fbbf24' }}>Work</span>
        </h2>
        <p style={{ color: '#64748b', fontSize: '1.2rem', marginTop: '15px' }}>
          Proven expertise in web architecture and visual identity.
        </p>
      </div>

      <div style={gridStyle}>
        {/* Project 1: Pam Waste App */}
        <div style={projectCard}>
          <div style={imgPlaceholder}>
            <i className="fas fa-mobile-alt" style={{fontSize: '2rem', marginRight: '10px'}}></i>
            SYSTEM APP
          </div>
          <div style={contentStyle}>
            <span style={tagStyle}>App Development</span>
            <h3 style={titleStyle}>Pam Waste App</h3>
            <p style={descStyle}>Full-stack waste management system with real-time tracking using React Native.</p>
          </div>
        </div>

        {/* Project 2: Giants S.S */}
        <div style={projectCard}>
          <div style={imgPlaceholder}>
            <i className="fas fa-school" style={{fontSize: '2rem', marginRight: '10px'}}></i>
            EDUCATION WEB
          </div>
          <div style={contentStyle}>
            <span style={tagStyle}>Web Engineering</span>
            <h3 style={titleStyle}>Giants S.S Website</h3>
            <p style={descStyle}>Modern institutional website designed for information management and student engagement.</p>
          </div>
        </div>

        {/* Project 3: Nuvia Agencies */}
        <div style={projectCard}>
          <div style={imgPlaceholder}>
            <i className="fas fa-building" style={{fontSize: '2rem', marginRight: '10px'}}></i>
            AGENCY PORTAL
          </div>
          <div style={contentStyle}>
            <span style={tagStyle}>Web Engineering</span>
            <h3 style={titleStyle}>Nuvia Agencies</h3>
            <p style={descStyle}>Professional business portal focusing on service delivery and automated client inquiries.</p>
          </div>
        </div>

        {/* Project 4: St. Clelia */}
        <div style={projectCard}>
          <div style={imgPlaceholder}>
            <i className="fas fa-graduation-cap" style={{fontSize: '2rem', marginRight: '10px'}}></i>
            SCHOOL WEB
          </div>
          <div style={contentStyle}>
            <span style={tagStyle}>Web Development</span>
            <h3 style={titleStyle}>St. Clelia Primary</h3>
            <p style={descStyle}>Comprehensive school website featuring academic portals and event management.</p>
          </div>
        </div>

        {/* Project 5: St. Jerome League */}
        <div style={projectCard}>
          <div style={imgPlaceholder}>
            <i className="fas fa-trophy" style={{fontSize: '2rem', marginRight: '10px'}}></i>
            SPORTS WEB
          </div>
          <div style={contentStyle}>
            <span style={tagStyle}>Web Engineering</span>
            <h3 style={titleStyle}>St. Jerome League</h3>
            <p style={descStyle}>Interactive sports platform for league tracking, fixtures, and real-time results.</p>
          </div>
        </div>

        {/* Project 6: Graphics Portfolio */}
        <div style={projectCard}>
          <div style={imgPlaceholder}>
            <i className="fas fa-palette" style={{fontSize: '2rem', marginRight: '10px'}}></i>
            BRANDING
          </div>
          <div style={contentStyle}>
            <span style={tagStyle}>Graphics Design</span>
            <h3 style={titleStyle}>Corporate Graphics</h3>
            <p style={descStyle}>High-end branding assets and visual content for various organizations and individuals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;