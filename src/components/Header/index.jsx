import { Link } from "react-router";
import styles from "./Header.module.sass";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
