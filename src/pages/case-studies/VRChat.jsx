import CaseStudyLayout, { Placeholder } from '../../components/CaseStudyLayout';

// PENDING: final case-study copy. Role = "UX Researcher & Designer."
// Attribution notes carried over from drafting:
//  - Secondary research (Reddit/articles) + contextual inquiry (Oculus
//    headset observation): Kay, personally.
//  - 1:1 user interviews: led by teammate Kelsey Yeh, not Kay.
//  - 4 usability tests, one facilitated per team member; Kay took notes
//    on two others and rated every issue found via Nielsen's severity scale.
//  - NEW: Kay also contributed to sketching/prototyping, helping take the
//    tutorial from mid-fidelity through to final hi-fidelity in Figma —
//    needs to be worked into the Process section alongside the research work.
export default function VRChat() {
  return (
    <CaseStudyLayout
      title="VR Chat"
      subtitle="Tutorial & VR Buddy — helping newcomers navigate VRChat safely"
      meta="UX Researcher & Designer / Team of 4 / Duration — pending / Methods — pending final copy"
    >
      <section id="overview">
        <h2>Overview</h2>
        <Placeholder label="Goal — pending final copy" />
      </section>

      <section id="process">
        <h2>Process</h2>
        <Placeholder label="Secondary research, contextual inquiry, sketching + prototyping (mid-to-hi-fidelity) — pending final copy + visuals" />
      </section>

      <section id="outcome">
        <h2>Outcome</h2>
        <Placeholder label="Usability testing, severity rating, Delivered, Reflection — pending final copy" />
      </section>
    </CaseStudyLayout>
  );
}
