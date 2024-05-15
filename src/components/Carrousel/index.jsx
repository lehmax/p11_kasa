import classes from "./carrousel.module.scss";

const Carrousel = ({ pictures }) => {
  return (
    <div className={classes.carrousel}>
      <nav className={classes.controls}></nav>
      <div className={classes.items}>
        {pictures.map((picture, index) => (
          <div key={index} className={classes.item}>
            <img src={picture} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
