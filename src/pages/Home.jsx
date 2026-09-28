import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';
// Additional Work strip is built (src/components/AdditionalWork.jsx) but not
// shown yet — Kay wants to hold off surfacing the reserve pieces for now.

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
            I research what people need and design experiences that earn their trust.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 style={{ fontSize: 'var(--fs-body)', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>
            Selected Work
          </h2>
          <div className="work-grid">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
