import "./Footer.css";

const audits = [
  "Smart Contract Audit",
  "Blockchain Protocol Audit",
  "dApp Audit",
  "Penetration Testing",
  "Tokenomics Audit",
  "Proof of Reserves Audit",
];

const extended = [
  "DualDefense",
  "Retainer Services",
  "Hacken Extractor",
  "HackenProof Bug Bounty",
];

const compliance = ["DORA", "VARA", "CCSS", "vCISO"];

const company = [
  { label: "About", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Brand Assets", href: "#" },
];

const companyRight = [
  { label: "Partners", href: "#" },
  { label: "$HAI", href: "#" },
];

const chainIcons = [
  /* Ethereum */ (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35zm.056-22L4.58 12.35l7.42 4.38 7.42-4.38L12 -0.03z" opacity=".6"/><path d="M12 -0.03v10.66l7.42 3.71L12 -0.03zm0 24v-7.38l-7.42-4.35L12 23.97z" opacity=".45"/><path d="M12 10.63v6.72l7.42-4.35L12 10.63z" opacity=".8"/></svg>
  ),
  /* Generic chain icon */ (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="12" r="3"/><circle cx="15" cy="12" r="3"/></svg>
  ),
  /* Code */ (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  /* N */ (
    <svg viewBox="0 0 24 24" fill="currentColor"><text x="4" y="18" fontSize="16" fontWeight="800" fontFamily="sans-serif">N</text></svg>
  ),
  /* Lines */ (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
  ),
  /* Stack */ (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>
  ),
  /* Target */ (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  /* Diamond */ (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l8 8-8 12-8-12 8-8z"/></svg>
  ),
  /* A */ (
    <svg viewBox="0 0 24 24" fill="currentColor"><text x="5" y="18" fontSize="16" fontWeight="700" fontFamily="sans-serif">A</text></svg>
  ),
  /* Hexagon */ (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"/></svg>
  ),
  /* Orbit */ (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>
  ),
  /* Wave */ (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/></svg>
  ),
];

const socialIcons = [
  {
    id: "x",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/>
      </svg>
    ),
  },
  {
    id: "telegram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
      </svg>
    ),
  },
  {
    id: "discord",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
      </svg>
    ),
  },
  {
    id: "linkedin",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    id: "sparkle",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6L12 17.2l-6.2 4.5 2.4-7.6L2 9.6h7.6z"/>
      </svg>
    ),
  },
];

const products = [
  { id: "cbr", label: "CBR TIFIED" },
  { id: "trustArmy", label: "TRUST ARMY" },
  { id: "extractor", label: "EXTRACTOR" },
  { id: "hackenProof", label: "HackenProof" },
];

const legalLinks = [
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        {/* ── Services ── */}
        <div className="footer-services">
          <h4 className="footer-col-heading">Services</h4>
          <div className="footer-services-cols">
            <div className="footer-col">
              <p className="footer-col-sub">Audits</p>
              {audits.map((l) => <a key={l} href="#" className="footer-link">{l}</a>)}
            </div>
            <div className="footer-col">
              <p className="footer-col-sub">Extended Security Coverage</p>
              {extended.map((l) => <a key={l} href="#" className="footer-link">{l}</a>)}
            </div>
            <div className="footer-col">
              <p className="footer-col-sub">Compliance &amp; Advisory</p>
              {compliance.map((l) => <a key={l} href="#" className="footer-link">{l}</a>)}
            </div>
          </div>
        </div>

        {/* ── Company ── */}
        <div className="footer-company">
          <h4 className="footer-col-heading">Company</h4>
          <div className="footer-company-cols">
            <div className="footer-col">
              {company.map((l) => <a key={l.label} href={l.href} className="footer-link">{l.label}</a>)}
            </div>
            <div className="footer-col">
              {companyRight.map((l) => <a key={l.label} href={l.href} className="footer-link">{l.label}</a>)}
            </div>
          </div>
        </div>

        {/* ── Right: copyright + legal + cert + social ── */}
        <div className="footer-right">
          <p className="footer-copy">© 2025 Hacken.io All rights reserved.</p>
          <div className="footer-legal">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="footer-legal-link">{l.label}</a>
            ))}
          </div>
          {/* Swiss cert badge */}
          <div className="footer-cert">
            <svg viewBox="0 0 80 38" fill="none" className="footer-cert-svg">
              <rect x="1" y="1" width="78" height="36" rx="4" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <text x="8" y="12" fontFamily="sans-serif" fontSize="5.5" fill="rgba(255,255,255,0.5)" letterSpacing="1">BUREAU</text>
              <text x="8" y="21" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="rgba(255,255,255,0.85)" letterSpacing="0.5">SWISS</text>
              <line x1="8" y1="24" x2="72" y2="24" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5"/>
              <text x="8" y="33" fontFamily="sans-serif" fontSize="7" fontWeight="700" fill="rgba(255,255,255,0.7)" letterSpacing="0.3">CERT</text>
              <text x="40" y="33" fontFamily="sans-serif" fontSize="4.5" fill="rgba(255,255,255,0.35)">ISO 27001:2022 Certified</text>
            </svg>
          </div>
          {/* Social icons */}
          <div className="footer-social">
            {socialIcons.map((s) => (
              <a key={s.id} href={s.href} className="footer-social-icon" aria-label={s.id}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tagline + chain icons ── */}
      <div className="footer-chains">
        <p className="footer-tagline">Securing Web3 projects across ecosystems &amp; languages since 2017.</p>
        <div className="footer-chain-icons">
          {chainIcons.map((icon, i) => (
            <span key={i} className="footer-chain-icon">{icon}</span>
          ))}
          <span className="footer-chain-divider" />
          <span className="footer-chain-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="8"/><path d="M9 12l2 2 4-4"/></svg>
          </span>
          <span className="footer-chain-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </span>
          <span className="footer-chain-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
          </span>
        </div>
      </div>

      {/* ── Product bar ── */}
      <div className="footer-products">
        {products.map((p) => (
          <div key={p.id} className="footer-product">
            <span className="footer-product-label">{p.label}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}