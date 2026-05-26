import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
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
            onLogin={() => {
              setIsAuthenticated(true);
              setIsLoginOpen(false);
            }} 
          />
        )}
      </div>
    </Router>
  );
}

export default App;
