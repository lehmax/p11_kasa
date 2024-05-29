import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import Accordion from "../../components/Accordion";
import Carrousel from "../../components/Carrousel";
import Error from "../../components/Error";
import Host from "../../components/Host";
import Loading from "../../components/Loading";
import Rating from "../../components/Rating";
import Tags from "../../components/Tags";

import classes from "./lodgement.module.scss";

const Lodgement = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();
  const { data, error, isLoading } = useFetch("/logements.json");

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  const lodgement = data.find((lodgement) => lodgement.id === id);

  if (!lodgement) return <Error />;

  const {
    title,
    pictures,
    host,
    rating,
    tags,
    location,
    description,
    equipments,
  } = lodgement;

  return (
    <main>
      <Carrousel pictures={pictures} />
      <div className={classes.data}>
        <div className={classes.column}>
          <div className={classes.title}>
            <h1>{title}</h1>
            <span className={classes.location}>{location}</span>
          </div>
          <Tags tags={tags} />
        </div>
        <div className={classes.column}>
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>

      <div className={classes.details}>
        {description ? (
          <Accordion title="Description">
            <p>{description}</p>
          </Accordion>
        ) : null}

        {equipments ? (
          <Accordion title="Équipements">
            <ul className={classes.equipments}>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Accordion>
        ) : null}
      </div>
    </main>
  );
};

export default Lodgement;
