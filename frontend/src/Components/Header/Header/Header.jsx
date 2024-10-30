import React from 'react';
import styles from './Header.module.css';
import NavLink from '../NavLink/NavLink';
import Button from '../Button/Button';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';
import { Navbar, Nav, Container } from 'react-bootstrap';

const navItems = [
  { text: 'PAGINA INICIAL', href: '/' },
  { text: 'SERVIÇOS PRESTADOS', href: '/servicos' },
  { text: 'PESQUISA DE SERVIÇOS', href: '/pesquisa' },
  { text: 'PERGUNTAS FREQUENTES', href: '/faq' },
  { text: 'SOBRE NÓS', href: '/sobre' },
];

function Header() {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? '#888888' : '#fff',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <header style={sectionStyle} className={styles.header}>
      <Navbar expand="lg" className="w-100">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eecfa1c5dc045aadbcef86e204348aed40a807884549cf8a6dc37da3eabd559?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d"
              className={styles.logo}
              alt="Logotipo da GeoSO"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto`}>
              {navItems.map((item) => (
                <Nav.Link
                  key={item.href}
                  href={item.href}
                  className={`d-flex`}
                >
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
            <div className={styles.buttonGroup}>
              <a href="/login">
                <Button variant="outlined" text="Área do Cliente" className={`btn-sm`} />
              </a>
                <Button variant="filled" text="Entre em contato" className={`btn-sm`} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
