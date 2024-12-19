import styles from "./Footer.module.sass";
import Logo from "../Logo";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo color="white" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
