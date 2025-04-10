'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'educacion', 'experiencia', 'habilidades', 'proyectos', 'contacto'];
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => scrollToSection('inicio')}>
                    Luis Dev
                </div>

                <button
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <button 
                        className={`${styles.navLink} ${activeSection === 'inicio' ? styles.active : ''}`}
                        onClick={() => scrollToSection('inicio')}
                    >
                        Inicio
                    </button>
                    <button 
                        className={`${styles.navLink} ${activeSection === 'educacion' ? styles.active : ''}`}
                        onClick={() => scrollToSection('educacion')}
                    >
                        Educación
                    </button>
                    <button 
                        className={`${styles.navLink} ${activeSection === 'experiencia' ? styles.active : ''}`}
                        onClick={() => scrollToSection('experiencia')}
                    >
                        Experiencia
                    </button>
                    <button 
                        className={`${styles.navLink} ${activeSection === 'habilidades' ? styles.active : ''}`}
                        onClick={() => scrollToSection('habilidades')}
                    >
                        Habilidades
                    </button>
                    <button 
                        className={`${styles.navLink} ${activeSection === 'proyectos' ? styles.active : ''}`}
                        onClick={() => scrollToSection('proyectos')}
                    >
                        Proyectos
                    </button>
                    <button 
                        className={`${styles.navLink} ${activeSection === 'contacto' ? styles.active : ''}`}
                        onClick={() => scrollToSection('contacto')}
                    >
                        Contacto
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 