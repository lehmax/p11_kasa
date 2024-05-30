import Skeleton from "../Skeleton";

import classes from "./card-skeleton.module.scss";

const SkeletonCard = () => {
  return (
    <div className={`${classes.card}`}>
      <Skeleton
        width="64px"
        height="64px"
        isIcon={true}
        className={`${classes.skeleton_icon} fa-solid fa-camera`}
      />
      <Skeleton width="100%" height="24px" className={classes.skeleton_title} />
    </div>
  );
};

export default SkeletonCard;
