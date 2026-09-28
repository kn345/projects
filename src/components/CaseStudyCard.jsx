import { Link } from 'react-router-dom';

export default function CaseStudyCard({ slug, title, subtitle, methods }) {
  return (
    <Link
      to={`/work/${slug}`}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        background: 'var(--color-bg-alt)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-md)',
        marginBottom: 'var(--space-sm)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h2 style={{ marginBottom: '0.35rem' }}>{title}</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>{subtitle}</p>
      <div>
        {methods.map((m) => (
          <span className="tag-pill" key={m}>{m}</span>
        ))}
      </div>
    </Link>
  );
}
