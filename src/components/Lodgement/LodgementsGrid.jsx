import React from "react";

import Error from "../Error";
import Loading from "../Loading";
import LodgementCard from "./LodgementCard";
import classes from "./lodgement.module.scss";

const LodgementsGrid = ({ lodgements, isLoading, isError }) => {
  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <div className={classes.grid}>
      {lodgements.map((lodgement) => (
        <LodgementCard key={lodgement.id} lodgement={lodgement} />
      ))}
    </div>
  );
};

export default LodgementsGrid;
