
/* ═══════════════════════════════════════════════════════════
   Maria Imparato – Global JS (defer)
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll Reveal ──────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ── Active nav link highlight ──────────────────────────── */
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  /* ── Mobile menu ────────────────────────────────────────── */
  const toggle   = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-close');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    closeBtn?.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Newsletter form feedback ───────────────────────────── */
  document.querySelectorAll('.subscribe-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn   = form.querySelector('button[type="submit"]');
      if (!input?.value) return;
      btn.textContent = 'Iscritto! ✓';
      btn.disabled = true;
      input.value = '';
    });
  });

  /* ── Contact form feedback ──────────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {   
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Messaggio inviato ✓';
      btn.disabled = true;
    });
  }

  /* ── Sticky header shrink on scroll ─────────────────────── */
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 2px 20px rgba(0,0,0,0.07)'
        : 'none';
    }, { passive: true });
  }

});
