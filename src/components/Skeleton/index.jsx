import classes from "./skeleton.module.scss";

const Skeleton = ({
  width = "100%",
  height = "18px",
  isIcon = false,
  isCircle = false,
  className = "",
}) => {
  const Tag = isIcon ? "i" : "div";

  return (
    <Tag
      style={{ width, height }}
      className={`${isIcon ? classes.skeleton_icon : classes.skeleton}
      ${isCircle ? classes.skeleton_circle : ""} ${className}`}
    ></Tag>
  );
};

export default Skeleton;
