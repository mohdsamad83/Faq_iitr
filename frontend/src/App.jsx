import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import FAQPage from './pages/FAQPage';
import RaiseQuery from './pages/RaiseQuery';
import TrackQuery from './pages/TrackQuery';
import AdminDashboard from './pages/AdminDashboard';
import AdminQueryReview from './pages/AdminQueryReview';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import './index.css';

const AppContent = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setIsLoginOpen(false);
    
    // Role-based routing
    if (userData.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
      <div className="app-container">
        <Navbar 
          onOpenLogin={() => setIsLoginOpen(true)} 
          isAuthenticated={isAuthenticated}
          onLogout={() => setIsAuthenticated(false)}
        />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/raise-query" element={<RaiseQuery />} />
          <Route path="/track" element={<TrackQuery />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/query/:id" element={<AdminQueryReview />} />
        </Routes>

        {isLoginOpen && (
          <LoginModal 
            onClose={() => setIsLoginOpen(false)} 
            onLogin={handleLogin} 
          />
        )}
      </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
