import React from 'react';
import Hero from './home/Hero';
import ServiceSection from './home/ServiceSection';
import SearchSection from './home/SearchSection';
import DarkMode from './darkmode/Darkmode';
import AltoContraste from './AltoContraste/AltoContraste';

function HomePage() {
  return (
    <div className="flex flex-col">
      <main>
        <Hero />
        <ServiceSection />
        <SearchSection />
        <AltoContraste />
        <DarkMode />
      </main>
    </div>
  );
}

export default HomePage;