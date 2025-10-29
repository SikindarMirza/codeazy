import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">Codeazy</div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#courses" onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }}>Courses</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>       
      </div>
    </nav>
  );
};

export default Navbar; 