(function(){'use strict';const LOGO='/assets/images/mrrhinoconnect-logo-v3.png';const NAV_HTML=`
<a class="skip-link" href="#main-content">Skip to main content</a>
<div class="nav-overlay" id="nav-overlay" aria-hidden="true"></div>
<header class="site-header" role="banner">
  <div class="nav-wrapper">

    <a href="/" class="nav-logo" aria-label="MrRhinoConnect — Return to homepage">
      <img src="${LOGO}" alt="MrRhinoConnect logo" width="160" height="42" loading="eager" fetchpriority="high" />
    </a>

    <nav class="nav-menu" id="nav-menu" role="navigation" aria-label="Main navigation">
      <div class="nav-item"><a href="/" class="nav-link">Home</a></div>
      <div class="nav-item"><a href="/about.html" class="nav-link">About Us</a></div>

      <div class="nav-item nav-item--services" id="nav-services">
        <button class="nav-link" aria-haspopup="true" aria-expanded="false" aria-controls="nav-dropdown">
          Services
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="dropdown" id="nav-dropdown" role="menu" aria-label="Services submenu">
          <div class="dropdown-group">
            <span class="dropdown-label">Networking &amp; Connectivity</span>
            <a href="/services/electrical-low-voltage-wiring.html" role="menuitem">Electrical &amp; Low Voltage Wiring</a>
            <a href="/services/managed-wifi.html" role="menuitem">Managed WiFi for Common Areas</a>
            <a href="/services/fiber-optic.html" role="menuitem">Fiber Optic Circuit</a>
            <a href="/services/pots-line-replacements.html" role="menuitem">POTS Line Replacements</a>
            <a href="/services/iptv.html" role="menuitem">Internet Protocol TV (IPTV)</a>
            <a href="/services/electrical-cabling.html" role="menuitem">Electrical Cabling</a>
            <a href="/services/das.html" role="menuitem">Distributed Antenna System</a>
          </div>
          <div class="dropdown-group">
            <span class="dropdown-label">Surveillance &amp; Security</span>
            <a href="/services/cctv-security-cameras.html" role="menuitem">CCTV &amp; Security Cameras</a>
            <a href="/services/mobile-security-trailer.html" role="menuitem">Mobile Security Trailer</a>
            <a href="/services/iot-sensors-beacons.html" role="menuitem">IoT Sensors and Beacons</a>
          </div>
          <div class="dropdown-group">
            <span class="dropdown-label">Smart Building Systems</span>
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

      <div class="nav-cta">
        <a href="tel:+13052491084" class="nav-phone" aria-label="Call MrRhinoConnect at 305.249.1084">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          305.249.1084
        </a>
        <a href="/contact.html" class="nav-call-btn">Get Started</a>
      </div>
    </nav>

    <div class="nav-cta" id="nav-cta-desktop">
      <a href="tel:+13052491084" class="nav-phone" aria-label="Call MrRhinoConnect at 305.249.1084">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        305.249.1084
      </a>
      <a href="/contact.html" class="nav-call-btn">Get Started</a>
    </div>

    <button class="nav-toggle" id="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-menu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>

  </div>
</header>`;const FOOTER_HTML=`
<div class="newsletter-strip" role="complementary" aria-label="Newsletter signup">
  <div class="newsletter-inner">
    <h3>Get the Latest News &amp; Updates</h3>
    <p>Stay informed on smart building tech, South Florida real estate trends, and MrRhinoConnect news.</p>
    <form class="newsletter-form" onsubmit="return false;" aria-label="Newsletter signup form">
      <label for="newsletter-email" class="sr-only">Email address for newsletter</label>
      <input type="email" id="newsletter-email" placeholder="Your Email Address" aria-label="Email address for newsletter" required autocomplete="email" />
      <button type="submit" class="btn btn-primary">Subscribe</button>
    </form>
  </div>
</div>
<footer class="site-footer" role="contentinfo">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="/assets/images/mrrhinoconnect-logo-v3.png" alt="MrRhinoConnect" width="160" height="42" loading="lazy" decoding="async" />
      <p>Reach out to us today to explore innovative solutions tailored for your needs and elevate your property's potential with cutting-edge technology.</p>
      <nav class="footer-socials" aria-label="Social media links">
        <a href="https://www.facebook.com/MrRhinoConnect" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="MrRhinoConnect on Facebook (opens in new tab)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://twitter.com/MrRhinoConnect1" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="MrRhinoConnect on Twitter (opens in new tab)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
        </a>
        <a href="https://www.instagram.com/MrRhinoConnect/" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="MrRhinoConnect on Instagram (opens in new tab)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/mr-rhino-connect-5b058223a" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="MrRhinoConnect on LinkedIn (opens in new tab)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          <a href="tel:+13052491084">305.249.1084</a>
        </li>
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:Hello@MrRhinoConnect.com">Hello@MrRhinoConnect.com</a>
        </li>
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Miami, Florida</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>Copyright &copy; 2025 MrRhinoConnect. All rights reserved.</span>
    <span>Built by <a href="https://thatskrispy.com" target="_blank" rel="noopener noreferrer">@ThatsKrispy</a></span>
  </div>
</footer>`;const CONSENT_HTML=`
<div class="consent-banner" id="consent-banner" role="dialog" aria-modal="true" aria-label="Cookie consent" aria-describedby="consent-desc">
  <div class="consent-inner">
    <div class="consent-text">
      <p id="consent-desc">We use cookies to enhance your experience and analyze site traffic. <a href="/privacy-policy.html">Privacy Policy</a></p>
    </div>
    <div class="consent-actions">
      <button class="consent-accept" id="consent-accept">Accept All</button>
      <button class="consent-decline" id="consent-decline">Decline</button>
    </div>
  </div>
</div>`;const A11Y_HTML=`
<div id="ada-widget-wrap">
  <button
    id="ada-trigger"
    aria-label="Open accessibility menu"
    aria-expanded="false"
    aria-controls="ada-panel"
    aria-haspopup="dialog"
    title="Accessibility Options"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" focusable="false">
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v5M8 9h8M9 22l1.5-5h3L15 22"/>
    </svg>
    <span class="ada-trigger-label" aria-hidden="true">Accessibility</span>
  </button>

  <div
    id="ada-panel"
    role="dialog"
    aria-label="Accessibility settings"
    aria-modal="false"
    hidden
  >
    <div class="ada-panel-header">
      <span>Accessibility Options</span>
      <button id="ada-close" aria-label="Close accessibility menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div class="ada-section-label" id="ada-sec-content">Content</div>
    <div class="ada-options" role="group" aria-labelledby="ada-sec-content">

      <div class="ada-option-row" id="ada-row-fontsize">
        <span class="ada-option-label" id="ada-lbl-fontsize">Text Size</span>
        <div class="ada-stepper" role="group" aria-labelledby="ada-lbl-fontsize">
          <button class="ada-step-btn" id="ada-font-dec" aria-label="Decrease text size">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <span class="ada-step-val" id="ada-font-val" aria-live="polite" aria-atomic="true">100%</span>
          <button class="ada-step-btn" id="ada-font-inc" aria-label="Increase text size">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>

      <div class="ada-option-row" id="ada-row-spacing">
        <span class="ada-option-label" id="ada-lbl-spacing">Letter Spacing</span>
        <div class="ada-stepper" role="group" aria-labelledby="ada-lbl-spacing">
          <button class="ada-step-btn" id="ada-space-dec" aria-label="Decrease letter spacing">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <span class="ada-step-val" id="ada-space-val" aria-live="polite" aria-atomic="true">Normal</span>
          <button class="ada-step-btn" id="ada-space-inc" aria-label="Increase letter spacing">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>

      <button class="ada-toggle-btn" id="ada-dyslexia" aria-pressed="false">
        <span class="ada-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
        </span>
        <span>Dyslexia Font</span>
        <span class="ada-toggle-status" aria-hidden="true">Off</span>
      </button>

      <button class="ada-toggle-btn" id="ada-linespacing" aria-pressed="false">
        <span class="ada-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </span>
        <span>Increase Line Height</span>
        <span class="ada-toggle-status" aria-hidden="true">Off</span>
      </button>

    </div>

    <div class="ada-section-label" id="ada-sec-visual">Visual</div>
    <div class="ada-options" role="group" aria-labelledby="ada-sec-visual">

      <button class="ada-toggle-btn" id="ada-contrast" aria-pressed="false">
        <span class="ada-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 010 20z" fill="currentColor" stroke="none"/></svg>
        </span>
        <span>High Contrast</span>
        <span class="ada-toggle-status" aria-hidden="true">Off</span>
      </button>

      <button class="ada-toggle-btn" id="ada-invert" aria-pressed="false">
        <span class="ada-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 000 20z" fill="currentColor" stroke="none"/></svg>
        </span>
        <span>Dark / Invert Colors</span>
        <span class="ada-toggle-status" aria-hidden="true">Off</span>
      </button>

      <button class="ada-toggle-btn" id="ada-grayscale" aria-pressed="false">
        <span class="ada-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18" stroke-width="2"/><path d="M3 3h18v9H3z" fill="currentColor" stroke="none" opacity=".4"/></svg>
        </span>
        <span>Grayscale</span>
        <span class="ada-toggle-status" aria-hidden="true">Off</span>
      </button>

      <button class="ada-toggle-btn" id="ada-saturation" aria-pressed="false">
        <span class="ada-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="currentColor" opacity=".25"/></svg>
        </span>
        <span>Low Saturation</span>
        <span class="ada-toggle-status" aria-hidden="true">Off</span>
      </button>

    </div>

    <div class="ada-section-label" id="ada-sec-nav">Navigation</div>
    <div class="ada-options" role="group" aria-labelledby="ada-sec-nav">

      <button class="ada-toggle-btn" id="ada-links" aria-pressed="false">
        <span class="ada-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
        </span>
        <span>Highlight Links</span>
        <span class="ada-toggle-status" aria-hidden="true">Off</span>
      </button>

      <button class="ada-toggle-btn" id="ada-focus" aria-pressed="false">
        <span class="ada-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2.5"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
        </span>
        <span>Enhanced Focus Ring</span>
        <span class="ada-toggle-status" aria-hidden="true">Off</span>
      </button>

      <button class="ada-toggle-btn" id="ada-animations" aria-pressed="false">
        <span class="ada-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
        </span>
        <span>Pause Animations</span>
        <span class="ada-toggle-status" aria-hidden="true">Off</span>
      </button>

    </div>

    <button class="ada-reset-btn" id="ada-reset" aria-label="Reset all accessibility settings to default">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M3 12a9 9 0 109-9H3"/><polyline points="3 3 3 12 12 12"/></svg>
      Reset All Settings
    </button>

    <div class="ada-footer-note">
      <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">WCAG 2.1 AA</a> accessibility tools
    </div>
  </div>
</div>`;const navEl=document.getElementById('site-nav');if(navEl)navEl.innerHTML=NAV_HTML;const footEl=document.getElementById('site-footer');if(footEl)footEl.innerHTML=FOOTER_HTML;document.body.insertAdjacentHTML('beforeend',CONSENT_HTML);document.body.insertAdjacentHTML('beforeend',A11Y_HTML);const path=window.location.pathname.replace(/\/$/,'')||'/';document.querySelectorAll('.nav-link').forEach(link=>{const href=(link.getAttribute('href')||'').replace(/\/$/,'');const isHome=(href==='/'||href==='/index.html')&&path==='/';const isMatch=href!=='/'&&href!==''&&path.startsWith(href.replace('.html',''));if(isHome||isMatch)link.classList.add('active');});const toggle=document.getElementById('nav-toggle');const navMenu=document.getElementById('nav-menu');const overlay=document.getElementById('nav-overlay');const servItem=document.getElementById('nav-services');const servBtn=servItem?servItem.querySelector('.nav-link'):null;function openDrawer(){navMenu.classList.add('mobile-open');toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Close navigation menu');overlay.classList.add('active');document.body.style.overflow='hidden';}
function closeDrawer(){navMenu.classList.remove('mobile-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation menu');overlay.classList.remove('active');document.body.style.overflow='';if(servItem){servItem.classList.remove('open');if(servBtn)servBtn.setAttribute('aria-expanded','false');}}
if(toggle){toggle.addEventListener('click',()=>{navMenu.classList.contains('mobile-open')?closeDrawer():openDrawer();});}
if(overlay)overlay.addEventListener('click',closeDrawer);document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(navMenu&&navMenu.classList.contains('mobile-open')){closeDrawer();if(toggle)toggle.focus();}}});if(servBtn){servBtn.addEventListener('click',e=>{if(window.innerWidth>860)return;e.preventDefault();const isOpen=servItem.classList.toggle('open');servBtn.setAttribute('aria-expanded',String(isOpen));});}
document.querySelectorAll('.nav-menu a').forEach(a=>{a.addEventListener('click',()=>{if(window.innerWidth<=860)closeDrawer();});});window.addEventListener('resize',()=>{if(window.innerWidth>860)closeDrawer();});const banner=document.getElementById('consent-banner');if(banner&&!localStorage.getItem('mrrhino_consent')){banner.classList.add('visible');const firstBtn=banner.querySelector('button');if(firstBtn)setTimeout(()=>firstBtn.focus(),400);}
document.getElementById('consent-accept')?.addEventListener('click',()=>{localStorage.setItem('mrrhino_consent','accepted');banner.classList.remove('visible');});document.getElementById('consent-decline')?.addEventListener('click',()=>{localStorage.setItem('mrrhino_consent','declined');banner.classList.remove('visible');});const trigger=document.getElementById('ada-trigger');const panel=document.getElementById('ada-panel');const closeBtn=document.getElementById('ada-close');const resetBtn=document.getElementById('ada-reset');if(!trigger||!panel)return;const STORAGE_KEY='mrrhino_ada_v2';let state={fontSize:100,letterSpace:0,dyslexia:false,lineSpacing:false,contrast:false,invert:false,grayscale:false,saturation:false,links:false,focus:false,animations:false,};try{Object.assign(state,JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'));}catch(e){}
function loadDyslexiaFont(){if(document.getElementById('ada-dyslexia-style'))return;const st=document.createElement('style');st.id='ada-dyslexia-style';st.textContent=`body.ada-dyslexia, body.ada-dyslexia *{
      font-family: "Comic Sans MS","Comic Sans",cursive !important;
      word-spacing: 0.16em !important;
    }`;document.head.appendChild(st);}
function applyState(){const b=document.body;const html=document.documentElement;html.style.fontSize=state.fontSize===100?'':(state.fontSize/100)*16+'px';document.getElementById('ada-font-val').textContent=state.fontSize+'%';const spacingLabels=['Normal','Wide','Wider','Widest','Maximum'];const spacingVals=[0,0.05,0.1,0.15,0.2];const spStyle=document.getElementById('ada-spacing-style')||(()=>{const s=document.createElement('style');s.id='ada-spacing-style';document.head.appendChild(s);return s;})();spStyle.textContent=state.letterSpace>0?`body, body *{letter-spacing:${spacingVals[state.letterSpace]}em !important}`:'';document.getElementById('ada-space-val').textContent=spacingLabels[state.letterSpace];b.classList.toggle('ada-dyslexia',state.dyslexia);b.classList.toggle('ada-linespacing',state.lineSpacing);b.classList.toggle('ada-contrast',state.contrast);b.classList.toggle('ada-invert',state.invert);b.classList.toggle('ada-grayscale',state.grayscale);b.classList.toggle('ada-saturation',state.saturation);b.classList.toggle('ada-links',state.links);b.classList.toggle('ada-focus',state.focus);b.classList.toggle('ada-noanimation',state.animations);if(state.dyslexia)loadDyslexiaFont();const map={'ada-dyslexia':state.dyslexia,'ada-linespacing':state.lineSpacing,'ada-contrast':state.contrast,'ada-invert':state.invert,'ada-grayscale':state.grayscale,'ada-saturation':state.saturation,'ada-links':state.links,'ada-focus':state.focus,'ada-animations':state.animations,};Object.entries(map).forEach(([id,active])=>{const el=document.getElementById(id);if(!el)return;el.setAttribute('aria-pressed',String(active));el.classList.toggle('ada-on',active);const label=el.querySelector('.ada-toggle-status');if(label)label.textContent=active?'On':'Off';});document.getElementById('ada-font-dec').disabled=state.fontSize<=100;document.getElementById('ada-font-inc').disabled=state.fontSize>=150;document.getElementById('ada-space-dec').disabled=state.letterSpace<=0;document.getElementById('ada-space-inc').disabled=state.letterSpace>=4;localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function openPanel(){panel.hidden=false;trigger.setAttribute('aria-expanded','true');setTimeout(()=>{const first=panel.querySelector('button:not([disabled])');if(first)first.focus();},50);}
function closePanel(){panel.hidden=true;trigger.setAttribute('aria-expanded','false');trigger.focus();}
trigger.addEventListener('click',()=>{panel.hidden?openPanel():closePanel();});closeBtn.addEventListener('click',closePanel);panel.addEventListener('keydown',e=>{if(e.key==='Escape'){closePanel();return;}
if(e.key!=='Tab')return;const focusable=Array.from(panel.querySelectorAll('button:not([disabled]),a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')).filter(el=>!el.hidden&&el.offsetParent!==null);if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}});document.addEventListener('click',e=>{if(!panel.hidden&&!panel.contains(e.target)&&!trigger.contains(e.target)){closePanel();}});document.getElementById('ada-font-inc').addEventListener('click',()=>{if(state.fontSize<150){state.fontSize+=10;applyState();}});document.getElementById('ada-font-dec').addEventListener('click',()=>{if(state.fontSize>100){state.fontSize-=10;applyState();}});document.getElementById('ada-space-inc').addEventListener('click',()=>{if(state.letterSpace<4){state.letterSpace++;applyState();}});document.getElementById('ada-space-dec').addEventListener('click',()=>{if(state.letterSpace>0){state.letterSpace--;applyState();}});[['ada-dyslexia','dyslexia'],['ada-linespacing','lineSpacing'],['ada-contrast','contrast'],['ada-invert','invert'],['ada-grayscale','grayscale'],['ada-saturation','saturation'],['ada-links','links'],['ada-focus','focus'],['ada-animations','animations'],].forEach(([id,key])=>{document.getElementById(id)?.addEventListener('click',()=>{state[key]=!state[key];applyState();});});resetBtn.addEventListener('click',()=>{state={fontSize:100,letterSpace:0,dyslexia:false,lineSpacing:false,contrast:false,invert:false,grayscale:false,saturation:false,links:false,focus:false,animations:false};applyState();const ann=document.createElement('div');ann.setAttribute('role','status');ann.setAttribute('aria-live','polite');ann.className='sr-only';ann.textContent='All accessibility settings have been reset.';document.body.appendChild(ann);setTimeout(()=>ann.remove(),2000);});applyState();})();