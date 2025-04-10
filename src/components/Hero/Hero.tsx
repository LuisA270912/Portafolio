'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
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
        <section id="inicio" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <h1 ref={titleRef} className={styles.title}>
                            <span className={styles.greeting}>¡Hola! Soy</span>
                            <span className={styles.name}>Luis</span>
                            <span className={styles.role}>Desarrollador Full Stack</span>
                        </h1>

                        <p className={styles.description}>
                            Creo experiencias web únicas y funcionales utilizando las últimas tecnologías.
                            Especializado en desarrollo frontend y backend con enfoque en la experiencia del usuario.
                        </p>

                        <div className={styles.socialLinks}>
                            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaTwitter />
                            </a>
                        </div>

                        <div className={styles.cta}>
                            <a href="#proyectos" className={styles.primaryButton}>
                                Ver Proyectos
                            </a>
                            <a href="#contacto" className={styles.secondaryButton}>
                                Contactar
                            </a>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/profile.jpg"
                                alt="Luis - Desarrollador Full Stack"
                                width={400}
                                height={400}
                                className={styles.profileImage}
                                priority
                            />
                            <div className={styles.imageBackground}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.techStack}>
                    <div className={styles.techItem}>
                        <FaReact className={styles.techIcon} />
                        <span>React</span>
                    </div>
                    <div className={styles.techItem}>
                        <SiNextdotjs className={styles.techIcon} />
                        <span>Next.js</span>
                    </div>
                    <div className={styles.techItem}>
                        <SiTypescript className={styles.techIcon} />
                        <span>TypeScript</span>
                    </div>
                    <div className={styles.techItem}>
                        <FaNodeJs className={styles.techIcon} />
                        <span>Node.js</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 