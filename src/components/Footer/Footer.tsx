import * as styles from './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Umitone Lab</h3>
            <p className={styles.brandTagline}>Digital Craftsmanship</p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Services</h4>
              <a href="#services" className={styles.link}>
                Web開発
              </a>
              <a href="#services" className={styles.link}>
                UI/UXデザイン
              </a>
              <a href="#services" className={styles.link}>
                システム開発
              </a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Company</h4>
              <a href="#about" className={styles.link}>
                About
              </a>
              <a href="#works" className={styles.link}>
                Works
              </a>
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} Umitone Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
