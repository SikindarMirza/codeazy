import React from 'react';

const curriculum = [
  {
    section: 'Introduction to JavaScript',
    topics: [
      'What is JavaScript?',
      'History and Evolution',
      'JavaScript in the Browser',
      'Hello World Example'
    ]
  },
  {
    section: 'Variables & Data Types',
    topics: [
      'var, let, const',
      'Primitive Types',
      'Reference Types',
      'Type Conversion'
    ]
  },
  {
    section: 'Operators & Expressions',
    topics: [
      'Arithmetic Operators',
      'Assignment Operators',
      'Comparison Operators',
      'Logical Operators',
      'Ternary Operator'
    ]
  },
  {
    section: 'Control Flow',
    topics: [
      'if, else, else if',
      'switch statement',
      'for, while, do...while loops',
      'break & continue'
    ]
  },
  {
    section: 'Functions',
    topics: [
      'Function Declaration',
      'Function Expression',
      'Arrow Functions',
      'Parameters & Arguments',
      'Return Values',
      'Scope & Closures'
    ]
  },
  {
    section: 'Objects & Arrays',
    topics: [
      'Object Literals',
      'Accessing & Modifying Properties',
      'Array Methods',
      'Destructuring',
      'Spread & Rest Operators'
    ]
  },
  {
    section: 'DOM Manipulation',
    topics: [
      'Selecting Elements',
      'Changing Content & Styles',
      'Event Listeners',
      'Creating & Removing Elements'
    ]
  },
  {
    section: 'ES6+ Features',
    topics: [
      'let & const',
      'Template Literals',
      'Default Parameters',
      'Destructuring',
      'Arrow Functions',
      'Modules'
    ]
  },
  {
    section: 'Asynchronous JavaScript',
    topics: [
      'Callbacks',
      'Promises',
      'Async/Await',
      'Fetching Data with fetch()'
    ]
  },
  {
    section: 'Best Practices & Debugging',
    topics: [
      'Linting & Formatting',
      'Debugging Tools',
      'Writing Clean Code',
      'Common Pitfalls'
    ]
  }
];

const JavaScriptCurriculum = () => (
  <section className="js-curriculum-section">
    <div className="container">
      <h2 className="js-curriculum-title">JavaScript Curriculum</h2>
      <div className="js-curriculum-list">
        {curriculum.map((item, idx) => (
          <div className="js-curriculum-section-block" key={idx}>
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
      .js-curriculum-section {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        color: #fff;
        padding: 4rem 0 6rem 0;
      }
      .js-curriculum-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2.5rem;
        background: linear-gradient(90deg, #FFD600 0%, #FF9100 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .js-curriculum-list {
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      .js-curriculum-section-block {
        background: rgba(255,255,255,0.05);
        border-radius: 16px;
        padding: 1.5rem 1rem;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      .js-curriculum-section-block h3 {
        font-size: 1.2rem;
        color: #FFD600;
        margin-bottom: 1rem;
      }
      .js-curriculum-section-block ul {
        list-style: disc inside;
        padding-left: 1rem;
      }
      .js-curriculum-section-block li {
        margin-bottom: 0.5rem;
        color: #fff;
        font-size: 1rem;
      }
    `}</style>
  </section>
);

export default JavaScriptCurriculum; 