import styles from './Home.module.sass'
import logements from '../../assets/logements.json'

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Chez vous, partout et ailleurs</h1>
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
