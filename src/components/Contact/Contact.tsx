import { useState } from 'react'
import * as styles from './Contact.css'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際の送信処理を実装
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます。後日ご連絡させていただきます。')
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>お気軽にお問い合わせください</p>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Let's work together</h3>
            <p className={styles.infoDescription}>
              プロジェクトのご相談、お見積もりのご依頼など、 お気軽にお問い合わせください。
            </p>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📧</span>
                <span className={styles.infoText}>contact@umitonelab.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <span className={styles.infoText}>Kobe, Japan</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🕐</span>
                <span className={styles.infoText}>平日 9:00 - 18:00</span>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="お名前"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="メールアドレス"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="メッセージ"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={5}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
