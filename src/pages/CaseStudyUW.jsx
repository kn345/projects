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
          <p className={styles.summary}>
            End-to-end research and concept testing to design a platform improving researcher
            visibility and collaboration.
          </p>
        </header>

        <div className={styles.meta}>
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

          <section className={styles.section}>
            <p className={styles.sectionLabel}>APPROACH</p>
            <h2 className={styles.sectionTitle}>[placeholder]</h2>
            <p className={styles.sectionBody}>[placeholder]</p>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>PROCESS</p>
            <h2 className={styles.sectionTitle}>[placeholder]</h2>
            <p className={styles.sectionBody}>[placeholder]</p>
            <div className={styles.imagePlaceholder}>Research artifact placeholder</div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>FINDINGS</p>
            <h2 className={styles.sectionTitle}>[placeholder]</h2>
            <div className={styles.findingGrid}>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className={styles.findingCard}>
                  <p className={styles.findingNum}>0{n}</p>
                  <p className={styles.findingTitle}>[placeholder]</p>
                  <p className={styles.findingDesc}>[placeholder]</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>IMPACT</p>
            <h2 className={styles.sectionTitle}>[placeholder]</h2>
            <p className={styles.sectionBody}>[placeholder]</p>
            <div className={styles.impact}>
              <div className={styles.impactStats}>
                {['—', '—', '—'].map((v, i) => (
                  <div key={i}>
                    <p className={styles.statNum}>{v}</p>
                    <p className={styles.statDesc}>[placeholder]</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <nav className={styles.bottomNav}>
            <Link to="/work/appa-health" className={styles.navLink}>
              <p className={styles.navLinkLabel}>Previous project</p>
              <p className={styles.navLinkTitle}>← Defining Product-Market Fit</p>
            </Link>
            <Link to="/work/amazon-ads" className={styles.navLink}>
              <div className={styles.navLinkRight}>
                <p className={styles.navLinkLabel}>Next project</p>
                <p className={styles.navLinkTitle}>Amazon Ads User Research →</p>
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  )
}
