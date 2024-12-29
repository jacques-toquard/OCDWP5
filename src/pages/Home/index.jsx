import { Link } from 'react-router';
import styles from './Home.module.sass';
import logements from '../../assets/logements.json';
import GrayedImage from '../../components/GrayedImage';
import falaise from '../../assets/falaise.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.falaise}>
        <GrayedImage src={falaise} alt="Falaise" height="6rem" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={styles.grid}>
        {logements.map(logement => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <article className={styles.card}>
              <img src={logement.cover} alt={logement.title} />
              <h2>{logement.title}</h2>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
