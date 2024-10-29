import React from 'react';
import Hero from '../Components/Home/HomeHero/HomeHero';
import ServiceSection from '../Components/Home/ServiceSection/ServiceSection';
import SearchSection from '../Components/Home/SearchSection/SearchSection';
import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';
import AltoContraste from '../Components/Acessibility/AltoContraste/AltoContraste';

function HomePage() {
  return (
    <div className="flex flex-col">
      <main>
        <Hero />
        <ServiceSection />
        <SearchSection />
        <DarkMode />
      </main>
    </div>
  );
}

export default HomePage;