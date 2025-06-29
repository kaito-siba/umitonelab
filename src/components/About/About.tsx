import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import * as styles from './About.css'

export const About = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div
          ref={ref}
          className={styles.content}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>クリエイティブと技術の融合</h3>
            <p className={styles.description}>
              Umitone Labは、美しいデザインと最新の技術を組み合わせて、
              お客様のビジネスに価値をもたらすデジタルソリューションを提供しています。
            </p>
            <p className={styles.description}>
              私たちは、単なるウェブサイトやアプリケーションを作るのではなく、
              ユーザー体験を第一に考え、ビジネスの成長を支援するパートナーとして、
              お客様と共に歩んでいきます。
            </p>
            <div className={styles.skills}>
              <h4 className={styles.skillsTitle}>技術スタック</h4>
              <div className={styles.skillGrid}>
                <div className={styles.skill}>React / Next.js</div>
                <div className={styles.skill}>TypeScript</div>
                <div className={styles.skill}>Node.js</div>
                <div className={styles.skill}>Python</div>
                <div className={styles.skill}>AWS / GCP</div>
                <div className={styles.skill}>UI/UX Design</div>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageGradient} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
