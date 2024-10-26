import React from 'react';
import styles from './Footer.module.css';

const SocialIcon = ({ iconSrc }) => (
  <img loading="lazy" src={iconSrc} alt="" className={styles.socialIcon} />
);

export default SocialIcon;