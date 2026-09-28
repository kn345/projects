export default function Footer() {
  return (
    <footer className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 'var(--fs-small)' }}>
          Want to connect? Reach me at{' '}
          <a href="mailto:kayda.norman@gmail.com">kayda.norman@gmail.com</a>
        </p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a href="#" target="_blank" rel="noreferrer">Resume</a>
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
