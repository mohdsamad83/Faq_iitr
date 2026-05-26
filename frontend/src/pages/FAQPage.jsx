import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import axios from 'axios';
import './FAQPage.css';

const FAQPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const { data } = await axios.get('/api/faqs');
        if (Array.isArray(data) && data.length > 0) {
          setFaqs(data);
        } else {
          // Fallback if DB is empty
          setFaqs([
            { _id: '1', category: "Selection", question: "What is the Vicharanashala internship?", answer: "It is a research-oriented program where students work on real-world projects under faculty guidance." },
            { _id: '2', category: "NOC", question: "When do I submit the NOC?", answer: "The No Objection Certificate must be submitted within 7 days of receiving the initial selection email." },
            { _id: '3', category: "General", question: "How are project teams formed?", answer: "Based on domain expertise and mentor assignment." }
          ]);
        }
      } catch (error) {
        console.error("Using fallback FAQs because backend is offline:", error);
        // Fallback if backend is not running or no Mongo connection
        setFaqs([
          { _id: '1', category: "Selection", question: "What is the Vicharanashala internship?", answer: "It is a research-oriented program where students work on real-world projects under faculty guidance." },
          { _id: '2', category: "NOC", question: "When do I submit the NOC?", answer: "The No Objection Certificate must be submitted within 7 days of receiving the initial selection email." },
          { _id: '3', category: "General", question: "How are project teams formed?", answer: "Based on domain expertise and mentor assignment." }
        ]);
      }
    };
    fetchFAQs();
  }, []);

  return (
    <div className="faq-container container animate-fade-in">
      <h2 className="page-title">Frequently Asked Questions</h2>
      
      <div className="faq-categories glass-panel">
        <button className="category-btn active">All Queries</button>
        <button className="category-btn">Selection & Offer</button>
        <button className="category-btn">NOC Requirements</button>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq._id} className="faq-card glass-panel" onClick={() => setExpanded(expanded === faq._id ? null : faq._id)}>
            <div className="faq-header">
              <span className="faq-badge">{faq.category}</span>
              <div className="faq-question-row">
                <h3>{faq.question}</h3>
                {expanded === faq._id ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            {expanded === faq._id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
