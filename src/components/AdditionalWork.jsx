import { additionalWork } from '../data/caseStudies';

export default function AdditionalWork() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 style={{ fontSize: 'var(--fs-body)', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Additional Work
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
          {additionalWork.map((item) => (
            <div
              key={item.title}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                padding: '0.75rem 1rem',
                fontSize: 'var(--fs-small)',
                background: 'var(--color-bg)',
              }}
            >
              <strong style={{ display: 'block' }}>{item.title}</strong>
              <span style={{ color: 'var(--color-text-muted)' }}>{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
