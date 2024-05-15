import classes from "./accordion.module.scss";

const Accordion = ({ title, children }) => {
  return (
    <div className={classes.accordionContainer}>
      <details className={classes.accordion}>
        <summary>
          <h2 className={classes.title}>{title}</h2>
        </summary>
        <div className={classes.content}>{children}</div>
      </details>
    </div>
  );
};

export default Accordion;
