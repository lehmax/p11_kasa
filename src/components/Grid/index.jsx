import React from "react";

import classes from "./grid.module.scss";

const Grid = ({ children }) => {
  return <div className={classes.grid}>{children}</div>;
};

export default Grid;
