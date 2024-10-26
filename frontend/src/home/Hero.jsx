import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc8d2cf535b143471ca1c7c38209ea068458fa64d08fa84b422c2d8a78f9b4ac?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
          className={styles.heroImage} 
          alt="Urban cleaning background" 
        />
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>
            Geo-SO, especialista em limpeza urbana
          </h1>
          <button className={styles.ctaButton}>
            Saiba Mais!
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;