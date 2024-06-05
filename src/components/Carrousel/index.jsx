import { useState } from 'react'
import styles from './carrousel.module.scss'

const NAV_KEY = {
  prev: -1,
  next: 1,
}

const Pagination = ({ position }) => {
  return <span className={styles.pagination}>{position}</span>
}

const Carrousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0)
  const countPictures = pictures.length
  const lastPictureIndex = countPictures - 1
  const isCarrousel = countPictures > 1
  const currentPosition = current + 1

  const onNav = (type) => {
    const { next, prev } = NAV_KEY
    if (type !== next && type !== prev && lastPictureIndex !== 0) return

    let index

    if (type === prev) {
      index = current !== 0 ? current + prev : lastPictureIndex
    }

    if (type === next) {
      index = current !== lastPictureIndex ? current + next : 0
    }

    setCurrent(index)
  }

  return (
    <div className={styles.carrousel}>
      {isCarrousel ? (
        <nav>
          <button
            className={`${styles.prev} ${styles.btn}`}
            onClick={() => onNav(NAV_KEY.prev)}
            type="button"
          >
            <i className="fa-solid fa-chevron-left white" />
          </button>
          <button
            className={`${styles.next} ${styles.btn}`}
            onClick={() => onNav(NAV_KEY.next)}
            type="button"
          >
            <i className="fa-solid fa-chevron-right white" />
          </button>
          <Pagination position={`${currentPosition}/${countPictures}`} />
        </nav>
      ) : null}
      <div className={styles.items}>
        {pictures.map((picture, index) => (
          <div
            className={`${styles.item} ${
              current === index ? styles.active : ''
            }`}
            key={index}
          >
            <img
              alt={`Image ${currentPosition} of ${countPictures}`}
              src={picture}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carrousel
