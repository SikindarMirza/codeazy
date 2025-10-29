import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';

const Navbar = ({ goToCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();

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
        {/* <button className="cart-btn" onClick={goToCart}>
          🛒 <span className="cart-count">{cart.length}</span>
        </button> */}
        {/* <a href="#" className="cta-button">Get Started</a> */}
      </div>
    </nav>
  );
};

export default Navbar; 