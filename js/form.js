/* =====================================================
   PORTFOLIO — Alex Morgan
   form.js  |  Contact Form Validation & Submission
   ===================================================== */

function initContactForm() {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (!form || !submitBtn) return;

  /* ─── Single field validator ─── */
  function validateField(inputId, groupId, checkFn) {
    const input = document.getElementById(inputId);
    const group = document.getElementById(groupId);
    const valid = checkFn(input.value.trim());
    group.classList.toggle('has-error', !valid);
    input.classList.toggle('error',     !valid);
    return valid;
  }

  /* ─── All validation rules ─── */
  function validateAll() {
    const v1 = validateField('inp-name',    'fg-name',    v => v.length > 1);
    const v2 = validateField('inp-email',   'fg-email',   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    const v3 = validateField('inp-subject', 'fg-subject', v => v.length > 2);
    const v4 = validateField('inp-msg',     'fg-msg',     v => v.length > 10);
    return v1 && v2 && v3 && v4;
  }

  /* ─── Ripple effect helper ─── */
  function addRipple(btn) {
    const ripple = document.createElement('span');
    ripple.className = 'submit-ripple';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }

  /* ─── Submit handler ─── */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    // Loading state
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Sending…';
    addRipple(submitBtn);

    // Simulate async send (replace with real fetch/API call)
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.classList.add('success');
      submitBtn.textContent = '✅ Message Sent!';
      form.reset();

      // Reset button after 3.5s
      setTimeout(() => {
        submitBtn.classList.remove('success');
        submitBtn.textContent = 'Send Message ✈️';
      }, 3500);
    }, 1800);
  });

  /* ─── Live clear errors on typing ─── */
  const fields = [
    ['inp-name',    'fg-name'],
    ['inp-email',   'fg-email'],
    ['inp-subject', 'fg-subject'],
    ['inp-msg',     'fg-msg'],
  ];
  fields.forEach(([inputId, groupId]) => {
    document.getElementById(inputId).addEventListener('input', () => {
      document.getElementById(inputId).classList.remove('error');
      document.getElementById(groupId).classList.remove('has-error');
    });
  });
}

/* ─── CV Download (placeholder) ─── */
function initCVDownload() {
  const btn = document.getElementById('cvBtn');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // Replace the href below with your actual CV PDF path: e.g., 'assets/Alex_Morgan_CV.pdf'
    const link = document.createElement('a');
    link.href     = 'cv.pdf';
    link.download = 'CV.pdf';
    link.click();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCVDownload();
});
