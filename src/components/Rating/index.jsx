import Star from "./star";

import styles from "./rating.module.scss";

const Rating = ({ rating = 0 }) => {
  const roundedRating = Math.round(rating * 2) / 2;

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
  );
};

export default Rating;
