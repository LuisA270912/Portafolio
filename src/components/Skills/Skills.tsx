'use client';

import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import { FaCode, FaDatabase, FaServer, FaCodeBranch, FaDocker } from 'react-icons/fa';
import { 
  SiPhp, 
  SiJavascript, 
  SiDart, 
  SiMysql, 
  SiMongodb, 
  SiLaravel, 
  SiNextdotjs, 
  SiReact, 
  SiFlutter, 
  SiWordpress, 
  SiTailwindcss, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiDocker, 
  SiGithubactions 
} from 'react-icons/si';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Lenguajes de programación',
      icon: <FaCode />,
      skills: [
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Dart', icon: <SiDart /> },
        { name: 'SQL', icon: <FaDatabase /> },
      ]
    },
    {
      title: 'Frameworks',
      icon: <FaCode />,
      skills: [
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'WordPress', icon: <SiWordpress /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ]
    },
    {
      title: 'Bases de datos',
      icon: <FaDatabase />,
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ]
    },
    {
      title: 'Desarrollo Backend y APIs',
      icon: <FaServer />,
      skills: [
        { name: 'REST API', icon: <FaServer /> },
        { name: 'Laravel Sanctum', icon: <SiLaravel /> },
      ]
    },
    {
      title: 'Control de versiones',
      icon: <FaCodeBranch />,
      skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Postman', icon: <SiPostman /> },
      ]
    },
    {
      title: 'Contenedores y despliegue',
      icon: <FaDocker />,
      skills: [
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'GitHub Actions', icon: <SiGithubactions /> },
      ]
    }
  ];

  return (
    <section className={styles.skills} ref={skillsRef} id="habilidades">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <FaCode className={styles.titleIcon} /> Conocimientos Técnicos
        </h2>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.title}
              </h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 