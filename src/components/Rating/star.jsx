import styles from "./rating.module.scss";

const Star = ({ isFilled, isHalf }) => {
  return (
    <i
      className={`fa-solid fa-star ${styles.star} ${
        isFilled ? styles.isFilled : ""
      } ${isHalf ? styles.isHalf : ""}
      `}
    />
  );
};

export default Star;
