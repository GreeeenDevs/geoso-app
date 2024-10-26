import React from 'react';
import styles from './Header.module.css';

function NavLink({ text, href, isActive }) {
  return (
    <a href={href} className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}>
      {text}
    </a>
  );
}

export default NavLink;