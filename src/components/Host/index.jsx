import classes from "./host.module.scss";

const Host = ({ host }) => {
  const { name, picture } = host;

  return (
    <div className={classes.host}>
      <strong className={classes.name}>{name}</strong>
      <img src={picture} alt={`Photo of ${name}`} />
    </div>
  );
};

export default Host;
