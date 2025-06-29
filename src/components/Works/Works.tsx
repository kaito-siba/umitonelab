import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import * as styles from './Works.css'

const works = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: '大規模ECサイトのフルスタック開発',
    tech: ['Next.js', 'TypeScript', 'AWS'],
    color: 'gradient1',
  },
  {
    id: 'banking',
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    description: 'モバイルバンキングアプリのUI/UX設計',
    tech: ['Figma', 'React Native', 'User Research'],
    color: 'gradient2',
  },
  {
    id: 'analytics',
    title: 'Data Analytics Dashboard',
    category: 'System Development',
    description: 'リアルタイムデータ分析ダッシュボード',
    tech: ['Python', 'React', 'D3.js'],
    color: 'gradient3',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Portal',
    category: 'Web Development',
    description: '医療機関向けポータルサイト',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    color: 'gradient4',
  },
]

export const Works = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="works" className={styles.works}>
      <div className={styles.container}>
        <h2 className={styles.title}>Works</h2>
        <p className={styles.subtitle}>これまでの実績</p>
        <div ref={ref} className={styles.grid}>
          {works.map((work, index) => (
            <div
              key={work.id}
              className={styles.card}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              <div
                className={`${styles.cardImage} ${styles.gradients[work.color as keyof typeof styles.gradients]}`}
              />
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>{work.category}</span>
                <h3 className={styles.cardTitle}>{work.title}</h3>
                <p className={styles.cardDescription}>{work.description}</p>
                <div className={styles.cardTech}>
                  {work.tech.map((tech, idx) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
