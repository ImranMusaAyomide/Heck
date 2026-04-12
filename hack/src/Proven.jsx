import { useState } from "react";
import "./Proven.css";

const categories = [
  {
    id: "regulators",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    label: "Industry regulators & organizations",
    logos: [
      { name: "ADGM", text: "ADGM", style: "text-logo" },
      { name: "Dubai Blockchain Center", text: "DUBAI BLOCKCHAIN CENTER", style: "text-logo small" },
      { name: "DMCC", text: "DMCC", style: "text-logo" },
      { name: "European Blockchain Sandbox", text: "European Blockchain Sandbox", style: "text-logo small" },
      { name: "Incheon Metropolitan City", text: "인천광역시", style: "text-logo" },
      { name: "EBSI", text: "ebsi", style: "text-logo accent" },
      { name: "Ethereum Foundation", text: "ethereum foundation", style: "text-logo" },
      { name: "INATA", text: "IN ATA", style: "text-logo boxed" },
      { name: "The Digital Chamber", text: "THE DIGITAL CHAMBER", style: "text-logo bold" },
    ],
  },
  {
    id: "tradfi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    label: "TradFI & DeFI",
    logos: [
      { name: "Nubank", text: "nu bank", style: "text-logo" },
      { name: "NYM6", text: "nym6", style: "text-logo" },
      { name: "FORGE", text: "FORGE", style: "text-logo bold" },
      { name: "1inch", text: "1inch", style: "text-logo" },
      { name: "Dexalot", text: "DEXALOT", style: "text-logo" },
      { name: "Kyber Network", text: "kyber network", style: "text-logo" },
      { name: "Thena", text: "THENA", style: "text-logo" },
      { name: "MetaMask", text: "MetaMask", style: "text-logo" },
      { name: "Uniswap", text: "UNISWAP", style: "text-logo accent" },
    ],
  },
  {
    id: "layer1",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
        <line x1="12" y1="22" x2="12" y2="15.5"/>
        <polyline points="22 8.5 12 15.5 2 8.5"/>
      </svg>
    ),
    label: "Layer 1 protocols",
    logos: [
      { name: "NEAR", text: "NEAR", style: "text-logo" },
      { name: "Radix", text: "RADIX", style: "text-logo" },
      { name: "VeChain", text: "V vechain", style: "text-logo" },
      { name: "Solana", text: "SOLANA", style: "text-logo bold" },
      { name: "Avalanche", text: "AVALANCHE", style: "text-logo" },
      { name: "Sui", text: "Sui", style: "text-logo" },
      { name: "BNB Chain", text: "BNB CHAIN", style: "text-logo" },
      { name: "TON", text: "TON", style: "text-logo" },
      { name: "QAN", text: "QAN", style: "text-logo bold large" },
    ],
  },
  {
    id: "layer2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    label: "Layer 2 scaling solutions",
    logos: [
      { name: "Polygon", text: "polygon", style: "text-logo accent" },
      { name: "Linea", text: "Linea", style: "text-logo" },
      { name: "Metis", text: "METIS", style: "text-logo" },
      { name: "Bitlayer", text: "Bitlayer", style: "text-logo" },
      { name: "Aurora", text: "AURORA", style: "text-logo" },
      { name: "Arbitrum", text: "ARBITRUM", style: "text-logo" },
      { name: "zkSync", text: "zkSync", style: "text-logo" },
      { name: "Soneium", text: "Soneium", style: "text-logo" },
      { name: "Base", text: "■ base", style: "text-logo bold" },
    ],
  },
  {
    id: "cex",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    label: "Centralized exchanges",
    logos: [
      { name: "Binance", text: "Binance", style: "text-logo accent" },
      { name: "OKX", text: "OKX", style: "text-logo bold" },
      { name: "Kraken", text: "KRAKEN", style: "text-logo" },
      { name: "Bybit", text: "bybit", style: "text-logo" },
      { name: "Gate.io", text: "Gate.io", style: "text-logo" },
      { name: "KuCoin", text: "KuCoin", style: "text-logo" },
      { name: "Bitfinex", text: "Bitfinex", style: "text-logo" },
      { name: "HTX", text: "HTX", style: "text-logo" },
      { name: "MEXC", text: "MEXC", style: "text-logo bold" },
    ],
  },
];

export default function Proven() {
  const [activeRow, setActiveRow] = useState(null);

  return (
    <section className="proven-section">
      <div className="proven-header">
        <h2 className="proven-title">
          Proven security expertise for{" "}
          <span className="proven-title-highlight">DLT innovation</span>
          <br />
          and crypto regulation
        </h2>
        <div className="proven-title-bar" />
      </div>

      <div className="proven-table">
        {categories.map((cat, i) => (
          <div
            key={cat.id}
            className={`proven-row ${activeRow === i ? "active" : ""}`}
            onMouseEnter={() => setActiveRow(i)}
            onMouseLeave={() => setActiveRow(null)}
            style={{ "--row-index": i }}
          >
            <div className="proven-category">
              <span className="proven-category-icon">{cat.icon}</span>
              <span className="proven-category-label">{cat.label}</span>
            </div>
            <div className="proven-logos">
              {cat.logos.map((logo, j) => (
                <div
                  key={logo.name}
                  className={`proven-logo-cell ${logo.style}`}
                  title={logo.name}
                  style={{ "--logo-index": j }}
                >
                  <span className="proven-logo-text">{logo.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}