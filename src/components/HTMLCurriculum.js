import React from 'react';

const curriculum = [
  { section: 'Introduction to HTML', topics: [ 'What is HTML?', 'HTML Document Structure', 'Doctype', 'HTML5 Overview' ] },
  { section: 'Basic Tags', topics: [ 'Headings', 'Paragraphs', 'Links', 'Images', 'Lists', 'Tables' ] },
  { section: 'Forms', topics: [ 'Form Elements', 'Input Types', 'Labels & Fieldsets', 'Validation Attributes' ] },
  { section: 'Semantic HTML', topics: [ 'header, nav, main, section, article, aside, footer', 'Benefits of Semantic HTML' ] },
  { section: 'Media', topics: [ 'Audio & Video', 'Embedding YouTube', 'SVG & Canvas' ] },
  { section: 'Meta & SEO', topics: [ 'Meta Tags', 'Open Graph', 'Accessibility Basics', 'SEO Best Practices' ] },
  { section: 'Best Practices', topics: [ 'Indentation & Formatting', 'Comments', 'Organizing Code', 'Common Pitfalls' ] }
];

const HTMLCurriculum = () => (
  <section className="html-curriculum-section">
    <div className="container">
      <h2 className="html-curriculum-title">HTML Curriculum</h2>
      <div className="html-curriculum-list">
        {curriculum.map((item, idx) => (
          <div className="html-curriculum-section-block" key={idx}>
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
      .html-curriculum-section {
        background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);
        color: #222;
        padding: 4rem 0 6rem 0;
      }
      .html-curriculum-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2.5rem;
        background: linear-gradient(90deg, #f7971e 0%, #ffd200 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .html-curriculum-list {
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      .html-curriculum-section-block {
        background: rgba(255,255,255,0.15);
        border-radius: 16px;
        padding: 1.5rem 1rem;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      .html-curriculum-section-block h3 {
        font-size: 1.2rem;
        color: #f7971e;
        margin-bottom: 1rem;
      }
      .html-curriculum-section-block ul {
        list-style: disc inside;
        padding-left: 1rem;
      }
      .html-curriculum-section-block li {
        margin-bottom: 0.5rem;
        color: #222;
        font-size: 1rem;
      }
    `}</style>
  </section>
);

export default HTMLCurriculum; 