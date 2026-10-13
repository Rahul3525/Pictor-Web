import React from "react";
import '../CSS/About.css'

const products = [
  { name: "GPS Tracking", desc: "Real-time tracking and fleet management", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=85", icon: "↗" },
  { name: "AI Dashcam", desc: "Driver monitoring with ADAS & DMS", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=85", icon: "↗" },
  { name: "E-Locks", desc: "Cargo security and asset protection", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=85", icon: "↗" },
  { name: "Fuel Sensors", desc: "Accurate fuel monitoring and theft prevention", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=85", icon: "↗" },
  { name: "OBD Trackers", desc: "Plug & play vehicle diagnostics", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=85", icon: "↗" },
  { name: "Fleet Platform", desc: "Complete fleet management solution", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=85", icon: "↗" },
];

const industries = [
  { title: "Logistics & Transportation", image: "https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=600&q=85" },
  { title: "Passenger Transport", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=85" },
  { title: "Construction & Heavy Equipment", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=85" },
  { title: "Rental & Leasing", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=85" },
  { title: "Agriculture & Rural Mobility", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=85" },
  { title: "Government & Public Sector", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=85" },
];

const milestones = [
  ["2018", "Company Founded", "Started with a vision to build intelligent telematics solutions."],
  ["2019", "First GPS Tracker Launch", "Introduced reliable tracking solutions for fleets."],
  ["2021", "Expanded Product Portfolio", "Added dashcams, fuel sensors and e-lock solutions."],
  ["2023", "Growing Customer Base", "Expanded solutions across industries and regions."],
  ["2024", "Connected Fleet Innovation", "Advanced visibility and data-led fleet operations."],
  ["2025", "Smarter Tomorrow", "Continuing innovation with AI and predictive telematics."],
];

const testimonials = [
  { quote: "Pictor's GPS tracking solution has helped us improve fleet efficiency and reduce operational costs significantly.", name: "Amit Sharma", role: "Fleet Manager, Logistics Company", initials: "AS" },
  { quote: "The AI dashcam solution has improved driver safety and reduced accidents in our fleet.", name: "Neha Verma", role: "Operations Head, Transport Firm", initials: "NV" },
  { quote: "Excellent support and a reliable platform. Pictor has been a great partner in our growth journey.", name: "Rajesh Kumar", role: "Director, Distribution Company", initials: "RK" },
];

function Eyebrow({ children }) {
  return (
    <div className="pictor-eyebrow">
      <span className="eyebrow-dot" />
      <span>{children}</span>
    </div>
  );
}

export default function About({ onOpenDemo }) {
  const triggerDemo = (e) => {
    e.preventDefault();
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const navBtn = document.querySelector('.btn-demo');
      if (navBtn) navBtn.click();
    }
  };

  return (
    <main className="pictor-about">
      {/* Hero Section */}
      <section className="pictor-hero">
        <div className="hero-glow-blob" />
        <div className="hero-copy">
          <span className="pictor-pill">ABOUT PICTOR TELEMATICS</span>
          <h1>
            Technology Moving a Smarter, <br />
            <span className="text-gradient-cyan">Safer Tomorrow</span>
          </h1>
          <p>
            Pictor Telematics is a technology-driven company focused on building intelligent telematics and IoT solutions to make transportation safer, smarter, and more efficient.
          </p>
          <div className="hero-actions">
            <a className="pictor-button" href="#our-story">
              <span>Our Story</span>
              <b>→</b>
            </a>
            <button className="pictor-button outline" onClick={triggerDemo}>
              <span className="play">▶</span>
              <span>Schedule Live Demo</span>
            </button>
          </div>
        </div>
        <div className="hero-feature-panel">
          {[
            ["◎", "Real-time Tracking"],
            ["▣", "AI Dashcam"],
            ["⚡", "Fuel Monitoring"],
            ["◈", "E-Lock Security"],
            ["▥", "Fleet Analytics"]
          ].map(([icon, text]) => (
            <div key={text} className="feature-pill">
              <b>{icon}</b>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="pictor-stats">
        {[
          ["🏆", "10,000+", "Happy Customers"],
          ["🚚", "1,00,000+", "Vehicles Connected"],
          ["📍", "25+", "States & UTs"],
          ["⚡", "99.9%", "Platform Uptime"]
        ].map(([icon, value, label]) => (
          <div className="stat" key={label}>
            <span className="stat-icon">{icon}</span>
            <div className="stat-text">
              <b>{value}</b>
              <small>{label}</small>
            </div>
          </div>
        ))}
      </section>

      {/* Story Section */}
      <section className="pictor-story section-wrap" id="our-story">
        <div className="story-copy">
          <Eyebrow>OUR STORY</Eyebrow>
          <h2>
            From a Vision to a <br />
            <span className="text-gradient-cyan">Connected India</span>
          </h2>
          <p>
            Pictor Telematics was established with a simple vision — to use technology to solve real-world transportation challenges. What started as a focused effort to improve vehicle visibility has grown into a broad telematics ecosystem for businesses.
          </p>
          <p>
            Today, our solutions help organisations monitor vehicles, protect assets, improve driver safety, and make informed decisions through real-time data.
          </p>
          <button className="pictor-button" onClick={triggerDemo}>
            <span>Partner With Us</span>
            <b>→</b>
          </button>
        </div>
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90"
            alt="Pictor Corporate Infrastructure"
          />
          <div className="video-chip">
            <span className="play-circle">▶</span>
            <div className="chip-text">
              <b>Our journey, in brief</b>
              <small>People, purpose and progress</small>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pictor-mission section-wrap">
        <div className="center-header">
          <Eyebrow>OUR MISSION &amp; VISION</Eyebrow>
          <h2>Guiding Principles of Our Growth</h2>
        </div>
        <div className="mission-grid">
          <article className="mission-card">
            <div className="mission-icon">◎</div>
            <div className="mission-content">
              <h3>Our Mission</h3>
              <p>
                To deliver innovative and reliable telematics solutions that enhance fleet safety, improve operational efficiency, and create a more connected world.
              </p>
            </div>
          </article>
          <article className="mission-card vision-card">
            <div className="mission-icon">◉</div>
            <div className="mission-content">
              <h3>Our Vision</h3>
              <p>
                To be a globally trusted leader in telematics and IoT, transforming how people, vehicles, and assets move toward a safer, smarter, and more sustainable future.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="pictor-journey section-wrap">
        <div className="center-header">
          <Eyebrow>OUR JOURNEY</Eyebrow>
          <h2>Key Milestones</h2>
          <p className="section-subtitle">A journey of innovation, growth, and trust.</p>
        </div>
        <div className="timeline">
          {milestones.map(([year, title, desc]) => (
            <article className="milestone" key={year}>
              <span className="timeline-dot" />
              <b className="year">{year}</b>
              <div className="milestone-icon">✧</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="pictor-products section-wrap">
        <div className="products-intro">
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2>Complete Telematics Solutions for Every Fleet</h2>
          <p>
            We design and deliver telematics and IoT products that help businesses monitor, manage, and protect their vehicles and assets in real time.
          </p>
          <button className="pictor-button" onClick={triggerDemo}>
            <span>Request Solution Catalog</span>
            <b>→</b>
          </button>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card-body">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <span className="product-icon-link">{product.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="pictor-industries section-wrap">
        <div className="center-header">
          <Eyebrow>INDUSTRIES WE SERVE</Eyebrow>
          <h2>Powering Businesses Across Every Sector</h2>
        </div>
        <div className="industry-grid">
          {industries.map((item) => (
            <article className="industry-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="industry-overlay">
                <b>{item.title}</b>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="pictor-team section-wrap" id="our-team">
        <div className="team-copy">
          <Eyebrow>OUR TEAM</Eyebrow>
          <h2>People Behind Pictor Telematics</h2>
          <p>
            A passionate team of innovators, engineers, and industry experts working towards safer and more connected mobility.
          </p>
          <button className="pictor-button" onClick={triggerDemo}>
            <span>Join Our Mission</span>
            <b>→</b>
          </button>
        </div>
        <div className="team-photo">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90"
            alt="Team collaborating in an office"
          />
          <div className="team-caption">
            <b>One team. One connected vision.</b>
            <small>Technology built around people.</small>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pictor-testimonials section-wrap">
        <div className="center-header">
          <Eyebrow>TESTIMONIALS</Eyebrow>
          <h2>What Our Customers Say</h2>
          <p className="section-subtitle">Customer partnerships inspire us to keep improving.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <div className="reviewer">
                <span className="avatar">{item.initials}</span>
                <div className="reviewer-info">
                  <b>{item.name}</b>
                  <small>{item.role}</small>
                  <strong className="stars">★★★★★</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Pictor */}
      <section className="pictor-why section-wrap">
        <div className="center-header">
          <Eyebrow>WHY CHOOSE PICTOR</Eyebrow>
          <h2>Enterprise Reliability at Every Step</h2>
        </div>
        <div className="why-grid">
          {[
            ["🏆", "Proven Expertise", "Industry-focused telematics solutions with dedicated hardware teams."],
            ["✧", "Innovative Solutions", "Modern IoT architecture, edge inference, and predictive AI."],
            ["⬡", "Reliable & Secure", "Bank-grade data encryption, ISO compliance, and 99.9% uptime SLA."],
            ["☏", "Dedicated Support", "24/7 technical fleet operations desk ready to assist instantly."]
          ].map(([icon, title, desc]) => (
            <article className="why-card" key={title}>
              <span className="why-icon">{icon}</span>
              <div className="why-content">
                <b>{title}</b>
                <small>{desc}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pictor-cta">
        <div className="cta-box">
          <Eyebrow>LET'S BUILD A SMARTER TOMORROW</Eyebrow>
          <h2>Partner with Pictor Telematics</h2>
          <p>Discover how our solutions can help your business stay connected, efficient, and future-ready.</p>
          <button className="pictor-button big-btn" onClick={triggerDemo}>
            <span>Request a Custom Demo</span>
            <b>→</b>
          </button>
        </div>
      </section>
    </main>
  );
}