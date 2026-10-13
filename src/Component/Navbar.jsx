import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';

const Navbar = () => {
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mobile and dropdown states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Timeout ref prevents the dropdown from closing too quickly
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '1-10',
    notes: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        fleetSize: '1-10',
        notes: '',
      });
    }, 2000);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header className="site-header">
        {/* Top Announcement Strip */}
        <div className="top-banner">
          <div className="top-banner-container">
            <div className="status-live">
              <span className="pulsing-dot"></span>
              <span>24x7 Active Monitoring</span>
              <span className="dot-divider">•</span>
              <span>Smart Fleet</span>
              <span className="dot-divider">•</span>
              <span>Safer Roads</span>
              <span className="dot-divider">•</span>
              <span>Total Control</span>
            </div>

            <div className="top-contact">
              {/* Keep this anchor because it opens the phone dialer */}
              <a href="tel:18001232632" className="contact-link">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                1800 123 2632
              </a>
              <span className="top-pill">24/7 Operations Desk</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="main-nav">
          <div className="nav-container">
            {/* Logo */}
            <div className="brand-logo">
              <div className="logo-icon">
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                  <polygon points="16,3 29,10.5 29,21.5 16,29 3,21.5 3,10.5" stroke="#00DFD6" strokeWidth="2.5" fill="rgba(0, 223, 214, 0.08)" />
                  <polygon points="16,8 24,12.5 24,19.5 16,24 8,19.5 8,12.5" stroke="#0084FF" strokeWidth="1.8" />
                  <circle cx="16" cy="16" r="3" fill="#00DFD6" />
                </svg>
              </div>
              <div className="logo-brand-text">
                <span className="brand-title">PICTOR</span>
                <span className="brand-tag">TELEMATICS</span>
              </div>
            </div>

            {/* Menu Links */}
            <div className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
              <Link to="/" className="nav-item active" onClick={closeMobileMenu}>
                Home
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="dropdown-container"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-item dropdown-btn ${activeDropdown === 'solutions' ? 'active-link' : ''}`}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')
                  }
                >
                  Solutions
                  <svg
                    className={`chevron ${activeDropdown === 'solutions' ? 'rotate' : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {activeDropdown === 'solutions' && (
                  <div
                    className="dropdown-panel"
                    onMouseEnter={() => handleMouseEnter('solutions')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to="/solution" className="dropdown-card" onClick={closeMobileMenu}>
                      <span className="card-title">GPS TRACKER </span>
                      <span className="card-desc">Govt. approved GPS tracking solution</span>
                    </Link>
                    {/* <Link to="#fuel" className="dropdown-card" onClick={closeMobileMenu}>
                      <span className="card-title">Fuel Theft Monitoring</span>
                      <span className="card-desc">Real-time fuel level &amp; drain alert sensors</span>
                    </Link> */}
                    <Link to="#dashcam" className="dropdown-card" onClick={closeMobileMenu}>
                      <span className="card-title">AI Video Telematics</span>
                      <span className="card-desc">DMS &amp; ADAS cabin intelligence</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div
                className="dropdown-container"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-item dropdown-btn ${activeDropdown === 'products' ? 'active-link' : ''}`}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'products' ? null : 'products')
                  }
                >
                  Products
                  <svg
                    className={`chevron ${activeDropdown === 'products' ? 'rotate' : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {activeDropdown === 'products' && (
                  <div
                    className="dropdown-panel"
                    onMouseEnter={() => handleMouseEnter('products')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to="/product" className="dropdown-card" onClick={closeMobileMenu}>
                      <span className="card-title">GPS Trackers</span>
                      <span className="card-desc">5 Devices Types</span>
                    </Link>
                    <Link to="#gps" className="dropdown-card" onClick={closeMobileMenu}>
                      <span className="card-title">Ai Dashcam</span>
                      <span className="card-desc">DMS &amp; ADAS Cameras</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link to="#technology" className="nav-item" onClick={closeMobileMenu}>
                Technology
              </Link>
              <Link to="/about" className="nav-item" onClick={closeMobileMenu}>
                About Us
              </Link>

              {/* Mobile Only CTA */}
              <button
                className="btn-demo mobile-only"
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Request Demo ➔
              </button>
            </div>

            {/* Right Action CTA */}
            <div className="nav-actions">
              <button className="btn-demo desktop-only" onClick={() => setIsModalOpen(true)}>
                <span>Request Demo</span>
                <span className="arrow-sym">›</span>
              </button>

              {/* Mobile Hamburger */}
              <button
                className="burger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={mobileMenuOpen}
              >
                <span className={`line ${mobileMenuOpen ? 'line1' : ''}`}></span>
                <span className={`line ${mobileMenuOpen ? 'line2' : ''}`}></span>
                <span className={`line ${mobileMenuOpen ? 'line3' : ''}`}></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="demo-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="demo-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-cross"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close demo form"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <div className="modal-top">
                  <span className="badge-glow">⚡ LIVE FLEET DEMO</span>
                  <h2>Request a Precision Demo</h2>
                  <p>
                    Experience fuel analytics, live tracking, and AI fleet dashcams firsthand.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="modal-form">
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Official Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="john@logistics.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="fleetSize">Fleet Size</label>
                      <select
                        id="fleetSize"
                        name="fleetSize"
                        value={formData.fleetSize}
                        onChange={handleInputChange}
                      >
                        <option value="1-10">1 - 10 Vehicles</option>
                        <option value="11-50">11 - 50 Commercial Vehicles</option>
                        <option value="51-200">51 - 200 Large Fleet</option>
                        <option value="200+">200+ Enterprise Units</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="company">Company Name</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder="e.g. Speedex Express Logistics"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="notes">Requirement / Notes</label>
                    <textarea
                      id="notes"
                      rows="3"
                      name="notes"
                      placeholder="AIS-140, Fuel Sensors, Video Telematics..."
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    <span>Confirm Demo Request</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </>
            ) : (
              <div className="success-box">
                <div className="tick-circle">✓</div>
                <h3>Demo Request Submitted!</h3>
                <p>Thanks for connecting! Our team will contact you soon. Thank you!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
