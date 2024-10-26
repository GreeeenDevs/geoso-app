import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7a411807a254f94aa42f3a62ef355fb30ec0b7baf728c8270991d1c3b8a071?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
          className={styles.heroImage} 
          alt=""
        />
        <h1 className={styles.heroTitle}>Sobre Nós</h1>
      </div>
    </section>
  );
};

export default Hero;