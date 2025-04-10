'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiLaravel, SiTailwindcss, SiMysql, SiDocker } from 'react-icons/si';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Plataforma Administrativa LART',
      description: 'Sistema integral de gestión empresarial con panel administrativo y aplicación marketplace para clientes. Desarrollado con Next.js y Laravel.',
      image: '/images/projects/lart-platform.jpg',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Docker', icon: <SiDocker /> },
      ],
      githubUrl: 'https://github.com/tu-usuario/lart-platform',
      liveUrl: 'https://lart-platform.com',
      features: [
        'Autenticación con roles y permisos',
        'Dashboard con métricas en tiempo real',
        'Gestión de clientes y productos',
        'Sistema de pagos integrado',
        'Interfaz responsiva para móviles'
      ]
    },
    {
      id: 2,
      title: 'Portafolio Personal',
      description: 'Portafolio personal desarrollado con Next.js y Tailwind CSS, con animaciones y diseño moderno.',
      image: '/images/projects/portfolio.jpg',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'React Icons', icon: <FaCode /> },
      ],
      githubUrl: 'https://github.com/tu-usuario/portfolio',
      liveUrl: 'https://tu-portfolio.com',
      features: [
        'Diseño moderno y responsivo',
        'Animaciones al hacer scroll',
        'Secciones para experiencia y habilidades',
        'Modo oscuro',
        'Optimizado para SEO'
      ]
    },
    {
      id: 3,
      title: 'Aplicación de Gestión de Tareas',
      description: 'Aplicación web para gestión de tareas y proyectos con autenticación y almacenamiento en la nube.',
      image: '/images/projects/task-manager.jpg',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ],
      githubUrl: 'https://github.com/tu-usuario/task-manager',
      liveUrl: 'https://task-manager-demo.com',
      features: [
        'Autenticación de usuarios',
        'Creación y asignación de tareas',
        'Filtros y búsqueda avanzada',
        'Notificaciones en tiempo real',
        'Estadísticas de productividad'
      ]
    }
  ];

  return (
    <section className={styles.projects} ref={projectsRef} id="proyectos">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <FaCode className={styles.titleIcon} /> Proyectos Personales
        </h2>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${activeProject === project.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className={styles.projectImage}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={400}
                  className={styles.image}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <FaGithub /> Código
                    </Link>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <FaExternalLinkAlt /> Demo
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.technology}>
                      <span className={styles.techIcon}>{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <div className={styles.projectFeatures}>
                  <h4 className={styles.featuresTitle}>Características:</h4>
                  <ul className={styles.featuresList}>
                    {project.features.map((feature, index) => (
                      <li key={index} className={styles.featureItem}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 