import CaseStudyLayout, { Placeholder } from '../../components/CaseStudyLayout';

// PENDING: final case-study copy. Attribution note: it was Kay's idea to
// loop in UX research (she mostly shadowed the research itself); she led
// the resulting content-template redesign and implementation.
export default function NerdWallet() {
  return (
    <CaseStudyLayout
      title="NerdWallet"
      subtitle="Insurance review content template"
      meta="Role / Team / Duration / Methods — pending final copy"
    >
      <section id="overview">
        <h2>Overview</h2>
        <Placeholder label="Goal — pending final copy" />
      </section>

      <section id="process">
        <h2>Process</h2>
        <Placeholder label="Bringing in UX research, content template redesign — pending final copy" />
      </section>

      <section id="outcome">
        <h2>Outcome</h2>
        <Placeholder label="Delivered, Reflection — pending final copy" />
      </section>
    </CaseStudyLayout>
  );
}
