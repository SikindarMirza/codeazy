import React, { useState, useEffect } from 'react';
// Removed useNavigate import

const CourseCard = ({ course, delay = 0, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`course-card ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="course-image" style={{ background: course.logoBackground }}>
        <div className="hover-hint">Click to view details</div>
        {course.icon && <span className="course-icon-emoji">{course.icon}</span>}
        {course.logoUrl && <img src={course.logoUrl} alt={course.title} />}
        {!course.icon && !course.logoUrl && course.logoName && (
          <span className="course-logo-text">{course.logoName}</span>
        )}
      </div>
      <div className="course-content">
        {/* <span className="course-level">{course.level}</span> */}
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-stats">
          {/* <span className="course-price">${course.price}</span> */}
          {/* <span className="course-duration">{course.duration}</span> */}
        </div>
        {/* <button 
          className={`add-cart-btn${inCart ? ' added' : ''}`}
          onClick={(e) => { e.stopPropagation(); inCart ? removeFromCart(course.title) : addToCart(course); }}
        >
          {inCart ? <span className="remove-cart-text">Remove from Cart</span> : 'Add to Cart'}
        </button> */}
      </div>
      <style jsx>{`
        .course-icon-emoji {
          font-size: 3rem;
        }
        .course-image {
          position: relative;
        }
        .course-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 2rem;
        }
        .hover-hint {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.45);
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.3px;
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
          text-transform: uppercase;
          font-size: 0.9rem;
        }
        .course-card.hovered .hover-hint {
          opacity: 1;
        }
        .course-logo-text {
          font-size: 3rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.9);
        }
        .course-stats {
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .add-cart-btn {
          align-self: flex-end;
          margin-top: auto;
          background: linear-gradient(90deg, #FFD600 0%, #FF9100 100%);
          color: #222;
          border: none;
          border-radius: 30px;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s, color 0.3s;
        }
        .add-cart-btn.added {
          background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
          color: #111;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(67, 233, 123, 0.15);
          cursor: pointer;
        }
        .remove-cart-text {
          color: #111;
        }
      `}</style>
    </div>
  );
};

export default CourseCard; 