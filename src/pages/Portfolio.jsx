import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  // 1. Fetch Projects from Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedProjects = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // 2. Filter Logic
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // --- Styles ---
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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '40px'
  };

  const projectCard = {
    backgroundColor: '#0f172a',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column'
  };

  const imageContainer = {
    width: '100%',
    aspectRatio: '16 / 9', // Standard sizing
    backgroundColor: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(251, 191, 36, 0.1)'
  };

  return (
    <section style={sectionStyle}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', margin: '0', letterSpacing: '-2px' }}>
          Featured <span style={{ color: '#fbbf24' }}>Work</span>
        </h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '15px' }}>
          Engineering stable, high-impact systems for web and mobile.
        </p>

        {/* Filter Navigation */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
          {['All', 'Web Engineering', 'App Development', 'Graphics Design'].map((cat) => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: filter === cat ? '#fbbf24' : 'rgba(255,255,255,0.1)',
                backgroundColor: filter === cat ? '#fbbf24' : 'transparent',
                color: filter === cat ? '#020617' : '#94a3b8',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '0.8rem',
                transition: '0.3s'
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={{ color: '#fbbf24', padding: '100px', fontWeight: 'bold' }}>INITIALIZING PORTFOLIO...</div>
      ) : (
        <div style={gridStyle}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
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
              {/* standardized Thumbnail */}
              <div style={imageContainer}>
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <i className={`fas ${project.category === 'App Development' ? 'fa-mobile-screen' : 'fa-code-branch'}`} 
                       style={{fontSize: '3rem', color: '#fbbf24', display: 'block', marginBottom: '10px'}}></i>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '800' }}>MEMOTECH SOLUTION</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ 
                  fontSize: '0.65rem', color: '#fbbf24', fontWeight: '900', 
                  letterSpacing: '2px', textTransform: 'uppercase',
                  background: 'rgba(251, 191, 36, 0.1)', padding: '4px 12px', borderRadius: '50px', width: 'fit-content'
                }}>
                  {project.category}
                </span>
                
                <h3 style={{ fontSize: '1.4rem', margin: '15px 0 10px 0', color: '#f8fafc' }}>
                  {project.title}
                </h3>
                
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {project.description}
                </p>

                {project.link && (
                  <div style={{ marginTop: 'auto' }}>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: '800', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      EXPLORE PROJECT <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredProjects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px' }}>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>No projects found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default Portfolio;