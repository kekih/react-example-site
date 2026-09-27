import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          React<span>Site</span>
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <a href="#features" onClick={() => setIsOpen(false)}>Возможности</a>
          <a href="#about" onClick={() => setIsOpen(false)}>О нас</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Контакты</a>
        </nav>

        <button className={styles.burger} onClick={toggleMenu} aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
