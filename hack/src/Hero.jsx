import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const NAV_LINKS = ["Audits", "Services", "Solutions", "Community", "Blog", "Company"];

const ROTATING_WORDS = ["Stablecoins", "DeFi Protocols", "Smart Contracts", "Web3 Apps", "DAOs", "NFT Platforms"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const cubeRef = useRef(null);

  // Rotating headline word
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setFading(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Subtle cube float animation via JS (complements CSS)
  useEffect(() => {
    let frame;
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      if (cubeRef.current) {
        const y = Math.sin(elapsed / 1800) * 14;
        const rotate = Math.sin(elapsed / 3000) * 4;
        cubeRef.current.style.transform = `translateY(${y}px) rotate(${rotate}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="hacken-root">
      {/* Announcement Banner */}
      <div className="hacken-banner">
        <span className="banner-icon">↗</span>
        <span className="banner-text">
          <strong>The Hacken 2025 Yearly Security Report</strong> — Covers major Web3 breaches, their root causes, prevention insights, and key regulatory trends for 2026.
        </span>
        <a href="#" className="banner-link">Learn more →</a>
      </div>

      {/* Navigation */}
      <nav className="hacken-nav">
        <div className="nav-logo">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="10" height="10" rx="1" stroke="#0d1117" strokeWidth="2.5"/>
            <rect x="14" y="2" width="10" height="10" rx="1" stroke="#0d1117" strokeWidth="2.5"/>
            <rect x="2" y="14" width="10" height="10" rx="1" stroke="#0d1117" strokeWidth="2.5"/>
            <rect x="14" y="14" width="10" height="10" rx="1" stroke="#0d1117" strokeWidth="2.5"/>
            <rect x="26" y="2" width="8" height="8" rx="1" fill="#0d1117"/>
            <rect x="26" y="26" width="8" height="8" rx="1" fill="#0d1117"/>
          </svg>
          <span className="logo-text">HACKEN</span>
        </div>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link}><a href="#" className="nav-link">{link}</a></li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn-globe" aria-label="Language">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20"/>
              <path d="M2 12h20"/>
            </svg>
          </button>
          <a href="#" className="btn-audit">Request an audit →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hacken-hero">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Web3 Security Leader
          </div>

          <h1 className="hero-headline">
            End-to-end<br />
            blockchain security &amp;<br />
            compliance partner<br />
            for{" "}
            <span className={`hero-accent ${fading ? "fading" : ""}`}>
              {ROTATING_WORDS[wordIndex]}
            </span>
          </h1>

          <p className="hero-sub">
            Trusted by 1,000+ projects worldwide. Comprehensive smart contract audits,
            penetration testing, and regulatory compliance — all in one place.
          </p>

          <div className="hero-ctas">
            <a href="#" className="btn-primary">Request a quote →</a>
            <a href="#" className="btn-secondary">View our audits</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">$100B+</span>
              <span className="stat-label">Assets secured</span>
            </div>
            <div className="stat-divider"/>
            <div className="stat">
              <span className="stat-num">1,400+</span>
              <span className="stat-label">Audits completed</span>
            </div>
            <div className="stat-divider"/>
            <div className="stat">
              <span className="stat-num">200+</span>
              <span className="stat-label">Security experts</span>
            </div>
          </div>
        </div>

        {/* Right — 3D Cube Visual */}
        <div className="hero-visual">
          <div className="visual-glow" />
          <div ref={cubeRef} className="cube-wrapper">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80"
              alt="Abstract metallic cube representing blockchain security"
              className="cube-img"
            />
          </div>
          {/* Floating badges */}
          <div className="float-badge badge-top-right">
            <span className="fb-icon">🔒</span>
            <span className="fb-text">SOC2 Compliant</span>
          </div>
          <div className="float-badge badge-bottom-left">
            <span className="fb-icon">✅</span>
            <span className="fb-text">Zero critical vulnerabilities</span>
          </div>
        </div>
      </section>

      {/* Trusted by logos strip */}
      <div className="trust-strip">
        <span className="trust-label">Trusted by</span>
        {["Binance", "Avalanche", "Polkadot", "Uniswap", "Solana", "Chainlink"].map((name) => (
          <span key={name} className="trust-logo">{name}</span>
        ))}
      </div>
    </div>
  );
}