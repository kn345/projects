import styles from './ContactStrip.module.css'

export default function ContactStrip() {
  return (
    <section className={styles.strip}>
      <span className={styles.heading}>Want to connect?</span>
      <div className={styles.links}>
        <a href="mailto:kayda.norman@gmail.com" className={styles.link}>
          kayda.norman@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/kaydanorman/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn
        </a>
        <a href="/resume.pdf" className={styles.link}>
          Resume
        </a>
      </div>
    </section>
  )
}
