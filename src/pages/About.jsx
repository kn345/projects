import { LINKEDIN_URL, RESUME_URL } from '../data/links';

const lifePhotos = [
  { src: '/images/life/paddleboarding.jpg', alt: 'Paddleboarding on a lake' },
  { src: '/images/life/rock-climbing.jpg', alt: 'Rock climbing outdoors' },
  { src: '/images/life/tree-swing.jpg', alt: 'On a rope swing in the forest' },
  { src: '/images/life/sedona-portrait.jpg', alt: 'Hiking in Sedona, Arizona' },
];

export default function About() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '1040px' }}>
        {/* Bio + photo */}
        <div className="about-bio-grid">
          <div>
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
              About Me
            </p>
            <h1 style={{ marginBottom: '1.25rem' }}>Researcher. Designer. Perpetually curious.</h1>

            <p>
              I'm a UX designer and researcher, currently at Amazon where I conduct research and design
              content experiences for Amazon Ads. I recently completed my M.S. in Human Centered Design
              and Engineering at the University of Washington.
            </p>

            <p>
              My path to research started in journalism, where I learned to ask the right questions, find
              the real story, and communicate it clearly to people who need to act on it. That foundation
              carried through my content work, where I found myself increasingly drawn to the underlying
              question: what do users actually need, and why?
            </p>
          </div>

          <img src="/images/about/headshot.jpg" alt="Kayda Norman" className="about-bio-photo" />
        </div>

        {/* Facts */}
        <dl className="about-facts-grid" style={{ margin: '2.5rem 0', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <div>
            <dt>Experience</dt>
            <dd>Amazon (2025–Present)</dd>
            <dd>NerdWallet (2019–2024)</dd>
            <dd>The Walt Disney Company (2017–2019)</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>M.S. Human Centered Design & Engineering</dd>
            <dd>University of Washington, 2026</dd>
            <dd>B.A. Journalism</dd>
          </div>
          <div>
            <dt>Methods</dt>
            <dd>User Interviews</dd>
            <dd>Usability & Concept Testing</dd>
            <dd>Information Architecture</dd>
            <dd>Wireframing & Prototyping</dd>
          </div>
        </dl>

        {/* Connect */}
        <div style={{ display: 'flex', gap: '1rem', margin: '0 0 2.5rem' }}>
          <a className="btn" href={RESUME_URL} target="_blank" rel="noreferrer">Resume</a>
          <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        {/* Life outside of work */}
        <p style={{ marginBottom: '1.25rem' }}>
          Outside of work, you'll find me hiking Pacific Northwest trails, on a paddleboard, or finding a
          quiet corner with a good book.
        </p>

        <div className="about-photo-mosaic">
          {lifePhotos.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
