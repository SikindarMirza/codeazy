export const HTMLCurriculumData = {
  title: 'HTML Fundamentals',
  curriculum: [
    { section: 'Introduction to HTML', topics: ['What is HTML?', 'HTML Document Structure', 'Doctype', 'HTML5 Overview'] },
    { section: 'Basic Tags', topics: ['Headings', 'Paragraphs', 'Links', 'Images', 'Lists', 'Tables'] },
    { section: 'Forms', topics: ['Form Elements', 'Input Types', 'Labels & Fieldsets', 'Validation Attributes'] },
    { section: 'Semantic HTML', topics: ['header, nav, main, section, article, aside, footer', 'Benefits of Semantic HTML'] },
    { section: 'Media', topics: ['Audio & Video', 'Embedding YouTube', 'SVG & Canvas'] },
    { section: 'Meta & SEO', topics: ['Meta Tags', 'Open Graph', 'Accessibility Basics', 'SEO Best Practices'] },
    { section: 'Best Practices', topics: ['Indentation & Formatting', 'Comments', 'Organizing Code', 'Common Pitfalls'] }
  ]
};

export const CSSCurriculumData = {
  title: 'CSS Mastery',
  curriculum: [
    { section: 'Introduction to CSS', topics: ['What is CSS?', 'How CSS Works', 'CSS Syntax', 'Including CSS in HTML'] },
    { section: 'Selectors & Properties', topics: ['Element, Class, ID Selectors', 'Attribute Selectors', 'Pseudo-classes & Pseudo-elements', 'Combinators'] },
    { section: 'Colors, Units & Typography', topics: ['Color Formats', 'Font Properties', 'Units (px, em, rem, %)', 'Responsive Typography'] },
    { section: 'Box Model & Layout', topics: ['Box Model', 'Margin, Border, Padding', 'Display Property', 'Positioning', 'Float & Clear'] },
    { section: 'Flexbox & Grid', topics: ['Flexbox Basics', 'Align & Justify', 'Grid Basics', 'Grid Areas', 'Responsive Layouts'] },
    { section: 'Backgrounds & Borders', topics: ['Background Images', 'Gradients', 'Border Radius', 'Box Shadow'] },
    { section: 'Transitions & Animations', topics: ['CSS Transitions', 'Keyframes', 'Animation Properties', 'Transform'] },
    { section: 'Responsive Design', topics: ['Media Queries', 'Mobile First', 'Breakpoints', 'Viewport Units'] },
    { section: 'Best Practices', topics: ['Organizing CSS', 'Naming Conventions (BEM)', 'Preprocessors (Sass, LESS)', 'Performance Tips'] }
  ]
};

export const JavaScriptCurriculumData = {
  title: 'JavaScript',
  curriculum: [
    { section: 'Introduction to JavaScript', topics: ['What is JavaScript?', 'History and Evolution', 'JavaScript in the Browser', 'Hello World Example'] },
    { section: 'Variables & Data Types', topics: ['var, let, const', 'Primitive Types', 'Reference Types', 'Type Conversion'] },
    { section: 'Operators & Expressions', topics: ['Arithmetic Operators', 'Assignment Operators', 'Comparison Operators', 'Logical Operators', 'Ternary Operator'] },
    { section: 'Control Flow', topics: ['if, else, else if', 'switch statement', 'for, while, do...while loops', 'break & continue'] },
    { section: 'Functions', topics: ['Function Declaration', 'Function Expression', 'Arrow Functions', 'Parameters & Arguments', 'Return Values', 'Scope & Closures'] },
    { section: 'Objects & Arrays', topics: ['Object Literals', 'Accessing & Modifying Properties', 'Array Methods', 'Destructuring', 'Spread & Rest Operators'] },
    { section: 'DOM Manipulation', topics: ['Selecting Elements', 'Changing Content & Styles', 'Event Listeners', 'Creating & Removing Elements'] },
    { section: 'ES6+ Features', topics: ['let & const', 'Template Literals', 'Default Parameters', 'Destructuring', 'Arrow Functions', 'Modules'] },
    { section: 'Asynchronous JavaScript', topics: ['Callbacks', 'Promises', 'Async/Await', 'Fetching Data with fetch()'] },
    { section: 'Best Practices & Debugging', topics: ['Linting & Formatting', 'Debugging Tools', 'Writing Clean Code', 'Common Pitfalls'] }
  ]
};

export const ReactCurriculumData = {
  title: 'React Zero to Hero',
  curriculum: [
    { section: 'Introduction to React', topics: ['What is React?', 'Why use React?', 'React vs. Other Frameworks', 'Setting up the Environment'] },
    { section: 'JSX & Rendering', topics: ['JSX Syntax', 'Rendering Elements', 'Expressions in JSX', 'JSX Best Practices'] },
    { section: 'Components', topics: ['Function Components', 'Class Components', 'Props & PropTypes', 'Component Composition', 'Children & Nesting'] },
    { section: 'State & Lifecycle', topics: ['useState Hook', 'Class State', 'Lifecycle Methods', 'useEffect Hook', 'State Lifting'] },
    { section: 'Event Handling', topics: ['Handling Events in React', 'Synthetic Events', 'Passing Arguments to Handlers'] },
    { section: 'Conditional Rendering & Lists', topics: ['if/else in JSX', 'Ternary Operators', 'Rendering Lists', 'Keys in Lists'] },
    { section: 'Forms', topics: ['Controlled Components', 'Uncontrolled Components', 'Handling Input', 'Form Submission', 'Validation'] },
    { section: 'Hooks', topics: ['useState', 'useEffect', 'useRef', 'useContext', 'Custom Hooks'] },
    { section: 'Context & State Management', topics: ['Context API', 'useReducer', 'Redux Basics', 'Global State Patterns'] },
    { section: 'Routing', topics: ['React Router Basics', 'Route Parameters', 'Navigation', 'Nested Routes'] },
    { section: 'Advanced Topics', topics: ['Code Splitting', 'Error Boundaries', 'Refs & Forwarding', 'Portals', 'Performance Optimization'] },
    { section: 'Testing', topics: ['Jest & React Testing Library', 'Unit Testing Components', 'Mocking & Spies', 'End-to-End Testing'] },
    { section: 'Deployment & Best Practices', topics: ['Build Tools', 'Deployment Strategies', 'Linting & Formatting', 'Accessibility', 'Security Best Practices'] }
  ]
};

export const NodeCurriculumData = {
  title: 'Node.js',
  curriculum: [
    { section: 'Introduction to Node.js', topics: ['What is Node.js?', 'Node.js Architecture', 'V8 Engine', 'Installing Node.js & npm'] },
    { section: 'Core Modules', topics: ['fs (File System)', 'path', 'os', 'events', 'http/https', 'process'] },
    { section: 'npm & Packages', topics: ['What is npm?', 'Installing Packages', 'package.json', 'Semantic Versioning', 'Global vs Local Packages'] },
    { section: 'Asynchronous Programming', topics: ['Callbacks', 'Promises', 'Async/Await', 'Event Loop', 'Timers'] },
    { section: 'Building a Web Server', topics: ['http module', 'Request & Response', 'Routing', 'Serving Static Files'] },
    { section: 'Express.js', topics: ['What is Express?', 'Routing in Express', 'Middleware', 'Serving Static Files', 'Error Handling'] },
    { section: 'Working with Databases', topics: ['Connecting to MongoDB', 'CRUD Operations', 'Mongoose Basics'] },
    { section: 'APIs', topics: ['RESTful APIs', 'Building Endpoints', 'Request Validation', 'Authentication (JWT)', 'Error Handling'] },
    { section: 'Deployment', topics: ['Environment Variables', 'Production Builds', 'Hosting Node Apps', 'Process Managers (PM2)'] }
  ]
};

export const GitCurriculumData = {
  title: 'Git & Version Control',
  curriculum: [
    { section: 'Introduction to Git', topics: ['What is Version Control?', 'What is Git?', 'Installing Git', 'Basic Git Workflow'] },
    { section: 'Git Basics', topics: ['git init', 'git add', 'git commit', 'git status', 'git log'] },
    { section: 'Branching & Merging', topics: ['git branch', 'git checkout', 'git merge', 'Resolving Conflicts', 'git stash'] },
    { section: 'Remote Repositories', topics: ['git remote', 'git push', 'git pull', 'git fetch', 'Cloning Repos'] },
    { section: 'Collaboration', topics: ['Forks & Pull Requests', 'Code Reviews', 'Best Practices for Teams'] },
    { section: 'Advanced Git', topics: ['Rebasing', 'Cherry-pick', 'Reverting', 'Resetting', 'Tagging'] },
    { section: 'GitHub & Hosting', topics: ['GitHub Basics', 'SSH Keys', 'Actions & CI/CD', 'Project Boards', 'Releases'] },
    { section: 'Best Practices', topics: ['Commit Messages', 'Branch Naming', 'Ignoring Files', '.gitignore', 'Backup & Recovery'] }
  ]
};

export const MongoDBCurriculumData = {
  title: 'MongoDB',
  curriculum: [
    { section: 'Introduction to MongoDB', topics: ['What is MongoDB?', 'NoSQL vs SQL', 'Document-Oriented Database', 'Installing MongoDB'] },
    { section: 'CRUD Operations', topics: ['Creating Documents', 'Reading Documents', 'Updating Documents', 'Deleting Documents', 'ObjectId'] },
    { section: 'Data Modeling', topics: ['Collections & Documents', 'Schema Design', 'Embedding vs Referencing', 'Indexes'] },
    { section: 'Aggregation', topics: ['Aggregation Pipeline', 'Stages & Operators', 'Common Use Cases'] },
    { section: 'Mongoose', topics: ['What is Mongoose?', 'Schemas & Models', 'Validation', 'CRUD with Mongoose'] },
    { section: 'Advanced Topics', topics: ['Transactions', 'Change Streams', 'Sharding', 'Replication', 'Backups'] },
    { section: 'Best Practices', topics: ['Performance Tuning', 'Security', 'Data Backup', 'Monitoring', 'Scaling'] }
  ]
};

