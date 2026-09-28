import CaseStudyLayout, { Placeholder } from '../../components/CaseStudyLayout';

// PENDING: final case-study copy (professor-edit pass already applied in
// earlier drafting — needs to be pulled in verbatim, not re-written).
export default function AppaHealth() {
  return (
    <CaseStudyLayout
      title="Appa Health"
      subtitle="Barriers between families and the care their kids need"
      meta="Role / Team / Duration / Methods — pending final copy"
    >
      <section id="overview">
        <h2>Overview</h2>
        <Placeholder label="Goal — pending final copy" />
      </section>

      <section id="process">
        <h2>Process</h2>
        <Placeholder label="Research approach — pending final copy" />
      </section>

      <section id="outcome">
        <h2>Outcome</h2>
        <Placeholder label="Insight → Decision (IEP eligibility barrier, staff communication overload), Reflection — pending final copy" />
      </section>
    </CaseStudyLayout>
  );
}
