import CaseStudyLayout from '../../components/CaseStudyLayout';

export default function NerdWallet() {
  return (
    <CaseStudyLayout
      title="NerdWallet: Insurance Review Template Redesign"
      slug="nerdwallet"
      facts={[
        { label: 'Client', value: 'NerdWallet' },
        { label: 'My Role', value: 'Content Designer' },
        { label: 'Team', value: '1 UX Researcher, 1 Content Designer, 1 Editor' },
        { label: 'Timeline', value: '2 months' },
      ]}
    >
      <section id="overview">
        <h2>Goal</h2>
        <p>
          NerdWallet's insurance review template was losing search ranking, and the team had no direct
          user insight into why the existing layout wasn't working.
        </p>
      </section>

      <section id="process">
        <h2>Process</h2>
        <p>
          Recognizing that the template needed empirical validation, not just another content pass, I
          brought UX research into the project. I shaped the study using what I knew about how users
          actually read and compare insurance content, then the researcher ran a 48-user preference test
          comparing rate table design options. From there, I led the redesign itself: rebuilding the
          template using the research and SEO data together, cutting content that wasn't earning its
          place, and adding the rate and comparison tables users had responded to. I also handled the
          implementation.
        </p>

        <h3>Insight → Decision</h3>
        <p>
          Users consistently preferred a specific rate-table format in the preference test. That result
          became the anchor for the new template: I rebuilt the page around clear, scannable rate
          comparisons instead of the denser, harder-to-parse layout it replaced.
        </p>
      </section>

      <section id="outcome">
        <h2>Delivered</h2>
        <p>A redesigned, research-validated insurance review template, built and shipped.</p>

        <h3>Impact</h3>
        <p>Approximately 50% increase in traffic to pages using the new template.</p>

        <h3>Reflection</h3>
        <p>
          I'd add a formal UAT sign-off stage before launch, and work more closely with engineering and
          design to tighten up whitespace and scrolling behavior on the new layout. I'd also want to run
          this kind of research per insurance vertical rather than once broadly, since preferences likely
          vary by product type.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
