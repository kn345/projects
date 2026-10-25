import { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const TABS = ['Overview', 'Process', 'Outcome'];

// Tabs act as scroll anchors into one continuous page — clicking a tab
// smooth-scrolls to that section, but the page still reads fine as a
// normal scroll if someone ignores the tabs entirely.
export default function CaseStudyLayout({ title, subtitle, meta, facts, slug, children }) {
  const [active, setActive] = useState('Overview');

  const index = caseStudies.findIndex((cs) => cs.slug === slug);
  const prevCS = index > 0 ? caseStudies[index - 1] : null;
  const nextCS = index >= 0 && index < caseStudies.length - 1 ? caseStudies[index + 1] : null;

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <article>
      <header className="section" style={{ paddingBottom: 'var(--space-md)' }}>
        <div className="container">
          <h1>{title}</h1>
          {subtitle && <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px' }}>{subtitle}</p>}
          {meta && (
            <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', fontSize: 'var(--fs-small)' }}>
              {meta}
            </p>
          )}
          {facts && (
            <dl className="case-facts-grid">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  {Array.isArray(f.value) ? (
                    <dd>
                      <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                        {f.value.map((line) => (
                          <li key={line} style={{ marginBottom: '0.2rem' }}>{line}</li>
                        ))}
                      </ul>
                    </dd>
                  ) : (
                    <dd>{f.value}</dd>
                  )}
                </div>
              ))}
            </dl>
          )}
        </div>
      </header>

      <nav
        style={{
          position: 'sticky',
          top: 0,
          background: 'var(--color-bg)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          zIndex: 10,
        }}
      >
        <div className="container" style={{ display: 'flex', gap: '1.5rem', padding: '0.75rem var(--space-md)' }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => scrollTo(t)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontSize: 'var(--fs-small)',
                fontFamily: 'var(--font-body)',
                color: active === t ? 'var(--color-sage-dark)' : 'var(--color-text)',
                fontWeight: active === t ? 600 : 400,
                borderBottom: active === t ? '2px solid var(--color-sage-dark)' : '2px solid transparent',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </nav>

      <div className="container" style={{ paddingTop: 'var(--space-lg)', paddingBottom: 'var(--space-xl)' }}>
        {children}
      </div>

      {(prevCS || nextCS) && (
        <div
          className="container"
          style={{
            borderTop: '1px solid var(--color-border)',
            padding: 'var(--space-lg) var(--space-md)',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {prevCS ? (
            <Link to={`/work/${prevCS.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="case-nav-label">← Previous</p>
              <p className="case-nav-title">{prevCS.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {nextCS && (
            <Link to={`/work/${nextCS.slug}`} style={{ textDecoration: 'none', color: 'inherit', textAlign: 'right' }}>
              <p className="case-nav-label">Next →</p>
              <p className="case-nav-title">{nextCS.title}</p>
            </Link>
          )}
        </div>
      )}
    </article>
  );
}

export function Placeholder({ label }) {
  return (
    <div
      style={{
        border: '1px dashed var(--color-border)',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-md)',
        color: 'var(--color-text-muted)',
        fontSize: 'var(--fs-small)',
        marginBottom: 'var(--space-md)',
        background: 'var(--color-bg-alt)',
      }}
    >
      {label}
    </div>
  );
}
