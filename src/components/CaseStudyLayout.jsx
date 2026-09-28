import { useState } from 'react';

const TABS = ['Overview', 'Process', 'Outcome'];

// Tabs act as scroll anchors into one continuous page — clicking a tab
// smooth-scrolls to that section, but the page still reads fine as a
// normal scroll if someone ignores the tabs entirely.
export default function CaseStudyLayout({ title, subtitle, meta, children }) {
  const [active, setActive] = useState('Overview');

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
