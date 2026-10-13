import React from 'react';
import { Link } from 'react-router-dom'; // Agar react-router use kar rahe hain
import '../CSS/Solution.css'

const Solution = () => {
  return (
    <div className="gps-solution-clean-page">
      <div className="gps-container">
        
        {/* Normal & Clean Header (Ab bada nahi dikhega) */}
        <div className="clean-page-header">
          <span className="clean-badge">GPS TRACKING HARDWARE</span>
          <h1 className="clean-title">Commercial Fleet GPS &amp; Asset Lock Solutions</h1>
          <p className="clean-subtitle">
            Apne requirement ke mutabik wired trackers ya digital smart E-locks select karein.
          </p>
        </div>

        {/* 2 Main Product Cards / Carts */}
        <div className="compact-cards-grid">
          
          {/* ================= CARD 1: WIRED GPS TRACKER ================= */}
          <div className="product-cart">
            <div className="cart-header">
              <span className="cart-category-tag tag-cyan">HARDWIRED SERIES</span>
              <div className="cart-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
            </div>

            <h3 className="cart-title">Wired GPS Tracker</h3>
            <p className="cart-desc">
              Heavy trucks, commercial vehicles aur fleet security ke liye hardwired 4G trackers with engine immobilizer and sensor support.
            </p>

            {/* Pins Category Selection with Individual Links */}
            <div className="pins-section">
              <span className="section-label">AVAILABLE PIN CONFIGURATIONS:</span>
              <div className="pins-badges-grid">
                {/* 1. 4 Pin Link */}
                <Link to="/wired-gps/4-pin" className="pin-link-chip">
                  <span>4 Pin</span>
                  <small>Basic + Cutoff</small>
                </Link>

                {/* 2. 6 Pin Link */}
                <Link to="/wired-gps/6-pin" className="pin-link-chip">
                  <span>6 Pin</span>
                  <small>+ SOS / Panic</small>
                </Link>

                {/* 3. 8 Pin Link */}
                <Link to="/wired-gps/8-pin" className="pin-link-chip">
                  <span>8 Pin</span>
                  <small>+ Fuel RS232</small>
                </Link>

                {/* 4. 9 Pin Link */}
                <Link to="/wired-gps/9-pin" className="pin-link-chip">
                  <span>9 Pin</span>
                  <small>+ Dual Analog</small>
                </Link>

                {/* 5. 10 Pin Link */}
                <Link to="/wired-gps/10-pin" className="pin-link-chip">
                  <span>10 Pin</span>
                  <small>+ RFID / Temp</small>
                </Link>

                {/* 6. 17 Pin Link */}
                <Link to="/wired-gps/17-pin" className="pin-link-chip highlight-pin">
                  <span>17 Pin</span>
                  <small>Full CAN / J1939</small>
                </Link>
              </div>
            </div>

            {/* Card Footer: Read More Link */}
            <div className="cart-footer">
              <Link to="/wired-gps-tracker" className="btn-read-more">
                <span>Read More Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

             <div className="product-cart">
            <div className="cart-header">
              <span className="cart-category-tag tag-cyan">HARDWIRED SERIES</span>
              <div className="cart-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
            </div>

            <h3 className="cart-title">Wired GPS Tracker</h3>
            <p className="cart-desc">
              Heavy trucks, commercial vehicles aur fleet security ke liye hardwired 4G trackers with engine immobilizer and sensor support.
            </p>

            {/* Pins Category Selection with Individual Links */}
            <div className="pins-section">
              <span className="section-label">AVAILABLE PIN CONFIGURATIONS:</span>
              <div className="pins-badges-grid">
                {/* 1. 4 Pin Link */}
                <Link to="/wired-gps/4-pin" className="pin-link-chip">
                  <span>4 Pin</span>
                  <small>Basic + Cutoff</small>
                </Link>

                {/* 2. 6 Pin Link */}
                <Link to="/wired-gps/6-pin" className="pin-link-chip">
                  <span>6 Pin</span>
                  <small>+ SOS / Panic</small>
                </Link>

                {/* 3. 8 Pin Link */}
                <Link to="/wired-gps/8-pin" className="pin-link-chip">
                  <span>8 Pin</span>
                  <small>+ Fuel RS232</small>
                </Link>

                {/* 4. 9 Pin Link */}
                <Link to="/wired-gps/9-pin" className="pin-link-chip">
                  <span>9 Pin</span>
                  <small>+ Dual Analog</small>
                </Link>

                {/* 5. 10 Pin Link */}
                <Link to="/wired-gps/10-pin" className="pin-link-chip">
                  <span>10 Pin</span>
                  <small>+ RFID / Temp</small>
                </Link>

                {/* 6. 17 Pin Link */}
                <Link to="/wired-gps/17-pin" className="pin-link-chip highlight-pin">
                  <span>17 Pin</span>
                  <small>Full CAN / J1939</small>
                </Link>
              </div>
            </div>

            {/* Card Footer: Read More Link */}
            <div className="cart-footer">
              <Link to="/wired-gps-tracker" className="btn-read-more">
                <span>Read More Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ================= CARD 2: SMART GPS E-LOCK ================= */}
          <div className="product-cart">
            <div className="cart-header">
              <span className="cart-category-tag tag-green">CARGO SECURITY</span>
              <div className="cart-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34ff8d" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            </div>

            <h3 className="cart-title">Smart GPS E-Lock</h3>
            <p className="cart-desc">
              Container shipping, oil tankers aur high-value cargo ke liye electronic padlocks jo RFID ya remote command se geofence me unlock hote hain.
            </p>

            {/* E-Lock Models Selection with Links */}
            <div className="pins-section">
              <span className="section-label">SELECT E-LOCK MODEL:</span>
              <div className="elock-models-grid">
                {/* 1. PL610 Link */}
                <Link to="/elock/pl610" className="elock-model-card">
                  <div className="model-top">
                    <span className="model-name">PL610</span>
                    <span className="model-pill">Standard 4G</span>
                  </div>
                  <p className="model-meta">Smart Container Lock • RFID Unlock • IP67 Waterproof</p>
                </Link>

                {/* 2. PL620 Link */}
                <Link to="/elock/pl620" className="elock-model-card highlight-elock">
                  <div className="model-top">
                    <span className="model-name">PL620</span>
                    <span className="model-pill pill-adv">Heavy-Duty Pro</span>
                  </div>
                  <p className="model-meta">Dual Latch • 15,000mAh Battery • BLE Sensor Mesh</p>
                </Link>
              </div>
            </div>

            {/* Card Footer: Read More Link */}
            <div className="cart-footer">
              <Link to="/gps-elock" className="btn-read-more">
                <span>Read More Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Solution;