// Shared building blocks for case study pages, modeled on patterns from
// Nicole Roberts' case studies: a small uppercase section pill, bordered
// "info card" boxes for calling out a need/insight without burying it in a
// paragraph, a tinted full-bleed callout band for punctuating a key
// statement, and a labeled strip for showing design iterations side by side.

export function SectionLabel({ children }) {
  return (
    <span
      style={{
        display: 'inline-block',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontSize: 'var(--fs-small)',
        fontWeight: 600,
        color: 'var(--color-sage-dark)',
        background: 'var(--color-bg-alt)',
        border: '1px solid var(--color-border)',
        borderRadius: '999px',
        padding: '0.35rem 0.9rem',
        marginBottom: '0.75rem',
      }}
    >
      {children}
    </span>
  );
}

export function InfoCard({ label, children }) {
  return (
    <div
      style={{
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-md)',
        marginBottom: '1rem',
      }}
    >
      {label && (
        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontSize: 'var(--fs-small)',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            marginBottom: '0.5rem',
          }}
        >
          {label}
        </p>
      )}
      <div style={{ margin: 0 }}>{children}</div>
    </div>
  );
}

export function InfoCardGrid({ children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1rem',
        margin: '1.5rem 0',
      }}
    >
      {children}
    </div>
  );
}

export function Callout({ label, children }) {
  return (
    <div
      style={{
        background: 'var(--color-bg-alt)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-lg)',
        margin: '2rem 0',
      }}
    >
      {label && <SectionLabel>{label}</SectionLabel>}
      <p
        style={{
          fontSize: 'var(--fs-h2)',
          fontWeight: 700,
          color: 'var(--color-text)',
          margin: 0,
          maxWidth: '760px',
        }}
      >
        {children}
      </p>
    </div>
  );
}

export function IterationStrip({ items }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, minmax(160px, 1fr))`,
        gap: '1rem',
        margin: '1.5rem 0',
        overflowX: 'auto',
      }}
    >
      {items.map((item) => (
        <div key={item.label}>
          <img
            src={item.src}
            alt={item.alt || item.label}
            style={{
              width: '100%',
              aspectRatio: '3 / 4',
              objectFit: 'cover',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--color-border)',
              marginBottom: '0.5rem',
            }}
          />
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'var(--fs-small)',
              color: 'var(--color-text-muted)',
              textAlign: 'center',
              margin: 0,
            }}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function CaseImage({ src, alt, caption }) {
  return (
    <figure style={{ margin: '1.5rem 0' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--color-border)',
          display: 'block',
        }}
      />
      {caption && (
        <figcaption
          style={{
            fontSize: 'var(--fs-small)',
            color: 'var(--color-text-muted)',
            marginTop: '0.5rem',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
