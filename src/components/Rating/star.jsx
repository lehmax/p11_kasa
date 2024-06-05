import styles from './rating.module.scss'

const Star = ({ isFilled }) => {
  return (
    <i
      className={`fa-solid fa-star ${styles.star} ${
        isFilled ? styles.isFilled : ''
      }`}
    />
  )
}

export default Star

// Ajout Décimal
