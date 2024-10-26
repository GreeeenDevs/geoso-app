import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/17a27aba776330ba6b585dcd93c80e72a151d0771ceebe7d62d78c03bbda1319?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
          className={styles.heroImage} 
          alt="Background image for services section"
        />
        <h1 className={styles.heroTitle}>Serviços Prestados</h1>
      </div>
    </section>
  );
};

export default Hero;