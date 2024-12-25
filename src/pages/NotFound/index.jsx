import { Link } from "react-router";
import styles from "./NotFound.module.sass";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
};

export default NotFound;
