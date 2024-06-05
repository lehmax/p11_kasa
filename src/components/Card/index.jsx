import { Link } from 'react-router-dom'

import styles from './card.module.scss'

const Card = ({ data }) => {
  const { id, title, cover } = data

  const style = {
    backgroundImage: `url(${cover})`,
  }

  return (
    <Link className={styles.card} style={style} to={`/lodgement/${id}`}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  )
}

export default Card
