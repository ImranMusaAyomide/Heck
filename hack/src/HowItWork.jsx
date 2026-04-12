import './HowItWork.css';

const STEPS = [
  {
    step: '1',
    title: 'Discovery',
    description: 'Gather project details, threat models, and goals to tailor audit coverage for your specific blockchain stack.',
    icon: '🔍',
  },
  {
    step: '2',
    title: 'Analysis',
    description: 'Inspect smart contracts, infrastructure, and integrations using automated tools and manual expert review.',
    icon: '🧠',
  },
  {
    step: '3',
    title: 'Verification',
    description: 'Validate fixes with follow-up penetration tests and security checks to ensure vulnerabilities are fully remediated.',
    icon: '✅',
  },
  {
    step: '4',
    title: 'Launch',
    description: 'Deploy with confidence and continue monitoring with a roadmap for security, compliance, and future updates.',
    icon: '🚀',
  },
];

export default function HowItWork() {
  return (
    <section className="howitwork-section">
      <div className="howitwork-inner">
        <div className="howitwork-header">
          <span className="howitwork-eyebrow">How it works</span>
          <h2>Secure deployment in four easy steps</h2>
          <p>
            We break the process down into clear milestones so teams can move forward with visibility, speed, and confidence.
          </p>
        </div>

        <div className="howitwork-grid">
          {STEPS.map((item) => (
            <article key={item.step} className="howitwork-card">
              <div className="howitwork-badge">{item.icon}</div>
              <span className="howitwork-step-label">Step {item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
