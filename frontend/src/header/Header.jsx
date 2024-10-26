import React from 'react';
import styles from './Header.module.css';
import NavLink from './NavLink';
import Button from './Button';

const navItems = [
  { text: 'PAGINA INICIAL', href: '/' },
  { text: 'SERVIÇOS PRESTADOS', href: '/servicos' },
  { text: 'PESQUISA DE SERVIÇOS', href: '/pesquisa' },
  { text: 'PERGUNTAS FREQUENTES', href: '/faq' },
  { text: 'SOBRE NÓS', href: '/sobre' },
];

function Header() {
  return (
    <header className={styles.header}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eecfa1c5dc045aadbcef86e204348aed40a807884549cf8a6dc37da3eabd559?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" className={styles.logo} alt="Company logo" />
      <nav className={styles.navLinks}>
        {navItems.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>
      <div className={styles.buttonGroup}>
        <Button variant="outlined" text="Área do Cliente" />
        <Button variant="filled" text="Entre em contato" />
      </div>
    </header>
  );
}

export default Header;