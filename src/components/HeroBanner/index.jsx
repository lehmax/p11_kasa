import classes from "./hero.module.scss";

const HeroBanner = ({ image, opacity = 60, title = "" }) => {
  const opacityValue = parseInt(opacity) / 100;
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,${opacityValue}), rgba(0,0,0,${opacityValue})), url(${image})`,
  };

  return (
    <header className={classes.hero} style={style}>
      {title !== "" ? <h1 className={classes.title}>{title}</h1> : title}
    </header>
  );
};

export default HeroBanner;
