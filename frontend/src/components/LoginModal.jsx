import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/login', { email, password });
      // Pass the logged-in user data up to the App component
      onLogin(data); 
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="modal-overlay animate-fade-in">
      <div className="modal-content glass-panel">
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your Vicharanashala account</p>
          {error && <p style={{ color: 'var(--status-danger)', marginTop: '10px' }}>{error}</p>}
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@iitr.ac.in" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          
          <button type="submit" className="btn-primary full-width">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
