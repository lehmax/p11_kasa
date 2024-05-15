import logo from "../../assets/logo_white.svg";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={logo}></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
