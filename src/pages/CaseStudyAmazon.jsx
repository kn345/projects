import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import styles from './CaseStudy.module.css'

export default function CaseStudyAmazon() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>← Back to work</Link>

        <header className={styles.header}>
          <p className={styles.tag}>AMAZON · 2025</p>
          <h1 className={styles.title}>Amazon Ads User Research</h1>
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
              <p className={styles.metaValue}>Interviews · Personas · A/B Testing</p>
            </div>
          </div>
          <div className={styles.metaContent}>
            <p className={styles.summary}>
              Led user interviews, persona development, and concept testing to inform product
              decisions for Amazon Ads.
            </p>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.callout}>
            <p className={styles.calloutLabel}>STATUS</p>
            <p className={styles.calloutText}>
              This project is currently confidential. A summary of research scope and impact is
              available upon request.
            </p>
          </div>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>BACKGROUND</p>
            <h2 className={styles.sectionTitle}>[placeholder]</h2>
            <p className={styles.sectionBody}>[placeholder]</p>
          </section>

          <nav className={styles.bottomNav}>
            <Link to="/work/uw-research" className={styles.navLink}>
              <p className={styles.navLinkLabel}>Previous project</p>
              <p className={styles.navLinkTitle}>← UW Office of Research</p>
            </Link>
            <div />
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  )
}
