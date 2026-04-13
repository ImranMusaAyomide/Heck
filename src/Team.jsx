import "./Team.css";

const leadership = [
  {
    id: "yevheniia",
    name: "Yevheniia Broshevan",
    role: "Co-founder & CEO",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    links: { x: "#", linkedin: "#" },
    featured: true,
  },
  {
    id: "dyma",
    name: "Dyma Budorin",
    role: "Co-founder & Chairman, HAI Group CEO",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    links: { x: "#", linkedin: "#" },
  },
  {
    id: "andrii",
    name: "Andrii Matiukhin",
    role: "Co-founder and CSO",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    links: { linkedin: "#" },
  },
];

const directors = [
  {
    id: "igor",
    name: "Igor Bershadskiy",
    role: "Chief Growth Officer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    links: { linkedin: "#" },
  },
  {
    id: "anna",
    name: "Anna Turok",
    role: "VP of Operations",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    links: { linkedin: "#" },
  },
  {
    id: "grzegorz",
    name: "Grzegorz Trawinski",
    role: "Offensive Security Services Director",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    links: { linkedin: "#" },
  },
  {
    id: "kostiantyn",
    name: "Kostiantyn Harniuk",
    role: "Client Relationship and Partnership Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    links: { x: "#", linkedin: "#" },
  },
  {
    id: "svitlana",
    name: "Svitlana Diachenko",
    role: "Marketing Director",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    links: { x: "#", linkedin: "#" },
  },
  {
    id: "denys",
    name: "Denys Ivanov",
    role: "Chief Product Officer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    links: { linkedin: "#" },
  },
];

function SocialLinks({ links }) {
  return (
    <div className="team-links">
      {links.x && (
        <a href={links.x} className="team-link" onClick={(e) => e.stopPropagation()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/>
          </svg>
        </a>
      )}
      {links.linkedin && (
        <a href={links.linkedin} className="team-link" onClick={(e) => e.stopPropagation()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          <span>LinkedIn</span>
        </a>
      )}
    </div>
  );
}

function MemberCard({ member, size = "sm" }) {
  return (
    <div className={`team-card team-card--${size}`}>
      <div className="team-photo-wrap">
        <img src={member.img} alt={member.name} className="team-photo" loading="lazy" />
      </div>
      <div className="team-info">
        <p className="team-name">{member.name}</p>
        <p className="team-role">{member.role}</p>
        <SocialLinks links={member.links} />
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="team-section">
      <div className="team-inner">
        {/* Heading */}
        <h2 className="team-heading">Meet our leadership team</h2>

        {/* Row 1: founders — first card is larger */}
        <div className="team-row team-row--founders">
          {leadership.map((m) => (
            <MemberCard key={m.id} member={m} size={m.featured ? "lg" : "md"} />
          ))}
        </div>

        {/* Row 2: directors + aside blurb */}
        <div className="team-row team-row--directors">
          <div className="team-directors-grid">
            {directors.map((m) => (
              <MemberCard key={m.id} member={m} size="sm" />
            ))}
          </div>

          {/* Side blurb */}
          <aside className="team-aside">
            <p className="team-aside-text">
              Since 2017, <strong>Hacken has grown into a leader in blockchain security &amp; compliance</strong>, evolving alongside the industry and proactively shaping it.
            </p>
            <p className="team-aside-text">
              Today, we help regulators and industry organizations to <strong>develop security frameworks and define best practices.</strong>
            </p>
            <a href="#about" className="team-about-btn">
              About Hacken <span>→</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}