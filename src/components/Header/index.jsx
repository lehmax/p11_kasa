import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Kasa logo" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
