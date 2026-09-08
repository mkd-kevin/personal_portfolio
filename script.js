const portfolio = {
  about: 'My work sits at the intersection of software development, databases, and system design. Through academic projects, I have been building a grounded understanding of Java, Python, web technologies, and the engineering habits that help software stay clear and maintainable. I am continuously learning, experimenting with new tools, and preparing for opportunities where I can contribute while growing as a professional.',
  skills: {
    Programming: ['Java', 'Python', 'C', 'JavaScript', 'SQL'],
    'Software development': ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Software Engineering', 'MVC Architecture', 'GUI Development', 'Database Development', 'Web Development'],
    Tools: ['Git', 'GitHub', 'NetBeans', 'Maven', 'MySQL', 'phpMyAdmin', 'Jupyter Notebook', 'HTML', 'CSS'],
    'Professional strengths': ['Problem Solving', 'Teamwork', 'Communication', 'Critical Thinking', 'Learning New Technologies', 'Project Development']
  },
  projects: [
    { title: 'Banking Management System', type: 'Academic software engineering project', category: 'Development', description: 'A Java-based banking management application focused on structured data, account workflows, and a practical desktop user experience.', technologies: ['Java', 'Java Swing', 'MySQL', 'Maven', 'MVC'], features: ['Authentication and user categories', 'Customer and account management', 'Deposits, withdrawals and transactions', 'CRUD operations and balance management'], accent: 'cobalt', symbol: '▦' },
    { title: 'Smart Campus Management System', type: 'Conceptual system design project', category: 'Design', description: 'An academic system design exploring how student services, attendance, payments, and integrations can connect in one campus platform.', technologies: ['UML', 'System Analysis', 'API Integration', 'RFID Concepts'], features: ['Student registration and attendance', 'RFID-based attendance concept', 'Digital payments and integrations', 'Use case, class, sequence and activity diagrams'], accent: 'coral', symbol: '⌘' },
    { title: 'Python & Data Coursework', type: 'Academic programming work', category: 'Data', description: 'Small, focused exercises that build confidence with Python fundamentals, data processing, and notebook-based experimentation.', technologies: ['Python', 'Jupyter Notebook'], features: ['Smart Grade Classifier', 'Number Analysis Tool', 'Functions, loops and data processing'], accent: 'mint', symbol: '{}' },
    { title: 'Personal / Company Website Development', type: 'Editable placeholder project', category: 'Development', description: 'Web development work demonstrating frontend development and practical website implementation. Replace this card with exact project details when ready.', technologies: ['HTML', 'CSS', 'JavaScript'], features: ['Replace with your contribution', 'Add the project outcome', 'Add a live link or repository'], accent: 'sun', symbol: '↗' }
  ],
  education: [
    { period: 'Current', institution: 'Adventist University of Central Africa (AUCA)', qualification: 'Software Engineering / Information Technology', detail: 'Expected graduation: November 2026' },
    { period: 'Previous', institution: '[Your High School Name]', qualification: 'MPC — Mathematics, Physics and Computer Science', detail: '[Add dates]' }
  ],
  experience: [
    { period: '[Add dates]', institution: 'ETS MKS Rwanda Ltd', role: 'Technical Credit Manager & Assistant Financial Manager', detail: '[Add your exact responsibilities, outcomes and technologies used.]' },
    { period: '[Add dates]', institution: '[Company or project name]', role: 'Web Development Experience', detail: '[Add the project, responsibilities, tools and measurable outcome.]' }
  ],
  services: [
    ['Software Development', 'Building structured applications with a focus on readable logic and practical user flows.'],
    ['Java Application Development', 'Developing academic desktop applications with Java, Swing, Maven and MVC patterns.'],
    ['Database Development', 'Designing and working with relational data, CRUD operations and MySQL workflows.'],
    ['Web Development', 'Creating responsive, accessible websites with HTML, CSS and JavaScript.'],
    ['Python Programming', 'Working through data-processing tasks and programming exercises in Python and Jupyter.'],
    ['System Analysis & Design', 'Turning requirements into diagrams, workflows and clearer system concepts.']
  ]
};

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));

function renderSkills() {
  const icons = ['&lt;/&gt;', '▣', '▦', '✦'];
  $('#skillsGrid').innerHTML = Object.entries(portfolio.skills).map(([group, skills], i) =>
    `<div class="skill-group"><div class="skill-icon">${icons[i]}</div><h3>${escapeHtml(group)}</h3><div class="skill-tags">${skills.map((s) => `<span>${escapeHtml(s)}</span>`).join('')}</div></div>`
  ).join('');
}

function renderProjects(filter = 'All') {
  const projects = portfolio.projects.filter((p) => filter === 'All' || p.category === filter);
  $('#projectGrid').innerHTML = projects.map((p, i) =>
    `<article class="project-card ${p.accent}"><div class="project-visual"><span>0${i + 1}</span><div class="project-symbol">${p.symbol}</div><div class="visual-lines"></div></div><div class="project-body"><p class="card-kicker">${escapeHtml(p.type)}</p><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description)}</p><div class="project-features">${p.features.map((f) => `<span>✓ ${escapeHtml(f)}</span>`).join('')}</div><div class="tech-row">${p.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join('')}</div></div></article>`
  ).join('');
}

function renderTimeline(target, items, roleKey) {
  $(target).innerHTML = items.map((item) =>
    `<div class="timeline-item"><span class="timeline-period">${escapeHtml(item.period)}</span><div><h4>${escapeHtml(item.institution)}</h4><p>${escapeHtml(item[roleKey])}</p><small>${escapeHtml(item.detail)}</small></div></div>`
  ).join('');
}

function renderServices() {
  $('#serviceList').innerHTML = portfolio.services.map(([title, desc], i) =>
    `<div class="service-item"><span>0${i + 1}</span><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(desc)}</p></div><span>↗</span></div>`
  ).join('');
}

function setupInteractions() {
  const app = $('#app');
  $('#themeToggle').addEventListener('click', () => {
    const dark = app.classList.toggle('dark');
    $('#themeToggle').textContent = dark ? '☀' : '◐';
    $('#themeToggle').setAttribute('aria-label', dark ? 'Use light mode' : 'Use dark mode');
  });
  $('#menuToggle').addEventListener('click', () => {
    const open = $('#navLinks').classList.toggle('open');
    $('#menuToggle').textContent = open ? '×' : '☰';
    $('#menuToggle').setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('#navLinks a').forEach((link) => link.addEventListener('click', () => {
    $('#navLinks').classList.remove('open');
    $('#menuToggle').textContent = '☰';
    $('#menuToggle').setAttribute('aria-expanded', 'false');
  }));
  document.querySelectorAll('[data-filter]').forEach((btn) => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  }));
  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    $('#formStatus').textContent = 'Form ready. Connect Formspree, EmailJS, or your own API in script.js.';
  });
}

$('#aboutText').textContent = portfolio.about;
renderSkills();
renderProjects();
renderTimeline('#educationTimeline', portfolio.education, 'qualification');
renderTimeline('#experienceTimeline', portfolio.experience, 'role');
renderServices();
setupInteractions();
