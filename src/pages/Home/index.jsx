import { useFetch } from '../../hooks/useFetch'

import Card from '../../components/Card'
import Error from '../../components/Error'
import HeroBanner from '../../components/HeroBanner'

import heroImage from '../../assets/hero_home.jpg'
import SkeletonCard from '../../components/Card/SkeletonCard'

import styles from './home.module.scss'

const Grid = () => {
  const { isLoading, data, isError } = useFetch('/logements.json')
  const isData = !isLoading && !isError && data

  return (
    <div className={styles.grid}>
      {isLoading && [0, 1, 2].map((index) => <SkeletonCard key={index} />)}
      {isError && <Error />}
      {isData &&
        data.map((lodgement) => <Card data={lodgement} key={lodgement.id} />)}
    </div>
  )
}

const Home = () => {
  return (
    <main>
      <HeroBanner image={heroImage} title="Chez vous, partout et ailleurs" />
      <Grid />
    </main>
  )
}

export default Home
