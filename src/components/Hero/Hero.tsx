'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const title = titleRef.current;
        if (title) {
            title.classList.add(styles.animate);
        }
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 ref={titleRef} className={styles.title}>
                        <span className={styles.greeting}>¡Hola! Soy</span>
                        <span className={styles.name}>Luis</span>
                        <span className={styles.role}>Desarrollador Full Stack</span>
                    </h1>

                    <p className={styles.description}>
                        Creo experiencias web únicas y funcionales utilizando las últimas tecnologías.
                        Especializado en desarrollo frontend y backend con enfoque en la experiencia del usuario.
                    </p>

                    <div className={styles.cta}>
                        <a href="#proyectos" className={styles.primaryButton}>
                            Ver Proyectos
                        </a>
                        <a href="#contacto" className={styles.secondaryButton}>
                            Contactar
                        </a>
                    </div>
                </div>

                <div className={styles.techStack}>
                    <div className={styles.techItem}>React</div>
                    <div className={styles.techItem}>Next.js</div>
                    <div className={styles.techItem}>TypeScript</div>
                    <div className={styles.techItem}>Node.js</div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 