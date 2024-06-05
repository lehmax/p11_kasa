import logo from '../../assets/logo_white.svg'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
