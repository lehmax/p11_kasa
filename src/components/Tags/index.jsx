import styles from './tags.module.scss'

const Tags = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) => (
        <span className={styles.tag} key={index}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
