import classes from "./tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <div className={classes.tags}>
      {tags.map((tag, index) => (
        <span key={index} className={classes.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
