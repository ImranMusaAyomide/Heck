import React from 'react';
import Header from './Header';

export default function Audit() {
  return (
    <section className="audit-section">
      <Header />
      <div className="audit-content">
        <p>
          Our audit service combines automated analysis with expert manual review to uncover critical vulnerabilities,
          ensure regulatory alignment, and strengthen your system before launch.
        </p>
      </div>
    </section>
  );
}
