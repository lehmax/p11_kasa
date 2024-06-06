import Star from './star'

import { useMemo } from 'react'
import styles from './rating.module.scss'

const Rating = ({ rating = 0 }) => {
  const roundedRating = useMemo(() => Math.round(rating * 2) / 2, [rating])

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          isFilled={star <= rating}
          isHalf={star - 0.5 === roundedRating}
          key={star}
        />
      ))}
    </div>
  )
}

export default Rating
