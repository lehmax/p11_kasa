import Star from "./star";

import classes from "./rating.module.scss";

const Rating = ({ rating = 0 }) => {
  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} isFilled={star <= rating} />
      ))}
    </div>
  );
};

export default Rating;
