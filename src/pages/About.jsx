import { useState } from 'react'
import ContactStrip from '../components/ContactStrip'
import Footer from '../components/Footer'
import styles from './About.module.css'

function GridCell({ src, alt = '', className }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`${styles.gridCell} ${className}`}>
      {!failed ? (
        <img src={src} alt={alt} className={styles.gridImg} onError={() => setFailed(true)} />
      ) : (
        <div className={styles.gridPlaceholder} />
      )}
    </div>
  )
}

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.tag}>ABOUT ME</p>
              <h1 className={styles.headline}>Researcher. Storyteller. Perpetually curious.</h1>
              <p className={styles.body}>
                I’m a UX researcher and content strategist, currently at Amazon where I lead user
                research and design content experiences for Amazon Ads. I’m completing my M.S. in
                Human Centered Design and Engineering at the University of Washington, graduating
                June 2026.
              </p>
              <p className={styles.body}>
                My path to research started in journalism, where I learned to ask the right
                questions, find the real story, and communicate it clearly to people who need to act
                on it. That foundation carried through my content work, where I found myself
                increasingly drawn to the underlying question: what do users actually need, and why?
              </p>
            </div>
            <div className={styles.photoWrap}>
              {!photoFailed ? (
                <img
                  src="/images/research-poster.jpg"
                  alt="Kayda Norman"
                  className={styles.photo}
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className={styles.photoPlaceholder} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <div className={styles.container}>
          <div className={styles.detailsGrid}>
            <div>
              <p className={styles.detailLabel}>EXPERIENCE</p>
              <p className={styles.detailItem}>Amazon (2025 — Present)</p>
              <p className={styles.detailItem}>NerdWallet (2019 — 2024)</p>
              <p className={styles.detailItem}>The Walt Disney Company (2017 — 2019)</p>
            </div>
            <div>
              <p className={styles.detailLabel}>EDUCATION</p>
              <p className={styles.detailItem}>M.S. Human Centered Design &amp; Engineering</p>
              <p className={styles.detailItem}>University of Washington, 2026</p>
              <p className={styles.detailItem} style={{ marginTop: '8px' }}>B.A. Journalism, Moravian College</p>
            </div>
            <div>
              <p className={styles.detailLabel}>RESEARCH METHODS</p>
              <p className={styles.detailItem}>User Interviews</p>
              <p className={styles.detailItem}>Usability Testing</p>
              <p className={styles.detailItem}>Concept Testing</p>
              <p className={styles.detailItem}>Surveys &amp; Card Sorting</p>
              <p className={styles.detailItem}>Thematic Analysis</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.photoSection}>
        <div className={styles.container}>
          <p className={styles.photoIntro}>
            Outside of work, you’ll find me hiking Pacific Northwest trails, on a paddleboard, or
            finding a quiet corner with a good book.
          </p>
          <div className={styles.photoGrid}>
            <GridCell src="/images/hiking.jpg" alt="Hiking" className={styles.photoHiking} />
            <GridCell src="/images/yoga.jpg" alt="" className={styles.photoYoga} />
            <GridCell src="/images/outdoor2.jpg" alt="" className={styles.photoOutdoor} />
            <GridCell src="/images/paddleboard.jpg" alt="" className={styles.photoPaddle} />
          </div>
        </div>
      </section>

      <ContactStrip />
      <Footer />
    </main>
  )
}
