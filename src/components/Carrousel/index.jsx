import { useState } from "react";
import classes from "./carrousel.module.scss";

const NAV_KEY = {
  prev: -1,
  next: 1,
};

const Carrousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const lastPictureIndex = pictures.length - 1;
  const isCarrousel = pictures.length > 1;

  const onNav = (type) => {
    const { next, prev } = NAV_KEY;
    if (type !== next && type !== prev && lastPictureIndex !== 0) return;

    let index;

    if (type === prev) {
      index = current !== 0 ? current + prev : lastPictureIndex;
    }

    if (type === next) {
      index = current !== lastPictureIndex ? current + next : 0;
    }

    setCurrent(index);
  };

  const pagination = () => (
    <span className={classes.pagination}>{`${current + 1}/${
      pictures.length
    }`}</span>
  );

  return (
    <div className={classes.carrousel}>
      {isCarrousel && (
        <nav>
          <button
            onClick={() => onNav(NAV_KEY.prev)}
            className={`${classes.prev} ${classes.btn}`}
          >
            <i className="fa-solid fa-chevron-left white"></i>
          </button>
          <button
            onClick={() => onNav(NAV_KEY.next)}
            className={`${classes.next} ${classes.btn}`}
          >
            <i className="fa-solid fa-chevron-right white"></i>
          </button>
          {pagination()}
        </nav>
      )}
      <div className={classes.items}>
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`${classes.item} ${
              current === index ? classes.active : ""
            }`}
          >
            <img src={picture} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
