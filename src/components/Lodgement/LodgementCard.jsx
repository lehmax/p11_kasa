import { Link } from "react-router-dom";

import classes from "./lodgement.module.scss";

const LodgementCard = ({ lodgement }) => {
  const { id, title, cover } = lodgement;

  const style = {
    backgroundImage: `url(${cover})`,
  };

  return (
    <Link className={classes.card} style={style} to={`/lodgement/${id}`}>
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
      </div>
    </Link>
  );
};

export default LodgementCard;
