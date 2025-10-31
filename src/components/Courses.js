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
      logoName: 'HTML'
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
      logoName: 'CSS'
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
      logoName: 'JS'
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
      logoName: 'React'
    },
    {
      level: 'Intermediate',
      title: 'Node.js Backend Development',
      description: 'Build powerful server-side applications with Node.js. Learn Express, APIs, databases, and deployment.',
      price: 99,
      duration: '14 weeks',
      delay: 125,
      curriculumData: NodeCurriculumData,
      logoBackground: 'linear-gradient(135deg, #339933 0%, #68a063 100%)',
      logoName: 'Node.js'
    },
    {
      level: 'Intermediate',
      title: 'MongoDB Database Mastery',
      description: 'Master NoSQL databases with MongoDB. Learn CRUD operations, data modeling, aggregation, and Mongoose integration.',
      price: 89,
      duration: '10 weeks',
      delay: 150,
      curriculumData: MongoDBCurriculumData,
      logoBackground: 'linear-gradient(135deg, #47a248 0%, #589636 100%)',
      logoName: 'MongoDB'
    },
    {
      level: 'Beginner',
      title: 'Git & Version Control',
      description: 'Master Git workflow, branching, merging, and collaboration. Essential skills for every developer.',
      price: 49,
      duration: '4 weeks',
      delay: 175,
      curriculumData: GitCurriculumData,
      logoBackground: 'linear-gradient(135deg, #e96443 0%, #904e95 100%)',
      logoName: 'Git'
    },
    {
      level: 'Intermediate',
      title: 'Python for Data Science',
      description: 'Master Python programming and dive into data analysis, machine learning, and visualization.',
      price: 99,
      duration: '16 weeks',
      delay: 250,
      icon: '🐍',
      logoBackground: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)',
      logoName: 'Python'
    },
    {
      level: 'Advanced',
      title: 'Cloud Architecture with AWS',
      description: 'Design and deploy scalable cloud solutions using Amazon Web Services and DevOps practices.',
      price: 149,
      duration: '20 weeks',
      delay: 350,
      icon: '☁️',
      logoBackground: 'linear-gradient(135deg, #ff9900 0%, #232f3e 100%)',
      logoName: 'AWS'
    },
    {
      level: 'Beginner',
      title: 'Mobile App Development',
      description: 'Create native mobile apps for iOS and Android using React Native and Flutter frameworks.',
      price: 119,
      duration: '14 weeks',
      delay: 450,
      icon: '📱',
      logoBackground: 'linear-gradient(135deg, #61dafb 0%, #764ba2 100%)',
      logoName: 'React Native'
    },
    {
      level: 'Intermediate',
      title: 'AI & Machine Learning',
      description: 'Dive into artificial intelligence, neural networks, and build intelligent applications.',
      price: 159,
      duration: '24 weeks',
      delay: 650,
      icon: '🤖',
      logoBackground: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
      logoName: 'AI/ML'
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
