import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            React<span>Site</span>
          </a>
          <p>Пример современного сайта на React + Vite</p>
        </div>

        <div className={styles.links}>
          <a href="#features">Возможности</a>
          <a href="#about">О нас</a>
          <a href="#contact">Контакты</a>
        </div>

        <div className={styles.copy}>
          © {new Date().getFullYear()} React Example Site. Сделано с ❤️
        </div>
      </div>
    </footer>
  )
}
