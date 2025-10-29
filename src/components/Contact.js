import React from 'react';

const Contact = () => {
  const contacts = [
    {
      name: "Sikindar Mirza",
      title: "Staff Software Engineer | Full Stack Developer | Tech Educator",
      email: "sikindar247@gmail.com",
      linkedin: "https://www.linkedin.com/in/sikindar-mirza-802095115/",
      location: "India",
      experience: "11+ years of experience in software development",
      skills: ["JavaScript", "Python","React", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes", "CI/CD"],
      bio: "Passionate about teaching technology and helping others learn programming. Experienced in building scalable web applications and mentoring developers.",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored 50+ junior developers and conducted many technical workshops",
        "Built scalable e-commerce platforms handling $10M+ in transactions",
        "Built and deployed multiple web applications using React, Node.js, and MongoDB"
      ],
      expertise: [
        { category: "Frontend", technologies: ["React", "Vue.js", "TypeScript", "Next.js"] },
        { category: "Backend", technologies: ["Node.js", "Python", "Express", "Django", "NestJS"] },
        { category: "Database", technologies: ["MongoDB", "PostgreSQL", "SQL", "Elasticsearch"] },
        { category: "DevOps", technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"] },
      ],
      companies: [
        { name: "Project44", logo: "/project_44_logo.png" },
        { name: "Conde Nast", logo: "/conde_nast_logo.jpeg" },
        { name: "Tesco", logo: "/tesco.jpeg" },
        { name: "Enroco", logo: "/enroco.jpeg" }
      ]
    },
    // {
    //   name: "Muhammad Umar Mirza",
    //   title: "Staff Software Engineer | Full Stack Developer | Tech Educator",
    //   email: "miyamirza.esc@gmail.com",
    //   linkedin: "https://www.linkedin.com/in/muhammadumarmirza/",
    //   location: "India",
    //   experience: "10+ years of experience in software development",
    //   skills: ["JavaScript", "Python","React", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes", "CI/CD"],
    //   bio: "Passionate about teaching technology and helping others learn programming. Experienced in building scalable web applications and mentoring developers.",
    //   achievements: [
    //     "Led development of microservices architecture serving 1M+ users",
    //     "Mentored 50+ junior developers and conducted many technical workshops",
    //     "Built scalable e-commerce platforms handling $10M+ in transactions",
    //     "Built and deployed multiple web applications using React, Node.js, and MongoDB"
    //   ],
    //   expertise: [
    //     { category: "Frontend", technologies: ["React", "Vue.js", "TypeScript", "Next.js"] },
    //     { category: "Backend", technologies: ["Node.js", "Python", "Express", "Django", "NestJS"] },
    //     { category: "Database", technologies: ["MongoDB", "PostgreSQL", "SQL", "Elasticsearch"] },
    //     { category: "DevOps", technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"] },
    //   ],
    //   companies: [
    //     { name: "Project44", logo: "/project_44_logo.jpeg" },
    //     { name: "Conde Nast", logo: "/logos/edtech.png" },
    //     { name: "Tesco", logo: "/logos/freelance.png" },
    //     { name: "Enroco", logo: "/logos/consulting.png" }
    //   ]
    // }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-subtitle">Ready to start your coding journey? Let's connect!</p>
        
        <div className="contact-content">
          <div className="contacts-grid">
            {contacts.map((contact, contactIndex) => (
              <div key={contactIndex} className="contact-card">
                <div className="contact-header">
                  <div className="header-left">
                    <div className="profile-avatar">
                    <img 
                      src={contactIndex === 0 ? "/Sikindar_Mirza.jpg" : "/Muhammad_Umar_Mirza.jpg"} 
                      alt={contact.name} 
                      className="profile-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="avatar-fallback" style={{ display: 'none' }}>
                      <div className="avatar-text">
                        <div className="name-line">{contact.name.split(' ')[0]}</div>
                        <div className="name-line">{contact.name.split(' ')[1]}</div>
                      </div>
                    </div>
                    </div>
                    <div className="profile-info">
                      <h3>{contact.name}</h3>
                      <p className="profile-title">{contact.title}</p>
                      <p className="profile-location">📍 {contact.location}</p>
                    </div>
                  </div>
                  <a 
                    href={contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-btn"
                  >
                    View LinkedIn Profile
                  </a>
                </div>

                <div className="contact-details">
                    <div className="detail-section">
                      <h4>Contact Information</h4>
                      <div className="detail-item">
                        <span className="detail-icon">📧</span>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">💼</span>
                        <span>{contact.experience}</span>
                      </div>
                    </div>

                    <div className="detail-section">
                      <h4>About</h4>
                      <p className="bio-text">{contact.bio}</p>
                      <div className="detail-section">
                      <h4>Companies Worked</h4>
                      <div className="companies-grid">
                        {contact.companies?.map((company, cIdx) => (
                          <div key={cIdx} className="company-item">
                            {company.logo ? (
                              <img 
                                src={company.logo} 
                                alt={company.name} 
                                className={`company-logo${company.name === 'Conde Nast' ? ' dark-bg' : ''}`}
                                onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} 
                              />
                            ) : null}
                            <div className={`company-logo-fallback${company.name === 'Conde Nast' ? ' dark-bg' : ''}`} style={{ display: company.logo ? 'none' : 'flex' }}>
                              <span className="company-initials">{company.name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase()}</span>
                            </div>
                            <div className="company-name">{company.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                      
                      <div className="achievements-section">
                        <h5>Key Achievements</h5>
                        <div className="achievements-grid">
                          {contact.achievements.map((achievement, index) => (
                            <div key={index} className="achievement-item">
                              <span className="achievement-icon">🏆</span>
                              <span className="achievement-text">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="detail-section">
                      <h4>Technical Expertise</h4>
                      <div className="expertise-grid">
                        {contact.expertise.map((area, index) => (
                          <div key={index} className="expertise-category">
                            <h5 className="category-title">{area.category}</h5>
                            <div className="technologies-list">
                              {area.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(10,10,30,0.8)),
                      url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
        }
        
        .section-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: #fff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 3rem;
        }
        
        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 2rem;
        }
        
        .contact-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 245, 255, 0.1);
        }
        
        .contact-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          min-width: 0;
        }
        
        .profile-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(0, 245, 255, 0.3);
          box-shadow: 0 4px 20px rgba(0, 245, 255, 0.2);
          position: relative;
          aspect-ratio: 1 / 1;
          flex: 0 0 auto; /* prevent flex squashing on mobile */
        }
        
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        
        .profile-avatar:hover .profile-image {
          transform: scale(1.05);
        }
        
        .avatar-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #00f5ff 0%, #ff00f5 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: #fff;
          text-align: center;
          line-height: 1.1;
        }
        
        .avatar-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .name-line {
          font-size: 0.65rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .profile-info h3 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        
        .profile-title {
          color: #00f5ff;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }
        
        .profile-location {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }
        
        .linkedin-btn {
          white-space: nowrap;
          padding: 0.6rem 1rem;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          background: linear-gradient(45deg, #00f5ff, #ff00f5);
          color: #fff;
          border: none;
        }
        .linkedin-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 245, 255, 0.4);
        }
        
        .contact-details {
          margin-top: 0;
        }
        
        .detail-section {
          margin-bottom: 2rem;
        }
        
        .detail-section h4 {
          color: #00f5ff;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .detail-icon {
          font-size: 1.2rem;
        }
        
        .detail-item a {
          color: #00f5ff;
          text-decoration: none;
        }
        
        .detail-item a:hover {
          text-decoration: underline;
        }
        
        .bio-text {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .achievements-section {
          margin-top: 1.5rem;
        }
        
        .achievements-section h5 {
          color: #00f5ff;
          font-size: 1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .achievements-grid {
          display: grid;
          gap: 0.75rem;
        }
        
        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(0, 245, 255, 0.05);
          border-radius: 8px;
          border-left: 3px solid #00f5ff;
        }
        
        .achievement-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .achievement-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        
        .expertise-category {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .category-title {
          color: #00f5ff;
          font-size: 1rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        
        .technologies-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          background: rgba(0, 245, 255, 0.1);
          color: #00f5ff;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(0, 245, 255, 0.2);
        }

        .companies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 1rem;
        }

        .company-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .company-logo,
        .company-logo-fallback {
          width: 180px;
          height: 100px;
          border-radius: 10px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          object-fit: contain;
        }

        .company-logo.dark-bg,
        .company-logo-fallback.dark-bg {
          background: #000000;
          border-color: rgba(255, 255, 255, 0.12);
        }

        .company-initials {
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .company-name {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.85rem;
          text-align: center;
        }
        
        .certifications-grid {
          display: grid;
          gap: 0.75rem;
        }
        
        .certification-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 0, 245, 0.05);
          border-radius: 8px;
          border-left: 3px solid #ff00f5;
        }
        
        .cert-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .cert-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .skill-tag {
          background: rgba(0, 245, 255, 0.1);
          color: #00f5ff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(0, 245, 255, 0.3);
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .contacts-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .contact-header {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .header-left { justify-content: center; }
          .linkedin-btn { align-self: center; }
          
          .contact-actions {
            flex-direction: column;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .expertise-grid {
            grid-template-columns: 1fr;
          }
          /* Avatar takes 30% of the left header section width on mobile */
          .header-left { width: 100%; }
          .profile-avatar { width: 30%; height: auto; aspect-ratio: 1 / 1; }
          .profile-info { flex: 1; min-width: 0; }
          /* Companies grid: 2 per row and smaller logos */
          .companies-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.75rem;
          }
          .company-item { gap: 0.4rem; }
          .company-logo,
          .company-logo-fallback {
            width: 100%;
            height: 68px;
            border-radius: 8px;
          }
          .company-name { font-size: 0.8rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
