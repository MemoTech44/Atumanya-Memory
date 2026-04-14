import React from 'react';

const Portfolio = () => {
  const sectionStyle = {
    padding: '120px 24px',
    backgroundColor: '#020617', 
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    minHeight: '100vh'
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
    transition: 'all 0.3s ease',
    cursor: 'default'
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

  const projects = [
    {
      title: "Pam Waste App",
      tag: "App Development",
      desc: "Full-stack waste management system with real-time pickup requests and scheduling.",
      icon: "fa-mobile-alt",
      label: "SYSTEM APP"
    },
    {
      title: "Adit Construction",
      tag: "Web Engineering",
      desc: "Professional corporate portal for high-end engineering and construction management.",
      icon: "fa-hard-hat",
      label: "CONSTRUCTION PORTAL"
    },
    {
      title: "Giants S.S Website",
      tag: "Web Engineering",
      desc: "Modern institutional website designed for information management and student engagement.",
      icon: "fa-school",
      label: "EDUCATION WEB"
    },
    {
      title: "Nuvia Agencies",
      tag: "Web Engineering",
      desc: "Professional business portal focusing on service delivery and automated client inquiries.",
      icon: "fa-building",
      label: "AGENCY PORTAL"
    },
    {
      title: "St. Jerome League",
      tag: "Web Engineering",
      desc: "Interactive sports platform for league tracking, fixtures, and real-time results.",
      icon: "fa-trophy",
      label: "SPORTS WEB"
    },
    {
      title: "Corporate Branding",
      tag: "Graphics Design",
      desc: "High-end visual identities and assets created under the MemoTech Solutions brand.",
      icon: "fa-palette",
      label: "BRANDING"
    }
  ];

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0', letterSpacing: '-2px' }}>
          Featured <span style={{ color: '#fbbf24' }}>Work</span>
        </h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '15px', maxWidth: '600px' }}>
          A collection of systems and platforms engineered for stability, speed, and impact.
        </p>
      </div>

      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={projectCard}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <div style={imgPlaceholder}>
              <i className={`fas ${project.icon}`} style={{fontSize: '2.5rem', marginRight: '15px'}}></i>
              {project.label}
            </div>
            <div style={contentStyle}>
              <span style={tagStyle}>{project.tag}</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0', color: '#f8fafc' }}>
                {project.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: '0' }}>
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;