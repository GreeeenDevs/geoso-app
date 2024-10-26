import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ iconSrc, title, description }) => {
  return (
    <article className={styles.serviceCard}>
      <img src={iconSrc} alt="" className={styles.serviceIcon} />
      <div className={styles.serviceContent}>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;