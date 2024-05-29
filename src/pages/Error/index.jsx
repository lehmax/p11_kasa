import { Link } from "react-router-dom";

import classes from "./404.module.scss";

const Error = () => {
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>404</h1>
      <h2 className={classes.subtitle}>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className={classes.redirection}>
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};

export default Error;
