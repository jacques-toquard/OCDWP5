import React from "react";
import styles from "./Footer.module.sass";
import logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
