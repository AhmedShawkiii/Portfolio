/* =====================================================
   PORTFOLIO — Ahmed Shawki
   data.js  |  All Static Data — Easy to Edit
   ===================================================== */

const SKILLS = [
  { name: 'HTML5',           type: 'Frontend', icon: '🌐', pct: 92 },
  { name: 'CSS3',            type: 'Frontend', icon: '🎨', pct: 90 },
  { name: 'JavaScript',      type: 'Frontend', icon: '⚡', pct: 84 },
  { name: 'Bootstrap',       type: 'Frontend', icon: '🅱️', pct: 88 },
  { name: 'Responsive Design',type: 'Frontend',icon: '📱', pct: 90 },
  { name: 'React',           type: 'Frontend', icon: '⚛️', pct: 50 },
  { name: 'Python',          type: 'Desktop',  icon: '🐍', pct: 90 },
  { name: 'Tkinter',         type: 'Desktop',  icon: '🖥️', pct: 87 },
  { name: 'SQLite',          type: 'Desktop',  icon: '🗄️', pct: 82 },
  { name: 'API Integration', type: 'Tooling',  icon: '🔌', pct: 80 },
  { name: 'Git & GitHub',    type: 'Tooling',  icon: '🔧', pct: 84 },
  { name: 'UI Design',       type: 'Tooling',  icon: '🎯', pct: 78 },
];

const PROJECTS = [

  {
    emoji:    '🛒',
    title:    'E-Commerce Front-End Website',
    desc:     'A modern, fully responsive e-commerce front end built from scratch. Integrated with a live product API to dynamically render listings, handle filtering, and manage a shopping cart — all with vanilla JavaScript.',
    result:   'Delivered a fast, mobile-friendly storefront that connects seamlessly to a back-end API.',
    tags:     ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'Responsive Design'],
    gradient: '135deg, #ff6584, #c94b72',
    demo:     '#',
    source:   '#',
  },
  {
    emoji:    '🧑‍💻',
    title:    'Personal Portfolio Website',
    desc:     'This very portfolio — designed and coded from the ground up with a focus on clean structure, smooth animations, and a strong developer identity. Multi-section layout, scroll-triggered reveals, and a functional contact form.',
    result:   'A self-branding asset built to showcase work and convert visitors into clients.',
    tags:     ['HTML5', 'CSS3', 'JavaScript', 'Animations', 'UI Design'],
    gradient: '135deg, #f7971e, #c0392b',
    demo:     'https://ahmedshawkiii.github.io/Portfolio/',
    source:   '#',
  },
  {
  emoji:    '🎓',
  title:    'Student Management Dashboard',
  desc:     'A simple student management system that allows users to add, edit, and delete student records while displaying useful statistics such as total students, average grades, and pass rates through a clean and responsive dashboard interface.',
  result:   'An interactive dashboard designed to simplify student data management and demonstrate practical JavaScript DOM manipulation and UI design skills.',
  tags:     ['HTML5', 'CSS3', 'JavaScript', 'Dashboard UI', 'DOM Manipulation'],
  gradient: '135deg, #36d1dc, #5b86e5',
  demo:     'https://ahmedshawkiii.github.io/student-dashboard/',
  source:   'https://github.com/AhmedShawkiii/student-dashboard.git',
},
  {
    emoji:    '🏭',
    title:    'Brick Factory Accounting System',
    desc:     'A complete desktop accounting solution for a real brick manufacturing business. Handles sales, purchases, client account balances, and generates professional Arabic-formatted PDF financial reports — secured with a login system.',
    result:   'Eliminated manual bookkeeping, saving the client hours of admin work every week.',
    tags:     ['Python', 'Tkinter', 'SQLite', 'ReportLab', 'Arabic Support'],
    gradient: '135deg, #6c63ff, #3b3793',
  
  },
  {
    emoji:    '⚖️',
    title:    'Truck Scale Management System',
    desc:     'A professional desktop app that connects directly to an industrial scale via RS-232 serial communication. Reads live weight data in real time, stores records in a database, and produces official bilingual PDF reports per transaction.',
    result:   'Replaced a fully manual process — the client now generates reports with a single click.',
    tags:     ['Python', 'Tkinter', 'RS-232 Serial', 'ReportLab', 'SQLite'],
    gradient: '135deg, #00d4ff, #007a99',
    
  },
  
];

const SERVICES = [
  { icon: '🌐', title: 'Web Front-End Development',      desc: 'Pixel-perfect, responsive websites built with HTML, CSS & JavaScript. Fast, clean, mobile-first — designed to impress.' },
  { icon: '🖥️', title: 'Desktop Application Development', desc: 'Custom business management tools for Windows. Accounting, reporting, and data-entry systems built to save time.' },
  { icon: '🔌', title: 'API Integration',                 desc: 'Connect your website or app to any external service — product feeds, payment APIs, or custom data sources.' },
  { icon: '📊', title: 'Reporting & PDF Generation',      desc: 'Automated, professional PDF reports in Arabic or English — designed for businesses that need clean output from their data.' },
  { icon: '🗄️', title: 'Database-Driven Systems',         desc: 'Lightweight, reliable SQLite database systems — ideal for offline apps or small-to-medium business data needs.' },
  { icon: '🎨', title: 'UI / UX Design',                  desc: 'Clean, modern interface design that makes your product feel polished and professional from the very first click.' },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Science — Computer Science (CS)',
    school: 'Faculty of Computers & Information',
    period: '2024 – Present',
    status: 'In Progress',
    highlights: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Systems', 'Software Engineering', 'Computer Networks'],
  },
];

const ACHIEVEMENTS = [
  { num: '4+',   label: 'Projects Delivered',   icon: '🚀', desc: 'Real-world, client-facing projects — not just tutorials.' },
  { num: '2',    label: 'Business Clients',      icon: '🤝', desc: 'Served real businesses with custom software solutions.' },
  { num: '100%', label: 'On-Time Delivery',      icon: '⏱️', desc: 'Every project delivered within the agreed timeline.' },
  { num: '2',    label: 'Languages Supported',   icon: '🌍', desc: 'Arabic & English — ready for local and global clients.' },
];

const TESTIMONIALS = [
  {
    quote: 'Ahmed delivered a complete accounting system for our factory that works perfectly. He understood exactly what we needed and stayed professional throughout the whole project.',
    name: 'Factory Manager',
    role: 'Brick Manufacturing Business',
    avatar: '👨‍💼',
  },
  {
    quote: 'The scale system has saved us so much time. Before, everything was done by hand. Now we click a button and get a professional report. Ahmed built something that actually works in a real factory.',
    name: 'Operations Supervisor',
    role: 'Industrial Weighing Facility',
    avatar: '👷',
  },
  {
    quote: 'Great attention to detail on the front-end work. Every page was responsive, the API integrated cleanly, and he communicated clearly at every step. I will work with him again.',
    name: 'Project Collaborator',
    role: 'Web Development Project',
    avatar: '👨‍💻',
  },
];
