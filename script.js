/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ===== MOBILE MENU ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ===== SMOOTH SCROLL FOR ALL NAV ANCHORS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== REVEAL ON SCROLL ===== */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== CONTACT MODAL ===== */
const modal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');
const formSuccess = document.getElementById('formSuccess');
const contactForm = document.getElementById('contactForm');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Reset to form view on reopen
  contactForm.classList.remove('hidden');
  formSuccess.classList.add('hidden');
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Trigger buttons
['heroContactBtn', 'askContactBtn', 'footerContactBtn'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', openModal);
});

modalClose.addEventListener('click', closeModal);

// Close on overlay click
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

/* ===== FORM SUBMIT (Formspree) ===== */
window.addEventListener('load', function () {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.querySelector('span').textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.classList.add('hidden');
        document.getElementById('formSuccess').classList.remove('hidden');
      } else {
        btn.querySelector('span').textContent = 'Error — try again';
        btn.disabled = false;
      }
    } catch {
      btn.querySelector('span').textContent = 'Error — try again';
      btn.disabled = false;
    }
  });
});

/* ===== ACTIVE NAV LINK HIGHLIGHTING ===== */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(s => sectionObserver.observe(s));

/* ===== ADD ACTIVE LINK STYLE ===== */
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: #fff; }`;
document.head.appendChild(style);

/* ===== VIDEO THUMBNAIL ON END ===== */
const demoVideo = document.getElementById('demoVideo');
if (demoVideo) {
  demoVideo.addEventListener('ended', () => {
    demoVideo.load(); // resets to poster frame (thumbnail.jpeg)
  });
}
