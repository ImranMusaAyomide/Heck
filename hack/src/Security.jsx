import "./Security.css";

const articles = [
  {
    id: "bybit",
    title: "Bybit Wins MiCAR License With Hacken's Security Evidence",
    date: "Jun 11, 2025",
    readTime: "2 min.",
    href: "#bybit",
    bgColor: "#ece9e1",
    logo: (
      <div className="article-logo article-logo--bybit">
        <span className="bybit-text">
          BYB<span className="bybit-accent">I</span>T
        </span>
      </div>
    ),
  },
  {
    id: "ebsi",
    title: "EBSI Smart Contracts Audited: EU Blockchain Proven Secure",
    date: "Sep 11, 2023",
    readTime: "7 min.",
    href: "#ebsi",
    bgColor: "#e4e6f5",
    logo: (
      <div className="article-logo article-logo--ebsi">
        <svg viewBox="0 0 120 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="ebsi-svg">
          <g transform="translate(0,4)">
            <path d="M28 22 C28 14 20 8 12 12 C4 16 2 26 8 32 C14 38 24 36 28 28" stroke="url(#g1)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            <path d="M10 20 C10 12 18 6 26 10 C34 14 36 24 30 30 C24 36 14 34 10 26" stroke="url(#g2)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#e05bb0"/>
                <stop offset="100%" stopColor="#5ba8e0"/>
              </linearGradient>
              <linearGradient id="g2" x1="30" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5ba8e0"/>
                <stop offset="100%" stopColor="#a05be0"/>
              </linearGradient>
            </defs>
          </g>
          <text x="44" y="30" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="22" fill="#1a1a2e" letterSpacing="-0.5">ebsi</text>
          <text x="44" y="42" fontFamily="'DM Sans', sans-serif" fontWeight="400" fontSize="9" fill="#6666aa" letterSpacing="0.5">European Blockchain</text>
        </svg>
      </div>
    ),
  },
  {
    id: "teal",
    title: "How Hacken Secured a Leading DeFi Protocol",
    date: "Mar 4, 2025",
    readTime: "4 min.",
    href: "#teal",
    bgColor: "#d8eee9",
    logo: (
      <div className="article-logo article-logo--teal">
        <svg viewBox="0 0 80 60" fill="none" className="teal-svg">
          {[0,1,2,3,4].map((i) => (
            <ellipse key={i} cx={16 + i * 12} cy="30" rx="10" ry="16" stroke="rgba(30,140,110,0.35)" strokeWidth="1.5" fill="none"/>
          ))}
          <ellipse cx="40" cy="30" rx="10" ry="16" stroke="rgba(30,140,110,0.7)" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    ),
  },
  {
    id: "pink",
    title: "MiCA Compliance Playbook: Lessons from 3 Crypto Firms",
    date: "Jan 22, 2025",
    readTime: "5 min.",
    href: "#pink",
    bgColor: "#f5dde0",
    logo: (
      <div className="article-logo article-logo--pink">
        <svg viewBox="0 0 100 60" fill="none" className="pink-svg">
          {[
            { cx: 18, h: 28 },
            { cx: 34, h: 40 },
            { cx: 50, h: 18 },
            { cx: 66, h: 44 },
            { cx: 82, h: 30 },
          ].map((bar, i) => (
            <g key={i}>
              <rect x={bar.cx - 7} y={60 - bar.h} width="14" height={bar.h} rx="7" fill="rgba(190,80,100,0.22)"/>
              <circle cx={bar.cx} cy={60 - bar.h - 8} r="7" stroke="rgba(190,80,100,0.55)" strokeWidth="1.5" fill="none"/>
            </g>
          ))}
        </svg>
      </div>
    ),
  },
];

export default function Security() {
  return (
    <section className="security-section">
      <h2 className="security-heading">Security &amp; compliance partnership in action</h2>
      <div className="security-grid">
        {articles.map((article) => (
          <a key={article.id} href={article.href} className="article-card">
            <div className="article-thumb" style={{ background: article.bgColor }}>
              {article.logo}
            </div>
            <div className="article-body">
              <h3 className="article-title">{article.title}</h3>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-sep" />
                <span className="article-read">{article.readTime}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}