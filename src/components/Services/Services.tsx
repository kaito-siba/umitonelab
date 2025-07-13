import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import * as styles from './Services.css'

const services = [
  {
    id: 'web-dev',
    title: 'Web開発',
    description: '最新の技術を使用した高速で使いやすいWebアプリケーションの開発',
    features: ['React/Next.js開発', 'レスポンシブデザイン', 'パフォーマンス最適化'],
    icon: '🌐',
  },
  {
    id: 'ui-ux',
    title: 'UI/UXデザイン',
    description: 'ユーザー中心のデザインで、使いやすさと美しさを両立',
    features: ['ワイヤーフレーム作成', 'プロトタイプ開発', 'ユーザビリティテスト'],
    icon: '🎨',
  },
  {
    id: 'system-dev',
    title: 'システム開発',
    description: 'スケーラブルで安全なバックエンドシステムの構築',
    features: ['API開発', 'データベース設計', 'クラウドインフラ構築'],
    icon: '⚙️',
  },
]

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>
        <p className={styles.subtitle}>お客様のビジネスを成功に導くサービス</p>
        <div ref={ref} className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.card}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s ease-out ${index * 0.1}s`,
              }}
            >
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.cardFeatures}>
                {service.features.map((feature) => (
                  <li key={feature} className={styles.cardFeature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
