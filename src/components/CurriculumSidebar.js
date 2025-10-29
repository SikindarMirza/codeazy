import React, { useState, useEffect } from 'react';

const CurriculumSidebar = ({ isOpen, onClose, curriculumData }) => {
  const [expandedSections, setExpandedSections] = useState({});
  
  useEffect(() => {
    if (isOpen && curriculumData) {
      setExpandedSections({});
    }
  }, [isOpen, curriculumData]);
  
  if (!curriculumData) return null;

  const toggleSection = (idx) => {
    setExpandedSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <>
      <div className={`curriculum-overlay ${isOpen ? 'visible' : ''}`} onClick={onClose}></div>
      <div className={`curriculum-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="curriculum-header">
          <div className="header-content">
            <div className="curriculum-icon">📚</div>
            <h2>{curriculumData.title}</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="curriculum-content">
          <div className="content-inner">
            {curriculumData.curriculum.map((item, idx) => (
              <div 
                className={`curriculum-section ${expandedSections[idx] ? 'expanded' : ''}`} 
                key={idx}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="section-header" onClick={() => toggleSection(idx)}>
                  <div className="section-number">{String(idx + 1).padStart(2, '0')}</div>
                  <h3>{item.section}</h3>
                  <div className="expand-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 11L3 6l1.41-1.41L8 8.17l3.59-3.58L13 6z"/>
                    </svg>
                  </div>
                </div>
                <div className="section-content">
                  <div className="topics-grid">
                    {item.topics.map((topic, tIdx) => (
                      <div className="topic-item" key={tIdx}>
                        <span className="topic-text">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="curriculum-footer">
          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-number">{curriculumData.curriculum.length}</span>
              <span className="stat-label">Sections</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{curriculumData.curriculum.reduce((sum, s) => sum + s.topics.length, 0)}</span>
              <span className="stat-label">Topics</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .curriculum-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .curriculum-overlay.visible {
          opacity: 1;
          pointer-events: all;
        }
        
        .curriculum-sidebar {
          position: fixed;
          top: 0;
          right: -40%;
          width: 40%;
          height: 100vh;
          background: #1a1a1a;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: -4px 0 30px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .curriculum-sidebar.open {
          right: 0;
        }
        
        .curriculum-header {
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .header-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .curriculum-icon {
          font-size: 2rem;
          opacity: 0.8;
        }
        
        .curriculum-header h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }
        
        .close-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 0.75rem;
          border-radius: 6px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 1);
        }
        
        .close-btn:active {
          transform: scale(0.95);
        }
        
        .curriculum-content {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
          scroll-behavior: smooth;
        }
        
        .curriculum-content::-webkit-scrollbar {
          width: 8px;
        }
        
        .curriculum-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        
        .curriculum-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        
        .curriculum-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        .content-inner {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .curriculum-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          margin-bottom: 1rem;
          overflow: hidden;
          transition: all 0.2s ease;
          animation: slideInRight 0.5s ease-out both;
        }
        
        .curriculum-section:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
        }
        
        .curriculum-section.expanded {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .section-header {
          padding: 1.5rem 1.75rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          user-select: none;
        }
        
        .section-number {
          background: #2a2a2a;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          min-width: 40px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }
        
        .curriculum-section.expanded .section-number {
          background: #00a8ff;
          border-color: #00a8ff;
        }
        
        .section-header h3 {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          transition: color 0.2s ease;
        }
        
        .curriculum-section.expanded .section-header h3 {
          color: #00a8ff;
        }
        
        .expand-icon {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: rgba(255, 255, 255, 0.5);
        }
        
        .curriculum-section.expanded .expand-icon {
          transform: rotate(180deg);
          color: rgba(255, 255, 255, 0.9);
        }
        
        .section-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .curriculum-section.expanded .section-content {
          max-height: 1000px;
        }
        
        .topics-grid {
          padding: 0 1.75rem 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }
        
        .topic-item {
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          transition: all 0.2s ease;
          animation: fadeIn 0.3s ease-out both;
        }
        
        .topic-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .topic-text {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .curriculum-footer {
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-stats {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          display: block;
          font-size: 1.75rem;
          font-weight: 700;
          color: #00a8ff;
        }
        
        .stat-label {
          display: block;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 0.25rem;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @media (max-width: 1024px) {
          .curriculum-sidebar {
            right: -50%;
            width: 50%;
          }
        }
        
        @media (max-width: 768px) {
          .curriculum-sidebar {
            right: -100%;
            width: 100%;
          }
          
          .curriculum-header h2 {
            font-size: 1.2rem;
          }
          
          .curriculum-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default CurriculumSidebar;

