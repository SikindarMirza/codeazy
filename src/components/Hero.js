import React from 'react';

const Hero = ({ onDemo }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <style jsx>{`
        .hero h1 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, #00f5ff, #ff00f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (min-width: 900px) {
          .hero h1 {
            white-space: nowrap;
          }
        }
        @media (max-width: 900px) {
          .hero h1 {
            font-size: 2.5rem;
            white-space: normal;
          }
        }
      `}</style>
      <div className="hero-content">
        <h1>Learn Tech The Easy Way</h1>
        <p>Master programming, web development, and cutting-edge technologies with our interactive courses designed for modern learners.</p>
        <div className="hero-buttons">
          <a href="#courses" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }}>
            Explore Courses
          </a>
          {/* <button className="btn-secondary" onClick={onDemo}>Watch Demo</button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 