import Skeleton from '../Skeleton'

import styles from './card-skeleton.module.scss'

const SkeletonCard = () => {
  return (
    <div className={`${styles.card}`}>
      <Skeleton
        className={`${styles.skeleton_icon} fa-solid fa-camera`}
        height="64px"
        isIcon={true}
        width="64px"
      />
      <Skeleton className={styles.skeleton_title} height="24px" width="100%" />
    </div>
  )
}

export default SkeletonCard
