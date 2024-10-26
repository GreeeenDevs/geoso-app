import React from "react";
import styles from './AboutSection2.module.css';

function AboutSection2() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Sed ut perspiciatis unde omnis</h2>
            <p className={styles.description}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6141348e3985796e012e880db5bbeb501d42991f692fe3cb4a023875eda057cd?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
            className={styles.image} 
            alt="Illustrative image for the about section"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection2;