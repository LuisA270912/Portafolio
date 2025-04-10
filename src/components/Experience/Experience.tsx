'use client';

import { useEffect, useRef } from 'react';
import styles from './Experience.module.css';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCheckCircle, FaTools } from 'react-icons/fa';
import { SiNextdotjs, SiLaravel, SiPhp, SiMysql, SiTailwindcss, SiGit, SiGithub, SiPostman, SiTrello } from 'react-icons/si';

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tools = [
    { name: 'Next.js 14', icon: <SiNextdotjs /> },
    { name: 'Laravel 10', icon: <SiLaravel /> },
    { name: 'PHP 8.2', icon: <SiPhp /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'REST API', icon: <FaTools /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Trello', icon: <SiTrello /> },
  ];

  return (
    <section className={styles.experience} ref={experienceRef} id="experiencia">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <FaBriefcase className={styles.titleIcon} /> Experiencia Profesional
        </h2>
        
        <div className={styles.experienceCard}>
          <div className={styles.header}>
            <h3 className={styles.role}>
              <FaBriefcase className={styles.icon} /> Practicante de Ing. de Software
            </h3>
            <h4 className={styles.company}>
              <FaBuilding className={styles.icon} /> Grupo LART S.A.C
            </h4>
            <span className={styles.period}>
              <FaCalendarAlt className={styles.icon} /> Julio 2024 - Diciembre 2024
            </span>
          </div>
          
          <p className={styles.description}>
            Desarrollé una solución integral compuesta por una plataforma administrativa y una aplicación tipo
            marketplace, orientada a modernizar la gestión de clientes y automatizar procesos financieros.
          </p>

          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>
              <FaCheckCircle className={styles.icon} /> Logros:
            </h5>
            <ul className={styles.achievements}>
              <li>Implementé interfaces responsivas con Next.js 14 y APIS REST con Laravel 10, logrando una integración eficiente entre frontend y backend.</li>
              <li>Desarrollé un sistema de autenticación con roles y mejoré la estructura del código para facilitar su mantenimiento y escalabilidad.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>
              <FaTools className={styles.icon} /> Herramientas:
            </h5>
            <div className={styles.tools}>
              {tools.map((tool) => (
                <span key={tool.name} className={styles.tool}>
                  <span className={styles.toolIcon}>{tool.icon}</span>
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 