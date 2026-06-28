/* MrRhinoConnect — Shared Nav + Footer + A11y + Consent
   ThatsKrispy Agency Build */
(function () {

  const LOGO = '/assets/images/mrrhinoconnect-logo.png';

  /* ── NAV ─────────────────────────────────────────────── */
  const NAV_HTML = `
<a class="skip-link" href="#main-content">Skip to main content</a>
<header class="site-header" role="banner">
  <div class="nav-wrapper">
    <a href="/" class="nav-logo" aria-label="MrRhinoConnect Home">
      <img src="${LOGO}" alt="MrRhinoConnect — South Florida Real Estate Technology Solutions" width="180" height="46" loading="eager" />
    </a>

    <button class="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-menu">
      <span></span><span></span><span></span>
    </button>

    <nav class="nav-menu" id="nav-menu" role="navigation" aria-label="Main navigation">
      <div class="nav-item"><a href="/" class="nav-link">Home</a></div>
      <div class="nav-item"><a href="/about.html" class="nav-link">About Us</a></div>
      <div class="nav-item">
        <a href="/services.html" class="nav-link" aria-haspopup="true" aria-expanded="false">
          Services
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="dropdown" role="menu" aria-label="Services submenu">
          <div class="dropdown-group">
            <span class="dropdown-label" id="dd-networking">Networking &amp; Connectivity</span>
            <a href="/services/electrical-low-voltage-wiring.html" role="menuitem">Electrical &amp; Low Voltage Wiring</a>
            <a href="/services/managed-wifi.html" role="menuitem">Managed WiFi for Common Areas</a>
            <a href="/services/fiber-optic.html" role="menuitem">Fiber Optic Circuit</a>
            <a href="/services/pots-line-replacements.html" role="menuitem">POTS Line Replacements</a>
            <a href="/services/iptv.html" role="menuitem">Internet Protocol TV (IPTV)</a>
            <a href="/services/electrical-cabling.html" role="menuitem">Electrical Cabling</a>
            <a href="/services/das.html" role="menuitem">Distributed Antenna System</a>
          </div>
          <div class="dropdown-group">
            <span class="dropdown-label" id="dd-security">Surveillance &amp; Security</span>
            <a href="/services/cctv-security-cameras.html" role="menuitem">CCTV &amp; Security Cameras</a>
            <a href="/services/mobile-security-trailer.html" role="menuitem">Mobile Security Trailer</a>
            <a href="/services/iot-sensors-beacons.html" role="menuitem">IoT Sensors and Beacons</a>
          </div>
          <div class="dropdown-group">
            <span class="dropdown-label" id="dd-smart">Smart Building Systems</span>
            <a href="/services/smart-buildings.html" role="menuitem">Smart Buildings</a>
            <a href="/services/solar-panels.html" role="menuitem">Solar Panels</a>
            <a href="/services/hvac.html" role="menuitem">HVAC</a>
            <a href="/services/ev-charging-stations.html" role="menuitem">EV Charging Stations</a>
            <a href="/services/digital-signage.html" role="menuitem">Digital Signage</a>
            <a href="/services/led-lighting.html" role="menuitem">LED Lighting</a>
            <a href="/services/air-quality-control.html" role="menuitem">Air Quality Control</a>
          </div>
        </div>
      </div>
      <div class="nav-item"><a href="/faq.html" class="nav-link">FAQ</a></div>
      <div class="nav-item"><a href="/news.html" class="nav-link">News</a></div>
      <div class="nav-item"><a href="/contact.html" class="nav-link">Contact</a></div>
    </nav>

    <div class="nav-cta">
      <a href="tel:+13052491084" class="nav-call-btn" aria-label="Call us at 305.249.1084">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        Call Today
      </a>
    </div>
  </div>
</header>`;

  /* ── FOOTER ──────────────────────────────────────────── */
  const FOOTER_HTML = `
<div class="newsletter-strip" role="complementary" aria-label="Newsletter signup">
  <div class="newsletter-inner">
    <h3>Get the Latest News &amp; Updates</h3>
    <p>Stay informed on smart building tech, South Florida real estate trends, and MrRhinoConnect news.</p>
    <form class="newsletter-form" onsubmit="return false;" aria-label="Newsletter signup form">
      <input type="email" placeholder="Your Email Address" aria-label="Email address for newsletter" required autocomplete="email" />
      <button type="submit" class="btn btn-primary">Subscribe</button>
    </form>
  </div>
</div>

<footer class="site-footer" role="contentinfo">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="/assets/images/mrrhinoconnect-logo.png"
           alt="MrRhinoConnect Logo"
           width="160" height="42" loading="lazy" />
      <p>Reach out to us today to explore innovative solutions tailored for your needs and elevate your property's potential with cutting-edge technology.</p>
      <nav class="footer-socials" aria-label="Social media links">
        <a href="https://www.facebook.com/MrRhinoConnect" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="MrRhinoConnect on Facebook">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://twitter.com/MrRhinoConnect1" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="MrRhinoConnect on Twitter">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
        </a>
        <a href="https://www.instagram.com/MrRhinoConnect/" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="MrRhinoConnect on Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/mr-rhino-connect-5b058223a" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="MrRhinoConnect on LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </nav>
    </div>

    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about.html">About Us</a></li>
        <li><a href="/services.html">Services</a></li>
        <li><a href="/faq.html">FAQ</a></li>
        <li><a href="/news.html">News</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="/services/fiber-optic.html">Fiber Optic</a></li>
        <li><a href="/services/managed-wifi.html">Managed WiFi</a></li>
        <li><a href="/services/cctv-security-cameras.html">CCTV &amp; Security</a></li>
        <li><a href="/services/ev-charging-stations.html">EV Charging</a></li>
        <li><a href="/services/solar-panels.html">Solar Panels</a></li>
        <li><a href="/services/smart-buildings.html">Smart Buildings</a></li>
        <li><a href="/services/iptv.html">IPTV</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Contact Us</h4>
      <ul class="footer-contact">
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          <a href="tel:+13052491084">305.249.1084</a>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:Hello@MrRhinoConnect.com">Hello@MrRhinoConnect.com</a>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Miami, Florida</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <span>Copyright &copy; 2025 MrRhinoConnect. All rights reserved.</span>
    <span>Built by <a href="https://thatskrispy.com" target="_blank" rel="noopener noreferrer">@ThatsKrispy</a></span>
  </div>
</footer>`;

  /* ── CONSENT BANNER ──────────────────────────────────── */
  const CONSENT_HTML = `
<div class="consent-banner" id="consent-banner" role="dialog" aria-modal="false" aria-label="Cookie consent">
  <div class="consent-inner">
    <div class="consent-text">
      <p>We use cookies to enhance your experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies. <a href="/privacy-policy.html">Privacy Policy</a></p>
    </div>
    <div class="consent-actions">
      <button class="consent-accept" id="consent-accept" aria-label="Accept cookies">Accept</button>
      <button class="consent-decline" id="consent-decline" aria-label="Decline non-essential cookies">Decline</button>
    </div>
  </div>
</div>`;

  /* ── ACCESSIBILITY WIDGET ────────────────────────────── */
  const A11Y_HTML = `
<button class="a11y-btn" id="a11y-toggle" aria-label="Open accessibility options" aria-expanded="false" aria-controls="a11y-panel">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
    <path d="M9 12h6M10 16l2-4 2 4"/>
  </svg>
</button>
<div class="a11y-panel" id="a11y-panel" role="dialog" aria-label="Accessibility settings" aria-modal="false">
  <div class="a11y-header">Accessibility Options</div>
  <div class="a11y-options">
    <button class="a11y-option" data-a11y="large-text" aria-pressed="false">
      <span>Larger Text</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><text x="2" y="18" font-size="14" fill="currentColor" stroke="none">A</text><text x="10" y="20" font-size="18" fill="currentColor" stroke="none">A</text></svg>
    </button>
    <button class="a11y-option" data-a11y="high-contrast" aria-pressed="false">
      <span>High Contrast</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2v20" stroke-width="2"/><path d="M12 2a10 10 0 010 20z" fill="currentColor"/></svg>
    </button>
    <button class="a11y-option" data-a11y="grayscale" aria-pressed="false">
      <span>Grayscale</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8" stroke-width="2"/></svg>
    </button>
    <button class="a11y-option" data-a11y="links" aria-pressed="false">
      <span>Highlight Links</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
    </button>
  </div>
  <button class="a11y-reset" id="a11y-reset" aria-label="Reset all accessibility settings">Reset All Settings</button>
</div>`;

  /* ── INJECT ──────────────────────────────────────────── */
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  const footEl = document.getElementById('site-footer');
  if (footEl) footEl.innerHTML = FOOTER_HTML;

  // Append consent + a11y to body
  const consentWrap = document.createElement('div');
  consentWrap.innerHTML = CONSENT_HTML;
  document.body.appendChild(consentWrap.firstElementChild);

  const a11yWrap = document.createElement('div');
  a11yWrap.innerHTML = A11Y_HTML;
  while (a11yWrap.firstChild) document.body.appendChild(a11yWrap.firstChild);

  /* ── ACTIVE NAV ──────────────────────────────────────── */
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = (link.getAttribute('href') || '').replace(/\/$/, '');
    const isHome = (href === '/' || href === '/index.html') && path === '/';
    const isMatch = href !== '/' && href !== '' && path.startsWith(href.replace('.html', ''));
    if (isHome || isMatch) link.classList.add('active');
  });

  /* ── CONSENT LOGIC ───────────────────────────────────── */
  const banner = document.getElementById('consent-banner');
  if (banner) {
    const stored = localStorage.getItem('mrrhino_consent');
    if (!stored) banner.classList.add('visible');

    document.getElementById('consent-accept').addEventListener('click', () => {
      localStorage.setItem('mrrhino_consent', 'accepted');
      banner.classList.remove('visible');
    });
    document.getElementById('consent-decline').addEventListener('click', () => {
      localStorage.setItem('mrrhino_consent', 'declined');
      banner.classList.remove('visible');
    });
  }

  /* ── ACCESSIBILITY LOGIC ─────────────────────────────── */
  const a11yToggle = document.getElementById('a11y-toggle');
  const a11yPanel  = document.getElementById('a11y-panel');
  const a11yReset  = document.getElementById('a11y-reset');

  const A11Y_CLASSES = ['a11y-large-text', 'a11y-high-contrast', 'a11y-grayscale', 'a11y-links'];
  const stored = JSON.parse(localStorage.getItem('mrrhino_a11y') || '{}');

  // Restore saved states
  Object.keys(stored).forEach(k => {
    if (stored[k]) {
      document.body.classList.add('a11y-' + k);
      const btn = document.querySelector(`[data-a11y="${k}"]`);
      if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
    }
  });

  if (a11yToggle) {
    a11yToggle.addEventListener('click', () => {
      const open = a11yPanel.classList.toggle('open');
      a11yToggle.setAttribute('aria-expanded', open);
    });
  }

  document.querySelectorAll('.a11y-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.a11y;
      const cls = 'a11y-' + key;
      const isActive = document.body.classList.toggle(cls);
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
      const pref = JSON.parse(localStorage.getItem('mrrhino_a11y') || '{}');
      pref[key] = isActive;
      localStorage.setItem('mrrhino_a11y', JSON.stringify(pref));
    });
  });

  if (a11yReset) {
    a11yReset.addEventListener('click', () => {
      A11Y_CLASSES.forEach(c => document.body.classList.remove(c));
      document.querySelectorAll('.a11y-option').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      localStorage.removeItem('mrrhino_a11y');
    });
  }

  // Close a11y panel on outside click
  document.addEventListener('click', e => {
    if (a11yPanel && a11yPanel.classList.contains('open')) {
      if (!a11yPanel.contains(e.target) && !a11yToggle.contains(e.target)) {
        a11yPanel.classList.remove('open');
        a11yToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Escape key closes panel
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && a11yPanel?.classList.contains('open')) {
      a11yPanel.classList.remove('open');
      a11yToggle.setAttribute('aria-expanded', 'false');
      a11yToggle.focus();
    }
  });

})();
