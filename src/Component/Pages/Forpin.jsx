import React, { useState } from 'react';
import '../CSS/Forpin.css'
// import '.../assets'
const Forpin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const smsCommands = [
    {
      title: "Query System Diagnostics",
      command: "STATUS#",
      response: "STATUS: ON, GPRS: LINK UP, GSM: 28, GPS: FIXED, ACC: ON",
      purpose: "Queries live operational telemetry including internal battery voltage, GSM signal strength, GNSS satellite lock, and ACC wire state."
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
      purpose: "Configures cellular Access Point Name for Vi business data connectivity."
    },
    {
      title: "Configure APN (Reliance Jio)",
      command: "APN,jionet#",
      response: "APN OK",
      purpose: "Sets APN parameter for Jio 4G commercial telemetry networks."
    },
    {
      title: "Configure Pictor Gateway Host",
      command: "SERVER,1,gps.pictortelematics.com,8800,0#",
      response: "SERVER OK",
      purpose: "Directs device TCP packet streaming to the Pictor Cloud ingestion cluster on port 8800."
    },
    {
      title: "Trigger Engine Cut-Off (Immobilize)",
      command: "RELAY,1#",
      response: "CUT FUEL OK",
      purpose: "Pulls the yellow relay wire to ground, activating the external relay to sever the ignition or fuel circuit."
    },
    {
      title: "Restore Engine Circuit (Mobilize)",
      command: "RELAY,0#",
      response: "RESTORE FUEL OK",
      purpose: "De-energizes the relay coil to return the vehicle fuel pump or ignition line to normal closed state."
    },
    {
      title: "Soft Device Reboot",
      command: "RESET#",
      response: "RESET OK",
      purpose: "Power-cycles the internal microcontroller and cellular modem without deleting configured parameters."
    }
  ];

  return (
    <div className="forpin-container">
      {/* 1. Header Section */}
      <section className="forpin-header-section">
        <div className="forpin-wrapper">
          <div className="forpin-breadcrumbs">
            {/* <span>PICTOR KNOWLEDGE HUB</span> */}
            <span className="sep">/</span>
            {/* <span>WIRED GPS TRACKERS</span> */}
            <span className="sep">/</span>
            <span className="active-crumb">PT06 4-WIRE GPS VEHICLE TRACKER</span>
          </div>

          <h1 className="forpin-title">
            Pictor PT06: 4-Wire GPS Tracker Technical Manual &amp; Self-Service Guide
          </h1>
          <p className="forpin-subtitle">
            Authoritative technical documentation for the Pictor PT06 4-wire GPS terminal. Includes detailed hardware anatomy, wiring pinouts, immobilizer relay wiring, LED diagnostic patterns, and SMS configuration commands.
          </p>

          <div className="forpin-specs-ribbon">
            <span className="spec-tag">SKU: PT06</span>
            <span className="spec-tag">Input Voltage: DC 9V – 90V</span>
            <span className="spec-tag">GNSS Receiver: High-Sensitivity GPS Engine</span>
            <span className="spec-tag">Enclosure: IP65 Weather-Resistant</span>
            <span className="spec-tag">Backup Battery: Integrated Rechargeable Li-Po</span>
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
              <h2>Product Architecture &amp; Physical Anatomy</h2>
              <p>The Pictor PT06 is an ultra-compact 4-wire vehicle tracking terminal designed for electric vehicles, passenger cars, motorcycles, and logistics fleets.</p>
            </div>

            <div className="product-showcase-grid">
              {/* Product Visual Card with PT06 Image */}
              <div className="product-image-card">
                <div className="image-wrapper">
                  <img 
                    src='/my-react-app/src/assets/PT06.png'
                    alt="Pictor PT06 4-Wire GPS Tracker Device" 
                    className="hardware-img"
                  />
                  <span className="image-badge">PICTOR PT06 • 4-WIRE</span>
                </div>
                <div className="image-caption">
                  <strong>Pictor PT06 Compact Gps Tracker</strong>
                  <span>Features an integrated internal ceramic GNSS antenna, internal GSM antenna, and flame-retardant industrial casing with four-core wiring harness.</span>
                </div>
              </div>

              {/* Hardware Anatomy Points */}
              <div className="hardware-specs-list">
                <h3>Hardware Components &amp; Interfaces</h3>
                
                <div className="anatomy-item">
                  <div className="anatomy-num">1</div>
                  <div className="anatomy-info">
                    <strong>4-Pin Keyed Automotive Connector</strong>
                    <p>Secured plug-in interface preventing reverse polarity connection during field installations.</p>
                  </div>
                </div>

                <div className="anatomy-item">
                  <div className="anatomy-num">2</div>
                  <div className="anatomy-info">
                    <strong>Internal MICRO-SIM Card Tray</strong>
                    <p>Internal push-push slot with vibration-resistant retention clip designed for M2M micro/nano SIM cards.</p>
                  </div>
                </div>

                <div className="anatomy-item">
                  <div className="anatomy-num">3</div>
                  <div className="anatomy-info">
                    <strong>Diagnostic Status LED Indicator Cluster</strong>
                    <p>Three integrated top-mounted micro-LEDs providing instant physical readout of Power, GNSS satellite positioning, and Cellular cloud sync.</p>
                  </div>
                </div>

                <div className="anatomy-item">
                  <div className="anatomy-num">4</div>
                  <div className="anatomy-info">
                    <strong>Internal Backup Li-Polymer Battery</strong>
                    <p>On-board rechargeable battery provides continuous backup power to transmit immediate power-cut alarms if primary vehicle battery leads are disconnected.</p>
                  </div>
                </div>

                <div className="anatomy-item">
                  <div className="anatomy-num">5</div>
                  <div className="anatomy-info">
                    <strong>Built-in 3-Axis Motion Sensor</strong>
                    <p>Enables intelligent sleep modes when parked and triggers vibration, towing, and harsh driving event alarms.</p>
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
              <p>Standard electrical wiring configuration for the Pictor PT06 vehicle harness.</p>
            </div>

            <div className="pinout-card">
              <table className="forpin-table">
                <thead>
                  <tr>
                    <th>Pin #</th>
                    <th>Color</th>
                    <th>Signal Function</th>
                    <th>Voltage Rating</th>
                    <th>Connection Instructions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="pin-badge">Pin 1</span></td>
                    <td><span className="color-swatch red-swatch"></span> Red</td>
                    <td><strong>VCC (Battery Positive +)</strong></td>
                    <td>DC 9V – 90V Constant</td>
                    <td>Connect directly to constant vehicle battery positive terminal. Install an inline 2A fast-blow fuse close to the power source.</td>
                  </tr>
                  <tr>
                    <td><span className="pin-badge">Pin 2</span></td>
                    <td><span className="color-swatch black-swatch"></span> Black</td>
                    <td><strong>GND (Ground -)</strong></td>
                    <td>0V Ground Return</td>
                    <td>Attach securely to an unpainted metal chassis bolt or battery negative terminal. Ensure a zero-resistance path.</td>
                  </tr>
                  <tr>
                    <td><span className="pin-badge">Pin 3</span></td>
                    <td><span className="color-swatch orange-swatch"></span> Orange</td>
                    <td><strong>ACC (Ignition Detection)</strong></td>
                    <td>DC 9V – 36V Switched</td>
                    <td>Tap into the vehicle ignition switch circuit. Must measure 12V/24V in "Key ON" state and 0V in "Key OFF".</td>
                  </tr>
                  <tr>
                    <td><span className="pin-badge">Pin 4</span></td>
                    <td><span className="color-swatch yellow-swatch"></span> Yellow</td>
                    <td><strong>RELAY (Cut-Off Trigger)</strong></td>
                    <td>Open-Collector Ground</td>
                    <td>Connects to Pin 86 of the 12V/24V automotive relay. Sends ground pulse to activate remote engine immobilization.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box warning">
              <span className="callout-icon">⚠️</span>
              <div>
                <strong>Mandatory Field Precaution:</strong>
                <p>Never bridge the orange wire directly to constant 12V/24V battery power. Permanent voltage on the orange line forces the device to report permanent ignition, corrupting idle alerts, trip calculations, and accelerating vehicle battery drain.</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: RELAY SCHEMATIC ================= */}
        {activeTab === 'relay' && (
          <div className="forpin-tab-pane">
            <div className="pane-header">
              <h2>Engine Cut-Off Immobilizer Relay Schematic</h2>
              <p>Standard SPDT 12V or 24V automotive relay circuit for safe remote vehicle immobilization.</p>
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
                    <small>Yellow Wire from PT06 (-)</small>
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
                    <strong>Identify Control Line:</strong> Locate the electrical fuel pump power feed or starter motor solenoid wire beneath the steering column or vehicle fuse panel.
                  </li>
                  <li>
                    <strong>Sever the Line:</strong> Cut the identified line cleanly and strip both wire ends back by 10mm.
                  </li>
                  <li>
                    <strong>Wire Terminal 30:</strong> Connect the severed wire originating from the key switch side to Relay Pin <strong>30</strong>.
                  </li>
                  <li>
                    <strong>Wire Terminal 87a (Normally Closed):</strong> Connect the second severed wire running toward the fuel pump or starter solenoid to Relay Pin <strong>87a</strong>.
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
              <p>Reference table for diagnosing hardware power, satellite positioning, and 4G cellular cloud connectivity on the Pictor PT06.</p>
            </div>

            <div className="led-cards-row">
              <div className="led-diagnostic-card">
                <div className="led-card-header">
                  <span className="bulb red-bulb"></span>
                  <h4>Red LED — Power Supply</h4>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Solid ON</span>
                  <p>External power (9V–90V DC) is active and within range. Normal operation.</p>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Slow Flash</span>
                  <p>External power disconnected. Device is operating on internal backup battery.</p>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Solid OFF</span>
                  <p>Device completely unpowered or battery exhausted. Inspect inline 2A fuse and vehicle battery leads.</p>
                </div>
              </div>

              <div className="led-diagnostic-card">
                <div className="led-card-header">
                  <span className="bulb blue-bulb"></span>
                  <h4>Blue LED — GNSS Satellite Fix</h4>
                </div>
                <div className="led-state-item">
                  <span className="state-badge">Solid ON</span>
                  <p>3D GPS satellite positioning lock acquired (&gt; 4 satellites locked, accuracy &lt; 2.5m).</p>
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

              <div className="led-diagnostic-card">
                <div className="led-card-header">
                  <span className="bulb green-bulb"></span>
                  <h4>Green LED — Cellular / Cloud Link</h4>
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
              <p>Send standard SMS text messages from an authorized phone number directly to the tracker's SIM card number.</p>
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
                    <p><strong>Response:</strong> <code>{item.response}</code></p>
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
              <p>Step-by-step diagnostic workflows for the three most common field installation issues on the Pictor PT06.</p>
            </div>

            <div className="troubleshooting-stack">
              <div className="fault-card">
                <div className="fault-header">
                  <span className="fault-code red-text">FAULT SCENARIO #01</span>
                  <h3>PT06 Shows "Offline" on Dashboard</h3>
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

export default Forpin;