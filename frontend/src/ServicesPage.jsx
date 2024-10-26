import React from 'react';
import Hero from './services/Hero';
import Services from './services/ServicesSection';
import DarkMode from './darkmode/Darkmode';

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