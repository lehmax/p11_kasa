import styles from './accordion.module.scss'

const Accordion = ({ title, children }) => {
  return (
    <div className={styles.accordionContainer}>
      <details className={styles.accordion}>
        <summary>
          <h2 className={styles.title}>{title}</h2>
        </summary>
        <div className={styles.content}>{children}</div>
      </details>
    </div>
  )
}

export default Accordion
