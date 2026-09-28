import { LINKEDIN_URL, RESUME_URL } from '../data/links';

const lifePhotos = [
  { src: '/images/life/paddleboarding.jpg', alt: 'Paddleboarding on a lake' },
  { src: '/images/life/rock-climbing.jpg', alt: 'Rock climbing outdoors' },
  { src: '/images/life/tree-swing.jpg', alt: 'On a rope swing in the forest' },
  { src: '/images/life/sedona-portrait.jpg', alt: 'Hiking in Sedona, Arizona' },
];

const interests = ['Paddleboarding', 'Rock Climbing', 'Hiking', 'Being Outdoors'];

export default function About() {
  return (
    <>
      {/* Hero band */}
      <section style={{ background: 'var(--color-bg-alt)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container section" style={{ maxWidth: '860px' }}>
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: 'var(--fs-small)',
              color: 'var(--color-sage-dark)',
              fontWeight: 600,
              margin: '0 0 0.5rem',
            }}
          >
            About
          </p>
          <h1 style={{ marginBottom: 0 }}>Hi, I'm Kayda.</h1>
        </div>
      </section>

      {/* Bio + photo */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1040px' }}>
          <div className="about-bio-grid">
            <div style={{ maxWidth: '620px' }}>
              <p>
                I'm a UX researcher and designer with a background in content strategy. I currently work at Amazon Ads,
                where I've been driving research to understand what actually helps people, alongside my
                content role.
              </p>

              <p>
                My path to UX started in journalism, where I learned to ask the right questions, find the
                real story, and communicate what matters most. That foundation carried throughout my
                content work, where I found myself increasingly drawn to the underlying question: what do
                users actually need, and why?
              </p>

              <p>
                That question is what draws me to research that surfaces the real barriers between people
                and the help they need, whether that's shaping an app that helps people navigate a layoff
                or financial hardship, or helping teens work through loneliness.
              </p>

              <p>
                I'm a recent graduate of the M.S. in Human Centered Design and Engineering program at the
                University of Washington. My work spans research, design, and content decisions, but the
                throughline is always the same: understand what's actually happening, then follow it all
                the way to a decision that changes something.
              </p>

              <p>
                Want to connect? Reach me at{' '}
                <a href="mailto:kayda.norman@gmail.com">kayda.norman@gmail.com</a>, or check out my resume
                and LinkedIn below.
              </p>

              <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0 0' }}>
                <a className="btn" href={RESUME_URL} target="_blank" rel="noreferrer">Resume</a>
                <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <img
              src="/images/about/design-conference.jpg"
              alt="Kayda at a UX design conference, presenting workshop research"
              className="about-bio-photo"
            />
          </div>
        </div>
      </section>

      {/* Ask me about */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '1040px' }}>
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: 'var(--fs-small)',
              color: 'var(--color-sage-dark)',
              fontWeight: 600,
              margin: '0 0 0.5rem',
            }}
          >
            Off the clock
          </p>
          <h2 style={{ marginBottom: '1rem' }}>Ask me about...</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: 'var(--space-lg)' }}>
            {interests.map((i) => (
              <span className="tag-pill" key={i} style={{ margin: 0, padding: '0.5rem 1rem' }}>{i}</span>
            ))}
          </div>

          <h2 style={{ marginBottom: '1rem' }}>Life Outside of Work</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.75rem',
            }}
          >
            {lifePhotos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                style={{
                  aspectRatio: '1',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--color-border)',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
