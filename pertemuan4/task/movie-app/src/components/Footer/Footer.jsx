import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>
                    &copy;2021 by @notRaihan.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
