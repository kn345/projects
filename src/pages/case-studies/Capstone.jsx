import CaseStudyLayout, { Placeholder } from '../../components/CaseStudyLayout';

// PENDING: final case-study copy from Kay. Structure and section anchors
// are in place; replace each Placeholder with her finalized text/visuals.
export default function Capstone() {
  return (
    <CaseStudyLayout
      title="UW Capstone"
      subtitle="Helping people navigate a layoff or financial hardship"
      meta="Role / Team / Duration / Methods — pending final copy"
    >
      <section id="overview">
        <h2>Overview</h2>
        <Placeholder label="Goal — pending final copy" />
      </section>

      <section id="process">
        <h2>Process</h2>
        <Placeholder label="Personas, journey maps, IA, concept testing — pending final copy + visuals" />
      </section>

      <section id="outcome">
        <h2>Outcome</h2>
        <Placeholder label="Insight → Decision (swipe-to-save feature), Delivered, Reflection — pending final copy" />
      </section>
    </CaseStudyLayout>
  );
}
