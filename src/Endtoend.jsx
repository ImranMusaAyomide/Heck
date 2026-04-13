import "./EndToEnd.css";

export default function EndToEnd() {
  return (
    <section className="ete-section">
      <div className="ete-top-bar" />

      <div className="ete-content">
        <h1 className="ete-title">
          End–to–end protection
          <br />
          for digital assets
        </h1>
        <p className="ete-subtitle">
          Secure your infrastructure and meet modern compliance standards with
          blockchain-native expertise across the full decentralized stack.
        </p>
        <div className="ete-actions">
          <a href="#services" className="ete-btn ete-btn--primary">
            View all services <span className="ete-arrow">→</span>
          </a>
          <a href="#methodologies" className="ete-btn ete-btn--secondary">
            Our methodologies <span className="ete-arrow">→</span>
          </a>
        </div>
      </div>

      {/* Fan of layered blades */}
      <div className="ete-fan" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <div
            key={i}
            className="ete-blade"
            style={{
              "--i": i,
              "--total": 22,
            }}
          />
        ))}
      </div>
    </section>
  );
}