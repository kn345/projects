import CaseStudyLayout from '../../components/CaseStudyLayout';
import {
  SectionLabel,
  InfoCard,
  InfoCardGrid,
  Callout,
  IterationStrip,
  CaseImage,
} from '../../components/CaseStudyBlocks';

const IMG = '/images/work/capstone';

export default function Capstone() {
  return (
    <CaseStudyLayout
      title="Dub's Research Hub: From Profile Problem to Collaboration Platform"
      slug="capstone"
      facts={[
        { label: 'Client', value: 'UW Office of Research Information Services' },
        {
          label: 'My Role',
          value: [
            'Project management & sponsor POC',
            'Participant recruiting & interviewing',
            'Personas, journey maps & information architecture',
            'Concept testing across the full feature set',
          ],
        },
        { label: 'Team', value: 'Capstone team of 4' },
        { label: 'Timeline', value: '6 months' },
      ]}
    >
      <section id="overview">
        <SectionLabel>The Brief</SectionLabel>
        <h2>Goal</h2>
        <p>
          UW's Office of Research Information Services wanted to help researchers find and connect with
          potential collaborators, across departments and with industry, more easily. The brief we were
          handed framed this as a profile problem: researchers needed better, more discoverable profiles.
        </p>

        <CaseImage
          src={`${IMG}/hifi-home.png`}
          alt="Dub's Research Hub home screen prototype"
          caption="Dub's Research Hub — the platform we ultimately shipped a validated concept for."
        />

        <InfoCardGrid>
          <InfoCard label="Team">4 HCDE capstone students</InfoCard>
          <InfoCard label="Client">UW Office of Research Information Services</InfoCard>
          <InfoCard label="Live prototype">
            <a href="https://inika-gupta.github.io/Dubs-Research-Hub-by-ORIS/" target="_blank" rel="noreferrer">
              inika-gupta.github.io/Dubs-Research-Hub-by-ORIS
            </a>
          </InfoCard>
        </InfoCardGrid>
      </section>

      <section id="process">
        <SectionLabel>Research</SectionLabel>
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

        <IterationStrip
          items={[
            { src: `${IMG}/affinity-map.jpg`, label: 'Affinity mapping' },
            { src: `${IMG}/process-wave.jpg`, label: 'Synthesis narrative' },
            { src: `${IMG}/journey.jpg`, label: 'Journey mapping' },
          ]}
        />

        <Callout label="Insight → Decision">
          Better profiles weren't the blocker. People struggled to discover the right collaborators and
          had no clear way to initiate contact once they found them.
        </Callout>

        <p>
          My interviews were part of the evidence base that helped the team make the case to reframe the
          whole project, from a profile-discoverability brief to a unified discovery-and-collaboration
          platform. That reframe changed what we built.
        </p>

        <h3>Personas</h3>
        <p>
          We designed for five user groups across the research ecosystem. These two were our primary
          users — the ones we designed and tested the core experience around.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            margin: '1.5rem 0',
          }}
        >
          <CaseImage src={`${IMG}/persona-rachel.jpg`} alt="Rachel persona — UW PhD candidate, Emerging Scholar" />
          <CaseImage src={`${IMG}/persona-marcus.jpg`} alt="Marcus persona — Amazon research lead, Industry Seeker" />
        </div>

        <h3>Design</h3>
        <p>
          I built the personas and user journey maps that grounded the rest of the team's design work. I
          owned the information architecture and one of the platform's core browsing features, a
          swipe-to-save interface for shortlisting potential collaborators, paired with short-form video
          profiles.
        </p>

        <CaseImage
          src={`${IMG}/info-arch.png`}
          alt="Dub's Research Hub information architecture diagram"
          caption="Information architecture I mapped for the web prototype (landing + profile flows)."
        />

        <CaseImage
          src={`${IMG}/sketches.jpg`}
          alt="Early sketches of profile, tabs, search, and quick-explore concepts"
          caption="Early sketches exploring profile structure, search, and quick-explore concepts."
        />

        <p>
          I ran concept testing with 4 users across the full feature set — not just the pieces I'd
          designed myself, since I was also concept-testing and helping prioritize the platform as a
          whole. The screens below show the range of what we tested, including features designed by my
          teammates.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            margin: '1.5rem 0',
          }}
        >
          <CaseImage src={`${IMG}/hifi-save-shortlist.png`} alt="Swipe-to-save shortlisting interface" caption="Swipe-to-save shortlisting — mine." />
          <CaseImage src={`${IMG}/hifi-learn-card.png`} alt="Short-form learning card interface" caption="Short-form video/learning cards — mine." />
          <CaseImage src={`${IMG}/hifi-profile.png`} alt="Researcher profile page" caption="Researcher profile page." />
          <CaseImage src={`${IMG}/hifi-network-light.png`} alt="Collaborator network map, light mode" caption="Network map + list view." />
        </div>

        <h3>Stakeholder work</h3>
        <p>
          Throughout, I acted as the de facto project and product manager for the team, helping decide
          which of the many possible features were actually worth building, and stayed in direct contact
          with our ORIS sponsor through regular check-ins.
        </p>
      </section>

      <section id="outcome">
        <SectionLabel>Outcome</SectionLabel>
        <h2>Delivered</h2>
        <p>
          A validated platform concept, prototyped and concept-tested, presented to ORIS with a feature
          set and an implementation roadmap. You can explore the{' '}
          <a href="https://inika-gupta.github.io/Dubs-Research-Hub-by-ORIS/" target="_blank" rel="noreferrer">
            live prototype here
          </a>.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            margin: '1.5rem 0',
          }}
        >
          <CaseImage src={`${IMG}/booth.jpg`} alt="Team presenting the project at the capstone showcase" caption="Presenting at the capstone showcase." />
          <CaseImage src={`${IMG}/award.jpg`} alt="Team holding a capstone award certificate" caption="The team, after being recognized at the showcase." />
        </div>

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
