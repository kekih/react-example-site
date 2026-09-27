import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1>
            Современный сайт <br />
            на <span>React</span>
          </h1>
          <p>
            Красивый, быстрый и адаптивный пример лендинга, 
            написанный на React + Vite. Готов к использованию 
            как шаблон для ваших проектов.
          </p>
          <div className={styles.actions}>
            <a href="#features" className="btn btn-primary">
              Смотреть возможности
            </a>
            <a href="#contact" className="btn btn-outline">
              Связаться
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span></span><span></span><span></span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.codeLine}></div>
              <div className={styles.codeLine} style={{ width: '70%' }}></div>
              <div className={styles.codeLine} style={{ width: '85%' }}></div>
              <div className={styles.codeLine} style={{ width: '55%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
