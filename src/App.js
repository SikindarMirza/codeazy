import React, { useState, useEffect } from 'react';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import DemoModal from './components/DemoModal';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import CTA from './components/CTA';
import Contact from './components/Contact';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import CurriculumSidebar from './components/CurriculumSidebar';
import JavaScriptCurriculum from './components/JavaScriptCurriculum';
import ReactCurriculum from './components/ReactCurriculum';
import NodeCurriculum from './components/NodeCurriculum';
import HTMLCurriculum from './components/HTMLCurriculum';
import CSSCurriculum from './components/CSSCurriculum';
import GitCurriculum from './components/GitCurriculum';
import MongoDBCurriculum from './components/MongoDBCurriculum';
// Remove react-router-dom and CourseDetail imports

const App = () => {
  const [page, setPage] = useState('home');
  const [demoOpen, setDemoOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [curriculumPanelOpen, setCurriculumPanelOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const goToCart = () => {
    setPage('cart');
    setShowCart(true);
  };

  const goHome = () => {
    setPage('home');
    setShowCart(false);
  };

  const handleDemoOpen = () => {
    setDemoOpen(true);
  };

  const handleDemoClose = () => {
    setDemoOpen(false);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setCurriculumPanelOpen(true);
  };

  const handleCurriculumClose = () => {
    setCurriculumPanelOpen(false);
    setSelectedCourse(null);
  };

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero && scrollPosition < window.innerHeight) {
        const maxTranslate = 100; // px, adjust as needed
        const translateY = Math.min(scrollPosition * 0.5, maxTranslate);
        hero.style.transform = `translateY(${translateY}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <Navbar goToCart={goToCart} />
        <Hero onDemo={handleDemoOpen} />
        {showCart ? (
          <CartPage goHome={goHome} />
        ) : (
          <>
            <Features />
            <Courses onCourseClick={handleCourseClick} />
            <Contact />
            <Footer />
            <DemoModal open={demoOpen} onClose={handleDemoClose} />
            <CurriculumSidebar 
              isOpen={curriculumPanelOpen} 
              onClose={handleCurriculumClose}
              curriculumData={selectedCourse?.curriculumData}
            />
            {/* <JavaScriptCurriculum />
            <ReactCurriculum />
            <NodeCurriculum />
            <HTMLCurriculum />
            <CSSCurriculum />
            <GitCurriculum />
            <MongoDBCurriculum /> */}
          </>
        )}
        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: #fff;
            line-height: 1.6;
            overflow-x: hidden;
          }
          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(10, 10, 10, 0.9);
            backdrop-filter: blur(20px);
            z-index: 1000;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }
          .navbar.scrolled {
            background: rgba(10, 10, 10, 0.95);
          }
          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(45deg, #00f5ff, #ff00f5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: glow 3s ease-in-out infinite alternate;
          }
          @keyframes glow {
            0% { filter: brightness(1); }
            100% { filter: brightness(1.2) drop-shadow(0 0 20px rgba(0, 245, 255, 0.3)); }
          }
          .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
          }
          .nav-links a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            cursor: pointer;
          }
          .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(45deg, #00f5ff, #ff00f5);
            transition: width 0.3s ease;
          }
          .nav-links a:hover::after {
            width: 100%;
          }
          .cta-button {
            background: linear-gradient(45deg, #00f5ff, #ff00f5);
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            text-decoration: none;
            color: #fff;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 245, 255, 0.3);
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 245, 255, 0.4);
          }
          .cart-btn {
            background: none;
            border: none;
            color: #fff;
            font-size: 1.5rem;
            cursor: pointer;
            position: relative;
            margin-right: 1rem;
          }
          .cart-count {
            background: #ff00f5;
            color: #fff;
            border-radius: 50%;
            padding: 0.2rem 0.6rem;
            font-size: 0.9rem;
            position: absolute;
            top: -10px;
            right: -10px;
          }
          .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad1" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgba(0,245,255,0.1);stop-opacity:1" /><stop offset="100%" style="stop-color:rgba(255,0,245,0.1);stop-opacity:0" /></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23grad1)" /><circle cx="800" cy="300" r="150" fill="url(%23grad1)" /><circle cx="400" cy="700" r="120" fill="url(%23grad1)" /></svg>');
            animation: float 20s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .hero-content {
            max-width: 800px;
            z-index: 2;
            position: relative;
          }
          .hero h1 {
            font-size: 4rem;
            font-weight: 900;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #fff, #00f5ff, #ff00f5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: slideInUp 1s ease-out;
          }
          @keyframes slideInUp {
            0% { transform: translateY(100px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .hero p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            animation: slideInUp 1s ease-out 0.2s both;
          }
          .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: slideInUp 1s ease-out 0.4s both;
          }
          .btn-primary {
            background: linear-gradient(45deg, #00f5ff, #ff00f5);
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            color: #fff;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 245, 255, 0.3);
            cursor: pointer;
          }
          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 245, 255, 0.4);
          }
          .btn-secondary {
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            color: #fff;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }
          .btn-secondary:hover {
            border-color: #00f5ff;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 245, 255, 0.2);
          }
          .features {
            padding: 6rem 0;
            background:
              linear-gradient(135deg, rgba(0,0,0,0.7), rgba(10,10,30,0.8)),
              url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          .section-title {
            text-align: center;
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 3rem;
          }
          .section-title-gradient {
            background: linear-gradient(90deg, #00FFB0 0%, #FF6B00 40%, #A259FF 70%, #FFF500 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 8px rgba(255,255,255,0.2));
          }
          .section-title-codeazy {
            background: linear-gradient(90deg, #00f5ff 0%, #ff00f5 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 8px rgba(255,255,255,0.2));
          }
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }
          .feature-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            opacity: 0;
            transform: translateY(30px);
          }
          .feature-card.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 245, 255, 0.1);
            border-color: rgba(0, 245, 255, 0.3);
          }
          .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1rem;
            background: linear-gradient(45deg, #00f5ff, #ff00f5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
          }
          .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #00f5ff;
          }
          .courses {
            padding: 6rem 0;
            background:
              linear-gradient(135deg, rgba(10,10,30,0.8), rgba(0,0,0,0.7)),
              url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
          }
          .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }
          .course-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            opacity: 0;
            transform: translateY(30px);
          }
          .course-card.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .course-card:hover,
          .course-card.hovered {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 245, 255, 0.1);
          }
          .course-image {
            height: 200px;
            background: linear-gradient(45deg, #00f5ff, #ff00f5);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #fff;
          }
          .course-content {
            padding: 1.5rem;
          }
          .course-level {
            display: inline-block;
            background: rgba(0, 245, 255, 0.2);
            color: #00f5ff;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }
          .course-card h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #fff;
          }
          .course-card p {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1rem;
          }
          .course-stats {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
          }
          .course-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: #FFD600;
            background: linear-gradient(90deg, #FFD600 0%, #FF9100 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .course-duration {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
          }
          .cta-section {
            padding: 6rem 0;
            text-align: center;
            background: linear-gradient(45deg, rgba(0, 245, 255, 0.1), rgba(255, 0, 245, 0.1));
          }
          .cta-section h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #fff;
          }
          .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: rgba(255, 255, 255, 0.8);
          }
          footer {
            background: rgba(0, 0, 0, 0.8);
            padding: 3rem 0 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
          }
          .footer-section h3 {
            color: #00f5ff;
            margin-bottom: 1rem;
          }
          .footer-section ul {
            list-style: none;
          }
          .footer-section ul li {
            margin-bottom: 0.5rem;
          }
          .footer-section ul li a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .footer-section ul li a:hover {
            color: #00f5ff;
          }
          .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.6);
          }
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .hero h1 {
              font-size: 2.5rem;
            }
            .hero p {
              font-size: 1.2rem;
            }
            .hero-buttons {
              flex-direction: column;
              align-items: center;
            }
            .section-title {
              font-size: 2rem;
            }
            .features-grid,
            .courses-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </CartProvider>
  );
};

export default App;