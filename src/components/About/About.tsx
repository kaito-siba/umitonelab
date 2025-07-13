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
            <h3 className={styles.subtitle}>経歴</h3>
            <p className={styles.description}>
              2021年にキャリアを開始し、JavaでAndroidアプリを開発。
              <br />
              2022年までにReact Nativeへシフトし、iOS/Android両対応のアプリを構築。
              <br />
              2023年にはPHP（Yii2）によるバックエンドとReact＋Viteのフロントエンド開発を加え、フルスタックへ領域を拡大。
              <br />
              2024年からはAWSでのIaC環境構築やRemixなどサーバーレスフレームワークの導入に着手し、スケーラブルなサービス実装を推進している。
            </p>
            <div className={styles.skills}>
              <h4 className={styles.skillsTitle}>技術スタック</h4>
              <div className={styles.skillGrid}>
                <div className={styles.skill}>TypeScript</div>
                <div className={styles.skill}>PHP</div>
                <div className={styles.skill}>Python</div>
                <div className={styles.skill}>Java</div>
                <div className={styles.skill}>React / Remix</div>
                <div className={styles.skill}>React Native</div>
                <div className={styles.skill}>Node.js</div>
                <div className={styles.skill}>Yii2</div>
                <div className={styles.skill}>MySQL</div>
                <div className={styles.skill}>PostgreSQL</div>
                <div className={styles.skill}>Docker</div>
                <div className={styles.skill}>AWS</div>
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
