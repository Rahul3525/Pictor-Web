import React, { useState } from 'react';
import '../CSS/Forpin.css' // Reusable standard 4-wire styling

const L57 = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const smsCommands = [
    {
      title: "Query Operating Status",
      command: "STATUS#",
      response: "STATUS: ON, GPRS: LINK UP, GSM: 29, GPS: FIXED, ACC: ON",
      purpose: "Validates battery voltage, cellular connection quality, satellite lock, and ACC ignition wire state."
    },
    {
      title: "Check System Parameters",
      command: "PARAM#",
      response: "IMEI: 8694020..., SERVER: gps.pictortelematics.com:8800, APN: airtelgprs.com",
      purpose: "Queries device IMEI number, current gateway IP, port, and configured telecom APN."
    },
    {
      title: "Configure APN (Airtel IoT)",
      command: "APN,airtelgprs.com#",
      response: "APN OK",
      purpose: "Configures cellular Access Point Name for Airtel enterprise machine-to-machine data SIMs."
    },
    {
      title: "Configure APN (Vodafone Idea / Vi)",
      command: "APN,iot.vi.com#",
      response: "APN OK",
      purpose: "Configures network Access Point Name for Vi business telemetry SIM cards."
    },
    {
      title: "Configure APN (Reliance Jio)",
      command: "APN,jionet#",
      response: "APN OK",
      purpose: "Configures cellular APN for Jio 4G LTE IoT data connections."
    },
    {
      title: "Set Pictor Gateway Server",
      command: "SERVER,1,gps.pictortelematics.com,8800,0#",
      response: "SERVER OK",
      purpose: "Directs telemetry packet streaming to Pictor Cloud ingestion cluster on TCP port 8800."
    },
    {
      title: "Remote Engine Immobilization",
      command: "RELAY,1#",
      response: "CUT FUEL OK",
      purpose: "Pulls the yellow control wire to ground, engaging the external relay to cut fuel pump or starter solenoid power."
    },
    {
      title: "Restore Engine Circuit",
      command: "RELAY,0#",
      response: "RESTORE FUEL OK",
      purpose: "De-energizes the relay coil, returning the vehicle ignition and fuel line to normal conductivity."
    },
    {
      title: "Configure Upload Frequency",
      command: "TIMER,10,60#",
      response: "TIMER OK",
      purpose: "Sets data transmission interval to 10 seconds while moving and 60 seconds while stationary."
    },
    {
      title: "Soft Device Reboot",
      command: "RESET#",
      response: "RESET OK",
      purpose: "Restarts internal micro-controller and 4G modem without wiping saved device configurations."
    }
  ];

  return (
    <div className="forpin-container">
      {/* 1. Header Section */}
      <section className="forpin-header-section">
        <div className="forpin-wrapper">
          <div className="forpin-breadcrumbs">
            <span>PICTOR KNOWLEDGE HUB</span>
            <span className="sep">/</span>
            <span>WIRED GPS TRACKERS</span>
            <span className="sep">/</span>
            <span className="active-crumb">L57 4-WIRE MINI GPS TRACKER</span>
          </div>

          <h1 className="forpin-title">
            Pictor L57: 4-Wire Mini 4G GPS Tracker Manual &amp; Knowledge Base
          </h1>
          <p className="forpin-subtitle">
            Authoritative technical manual for the ultra-compact Pictor L57 4-wire telematics tracker. Details include hardware pinouts, anti-theft relay circuits, diagnostic LED status indicators, and field SMS configuration.
          </p>

          <div className="forpin-specs-ribbon">
            <span className="spec-tag">Model: Pictor L57 4G</span>
            <span className="spec-tag">Operating Voltage: DC 9V – 90V</span>
            <span className="spec-tag">Positioning: GPS + BeiDou + GLONASS</span>
            <span className="spec-tag">Backup Battery: 150mAh Li-Po</span>
            <span className="spec-tag">Form Factor: Ultra-Slim Mini Enclosure</span>
          </div>
        </div>
      </section>

      {/* 2. Navigation Sub-Tabs */}
      <div className="forpin-tabs-bar">
        <div className="forpin-wrapper tabs-flex">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Product Overview &amp; Hardware
          </button>
          <button 
            className={`tab-btn ${activeTab === 'pinout' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('pinout')}
          >
            4-Wire Harness Pinout
          </button>
          <button 
            className={`tab-btn ${activeTab === 'relay' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('relay')}
          >
            Immobilizer Relay Circuit
          </button>
          <button 
            className={`tab-btn ${activeTab === 'leds' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('leds')}
          >
            LED Status Decoder
          </button>
          <button 
            className={`tab-btn ${activeTab === 'sms' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('sms')}
          >
            SMS Diagnostic Commands
          </button>
          <button 
            className={`tab-btn ${activeTab === 'troubleshooting' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('troubleshooting')}
          >
            Troubleshooting Wizard
          </button>
        </div>
      </div>

      <div className="forpin-wrapper forpin-content-body">

        {/* ================= TAB 1: PRODUCT OVERVIEW & HARDWARE ================= */}
        {activeTab === 'overview' && (
          <div className="forpin-tab-pane">
            <div className="pane-header">
              <h2>Product Architecture &amp; Hardware Anatomy</h2>
              <p>The Pictor L57 is an ultra-slim, concealable 4-wire 4G telematics device engineered for electric two-wheelers, passenger cars, delivery fleets, and commercial trucks.</p>
            </div>

            <div className="product-showcase-grid">
              {/* Product Visual Card with L57 Image */}
              <div className="product-image-card">
                <div className="image-wrapper">
                  <img 
                    src={new URL('../../assets/L57.png', import.meta.url).href} 
                    alt="Pictor L57 4-Wire GPS Tracker Unit" 
                    className="hardware-img"
                    onError={(e) => {
                      // Fallback image if L57.png is not yet added in assets folder
                      e.target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80';
                    }}
                  />
                  <span className="image-badge">PICTOR L57 • 4-WIRE MINI</span>
                </div>
                <div className="image-caption">
                  <strong>Pictor L57 Ultra-Slim Telematics Terminal</strong>
                  <span>High-efficiency internal ceramic patch antenna with high-gain 4G cellular module, housed in an IP65 heat-resistant polycarbonate shell.</span>
                </div>
              </div>

              {/* Hardware Anatomy Points */}
              <div className="hardware-specs-list">
                <h3>Hardware Features &amp; Specifications</h3>
                
                <div className="anatomy-item">
                  <div className="anatomy-num">1</div>
                  <div className="anatomy-info">
                    <strong>Ultra-Compact Concealed Profile</strong>
                    <p>Designed for discreet installation inside motorcycle headlamps, under dashboard clusters, or inside vehicle fuse compartments.</p>
                  </div>
                </div>

                <div className="anatomy-item">
                  <div className="anatomy-num">2</div>
                  <div className="anatomy-info">
                    <strong>Internal Nano-SIM Card Slot</strong>
                    <p>Vibration-proof internal push-push slot engineered for commercial industrial M2M SIM cards.</p>
                  </div>
                </div>

                <div className="anatomy-item">
                  <div className="anatomy-num">3</div>
                  <div className="anatomy-info">
                    <strong>Tri-Color Micro Diagnostic LEDs</strong>
                    <p>Independent surface-mount LEDs providing immediate visual feedback for Main Power, Satellite Fix, and 4G Network Sync.</p>
                  </div>
                </div>

                <div className="anatomy-item">
                  <div className="anatomy-num">4</div>
                  <div className="anatomy-info">
                    <strong>Emergency Power-Cut Tamper Alert</strong>
                    <p>Internal 150mAh rechargeable battery delivers emergency runtime to transmit an instant power-disconnect alert if main cables are cut.</p>
                  </div>
                </div>

                <div className="anatomy-item">
                  <div className="anatomy-num">5</div>
                  <div className="anatomy-info">
                    <strong>3-Axis Precision G-Sensor</strong>
                    <p>Powers stationary sleep power-saving algorithms and detects unauthorized towing, harsh braking, and vehicle vibration alerts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: WIRING HARNESS PINOUT ================= */}
        {activeTab === 'pinout' && (
          <div className="forpin-tab-pane">
            <div className="pane-header">
              <h2>4-Wire Harness Schematic &amp; Color Convention</h2>
              <p>Standard color convention for connecting the Pictor L57 to vehicle electrical systems.</p>
            </div>

            <div className="pinout-card">
              <table className="forpin-table">
                <thead>
                  <tr>
                    <th>Pin #</th>
                    <th>Wire Color</th>
                    <th>Signal Function</th>
                    <th>Voltage Range</th>
                    <th>Installation Instructions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="pin-badge">Pin 1</span></td>
                    <td><span className="color-swatch red-swatch"></span> Red</td>
                    <td><strong>VCC (Battery Positive +)</strong></td>
                    <td>DC 9V – 90V Constant</td>
                    <td>Connect directly to constant vehicle battery positive terminal (+). Install an inline 2A fast-blow fuse close to the power source.</td>
                  </tr>
                  <tr>
                    <td><span className="pin-badge">Pin 2</span></td>
                    <td><span className="color-swatch black-swatch"></span> Black</td>
                    <td><strong>GND (Ground -)</strong></td>
                    <td>0V Ground Return</td>
                    <td>Secure tightly to an unpainted metal chassis bolt or battery negative terminal (-). Ensure zero ground resistance.</td>
                  </tr>
                  <tr>
                    <td><span className="pin-badge">Pin 3</span></td>
                    <td><span className="color-swatch orange-swatch"></span> Orange</td>
                    <td><strong>ACC (Ignition Detection)</strong></td>
                    <td>DC 9V – 36V Switched</td>
                    <td>Tap into the vehicle ignition switch line. Must measure 12V/24V when the key is turned ON and 0V when turned OFF.</td>
                  </tr>
                  <tr>
                    <td><span className="pin-badge">Pin 4</span></td>
                    <td><span className="color-swatch yellow-swatch"></span> Yellow</td>
                    <td><strong>RELAY (Immobilizer Trigger)</strong></td>
                    <td>Open-Collector Ground</td>
                    <td>Connect to Pin 86 of the 12V/24V automotive relay. Sends ground pulse to activate remote engine cut-off.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box warning">
              <span className="callout-icon">⚠️</span>
              <div>
                <strong>Critical Field Warning:</strong>
                <p>Never connect the orange wire directly to constant battery power. Permanent voltage on the orange wire forces the device to report permanent ignition, corrupting idle alerts, trip calculations, and accelerating vehicle battery drain.</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: RELAY SCHEMATIC ================= */}
        {activeTab === 'relay' && (
          <div className="forpin-tab-pane">
            <div className="pane-header">
              <h2>Engine Cut-Off Immobilizer Relay Schematic</h2>
              <p>Standard SPDT 12V or 24V automotive relay circuit for safe remote engine immobilization with the Pictor L57.</p>
            </div>

            <div className="relay-grid">
              <div className="relay-diagram-card">
                <div className="relay-box-visual">
                  <div className="terminal-node node-85">
                    <span>Pin 85</span>
                    <small>Switched Ignition 12V (+)</small>
                  </div>
                  <div className="terminal-node node-86">
                    <span>Pin 86</span>
                    <small>Yellow Wire from L57 (-)</small>
                  </div>
                  <div className="terminal-node node-30">
                    <span>Pin 30</span>
                    <small>Key Switch Side (Cut Wire)</small>
                  </div>
                  <div className="terminal-node node-87a">
                    <span>Pin 87a</span>
                    <small>Engine / Fuel Pump Side</small>
                  </div>
                  <div className="relay-nameplate">
                    12V / 24V AUTOMOTIVE RELAY
                  </div>
                </div>
              </div>

              <div className="relay-instruction-card">
                <h3>Relay Terminal Wiring Procedure</h3>
                <ol className="relay-steps">
                  <li>
                    <strong>Identify Control Circuit:</strong> Locate the electrical fuel pump positive supply line or the starter solenoid circuit beneath the steering column or fuse box.
                  </li>
                  <li>
                    <strong>Cut the Identified Wire:</strong> Sever the control line cleanly and strip back both ends by approximately 10mm.
                  </li>
                  <li>
                    <strong>Connect Terminal 30:</strong> Attach the wire originating from the key switch side directly to Relay Pin <strong>30</strong>.
                  </li>
                  <li>
                    <strong>Connect Terminal 87a (Normally Closed):</strong> Attach the second wire heading toward the engine starter / fuel pump to Relay Pin <strong>87a</strong>.
                  </li>
                  <li>
                    <strong>Wire Relay Coil (Pins 85 &amp; 86):</strong> Connect Pin <strong>85</strong> to switched ignition power (+). Connect Pin <strong>86</strong> directly to the tracker's <strong>Yellow wire</strong>.
                  </li>
                </ol>

                <div className="callout-box info">
                  <span className="callout-icon">ℹ️</span>
                  <div>
                    <strong>Fail-Safe Design:</strong> Because this schematic utilizes the Normally Closed (NC) contacts between Pin 30 and 87a, complete power loss to the GPS unit leaves the vehicle starting circuit intact, preventing accidental roadside stalls while in motion.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: LED DECODER ================= */}
        {activeTab === 'leds' && (
          <div className="forpin-tab-pane">
            <div className="pane-header">
              <h2>LED Indicator Diagnostic Status Decoder</h2>
              <p>Reference table for diagnosing power, satellite positioning, and 4G cellular cloud connectivity on the Pictor L57.</p>
            </div>

            <div className="led-cards-row">
              {/* Red LED */}
              <div className="led-diagnostic-card">
                <div className="led-card-header">
                  <span className="bulb red-bulb"></span>
                  <h4>Red LED — Main Power Supply</h4>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Solid ON</span>
                  <p>External DC power (9V–90V) connected and operational. Device functioning normally.</p>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Slow Flash</span>
                  <p>External power cut off. Tracker running on internal 150mAh backup battery.</p>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Solid OFF</span>
                  <p>Tracker unpowered or internal battery exhausted. Inspect 2A fuse and vehicle battery terminals.</p>
                </div>
              </div>

              {/* Blue LED */}
              <div className="led-diagnostic-card">
                <div className="led-card-header">
                  <span className="bulb blue-bulb"></span>
                  <h4>Blue LED — GNSS Satellite Positioning</h4>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Solid ON</span>
                  <p>3D GPS satellite lock acquired (&gt; 4 satellites locked, accuracy &lt; 2.5m).</p>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Fast Flash</span>
                  <p>Receiver searching for satellites. Common when parked in covered parking or basements.</p>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Solid OFF</span>
                  <p>GNSS module in sleep state (vehicle stationary) or antenna obstructed by structural metal.</p>
                </div>
              </div>

              {/* Green LED */}
              <div className="led-diagnostic-card">
                <div className="led-card-header">
                  <span className="bulb green-bulb"></span>
                  <h4>Green LED — 4G Network &amp; Cloud Link</h4>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Solid ON</span>
                  <p>Connected to cellular network and actively streaming telemetry to Pictor Cloud.</p>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Slow Flash</span>
                  <p>Registered to cellular network, but TCP handshake to server failed. Verify APN setting.</p>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Fast Flash</span>
                  <p>No SIM detected, SIM PIN locked, or zero operator signal coverage available.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 5: SMS COMMANDS ================= */}
        {activeTab === 'sms' && (
          <div className="forpin-tab-pane">
            <div className="pane-header">
              <h2>Diagnostic &amp; Configuration SMS Commands</h2>
              <p>Send standard SMS text messages from an authorized phone number directly to the L57 SIM card number.</p>
            </div>

            <div className="sms-grid">
              {smsCommands.map((item, idx) => (
                <div key={idx} className="sms-card">
                  <div className="sms-top">
                    <h4>{item.title}</h4>
                    <button 
                      className="copy-chip"
                      onClick={() => copyToClipboard(item.command, idx)}
                    >
                      {copiedIndex === idx ? 'Copied ✓' : 'Copy'}
                    </button>
                  </div>
                  <div className="code-display">
                    <code>{item.command}</code>
                  </div>
                  <div className="sms-details">
                    <p><strong>Expected Response:</strong> <code>{item.response}</code></p>
                    <p className="purpose-text">{item.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 6: TROUBLESHOOTING ================= */}
        {activeTab === 'troubleshooting' && (
          <div className="forpin-tab-pane">
            <div className="pane-header">
              <h2>Self-Service Troubleshooting Matrix</h2>
              <p>Step-by-step diagnostic workflows for the three most common field installation issues on the Pictor L57.</p>
            </div>

            <div className="troubleshooting-stack">
              {/* Fault 1 */}
              <div className="fault-card">
                <div className="fault-header">
                  <span className="fault-code red-text">FAULT SCENARIO #01</span>
                  <h3>L57 Shows "Offline" on Dashboard</h3>
                </div>
                <div className="fault-content">
                  <div className="fault-col">
                    <strong>Probable Root Causes:</strong>
                    <ul>
                      <li>SIM card data balance exhausted or SIM subscription expired.</li>
                      <li>Incorrect Access Point Name (APN) programmed into tracker firmware.</li>
                      <li>Blown 2A inline fuse on constant red power wire.</li>
                      <li>SIM card inserted in reverse orientation or PIN lock active.</li>
                    </ul>
                  </div>
                  <div className="fault-col">
                    <strong>Step-by-Step Resolution:</strong>
                    <ol>
                      <li>Send <code>STATUS#</code> via SMS. If no reply is received within 60s, inspect vehicle battery connections and the 2A fuse.</li>
                      <li>Send APN command: <code>APN,airtelgprs.com#</code> (or your carrier APN) and verify the <code>APN OK</code> response.</li>
                      <li>Check Green LED. If fast blinking, unmount tracker and verify SIM golden contacts face downward.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Fault 2 */}
              <div className="fault-card">
                <div className="fault-header">
                  <span className="fault-code orange-text">FAULT SCENARIO #02</span>
                  <h3>Ignition Status (ACC) Shows "OFF" While Vehicle is Running</h3>
                </div>
                <div className="fault-content">
                  <div className="fault-col">
                    <strong>Probable Root Causes:</strong>
                    <ul>
                      <li>Orange wire tapped into a circuit that drops to 0V during starter cranking.</li>
                      <li>Loose crimp connection or poor insulation tap on ACC wire.</li>
                      <li>Orange wire erroneously connected to cabin lighting or accessory socket circuit.</li>
                    </ul>
                  </div>
                  <div className="fault-col">
                    <strong>Step-by-Step Resolution:</strong>
                    <ol>
                      <li>Use a Digital Multimeter. Connect positive probe to Orange wire and negative probe to chassis ground.</li>
                      <li>Turn key to ON position: Multimeter must read &gt; 11.5V DC.</li>
                      <li>Turn key to OFF position: Multimeter must read 0.0V DC. If floating voltage exists, choose a clean primary ignition line.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Fault 3 */}
              <div className="fault-card">
                <div className="fault-header">
                  <span className="fault-code cyan-text">FAULT SCENARIO #03</span>
                  <h3>GPS Position Drifts or Reports Incorrect Location</h3>
                </div>
                <div className="fault-content">
                  <div className="fault-col">
                    <strong>Probable Root Causes:</strong>
                    <ul>
                      <li>Tracker installed upside down beneath metal framing (attenuating satellite signal).</li>
                      <li>Windshield equipped with metallic UV/thermal blocking film.</li>
                      <li>Blue LED flashing rapidly, indicating fewer than 3 satellites in line-of-sight.</li>
                    </ul>
                  </div>
                  <div className="fault-col">
                    <strong>Step-by-Step Resolution:</strong>
                    <ol>
                      <li>Ensure the top plastic cover of the device faces skyward toward the windshield or plastic dashboard trim.</li>
                      <li>Never install the tracker inside an enclosed steel glovebox or beneath structural chassis beams.</li>
                      <li>Drive vehicle into open sky for 3 minutes to allow cold-start satellite ephemeris download.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default L57;