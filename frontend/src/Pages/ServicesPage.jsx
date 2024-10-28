import React from 'react';
import Hero from '../Components/Services/ServicesHero/ServicesHero';
import Services from '../Components/Services/ServicesSection/ServicesSection';
import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';

const ServicesPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <DarkMode />
    </div>
  );
};

export default ServicesPage;