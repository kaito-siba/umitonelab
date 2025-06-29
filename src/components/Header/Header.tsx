import * as styles from './Header.css'

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Umitone Lab</span>
        </div>
        <nav className={styles.nav}>
          <button type="button" onClick={() => scrollToSection('about')} className={styles.navLink}>
            About
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('services')}
            className={styles.navLink}
          >
            Services
          </button>
          <button type="button" onClick={() => scrollToSection('works')} className={styles.navLink}>
            Works
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className={styles.navLink}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
