import { useParams, Navigate } from "react-router";
import styles from "./Housing.module.sass";
import logements from "../../assets/logements.json";

const Housing = () => {
  const { id } = useParams();
  const logement = logements.find((log) => log.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className={styles.housing}>
      <div className={styles.gallery}>
        <img src={logement.cover} alt={logement.title} />
        {/* todo: add right arrow and left arrow buttons  */}
      </div>
      <div className={styles.description}>
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
        {/* todo: add host info and ratings  */}
      </div>
    </div>
  );
};

export default Housing;
