import './Feature.css';

const FEATURES = [
  {
    title: 'Smart contract audits',
    description: 'Automated and manual review of on-chain code to eliminate vulnerabilities, backdoors, and logic flaws before deployment.',
    icon: '🛡️',
  },
  {
    title: 'Penetration testing',
    description: 'Real-world attack simulations across Web3 infrastructure, APIs, and dApps to uncover exploitable weaknesses.',
    icon: '🕵️',
  },
  {
    title: 'Compliance roadmaps',
    description: 'Regulatory readiness guidance for data protection, privacy, and blockchain-specific standards across global markets.',
    icon: '📜',
  },
  {
    title: 'Incident response support',
    description: 'Fast, expert-led remediation and forensic support to contain breaches and restore trust after an event.',
    icon: '🚨',
  },
];

export default function Feature() {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <div className="feature-intro">
          <span className="feature-eyebrow">Core capabilities</span>
          <h2 className="feature-title">Built for secure blockchain growth</h2>
          <p className="feature-copy">
            Everything teams need to move confidently in Web3 — from audit-ready code to governance and compliance assurance.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((item) => (
            <article key={item.title} className="feature-card">
              <div className="feature-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
