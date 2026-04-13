import "./Talk.css";

export default function Talk() {
  return (
    <section className="talk-section">
      <div className="talk-content">
        <h2 className="talk-title">
          Let's discuss your next audit
          <br />or compliance milestone.
        </h2>
        <a href="#contact" className="talk-btn">
          Talk to our team <span className="talk-arrow">→</span>
        </a>
      </div>

      {/* CSS fan blades */}
      <div className="talk-fan" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="talk-blade"
            style={{ "--i": i, "--total": 18 }}
          />
        ))}
      </div>
    </section>
  );
}