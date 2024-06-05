import Star from './star'

import styles from './rating.module.scss'

const Rating = ({ rating = 0 }) => {
  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star isFilled={star <= rating} key={star} />
      ))}
    </div>
  )
}

export default Rating
