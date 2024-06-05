import styles from './skeleton.module.scss'

const Skeleton = ({
  width = '100%',
  height = '18px',
  isIcon = false,
  isCircle = false,
  className = '',
}) => {
  const Tag = isIcon ? 'i' : 'div'

  return (
    <Tag
      className={`${isIcon ? styles.skeleton_icon : styles.skeleton}
      ${isCircle ? styles.skeleton_circle : ''} ${className}`}
      style={{ width, height }}
    />
  )
}

export default Skeleton
