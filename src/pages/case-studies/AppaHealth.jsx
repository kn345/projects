import CaseStudyLayout from '../../components/CaseStudyLayout';

export default function AppaHealth() {
  return (
    <CaseStudyLayout
      title="Appa Health: Understanding School User Needs for a Mental Health Platform"
      slug="appa-health"
      facts={[
        { label: 'Client', value: 'Appa Health' },
        {
          label: 'My Role',
          value: [
            'Stakeholder alignment & research planning',
            'Participant recruiting (hard-to-reach population)',
            'Interview facilitation & thematic analysis',
            'Final report & stakeholder readout',
          ],
        },
        { label: 'Team', value: '3 UX Researchers, 1 Senior Researcher' },
        { label: 'Timeline', value: '4 months' },
      ]}
    >
      <section id="overview">
        <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
          This is a summary of my work with Appa Health, as specifics of this case study are under NDA.
        </p>
        <p>
          This project began through the University of Washington's Design for Passion program, which
          connects HCDE students with mission-driven organizations for pro-bono UX work. Appa Health is a
          mental health startup that had built a teen mentorship program connecting young people, many
          experiencing loneliness or looking to build social skills, with trained mentors. Their target
          users spanned multiple groups, with school staff playing a critical gatekeeping role where they
          were responsible for identifying students and initiating referrals into the program. After
          launching with an initial school district partner, the company encountered two interconnected
          challenges: uncertainty about whether the program offering truly reflected market and user
          needs, and lower-than-expected student sign-up and engagement rates from the partnership.
          Leadership recognized a need for qualitative research to understand the lived experience of
          school-based users and to determine what was preventing students from successfully enrolling.
        </p>

        <h2>Navigating misalignment between product and user needs</h2>
        <p style={{ fontWeight: 600 }}>Goal: Identify barriers of use to redefine referral strategy</p>
        <p>
          An earlier survey of new teachers using Appa had already surfaced initial signals of friction
          around referrals. To understand that friction more deeply, I collaborated with stakeholders to
          surface and prioritize their core business questions, then shaped those into research
          objectives centered on three areas:
        </p>
        <ul>
          <li>
            <strong>Objective 1 — Values and gaps.</strong> What do school staff look for in mental
            health and mentorship services, and where do current school resources fall short for
            students?
          </li>
          <li>
            <strong>Objective 2 — Referral decision making.</strong> How do staff decide which students
            to refer, and what does that referral process look like in practice?
          </li>
          <li>
            <strong>Objective 3 — Enrollment barriers.</strong> What prevents referred students from
            successfully enrolling, and how significant are those barriers relative to one another?
          </li>
        </ul>
        <p>
          My responsibilities spanned the full research lifecycle: stakeholder alignment, research
          planning, participant recruitment, interview facilitation, thematic analysis, and final
          presentation, with ongoing weekly check-ins with company stakeholders throughout.
        </p>
      </section>

      <section id="process">
        <h2>Process</h2>
        <p>The project unfolded across four phases, each requiring flexibility as conditions shifted.</p>

        <h3>Discover — Stakeholder alignment</h3>
        <p>
          I facilitated a scoping session with the client to review existing materials and
          collaboratively map research priorities. This surfaced assumptions early and ensured research
          questions were grounded in real business needs rather than researcher instincts alone.
        </p>

        <h3>Plan — Research planning and scope definition</h3>
        <p>
          I drafted the full research plan including methodology, participant profiles, discussion
          guide, screener, and consent form, and iterated based on stakeholder feedback. Mid-planning,
          the target audience was narrowed to focus specifically on teachers and counselors, requiring
          refinement of research questions accordingly.
        </p>

        <h3>Recruit — Navigating a hard-to-reach population</h3>
        <p>
          Recruiting school staff over the summer presented significant access challenges. A mass email
          approach via the client's existing contact list yielded zero responses. I pivoted to
          personalized individual outreach, which was more time-intensive but substantially more
          effective at generating participation.
        </p>

        <h3>Interview and Analyze — Data collection and thematic analysis</h3>
        <p>
          I conducted remote moderated interviews with school staff representing different levels of
          familiarity with and engagement in the program. I then used affinity mapping to code and
          analyze my own interviews and surface thematic patterns; fellow researchers on the team
          independently analyzed their own interviews using the same method, and we compared themes
          across our combined findings.
        </p>
        <p>
          When the original deliverable scope proved unfeasible given time and access constraints, I
          proposed a phased approach that prioritized interviews first, with a survey framework as a
          secondary output. This ensured the client received maximum value within practical limits.
        </p>

        <h3>Challenge</h3>
        <p>
          Summer timing limited access to school-based participants. Mass outreach produced no
          responses, and individual recruiting took considerably more time than the original timeline
          allowed.
        </p>

        <h3>Pivot</h3>
        <p>
          Shifted to personalized individual email invitations and extended the project in coordination
          with stakeholders to allow adequate recruitment, interview, and analysis time.
        </p>
      </section>

      <section id="outcome">
        <h2>Research reframed the product and go-to-market conversation</h2>
        <p>
          The final report and readout delivered to stakeholders included thematic findings across all
          three research objectives, prioritized recommendations tied to specific business opportunities,
          and a clearly scoped set of future research directions to give the team a concrete path
          forward. Research surfaced meaningful misalignments between the program's current structure and
          the actual landscape of school-based mental health support. Several high-priority barriers to
          enrollment were identified, along with the factors that, when present, supported successful
          referrals. Recommendations addressed both product positioning and the client's outreach and
          partnership strategy.
        </p>

        <h3>Delivered</h3>
        <p>
          Full research report with prioritized findings, actionable recommendations, and a future
          research roadmap presented to product and leadership stakeholders.
        </p>

        <h3>Impact</h3>
        <p>
          Findings directly informed product-market fit strategy and provided an evidence base for
          evolving the program's referral model and school partnership approach.
        </p>

        <h3>Lessons and learnings</h3>
        <ul>
          <li>Recruiting hard-to-reach professional populations requires flexibility and patience well beyond typical timelines</li>
          <li>Phased research designs protect value when scope must shift mid-project</li>
          <li>Ongoing stakeholder alignment is essential to keep research grounded in decisions the business can actually act on</li>
        </ul>
      </section>
    </CaseStudyLayout>
  );
}
