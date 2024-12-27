import { useParams, Navigate } from 'react-router';
import styles from './Housing.module.sass';
import logements from '../../assets/logements.json';
import Rating from '../../components/Rating';

const Housing = () => {
  const { id } = useParams();
  const logement = logements.find(log => log.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className={styles.housing}>
      <div className={styles.gallery}>
        <img src={logement.cover} alt={logement.title} />
        {/* todo: add right arrow and left arrow buttons  */}
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.titles}>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>
          <div className={styles.host}>
            <h3>{logement.host.name}</h3>
            <div>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.tags}>
            {logement.tags.map(tag => (
              <div key={tag} title={tag}>
                {tag}
              </div>
            ))}
          </div>
          <Rating rating={logement.rating} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.description}>
            <h3>Description</h3>
          </div>
          <div className={styles.equipments}>
            <h3>Equipements</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Housing;
