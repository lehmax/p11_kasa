import React from "react";

import { useFetch } from "../../hooks/useFetch";

import Error from "../Error";
import Loading from "../Loading";

import LodgementCard from "./LodgementCard";
import classes from "./lodgement.module.scss";

const LodgementsGrid = () => {
  const { data, error, isLoading } = useFetch("/logements.json");

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  if (data.length > 6) data.length = 6;

  return (
    <div className={classes.grid}>
      {data.map((lodgement) => (
        <LodgementCard key={lodgement.id} lodgement={lodgement} />
      ))}
    </div>
  );
};

export default LodgementsGrid;
