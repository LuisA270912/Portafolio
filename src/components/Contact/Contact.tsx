'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Contact.module.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      value: '910551366',
      link: 'tel:+51910551366',
      color: '#3b82f6'
    },
    {
      icon: <FaEnvelope />,
      title: 'Correo',
      value: 'luis_angel27@hotmail.com',
      link: 'mailto:luis_angel27@hotmail.com',
      color: '#ef4444'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Luis Arroyo Urrutia',
      link: 'https://www.linkedin.com/in/luis-arroyo-urrutia-910349345/',
      color: '#0a66c2'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'LuisA270912',
      link: 'https://github.com/LuisA270912',
      color: '#333'
    }
  ];

  return (
    <section className={styles.contact} ref={contactRef} id="contacto">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <FaPaperPlane className={styles.titleIcon} /> Contacto
        </h2>
        
        <div className={styles.contactGrid}>
          {contactInfo.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
              style={{ '--card-color': item.color } as React.CSSProperties}
            >
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <div className={styles.contactInfo}>
                <h3 className={styles.contactTitle}>{item.title}</h3>
                <p className={styles.contactValue}>{item.value}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className={styles.contactMessage}>
          <p>¿Tienes un proyecto en mente? ¡Contáctame y trabajemos juntos!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 