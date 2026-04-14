import React from 'react';

const Services = () => {
  const containerStyle = {
    backgroundColor: '#020617',
    minHeight: '100vh',
    padding: '120px 24px',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headerStyle = {
    textAlign: 'center',
    maxWidth: '800px',
    marginBottom: '80px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px'
  };

  const cardStyle = {
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    padding: '50px 40px',
    borderRadius: '40px',
    border: '1px solid rgba(251, 191, 36, 0.1)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const iconCircle = {
    width: '70px',
    height: '70px',
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: '#fbbf24',
    marginBottom: '10px'
  };

  const services = [
    {
      title: "Web Engineering",
      desc: "Building high-performance, scalable web applications using React and modern architectures. Specialized in administrative portals and corporate platforms.",
      icon: "fa-code",
      features: ["Custom CMS", "API Integration", "Performance Tuning"]
    },
    {
      title: "Mobile Solutions",
      desc: "Developing cross-platform mobile apps with React Native and Expo. Focused on intuitive user flows and native-like performance for iOS and Android.",
      icon: "fa-mobile-screen-button",
      features: ["Real-time Sync", "Push Notifications", "App Store Prep"]
    },
    {
      title: "System Architecture",
      desc: "Designing robust backend structures and database schemas. I build the 'brains' of your business to ensure data security and system stability.",
      icon: "fa-layer-group",
      features: ["Database Design", "Cloud Hosting", "System Security"]
    },
    {
      title: "UI/UX Strategy",
      desc: "User-centered design focused on conversion and accessibility. I bridge the gap between complex functionality and effortless human interaction.",
      icon: "fa-wand-magic-sparkles",
      features: ["Prototyping", "User Research", "Visual Systems"]
    },
    {
      title: "Corporate Branding",
      desc: "Under the MemoTech Solutions brand, I create visual identities that command respect. Professional logos, tax-compliant documentation, and high-end graphics.",
      icon: "fa-copyright",
      features: ["Logo Design", "Brand Guidelines", "Visual Assets"]
    },
    {
      title: "Technical Consulting",
      desc: "Expert guidance for startups and established firms. I help navigate technical debt, team collaboration using Git, and digital transformation.",
      icon: "fa-comments-dollar",
      features: ["Agile Workflow", "Git Management", "Tech Audits"]
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h5 style={{ color: '#fbbf24', letterSpacing: '4px', fontWeight: '800', margin: '0' }}>WHAT I OFFER</h5>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '15px 0', letterSpacing: '-2px' }}>Professional <span style={{ color: '#fbbf24' }}>Services.</span></h2>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '1.8' }}>
          I provide end-to-end digital solutions, from the first line of code to the final brand identity. 
          Stability, trust, and engineering precision are at the core of every service.
        </p>
      </div>

      <div style={gridStyle}>
        {services.map((service, index) => (
          <div 
            key={index} 
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.5)';
            }}
          >
            <div style={iconCircle}>
              <i className={`fas ${service.icon}`}></i>
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', margin: 0 }}>{service.title}</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', margin: 0 }}>{service.desc}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              {service.features.map((feat, i) => (
                <span key={i} style={{ 
                  fontSize: '0.75rem', 
                  color: '#fbbf24', 
                  backgroundColor: 'rgba(251, 191, 36, 0.1)', 
                  padding: '5px 12px', 
                  borderRadius: '100px',
                  fontWeight: '700'
                }}>
                  {feat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '20px' }}>Ready to start your next big project?</p>
        <button onClick={() => window.location.href='/hire-me'} style={{
          backgroundColor: '#fbbf24',
          color: '#020617',
          padding: '18px 45px',
          borderRadius: '15px',
          fontWeight: '800',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.1rem',
          boxShadow: '0 10px 30px rgba(251, 191, 36, 0.2)'
        }}>
          Get a Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Services;