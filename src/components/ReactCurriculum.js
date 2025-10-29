import React from 'react';

const curriculum = [
  {
    section: 'Introduction to React',
    topics: [
      'What is React?',
      'Why use React?',
      'React vs. Other Frameworks',
      'Setting up the Environment'
    ]
  },
  {
    section: 'JSX & Rendering',
    topics: [
      'JSX Syntax',
      'Rendering Elements',
      'Expressions in JSX',
      'JSX Best Practices'
    ]
  },
  {
    section: 'Components',
    topics: [
      'Function Components',
      'Class Components',
      'Props & PropTypes',
      'Component Composition',
      'Children & Nesting'
    ]
  },
  {
    section: 'State & Lifecycle',
    topics: [
      'useState Hook',
      'Class State',
      'Lifecycle Methods',
      'useEffect Hook',
      'State Lifting'
    ]
  },
  {
    section: 'Event Handling',
    topics: [
      'Handling Events in React',
      'Synthetic Events',
      'Passing Arguments to Handlers'
    ]
  },
  {
    section: 'Conditional Rendering & Lists',
    topics: [
      'if/else in JSX',
      'Ternary Operators',
      'Rendering Lists',
      'Keys in Lists'
    ]
  },
  {
    section: 'Forms',
    topics: [
      'Controlled Components',
      'Uncontrolled Components',
      'Handling Input',
      'Form Submission',
      'Validation'
    ]
  },
  {
    section: 'Hooks',
    topics: [
      'useState',
      'useEffect',
      'useRef',
      'useContext',
      'Custom Hooks'
    ]
  },
  {
    section: 'Context & State Management',
    topics: [
      'Context API',
      'useReducer',
      'Redux Basics',
      'Global State Patterns'
    ]
  },
  {
    section: 'Routing',
    topics: [
      'React Router Basics',
      'Route Parameters',
      'Navigation',
      'Nested Routes'
    ]
  },
  {
    section: 'Advanced Topics',
    topics: [
      'Code Splitting',
      'Error Boundaries',
      'Refs & Forwarding',
      'Portals',
      'Performance Optimization'
    ]
  },
  {
    section: 'Testing',
    topics: [
      'Jest & React Testing Library',
      'Unit Testing Components',
      'Mocking & Spies',
      'End-to-End Testing'
    ]
  },
  {
    section: 'Deployment & Best Practices',
    topics: [
      'Build Tools',
      'Deployment Strategies',
      'Linting & Formatting',
      'Accessibility',
      'Security Best Practices'
    ]
  }
];

const ReactCurriculum = () => (
  <section className="react-curriculum-section">
    <div className="container">
      <h2 className="react-curriculum-title">React Curriculum</h2>
      <div className="react-curriculum-list">
        {curriculum.map((item, idx) => (
          <div className="react-curriculum-section-block" key={idx}>
            <h3>{item.section}</h3>
            <ul>
              {item.topics.map((topic, tIdx) => (
                <li key={tIdx}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .react-curriculum-section {
        background: linear-gradient(135deg, #232526 0%, #414345 100%);
        color: #fff;
        padding: 4rem 0 6rem 0;
      }
      .react-curriculum-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2.5rem;
        background: linear-gradient(90deg, #00f5ff 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .react-curriculum-list {
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      .react-curriculum-section-block {
        background: rgba(255,255,255,0.05);
        border-radius: 16px;
        padding: 1.5rem 1rem;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      .react-curriculum-section-block h3 {
        font-size: 1.2rem;
        color: #00f5ff;
        margin-bottom: 1rem;
      }
      .react-curriculum-section-block ul {
        list-style: disc inside;
        padding-left: 1rem;
      }
      .react-curriculum-section-block li {
        margin-bottom: 0.5rem;
        color: #fff;
        font-size: 1rem;
      }
    `}</style>
  </section>
);

export default ReactCurriculum; 