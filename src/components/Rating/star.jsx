import classes from "./rating.module.scss";

const Star = ({ isFilled }) => {
  return (
    <i
      className={`fa-solid fa-star ${classes.star} ${
        isFilled ? classes.isFilled : ""
      }`}
    ></i>
  );
};

export default Star;
