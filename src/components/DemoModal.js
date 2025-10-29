import React from 'react';

const DemoModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="demo-modal-overlay" onClick={onClose}>
      <div className="demo-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <video controls autoPlay style={{ width: '100%', borderRadius: '16px' }}>
          <source src="/codeazy-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p style={{textAlign: 'center', marginTop: '1rem', color: '#fff'}}>Discover how learning at Codeazy is interactive, fun, and career-focused!</p>
      </div>
    </div>
  );
};

export default DemoModal; 