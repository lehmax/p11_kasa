import Skeleton from "../../components/Skeleton";

import classes from "./lodgement.module.scss";

const LodgmentLoading = () => {
  return (
    <main>
      <Skeleton height="415px" />
      <div className={classes.data}>
        <div className={classes.column}>
          <div className={classes.title}>
            <Skeleton className="mb-1" width="500px" height="50px" />
            <Skeleton width="50%" />
          </div>
          <div className="row">
            <Skeleton width="100px" />
            <Skeleton width="100px" />
          </div>
        </div>
        <div className={classes.column}>
          <div className="col-2">
            <Skeleton width="100px" />
            <Skeleton isCircle={true} width="64px" height="64px" />
          </div>
          <Skeleton width="200px" height="40px" />
        </div>
      </div>

      <div className={classes.details}>
        <Skeleton height="49px" />
        <Skeleton height="49px" />
      </div>
    </main>
  );
};

export default LodgmentLoading;
