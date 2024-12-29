import { useParams, Navigate } from 'react-router';
import { useState } from 'react';
import styles from './Housing.module.sass';
import logements from '../../assets/logements.json';
import Rating from '../../components/Rating';
import Collapsible from '../../components/Collapsible';

const Housing = () => {
  const { id } = useParams();
  const logement = logements.find(log => log.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? logement.pictures.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev =>
      prev === logement.pictures.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.housing}>
      <div className={styles.gallery}>
        <img src={logement.pictures[currentImageIndex]} alt={logement.title} />
        {logement.pictures.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className={styles.prevButton}
              aria-label="Previous image"
            >
              <svg
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={handleNextImage}
              className={styles.nextButton}
              aria-label="Next image"
            >
              <svg
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className={styles.counter}>
              {currentImageIndex + 1}/{logement.pictures.length}
            </div>
          </>
        )}
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
          <Collapsible title="Description">{logement.description}</Collapsible>
          <Collapsible title="Equipements">
            <ul>
              {logement.equipments.map(equipment => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default Housing;
