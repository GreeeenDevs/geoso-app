import React from "react";
import styles from './AboutSection1.module.css';

function AboutSection1() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/276bfe8f759dc0750a4771608535aba0baeeb0fc610afd1e05ae6e4dbabfc9b4?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
            className={styles.image} 
            alt="Illustrative image for the about section"
          />
        </div>
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Sed ut perspiciatis unde omnis</h2>
            <p className={styles.description}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
              Neque porro quisquam est, qui dolorem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection1;