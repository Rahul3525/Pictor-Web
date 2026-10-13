import React, { useState } from 'react';
import '../CSS/Footer.css'

const Footer = ({ onOpenDemo }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      {/* 1. Sleek Top Banner (Clean & High-Tech) */}
      <div className="footer-top-strip">
        <div className="footer-wrapper top-strip-flex">
          <div className="telemetry-live-status">
            <span className="live-core-dot"></span>
            <span className="live-status-title">PICTOR CLOUD TELEMETRY:</span>
            <span className="live-status-value">VAHAN &amp; CDAC GATEWAY 100% OPERATIONAL</span>
          </div>
          <div className="top-strip-actions">
            <a href="tel:18001232632" className="toll-free-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>1800 123 2632 (24x7 Fleet Support)</span>
            </a>
            <div className="mobile-apps-group">
              <a href="#playstore" className="store-badge" title="Android Fleet App">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 1.8l11.5 11.5-11.5 11.5c-.3-.2-.6-.6-.6-1.1V2.9c0-.5.3-.9.6-1.1zm12.9 12.9l2.8-2.8-14-8 11.2 10.8zm2.8-2.8c.4.3.7.8.7 1.3s-.3 1-.7 1.3l-2.1 1.2-2.8-2.8 4.9-1zm-4.9 1L3.2 24.7l14-8-2.9-2.9z"/>
                </svg>
                <span>Android</span>
              </a>
              <a href="#appstore" className="store-badge" title="iOS Fleet App">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.7 19.5c-.8 1.2-1.7 2.4-3 2.5-1.4.1-1.8-.8-3.3-.8-1.5 0-2 .8-3.3.8-1.3-.1-2.3-1.3-3.1-2.5-1.7-2.4-3-6.9-1.2-10 1-.8 2.2-1.4 3.4-1.4 1.4 0 2.2.8 3.2.8 1 0 1.6-.8 3.1-.8 1.2 0 2.3.5 3.1 1.3-2.6 1.5-2.2 5.1.5 6.2-.6 1.5-1.3 2.8-2.4 3.9zm-4.2-13.6c.6-.8 1.1-1.9.9-3-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.9 1.1.1 2-.6 2.6-1.3z"/>
                </svg>
                <span>iOS</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid */}
      <div className="footer-main-area">
        <div className="footer-wrapper">
          <div className="footer-columns">
            {/* Brand Column */}
            <div className="footer-col col-brand">
              <div className="brand-header">
                <div className="brand-logo-hex">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <polygon points="16,3 29,10.5 29,21.5 16,29 3,21.5 3,10.5" stroke="#00F0FF" strokeWidth="2.5" fill="rgba(0, 240, 255, 0.12)"/>
                    <polygon points="16,8 24,12.5 24,19.5 16,24 8,19.5 8,12.5" stroke="#34FF8D" strokeWidth="1.8"/>
                    <circle cx="16" cy="16" r="3" fill="#00F0FF"/>
                  </svg>
                </div>
                <div className="brand-title-wrap">
                  <span className="brand-title-bold">PICTOR</span>
                  <span className="brand-title-sub">TELEMATICS</span>
                </div>
              </div>

              <p className="brand-summary">
                Next-generation IoT fleet telemetry &amp; predictive AI cockpit. Engineered for AIS-140 compliance, fuel theft eradication, and active driver vision intelligence.
              </p>

              {/* Contact Info with Clean SVGs */}
              <div className="brand-contacts">
                <div className="contact-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>B11, Sector 04, Noida, NCR, India</span>
                </div>
                <div className="contact-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34FF8D" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:support@pictortelematics.com">support@pictortelematics.com</a>
                </div>
                <div className="contact-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a href="tel:+911204567890">+91 (120) 456-7890 (Direct Desk)</a>
                </div>
              </div>

              {/* Social Media Badges */}
              <div className="social-links-row">
                <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
                <a href="#twitter" className="social-icon" aria-label="Twitter">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#youtube" className="social-icon" aria-label="YouTube">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#github" className="social-icon" aria-label="GitHub">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Hardware Products */}
            <div className="footer-col">
              <h4 className="col-heading text-cyan">
                <span className="dot-cyan"></span> Hardware &amp; Sensors
              </h4>
              <ul className="footer-nav">
                <li><a href="#ais140">AIS-140 GPS Trackers (4G)</a></li>
                <li><a href="#fuel-sensor">Ultrasonic Fuel Probe</a></li>
                <li><a href="#dashcam">T98 Dual AI Dashcam (ADAS/DMS)</a></li>
                <li><a href="#obd">OBD-II CAN-Bus Plug &amp; Play</a></li>
                <li><a href="#ble">BLE Wireless Temp Probes</a></li>
                <li><a href="#elock">Smart GPS Cargo E-Lock</a></li>
                <li><a href="#sos">SOS Panic Alarm Units</a></li>
                <li><a href="#relay">Engine Immobilizer Relay</a></li>
              </ul>
            </div>

            {/* Column 3: Industry Solutions */}
            <div className="footer-col">
              <h4 className="col-heading text-secondary">
                <span className="dot-green"></span> Fleet Solutions
              </h4>
              <ul className="footer-nav">
                <li><a href="#freight">Heavy Freight &amp; Long Haul</a></li>
                <li><a href="#cold-chain">Cold Chain &amp; Pharma Reefers</a></li>
                <li><a href="#mining">Mining &amp; Off-Highway Equipment</a></li>
                <li><a href="#school">School Bus Safety &amp; RFID</a></li>
                <li><a href="#passenger">Passenger Cabs &amp; Buses</a></li>
                <li><a href="#ev-fleet">EV Battery &amp; Range Analytics</a></li>
                <li><a href="#ready-mix">RMC Ready-Mix Concrete</a></li>
                <li><a href="#waste">Municipal Waste Logistics</a></li>
              </ul>
            </div>

            {/* Column 4: Cloud & Developers */}
            <div className="footer-col">
              <h4 className="col-heading text-cyan">
                <span className="dot-cyan"></span> Cloud &amp; APIs
              </h4>
              <ul className="footer-nav">
                <li><a href="#telemetry-api">REST &amp; WebSockets API</a></li>
                <li><a href="#mqtt">MQTT High-Speed Stream</a></li>
                <li><a href="#can-decoder">J1939 CAN-Bus Decoders</a></li>
                <li><a href="#vahan">VAHAN Portal Integration</a></li>
                <li><a href="#status">Live System Status (99.99%)</a></li>
                <li><a href="#whitepapers">Fuel Savings Whitepapers</a></li>
                <li><a href="#sdk">Mobile Fleet SDKs</a></li>
                <li><a href="#case-studies">Enterprise Case Studies</a></li>
              </ul>
            </div>

            {/* Column 5: Interactive Card (Trial & Dispatch) */}
            <div className="footer-col col-cta">
              <div className="enterprise-trial-card">
                <span className="card-mini-tag">ENTERPRISE TRIAL</span>
                <h5 className="trial-title">Deploying 20+ Vehicles?</h5>
                <p className="trial-desc">Get free on-site hardware trial on your trucks with field engineers.</p>
                <button 
                  className="trial-cta-btn"
                  onClick={onOpenDemo || (() => {
                    const navBtn = document.querySelector('.btn-demo');
                    if (navBtn) navBtn.click();
                  })}
                >
                  <span>Book Hardware Trial</span>
                  <span>➔</span>
                </button>
              </div>

              {/* Minimal Newsletter */}
              <div className="newsletter-box">
                <span className="newsletter-label">Weekly Telemetry Briefing</span>
                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="newsletter-input-group">
                    <input 
                      type="email" 
                      required 
                      placeholder="corporate@fleet.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" aria-label="Subscribe">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </form>
                ) : (
                  <div className="sub-success">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34FF8D" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Subscribed successfully!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Certifications Badge Strip */}
      <div className="footer-cert-bar">
        <div className="footer-wrapper cert-flex">
          <span className="cert-lead">CERTIFICATIONS &amp; AUDITS:</span>
          <div className="cert-tags">
            <span className="cert-item">🇮🇳 AIS-140 (MoRTH Approved)</span>
            <span className="cert-item">🏛️ CDAC VAHAN Backend Certified</span>
            <span className="cert-item">🛡️ ISO 27001 Data Security</span>
            <span className="cert-item">⚡ ARAI &amp; ICAT Tested</span>
            <span className="cert-item">⚙️ Make In India IoT</span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Legal & Back to Top */}
      <div className="footer-bottom-bar">
        <div className="footer-wrapper bottom-flex">
          <div className="copyright-text">
            © {new Date().getFullYear()} Pictor Telematics Pvt. Ltd. All rights reserved.
          </div>

          <div className="legal-links-list">
            <a href="#privacy">Privacy Policy</a>
            <span className="legal-dot">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="legal-dot">•</span>
            <a href="#security">Information Security</a>
            <span className="legal-dot">•</span>
            <a href="#sla">Cloud SLA</a>
          </div>

          <button className="top-scroll-button" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;