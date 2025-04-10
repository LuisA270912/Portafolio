'use client';

import { useEffect, useRef } from 'react';
import styles from './Education.module.css';

const Education = () => {
    const educationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (educationRef.current) {
            observer.observe(educationRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.education} id="educacion">
            <div className={styles.container}>
                <h2 className={styles.title}>Formación Académica</h2>

                <div className={styles.timeline} ref={educationRef}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineHeader}>
                                <span className={styles.period}>2022 - 2024</span>
                                <span className={styles.level}>Educación Superior</span>
                            </div>

                            <div className={styles.institution}>
                                <h3 className={styles.institutionName}>SENATI</h3>
                                <h4 className={styles.degree}>Ing. Tec. de Software con IA</h4>
                            </div>

                            <ul className={styles.highlights}>
                                <li>Especialización en desarrollo de software</li>
                                <li>Enfoque en Inteligencia Artificial</li>
                                <li>Proyectos prácticos empresariales</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education; 