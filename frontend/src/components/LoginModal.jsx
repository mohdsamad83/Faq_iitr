import React from 'react';
import { X } from 'lucide-react';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); // Mock login
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
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@iitr.ac.in" required />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
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
