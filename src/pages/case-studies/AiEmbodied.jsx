import CaseStudyLayout from '../../components/CaseStudyLayout';

export default function AiEmbodied() {
  return (
    <CaseStudyLayout
      title="AI Embodied: Redesigning a No-Code AI Workflow Builder"
      slug="aiembodied"
      facts={[
        { label: 'Client', value: 'AiEmbodied Inc.' },
        { label: 'My Role', value: 'Sole UX Designer (Contract)' },
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Methods', value: 'Persona, IA, Usability Testing Protocol' },
      ]}
    >
      <section id="overview">
        <h2>Goal</h2>
        <p>
          AiEmbodied's product let people build automated workflows, connecting data sources,
          transforming them, and applying AI, without writing code. The founder wanted it to feel as
          approachable as Zapier while still being as powerful as more technical tools like Datablocks,
          but the existing builder was too cluttered and technical for the non-coders it was meant to
          serve.
        </p>
      </section>

      <section id="process">
        <h2>Process</h2>
        <p>
          There wasn't existing user research to draw from, so I built a persona, Tiffany, a part-time
          tutor and full-time grad student, to ground the redesign in a realistic non-technical user and
          guide my design decisions. I redesigned the builder's information architecture, reorganizing
          its tools into two clear categories, Source and Manipulate, and designed the core workflow end
          to end: uploading a data source, chaining AI-assisted steps, and seeing them combine into a
          finished output, across roughly two dozen screens covering different builder states. I also
          introduced UX research practices to the team by walking the product manager through my process
          and building a usability testing protocol they could run going forward, since AiEmbodied
          didn't have a dedicated research function.
        </p>

        <h3>Pivot</h3>
        <p>
          My original designs included a tutorial to help new non-technical users get oriented in the
          builder. Given the team's time constraints and limited engineering resources to build out a
          full tutorial experience, I iterated away from it and simplified the core information
          architecture instead, so the interface could stand on its own without needing a teaching layer.
        </p>
      </section>

      <section id="outcome">
        <h2>Delivered</h2>
        <p>
          A redesigned builder flow and information architecture, plus a usability testing protocol
          handed off to AiEmbodied's team to use going forward.
        </p>

        <h3>Reflection</h3>
        <p>
          I still think there's a version of this product where guided onboarding adds real value for
          less technical users like Tiffany. With more time, I'd want to test whether the simplified IA
          alone is enough, or whether some lighter-weight onboarding earns its place back in.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
