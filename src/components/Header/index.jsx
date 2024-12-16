import { Link } from 'react-router'
import styles from './Header.module.sass'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="Kasa" />
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
    )
}

export default Header
