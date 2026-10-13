import React, { useState } from 'react';
import '../CSS/Home.css';

const Home = ({ onRequestDemo }) => {
  // ROI Calculator State
  const [fleetSize, setFleetSize] = useState(25);
  const fuelSavingsPerTruck = 4200; // Average monthly diesel pilferage saved in INR
  const totalMonthlySaving = (fleetSize * fuelSavingsPerTruck).toLocaleString('en-IN');
  const totalYearlySaving = (fleetSize * fuelSavingsPerTruck * 12).toLocaleString('en-IN');

  // Active Tab for Solutions
  const [activeTab, setActiveTab] = useState('logistics');

  const industryData = {
    logistics: {
      badge: "LOGISTICS & LONG HAUL",
      title: "Eliminate Fuel Theft & Route Delays Across National Corridors",
      description: "Get pinpoint AIS-140 compliance, instant fuel drainage alerts at highway stops, and automated Electronic Proof of Delivery (e-POD) for commercial trucks.",
      points: ["Ultrasonic Fuel Level Sensor (99.5% accuracy)", "Fastag & Toll Route Optimization", "Harsh braking & night driving speed governor"]
    },
    coldchain: {
      badge: "PHARMA & REEFER CARGO",
      title: "Zero Spoilage with Precision Wireless Temperature Sensors",
      description: "Continuous IoT multi-point thermal monitoring inside reefers. Instant SMS and buzzer alerts if temperatures cross specified thresholds.",
      points: ["BLE Wireless Temperature & Humidity Loggers", "Door-open sensor logging to prevent thermal leak", "Automated compliance audit reports for pharma"]
    },
    mining: {
      badge: "HEAVY MINING & CONSTRUCTION",
      title: "Engine Hour Telematics & Heavy Asset Geo-Security",
      description: "Track excavators, tippers, and loaders on private site roads without standard cellular network through dual-band 4G/satellite relays.",
      points: ["PTO & Engine Working Hour analytics", "Tamper-proof IP67 rugged casing", "Virtual perimeter & unauthorized movement alarms"]
    },
    passenger: {
      badge: "PASSENGER & SCHOOL BUSES",
      title: "Active Cabin Safety with AI Video DMS & ADAS",
      description: "Protect passengers and students with real-time SOS panic buttons, live in-cabin CCTV streaming, and driver drowsiness alerts.",
      points: ["Dual-lens AI Dashcam detecting phone usage & yawns", "Parent-facing real-time tracking app integration", "RTO approved AIS-140 panic alarms with VAHAN sync"]
    }
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-glow-bg"></div>
        <div className="hero-container">
          {/* Left Text Column */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>NEXT-GEN IOT TELEMATICS & PREDICTIVE FLEET AI</span>
            </div>

            <h1 className="hero-headline">
              Pictor Telematics. <br />
              <span className="text-gradient">Predictive Fleet AI.</span>
            </h1>

            <p className="hero-subtext">
              Transform raw vehicle sensors into actionable profitability. Stop diesel theft instantly, automate AIS-140 compliance, and protect drivers with real-time in-cabin video intelligence.
            </p>

            <div className="hero-actions">
              <button className="btn-primary-glow" onClick={onRequestDemo}>
                <span>Request Fleet Demo</span>
                <span className="btn-arrow">→</span>
              </button>
              <a href="#solutions" className="btn-secondary-outline">
                <span>Explore Tech Stack</span>
              </a>
            </div>

            {/* Live Trust Metrics */}
            <div className="hero-metrics-grid">
              <div className="metric-box">
                <span className="metric-num">7,000+</span>
                <span className="metric-label">Connected Fleets</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-num">1,00,000+</span>
                <span className="metric-label">Active Vehicles</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-num">99.98%</span>
                <span className="metric-label">Platform Uptime</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-num">&lt; 1.2s</span>
                <span className="metric-label">GPS Ping Latency</span>
              </div>
            </div>
          </div>

          {/* Right Live Telemetry Interactive Card */}
          <div className="hero-telemetry-card">
            <div className="card-top-header">
              <div className="vehicle-id-tag">
                <span className="status-indicator"></span>
                <div>
                  <h4 className="v-num">DL-01-AX-9941</h4>
                  <span className="v-type">Tata Prima 5530.S (Heavy Haul)</span>
                </div>
              </div>
              <span className="badge-5g">5G IOT ONLINE</span>
            </div>

            {/* Simulated Live Route Graphic */}
            <div className="live-route-box">
              <div className="route-info">
                <span className="route-label">ACTIVE ROUTE</span>
                <span className="route-cities">Delhi NCR → Mumbai Expressway</span>
              </div>
              <div className="route-visual">
                <div className="track-line">
                  <div className="truck-pulse-marker"></div>
                </div>
              </div>
              <div className="route-stats">
                <span>ETA: <strong>04h 20m</strong></span>
                <span>Distance: <strong>1,180 km</strong></span>
              </div>
            </div>

            {/* Telemetry Sensor Gauges */}
            <div className="telemetry-grid">
              <div className="gauge-card">
                <div className="gauge-icon">⛽</div>
                <div className="gauge-details">
                  <span className="g-title">FUEL LEVEL</span>
                  <span className="g-val text-cyan">84% (298 L)</span>
                  <span className="g-status text-green">● No Drain Detected</span>
                </div>
              </div>

              <div className="gauge-card">
                <div className="gauge-icon">⚡</div>
                <div className="gauge-details">
                  <span className="g-title">LIVE SPEED</span>
                  <span className="g-val">76 km/h</span>
                  <span className="g-status">Cruise / Normal Limit</span>
                </div>
              </div>

              <div className="gauge-card">
                <div className="gauge-icon">🌡️</div>
                <div className="gauge-details">
                  <span className="g-title">ENGINE TEMP</span>
                  <span className="g-val">86°C</span>
                  <span className="g-status text-green">Optimal Range</span>
                </div>
              </div>

              <div className="gauge-card">
                <div className="gauge-icon">🛡️</div>
                <div className="gauge-details">
                  <span className="g-title">DRIVER SAFETY</span>
                  <span className="g-val text-green">98 / 100</span>
                  <span className="g-status">Zero Distraction Alerts</span>
                </div>
              </div>
            </div>

            <div className="card-bottom-pill">
              <span>● AIS-140 CDAC Gateway Sync: <strong>Secured & Active</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (GRID) */}
      <section id="solutions" className="section-padding capabilities-section">
        <div className="section-header text-center">
          <span className="section-badge">FULL-STACK TELEMATICS</span>
          <h2 className="section-title">Engineered to Protect Every Kilometre</h2>
          <p className="section-subtitle">
            From raw hardware telemetry to AI-driven fleet dispatching, Pictor consolidates your entire fleet operation into one unified screen.
          </p>
        </div>

        <div className="capabilities-grid">
          <div className="feature-card">
            <div className="feat-icon-box">⛽</div>
            <h3>Ultrasonic Fuel Theft Shield</h3>
            <p>Catch diesel pilferage, sudden tank drops, and fraudulent fuel bills with 99.5% sensor accuracy. Instant mobile alerts on drainage.</p>
            <span className="card-link">Learn Fuel Tech →</span>
          </div>

          <div className="feature-card">
            <div className="feat-icon-box">📹</div>
            <h3>Dual AI Dashcams (ADAS + DMS)</h3>
            <p>Front-road collision warning plus in-cabin driver monitoring. Alerts for mobile phone distraction, eye closure drowsiness, and harsh braking.</p>
            <span className="card-link">Learn Video AI →</span>
          </div>

          <div className="feature-card">
            <div className="feat-icon-box">🇮🇳</div>
            <h3>AIS-140 Certified Tracking</h3>
            <p>Government-approved telematics for commercial and public transit. Integrated with VAHAN portal, emergency SOS button, and dual-SIM redundancy.</p>
            <span className="card-link">View Certifications →</span>
          </div>

          <div className="feature-card">
            <div className="feat-icon-box">🔋</div>
            <h3>EV Telematics & Cloud BMS</h3>
            <p>Live State of Charge (SOC%), State of Health (SOH), cell temperature variation, and real-time charging station analytics for electric fleets.</p>
            <span className="card-link">Explore EV Suite →</span>
          </div>

          <div className="feature-card">
            <div className="feat-icon-box">🔒</div>
            <h3>Smart GPS E-Lock for Cargo</h3>
            <p>Heavy-duty electronic container padlocks. Unlocks only inside authorized geofences via RFID or encrypted remote mobile commands.</p>
            <span className="card-link">Explore Security Locks →</span>
          </div>

          <div className="feature-card">
            <div className="feat-icon-box">🔌</div>
            <h3>Plug & Play OBD-II Diagnostics</h3>
            <p>Zero wire cutting. Plugs directly into vehicle OBD port for real-time engine fault codes (DTC), battery health, and mileage tracking.</p>
            <span className="card-link">OBD Devices →</span>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE FLEET SAVINGS CALCULATOR */}
      <section className="section-padding roi-section">
        <div className="roi-card">
          <div className="roi-content">
            <span className="section-badge">INTERACTIVE FLEET ROI</span>
            <h2>Estimate Your Monthly Fuel & Operational Savings</h2>
            <p>Calculate how much Pictor Telematics can save your business by eradicating fuel pilferage and optimizing routes.</p>

            <div className="slider-wrapper">
              <div className="slider-labels">
                <span>Select Your Fleet Size:</span>
                <span className="fleet-badge">{fleetSize} Vehicles</span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className="roi-range-slider"
              />
              <div className="range-bounds">
                <span>5 Trucks</span>
                <span>250+ Commercial Units</span>
              </div>
            </div>
          </div>

          <div className="roi-display-box">
            <div className="calc-item">
              <span className="calc-label">Estimated Monthly Savings</span>
              <span className="calc-amount">₹ {totalMonthlySaving}</span>
              <span className="calc-sub">Direct fuel theft & route wastage prevention</span>
            </div>

            <div className="calc-item highlight">
              <span className="calc-label">Projected Annual Savings</span>
              <span className="calc-amount-lg">₹ {totalYearlySaving}</span>
              <span className="calc-sub">Net ROI delivered to bottom line</span>
            </div>

            <button className="btn-primary-glow w-100" onClick={onRequestDemo}>
              Lock In These Savings →
            </button>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY WORKFLOW TABS */}
      <section className="section-padding industry-section">
        <div className="section-header text-center">
          <span className="section-badge">TAILORED ARCHITECTURES</span>
          <h2 className="section-title">Built for Tough Indian Fleet Realities</h2>
        </div>

        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === 'logistics' ? 'active' : ''}`}
            onClick={() => setActiveTab('logistics')}
          >
            Logistics & Freight
          </button>
          <button
            className={`tab-btn ${activeTab === 'coldchain' ? 'active' : ''}`}
            onClick={() => setActiveTab('coldchain')}
          >
            Cold Chain & Pharma
          </button>
          <button
            className={`tab-btn ${activeTab === 'mining' ? 'active' : ''}`}
            onClick={() => setActiveTab('mining')}
          >
            Mining & Construction
          </button>
          <button
            className={`tab-btn ${activeTab === 'passenger' ? 'active' : ''}`}
            onClick={() => setActiveTab('passenger')}
          >
            School & Passenger Transit
          </button>
        </div>

        <div className="tab-content-card">
          <div className="tab-text">
            <span className="industry-badge">{industryData[activeTab].badge}</span>
            <h3>{industryData[activeTab].title}</h3>
            <p>{industryData[activeTab].description}</p>
            <ul className="tab-points">
              {industryData[activeTab].points.map((pt, i) => (
                <li key={i}>
                  <span className="check-icon">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <button className="btn-secondary-outline mt-4" onClick={onRequestDemo}>
              Request {industryData[activeTab].badge} Architecture
            </button>
          </div>
          <div className="tab-visual">
            <div className="tab-mock-dashboard">
              <div className="mock-bar">
                <span></span><span></span><span></span>
              </div>
              <div className="mock-body">
                <div className="mock-stat">
                  <span>ACTIVE FLEET COMPLIANCE</span>
                  <h4>99.4%</h4>
                </div>
                <div className="mock-stat">
                  <span>EST. FUEL THEFT BLOCKED</span>
                  <h4>₹ 1,42,800</h4>
                </div>
                <div className="mock-graph">
                  <div className="bar b1"></div>
                  <div className="bar b2"></div>
                  <div className="bar b3"></div>
                  <div className="bar b4"></div>
                  <div className="bar b5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HARDWARE ECOSYSTEM SHOWCASE */}
      <section className="section-padding hardware-section">
        <div className="section-header text-center">
          <span className="section-badge">CERTIFIED INDUSTRIAL HARDWARE</span>
          <h2 className="section-title">Tested for 55°C Indian Heat & Tough Vibrations</h2>
        </div>

        <div className="hardware-grid">
          <div className="device-card">
            <div className="device-tag">AI DASHCAM</div>
            <h4>Pictor T98 Dual-Channel</h4>
            <p>4G LTE AI Dashcam with integrated front road ADAS & cabin DMS sensor. Auto-uploads video snippets of harsh events to cloud.</p>
            <div className="device-specs">
              <span>Dual 1080p</span> • <span>Night Vision</span> • <span>SOS Sync</span>
            </div>
          </div>

          <div className="device-card">
            <div className="device-tag">4G HEAVY FLEET</div>
            <h4>GS910 Industrial Tracker</h4>
            <p>Rugged hardwired GPS tracker with remote engine cut-off immobilizer relay and digital fuel level sensor integration.</p>
            <div className="device-specs">
              <span>AIS-140 Ready</span> • <span>Engine Cut Relay</span> • <span>IP67</span>
            </div>
          </div>

          <div className="device-card">
            <div className="device-tag">PRECISION SENSOR</div>
            <h4>Ultrasonic Fuel Probe</h4>
            <p>Externally mounted ultrasonic tank sensor. No drilling or tank welding required. Detects drop down to 1 litre.</p>
            <div className="device-specs">
              <span>99.5% Accuracy</span> • <span>Anti-Siphon</span> • <span>RS485/BLE</span>
            </div>
          </div>

          <div className="device-card">
            <div className="device-tag">PLUG & PLAY</div>
            <h4>PS21 4G OBD-II Tracker</h4>
            <p>Instant deployment in 10 seconds. Live CANbus error code readout, vehicle speed, odometer reading, and battery health.</p>
            <div className="device-specs">
              <span>Zero Wiring</span> • <span>CAN Bus Read</span> • <span>4G LTE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION BANNER */}
      <section className="cta-banner-section">
        <div className="cta-banner-container">
          <div className="cta-banner-text">
            <h2>Ready to Modernize Your Fleet Operations?</h2>
            <p>Speak to our telematics deployment engineers or get a customized live demo on your test vehicles.</p>
            <div className="cta-contact-strip">
              <span>📞 24×7 Toll-Free Support: <strong>1800 123 2632</strong></span>
              <span>✉️ <strong>info@pictortelematics.com</strong></span>
            </div>
          </div>
          <div className="cta-banner-button">
            <button className="btn-primary-glow btn-lg" onClick={onRequestDemo}>
              Book Live Fleet Demo ➔
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;