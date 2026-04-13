import "./Active.css";

/* ── Members logos ── */
const members = [
  {
    id: "c4",
    logo: (
      <div className="logo-c4">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="6" fill="#FF6B35"/>
          <path d="M8 8h8l-4 6h6l-8 8 2-7H8l3-7z" fill="white"/>
        </svg>
        <span className="logo-c4-text">C4</span>
      </div>
    ),
  },
  {
    id: "inata",
    logo: (
      <div className="logo-box">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
          <rect width="46" height="46" fill="#1a1a1a"/>
          <text x="7" y="18" fontFamily="'DM Sans',sans-serif" fontSize="9" fontWeight="700" fill="white" letterSpacing="1">IN</text>
          <line x1="7" y1="22" x2="39" y2="22" stroke="white" strokeWidth="0.8"/>
          <text x="7" y="33" fontFamily="'DM Sans',sans-serif" fontSize="9" fontWeight="700" fill="white" letterSpacing="1">AT</text>
          <line x1="7" y1="37" x2="39" y2="37" stroke="white" strokeWidth="0.8"/>
          <text x="30" y="18" fontFamily="'DM Sans',sans-serif" fontSize="9" fontWeight="700" fill="white">A</text>
          <text x="30" y="33" fontFamily="'DM Sans',sans-serif" fontSize="9" fontWeight="700" fill="white">B</text>
        </svg>
      </div>
    ),
  },
  {
    id: "eea",
    logo: (
      <div className="logo-eea">
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <polygon points="10,1 19,6 19,16 10,21 1,16 1,6" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
          <polygon points="10,5 15,8 15,14 10,17 5,14 5,8" stroke="#1a1a1a" strokeWidth="0.8" fill="none"/>
        </svg>
        <div className="logo-eea-text">
          <span className="eea-small">ENTERPRISE</span>
          <span className="eea-large">ETHEREUM</span>
          <span className="eea-small">ALLIANCE</span>
        </div>
      </div>
    ),
  },
  {
    id: "cv",
    logo: (
      <div className="logo-cv">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="8" stroke="#e03030" strokeWidth="1.2" fill="none"/>
          <circle cx="9" cy="9" r="4" stroke="#e03030" strokeWidth="1.2" fill="none"/>
          <circle cx="9" cy="9" r="1.5" fill="#e03030"/>
        </svg>
        <span className="logo-cv-text">Crypto Valley</span>
      </div>
    ),
  },
  {
    id: "erc3643",
    logo: (
      <div className="logo-erc">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
          <path d="M9 1L17 5.5V14.5L9 19L1 14.5V5.5L9 1Z" fill="#4e90d4" fillOpacity="0.2" stroke="#4e90d4" strokeWidth="1.2"/>
          <path d="M9 5L13 7.5V12.5L9 15L5 12.5V7.5L9 5Z" fill="#4e90d4" fillOpacity="0.4"/>
        </svg>
        <span className="logo-erc-text">ERC3643</span>
      </div>
    ),
  },
  {
    id: "code",
    logo: (
      <span className="logo-code">code_</span>
    ),
  },
  {
    id: "ebs",
    logo: (
      <div className="logo-ebs">
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <path d="M1 4L11 1L21 4M1 9L11 6L21 9M1 14L11 11L21 14" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <div className="logo-ebs-text">
          <span>European</span>
          <span>Blockchain</span>
          <span>Sandbox</span>
        </div>
      </div>
    ),
  },
  {
    id: "adgm",
    logo: (
      <div className="logo-adgm">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
          <path d="M2 9 C2 9 5 3 8 9 C11 15 14 3 17 9 C20 15 22 9 22 9" stroke="#2d7dd2" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
        <span className="logo-adgm-text">ADGM</span>
      </div>
    ),
  },
  {
    id: "dubai",
    logo: (
      <div className="logo-dubai">
        <svg width="72" height="38" viewBox="0 0 72 38" fill="none">
          <rect x="1" y="1" width="70" height="36" rx="3" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
          <text x="6" y="13" fontFamily="'DM Sans',sans-serif" fontSize="7.5" fontWeight="700" fill="#1a1a1a" letterSpacing="0.3">DUBAI</text>
          <line x1="6" y1="16" x2="66" y2="16" stroke="#1a1a1a" strokeWidth="0.7"/>
          <text x="6" y="25" fontFamily="'DM Sans',sans-serif" fontSize="7.5" fontWeight="700" fill="#1a1a1a" letterSpacing="0.3">BLOCK</text>
          <svg x="38" y="17" width="10" height="10" viewBox="0 0 10 10">
            <path d="M5 1L9 3.5V6.5L5 9L1 6.5V3.5Z" fill="none" stroke="#1a1a1a" strokeWidth="1"/>
          </svg>
          <text x="48" y="25" fontFamily="'DM Sans',sans-serif" fontSize="7.5" fontWeight="700" fill="#1a1a1a" letterSpacing="0.3">CHAIN</text>
          <line x1="6" y1="28" x2="66" y2="28" stroke="#1a1a1a" strokeWidth="0.7"/>
          <text x="6" y="36" fontFamily="'DM Sans',sans-serif" fontSize="7.5" fontWeight="700" fill="#1a1a1a" letterSpacing="0.3">CENTER</text>
        </svg>
      </div>
    ),
  },
];

/* ── Partnership cards ── */
const partners = [
  {
    id: "adgm",
    bg: "#eaf2fb",
    description: "MoU to draft DLT security–compliance standards",
    logo: (
      <div className="partner-logo-adgm">
        <svg width="22" height="16" viewBox="0 0 24 18" fill="none">
          <path d="M2 9 C2 9 5 3 8 9 C11 15 14 3 17 9 C20 15 22 9 22 9" stroke="#2d7dd2" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        </svg>
        <span>ADGM</span>
      </div>
    ),
  },
  {
    id: "qfc",
    bg: "#f5f5f5",
    description: "Technical partner shaping Web3 oversight",
    logo: (
      <div className="partner-logo-qfc">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          {[...Array(7)].map((_, i) => (
            <circle key={i} cx="19" cy="19" r={4 + i * 2.2} stroke="#888" strokeWidth="0.7" fill="none" strokeDasharray={`${1 + i * 0.3} ${1.5 + i * 0.2}`}/>
          ))}
          <circle cx="19" cy="19" r="3" fill="#aaa"/>
        </svg>
        <div className="qfc-text">
          <span className="qfc-arabic">مركز قطر للمال</span>
          <span className="qfc-en">Qatar Financial Centre</span>
        </div>
      </div>
    ),
  },
  {
    id: "ebs",
    bg: "#f5f5f5",
    description: "Advising MiCA & DORA best–practice mapping",
    logo: (
      <div className="partner-logo-ebs">
        <svg width="20" height="16" viewBox="0 0 22 18" fill="none">
          <path d="M1 4L11 1L21 4M1 9L11 6L21 9M1 14L11 11L21 14" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <div className="ebs-text">
          <span>European</span>
          <span>Blockchain</span>
          <span>Sandbox</span>
        </div>
      </div>
    ),
  },
];

export default function Active() {
  return (
    <div className="active-wrapper">

      {/* ── Section 1: Members ── */}
      <section className="active-section active-members">
        <h2 className="active-heading">
          Active member of global Web3 and security bodies
        </h2>
        <div className="members-grid">
          {members.map((m) => (
            <div key={m.id} className="member-logo">
              {m.logo}
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Co-creating ── */}
      <section className="active-section active-cocreating">
        <h2 className="active-heading">
          Co–creating security standards with leading authorities worldwide
        </h2>
        <div className="partners-grid">
          {partners.map((p) => (
            <div key={p.id} className="partner-card" style={{ background: p.bg }}>
              <div className="partner-logo-wrap">{p.logo}</div>
              <p className="partner-desc">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}