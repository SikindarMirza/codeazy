import React, { useState, useEffect, useRef } from 'react';

const InquiryBanner = ({ onVisibilityChange }) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSevI0k8scSPx-vdY0MjXdngPaIvtlibcOvxFDlBExdXisFhXg/viewform?usp=sharing&ouid=107750439552398701498';

  // Show banner after 5 seconds, then trigger animation
  useEffect(() => {
    const timer = setTimeout(() => {
      // Notify navbar first to adjust position - give it time to transition
      if (onVisibilityChange) {
        onVisibilityChange(true);
      }
      // Wait longer for navbar to fully adjust (navbar transition is 0.8s)
      setTimeout(() => {
        setShouldShow(true);
        // Additional delay to ensure DOM is ready and navbar is positioned
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(() => setIsVisible(true), 50);
          });
        });
      }, 200);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onVisibilityChange]);

  const handleClose = () => {
    setIsVisible(false);
    setShouldShow(false);
    if (onVisibilityChange) {
      onVisibilityChange(false);
    }
  };

  // Measure banner height and notify navbar
  useEffect(() => {
    if (shouldShow && bannerRef.current && onVisibilityChange) {
      const height = bannerRef.current.offsetHeight;
      onVisibilityChange(true);
      // Pass height if needed for dynamic adjustment
    }
  }, [shouldShow, onVisibilityChange]);

  // Don't render at all until shouldShow is true to avoid layout issues
  if (!shouldShow) return null;

  return (
    <div className="inquiry-banner" ref={bannerRef}>
      <div className="banner-content">
        <div className="banner-text">
          <span className="banner-icon">🤔</span>
          <span>Have questions? Click here to connect with us!</span>
        </div>
        <div className="banner-actions">
          <a 
            href={googleFormUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="banner-button"
          >
            Fill Form
          </a>
          <button 
            className="banner-close" 
            onClick={handleClose}
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      </div>
      <style jsx>{`
        .inquiry-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, rgb(41, 31, 3), rgb(21, 18, 2));
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 1500;
          padding: 0.75rem 0;
          min-height: 48px;
          box-sizing: border-box;
          transform: ${isVisible ? 'translateY(0)' : 'translateY(calc(100vh + 100px))'};
          opacity: ${isVisible ? '1' : '0'};
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-out;
          pointer-events: ${isVisible ? 'auto' : 'none'};
          will-change: transform;
          visibility: ${shouldShow ? 'visible' : 'hidden'};
        }
        .banner-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }
        .banner-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .banner-text {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #fff;
          font-weight: 500;
          flex: 0 1 auto;
          min-width: 0;
          max-width: fit-content;
        }
        .banner-text span:last-child {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .banner-icon {
          font-size: 1.25rem;
        }
        .banner-button {
          background: linear-gradient(45deg,rgb(255, 255, 0),rgb(125, 174, 11));
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          color: #000;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 245, 255, 0.3);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .banner-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 245, 255, 0.4);
        }
        .banner-close {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        .banner-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          transform: rotate(90deg);
        }
        @media (max-width: 768px) {
          .banner-content {
            padding: 0 1rem;
            flex-wrap: nowrap;
            gap: 0.75rem;
          }
          .banner-text {
            font-size: 0.85rem;
            flex: 1;
            min-width: 0;
            align-items: flex-start;
            padding-top: 0.1rem;
          }
          .banner-text span:last-child {
            line-height: 1.4;
          }
          .banner-button {
            padding: 0.4rem 1rem;
            font-size: 0.85rem;
            flex-shrink: 0;
            margin-left: auto;
          }
          .banner-close {
            flex-shrink: 0;
            margin-left: 0.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InquiryBanner;

