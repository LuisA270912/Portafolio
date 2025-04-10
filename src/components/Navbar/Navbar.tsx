'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Luis Dev
                </Link>

                <button
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.menuIcon}></span>
                </button>

                <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <Link href="/" className={styles.navLink}>Inicio</Link>
                    <Link href="/proyectos" className={styles.navLink}>Proyectos</Link>
                    <Link href="/sobre-mi" className={styles.navLink}>Sobre Mí</Link>
                    <Link href="/contacto" className={styles.navLink}>Contacto</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 