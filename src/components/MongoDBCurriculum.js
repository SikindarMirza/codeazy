import React from 'react';

const curriculum = [
  { section: 'Introduction to MongoDB', topics: [ 'What is MongoDB?', 'NoSQL vs SQL', 'Document-Oriented Database', 'Installing MongoDB' ] },
  { section: 'CRUD Operations', topics: [ 'Creating Documents', 'Reading Documents', 'Updating Documents', 'Deleting Documents', 'ObjectId' ] },
  { section: 'Data Modeling', topics: [ 'Collections & Documents', 'Schema Design', 'Embedding vs Referencing', 'Indexes' ] },
  { section: 'Aggregation', topics: [ 'Aggregation Pipeline', 'Stages & Operators', 'Common Use Cases' ] },
  { section: 'Mongoose', topics: [ 'What is Mongoose?', 'Schemas & Models', 'Validation', 'CRUD with Mongoose' ] },
  { section: 'Advanced Topics', topics: [ 'Transactions', 'Change Streams', 'Sharding', 'Replication', 'Backups' ] },
  { section: 'Best Practices', topics: [ 'Performance Tuning', 'Security', 'Data Backup', 'Monitoring', 'Scaling' ] }
];

const MongoDBCurriculum = () => (
  <section className="mongodb-curriculum-section">
    <div className="container">
      <h2 className="mongodb-curriculum-title">MongoDB Curriculum</h2>
      <div className="mongodb-curriculum-list">
        {curriculum.map((item, idx) => (
          <div className="mongodb-curriculum-section-block" key={idx}>
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
      .mongodb-curriculum-section {
        background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
        color: #fff;
        padding: 4rem 0 6rem 0;
      }
      .mongodb-curriculum-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2.5rem;
        background: linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .mongodb-curriculum-list {
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      .mongodb-curriculum-section-block {
        background: rgba(255,255,255,0.05);
        border-radius: 16px;
        padding: 1.5rem 1rem;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      .mongodb-curriculum-section-block h3 {
        font-size: 1.2rem;
        color: #38ef7d;
        margin-bottom: 1rem;
      }
      .mongodb-curriculum-section-block ul {
        list-style: disc inside;
        padding-left: 1rem;
      }
      .mongodb-curriculum-section-block li {
        margin-bottom: 0.5rem;
        color: #fff;
        font-size: 1rem;
      }
    `}</style>
  </section>
);

export default MongoDBCurriculum; 