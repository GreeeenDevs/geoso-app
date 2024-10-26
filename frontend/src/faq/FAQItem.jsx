import React from 'react';
import styles from './FAQList.module.css';

const AccordionItem = ({ title }) => {
  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionTitle}>
        <h3 className={styles.title}>{title}</h3>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f10e1d095a3de92b7e2cb7c7a6aece65f801c6828bb3a013de45400e47cae40d?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" className={styles.icon} alt="" />
      </div>
    </div>
  );
};

export default AccordionItem;