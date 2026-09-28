export default function About() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '720px' }}>
        <h1>Hi, I'm Kayda!</h1>

        <p>
          I'm a UX researcher with a background in content strategy. At Amazon Ads, I run research
          experiments to understand what actually helps people, work I do alongside my core content role.
        </p>

        <p>
          My path to UX started in journalism, where I learned to ask the right questions, find the
          real story, and communicate what matters most. That foundation carried throughout my content
          work, where I found myself increasingly drawn to the underlying question: what do users
          actually need, and why?
        </p>

        <p>
          That question is what draws me to research that surfaces the real barriers between people and
          the help they need, whether that's shaping an app that helps people navigate a layoff or
          financial hardship, or helping teens work through loneliness.
        </p>

        <p>
          I'm a recent graduate of the M.S. in Human Centered Design and Engineering program at the
          University of Washington. My work spans research, design, and content decisions, but the
          throughline is always the same: understand what's actually happening, then follow it all the
          way to a decision that changes something.
        </p>

        <p>
          Want to connect? Reach me at{' '}
          <a href="mailto:kayda.norman@gmail.com">kayda.norman@gmail.com</a>, or check out my resume and
          LinkedIn below.
        </p>

        <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0' }}>
          <a className="btn" href="#" target="_blank" rel="noreferrer">Resume</a>
          <a className="btn" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <h2 style={{ marginTop: 'var(--space-lg)' }}>Life Outside of Work</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.75rem',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                aspectRatio: '1',
                background: 'var(--color-bg-alt)',
                border: '1px dashed var(--color-border)',
                borderRadius: 'var(--radius)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                fontSize: 'var(--fs-small)',
              }}
            >
              photo {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
