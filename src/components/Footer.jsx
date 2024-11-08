import styles from'../style/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; 2024 Taller Fotográfico. Todos los derechos reservados.</p>
                <ul className={styles.footerLinks}>
                    <li><a href="/about">Sobre Nosotros</a></li>
                    <li><a href="/contact">Contacto</a></li>
                    <li><a href="/privacy">Política de Privacidad</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;