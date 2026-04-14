import React, { useState } from 'react';

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Development',
    message: ''
  });

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '60px',
    marginTop: '60px'
  };

  const formStyle = {
    backgroundColor: '#0f172a',
    padding: '40px',
    borderRadius: '32px',
    border: '1px solid rgba(251, 191, 36, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
  };

  const inputStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '14px',
    border: '1px solid #1e293b',
    backgroundColor: '#020617',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    marginTop: '8px',
    transition: '0.3s'
  };

  const iconCircle = {
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fbbf24',
    fontSize: '1.2rem'
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#fbbf24';
    e.target.style.boxShadow = '0 0 10px rgba(251, 191, 36, 0.1)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#1e293b';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '3.5rem', margin: '0', fontWeight: '900', letterSpacing: '-2px' }}>
          Let’s Build Something <span style={{ color: '#fbbf24' }}>Great.</span>
        </h2>
        <p style={{ color: '#64748b', fontSize: '1.2rem', marginTop: '15px' }}>
          Ready to turn your ideas into high-performance digital reality.
        </p>
      </div>

      <div style={containerStyle}>
        {/* Left Side: Contact Info & Socials */}
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '10px' }}>Get In Touch</h3>
          <p style={{ lineHeight: '1.8', color: '#94a3b8', fontSize: '1.1rem' }}>
            Looking for a specialized developer for your next web portal or mobile application? 
            Reach out via the form or through my professional channels below.
          </p>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={iconCircle}><i className="fas fa-envelope"></i></div>
              <a href="mailto:atumanyamemory44@gmail.com" style={{color: '#cbd5e1', textDecoration: 'none', fontSize: '1.1rem'}}>
                atumanyamemory44@gmail.com
              </a>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={iconCircle}><i className="fas fa-phone"></i></div>
              <span style={{color: '#cbd5e1', fontSize: '1.1rem'}}>+256 773393162 / +256 704405903</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={iconCircle}><i className="fab fa-whatsapp"></i></div>
              <a 
                href="https://wa.me/256773393162" 
                target="_blank" 
                rel="noreferrer" 
                style={{color: '#25D366', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem'}}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div style={{ marginTop: '40px' }}>
            <p style={{ color: '#fbbf24', fontWeight: '800', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '20px' }}>
              CONNECT WITH ME
            </p>
            <div style={{ display: 'flex', gap: '25px' }}>
              {[
                { icon: 'fa-github', link: 'https://github.com/MemoTech44' },
                { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/memory-atumanya-b674082bb/' },
                { icon: 'fa-x-twitter', link: 'https://x.com/AtumanyaMemory' },
                { icon: 'fa-tiktok', link: 'https://www.tiktok.com/@memotech_1' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ fontSize: '1.5rem', color: '#94a3b8', transition: '0.3s' }}
                  onMouseOver={(e) => e.target.style.color = '#fbbf24'}
                  onMouseOut={(e) => e.target.style.color = '#94a3b8'}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
          <div>
            <label style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: '800', letterSpacing: '1px' }}>FULL NAME</label>
            <input 
              type="text" 
              placeholder="Atumanya Memory" 
              style={inputStyle} 
              onFocus={handleInputFocus} 
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: '800', letterSpacing: '1px' }}>EMAIL ADDRESS</label>
            <input 
              type="email" 
              placeholder="example@gmail.com" 
              style={inputStyle} 
              onFocus={handleInputFocus} 
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: '800', letterSpacing: '1px' }}>PROJECT CATEGORY</label>
            <select style={inputStyle} onFocus={handleInputFocus} onBlur={handleInputBlur}>
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>System Architecture</option>
              <option>Graphics & Branding</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: '800', letterSpacing: '1px' }}>PROJECT DETAILS</label>
            <textarea 
              rows="4" 
              placeholder="Tell me about your vision for Adit Construction or Pam Waste..." 
              style={inputStyle} 
              onFocus={handleInputFocus} 
              onBlur={handleInputBlur}
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={{
               backgroundColor: '#fbbf24', color: '#020617', padding: '18px', 
               borderRadius: '14px', fontWeight: '900', border: 'none', 
               cursor: 'pointer', fontSize: '1rem', marginTop: '10px',
               transition: '0.3s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Start Collaboration
          </button>
        </form>
      </div>
    </section>
  );
};

export default HireMe;