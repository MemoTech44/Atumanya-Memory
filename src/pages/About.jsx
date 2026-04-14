import React from 'react';
import mem1 from '../assets/mem1.jpeg';

const About = () => {
  // Logic to update age automatically
  const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const myAge = calculateAge('2001-06-27');

  const sectionStyle = {
    backgroundColor: '#020617',
    minHeight: '100vh',
    padding: '120px 24px',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const containerStyle = {
    maxWidth: '1100px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '60px',
    alignItems: 'start'
  };

  const infoLabel = { color: '#fbbf24', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '5px' };
  const infoValue = { color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '20px' };

  const skillBadge = {
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    color: '#fbbf24',
    padding: '8px 16px',
    borderRadius: '10px',
    fontSize: '0.85rem',
    fontWeight: '700',
    border: '1px solid rgba(251, 191, 36, 0.2)'
  };

  const testimonialCard = {
    backgroundColor: '#0f172a',
    padding: '30px',
    borderRadius: '24px',
    borderLeft: '4px solid #fbbf24',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease',
    cursor: 'default'
  };

  const testimonials = [
    {
      text: "Atumanya's work on our service platform was exceptional. He simplified our complex booking and client management workflows into a sleek, fast interface. Our conversion rates have improved significantly thanks to his focus on user experience.",
      author: "C.E.O, Nuvia Agencies"
    },
    {
      text: "Memory transformed our school's digital presence. The Giants S.S website is fast, professional, and exactly what we needed.",
      author: "Executive Director, Giants S.S"
    },
    {
      text: "The Pam Waste App is a game changer. The logic behind the pickup scheduling is flawless. Highly recommended for complex system builds.",
      author: "Teammate, Pam Waste Management App"
    },
    {
      text: "Exceptional work on our corporate portal. The technical depth and understanding of engineering requirements is rare to find.",
      author: "CEO, Adit Construction Company"
    },
    {
      text: "A very organized and visionary developer. The management of the St. Jerome League platform has been seamless under his technical lead.",
      author: "League Chairperson, St. Jerome League"
    },
    {
      text: "Professionalism at its best. The St. Clelia digital systems have greatly improved our community engagement and administrative efficiency.",
      author: "Head Teacher, St. Clelia Primary School"
    }
  ];

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        
        {/* Left Side: Visuals & Core Info */}
        <div>
          <img src={mem1} alt="Atumanya Memory" style={{ width: '100%', borderRadius: '40px', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.1)' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <p style={infoLabel}>BIRTHDAY</p>
              <p style={infoValue}>27th June 2001</p>
            </div>
            <div>
              <p style={infoLabel}>AGE</p>
              <p style={infoValue}>{myAge} Years</p>
            </div>
            <div>
              <p style={infoLabel}>LOCATION</p>
              <p style={infoValue}>Kampala, Uganda</p>
            </div>
            <div>
              <p style={infoLabel}>DEGREE</p>
              <p style={infoValue}>BITC, Kyambogo</p>
            </div>
          </div>
        </div>

        {/* Right Side: Bio & Details */}
        <div>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', margin: '0 0 20px 0', letterSpacing: '-2px' }}>
            Tech Enthusiast & <span style={{ color: '#fbbf24' }}>Founder</span>
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.1rem' }}>
            I am a final-semester Bachelor of Information Technology and Computing student at Kyambogo University. 
            As the founder of <b>MemoTech Solutions</b>, I bridge the gap between complex engineering requirements 
            and user-centric digital products. My approach combines technical rigor with entrepreneurial 
            vision to build systems that aren't just functional, but transformative.
          </p>

          <h4 style={{ margin: '40px 0 20px 0', fontSize: '1.2rem' }}>Technical Proficiencies</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {['PHP', 'React', 'React Native', 'Expo', 'HTML', 'CSS', 'JavaScript','Photoshop', 'Canva', 'Git'].map(skill => (
              <span key={skill} style={skillBadge}>{skill}</span>
            ))}
          </div>

          <h4 style={{ margin: '40px 0 20px 0', fontSize: '1.2rem' }}>Interests & Focus</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', color: '#94a3b8' }}>
            {[
              'Technology Trends', 'Continuous Learning', 'Networking Events', 
              'Problem Solving', 'Community Involvement', 'Programming', 'Cybersecurity Awareness'
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                <i className="fas fa-check-circle" style={{ color: '#fbbf24' }}></i> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ maxWidth: '1100px', width: '100%', marginTop: '100px' }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '50px' }}>
          Client <span style={{ color: '#fbbf24' }}>Testimonials</span>
        </h3>
        
        {/* Responsive Flowing Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '25px' 
        }}>
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              style={testimonialCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <p style={{ fontStyle: 'italic', color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
                "{t.text}"
              </p>
              <p style={{ marginTop: '20px', fontWeight: '800', color: '#fbbf24', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;