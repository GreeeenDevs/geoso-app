import React from 'react';
import Hero from '../Components/About/AboutHero/AboutHero';
import AboutSection1 from '../Components/About/AboutSection1/AboutSection1';
import AboutSection2 from '../Components/About/AboutSection2/AboutSection2';
import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';

function AboutPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection1 />
      <AboutSection2 />
      <DarkMode />
    </div>
  );
}

export default AboutPage;