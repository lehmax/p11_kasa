import styles from './host.module.scss'

const Host = ({ host }) => {
  const { name, picture } = host

  return (
    <div className={styles.host}>
      <strong className={styles.name}>{name}</strong>
      <img alt={`Photo of ${name}`} src={picture} />
    </div>
  )
}

export default Host
