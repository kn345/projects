import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import styles from './CaseStudy.module.css'

export default function CaseStudyAppa() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>← Back to work</Link>

        <header className={styles.header}>
          <p className={styles.tag}>APPA HEALTH · 2023</p>
          <h1 className={styles.title}>Defining Product-Market Fit for a Mental Health Platform</h1>
        </header>

        <div className={styles.meta}>
          <div className={styles.metaSidebar}>
            <div>
              <p className={styles.metaLabel}>My Role</p>
              <p className={styles.metaValue}>UX Researcher</p>
            </div>
            <div>
              <p className={styles.metaLabel}>Team</p>
              <p className={styles.metaValue}>3 researchers, 1 senior researcher</p>
            </div>
            <div>
              <p className={styles.metaLabel}>Duration</p>
              <p className={styles.metaValue}>4 months</p>
            </div>
            <div>
              <p className={styles.metaLabel}>Methods</p>
              <p className={styles.metaValue}>Semi-structured interviews, thematic analysis</p>
            </div>
          </div>
          <div className={styles.metaContent}>
            <p className={styles.summary}>
              A four-month qualitative research study that reframed a mental health startup’s
              go-to-market strategy and directly informed their school partnership approach.
            </p>
          </div>
        </div>

        <div className={styles.body}>
          <section className={styles.section}>
            <p className={styles.sectionLabel}>BACKGROUND</p>
            <h2 className={styles.sectionTitle}>The problem</h2>
            <p className={styles.sectionBody}>
              Appa Health connects teens in grades 6 through 12 with trained peer mentors through a
              school-based referral program. After launching with an initial school district partner,
              the company faced two interconnected challenges: uncertainty about whether their program
              truly reflected market needs, and lower-than-expected student enrollment rates.
            </p>
            <p className={styles.sectionBody}>
              Leadership recognized a need for qualitative research to understand the lived
              experience of school staff and identify what was preventing students from successfully
              enrolling.
            </p>
            <div className={styles.callout}>
              <p className={styles.calloutLabel}>RESEARCH QUESTION</p>
              <p className={styles.calloutText}>
                What do school staff need from a mental health program, and what is preventing
                referred students from successfully enrolling?
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>APPROACH</p>
            <h2 className={styles.sectionTitle}>Research objectives</h2>
            <div className={styles.objectives}>
              <div className={styles.objectiveRow}>
                <span className={styles.objectiveNum}>01</span>
                <p className={styles.objectiveText}>
                  <strong>Values and gaps:</strong> What do school staff look for in mental health
                  services, and where do current resources fall short?
                </p>
              </div>
              <div className={styles.objectiveRow}>
                <span className={styles.objectiveNum}>02</span>
                <p className={styles.objectiveText}>
                  <strong>Referral decision-making:</strong> How do staff decide which students to
                  refer, and what does that process look like in practice?
                </p>
              </div>
              <div className={styles.objectiveRow}>
                <span className={styles.objectiveNum}>03</span>
                <p className={styles.objectiveText}>
                  <strong>Enrollment barriers:</strong> What prevents referred students from
                  successfully enrolling, and how significant are those barriers?
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>PROCESS</p>
            <h2 className={styles.sectionTitle}>How the research unfolded</h2>
            <p className={styles.sectionBody}>
              I facilitated a scoping session with stakeholders to align on research priorities
              before any fieldwork began. This ensured our questions were grounded in business needs
              rather than researcher assumptions.
            </p>
            <p className={styles.sectionBody}>
              Recruiting school staff over the summer presented unexpected access challenges. Mass
              email outreach produced no responses. I pivoted to personalized individual invitations,
              which stood out to overwhelmed professionals and ultimately filled our participant pool.
            </p>
            <p className={styles.sectionBody}>
              I conducted remote moderated interviews, then led collaborative affinity mapping
              sessions to surface themes. Involving the full team in analysis reduced individual bias
              and ensured patterns reflected the data rather than any one researcher’s interpretation.
            </p>
            <div className={styles.imagePlaceholder}>
              Affinity map / research artifact placeholder
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>FINDINGS</p>
            <h2 className={styles.sectionTitle}>What we learned</h2>
            <div className={styles.findingGrid}>
              <div className={styles.findingCard}>
                <p className={styles.findingNum}>01</p>
                <p className={styles.findingTitle}>IEP focus was limiting enrollment</p>
                <p className={styles.findingDesc}>
                  Targeting only IEP students significantly narrowed the potential user base.
                  General education students represented a larger, underserved opportunity.
                </p>
              </div>
              <div className={styles.findingCard}>
                <p className={styles.findingNum}>02</p>
                <p className={styles.findingTitle}>Staff trust drives referrals</p>
                <p className={styles.findingDesc}>
                  Referral decisions were shaped by personal trust in the program, not just student
                  need. In-person outreach was significantly more effective than digital.
                </p>
              </div>
              <div className={styles.findingCard}>
                <p className={styles.findingNum}>03</p>
                <p className={styles.findingTitle}>Parent buy-in was a hidden barrier</p>
                <p className={styles.findingDesc}>
                  Staff consistently cited parent reluctance as a key enrollment blocker,
                  particularly for younger students. This had not been surfaced in prior internal
                  discussions.
                </p>
              </div>
              <div className={styles.findingCard}>
                <p className={styles.findingNum}>04</p>
                <p className={styles.findingTitle}>16+ distinct pain points uncovered</p>
                <p className={styles.findingDesc}>
                  Thematic analysis surfaced pain points spanning referral friction, communication
                  gaps, and program awareness across all three research objectives.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>IMPACT</p>
            <h2 className={styles.sectionTitle}>How findings changed the product strategy</h2>
            <p className={styles.sectionBody}>
              Research directly reframed Appa’s product-market fit strategy. Recommendations around
              in-person outreach and staff communication were adopted as priority next steps. The
              findings also provided an evidence base for evolving the referral model beyond IEP
              students.
            </p>
            <div className={styles.impact}>
              <div className={styles.impactStats}>
                <div>
                  <p className={styles.statNum}>16+</p>
                  <p className={styles.statDesc}>pain points uncovered</p>
                </div>
                <div>
                  <p className={styles.statNum}>5</p>
                  <p className={styles.statDesc}>interviews moderated and analyzed</p>
                </div>
                <div>
                  <p className={styles.statNum}>15%</p>
                  <p className={styles.statDesc}>projected increase in user engagement</p>
                </div>
              </div>
            </div>
          </section>

          <nav className={styles.bottomNav}>
            <div />
            <Link to="/work/uw-research" className={styles.navLink}>
              <div className={styles.navLinkRight}>
                <p className={styles.navLinkLabel}>Next project</p>
                <p className={styles.navLinkTitle}>UW Office of Research Platform →</p>
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  )
}
