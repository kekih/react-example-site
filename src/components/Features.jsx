import styles from './Features.module.css'

const features = [
  {
    title: 'Быстрый старт',
    description: 'Собран на Vite — мгновенный HMR и очень быстрая сборка.',
    icon: '⚡'
  },
  {
    title: 'Компонентный подход',
    description: 'Чистая архитектура с переиспользуемыми React-компонентами.',
    icon: '🧩'
  },
  {
    title: 'Адаптивный дизайн',
    description: 'Отлично выглядит на телефонах, планшетах и десктопах.',
    icon: '📱'
  },
  {
    title: 'Современный CSS',
    description: 'CSS Modules + кастомные свойства для удобной темизации.',
    icon: '🎨'
  },
  {
    title: 'Готов к деплою',
    description: 'Одна команда — и сайт можно выкладывать на Vercel/Netlify.',
    icon: '🚀'
  },
  {
    title: 'Чистый код',
    description: 'Минимум зависимостей, понятная структура, легко расширять.',
    icon: '✨'
  }
]

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <h2>Возможности</h2>
          <p>Всё, что нужно для быстрого старта вашего проекта</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
