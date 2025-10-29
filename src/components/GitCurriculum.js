import React from 'react';

const curriculum = [
  { section: 'Introduction to Git', topics: [ 'What is Version Control?', 'What is Git?', 'Installing Git', 'Basic Git Workflow' ] },
  { section: 'Git Basics', topics: [ 'git init', 'git add', 'git commit', 'git status', 'git log' ] },
  { section: 'Branching & Merging', topics: [ 'git branch', 'git checkout', 'git merge', 'Resolving Conflicts', 'git stash' ] },
  { section: 'Remote Repositories', topics: [ 'git remote', 'git push', 'git pull', 'git fetch', 'Cloning Repos' ] },
  { section: 'Collaboration', topics: [ 'Forks & Pull Requests', 'Code Reviews', 'Best Practices for Teams' ] },
  { section: 'Advanced Git', topics: [ 'Rebasing', 'Cherry-pick', 'Reverting', 'Resetting', 'Tagging' ] },
  { section: 'GitHub & Hosting', topics: [ 'GitHub Basics', 'SSH Keys', 'Actions & CI/CD', 'Project Boards', 'Releases' ] },
  { section: 'Best Practices', topics: [ 'Commit Messages', 'Branch Naming', 'Ignoring Files', '.gitignore', 'Backup & Recovery' ] }
];

const GitCurriculum = () => (
  <section className="git-curriculum-section">
    <div className="container">
      <h2 className="git-curriculum-title">Git Curriculum</h2>
      <div className="git-curriculum-list">
        {curriculum.map((item, idx) => (
          <div className="git-curriculum-section-block" key={idx}>
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
      .git-curriculum-section {
        background: linear-gradient(135deg, #e96443 0%, #904e95 100%);
        color: #fff;
        padding: 4rem 0 6rem 0;
      }
      .git-curriculum-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2.5rem;
        background: linear-gradient(90deg, #e96443 0%, #904e95 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .git-curriculum-list {
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      .git-curriculum-section-block {
        background: rgba(255,255,255,0.05);
        border-radius: 16px;
        padding: 1.5rem 1rem;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      .git-curriculum-section-block h3 {
        font-size: 1.2rem;
        color: #e96443;
        margin-bottom: 1rem;
      }
      .git-curriculum-section-block ul {
        list-style: disc inside;
        padding-left: 1rem;
      }
      .git-curriculum-section-block li {
        margin-bottom: 0.5rem;
        color: #fff;
        font-size: 1rem;
      }
    `}</style>
  </section>
);

export default GitCurriculum; 