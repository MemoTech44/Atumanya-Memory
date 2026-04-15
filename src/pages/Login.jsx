import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin'); // Redirect to admin panel
    } catch (err) {
      setError('Invalid credentials. Access denied.');
    }
  };

  const containerStyle = {
    backgroundColor: '#020617',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    padding: '20px'
  };

  const cardStyle = {
    background: '#0f172a',
    padding: '40px',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid rgba(251, 191, 36, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0 20px 0',
    background: '#1e293b',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none'
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    background: '#fbbf24',
    color: '#020617',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '800',
    cursor: 'pointer',
    transition: '0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ color: 'white', margin: '0', fontSize: '1.8rem' }}>Admin <span style={{ color: '#fbbf24' }}>Login</span></h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '10px' }}>Secure access for Atumanya Memory</p>
        </div>

        {error && <p style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.85rem' }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <label style={{ color: '#f8fafc', fontSize: '0.85rem', fontWeight: '600' }}>Email Address</label>
          <input 
            type="email" 
            style={inputStyle} 
            placeholder="admin@memotech.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={{ color: '#f8fafc', fontSize: '0.85rem', fontWeight: '600' }}>Password</label>
          <input 
            type="password" 
            style={inputStyle} 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={buttonStyle}>
            AUTHENTICATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;