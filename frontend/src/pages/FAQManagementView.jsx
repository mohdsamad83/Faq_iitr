import React from 'react';
import { Search, Plus, Filter, ChevronDown, Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import './FAQManagementView.css';

const MOCK_FAQS = [
  {
    id: 1,
    question: 'What are the protocols for high-performance computing cluster access?',
    desc: 'Procedures for securing SSH keys and node allocation...',
    category: 'Infrastructure',
    badgeClass: 'infra',
    date: 'Oct 12, 2023'
  },
  {
    id: 2,
    question: 'Guidelines for International Conference travel reimbursement?',
    desc: 'Documentation required for MEA clearance and airfare...',
    category: 'Administration',
    badgeClass: 'admin',
    date: 'Oct 08, 2023'
  },
  {
    id: 3,
    question: 'Is Institutional Ethics Committee (IEC) approval mandatory for theory papers?',
    desc: 'Clarification on human-data vs abstract theoretical...',
    category: 'Ethics',
    badgeClass: 'ethics',
    date: 'Sep 28, 2023'
  },
  {
    id: 4,
    question: 'How to apply for the Vicharanashala Research Fellowship (VRF)?',
    desc: 'Step-by-step portal guide for PhD candidates...',
    category: 'Admissions',
    badgeClass: 'admissions',
    date: 'Sep 15, 2023'
  }
];

const FAQManagementView = () => {
  return (
    <div className="faqm-container">
      {/* Header */}
      <div className="faqm-header-section">
        <div>
          <div className="faqm-super-title">Administration</div>
          <h1 className="faqm-title">FAQ Management</h1>
          <p className="faqm-subtitle">
            Manage scholarly queries and institutional documentation. Maintain clarity and academic rigor for all portal users.
          </p>
        </div>
        <button className="faqm-add-btn" onClick={() => alert("Add New FAQ clicked!")}>
          <Plus size={16} /> Add New FAQ
        </button>
      </div>

      {/* Search & Filter */}
      <div className="faqm-controls">
        <div className="faqm-search-box">
          <Search size={20} color="#9ca3af" />
          <input type="text" placeholder="Search by question or category keywords..." />
        </div>
        <div className="faqm-filter-box">
          <Filter size={20} color="#b45309" />
          <div className="faqm-filter-label">
            <span className="faqm-filter-title">Category Filter</span>
            <span className="faqm-filter-value">All Categories</span>
          </div>
          <ChevronDown size={16} color="#6b7280" />
        </div>
      </div>

      {/* Table Section */}
      <div className="faqm-table-wrap">
        <table className="faqm-table">
          <thead>
            <tr>
              <th>Question & Description</th>
              <th>Category</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_FAQS.map(faq => (
              <tr key={faq.id}>
                <td>
                  <div className="faqm-question">{faq.question}</div>
                  <div className="faqm-desc">{faq.desc}</div>
                </td>
                <td>
                  <span className={`faqm-badge ${faq.badgeClass}`}>
                    {faq.category}
                  </span>
                </td>
                <td className="faqm-date">{faq.date}</td>
                <td>
                  <div className="faqm-actions">
                    <button className="faqm-icon-btn edit" onClick={() => alert(`Edit FAQ ${faq.id}`)}>
                      <Edit2 size={16} />
                    </button>
                    <button className="faqm-icon-btn delete" onClick={() => alert(`Delete FAQ ${faq.id}`)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="faqm-pagination">
          <div className="faqm-page-info">Showing 1-4 of 32 results</div>
          <div className="faqm-page-controls">
            <button className="faqm-page-btn" disabled><ChevronLeft size={16} /></button>
            <button className="faqm-page-btn active">1</button>
            <button className="faqm-page-btn">2</button>
            <button className="faqm-page-btn">3</button>
            <button className="faqm-page-btn"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FAQManagementView;
