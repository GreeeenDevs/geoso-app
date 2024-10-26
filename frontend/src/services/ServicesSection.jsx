import React from 'react';
import styles from './ServicesSection.module.css';
import ServiceList from './ServiceList';

const ServicesSection = () => {
  const leftColumnServices = [
    'Lavagem especial de equipamentos públicos',
    'Limpeza e conservação de monumentos públicos',
    'Varrição manual e mecanizada de vias e logradouros públicos',
    'Varrição de vias públicas durante e pós feiras-livres',
    'Lavagem e desinfecção de vias públicas pós feiras-livres',
    'Coleta seletiva e transporte de resíduos sólidos orgânicos de feiras-livres',
    'Coleta e transporte de resíduos sólidos de varrição'
  ];

  const rightColumnServices = [
    'Limpeza e desobstrução de bueiros',
    'Bocas de lobo e bocas de leão',
    'Raspagem de terra e areia nas sarjetas',
    'Capinação de vias e logradouros públicos',
    'Pintura de meio fio, postes, muros e demais elementos',
    'Coleta programada e transporte de resíduos volumosos e entulhos',
    'Limpeza de áreas externas e internas de assentamentos urbanos informais'
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>SERVIÇOS REALIZADOS</h2>
      <div className={styles.container}>
        <div className={styles.columnWrapper}>
          <div className={styles.column}>
            <ServiceList services={leftColumnServices} />
          </div>
          <div className={styles.column}>
            <ServiceList services={rightColumnServices} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;