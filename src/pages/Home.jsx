import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';
import AdditionalWork from '../components/AdditionalWork';

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
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
            UX Researcher &amp; Designer
          </p>
          <h1 style={{ fontSize: 'var(--fs-hero)', maxWidth: '780px' }}>
            Hi, I'm Kayda.
          </h1>
          <p style={{ maxWidth: '620px', color: 'var(--color-text-muted)' }}>
            I look for the real barriers between people and the help they need, then follow that all the way to a decision that changes something.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 style={{ fontSize: 'var(--fs-body)', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Selected Work
          </h2>
          <div style={{ marginTop: '1rem' }}>
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} />
            ))}
          </div>
        </div>
      </section>

      <AdditionalWork />
    </>
  );
}
