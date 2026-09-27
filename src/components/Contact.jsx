import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь обычно отправка на сервер
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <h2>Связаться с нами</h2>
          <p>Есть вопросы? Напишите — мы ответим</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ваше имя"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Напишите ваше сообщение..."
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Отправить
          </button>

          {submitted && (
            <p className={styles.success}>
              ✓ Сообщение отправлено! (это демо)
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
