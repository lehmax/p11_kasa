import Skeleton from "../../components/Skeleton";

import classes from "./lodgement.module.scss";

const LodgmentLoading = () => {
  return (
    <main>
      <Skeleton height="415px" />
      <div className={classes.data}>
        <div className={classes.section_title}>
          <div className={classes.title}>
            <Skeleton
              className={classes.mb_1}
              width="clamp(200px,60vw,500px)"
              height="50px"
            />
            <Skeleton width="50%" />
          </div>
          <div className={classes.row}>
            <Skeleton width="100px" />
            <Skeleton width="100px" />
          </div>
        </div>
        <div className={classes.section_host}>
          <div className={classes.col_2}>
            <Skeleton width="clamp(40px,10vw,100px)" />
            <Skeleton isCircle={true} width="64px" height="64px" />
          </div>
          <Skeleton width="clamp(140px,5vw,200px)" height="40px" />
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
