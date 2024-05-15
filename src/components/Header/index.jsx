import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Kasa logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;
