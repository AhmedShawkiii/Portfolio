/* =====================================================
   PORTFOLIO — Ahmed Shawki
   render.js  |  Dynamic DOM Rendering
   ===================================================== */

/* ─── Skills ─── */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  SKILLS.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.style.transitionDelay = (i * 0.06) + 's';
    card.innerHTML = `
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-type">${s.type}</div>
      <div class="skill-bar-wrap">
        <div class="skill-bar" data-pct="${s.pct}"></div>
      </div>
      <div class="skill-pct">${s.pct}%</div>
    `;
    grid.appendChild(card);
  });
}

/* ─── Projects ─── */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  PROJECTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = (i * 0.1) + 's';
    card.innerHTML = `
      <div class="project-img">
        <div class="project-img-bg"
             style="background: linear-gradient(${p.gradient}); opacity: 0.85"></div>
        <div style="position:relative; z-index:1; font-size:4rem">${p.emoji}</div>
        <div class="project-overlay">
          <a href="${p.demo}" class="btn btn-primary" style="transform:none">
            View Project →
          </a>
        </div>
      </div>
      <div class="project-body">
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-result">
          <span class="result-icon">✅</span>
          <span>${p.result}</span>
        </div>
      </div>
      <div class="project-footer">
        <a href="${p.demo}"   class="project-link">🔗 Live Demo</a>
        <a href="${p.source}" class="project-link">📄 Source Code</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ─── Services ─── */
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  SERVICES.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.style.transitionDelay = (i * 0.08) + 's';
    card.innerHTML = `
      <div class="service-icon">${s.icon}</div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc}</div>
    `;
    grid.appendChild(card);
  });
}

/* ─── Education ─── */
function renderEducation() {
  const list = document.getElementById('educationList');
  if (!list) return;
  EDUCATION.forEach((e, i) => {
    const item = document.createElement('div');
    item.className = 'edu-card reveal';
    item.style.transitionDelay = (i * 0.1) + 's';
    item.innerHTML = `
      <div class="edu-left">
        <div class="edu-icon">🎓</div>
        <div class="edu-period">${e.period}</div>
        <div class="edu-status">${e.status}</div>
      </div>
      <div class="edu-right">
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-school">${e.school}</div>
        <div class="edu-highlights">
          ${e.highlights.map(h => `<span class="edu-tag">${h}</span>`).join('')}
        </div>
      </div>
    `;
    list.appendChild(item);
  });
}

/* ─── Achievements ─── */
function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;
  ACHIEVEMENTS.forEach((a, i) => {
    const card = document.createElement('div');
    card.className = 'achievement-card reveal';
    card.style.transitionDelay = (i * 0.1) + 's';
    card.innerHTML = `
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-num">${a.num}</div>
      <div class="ach-label">${a.label}</div>
      <div class="ach-desc">${a.desc}</div>
    `;
    grid.appendChild(card);
  });
}

/* ─── Testimonials ─── */
function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  TESTIMONIALS.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card reveal';
    card.style.transitionDelay = (i * 0.12) + 's';
    card.innerHTML = `
      <div class="testimonial-quote">"${t.quote}"</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.avatar}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
      <div class="testimonial-stars">★★★★★</div>
    `;
    grid.appendChild(card);
  });
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderServices();
  renderEducation();
  renderAchievements();
  renderTestimonials();
});
