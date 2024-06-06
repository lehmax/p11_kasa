import { Link } from 'react-router-dom'

import styles from './404.module.scss'

const Error404 = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>
        Oups! La page que vous demandez n`existe pas.
      </h2>
      <Link className={styles.redirection} to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default Error404
