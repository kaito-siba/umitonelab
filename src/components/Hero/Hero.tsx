import * as styles from './Hero.css'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleMain}>Umitone Lab</span>
            <span className={styles.titleSub}>Digital Craftsmanship</span>
          </h1>
          <p className={styles.description}>
            美しいデザインと確かな技術で、
            <br />
            あなたのビジョンを現実に
          </p>
          <div className={styles.cta}>
            <button
              type="button"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className={styles.ctaPrimary}
            >
              お問い合わせ
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
              }
              className={styles.ctaSecondary}
            >
              実績を見る
            </button>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.visualElement} />
          <div className={styles.visualElement2} />
          <div className={styles.visualElement3} />
        </div>
      </div>
    </section>
  )
}
