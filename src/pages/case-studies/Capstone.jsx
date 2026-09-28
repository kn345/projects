import CaseStudyLayout from '../../components/CaseStudyLayout';

export default function Capstone() {
  return (
    <CaseStudyLayout
      title="Dub's Research Hub: From Profile Problem to Collaboration Platform"
      meta="Role: UX Researcher & Designer (capstone team of 4) · Sponsor: UW Office of Research Information Services (ORIS) · Duration: 6 months · Methods: interviews, survey, affinity mapping, AI-assisted synthesis, concept testing, information architecture"
    >
      <section id="overview">
        <h2>Goal</h2>
        <p>
          UW's Office of Research Information Services wanted to help researchers find and connect with
          potential collaborators, across departments and with industry, more easily. The brief we were
          handed framed this as a profile problem: researchers needed better, more discoverable profiles.
        </p>
      </section>

      <section id="process">
        <h2>Process</h2>
        <p>
          I helped write and build the recruitment survey and drafted the interview guide. I conducted
          interviews across the ecosystem the platform needed to serve: a PhD candidate early on, then
          two more once we needed to understand the end-to-end process (an educator and a journalist),
          and two focused on the industry-facing side (an HCDE professor who collaborates with industry,
          and UW's director of corporate industry relations). I ran affinity mapping on the combined
          interview data and used AI-assisted synthesis to help surface patterns across the full
          interview set.
        </p>

        <h3>Insight → Decision</h3>
        <p>
          The interviews kept surfacing the same thing: better profiles weren't the blocker. People
          struggled to discover the right collaborators and had no clear way to initiate contact once
          they found them. My interviews were part of the evidence base that helped the team make the
          case to reframe the whole project, from a profile-discoverability brief to a unified
          discovery-and-collaboration platform. That reframe changed what we built.
        </p>

        <h3>Design</h3>
        <p>
          I built the personas and user journey maps that grounded the rest of the team's design work. I
          owned the information architecture and one of the platform's core browsing features, a
          swipe-to-save interface for shortlisting potential collaborators, paired with short-form video
          profiles. I ran concept testing with 4 users across the full feature set, not just the pieces
          I'd designed myself. I also co-created the project poster with a teammate.
        </p>

        <h3>Stakeholder work</h3>
        <p>
          Throughout, I acted as the de facto project and product manager for the team, helping decide
          which of the many possible features were actually worth building, and stayed in direct contact
          with our ORIS sponsor through regular check-ins.
        </p>
      </section>

      <section id="outcome">
        <h2>Delivered</h2>
        <p>
          A validated platform concept, prototyped and concept-tested, presented to ORIS with a feature
          set and an implementation roadmap.
        </p>

        <h3>Reflection</h3>
        <p>
          Looking back, I'd have pushed for a faster, rougher round of concept testing earlier in the
          process, before we invested design time in mid-fidelity wireframes. Testing all four core
          features together with 4 users helped us prioritize what to keep, but running a lighter version
          of that test sooner would have let us narrow the feature set with more confidence before
          committing to features that ultimately mattered less.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
