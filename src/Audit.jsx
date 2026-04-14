import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import './Audit.css';
import Footer from './Footer';

export function AuditLink({ to = '/audits', label = 'View our audits', className = '' }) {
  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  );
}

export default function Audit() {
  return (
    <section className="audit-section">
      <Hero />
      <div className="audit-content">
        <p>
          Our audit service combines automated analysis with expert manual review to uncover critical vulnerabilities,
          ensure regulatory alignment, and strengthen your system before launch.
        </p>
      </div>

      <div className="audit-insights">
        <div className="audit-insights-heading">
          <h1>Audit Portfolio Insights</h1>
        </div>

        <div className="audit-metrics-grid">
          <article className="audit-metric-card">
            <span className="metric-label">Total Audits</span>
            <span className="metric-value">1986</span>
            <span className="metric-note">Complete security coverage across Web3.</span>
          </article>
          <article className="audit-metric-card">
            <span className="metric-label">Total Audited Companies</span>
            <span className="metric-value">1138</span>
            <span className="metric-note">Companies secured with mission-critical assurance.</span>
          </article>
          <article className="audit-metric-card">
            <span className="metric-label">Secured Market Cap</span>
            <span className="metric-value">$182.5B</span>
            <span className="metric-note">Assets protected through deep verification.</span>
          </article>
          <article className="audit-metric-card">
            <span className="metric-label">Found Vulnerabilities</span>
            <span className="metric-value">24,391</span>
            <span className="metric-note">Actionable findings surfaced across protocols.</span>
          </article>
        </div>

        <div className="audit-charts-grid">
          <div className="audit-chart-card">
            <h2>Findings by Severity</h2>
            <div className="chart-graphic chart-graphic--severity" />
            <ul className="chart-legend">
              <li className="legend-item">
                <span className="legend-swatch legend-critical" />
                Critical · 744 (3.05%)
              </li>
              <li className="legend-item">
                <span className="legend-swatch legend-high" />
                High · 2,295 (9.41%)
              </li>
              <li className="legend-item">
                <span className="legend-swatch legend-medium" />
                Medium · 4,280 (17.55%)
              </li>
              <li className="legend-item">
                <span className="legend-swatch legend-low" />
                Low · 6,811 (27.10%)
              </li>
              <li className="legend-item">
                <span className="legend-swatch legend-observation" />
                Observation · 10,462 (42.89%)
              </li>
            </ul>
          </div>

          <div className="audit-chart-card">
            <h2>Audits By Platform</h2>
            <div className="chart-graphic chart-graphic--platform" />
            <ul className="chart-legend">
              <li className="legend-item">
                <span className="legend-swatch legend-ethereum" />
                Ethereum · 816 (41.68%)
              </li>
              <li className="legend-item">
                <span className="legend-swatch legend-bnb" />
                BNB Chain · 430 (21.96%)
              </li>
              <li className="legend-item">
                <span className="legend-swatch legend-other" />
                Other · 321 (16.39%)
              </li>
              <li className="legend-item">
                <span className="legend-swatch legend-polygon" />
                Polygon · 246 (12.56%)
              </li>
              <li className="legend-item">
                <span className="legend-swatch legend-arbitrum" />
                Arbitrum · 145 (7.41%)
              </li>
            </ul>
          </div>
        </div>

        <div className="audit-cta-strip">
          <p>1500+ Web3 projects protect their future with Hacken.</p>
          <Link to="/request-audit" className="audit-cta-button">
            Start your audit today →
          </Link>
        </div>

        <div className="audit-logo-row">
          {['Binance', 'crypto.com', 'near', 'polygon', 'solana', 'arbitrum', '1inch', 'metamask'].map((logo) => (
            <span key={logo} className="audit-logo-item">{logo}</span>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
