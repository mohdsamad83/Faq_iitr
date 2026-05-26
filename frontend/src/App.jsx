import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FAQPage from './pages/FAQPage';
import StudentDashboard from './pages/StudentDashboard';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<FAQPage onLogin={(userData) => setUser(userData)} />} 
        />
        <Route 
          path="/dashboard" 
          element={
            user && user.role === 'student' 
              ? <StudentDashboard user={user} onLogout={() => setUser(null)} /> 
              : <Navigate to="/" />
          } 
        />
        <Route 
          path="/admin" 
          element={
            user && user.role === 'admin' 
              ? <div style={{ padding: '40px', fontFamily: 'Inter' }}><h1>Admin Panel (Under Construction)</h1></div>
              : <Navigate to="/" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
