import { Link } from 'react-router-dom'
import ContactStrip from '../components/ContactStrip'
import Footer from '../components/Footer'
import styles from './Home.module.css'

const caseStudies = [
  {
    tag: 'CAPSTONE · 2025',
    title: 'UW Office of Research Platform',
    description:
      'End-to-end research and concept testing to design a platform improving researcher visibility and collaboration.',
    pill: 'Interviews · Surveys · Concept Testing',
    href: '/work/uw-research',
  },
  {
    tag: 'AMAZON · 2025',
    title: 'Amazon Ads User Research',
    description:
      'Led user interviews, persona development, and concept testing to inform product decisions for Amazon Ads.',
    pill: 'Interviews · Personas · A/B Testing',
    href: '/work/amazon-ads',
  },
  {
    tag: 'APPA HEALTH · 2023',
    title: 'Defining Product-Market Fit',
    description:
      "Four-month research study that reframed a mental health startup's go-to-market strategy and enrollment approach.",
    pill: 'Interviews · Thematic Analysis',
    href: '/work/appa-health',
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.heroLabel}>UX RESEARCHER / SEATTLE, WA</p>
          <h1 className={styles.heroHeadline}>
            I research what people need and design experiences that earn their trust.
          </h1>
          <p className={styles.heroSub}>
            Currently at Amazon, completing my M.S. in Human Centered Design and Engineering at the
            University of Washington.
          </p>
        </div>
      </section>

      <section className={styles.work}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>SELECTED WORK</p>
          <div className={styles.workRows}>
            {caseStudies.map((cs) => (
              <Link to={cs.href} key={cs.href} className={styles.row}>
                <div className={styles.rowLeft}>
                  <p className={styles.rowTag}>{cs.tag}</p>
                  <h2 className={styles.rowTitle}>{cs.title}</h2>
                  <p className={styles.rowDesc}>{cs.description}</p>
                </div>
                <div className={styles.rowRight}>
                  <span className={styles.pill}>{cs.pill}</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.aboutStrip}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div>
              <p className={styles.sectionLabel}>ABOUT</p>
              <p className={styles.aboutText}>
                I’m a UX researcher and content strategist. My path to UX started in journalism,
                where I learned to ask the right questions, find the real story, and communicate it
                clearly to people who need to act on it.
              </p>
              <Link to="/about" className={styles.readMore}>Read more →</Link>
            </div>
            <div>
              <p className={styles.sectionLabel}>BACKGROUND</p>
              <p className={styles.aboutText}>
                M.S. Human Centered Design &amp; Engineering, University of Washington (2026)
              </p>
              <p className={styles.aboutTextMt}>Amazon · NerdWallet · The Walt Disney Company</p>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
      <Footer />
    </main>
  )
}
