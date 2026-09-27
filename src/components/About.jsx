import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h2>О проекте</h2>
          <p>
            Это учебный пример современного одностраничного сайта, 
            написанного на <strong>React 18</strong> с использованием 
            <strong>Vite</strong> в качестве сборщика.
          </p>
          <p>
            Проект демонстрирует:
          </p>
          <ul>
            <li>Компонентную архитектуру</li>
            <li>CSS Modules</li>
            <li>Адаптивную вёрстку</li>
            <li>Чистый и понятный код</li>
            <li>Готовность к продакшену</li>
          </ul>
          <p>
            Вы можете использовать этот репозиторий как шаблон 
            для своих проектов.
          </p>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.number}>React 18</span>
            <span className={styles.label}>Версия</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>Vite 5</span>
            <span className={styles.label}>Сборщик</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>0</span>
            <span className={styles.label}>Лишних зависимостей</span>
          </div>
        </div>
      </div>
    </section>
  )
}
