import React from 'react';

const curriculum = [
  { section: 'Introduction to Node.js', topics: [ 'What is Node.js?', 'Node.js Architecture', 'V8 Engine', 'Installing Node.js & npm' ] },
  { section: 'Core Modules', topics: [ 'fs (File System)', 'path', 'os', 'events', 'http/https', 'process' ] },
  { section: 'npm & Packages', topics: [ 'What is npm?', 'Installing Packages', 'package.json', 'Semantic Versioning', 'Global vs Local Packages' ] },
  { section: 'Asynchronous Programming', topics: [ 'Callbacks', 'Promises', 'Async/Await', 'Event Loop', 'Timers' ] },
  { section: 'Building a Web Server', topics: [ 'http module', 'Request & Response', 'Routing', 'Serving Static Files' ] },
  { section: 'Express.js', topics: [ 'What is Express?', 'Routing in Express', 'Middleware', 'Serving Static Files', 'Error Handling' ] },
  { section: 'Working with Databases', topics: [ 'Connecting to MongoDB', 'CRUD Operations', 'Mongoose Basics' ] },
  { section: 'APIs', topics: [ 'RESTful APIs', 'Building Endpoints', 'Request Validation', 'Authentication (JWT)', 'Error Handling' ] },
  { section: 'Deployment', topics: [ 'Environment Variables', 'Production Builds', 'Hosting Node Apps', 'Process Managers (PM2)' ] }
];

const NodeCurriculum = () => (
  <section className="node-curriculum-section">
    <div className="container">
      <h2 className="node-curriculum-title">Node.js Curriculum</h2>
      <div className="node-curriculum-list">
        {curriculum.map((item, idx) => (
          <div className="node-curriculum-section-block" key={idx}>
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
      .node-curriculum-section {
        background: linear-gradient(135deg, #232526 0%, #485563 100%);
        color: #fff;
        padding: 4rem 0 6rem 0;
      }
      .node-curriculum-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2.5rem;
        background: linear-gradient(90deg, #8fd6ff 0%, #43cea2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .node-curriculum-list {
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      .node-curriculum-section-block {
        background: rgba(255,255,255,0.05);
        border-radius: 16px;
        padding: 1.5rem 1rem;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      .node-curriculum-section-block h3 {
        font-size: 1.2rem;
        color: #43cea2;
        margin-bottom: 1rem;
      }
      .node-curriculum-section-block ul {
        list-style: disc inside;
        padding-left: 1rem;
      }
      .node-curriculum-section-block li {
        margin-bottom: 0.5rem;
        color: #fff;
        font-size: 1rem;
      }
    `}</style>
  </section>
);

export default NodeCurriculum; 