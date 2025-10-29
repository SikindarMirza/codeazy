import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Interactive Learning',
      description: 'Learn by doing with our hands-on coding challenges and real-world projects that build your portfolio.',
      delay: 100
    },
    {
      icon: '👨‍💻',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in top tech companies.',
      delay: 200
    },
    {
      icon: '🎯',
      title: 'Personalized Path',
      description: 'AI-powered recommendations create a custom learning path tailored to your goals and skill level.',
      delay: 300
    },
    {
      icon: '💼',
      title: 'Career Support',
      description: 'Get job placement assistance, portfolio reviews, and interview preparation to land your dream job.',
      delay: 400
    },
    {
      icon: '📱',
      title: 'Mobile Learning',
      description: 'Learn anywhere, anytime with our mobile-optimized platform and offline content access.',
      delay: 500
    },
    {
      icon: '🏗️',
      title: 'Build Real-time Projects',
      description: 'Work on live projects and applications to gain hands-on experience that employers value.',
      delay: 600
    }
  ];

  return (
    <section className="features" id="about">
      <div className="container">
        <h2 className="section-title">
          Why Choose Codeazy?
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 
