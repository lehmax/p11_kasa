import Skeleton from '../../components/Skeleton'

import styles from './lodgement.module.scss'

const LodgmentLoading = () => {
  return (
    <main>
      <Skeleton height="415px" />
      <div className={styles.data}>
        <div className={styles.section_title}>
          <div className={styles.title}>
            <Skeleton
              className={styles.mb_1}
              width="clamp(200px,60vw,500px)"
              height="50px"
            />
            <Skeleton width="50%" />
          </div>
          <div className={styles.row}>
            <Skeleton width="100px" />
            <Skeleton width="100px" />
          </div>
        </div>
        <div className={styles.section_host}>
          <div className={styles.col_2}>
            <Skeleton width="clamp(40px,10vw,100px)" />
            <Skeleton isCircle={true} width="64px" height="64px" />
          </div>
          <Skeleton width="clamp(140px,5vw,200px)" height="40px" />
        </div>
      </div>

      <div className={styles.details}>
        <Skeleton height="49px" />
        <Skeleton height="49px" />
      </div>
    </main>
  )
}

export default LodgmentLoading
