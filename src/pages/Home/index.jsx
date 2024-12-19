import styles from './Home.module.sass'
import logements from '../../assets/logements.json'
import Falaise from '../../components/Falaise'

const Home = () => {
  return (
    <div className={styles.home}>
      <Falaise />
      <div className={styles.grid}>
        {logements.map(logement => (
          <article key={logement.id} className={styles.card}>
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Home
