import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <img alt="Kasa logo" src={logo} />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
