// Shared nav/footer components — injected at runtime for DRY static pages
(function() {
  const LOGO = '/assets/images/logo-nav.png';
  const NAV_HTML = `
<header class="site-header">
  <div class="nav-wrapper">
    <a href="/" class="nav-logo"><img src="${LOGO}" alt="MrRhinoConnect" /></a>
    <button class="nav-toggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
    <nav class="nav-menu" role="navigation">
      <div class="nav-item"><a href="/" class="nav-link">Home</a></div>
      <div class="nav-item"><a href="/about" class="nav-link">About Us</a></div>
      <div class="nav-item">
        <a href="/services" class="nav-link">Services <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></a>
        <div class="dropdown">
          <div class="dropdown-group">
            <span class="dropdown-label">Networking &amp; Connectivity</span>
            <a href="/services/electrical-low-voltage-wiring">Electrical &amp; Low Voltage Wiring</a>
            <a href="/services/managed-wifi">Managed WiFi for Common Areas</a>
            <a href="/services/fiber-optic">Fiber Optic Circuit</a>
            <a href="/services/pots-line-replacements">POTS Line Replacements</a>
            <a href="/services/iptv">Internet Protocol TV (IPTV)</a>
            <a href="/services/electrical-cabling">Electrical Cabling</a>
            <a href="/services/das">Distributed Antenna System</a>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-group">
            <span class="dropdown-label">Surveillance &amp; Security</span>
            <a href="/services/cctv-security-cameras">CCTV &amp; Security Cameras</a>
            <a href="/services/mobile-security-trailer">Mobile Security Trailer</a>
            <a href="/services/iot-sensors-beacons">IoT Sensors and Beacons</a>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-group">
            <span class="dropdown-label">Smart Building Systems</span>
            <a href="/services/smart-buildings">Smart Buildings</a>
            <a href="/services/solar-panels">Solar Panels</a>
            <a href="/services/hvac">HVAC</a>
            <a href="/services/ev-charging-stations">EV Charging Stations</a>
            <a href="/services/digital-signage">Digital Signage</a>
            <a href="/services/led-lighting">LED Lighting</a>
            <a href="/services/air-quality-control">Air Quality Control</a>
          </div>
        </div>
      </div>
      <div class="nav-item"><a href="/faq" class="nav-link">FAQ</a></div>
      <div class="nav-item"><a href="/news" class="nav-link">News</a></div>
      <div class="nav-item"><a href="/contact" class="nav-link">Contact</a></div>
    </nav>
    <div class="nav-cta">
      <a href="tel:+13052491084" class="nav-phone">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        305.249.1084
      </a>
      <a href="/contact" class="btn btn-primary">Get Started</a>
    </div>
  </div>
</header>`;

  const FOOTER_HTML = `
<div class="newsletter-strip">
  <div class="newsletter-inner">
    <h3>Get the Latest News &amp; Updates</h3>
    <p>Stay informed on smart building technology, industry trends, and MrRhinoConnect news.</p>
    <form class="newsletter-form" onsubmit="return false;">
      <input type="email" placeholder="Your email address" aria-label="Email" required />
      <button type="submit" class="btn btn-primary">Subscribe</button>
    </form>
  </div>
</div>
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="/assets/images/logo-nav.png" alt="MrRhinoConnect" />
      <p>Reach out to us today to explore innovative solutions tailored for your needs and elevate your property's potential with cutting-edge technology.</p>
      <div class="footer-socials">
        <a href="https://www.facebook.com/MrRhinoConnect" class="footer-social" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
        <a href="https://twitter.com/MrRhinoConnect1" class="footer-social" target="_blank" rel="noopener" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
        <a href="https://www.instagram.com/MrRhinoConnect/" class="footer-social" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
        <a href="https://www.linkedin.com/in/mr-rhino-connect-5b058223a" class="footer-social" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="/services/fiber-optic">Fiber Optic</a></li>
        <li><a href="/services/managed-wifi">Managed WiFi</a></li>
        <li><a href="/services/cctv-security-cameras">CCTV Security</a></li>
        <li><a href="/services/solar-panels">Solar Panels</a></li>
        <li><a href="/services/ev-charging-stations">EV Charging</a></li>
        <li><a href="/services/iptv">IPTV</a></li>
        <li><a href="/services/smart-buildings">Smart Buildings</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul class="footer-contact">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg><a href="tel:+13052491084">305.249.1084</a></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:info@mrrhinoconnect.com">info@mrrhinoconnect.com</a></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Miami, Florida</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>Copyright &copy; 2024 MrRhinoConnect. All rights reserved.</span>
    <span>Built by <a href="https://thatskrispy.com" target="_blank" rel="noopener">@ThatsKrispy</a></span>
  </div>
</footer>`;

  // Inject into page
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  const footEl = document.getElementById('site-footer');
  if (footEl) footEl.innerHTML = FOOTER_HTML;

  // Set active nav link
  setTimeout(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = (link.getAttribute('href') || '').replace(/\/$/, '');
      if (href === path || (path === '' && href === '/index.html') || (href !== '/' && path.startsWith(href.replace('.html','')))) {
        link.classList.add('active');
      }
    });
  }, 0);
})();
