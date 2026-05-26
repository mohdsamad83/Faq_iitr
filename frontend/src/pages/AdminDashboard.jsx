import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container container animate-fade-in">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <div className="stats-grid">
          <div className="stat-card glass-panel">
            <h3>Pending Queries</h3>
            <span className="stat-number">12</span>
          </div>
          <div className="stat-card glass-panel">
            <h3>Flagged Content</h3>
            <span className="stat-number danger">3</span>
          </div>
        </div>
      </div>

      <div className="admin-content">
        <div className="glass-panel">
          <div className="panel-header">
            <h3>Recent Queries</h3>
            <button className="btn-secondary" onClick={() => navigate('/admin')}>View All</button>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#4829</td>
                <td>NOC</td>
                <td><span className="status-badge warning">Escalated</span></td>
                <td><button className="btn-primary" onClick={() => navigate('/admin/query/4829')}>Review</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
