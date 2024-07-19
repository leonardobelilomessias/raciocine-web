import React from 'react';
import styles from './Portfolio.module.css'; // Importe seu arquivo CSS
import Image from 'next/image';
import mobile from '@/assets/img/portifolio/mobile.png'
import panun from '@/assets/img/portifolio/panun.png'
import law from '@/assets/img/portifolio/law.png'
import jadoo from '@/assets/img/portifolio/jadoo.png'
import restoran from '@/assets/img/portifolio/restoran.png'
import aincon from '@/assets/img/portifolio/aincon.png'
import Link from 'next/link';



const Portfolio = () => {
  const projects = [
    { id: 1, imageUrl: law, title: 'JustLaw - Advocacia',link:"https://staging.d3f5suzarwf7hs.amplifyapp.com/" },
    { id: 2, imageUrl: mobile, title: 'Furt - Loja de Móveis',link:"https://main.d7axt89tyyt32.amplifyapp.com/" },
    { id: 3, imageUrl: panun, title: 'Panun- Imobiliária',link:"https://www.panun.com.br/" },
    { id: 4, imageUrl: jadoo, title: 'Agência de Viagens',link:"https://main.d1umjli9caql7n.amplifyapp.com/" },
    { id: 4, imageUrl: restoran, title: 'Restaurante',link:"https://main.d2e11u7w7kgtw2.amplifyapp.com/" },
    { id: 4, imageUrl: aincon, title: 'Serviço de Reparo',link:"https://aincon.raciocine.com/" },



    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className={styles.portfolioContainer}>
      {projects.map(project => (
        <Link href={project.link} key={project.id} target='_blank'> 
        <div key={project.id} className={styles.projectCard} style={{marginBottom:"12px"}}>
          <Image src={project.imageUrl} alt={project.title} className={styles.projectImage} />
          <h3 style={{textAlign:"center"}}>{project.title}</h3>
        </div>
        </Link>
      ))}
    </div>
  );
};

export  {Portfolio}