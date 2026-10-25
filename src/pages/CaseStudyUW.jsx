import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import styles from './CaseStudy.module.css'

export default function CaseStudyUW() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>← Back to work</Link>

        <header className={styles.header}>
          <p className={styles.tag}>CAPSTONE · 2025</p>
          <h1 className={styles.title}>UW Office of Research Platform</h1>
        </header>

        <div className={styles.meta}>
          <div className={styles.metaSidebar}>
            <div>
              <p className={styles.metaLabel}>My Role</p>
              <p className={styles.metaValue}>UX Researcher</p>
            </div>
            <div>
              <p className={styles.metaLabel}>Team</p>
              <p className={styles.metaValue}>[placeholder]</p>
            </div>
            <div>
              <p className={styles.metaLabel}>Duration</p>
              <p className={styles.metaValue}>[placeholder]</p>
            </div>
            <div>
              <p className={styles.metaLabel}>Methods</p>
              <p className={styles.metaValue}>Interviews · Surveys · Concept Testing</p>
            </div>
          </div>
          <div className={styles.metaContent}>
            <p className={styles.summary}>
              End-to-end research and concept testing to design a platform improving researcher
              visibility and collaboration.
            </p>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.callout}>
            <p className={styles.calloutLabel}>STATUS</p>
            <p className={styles.calloutText}>
              This project is in progress. Full case study content will be available upon completion
              in June 2026.
            </p>
          </div>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>BACKGROUND</p>
            <h2 className={styles.sectionTitle}>[placeholder]</h2>
            <p className={styles.sectionBody}>[placeholder]</p>
          </section>

          <nav className={styles.bottomNav}>
            <Link to="/work/appa-health" className={styles.navLink}>
              <p className={styles.navLinkLabel}>Previous project</p>
              <p className={styles.navLinkTitle}>← Appa Health</p>
            </Link>
            <Link to="/work/amazon-ads" className={styles.navLink}>
              <div className={styles.navLinkRight}>
                <p className={styles.navLinkLabel}>Next project</p>
                <p className={styles.navLinkTitle}>Amazon Ads →</p>
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  )
}
