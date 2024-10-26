import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

const services = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b565294b9c4ddd18268b3cd9beaefefd33268177d4238856df840b00dbf1913?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d",
    title: "Varrição",
    description: "Consulte as sarjetas de ruas e calçadas em áreas de alto movimento de pedestres."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddd32db859ba42a70e4a6502c728efb46a71c20b07e6807c49cb0321600b38f2?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d",
    title: "Cata-bagulho",
    description: "Consulte remoção de objetos volumosos descartados nas calçadas em dias e horários previamente agendados"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2da66bf12eb11286379fb6d8cf7e0920c314ed95bcd0d7bfd7e8b8d08aabf441?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d",
    title: "Grandes corredores",
    description: "Consulte serviços completos de manutenção urbana em importantes avenidas."
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea1559a894be924f6947d141ad89d528071370a89c86e30cf3ea6db15cd1cb5?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d",
    title: "Feiras",
    description: "Consulte a realização da limpeza, lavagem e o transporte de resíduos orgânicos para o destino adequado."
  }
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <button className={styles.ctaButton}>Conheça Nossos Serviços</button>
      </div>
    </section>
  );
};

export default ServicesSection;