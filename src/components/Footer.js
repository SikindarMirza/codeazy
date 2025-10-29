import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Courses',
      links: ['Web Development', 'Data Science', 'Mobile Development', 'Cloud Computing']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Community', 'FAQ']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility']
    }
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Codeazy. All rights reserved. Making tech education accessible to everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 