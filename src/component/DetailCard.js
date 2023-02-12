import React from 'react'
import { useParams } from 'react-router-dom'

//data
import { data } from './Cards'

//style
import styles from '../styles/DetailCard.module.css'

const DetailCard = () => {
  const params = useParams()
  const id = params.id

  return (
    <div className={styles.container}>
      <img className={styles.img} src={data[id].img} alt="img" />
      <div className={styles.boxInfo}>
        <h3 className={styles.title}>{data[id].title}</h3>
        <p className={styles.description}>{data[id].description}</p>
        <p className={styles.website}>
          Website : <a href={data[id].website}> {data[id].website} </a>
        </p>
          <span className={styles.time}>{data[id].time} </span>
      </div>
    </div>
  )
}

export default DetailCard
