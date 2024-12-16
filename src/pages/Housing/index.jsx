import { useParams, Navigate } from 'react-router'
import styles from './Housing.module.sass'
import logements from '../../assets/logements.json'

const Housing = () => {
  const { id } = useParams()
  const logement = logements.find(log => log.id === id)

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className={styles.housing}>
      <h1>{logement.title}</h1>
      <div className={styles.gallery}>
        <img src={logement.cover} alt={logement.title} />
      </div>
      {/* Add more housing details here */}
    </div>
  )
}

export default Housing
