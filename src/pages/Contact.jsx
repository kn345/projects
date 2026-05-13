import Footer from '../components/Footer'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.headline}>Get in touch</h1>
          <p className={styles.subtext}>
            I’m open to UX research opportunities and always happy to connect.
          </p>
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
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
