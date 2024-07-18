import React from 'react';
import styles from './Portfolio.module.css'; // Importe seu arquivo CSS
import Image from 'next/image';
import mobile from '@/assets/img/portifolio/mobile.png'
import panun from '@/assets/img/portifolio/panun.png'
import law from '@/assets/img/portifolio/law.png'
const Portfolio = () => {
  const projects = [
    { id: 1, imageUrl: law, title: 'JustLaw - Advicacia' },
    { id: 2, imageUrl: mobile, title: 'Furt - Loja de Móveis' },
    { id: 3, imageUrl: panun, title: 'Panun- Imobiliária' },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className={styles.portfolioContainer}>
      {projects.map(project => (
        <div key={project.id} className={styles.projectCard} style={{marginBottom:"12px"}}>
          <Image src={project.imageUrl} alt={project.title} className={styles.projectImage} />
          <h3 style={{textAlign:"center"}}>{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export  {Portfolio}