import "./Card.css";

const cards = [
  {
    id: "audit",
    size: "large",
    title: "Audit smart contracts",
    description: "Uncover logic flaws and on-chain risks with MiCA-ready reports.",
    href: "#audit",
    visual: (
      <div className="card-visual card-visual--audit">
        <div className="cube" />
        <div className="lens" />
        <div className="code-lines">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="code-line" style={{ "--i": i }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "pentest",
    size: "small",
    title: "Pen-test your full stack",
    description: "Simulate real attacks across web, mobile, APIs, cloud, and infrastructure.",
    href: "#pentest",
    visual: (
      <div className="card-visual card-visual--pentest">
        <div className="radar">
          <div className="radar-ring" style={{ "--s": 1 }} />
          <div className="radar-ring" style={{ "--s": 2 }} />
          <div className="radar-ring" style={{ "--s": 3 }} />
          <div className="radar-sweep" />
          {[
            { x: 38, y: 28 },
            { x: 62, y: 55 },
            { x: 25, y: 60 },
            { x: 70, y: 30 },
          ].map((dot, i) => (
            <div
              key={i}
              className="radar-dot"
              style={{ left: `${dot.x}%`, top: `${dot.y}%`, "--d": i }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "protocol",
    size: "small",
    title: "Secure your protocol end-to-end",
    description: "Scrutinise every layer of your protocol to remove critical exploits.",
    href: "#protocol",
    visual: (
      <div className="card-visual card-visual--protocol">
        <div className="shield">
          <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40 5 L72 18 L72 48 C72 68 57 82 40 88 C23 82 8 68 8 48 L8 18 Z"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="shield-path"
            />
            <path
              d="M40 20 L58 28 L58 48 C58 60 50 69 40 73 C30 69 22 60 22 48 L22 28 Z"
              strokeWidth="1"
              strokeLinejoin="round"
              className="shield-inner"
            />
            <path
              d="M30 44 L37 51 L52 36"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shield-check"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: "compliance",
    size: "large",
    title: "Navigate compliance",
    description:
      "Translate MiCA, DORA, VARA, and more into controls, evidence, and fast remediation.",
    href: "#compliance",
    visual: (
      <div className="card-visual card-visual--compliance">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="blade"
            style={{
              "--angle": `${i * 40}deg`,
              "--hue": i % 2 === 0 ? "var(--blade-a)" : "var(--blade-b)",
              "--idx": i,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "reserves",
    size: "large",
    title: "Prove reserves on demand",
    description: "Cryptographic proofs of user deposits that earn regulatory trust.",
    href: "#reserves",
    visual: (
      <div className="card-visual card-visual--reserves">
        <div className="vault-cube">
          <div className="vault-face vault-front">
            <div className="vault-dial" />
            <div className="vault-handle" />
            <div className="vault-grid">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="vault-bar" style={{ "--vi": i }} />
              ))}
            </div>
          </div>
        </div>
        <div className="vault-shadow" />
      </div>
    ),
  },
  {
    id: "monitor",
    size: "large",
    title: "Monitor on-chain threats",
    description: "24/7 AI-powered detection and auto-pause for critical on-chain exploits.",
    href: "#monitor",
    link: { label: "Extractor", href: "#extractor" },
    visual: (
      <div className="card-visual card-visual--monitor">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="shard"
            style={{ "--si": i }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "dualdefense",
    size: "large",
    title: "Add extra security layer",
    description:
      "Combine Hacken services with crowdsourced audits, backed by the Hacken community.",
    href: "#dualdefense",
    link: { label: "DualDefense", href: "#dualdefense-product" },
    visual: (
      <div className="card-visual card-visual--dualdefense">
        <div className="orbit-cube" />
        <div className="orbit-ring orbit-ring--1" />
        <div className="orbit-ring orbit-ring--2" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="orbit-node" style={{ "--oi": i }} />
        ))}
      </div>
    ),
  },
  {
    id: "bugbounty",
    size: "large",
    title: "Run bug bounties",
    description:
      "Have your code base reviewed by 45k trusted researchers, pay only for verified findings.",
    href: "#bugbounty",
    link: { label: "HackenProof", href: "#hackenproof" },
    visual: (
      <div className="card-visual card-visual--bugbounty">
        <div className="bounty-cube">
          <div className="bounty-face" />
          <div className="bounty-stripe" style={{ "--bi": 0 }} />
          <div className="bounty-stripe" style={{ "--bi": 1 }} />
          <div className="bounty-stripe" style={{ "--bi": 2 }} />
        </div>
        <div className="bounty-base" />
      </div>
    ),
  },
];

const firstRow = cards.slice(0, 4);
const secondRow = cards.slice(4);

function CardItem({ card }) {
  return (
    <a href={card.href} className={`card card--${card.size} card--${card.id}`}>
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-desc">{card.description}</p>
        {card.link && (
          <a href={card.link.href} className="card-link" onClick={(e) => e.stopPropagation()}>
            {card.link.label}
          </a>
        )}
      </div>
      {card.visual}
      <div className="card-arrow">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  );
}

export default function Cards() {
  return (
    <section className="cards-section">
      <div className="cards-grid">
        {firstRow.map((card) => <CardItem key={card.id} card={card} />)}
      </div>
      <div className="cards-grid cards-grid--second">
        {secondRow.map((card) => <CardItem key={card.id} card={card} />)}
      </div>
    </section>
  );
}