import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const allCourses = [
  {
    icon: '⚛️',
    level: 'Beginner',
    title: 'React Zeo to Hero',
    description: 'Build modern web applications with React, hooks, and state management. Perfect for beginners.',
    price: 79,
    duration: '12 weeks',
  },
  {
    icon: '🐍',
    level: 'Intermediate',
    title: 'Python for Data Science',
    description: 'Master Python programming and dive into data analysis, machine learning, and visualization.',
    price: 99,
    duration: '16 weeks',
  },
  {
    icon: '☁️',
    level: 'Advanced',
    title: 'Cloud Architecture with AWS',
    description: 'Design and deploy scalable cloud solutions using Amazon Web Services and DevOps practices.',
    price: 149,
    duration: '20 weeks',
  },
  {
    icon: '📱',
    level: 'Beginner',
    title: 'Mobile App Development',
    description: 'Create native mobile apps for iOS and Android using React Native and Flutter frameworks.',
    price: 119,
    duration: '14 weeks',
  },
  {
    icon: '🛡️',
    level: 'Advanced',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn ethical hacking, network security, and threat detection to protect digital assets.',
    price: 129,
    duration: '18 weeks',
  },
  {
    icon: '🤖',
    level: 'Intermediate',
    title: 'AI & Machine Learning',
    description: 'Dive into artificial intelligence, neural networks, and build intelligent applications.',
    price: 159,
    duration: '24 weeks',
  }
];

const CourseDetail = () => {
  const location = useLocation();
  const { title } = useParams();
  const navigate = useNavigate();

  let course = location.state?.course;
  if (!course) {
    course = allCourses.find(c => encodeURIComponent(c.title) === title);
  }

  if (!course) {
    return <div style={{ padding: '2rem' }}>Course not found.</div>;
  }

  return (
    <section className="course-detail-section">
      <div className="course-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
        <div className="course-detail-icon">{course.icon}</div>
        <h2>{course.title}</h2>
        <span className="course-detail-level">{course.level}</span>
        <p className="course-detail-desc">{course.description}</p>
        <div className="course-detail-meta">
          <span className="course-detail-price">${course.price}</span>
          <span className="course-detail-duration">{course.duration}</span>
        </div>
      </div>
      <style jsx>{`
        .course-detail-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        }
        .course-detail-container {
          background: #fff;
          border-radius: 20px;
          padding: 3rem 2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          max-width: 400px;
          text-align: center;
        }
        .back-btn {
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          transform: translateY(-2px);
        }
        .course-detail-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .course-detail-level {
          display: inline-block;
          background: #f0f0f0;
          color: #333;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .course-detail-desc {
          margin: 1.5rem 0;
          color: #444;
        }
        .course-detail-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 2rem;
        }
        .course-detail-price {
          color: #00a8cc;
        }
        .course-detail-duration {
          color: #764ba2;
        }
      `}</style>
    </section>
  );
};

export default CourseDetail; 