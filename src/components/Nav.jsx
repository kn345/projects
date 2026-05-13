import { Link, NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.name}>Kayda Norman</Link>
      <div className={styles.links}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          About
        </NavLink>
        <a href="/resume.pdf" className={styles.link}>Resume</a>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}
