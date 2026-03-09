/* =====================================================
   PORTFOLIO — Ahmed Shawki
   animations.js  |  Scroll · Observer · Counters
   ===================================================== */

/* ─── Intersection Observer (Reveal + Skill Bars) ─── */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.skill-bar').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%';
        });
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ─── Counter Animation ─── */
function countUp(el, target, duration = 1800) {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + (progress < 1 ? '' : '+');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const statsSection = document.querySelector('.hero-stats');
  if (!statsSection) return;
  const sio = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('[data-count]').forEach(el => {
          countUp(el, parseInt(el.dataset.count));
        });
        sio.disconnect();
      }
    });
  }, { threshold: 0.5 });
  sio.observe(statsSection);
}

/* ─── Navbar ─── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct  = docH > 0 ? (y / docH) * 100 : 0;
    const bar  = document.getElementById('progress-bar');
    if (bar) bar.style.width = pct + '%';

    if (y > lastScrollY + 5 && y > 80) {
      navbar.classList.add('hidden');
    } else if (y < lastScrollY - 5) {
      navbar.classList.remove('hidden');
    }
    lastScrollY = y;
    navbar.classList.toggle('scrolled', y > 60);
  });
}

/* ─── Mobile Menu ─── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  if (!hamburger) return;

  // Inject mobile menu
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.id = 'mobileMenu';
  menu.innerHTML = `
    <a href="#about"        onclick="closeMobile()">About</a>
    <a href="#services"     onclick="closeMobile()">Services</a>
    <a href="#skills"       onclick="closeMobile()">Skills</a>
    <a href="#projects"     onclick="closeMobile()">Projects</a>
    <a href="#testimonials" onclick="closeMobile()">Reviews</a>
    <a href="#contact"      onclick="closeMobile()">Contact</a>
    <a href="#contact"      onclick="closeMobile()">🚀 Hire Me</a>
  `;
  document.body.appendChild(menu);

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  window.closeMobile = () => menu.classList.remove('open');
}

/* ─── Parallax Hero ─── */
function initParallax() {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroContent.style.transform = `translateY(${y * 0.22}px)`;
      heroContent.style.opacity   = Math.max(0, 1 - y / 580);
    }
  });
}

/* ─── Init All ─── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCounters();
  initNavbar();
  initMobileMenu();
  initParallax();
});
