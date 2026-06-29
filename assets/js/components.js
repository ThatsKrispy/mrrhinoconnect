/* MrRhinoConnect — components.js
   Nav · Footer · Consent · ADA Widget
   ThatsKrispy Agency Build */
(function () {
  'use strict';

  const LOGO = '/assets/images/mrrhinoconnect-logo-v3.png';

  /* ── NAV ──────────────────────────────────────────────── */
  const NAV_HTML = `
<style id="mrrhino-nav-css">
.site-header{position:sticky;top:0;z-index:1000;height:68px;background:rgba(255,255,255,.97);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid rgba(3,22,36,.08);box-shadow:0 1px 12px rgba(3,22,36,.06)}
.nav-wrapper{display:flex;align-items:center;justify-content:space-between;height:100%;max-width:1200px;margin:0 auto;padding:0 1.5rem;gap:1rem;box-sizing:border-box}
.nav-logo{display:flex;align-items:center;flex-shrink:0;text-decoration:none}
.nav-logo img{height:42px;width:auto;display:block}
.nav-links{display:flex;align-items:center;gap:0;flex:1;justify-content:center}
.nav-item{position:relative}
.nav-link{display:flex;align-items:center;gap:.28rem;padding:.45rem .7rem;font-size:.75rem;font-weight:700;color:#031624;text-transform:uppercase;letter-spacing:.07em;white-space:nowrap;border-radius:6px;transition:color .15s;background:none;border:none;font-family:inherit;cursor:pointer;text-decoration:none}
.nav-link:hover,.nav-link.active{color:#C8688F}
.nav-link .chevron{width:11px;height:11px;flex-shrink:0;transition:transform .2s}
.nav-item:hover>.nav-link .chevron{transform:rotate(180deg)}
.nav-dropdown{position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(-6px);width:600px;background:#fff;border:1px solid rgba(3,22,36,.09);border-radius:14px;box-shadow:0 20px 60px rgba(3,22,36,.14);opacity:0;pointer-events:none;transition:opacity .18s,transform .18s;z-index:1100;display:grid;grid-template-columns:1fr 1fr 1fr;padding:1.25rem;gap:.25rem}
.nav-dropdown::before{content:'';position:absolute;top:-10px;left:0;right:0;height:10px}
.nav-item:hover>.nav-dropdown{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}
.dropdown-viewall{grid-column:1/-1}
.dropdown-group{padding:.4rem .6rem}
.dropdown-label{display:block;padding:0 0 .4rem;font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#C8688F;border-bottom:1px solid rgba(3,22,36,.07);margin-bottom:.4rem}
.nav-dropdown a{display:flex;align-items:center;gap:.35rem;padding:.32rem .2rem;font-size:.79rem;color:rgba(3,22,36,.72);border-radius:4px;transition:color .12s,padding-left .12s;text-decoration:none}
.nav-dropdown a:hover{color:#C8688F;padding-left:4px}
.nav-cta{display:flex;align-items:center;gap:.6rem;flex-shrink:0}
.nav-phone{display:flex;align-items:center;gap:.3rem;font-weight:700;font-size:.8rem;color:#031624;text-decoration:none;white-space:nowrap;transition:color .15s}
.nav-phone:hover{color:#C8688F}
.nav-phone svg{color:#C8688F;flex-shrink:0}
.nav-call-btn{display:flex;align-items:center;background:#C8688F;color:#fff;padding:.52rem 1.15rem;border-radius:50px;font-weight:700;font-size:.74rem;text-transform:uppercase;letter-spacing:.07em;text-decoration:none;white-space:nowrap;transition:background .15s,transform .15s}
.nav-call-btn:hover{background:#a84f74;transform:translateY(-1px)}
.nav-toggle{display:none;flex-direction:column;justify-content:center;gap:5px;padding:.45rem;border:none;background:none;cursor:pointer;width:40px;height:40px;border-radius:8px;flex-shrink:0}
.nav-toggle span{display:block;width:22px;height:2px;background:#031624;border-radius:2px;transition:transform .22s ease,opacity .22s ease;transform-origin:center}
.nav-toggle[aria-expanded="true"] span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.nav-toggle[aria-expanded="true"] span:nth-child(2){opacity:0;transform:scaleX(0)}
.nav-toggle[aria-expanded="true"] span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.nav-overlay{position:fixed;inset:0;background:rgba(3,22,36,.45);z-index:998;opacity:0;visibility:hidden;transition:opacity .28s,visibility 0s linear .28s}
.nav-overlay.active{opacity:1;visibility:visible;transition:opacity .28s,visibility 0s linear 0s}
.nav-drawer{position:fixed;top:0;right:0;bottom:0;width:min(300px,85vw);background:#fff;z-index:999;overflow-y:auto;overflow-x:hidden;padding-top:68px;box-shadow:-6px 0 40px rgba(3,22,36,.2);transform:translateX(100%);visibility:hidden;transition:transform .28s cubic-bezier(.4,0,.2,1),visibility 0s linear .28s}
.nav-drawer.open{transform:translateX(0);visibility:visible;transition:transform .28s cubic-bezier(.4,0,.2,1),visibility 0s linear 0s}
.drawer-item{border-bottom:1px solid rgba(3,22,36,.06)}
.drawer-item:last-child{border-bottom:none}
.drawer-link{display:flex;align-items:center;justify-content:space-between;padding:.95rem 1.25rem;font-size:.84rem;font-weight:700;color:#031624;text-transform:uppercase;letter-spacing:.07em;text-decoration:none;width:100%;box-sizing:border-box;background:none;border:none;font-family:inherit;cursor:pointer;transition:color .15s,background .15s}
.drawer-link:hover,.drawer-link.active{color:#C8688F;background:rgba(3,22,36,.03)}
.drawer-link .chevron{width:14px;height:14px;flex-shrink:0;transition:transform .22s}
.drawer-item.open>.drawer-link .chevron{transform:rotate(180deg)}
.drawer-sub{max-height:0;overflow:hidden;transition:max-height .3s ease;background:rgba(3,22,36,.025)}
.drawer-item.open>.drawer-sub{max-height:800px}
.drawer-sub-group{padding:.5rem 0;border-bottom:1px solid rgba(3,22,36,.05)}
.drawer-sub-group:last-child{border-bottom:none}
.drawer-sub-label{display:block;padding:.5rem 1.5rem .3rem;font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#C8688F}
.drawer-sub a{display:block;padding:.55rem 1.75rem;font-size:.83rem;color:rgba(3,22,36,.72);text-decoration:none;transition:color .12s,background .12s,padding-left .12s}
.drawer-sub a:hover{color:#C8688F;background:rgba(200,104,143,.06);padding-left:2rem}
.drawer-cta{padding:1.25rem;border-top:1px solid rgba(3,22,36,.07);display:flex;flex-direction:column;gap:.65rem}
.drawer-phone{display:flex;align-items:center;justify-content:center;gap:.4rem;font-weight:700;font-size:.88rem;color:#031624;text-decoration:none;padding:.5rem 0}
.drawer-phone svg{color:#C8688F}
.drawer-phone:hover{color:#C8688F}
.drawer-cta .nav-call-btn{justify-content:center;padding:.75rem;font-size:.82rem}
@media(max-width:860px){
  .nav-links{display:none!important}
  .nav-cta{display:none!important}
  .nav-toggle{display:flex!important}
  .site-header{position:fixed!important;top:0;left:0;right:0}
  body{padding-top:68px}
}
@media(min-width:861px){
  .nav-drawer{display:none!important}
  .nav-overlay{display:none!important}
  .nav-toggle{display:none!important}
}
</style>
<a class="skip-link" href="#main-content">Skip to main content</a>
<div class="nav-overlay" id="nav-overlay" aria-hidden="true"></div>
<nav class="nav-drawer" id="nav-drawer" aria-label="Mobile navigation" aria-hidden="true">
  <div class="drawer-item"><a href="/" class="drawer-link">Home</a></div>
  <div class="drawer-item"><a href="/about.html" class="drawer-link">About Us</a></div>
  <div class="drawer-item" id="drawer-realestate">
    <button class="drawer-link" aria-expanded="false" aria-controls="drawer-sub-re">
      Real Estate
      <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="drawer-sub" id="drawer-sub-re">
      <div class="drawer-sub-group" style="border-bottom:1px solid rgba(3,22,36,.08)">
        <a href="/real-estate.html" style="display:block;padding:.7rem 1.5rem;font-size:.83rem;font-weight:700;color:#031624;text-decoration:none">View All Real Estate Solutions →</a>
      </div>
      <div class="drawer-sub-group">
        <span class="drawer-sub-label">Networking &amp; Connectivity</span>
        <a href="/services/electrical-low-voltage-wiring.html">Low Voltage Wiring</a>
        <a href="/services/managed-wifi.html">Managed WiFi</a>
        <a href="/services/fiber-optic.html">Fiber Optic Circuit</a>
        <a href="/services/pots-line-replacements.html">POTS Line Replacements</a>
        <a href="/services/iptv.html">Internet Protocol TV (IPTV)</a>
        <a href="/services/electrical-cabling.html">Electrical Cabling</a>
        <a href="/services/das.html">Distributed Antenna System</a>
      </div>
      <div class="drawer-sub-group">
        <span class="drawer-sub-label">Surveillance &amp; Security</span>
        <a href="/services/cctv-security-cameras.html">CCTV &amp; Security Cameras</a>
        <a href="/services/mobile-security-trailer.html">Mobile Security Trailer</a>
        <a href="/services/iot-sensors-beacons.html">IoT Sensors and Beacons</a>
      </div>
      <div class="drawer-sub-group">
        <span class="drawer-sub-label">Smart Building Systems</span>
        <a href="/services/smart-buildings.html">Smart Buildings</a>
        <a href="/services/solar-panels.html">Solar Panels</a>
        <a href="/services/hvac.html">HVAC</a>
        <a href="/services/ev-charging-stations.html">EV Charging Stations</a>
        <a href="/services/digital-signage.html">Digital Signage</a>
        <a href="/services/led-lighting.html">LED Lighting</a>
        <a href="/services/air-quality-control.html">Air Quality Control</a>
      </div>
    </div>
  </div>
  <div class="drawer-item" id="drawer-education">
    <button class="drawer-link" aria-expanded="false" aria-controls="drawer-sub-edu">
      Education
      <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="drawer-sub" id="drawer-sub-edu">
      <div class="drawer-sub-group" style="border-bottom:1px solid rgba(3,22,36,.08)">
        <a href="/education.html" style="display:block;padding:.7rem 1.5rem;font-size:.83rem;font-weight:700;color:#031624;text-decoration:none">View All Education Solutions →</a>
      </div>
      <div class="drawer-sub-group">
        <span class="drawer-sub-label">Cybersecurity</span>
        <a href="/services/cybersecurity.html">Cybersecurity Solutions</a>
      </div>
      <div class="drawer-sub-group">
        <span class="drawer-sub-label">Business Continuity</span>
        <a href="/services/disaster-recovery.html">Disaster Recovery</a>
      </div>
    </div>
  </div>
  <div class="drawer-item"><a href="/services.html" class="drawer-link">Services</a></div>
  <div class="drawer-item"><a href="/faq.html" class="drawer-link">FAQ</a></div>
  <div class="drawer-item"><a href="/news.html" class="drawer-link">News</a></div>
  <div class="drawer-item"><a href="/contact.html" class="drawer-link">Contact</a></div>
  <div class="drawer-cta">
    <a href="tel:+13052491084" class="drawer-phone" aria-label="Call MrRhinoConnect">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
      305.249.1084
    </a>
    <a href="/contact.html" class="nav-call-btn">Get Started</a>
  </div>
</nav>
<header class="site-header" role="banner">
  <div class="nav-wrapper">
    <a href="/" class="nav-logo" aria-label="MrRhinoConnect homepage">
      <img src="${LOGO}" alt="MrRhinoConnect logo" width="160" height="42" loading="eager" fetchpriority="high" />
    </a>
    <div class="nav-links" role="navigation" aria-label="Main navigation">
      <div class="nav-item"><a href="/" class="nav-link">Home</a></div>
      <div class="nav-item"><a href="/about.html" class="nav-link">About Us</a></div>
      <div class="nav-item">
        <a href="/real-estate.html" class="nav-link" aria-haspopup="true">
          Real Estate
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="nav-dropdown" role="menu" aria-label="Real Estate submenu" style="width:640px">
          <div class="dropdown-group dropdown-viewall" style="border-bottom:1px solid rgba(3,22,36,.07);margin-bottom:.5rem;padding-bottom:.75rem">
            <a href="/real-estate.html" role="menuitem" style="font-weight:700;color:#031624;font-size:.82rem">View All Real Estate Solutions →</a>
          </div>
          <div class="dropdown-group">
            <span class="dropdown-label">Networking &amp; Connectivity</span>
            <a href="/services/electrical-low-voltage-wiring.html" role="menuitem">Low Voltage Wiring</a>
            <a href="/services/managed-wifi.html" role="menuitem">Managed WiFi</a>
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
      <div class="nav-item">
        <a href="/education.html" class="nav-link" aria-haspopup="true">
          Education
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="nav-dropdown" role="menu" aria-label="Education submenu" style="width:420px;grid-template-columns:1fr 1fr">
          <div class="dropdown-group dropdown-viewall" style="border-bottom:1px solid rgba(3,22,36,.07);margin-bottom:.5rem;padding-bottom:.75rem">
            <a href="/education.html" role="menuitem" style="font-weight:700;color:#031624;font-size:.82rem">View All Education Solutions →</a>
          </div>
          <div class="dropdown-group">
            <span class="dropdown-label">Cybersecurity</span>
            <a href="/services/cybersecurity.html" role="menuitem">Cybersecurity Solutions</a>
          </div>
          <div class="dropdown-group">
            <span class="dropdown-label">Business Continuity</span>
            <a href="/services/disaster-recovery.html" role="menuitem">Disaster Recovery</a>
          </div>
        </div>
      </div>
      <div class="nav-item"><a href="/services.html" class="nav-link">Services</a></div>
      <div class="nav-item"><a href="/faq.html" class="nav-link">FAQ</a></div>
      <div class="nav-item"><a href="/news.html" class="nav-link">News</a></div>
      <div class="nav-item"><a href="/contact.html" class="nav-link">Contact</a></div>
    </div>
    <div class="nav-cta">
      <a href="tel:+13052491084" class="nav-phone" aria-label="Call MrRhinoConnect at 305.249.1084">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        305.249.1084
      </a>
      <a href="/contact.html" class="nav-call-btn">Get Started</a>
    </div>
    <button class="nav-toggle" id="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-drawer">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>
</header>`;

  /* ── FOOTER ──────────────────────────────────────────── */
  const FOOTER_HTML = `
<div class="newsletter-strip" role="complementary" aria-label="Newsletter signup">
  <div class="newsletter-inner">
    <h3>Get the Latest News &amp; Updates</h3>
    <p>Stay informed on smart building tech, South Florida real estate trends, and MrRhinoConnect news.</p>
    <form class="newsletter-form" onsubmit="return false;" aria-label="Newsletter signup form">
      <label for="newsletter-email" class="sr-only">Email address for newsletter</label>
      <input type="email" id="newsletter-email" placeholder="Your Email Address" aria-label="Email address" required autocomplete="email" />
      <button type="submit" class="btn btn-primary">Subscribe</button>
    </form>
  </div>
</div>
<footer class="site-footer" role="contentinfo">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="/assets/images/mrrhinoconnect-logo-v3.png" alt="MrRhinoConnect" width="160" height="42" loading="lazy" decoding="async" />
      <p>Reach out to explore innovative solutions tailored for your needs and elevate your property's potential with cutting-edge technology.</p>
      <nav class="footer-socials" aria-label="Social media links">
        <a href="https://www.facebook.com/MrRhinoConnect" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in new tab)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://twitter.com/MrRhinoConnect1" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Twitter (opens in new tab)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
        </a>
        <a href="https://www.instagram.com/MrRhinoConnect/" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in new tab)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/mr-rhino-connect-5b058223a" class="footer-social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">
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
</footer>`;

  /* ── CONSENT BANNER ──────────────────────────────────── */
  const CONSENT_HTML = `
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
</div>`;

  /* ── ADA WIDGET ──────────────────────────────────────── */
  const A11Y_HTML = `
<div id="ada-widget-wrap">
  <button id="ada-trigger" aria-label="Open accessibility menu" aria-expanded="false" aria-controls="ada-panel" aria-haspopup="dialog" title="Accessibility Options">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" focusable="false"><circle cx="12" cy="5" r="2"/><path d="M12 7v5M8 9h8M9 22l1.5-5h3L15 22"/></svg>
    <span class="ada-trigger-label" aria-hidden="true">Accessibility</span>
  </button>
  <div id="ada-panel" role="dialog" aria-label="Accessibility settings" aria-modal="false" hidden>
    <div class="ada-panel-header">
      <span>Accessibility Options</span>
      <button id="ada-close" aria-label="Close accessibility menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="ada-section-label" id="ada-sec-content">Content</div>
    <div class="ada-options" role="group" aria-labelledby="ada-sec-content">
      <div class="ada-option-row">
        <span class="ada-option-label" id="ada-lbl-fontsize">Text Size</span>
        <div class="ada-stepper" role="group" aria-labelledby="ada-lbl-fontsize">
          <button class="ada-step-btn" id="ada-font-dec" aria-label="Decrease text size"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
          <span class="ada-step-val" id="ada-font-val" aria-live="polite" aria-atomic="true">100%</span>
          <button class="ada-step-btn" id="ada-font-inc" aria-label="Increase text size"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
        </div>
      </div>
      <div class="ada-option-row">
        <span class="ada-option-label" id="ada-lbl-spacing">Letter Spacing</span>
        <div class="ada-stepper" role="group" aria-labelledby="ada-lbl-spacing">
          <button class="ada-step-btn" id="ada-space-dec" aria-label="Decrease letter spacing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
          <span class="ada-step-val" id="ada-space-val" aria-live="polite" aria-atomic="true">Normal</span>
          <button class="ada-step-btn" id="ada-space-inc" aria-label="Increase letter spacing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
        </div>
      </div>
      <button class="ada-toggle-btn" id="ada-dyslexia" aria-pressed="false"><span class="ada-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg></span><span>Dyslexia Font</span><span class="ada-toggle-status" aria-hidden="true">Off</span></button>
      <button class="ada-toggle-btn" id="ada-linespacing" aria-pressed="false"><span class="ada-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></span><span>Increase Line Height</span><span class="ada-toggle-status" aria-hidden="true">Off</span></button>
    </div>
    <div class="ada-section-label" id="ada-sec-visual">Visual</div>
    <div class="ada-options" role="group" aria-labelledby="ada-sec-visual">
      <button class="ada-toggle-btn" id="ada-contrast" aria-pressed="false"><span class="ada-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 010 20z" fill="currentColor" stroke="none"/></svg></span><span>High Contrast</span><span class="ada-toggle-status" aria-hidden="true">Off</span></button>
      <button class="ada-toggle-btn" id="ada-invert" aria-pressed="false"><span class="ada-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 000 20z" fill="currentColor" stroke="none"/></svg></span><span>Dark / Invert Colors</span><span class="ada-toggle-status" aria-hidden="true">Off</span></button>
      <button class="ada-toggle-btn" id="ada-grayscale" aria-pressed="false"><span class="ada-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2.5"/><path d="M3 3h18v9H3z" fill="currentColor" stroke="none" opacity=".4"/></svg></span><span>Grayscale</span><span class="ada-toggle-status" aria-hidden="true">Off</span></button>
      <button class="ada-toggle-btn" id="ada-saturation" aria-pressed="false"><span class="ada-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="6" fill="currentColor" opacity=".25"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg></span><span>Low Saturation</span><span class="ada-toggle-status" aria-hidden="true">Off</span></button>
    </div>
    <div class="ada-section-label" id="ada-sec-nav">Navigation</div>
    <div class="ada-options" role="group" aria-labelledby="ada-sec-nav">
      <button class="ada-toggle-btn" id="ada-links" aria-pressed="false"><span class="ada-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg></span><span>Highlight Links</span><span class="ada-toggle-status" aria-hidden="true">Off</span></button>
      <button class="ada-toggle-btn" id="ada-focus" aria-pressed="false"><span class="ada-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2.5"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg></span><span>Enhanced Focus Ring</span><span class="ada-toggle-status" aria-hidden="true">Off</span></button>
      <button class="ada-toggle-btn" id="ada-animations" aria-pressed="false"><span class="ada-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></span><span>Pause Animations</span><span class="ada-toggle-status" aria-hidden="true">Off</span></button>
    </div>
    <button class="ada-reset-btn" id="ada-reset" aria-label="Reset all accessibility settings">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M3 12a9 9 0 109-9H3"/><polyline points="3 3 3 12 12 12"/></svg>
      Reset All Settings
    </button>
    <div class="ada-footer-note"><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">WCAG 2.1 AA</a> accessibility tools</div>
  </div>
</div>`;

  /* ── INJECT ──────────────────────────────────────────── */
  const navEl  = document.getElementById('site-nav');
  const footEl = document.getElementById('site-footer');
  if (navEl)  navEl.innerHTML  = NAV_HTML;
  if (footEl) footEl.innerHTML = FOOTER_HTML;
  document.body.insertAdjacentHTML('beforeend', CONSENT_HTML);
  document.body.insertAdjacentHTML('beforeend', A11Y_HTML);

  /* ── ACTIVE NAV ──────────────────────────────────────── */
  const curPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link, .drawer-link').forEach(link => {
    const href = (link.getAttribute('href') || '').replace(/\/$/, '');
    if (!href) return;
    const isHome  = (href === '/' || href === '/index.html') && curPath === '/';
    const isMatch = href !== '/' && curPath.startsWith(href.replace('.html', ''));
    if (isHome || isMatch) link.classList.add('active');
  });

  /* ── MOBILE DRAWER ───────────────────────────────────── */
  const toggle  = document.getElementById('nav-toggle');
  const drawer  = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');

  if (toggle && drawer) {
    function openDrawer() {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close navigation menu');
      document.body.style.overflow = 'hidden';
      setTimeout(() => { const f = drawer.querySelector('a, button'); if (f) f.focus(); }, 300);
    }
    function closeDrawer() {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      document.body.style.overflow = '';
    }
    toggle.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
    overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('open')) { closeDrawer(); toggle.focus(); } });
    ['drawer-realestate', 'drawer-education'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const btn = el.querySelector('.drawer-link');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const isOpen = el.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
      });
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
    window.addEventListener('resize', () => { if (window.innerWidth > 860) closeDrawer(); });
  }

  /* ── CONSENT ─────────────────────────────────────────── */
  const banner = document.getElementById('consent-banner');
  if (banner && !localStorage.getItem('mrrhino_consent')) {
    banner.classList.add('visible');
    const fb = banner.querySelector('button');
    if (fb) setTimeout(() => fb.focus(), 400);
  }
  document.getElementById('consent-accept')?.addEventListener('click', () => {
    localStorage.setItem('mrrhino_consent', 'accepted');
    banner.classList.remove('visible');
  });
  document.getElementById('consent-decline')?.addEventListener('click', () => {
    localStorage.setItem('mrrhino_consent', 'declined');
    banner.classList.remove('visible');
  });

  /* ── ADA WIDGET ──────────────────────────────────────── */
  const trigger  = document.getElementById('ada-trigger');
  const panel    = document.getElementById('ada-panel');
  const closeBtn = document.getElementById('ada-close');
  const resetBtn = document.getElementById('ada-reset');
  if (!trigger || !panel) return;

  const STORAGE_KEY = 'mrrhino_ada_v2';
  let state = { fontSize:100, letterSpace:0, dyslexia:false, lineSpacing:false, contrast:false, invert:false, grayscale:false, saturation:false, links:false, focus:false, animations:false };
  try { Object.assign(state, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); } catch(e) {}

  function loadDyslexiaFont() {
    if (document.getElementById('ada-dyslexia-style')) return;
    const st = document.createElement('style');
    st.id = 'ada-dyslexia-style';
    st.textContent = 'body.ada-dyslexia,body.ada-dyslexia *{font-family:"Comic Sans MS","Comic Sans",cursive!important;word-spacing:.16em!important}';
    document.head.appendChild(st);
  }

  function applyState() {
    const b = document.body;
    document.documentElement.style.fontSize = state.fontSize === 100 ? '' : (state.fontSize / 100 * 16) + 'px';
    document.getElementById('ada-font-val').textContent = state.fontSize + '%';
    const spacingLabels = ['Normal','Wide','Wider','Widest','Maximum'];
    const spacingVals   = [0, 0.05, 0.1, 0.15, 0.2];
    let spStyle = document.getElementById('ada-spacing-style');
    if (!spStyle) { spStyle = document.createElement('style'); spStyle.id = 'ada-spacing-style'; document.head.appendChild(spStyle); }
    spStyle.textContent = state.letterSpace > 0 ? `body,body *{letter-spacing:${spacingVals[state.letterSpace]}em!important}` : '';
    document.getElementById('ada-space-val').textContent = spacingLabels[state.letterSpace];
    b.classList.toggle('ada-dyslexia',    state.dyslexia);
    b.classList.toggle('ada-linespacing', state.lineSpacing);
    b.classList.toggle('ada-contrast',    state.contrast);
    b.classList.toggle('ada-invert',      state.invert);
    b.classList.toggle('ada-grayscale',   state.grayscale);
    b.classList.toggle('ada-saturation',  state.saturation);
    b.classList.toggle('ada-links',       state.links);
    b.classList.toggle('ada-focus',       state.focus);
    b.classList.toggle('ada-noanimation', state.animations);
    if (state.dyslexia) loadDyslexiaFont();
    [['ada-dyslexia','dyslexia'],['ada-linespacing','lineSpacing'],['ada-contrast','contrast'],['ada-invert','invert'],['ada-grayscale','grayscale'],['ada-saturation','saturation'],['ada-links','links'],['ada-focus','focus'],['ada-animations','animations']].forEach(([id, key]) => {
      const el = document.getElementById(id); if (!el) return;
      el.setAttribute('aria-pressed', String(state[key]));
      el.classList.toggle('ada-on', state[key]);
      const lbl = el.querySelector('.ada-toggle-status'); if (lbl) lbl.textContent = state[key] ? 'On' : 'Off';
    });
    document.getElementById('ada-font-dec').disabled = state.fontSize <= 100;
    document.getElementById('ada-font-inc').disabled = state.fontSize >= 150;
    document.getElementById('ada-space-dec').disabled = state.letterSpace <= 0;
    document.getElementById('ada-space-inc').disabled = state.letterSpace >= 4;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function openPanel() {
    panel.hidden = false; trigger.setAttribute('aria-expanded','true');
    setTimeout(() => { const f = panel.querySelector('button:not([disabled])'); if (f) f.focus(); }, 50);
  }
  function closePanel() { panel.hidden = true; trigger.setAttribute('aria-expanded','false'); trigger.focus(); }

  trigger.addEventListener('click', () => panel.hidden ? openPanel() : closePanel());
  closeBtn.addEventListener('click', closePanel);
  panel.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closePanel(); return; }
    if (e.key !== 'Tab') return;
    const focusable = Array.from(panel.querySelectorAll('button:not([disabled]),a[href]')).filter(el => el.offsetParent !== null);
    if (!focusable.length) return;
    if (e.shiftKey && document.activeElement === focusable[0]) { e.preventDefault(); focusable[focusable.length-1].focus(); }
    else if (!e.shiftKey && document.activeElement === focusable[focusable.length-1]) { e.preventDefault(); focusable[0].focus(); }
  });
  document.addEventListener('click', e => { if (!panel.hidden && !panel.contains(e.target) && !trigger.contains(e.target)) closePanel(); });
  document.getElementById('ada-font-inc').addEventListener('click', () => { if (state.fontSize < 150) { state.fontSize += 10; applyState(); } });
  document.getElementById('ada-font-dec').addEventListener('click', () => { if (state.fontSize > 100) { state.fontSize -= 10; applyState(); } });
  document.getElementById('ada-space-inc').addEventListener('click', () => { if (state.letterSpace < 4) { state.letterSpace++; applyState(); } });
  document.getElementById('ada-space-dec').addEventListener('click', () => { if (state.letterSpace > 0) { state.letterSpace--; applyState(); } });
  [['ada-dyslexia','dyslexia'],['ada-linespacing','lineSpacing'],['ada-contrast','contrast'],['ada-invert','invert'],['ada-grayscale','grayscale'],['ada-saturation','saturation'],['ada-links','links'],['ada-focus','focus'],['ada-animations','animations']].forEach(([id, key]) => {
    document.getElementById(id)?.addEventListener('click', () => { state[key] = !state[key]; applyState(); });
  });
  resetBtn.addEventListener('click', () => {
    state = { fontSize:100, letterSpace:0, dyslexia:false, lineSpacing:false, contrast:false, invert:false, grayscale:false, saturation:false, links:false, focus:false, animations:false };
    applyState();
    const ann = document.createElement('div'); ann.setAttribute('role','status'); ann.setAttribute('aria-live','polite'); ann.className = 'sr-only'; ann.textContent = 'All accessibility settings have been reset.';
    document.body.appendChild(ann); setTimeout(() => ann.remove(), 2000);
  });
  applyState();

})();
