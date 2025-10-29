import React from 'react';

const curriculum = [
  { section: 'Introduction to CSS', topics: [ 'What is CSS?', 'How CSS Works', 'CSS Syntax', 'Including CSS in HTML' ] },
  { section: 'Selectors & Properties', topics: [ 'Element, Class, ID Selectors', 'Attribute Selectors', 'Pseudo-classes & Pseudo-elements', 'Combinators' ] },
  { section: 'Colors, Units & Typography', topics: [ 'Color Formats', 'Font Properties', 'Units (px, em, rem, %)', 'Responsive Typography' ] },
  { section: 'Box Model & Layout', topics: [ 'Box Model', 'Margin, Border, Padding', 'Display Property', 'Positioning', 'Float & Clear' ] },
  { section: 'Flexbox & Grid', topics: [ 'Flexbox Basics', 'Align & Justify', 'Grid Basics', 'Grid Areas', 'Responsive Layouts' ] },
  { section: 'Backgrounds & Borders', topics: [ 'Background Images', 'Gradients', 'Border Radius', 'Box Shadow' ] },
  { section: 'Transitions & Animations', topics: [ 'CSS Transitions', 'Keyframes', 'Animation Properties', 'Transform' ] },
  { section: 'Responsive Design', topics: [ 'Media Queries', 'Mobile First', 'Breakpoints', 'Viewport Units' ] },
  { section: 'Best Practices', topics: [ 'Organizing CSS', 'Naming Conventions (BEM)', 'Preprocessors (Sass, LESS)', 'Performance Tips' ] }
];

const CSSCurriculum = () => (
  <section className="css-curriculum-section">
    <div className="container">
      <h2 className="css-curriculum-title">CSS Curriculum</h2>
      <div className="css-curriculum-list">
        {curriculum.map((item, idx) => (
          <div className="css-curriculum-section-block" key={idx}>
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
      .css-curriculum-section {
        background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
        color: #fff;
        padding: 4rem 0 6rem 0;
      }
      .css-curriculum-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2.5rem;
        background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .css-curriculum-list {
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      .css-curriculum-section-block {
        background: rgba(255,255,255,0.05);
        border-radius: 16px;
        padding: 1.5rem 1rem;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      .css-curriculum-section-block h3 {
        font-size: 1.2rem;
        color: #43cea2;
        margin-bottom: 1rem;
      }
      .css-curriculum-section-block ul {
        list-style: disc inside;
        padding-left: 1rem;
      }
      .css-curriculum-section-block li {
        margin-bottom: 0.5rem;
        color: #fff;
        font-size: 1rem;
      }
    `}</style>
  </section>
);

export default CSSCurriculum; 