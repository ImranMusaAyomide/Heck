import './HowItWork.css';
import { Search, Brain, ShieldCheck, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '1',
    title: 'Discovery',
    description: 'Gather project details, threat models, and goals to tailor audit coverage for your specific blockchain stack.',
    icon: Search,
  },
  {
    step: '2',
    title: 'Analysis',
    description: 'Inspect smart contracts, infrastructure, and integrations using automated tools and manual expert review.',
    icon: Brain,
  },
  {
    step: '3',
    title: 'Verification',
    description: 'Validate fixes with follow-up penetration tests and security checks to ensure vulnerabilities are fully remediated.',
    icon: ShieldCheck,
  },
  {
    step: '4',
    title: 'Launch',
    description: 'Deploy with confidence and continue monitoring with a roadmap for security, compliance, and future updates.',
    icon: Rocket,
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
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.step} className="howitwork-card">
                <div className="howitwork-badge"><Icon size={24} /></div>
                <span className="howitwork-step-label">Step {item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
