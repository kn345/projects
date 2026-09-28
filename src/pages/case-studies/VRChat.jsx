import CaseStudyLayout from '../../components/CaseStudyLayout';

export default function VRChat() {
  return (
    <CaseStudyLayout
      title="VRChat: Designing a Safer Onboarding Experience"
      slug="vrchat"
      facts={[
        { label: 'Client', value: 'VRChat' },
        {
          label: 'My Role',
          value: [
            'Secondary research & contextual inquiry',
            'Sketching & prototyping (mid- to hi-fi)',
            'Usability test facilitation & severity rating',
          ],
        },
        { label: 'Team', value: 'Avani Babar, Kayda Norman, Kelsey Yeh, Kim Johnson' },
        { label: 'Timeline', value: '3 months (Oct–Dec 2022)' },
      ]}
    >
      <section id="overview">
        <h2>Goal</h2>
        <p>
          VRChat, a popular social VR platform, had a growing safety and harassment problem, and new
          users had almost no onboarding to help them navigate it. The design question became: how do
          you equip new users with the skills to navigate VRChat and make real connections within their
          first week?
        </p>
      </section>

      <section id="process">
        <h2>Process</h2>
        <p>
          I conducted secondary research, reading existing literature on VR harassment and embodiment
          and browsing the VRChat subreddit to understand how the community talked about the problem. I
          used an Oculus headset to observe user behavior and social norms firsthand through contextual
          inquiry. I also contributed to the survey that went out to 45 respondents across Discord and
          Reddit communities.
        </p>
        <p>
          Alongside the research, I contributed to sketching and prototyping, helping take the
          onboarding tutorial from mid-fidelity through to the final hi-fidelity version in Figma.
        </p>

        <h3>Insight → Decision</h3>
        <p>
          The research kept surfacing the same root cause: new users weren't overwhelmed by harassment
          itself, they were overwhelmed by the platform's complexity, and they only learned safety tools
          like block and mute through repeated bad experiences, not through any guided path. That
          reframed the problem from "reduce harassment" to "teach new users the skills to protect
          themselves and connect with others," which became the case for an onboarding tutorial built
          around safety literacy from day one.
        </p>

        <h3>Usability Testing</h3>
        <p>
          We ran four usability testing sessions, one facilitated by each team member, and I took notes
          on two others. I rated every usability issue we found using Nielsen's severity scale to help
          the team prioritize what to fix. Testing ran in two rounds: the first, on a low-fidelity
          prototype, found users felt overloaded with information, which led to trimming the tutorial's
          content. The second, on a medium-fidelity prototype, found users missed the "next" button and
          found some graphics confusing, which led to larger buttons and added narration from the VR
          assistant.
        </p>
      </section>

      <section id="outcome">
        <h2>Delivered</h2>
        <p>
          A VRChat onboarding tutorial prototype (low-fi and hi-fi versions in Figma) covering controls,
          safety tools, profile setup, and world exploration, validated across two rounds of usability
          testing.
        </p>

        <h3>Reflection</h3>
        <p>
          Looking back, I'd want to recruit a more diverse set of participants and bring personas into
          the design process earlier, both were flagged as gaps at the end of the project.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
