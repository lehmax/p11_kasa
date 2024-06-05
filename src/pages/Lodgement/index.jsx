import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import Accordion from '../../components/Accordion'
import Carrousel from '../../components/Carrousel'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import LodgementLoading from './LodgmentLoading'

import Error from '../Error'

import styles from './lodgement.module.scss'

const Lodgement = () => {
  const { pathname } = useLocation()
  const id = pathname.split('/').pop()
  const { data, error, isLoading } = useFetch('/logements.json')

  if (isLoading) return <LodgementLoading />

  if (error) return <Error />

  const lodgement = data.find((lodgement) => lodgement.id === id)

  if (!lodgement) return <Error />

  const {
    title,
    pictures,
    host,
    rating,
    tags,
    location,
    description,
    equipments,
  } = lodgement

  return (
    <main>
      <Carrousel pictures={pictures} />
      <div className={styles.data}>
        <div className={styles.section_title}>
          <div className={styles.title}>
            <h1>{title}</h1>
            <span className={styles.location}>{location}</span>
          </div>
          <Tags tags={tags} />
        </div>
        <div className={styles.section_host}>
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>

      <div className={styles.details}>
        {description ? (
          <Accordion title="Description">
            <p>{description}</p>
          </Accordion>
        ) : null}

        {equipments ? (
          <Accordion title="Équipements">
            <ul className={styles.equipments}>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Accordion>
        ) : null}
      </div>
    </main>
  )
}

export default Lodgement
