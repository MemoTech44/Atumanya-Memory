import React from 'react';

const Resume = () => {
  return (
    <>
      <style>{`
        .resume-container {
          background-color: #020617;
          min-height: 100vh;
          padding: 100px 24px;
          font-family: "Plus Jakarta Sans", sans-serif;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .resume-wrapper {
          width: 100%;
          max-width: 1100px; /* Widened to support two-column grid */
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .section-header {
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(251, 191, 36, 0.2);
          padding-bottom: 10px;
        }

        .section-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #fbbf24;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* The Grid System: 2 columns on large screens */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .entry {
          position: relative;
          padding-left: 20px;
          border-left: 1px solid rgba(251, 191, 36, 0.2);
        }

        .entry::before {
          content: "";
          position: absolute;
          left: -5px;
          top: 8px;
          width: 9px;
          height: 9px;
          background: #fbbf24;
          border-radius: 50%;
        }

        .highlight-box {
          margin-top: 20px;
          background: rgba(251, 191, 36, 0.05);
          padding: 20px;
          border-radius: 20px;
          border: 1px solid rgba(251, 191, 36, 0.1);
        }

        .project-list {
          list-style: none;
          padding: 0;
          margin-top: 15px;
          color: #94a3b8;
          line-height: 1.8;
        }

        .project-list li b {
          color: #f8fafc;
        }

        /* RESPONSIVE BREAKPOINT */
        @media (max-width: 850px) {
          .content-grid {
            grid-template-columns: 1fr; /* Stacks to 1 column on tablets/phones */
          }
          
          h1 { font-size: 2.5rem !important; }
        }
      `}</style>

      <div className="resume-container">
        <div className="resume-wrapper">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0' }}>
              Professional <span style={{ color: '#fbbf24' }}>Resume</span>
            </h1>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', maxWidth: '700px', margin: '20px auto' }}>
              Software Engineer and Founder of <b style={{color: 'white'}}>MemoTech Solutions</b>. Specialized in full-stack development, 
              system architecture, and corporate visual identity.
            </p>
          </div>

          {/* Experience Grid */}
          <div>
            <div className="section-header">
              <span className="section-title">Development & Education</span>
            </div>
            <div className="content-grid">
              <div className="entry">
                <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', margin: '0' }}>BSc. Information Technology & Computing</h3>
                <div style={{ color: '#fbbf24', fontWeight: '600', margin: '5px 0 10px', fontSize: '0.9rem' }}>Kyambogo University | 2023 — Present</div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Finalist student focusing on advanced software engineering, database management, and systems analysis.</p>
              </div>

              <div className="entry">
                <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', margin: '0' }}>Senior Full-Stack Developer</h3>
                <div style={{ color: '#fbbf24', fontWeight: '600', margin: '5px 0 10px', fontSize: '0.9rem' }}>Web Projects</div>
                <ul className="project-list">
                  <li><b style={{fontWeight: '700'}}>Adit Construction:</b> Corporate engineering portal.</li>
                  <li><b style={{fontWeight: '700'}}>Giants Secondary School:</b> Student information system.</li>
                  <li><b style={{fontWeight: '700'}}>Nuvia Agencies:</b> Business service platform.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile & Branding Grid */}
          <div>
            <div className="section-header">
              <span className="section-title">Mobile & Visual Identity</span>
            </div>
            <div className="content-grid">
              <div className="entry">
                <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', margin: '0' }}>React Native Specialist</h3>
                <div style={{ color: '#fbbf24', fontWeight: '600', margin: '5px 0 10px', fontSize: '0.9rem' }}>Mobile Apps</div>
                <div className="highlight-box">
                  <b style={{ color: 'white', display: 'block', marginBottom: '5px', fontWeight: '800' }}>Project Highlight: Pam Waste App</b>
                  <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>
                    Full-cycle waste management system for pickups, scheduling, and subscriptions.
                  </p>
                </div>
              </div>

              <div className="entry">
                <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', margin: '0' }}>Brand Identity & Graphics</h3>
                <div style={{ color: '#fbbf24', fontWeight: '600', margin: '5px 0 10px', fontSize: '0.9rem' }}>Founder @ MemoTech</div>
                <ul className="project-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <li>• Uganda Special Tours</li>
                  <li>• Cleps Magazine 2025</li>
                  <li>• St. Jerome League</li>
                  <li>• Adit Company</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action */}
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <button style={{
              backgroundColor: 'transparent',
              border: '2px solid #fbbf24',
              color: '#fbbf24',
              padding: '16px 45px',
              borderRadius: '15px',
              fontWeight: '800',
              cursor: 'pointer',
              transition: '0.3s'
            }}>
              DOWNLOAD FULL CV
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Resume;