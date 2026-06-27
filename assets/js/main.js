// MrRhinoConnect — main.js
// ThatsKrispy Agency Build

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Nav Toggle ──────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Active Nav Link ────────────────────────
  const path = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '');
    if (href === path || (path === '' && href === '/index.html')) {
      link.classList.add('active');
    }
  });

  // ── FAQ Accordion ──────────────────────────
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item   = question.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = question.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-question.open').forEach(q => {
        q.classList.remove('open');
        q.closest('.faq-item').querySelector('.faq-answer').classList.remove('open');
      });

      // Toggle current
      if (!isOpen) {
        question.classList.add('open');
        answer.classList.add('open');
      }
    });
  });

  // ── Scroll Reveal ──────────────────────────
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  // ── Sticky Header Shadow ───────────────────
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,0.12)'
        : '0 2px 12px rgba(0,0,0,0.06)';
    }, { passive: true });
  }

  // ── Contact Form Submit ────────────────────
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type=submit]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate — in production hook to Formspree/Cloudflare Workers
      setTimeout(() => {
        const msg = document.getElementById('form-success');
        if (msg) msg.style.display = 'block';
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
        msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1200);
    });
  }

  // ── Newsletter Form ────────────────────────
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      btn.textContent = 'Subscribed!';
      setTimeout(() => { btn.textContent = 'Subscribe'; form.reset(); }, 3000);
    });
  });

});
