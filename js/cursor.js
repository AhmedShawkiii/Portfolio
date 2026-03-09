/* =====================================================
   PORTFOLIO — Alex Morgan
   cursor.js  |  Custom Magnetic Cursor
   ===================================================== */

function initCursor() {
  const dot  = document.getElementById('cDot');
  const ring = document.getElementById('cRing');
  if (!dot || !ring) return;

  // Skip on touch devices
  if (window.matchMedia('(hover: none)').matches) {
    dot.style.display  = 'none';
    ring.style.display = 'none';
    return;
  }

  let mx = 0, my = 0;   // mouse position
  let rx = 0, ry = 0;   // ring (lagged) position

  // Track mouse instantly for dot
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Animate ring with lerp for smooth lag
  (function animateRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Expand ring on interactive elements
  document.querySelectorAll('a, button, .btn, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width       = '52px';
      ring.style.height      = '52px';
      ring.style.borderColor = 'var(--accent)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width       = '32px';
      ring.style.height      = '32px';
      ring.style.borderColor = 'rgba(108, 99, 255, 0.5)';
    });
  });
}

document.addEventListener('DOMContentLoaded', initCursor);
