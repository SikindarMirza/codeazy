import React from 'react';
import CourseCard from './CourseCard';
import { HTMLCurriculumData, CSSCurriculumData, JavaScriptCurriculumData, ReactCurriculumData, GitCurriculumData, NodeCurriculumData, MongoDBCurriculumData } from './CurriculumData';

const Courses = ({ onCourseClick }) => {
  const courses = [
    {
      level: 'Beginner',
      title: 'HTML Fundamentals',
      description: 'Learn the backbone of web development. Master HTML structure, semantic elements, and form building.',
      price: 59,
      duration: '8 weeks',
      delay: 0,
      curriculumData: HTMLCurriculumData,
      logoBackground: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
      logoName: 'HTML',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg'
    },
    {
      level: 'Beginner',
      title: 'CSS Mastery',
      description: 'Create stunning and responsive web designs. Master flexbox, grid, animations, and modern CSS techniques.',
      price: 69,
      duration: '10 weeks',
      delay: 50,
      curriculumData: CSSCurriculumData,
      logoBackground: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
      logoName: 'CSS',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg'
    },
    {
      level: 'Beginner',
      title: 'JavaScript',
      description: 'Master JavaScript programming from basics to advanced concepts. Learn ES6+, DOM manipulation, and async programming.',
      price: 89,
      duration: '14 weeks',
      delay: 75,
      curriculumData: JavaScriptCurriculumData,
      logoBackground: 'linear-gradient(135deg, #F7DF1E 0%, #F7DF1E 50%, #000 50%, #000 100%)',
      logoName: 'JS',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
    },
    {
      level: 'Beginner',
      title: 'React Zero to Hero',
      description: 'Build modern web applications with React, hooks, and state management. Perfect for beginners.',
      price: 79,
      duration: '12 weeks',
      delay: 100,
      curriculumData: ReactCurriculumData,
      logoBackground: 'linear-gradient(135deg, #00d4ff 0%, #764ba2 100%)',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      level: 'Intermediate',
      title: 'Node.js Backend Development',
      description: 'Build powerful server-side applications with Node.js. Learn Express, APIs, databases, and deployment.',
      price: 99,
      duration: '14 weeks',
      delay: 125,
      curriculumData: NodeCurriculumData,
      logoBackground: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 30%, #dee2e6 70%, #ced4da 100%)',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
    },
    {
      level: 'Intermediate',
      title: 'MongoDB Database Mastery',
      description: 'Master NoSQL databases with MongoDB. Learn CRUD operations, data modeling, aggregation, and Mongoose integration.',
      price: 89,
      duration: '10 weeks',
      delay: 150,
      curriculumData: MongoDBCurriculumData,
      // logoBackground: 'linear-gradient(135deg, #001e2b 0%, #003d5c 40%, #002a40 100%)',
      logoBackground: 'linear-gradient(135deg,rgb(31, 76, 121) 0%,rgb(66, 114, 162) 30%,rgb(89, 130, 173) 70%,rgb(46, 97, 147) 100%)',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
      textColor: '#fff'
    },
    {
      level: 'Beginner',
      title: 'Git & Version Control',
      description: 'Master Git workflow, branching, merging, and collaboration. Essential skills for every developer.',
      price: 49,
      duration: '4 weeks',
      delay: 175,
      curriculumData: GitCurriculumData,
      logoBackground: 'linear-gradient(135deg,rgb(197, 127, 237) 0%,rgb(146, 43, 175) 55%,rgb(228, 166, 241) 100%)',
      logoName: 'Git',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg'
    },
    {
      level: 'Intermediate',
      title: 'Python for Data Science',
      description: 'Master Python programming and dive into data analysis, machine learning, and visualization.',
      price: 99,
      duration: '16 weeks',
      delay: 250,
      icon: '',
      logoBackground: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)',
      logoName: 'Python',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    },
    {
      level: 'Advanced',
      title: 'Cloud Architecture with AWS',
      description: 'Design and deploy scalable cloud solutions using Amazon Web Services and DevOps practices.',
      price: 149,
      duration: '20 weeks',
      delay: 350,
      icon: '',
      logoBackground: 'linear-gradient(135deg, #ff9900 0%, #232f3e 100%)',
      logoName: 'AWS',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    {
      level: 'Beginner',
      title: 'Mobile App Development',
      description: 'Create native mobile apps for iOS and Android using React Native and Flutter frameworks.',
      price: 119,
      duration: '14 weeks',
      delay: 450,
      icon: '',
      logoBackground: 'linear-gradient(135deg, #61dafb 0%, #764ba2 100%)',
      logoName: 'React Native',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      level: 'Intermediate',
      title: 'AI & Machine Learning',
      description: 'Dive into artificial intelligence, neural networks, and build intelligent applications.',
      price: 159,
      duration: '24 weeks',
      delay: 650,
      icon: '',
      logoBackground: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
      logoName: 'AI/ML',
      logoUrl: ''
    }
  ];

  const handleCourseClick = (course) => {
    if (onCourseClick) {
      onCourseClick(course);
    }
  };

  return (
    <section className="courses" id="courses">
      <div className="container">
        <h2 className="section-title">Popular Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              delay={course.delay}
              onClick={() => handleCourseClick(course)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses; 
